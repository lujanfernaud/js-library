import { Book } from './book'

class Form {
  constructor(app) {
    this.app = app
    this.titleInput = document.getElementById('form-input-title')
    this.authorInput = document.getElementById('form-input-author')
    this.submitButton = document.getElementById('submit')
  }

  watchSubmitButton() {
    this.submitButton.addEventListener('click', (event) => {
      event.preventDefault()

      this._submitBook()
    })
  }

  // private

  _submitBook() {
    if (!this.titleInput.validity.valid || !this.authorInput.validity.valid) {
      return false
    }

    const title = this.titleInput.value
    const author = this.authorInput.value
    const url = document.getElementById('form-input-url').value
    const options = document.getElementById('form-select').options
    const status = options[options.selectedIndex].text

    const book = new Book(title, author, url, status)

    this.app.bookManager.add(book)

    this.app.modal.closeModal()
  }
}

export { Form }
