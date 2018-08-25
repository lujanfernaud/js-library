class Modal {
  constructor() {
    this.modal = document.getElementById('modal')
    this.backdrop = document.getElementById('modal-backdrop')
    this.openButtons = document.querySelectorAll('.open-modal')
    this.closeButton = document.getElementById('close-modal')
    this.titleInput = document.getElementById('form-input-title')
  }

  watch() {
    this._watchOpenButtons()
    this._watchCloseButton()
    this._watchBackdrop()
  }

  closeModal() {
    return this.modal.classList.remove('display-flex')
  }

  // private

  _watchOpenButtons() {
    this.openButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.modal.classList.add('display-flex')

        // For some reason the 'autofocus' HTML property doesn't work.
        this.titleInput.focus()
      })
    })
  }

  _watchCloseButton() {
    this.closeButton.addEventListener('click', () => {
      this.closeModal()
    })
  }

  _watchBackdrop() {
    this.backdrop.addEventListener('click', () => {
      this.closeModal()
    })
  }
}

export { Modal }
