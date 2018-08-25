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

/***/ "./src/js/book.js":
/*!************************!*\
  !*** ./src/js/book.js ***!
  \************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Book\", function() { return Book; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Book = function Book(title, author, url, status) {\n  _classCallCheck(this, Book);\n\n  this.title = title;\n  this.author = author;\n  this.url = url;\n  this.status = status;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/book.js?");

/***/ }),

/***/ "./src/js/bookManager.js":
/*!*******************************!*\
  !*** ./src/js/bookManager.js ***!
  \*******************************/
/*! exports provided: BookManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BookManager\", function() { return BookManager; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BookManager =\n/*#__PURE__*/\nfunction () {\n  _createClass(BookManager, null, [{\n    key: \"GoodreadsURL\",\n    get: function get() {\n      return /(https:\\/\\/www.goodreads.com\\/book\\/show\\/\\d{1,8}\\.\\w{2,35})/g;\n    }\n  }]);\n\n  function BookManager(app) {\n    _classCallCheck(this, BookManager);\n\n    this.app = app;\n  }\n\n  _createClass(BookManager, [{\n    key: \"addCollection\",\n    value: function addCollection(books) {\n      var _this = this;\n\n      books.forEach(function (book) {\n        return _this.add(book);\n      });\n    }\n  }, {\n    key: \"add\",\n    value: function add(book) {\n      this.app.library.add(book);\n\n      this._createNewRow();\n\n      this._addInformationToRow(book);\n    } // private\n\n  }, {\n    key: \"_createNewRow\",\n    value: function _createNewRow() {\n      this.tableBody = document.getElementById('table-body');\n      this.tr = document.createElement('tr');\n      this.tr.id = this.app.library.currentId;\n      this.tableBody.prepend(this.tr);\n    }\n  }, {\n    key: \"_addInformationToRow\",\n    value: function _addInformationToRow(book) {\n      this._addTitleCell(book);\n\n      this._addNormalCell(book.author);\n\n      this._addStatusButton(book);\n\n      this._addDeleteButton(book);\n    }\n  }, {\n    key: \"_addTitleCell\",\n    value: function _addTitleCell(book) {\n      if (book.url.match(BookManager.GoodreadsURL)) {\n        this._addLinkCell(book);\n      } else {\n        this._addNormalCell(book.title);\n      }\n    }\n  }, {\n    key: \"_addLinkCell\",\n    value: function _addLinkCell(book) {\n      var td = document.createElement('td');\n      var a = document.createElement('a');\n      var text = document.createTextNode(book.title);\n      a.href = book.url;\n      a.target = 'blank';\n      a.appendChild(text);\n      td.appendChild(a);\n      this.tr.appendChild(td);\n    }\n  }, {\n    key: \"_addNormalCell\",\n    value: function _addNormalCell(value) {\n      var td = document.createElement('td');\n      var text = document.createTextNode(value);\n      td.appendChild(text);\n      this.tr.appendChild(td);\n    }\n  }, {\n    key: \"_addStatusButton\",\n    value: function _addStatusButton(book) {\n      var td = document.createElement('td');\n      var button = document.createElement('button');\n      var text = document.createTextNode(book.status);\n      button.classList.add('button');\n\n      if (book.status === 'Read') {\n        button.classList.add('is-success');\n      } else {\n        button.classList.add('is-warning');\n      }\n\n      button.bookLibrary = this.app.library;\n      button.book = book;\n      button.onclick = this._updateBookStatus;\n      button.appendChild(text);\n      td.appendChild(button);\n      this.tr.appendChild(td);\n    }\n  }, {\n    key: \"_updateBookStatus\",\n    value: function _updateBookStatus(event) {\n      var button = event.target;\n      button.firstChild.data = button.firstChild.data === 'Not read' ? 'Read' : 'Not read';\n\n      if (this.book.status === 'Read') {\n        button.classList.remove('is-success');\n        button.classList.add('is-warning');\n      } else {\n        button.classList.remove('is-warning');\n        button.classList.add('is-success');\n      }\n\n      this.bookLibrary.update(this.book, {\n        status: button.firstChild.data\n      });\n    }\n  }, {\n    key: \"_addDeleteButton\",\n    value: function _addDeleteButton(book) {\n      var td = document.createElement('td');\n      var a = document.createElement('a');\n      var text = document.createTextNode('Delete');\n      a.classList = 'delete is-large';\n      a.bookLibrary = this.app.library;\n      a.book = book;\n      a.onclick = this._removeBook;\n      a.appendChild(text);\n      td.appendChild(a);\n      this.tr.appendChild(td);\n    }\n  }, {\n    key: \"_removeBook\",\n    value: function _removeBook(event) {\n      var row = event.target.parentNode.parentNode;\n      var tbody = row.parentNode;\n      tbody.removeChild(row);\n      this.bookLibrary.remove(this.book);\n    }\n  }]);\n\n  return BookManager;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/bookManager.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ \"./src/js/book.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Form =\n/*#__PURE__*/\nfunction () {\n  function Form(app) {\n    _classCallCheck(this, Form);\n\n    this.app = app;\n    this.submitButton = document.getElementById('submit');\n  }\n\n  _createClass(Form, [{\n    key: \"watch\",\n    value: function watch() {\n      this._watchFields();\n\n      this._watchSubmitButton();\n    } // private\n\n  }, {\n    key: \"_watchFields\",\n    value: function _watchFields() {\n      var _this = this;\n\n      this.titleInput = document.getElementById('form-input-title');\n      this.authorInput = document.getElementById('form-input-author');\n      var fields = [this.titleInput, this.authorInput];\n      fields.forEach(function (field) {\n        field.addEventListener('input', function () {\n          return _this._changeFieldState(field);\n        });\n      });\n    }\n  }, {\n    key: \"_changeFieldState\",\n    value: function _changeFieldState(field) {\n      if (!field.validity.valid) {\n        field.classList.remove('is-primary');\n        field.classList.add('is-danger');\n      } else {\n        field.classList.remove('is-danger');\n        field.classList.add('is-primary');\n      }\n    }\n  }, {\n    key: \"_watchSubmitButton\",\n    value: function _watchSubmitButton() {\n      var _this2 = this;\n\n      this.submitButton.addEventListener('click', function () {\n        _this2._submitBook();\n      });\n    }\n  }, {\n    key: \"_submitBook\",\n    value: function _submitBook() {\n      if (!this.titleInput.validity.valid || !this.authorInput.validity.valid) {\n        return false;\n      }\n\n      var title = this.titleInput.value;\n      var author = this.authorInput.value;\n      var url = document.getElementById('form-input-url').value;\n      var options = document.getElementById('form-select').options;\n      var status = options[options.selectedIndex].text;\n      var book = new _book__WEBPACK_IMPORTED_MODULE_0__[\"Book\"](title, author, url, status);\n      this.app.bookManager.add(book);\n      this.app.modal.closeModal();\n    }\n  }]);\n\n  return Form;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/library.js":
/*!***************************!*\
  !*** ./src/js/library.js ***!
  \***************************/
/*! exports provided: Library */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Library\", function() { return Library; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Library =\n/*#__PURE__*/\nfunction () {\n  function Library(app) {\n    _classCallCheck(this, Library);\n\n    this.app = app;\n    this.books = [];\n    this.currentId = -1;\n  }\n\n  _createClass(Library, [{\n    key: \"add\",\n    value: function add(book) {\n      this.currentId += 1;\n      book.id = this.currentId;\n      this.books.push(book);\n\n      this._updateLocalStorage();\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(book) {\n      var bookIndex = this.books.indexOf(book);\n      this.books.splice(bookIndex, 1);\n\n      this._updateLocalStorage();\n    }\n  }, {\n    key: \"update\",\n    value: function update(book) {\n      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n          _ref$title = _ref.title,\n          title = _ref$title === void 0 ? '' : _ref$title,\n          _ref$author = _ref.author,\n          author = _ref$author === void 0 ? '' : _ref$author,\n          _ref$status = _ref.status,\n          status = _ref$status === void 0 ? '' : _ref$status;\n\n      var bookIndex = this.books.indexOf(book);\n\n      if (title !== '' && title !== book.title) {\n        this.books[bookIndex].title = title;\n      }\n\n      if (author !== '' && author !== book.author) {\n        this.books[bookIndex].author = author;\n      }\n\n      if (status !== '' && status !== book.status) {\n        this.books[bookIndex].status = status;\n      }\n\n      this._updateLocalStorage();\n    } // private\n\n  }, {\n    key: \"_updateLocalStorage\",\n    value: function _updateLocalStorage() {\n      if (!this.app.localStorage.available()) {\n        return;\n      }\n\n      this.app.localStorage.updateBooks(this.books);\n      this.app.localStorage.updateCurrentId(this.currentId);\n    }\n  }]);\n\n  return Library;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/library.js?");

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocalStorage\", function() { return LocalStorage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LocalStorage =\n/*#__PURE__*/\nfunction () {\n  function LocalStorage() {\n    _classCallCheck(this, LocalStorage);\n\n    this.books = this._setBooks();\n  }\n\n  _createClass(LocalStorage, [{\n    key: \"available\",\n    value: function available() {\n      try {\n        var storage = window['localStorage'];\n        var x = '__storage_test__';\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n      } catch (e) {\n        return e instanceof DOMException && ( // Everything except Firefox.\n        e.code === 22 || // Firefox.\n        e.code === 1014 || // Test name field too, because code might not be present\n        // everything except Firefox.\n        e.name === 'QuotaExceededError' || // Firefox.\n        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // Acknowledge QuotaExceededError only if there's something already stored.\n        storage.length !== 0;\n      }\n    }\n  }, {\n    key: \"booksNotEmpty\",\n    value: function booksNotEmpty() {\n      return JSON.parse(localStorage.getItem('books')).length !== 0;\n    }\n  }, {\n    key: \"updateBooks\",\n    value: function updateBooks(books) {\n      localStorage.setItem('books', JSON.stringify(books));\n    }\n  }, {\n    key: \"updateCurrentId\",\n    value: function updateCurrentId(currentId) {\n      localStorage.setItem('currentId', JSON.stringify(currentId));\n    } // private\n\n  }, {\n    key: \"_setBooks\",\n    value: function _setBooks() {\n      if (this.available() && localStorage.getItem('books')) {\n        return JSON.parse(localStorage.getItem('books'));\n      } else {\n        return [];\n      }\n    }\n  }]);\n\n  return LocalStorage;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/localStorage.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/js/localStorage.js\");\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library */ \"./src/js/library.js\");\n/* harmony import */ var _bookManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookManager */ \"./src/js/bookManager.js\");\n/* harmony import */ var _seeds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seeds */ \"./src/js/seeds.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.localStorage = new _localStorage__WEBPACK_IMPORTED_MODULE_0__[\"LocalStorage\"]();\n    this.library = new _library__WEBPACK_IMPORTED_MODULE_1__[\"Library\"](this);\n    this.bookManager = new _bookManager__WEBPACK_IMPORTED_MODULE_2__[\"BookManager\"](this);\n    this.seeds = new _seeds__WEBPACK_IMPORTED_MODULE_3__[\"Seeds\"]();\n    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_4__[\"Modal\"]();\n    this.form = new _form__WEBPACK_IMPORTED_MODULE_5__[\"Form\"](this);\n  }\n\n  _createClass(App, [{\n    key: \"start\",\n    value: function start() {\n      this.populateTable();\n      this.modal.watch();\n      this.form.watch();\n    }\n  }, {\n    key: \"populateTable\",\n    value: function populateTable() {\n      if (localStorage.books && this.localStorage.booksNotEmpty()) {\n        this.bookManager.addCollection(this.localStorage.books);\n      } else {\n        this.bookManager.addCollection(this.seeds.books.reverse());\n      }\n    }\n  }]);\n\n  return App;\n}();\n\nnew App().start();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal =\n/*#__PURE__*/\nfunction () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n\n    this.modal = document.getElementById('modal');\n    this.backdrop = document.getElementById('modal-backdrop');\n    this.openButtons = document.querySelectorAll('.open-modal');\n    this.closeButton = document.getElementById('close-modal');\n    this.titleInput = document.getElementById('form-input-title');\n  }\n\n  _createClass(Modal, [{\n    key: \"watch\",\n    value: function watch() {\n      this._watchOpenButtons();\n\n      this._watchCloseButton();\n\n      this._watchBackdrop();\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      return this.modal.classList.remove('display-flex');\n    } // private\n\n  }, {\n    key: \"_watchOpenButtons\",\n    value: function _watchOpenButtons() {\n      var _this = this;\n\n      this.openButtons.forEach(function (button) {\n        button.addEventListener('click', function () {\n          _this.modal.classList.add('display-flex'); // For some reason the 'autofocus' HTML property doesn't work.\n\n\n          _this.titleInput.focus();\n        });\n      });\n    }\n  }, {\n    key: \"_watchCloseButton\",\n    value: function _watchCloseButton() {\n      var _this2 = this;\n\n      this.closeButton.addEventListener('click', function () {\n        _this2.closeModal();\n      });\n    }\n  }, {\n    key: \"_watchBackdrop\",\n    value: function _watchBackdrop() {\n      var _this3 = this;\n\n      this.backdrop.addEventListener('click', function () {\n        _this3.closeModal();\n      });\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/seeds.js":
/*!*************************!*\
  !*** ./src/js/seeds.js ***!
  \*************************/
/*! exports provided: Seeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Seeds\", function() { return Seeds; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Seeds = function Seeds() {\n  _classCallCheck(this, Seeds);\n\n  this.books = [{\n    title: 'Night Watch',\n    author: 'Terry Pratchett',\n    url: 'https://www.goodreads.com/book/show/47989.Night_Watch',\n    status: 'Not read'\n  }, {\n    title: 'On the Shortness of Life',\n    author: 'Seneca',\n    url: 'https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life',\n    status: 'Not read'\n  }, {\n    title: 'Non Violent Communication',\n    author: 'Marshall B. Rosenberg',\n    url: 'https://www.goodreads.com/book/show/560861.Non_Violent_Communication',\n    status: 'Read'\n  }, {\n    title: 'As a Man Thinketh',\n    author: 'James Allen',\n    url: 'https://www.goodreads.com/book/show/81959.As_a_Man_Thinketh',\n    status: 'Read'\n  }, {\n    title: 'The War of Art',\n    author: 'Steven Pressfield',\n    url: 'https://www.goodreads.com/book/show/1319.The_War_of_Art',\n    status: 'Read'\n  }, {\n    title: 'The Creative Habit',\n    author: 'Twyla Tharp',\n    url: 'https://www.goodreads.com/book/show/254799.The_Creative_Habit',\n    status: 'Read'\n  }, {\n    title: 'Mindfulness in Plain English',\n    author: 'Bhante Henepola Gunaratana',\n    url: 'https://www.goodreads.com/book/show/64369.Mindfulness_in_Plain_English',\n    status: 'Read'\n  }];\n};\n\n\n\n//# sourceURL=webpack:///./src/js/seeds.js?");

/***/ })

/******/ });