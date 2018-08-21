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
    this.watchSubmitButton()
  }

  watchSubmitButton() {
    this.submitButton.addEventListener('click', (element) => {
      element.preventDefault()

      this.submitBook()
    })
  }

  submitBook() {
    const title = this.inputTitle.value
    const author = this.inputAuthor.value
    const status = this.select.value
    const book = new Book(title, author, status)

    return new BookAppender(book, this.library.books).call()
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
  constructor(book, libraryBooks) {
    this.book = book
    this.libraryBooks = libraryBooks
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

    this.addButton('Delete')

    return this.libraryBooks.push(this.book)
  }

  addCell(value) {
    const text = document.createTextNode(value)
    const td = document.createElement('td')

    td.appendChild(text)
    this.tr.appendChild(td)
  }

  addButton(value) {
    const text = document.createTextNode(value)
    const td = document.createElement('td')
    const button = document.createElement('button')

    button.appendChild(text)
    td.appendChild(button)
    this.tr.appendChild(td)
  }
}

const app = new App().start()
