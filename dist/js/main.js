/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const GOODREADS_URL = /(https:\\/\\/www.goodreads.com\\/book\\/show\\/\\d{3,7}\\.\\w{2,30})/g\n\nclass App {\n  constructor() {\n    this.library = new Library(this)\n    this.localStorage = new LocalStorage()\n    this.seeds = new Seeds(this)\n    this.bookManager = new BookManager(this)\n    this.modal = new Modal()\n    this.form = new Form(this)\n  }\n\n  start() {\n    this.populateTable()\n    this.modal.watchButtons()\n    this.form.watchSubmitButton()\n  }\n\n  populateTable() {\n    if (localStorage.books && this.localStorage.booksNotEmpty()) {\n      this.bookManager.addCollection(this.localStorage.books)\n    } else {\n      this.bookManager.addCollection(this.seeds.books.reverse())\n    }\n  }\n}\n\nclass Seeds {\n  constructor(app) {\n    this.books = [\n      {\n        title: 'Night Watch',\n        author: 'Terry Pratchett',\n        url: 'https://www.goodreads.com/book/show/47989.Night_Watch',\n        status: 'Not read'\n      },\n      {\n        title: 'On the Shortness of Life',\n        author: 'Seneca',\n        url: 'https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life',\n        status: 'Not read'\n      },\n      {\n        title: 'Non Violent Communication',\n        author: 'Marshall B. Rosenberg',\n        url: 'https://www.goodreads.com/book/show/560861.Non_Violent_Communication',\n        status: 'Read'\n      },\n      {\n        title: 'As a Man Thinketh',\n        author: 'James Allen',\n        url: 'https://www.goodreads.com/book/show/81959.As_a_Man_Thinketh',\n        status: 'Read'\n      },\n      {\n        title: 'The War of Art',\n        author: 'Steven Pressfield',\n        url: 'https://www.goodreads.com/book/show/1319.The_War_of_Art',\n        status: 'Read'\n      },\n      {\n        title: 'The Creative Habit',\n        author: 'Twyla Tharp',\n        url: 'https://www.goodreads.com/book/show/254799.The_Creative_Habit',\n        status: 'Read'\n      },\n      {\n        title: 'Mindfulness in Plain English',\n        author: 'Bhante Henepola Gunaratana',\n        url: 'https://www.goodreads.com/book/show/64369.Mindfulness_in_Plain_English',\n        status: 'Read'\n      }\n    ]\n  }\n}\n\nclass Form {\n  constructor(app) {\n    this.app = app\n    this.titleInput = document.getElementById('form-input-title')\n    this.authorInput = document.getElementById('form-input-author')\n    this.submitButton = document.getElementById('submit')\n  }\n\n  watchSubmitButton() {\n    this.submitButton.addEventListener('click', (event) => {\n      event.preventDefault()\n\n      this.submitBook()\n    })\n  }\n\n  submitBook() {\n    if (!this.titleInput.validity.valid || !this.authorInput.validity.valid) {\n      return false\n    }\n\n    const title = this.titleInput.value\n    const author = this.authorInput.value\n    const url = document.getElementById('form-input-url').value\n    const options = document.getElementById('form-select').options\n    const status = options[options.selectedIndex].text\n\n    const book = new Book(title, author, url, status)\n\n    this.app.bookManager.add(book)\n\n    this.app.modal.closeModal()\n  }\n}\n\nclass Book {\n  constructor(title, author, url, status) {\n    this.title = title\n    this.author = author\n    this.url = url\n    this.status = status\n  }\n}\n\nclass BookManager {\n  constructor(app) {\n    this.app = app\n  }\n\n  addCollection(books) {\n    books.forEach(book => { this.add(book) })\n  }\n\n  add(book) {\n    this.app.library.add(book)\n\n    this.createNewRow()\n    this.addInformationToRow(book)\n  }\n\n  createNewRow() {\n    this.tableBody = document.getElementById('table-body')\n    this.tr = document.createElement('tr')\n    this.tr.id = this.app.library.currentId\n    this.tableBody.prepend(this.tr)\n  }\n\n  addInformationToRow(book) {\n    this.addTitleCell(book)\n    this.addNormalCell(book.author)\n    this.addStatusButton(book)\n    this.addDeleteButton(book)\n  }\n\n  addTitleCell(book) {\n    if (book.url.match(GOODREADS_URL)) {\n      this.addLinkCell(book)\n    } else {\n      this.addNormalCell(book.title)\n    }\n  }\n\n  addLinkCell(book) {\n    const td = document.createElement('td')\n    const a = document.createElement('a')\n    const text = document.createTextNode(book.title)\n\n    a.href = book.url\n    a.target = 'blank'\n\n    a.appendChild(text)\n    td.appendChild(a)\n    this.tr.appendChild(td)\n  }\n\n  addNormalCell(value) {\n    const td = document.createElement('td')\n    const text = document.createTextNode(value)\n\n    td.appendChild(text)\n    this.tr.appendChild(td)\n  }\n\n  addStatusButton(book) {\n    const td = document.createElement('td')\n    const button = document.createElement('button')\n    const text = document.createTextNode(book.status)\n\n    button.bookLibrary = this.app.library\n    button.book = book\n    button.onclick = this.updateBookStatus\n\n    button.appendChild(text)\n    td.appendChild(button)\n    this.tr.appendChild(td)\n  }\n\n  updateBookStatus(event) {\n    const button = event.target.firstChild\n\n    button.data = button.data === 'Not read' ? 'Read' : 'Not read'\n\n    this.bookLibrary.update(this.book, { status: button.data })\n  }\n\n  addDeleteButton(book) {\n    const td = document.createElement('td')\n    const button = document.createElement('button')\n    const text = document.createTextNode('Delete')\n\n    button.bookLibrary = this.app.library\n    button.book = book\n    button.onclick = this.removeBook\n\n    button.appendChild(text)\n    td.appendChild(button)\n    this.tr.appendChild(td)\n  }\n\n  removeBook(event) {\n    const row = event.target.parentNode.parentNode\n    const tbody = row.parentNode\n\n    tbody.removeChild(row)\n\n    this.bookLibrary.remove(this.book)\n  }\n}\n\nclass Library {\n  constructor(app) {\n    this.app = app\n    this.books = []\n    this.currentId = -1\n  }\n\n  add(book) {\n    this.currentId += 1\n\n    book.id = this.currentId\n\n    this.books.push(book)\n\n    this.updateLocalStorage()\n  }\n\n  remove(book) {\n    const bookIndex = this.books.indexOf(book)\n\n    this.books.splice(bookIndex, 1)\n\n    this.updateLocalStorage()\n  }\n\n  update(book, { title = '', author = '', status = '' } = {}) {\n    const bookIndex = this.books.indexOf(book)\n\n    if (title !== '' && title !== book.title) {\n      this.books[bookIndex].title = title\n    }\n\n    if (author !== '' && author !== book.author) {\n      this.books[bookIndex].author = author\n    }\n\n    if (status !== '' && status !== book.status) {\n      this.books[bookIndex].status = status\n    }\n\n    this.updateLocalStorage()\n  }\n\n  updateLocalStorage() {\n    if (!this.app.localStorage.available()) { return }\n\n    this.app.localStorage.updateBooks(this.books)\n    this.app.localStorage.updateCurrentId(this.currentId)\n  }\n}\n\nclass LocalStorage {\n  constructor() {\n    this.books = this.setBooks()\n  }\n\n  setBooks() {\n    if (this.available() && localStorage.getItem('books')) {\n      return JSON.parse(localStorage.getItem('books'))\n    } else {\n      return []\n    }\n  }\n\n  available() {\n    try {\n      var storage = window['localStorage']\n      var x = '__storage_test__'\n      storage.setItem(x, x)\n      storage.removeItem(x)\n      return true\n    } catch (e) {\n      return e instanceof DOMException && (\n        // Everything except Firefox.\n        e.code === 22 ||\n        // Firefox.\n        e.code === 1014 ||\n        // Test name field too, because code might not be present\n        // everything except Firefox.\n        e.name === 'QuotaExceededError' ||\n        // Firefox.\n        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n      // Acknowledge QuotaExceededError only if there's something already stored.\n      storage.length !== 0\n    }\n  }\n\n  booksNotEmpty() {\n    return JSON.parse(localStorage.getItem('books')).length !== 0\n  }\n\n  updateBooks(books) {\n    localStorage.setItem('books', JSON.stringify(books))\n  }\n\n  updateCurrentId(currentId) {\n    localStorage.setItem('currentId', JSON.stringify(currentId))\n  }\n}\n\nclass Modal {\n  constructor() {\n    this.modal = document.getElementById('modal')\n    this.backdrop = document.getElementById('modal-backdrop')\n    this.openButtons = document.querySelectorAll('.open-modal')\n    this.closeButton = document.getElementById('close-modal')\n    this.titleInput = document.getElementById('form-input-title')\n  }\n\n  watchButtons() {\n    this.watchOpenButtons()\n    this.watchCloseButton()\n    this.watchBackdrop()\n  }\n\n  watchOpenButtons() {\n    this.openButtons.forEach(button => {\n      button.addEventListener('click', (event) => {\n        this.modal.classList.add('display-flex')\n\n        // For some reason the 'autofocus' HTML property doesn't work.\n        this.titleInput.focus()\n      })\n    })\n  }\n\n  watchCloseButton() {\n    this.closeButton.addEventListener('click', (event) => {\n      this.closeModal()\n    })\n  }\n\n  watchBackdrop() {\n    this.backdrop.addEventListener('click', (event) => {\n      this.closeModal()\n    })\n  }\n\n  closeModal() {\n    return this.modal.classList.remove('display-flex')\n  }\n}\n\nnew App().start()\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });