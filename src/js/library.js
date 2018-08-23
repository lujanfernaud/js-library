class Library {
  constructor(app) {
    this.app = app
    this.books = []
    this.currentId = -1
  }

  add(book) {
    this.currentId += 1

    book.id = this.currentId

    this.books.push(book)

    this.updateLocalStorage()
  }

  remove(book) {
    const bookIndex = this.books.indexOf(book)

    this.books.splice(bookIndex, 1)

    this.updateLocalStorage()
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

    this.updateLocalStorage()
  }

  updateLocalStorage() {
    if (!this.app.localStorage.available()) { return }

    this.app.localStorage.updateBooks(this.books)
    this.app.localStorage.updateCurrentId(this.currentId)
  }
}

export { Library }
