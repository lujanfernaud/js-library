class Book {
  static get GoodreadsURL() {
    return /(https:\/\/www.goodreads.com\/book\/show\/\d{1,8}\.\w{2,35})/g
  }

  constructor(title, author, url, status) {
    this.title = title
    this.author = author
    this._url = url
    this.status = status
  }

  set url(address) {
    if (address.match(Book.GoodreadsURL)) {
      this._url = address
    }
  }
}

export { Book }
