class LibraryView {
  constructor(app) {
    this.app = app
    this.books = app.library.books
  }

  render() {
    this.books.forEach(book => {
      this._createNewRow()
      this._addInformationToRow(book)
    })
  }

  // private

  _createNewRow() {
    this.tableBody = document.getElementById('table-body')
    this.tr = document.createElement('tr')
    this.tr.id = this.app.library.currentId
    this.tableBody.prepend(this.tr)
  }

  _addInformationToRow(book) {
    this._addTitleCell(book)
    this._addNormalCell(book.author)
    this._addStatusButton(book)
    this._addDeleteButton(book)
  }

  _addTitleCell(book) {
    if (book.url) {
      this._addLinkCell(book)
    } else {
      this._addNormalCell(book.title)
    }
  }

  _addLinkCell(book) {
    const td = document.createElement('td')
    const a = document.createElement('a')
    const text = document.createTextNode(book.title)

    a.href = book.url
    a.target = 'blank'

    a.appendChild(text)
    td.appendChild(a)
    this.tr.appendChild(td)
  }

  _addNormalCell(value) {
    const td = document.createElement('td')
    const text = document.createTextNode(value)

    td.appendChild(text)
    this.tr.appendChild(td)
  }

  _addStatusButton(book) {
    const td = document.createElement('td')
    const button = document.createElement('button')
    const text = document.createTextNode(book.status)

    button.classList.add('button')

    if (book.status === 'Read') {
      button.classList.add('is-success')
    } else {
      button.classList.add('is-warning')
    }

    button.bookLibrary = this.app.library
    button.book = book
    button.onclick = this._updateBookStatus

    button.appendChild(text)
    td.appendChild(button)
    this.tr.appendChild(td)
  }

  _updateBookStatus(event) {
    const button = event.target

    button.firstChild.data = button.firstChild.data === 'Not read' ? 'Read' : 'Not read'

    if (this.book.status === 'Read') {
      button.classList.remove('is-success')
      button.classList.add('is-warning')
    } else {
      button.classList.remove('is-warning')
      button.classList.add('is-success')
    }

    this.bookLibrary.update(this.book, { status: button.firstChild.data })
  }

  _addDeleteButton(book) {
    const td = document.createElement('td')
    const a = document.createElement('a')
    const text = document.createTextNode('Delete')

    a.classList = 'delete is-large'

    a.bookLibrary = this.app.library
    a.book = book
    a.onclick = this._removeBook

    a.appendChild(text)
    td.appendChild(a)
    this.tr.appendChild(td)
  }

  _removeBook(event) {
    const row = event.target.parentNode.parentNode
    const tbody = row.parentNode

    tbody.removeChild(row)

    this.bookLibrary.remove(this.book)
  }
}

export { LibraryView }
