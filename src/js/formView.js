import { Book } from './book'

class FormView {
  constructor(app) {
    this.app = app
    this.submitButton = document.getElementById('submit')
  }

  watch() {
    this._watchFields()
    this._watchSubmitButton()
  }

  // private

  _watchFields() {
    this.titleInput = document.getElementById('form-input-title')
    this.authorInput = document.getElementById('form-input-author')

    const fields = [this.titleInput, this.authorInput]

    fields.forEach(field => {
      field.addEventListener('input', () => {
        return this._changeFieldState(field)
      })
    })
  }

  _changeFieldState(field) {
    if (!field.validity.valid) {
      field.classList.remove('is-primary')
      field.classList.add('is-danger')
    } else {
      field.classList.remove('is-danger')
      field.classList.add('is-primary')
    }
  }

  _watchSubmitButton() {
    this.submitButton.addEventListener('click', () => {
      this._submitBook()
    })
  }

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

    this.app.libraryController.add(book)

    this.app.modal.closeModal()
  }
}

export { FormView }
