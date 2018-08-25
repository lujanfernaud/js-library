class Library {
  constructor(app) {
    this.app = app
    this.books = []
    this.currentId = -1
  }

  add(book) {
    this.currentId += 1

    book = this._downcaseText(book)
    book.id = this.currentId

    this.books.push(book)

    this._updateLocalStorage()
  }

  remove(book) {
    const bookIndex = this.books.indexOf(book)

    this.books.splice(bookIndex, 1)

    this._updateLocalStorage()
  }

  update(book, { title = '', author = '', status = '' } = {}) {
    const bookIndex = this.books.indexOf(book)

    if (title !== '' && title !== book.title) {
      this.books[bookIndex].title = title.toLowerCase()
    }

    if (author !== '' && author !== book.author) {
      this.books[bookIndex].author = author.toLowerCase()
    }

    if (status !== '' && status !== book.status) {
      this.books[bookIndex].status = status
    }

    this._updateLocalStorage()
  }

  // private

  _downcaseText(book) {
    let newBook = book

    newBook.title = book.title.toLowerCase()
    newBook.author = book.author.toLowerCase()

    return newBook
  }

  _updateLocalStorage() {
    if (!this.app.localStorage.available()) { return }

    this.app.localStorage.updateBooks(this.books)
    this.app.localStorage.updateCurrentId(this.currentId)
  }
}

export { Library }
