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
      {
        title: 'Night Watch',
        author: 'Terry Pratchett',
        url: 'https://www.goodreads.com/book/show/47989.Night_Watch',
        status: 'Not read'
      },
      {
        title: 'On the Shortness of Life',
        author: 'Seneca',
        url: 'https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life',
        status: 'Not read'
      },
      {
        title: 'Non Violent Communication',
        author: 'Marshall B. Rosenberg',
        url: 'https://www.goodreads.com/book/show/560861.Non_Violent_Communication',
        status: 'Read'
      },
      {
        title: 'As a Man Thinketh',
        author: 'James Allen',
        url: 'https://www.goodreads.com/book/show/81959.As_a_Man_Thinketh',
        status: 'Read'
      },
      {
        title: 'The War of Art',
        author: 'Steven Pressfield',
        url: 'https://www.goodreads.com/book/show/1319.The_War_of_Art',
        status: 'Read'
      },
      {
        title: 'The Creative Habit',
        author: 'Twyla Tharp',
        url: 'https://www.goodreads.com/book/show/254799.The_Creative_Habit',
        status: 'Read'
      },
      {
        title: 'Mindfulness in Plain English',
        author: 'Bhante Henepola Gunaratana',
        url: 'https://www.goodreads.com/book/show/64369.Mindfulness_in_Plain_English',
        status: 'Read'
      }
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
    const url = document.getElementById('form-input-url').value
    const options = document.getElementById('form-select').options
    const status = options[options.selectedIndex].text

    const book = new Book(title, author, url, status)

    return this.app.bookManager.add(book)
  }
}

class Book {
  constructor(title, author, url, status) {
    this.title = title
    this.author = author
    this.url = url
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
      if (value === book.id || value === book.url) { return }

      if (value === book.title) {
        this.addTitleCell(book)
      } else if (value === book.author) {
        this.addAuthorCell(value)
      }
    })

    this.addStatusButton(book)
    this.addDeleteButton(book)
  }

  addTitleCell(book) {
    const td = document.createElement('td')
    const a = document.createElement('a')
    const text = document.createTextNode(book.title)

    a.href = book.url
    a.target = 'blank'

    a.appendChild(text)
    td.appendChild(a)
    this.tr.appendChild(td)
  }

  addAuthorCell(value) {
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
