const STATUS_INDEX = 2

class App {
  constructor() {
    this.library = new Library()
    this.inputTitle = document.getElementById('form-input-title')
    this.inputAuthor = document.getElementById('form-input-author')
    this.select = document.getElementById('form-select')
    this.submitButton = document.getElementById('submit')
  }

  start() {
    this.populateTable()
    this.watchSubmitButton()
  }

  populateTable() {
    const books = new Seeds().books

    books.forEach(book => {
      new BookAppender(book, this).call()
    })
  }

  watchSubmitButton() {
    this.submitButton.addEventListener('click', (event) => {
      event.preventDefault()

      this.submitBook()
    })
  }

  submitBook() {
    const title = this.inputTitle.value
    const author = this.inputAuthor.value
    const status = this.select.value
    const book = new Book(title, author, status)

    return new BookAppender(book, this).call()
  }

  deleteBook(event) {
    const row = event.target.parentNode.parentNode
    const tbody = row.parentNode

    return tbody.removeChild(row)
  }
}

class Seeds {
  constructor() {
    this.books = [
      { title: 'Night Watch', author: 'Terry Pratchett', status: 'Not read' }
    ]
  }
}

class Library {
  constructor() {
    this.books = []
  }
}

class Book {
  constructor(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
  }
}

class BookAppender {
  constructor(book, app) {
    this.book = book
    this.app = app
    this.libraryBooks = app.library.books
    this.tableBody = document.getElementById('table-body')
    this.tr = document.createElement('tr')
    this.tableBody.appendChild(this.tr)
  }

  call() {
    Object.values(this.book).forEach((value, index) => {
      if (index !== STATUS_INDEX) {
        this.addCell(value)
      } else {
        this.addButton(value)
      }
    })

    this.addButton('Delete', { id: 'delete' })

    return this.libraryBooks.push(this.book)
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
      button.onclick = this.app.deleteBook
    }

    button.appendChild(text)
    td.appendChild(button)
    this.tr.appendChild(td)
  }
}

const app = new App().start()
