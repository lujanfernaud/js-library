const GOODREADS_URL = /(https:\/\/www.goodreads.com\/book\/show\/\d{3,7}\.\w{2,30})/g

class BookManager {
  constructor(app) {
    this.app = app
  }

  addCollection(books) {
    books.forEach(book => { this.add(book) })
  }

  add(book) {
    this.app.library.add(book)

    this.createNewRow()
    this.addInformationToRow(book)
  }

  createNewRow() {
    this.tableBody = document.getElementById('table-body')
    this.tr = document.createElement('tr')
    this.tr.id = this.app.library.currentId
    this.tableBody.prepend(this.tr)
  }

  addInformationToRow(book) {
    this.addTitleCell(book)
    this.addNormalCell(book.author)
    this.addStatusButton(book)
    this.addDeleteButton(book)
  }

  addTitleCell(book) {
    if (book.url.match(GOODREADS_URL)) {
      this.addLinkCell(book)
    } else {
      this.addNormalCell(book.title)
    }
  }

  addLinkCell(book) {
    const td = document.createElement('td')
    const a = document.createElement('a')
    const text = document.createTextNode(book.title)

    a.href = book.url
    a.target = 'blank'

    a.appendChild(text)
    td.appendChild(a)
    this.tr.appendChild(td)
  }

  addNormalCell(value) {
    const td = document.createElement('td')
    const text = document.createTextNode(value)

    td.appendChild(text)
    this.tr.appendChild(td)
  }

  addStatusButton(book) {
    const td = document.createElement('td')
    const button = document.createElement('button')
    const text = document.createTextNode(book.status)

    button.bookLibrary = this.app.library
    button.book = book
    button.onclick = this.updateBookStatus

    button.appendChild(text)
    td.appendChild(button)
    this.tr.appendChild(td)
  }

  updateBookStatus(event) {
    const button = event.target.firstChild

    button.data = button.data === 'Not read' ? 'Read' : 'Not read'

    this.bookLibrary.update(this.book, { status: button.data })
  }

  addDeleteButton(book) {
    const td = document.createElement('td')
    const button = document.createElement('button')
    const text = document.createTextNode('Delete')

    button.bookLibrary = this.app.library
    button.book = book
    button.onclick = this.removeBook

    button.appendChild(text)
    td.appendChild(button)
    this.tr.appendChild(td)
  }

  removeBook(event) {
    const row = event.target.parentNode.parentNode
    const tbody = row.parentNode

    tbody.removeChild(row)

    this.bookLibrary.remove(this.book)
  }
}

export { BookManager }
