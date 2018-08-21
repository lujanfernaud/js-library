const BOOK_STATUS_INDEX = 2

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

class Library {
  constructor() {
    this.books = []
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
    this.libraryBooks = app.library.books
  }

  add(book) {
    this.createNewRow()
    this.addInformationToRow(book)

    return this.libraryBooks.push(book)
  }

  createNewRow() {
    this.tableBody = document.getElementById('table-body')
    this.tr = document.createElement('tr')
    this.tableBody.appendChild(this.tr)
  }

  addInformationToRow(book) {
    Object.values(book).forEach((value, index) => {
      if (index !== BOOK_STATUS_INDEX) {
        this.addCell(value)
      } else {
        this.addButton(value)
      }
    })

    this.addButton('Delete', { id: 'delete' })
  }

  addCell(value) {
    const text = document.createTextNode(value)
    const td = document.createElement('td')

    td.appendChild(text)
    this.tr.appendChild(td)
  }

  addButton(value, { id = '' } = {}) {
    const text = document.createTextNode(value)
    const td = document.createElement('td')
    const button = document.createElement('button')
    button.id = id

    if (id === 'delete') {
      button.onclick = this.removeBook
    }

    button.appendChild(text)
    td.appendChild(button)
    this.tr.appendChild(td)
  }

  removeBook(event) {
    const row = event.target.parentNode.parentNode
    const tbody = row.parentNode

    return tbody.removeChild(row)
  }
}

const app = new App().start()
