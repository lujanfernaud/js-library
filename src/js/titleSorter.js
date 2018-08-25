class TitleSorter {
  asc(books) {
    return books.slice(0).sort(this._compare)
  }

  desc(books) {
    return books.slice(0).sort(this._compare).reverse()
  }

  // private

  _compare(a, b) {
    if (a.title < b.title) { return 1 }
    if (a.title > b.title) { return -1 }

    return 0
  }
}

export { TitleSorter }
