import { LocalStorage } from './localStorage'
import { Library } from './library'
import { BookManager } from './bookManager'
import { Seeds } from './seeds'
import { Modal } from './modal'
import { Form } from './form'

class App {
  constructor() {
    this.localStorage = new LocalStorage()
    this.library = new Library(this)
    this.bookManager = new BookManager(this)
    this.seeds = new Seeds()
    this.modal = new Modal()
    this.form = new Form(this)
  }

  start() {
    this.populateTable()
    this.modal.watch()
    this.form.watch()
  }

  populateTable() {
    if (localStorage.books && this.localStorage.booksNotEmpty()) {
      this.bookManager.addCollection(this.localStorage.books)
    } else {
      this.bookManager.addCollection(this.seeds.books.reverse())
    }
  }
}

new App().start()
