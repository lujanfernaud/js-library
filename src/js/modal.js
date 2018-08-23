class Modal {
  constructor() {
    this.modal = document.getElementById('modal')
    this.backdrop = document.getElementById('modal-backdrop')
    this.openButtons = document.querySelectorAll('.open-modal')
    this.closeButton = document.getElementById('close-modal')
    this.titleInput = document.getElementById('form-input-title')
  }

  watchButtons() {
    this.watchOpenButtons()
    this.watchCloseButton()
    this.watchBackdrop()
  }

  watchOpenButtons() {
    this.openButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        this.modal.classList.add('display-flex')

        // For some reason the 'autofocus' HTML property doesn't work.
        this.titleInput.focus()
      })
    })
  }

  watchCloseButton() {
    this.closeButton.addEventListener('click', (event) => {
      this.closeModal()
    })
  }

  watchBackdrop() {
    this.backdrop.addEventListener('click', (event) => {
      this.closeModal()
    })
  }

  closeModal() {
    return this.modal.classList.remove('display-flex')
  }
}

export { Modal }
