import { LocalStorage } from './localStorage'
import { Library } from './library'
import { LibraryController } from './libraryController'
import { LibraryView } from './libraryView'
import { ModalView } from './modalView'
import { FormView } from './formView'
import { Seeds } from './seeds'

class App {
  constructor() {
    this.localStorage = new LocalStorage()
    this.library = new Library(this)
    this.libraryController = new LibraryController(this)
    this.libraryView = new LibraryView(this)
    this.modalView = new ModalView()
    this.formView = new FormView(this)
    this.seeds = new Seeds()
  }

  start() {
    this._populateLibrary()
    this._watchViews()
  }

  // private

  _populateLibrary() {
    if (localStorage.books && this.localStorage.booksNotEmpty()) {
      this.libraryController.addCollection(this.localStorage.books)
    } else {
      this.libraryController.addCollection(this.seeds.books.reverse())
    }
  }

  _watchViews() {
    this.libraryView.watch()
    this.modalView.watch()
    this.formView.watch()
  }
}

new App().start()
