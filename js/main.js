class App {
  constructor() {
    this.library = new Library()
    this.seeder = new Seeder(this)
    this.form = new Form(this)
    this.bookManager = new BookManager(this)
  }

  start() {
    this.seeder.populateTable()
    this.form.watchSubmitButton()
  }
}

class Seeder {
  constructor(app) {
    this.app = app
    this.books = [
      { title: 'Night Watch', author: 'Terry Pratchett', status: 'Not read' },
      { title: 'Night Watch', author: 'Terry Pratchett', status: 'Not read' }
    ]
  }

  populateTable() {
    this.books.forEach(book => {
      this.app.bookManager.add(book)
    })
  }
}

class Form {
  constructor(app) {
    this.app = app
    this.submitButton = document.getElementById('submit')
  }

  watchSubmitButton() {
    this.submitButton.addEventListener('click', (event) => {
      event.preventDefault()

      this.submitBook()
    })
  }

  submitBook() {
    const title = document.getElementById('form-input-title').value
    const author = document.getElementById('form-input-author').value
    const options = document.getElementById('form-select').options
    const status = options[options.selectedIndex].text

    const book = new Book(title, author, status)

    return this.app.bookManager.add(book)
  }
}

class Book {
  constructor(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
  }
}

class BookManager {
  constructor(app) {
    this.app = app
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
    this.tableBody.appendChild(this.tr)
  }

  addInformationToRow(book) {
    Object.values(book).forEach(value => {
      if (value === book.id) { return }

      if (value !== book.status) {
        this.addInformationCell(value)
      } else {
        this.addStatusButton(book)
      }
    })

    this.addDeleteButton(book)
  }

  addInformationCell(value) {
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

class Library {
  constructor() {
    this.books = []
    this.currentId = -1
  }

  add(book) {
    this.currentId += 1

    book.id = this.currentId

    return this.books.push(book)
  }

  remove(book) {
    const bookIndex = this.books.indexOf(book)

    this.books.splice(bookIndex, 1)
  }

  update(book, { title = '', author = '', status = '' } = {}) {
    const bookIndex = this.books.indexOf(book)

    if (title !== '' && title !== book.title) {
      this.books[bookIndex].title = title
    }

    if (author !== '' && author !== book.author) {
      this.books[bookIndex].author = author
    }

    if (status !== '' && status !== book.status) {
      this.books[bookIndex].status = status
    }
  }
}

new App().start()
