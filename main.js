/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordionList.js":
/*!*************************************!*\
  !*** ./js/modules/accordionList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  // ao ser acionado, adiciona um avento de click\n  // ao accordion clicado. Após isso, inicia o método\n  // toggleAccordion() que adiciona ou remove a activeClass.\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n\n  // recebe como parâmetro um item único do forEach de\n  // accordionList. Para este item, fará o toggle da activeClass\n  // e após isso adicionara outra activeClass ao próximo elemento\n  // do DOM.\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // inicia a função\n  init() {\n    if (this.accordionList.length) {\n      // adiciona, através do método toggleAccordion(),\n      // um activeClass ao primeiro item da accordionList.\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n    // retornar o this é importante para poder utilizar\n    // os métodos de accordionList na nova instância em script.js\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordionList.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    // observerClass é o parâmetro em que deve ser passada\n    // a classe a ser observada.\n    this.observerClass = observerClass;\n\n    // redireciona o this para que possa ser usado\n    // referenciando sempre o objeto de SmoothScroll\n    // e não o this de cada método. This = AnimaNumeros\n    // (AnimaNumeros.addMutationObserver(), por exemplo)\n    this.handleObserver = this.handleObserver.bind(this);\n  }\n\n  // recebe um elemento do dom com número em seu texto\n  // incrementa a partir de 0 até o número final real\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 10 * Math.random());\n  }\n\n  // ativa incrementarNumero() para cada item (número) da array\n  // de this.numeros (primeiro parâmetro do construtor)\n  animaNumeros() {\n    this.numeros.forEach((item) => {\n      this.constructor.incrementarNumero(item);\n    });\n  }\n\n  // Observer que ativará a função acima quando o usuário chegar\n  // na seção da mesma.\n  handleObserver(mutationRecord) {\n    if (mutationRecord[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  // Adiciona o MutationObserver() para verificar\n  // quando a classe ativo é adicionada ao element target\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleObserver);\n    this.observer.observe(this.observerTarget, { attributes: true });\n  }\n\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropDownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropDownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nfunction initDropDownMenu() {\n  const dropDownMenu = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  dropDownMenu.forEach((item) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      item.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropDownMenu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  // Cria a div contendo informações\n  // com o total de animais\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  // Preenche cada animal no DOM\n  const numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n\n  // Anima os números de cada animal\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo');\n    animaNumeros.init();\n  }\n\n  // Puxa os animais através de um arquivo json\n  // e cria cada animal utilizando createAnimal\n  async function criarAnimais() {\n    try {\n      // Fetch, espera a resposta e transforma em json\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n\n      // Após a transformação de json, ativa as funções\n      // para preencher e animar os números\n      animaisJSON.forEach((animal) => preencherAnimais(animal));\n      animaAnimaisNumeros();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  return criarAnimais();\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  function displayValue(donationValue) {\n    const target = document.querySelector('.btc-preco');\n    target.innerHTML = donationValue;\n  }\n\n  async function fetchBitcoin(url) {\n    try {\n      const res = await fetch(url);\n      const jsonBody = await res.json();\n      const donationValue = (50 / jsonBody.BRL.buy).toFixed(4);\n\n      displayValue(donationValue);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n\n  fetchBitcoin('https://blockchain.info/ticker');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto =\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/linksScroll.js":
/*!***********************************!*\
  !*** ./js/modules/linksScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      // quando o parâmetro options não é definido no código,\n      // o padrão adotado para a animação de scroll será\n      // sempre o informado abaixo.\n      this.options = { behavior: 'smooth', block: 'center' };\n    } else {\n      this.options = options;\n    }\n    // redireciona o this para que possa ser usado\n    // referenciando sempre o objeto de SmoothScroll\n    // e não o this de cada método. This = SmoothScroll\n    // (SmoothScroll.addEventLink(), por exemplo)\n    this.scroll = this.scroll.bind(this);\n  }\n\n  scroll(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n\n    section.scrollIntoView(this.options);\n  }\n\n  addEventLink() {\n    this.linksInternos.forEach((item) => {\n      item.addEventListener('click', this.scroll);\n    });\n  }\n\n  init() {\n    // verifica se existe algum parametro informado\n    // em linksinternos\n    if (this.linksInternos.length) {\n      this.addEventLink();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/linksScroll.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      console.log('teste');\n\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // redireciona o this para que possa ser usado\n    // referenciando sempre o objeto de SmoothScroll\n    // e não o this de cada método. This = Modal\n    // (Modal.addModalEvent(), por exemplo)\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueFora = this.cliqueFora.bind(this);\n  }\n\n  // abre ou fecha o modal\n  toggleModal() {\n    this.containerModal.classList.toggle('ativo');\n  }\n\n  // adiciona o evento toggleModal ao modal\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  // fecha o modal ao clicar do lado de fora\n  cliqueFora(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  // adiciona eventos aos elementos do modal\n  addModalEvent() {\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\n    this.containerModal.addEventListener('click', this.cliqueFora);\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/scrollAnimation.js":
/*!***************************************!*\
  !*** ./js/modules/scrollAnimation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnimation)\n/* harmony export */ });\nclass ScrollAnimation {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.checkDistance = this.checkDistance.bind(this);\n  }\n\n  // Pega a distância de cada item em relação\n  // ao topo do site\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade),\n      };\n    });\n  }\n\n  // Verifica a distância em cada objeto\n  // em relação ao scroll do site\n  checkDistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add('ativo');\n      } else if (item.element.classList.contains('ativo')) {\n        item.element.classList.remove('ativo');\n      }\n    });\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener('scroll', this.checkDistance);\n    }\n    return this;\n  }\n\n  // Remove o event de scroll\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scrollAnimation.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  // Ativa a tab de acordo com o index da mesma\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  // Adiciona os eventos nas tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\n  constructor(tooltips) {\n    this.tooltip = document.querySelectorAll(tooltips);\n\n    // redireciona o this para que possa ser usado\n    // referenciando sempre o objeto de SmoothScroll\n    // e não o this de cada método. This = Tooltip\n    // (Tooltip.addTooltipsEvent(), por exemplo)\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  // Move a tooltip de acordo com a posição do mouse\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\n    if (event.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${event.pageX - 190}px`;\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    }\n  }\n\n  // Quando o mouse sai do perímetro do alvo, remove a tooltip\n  // e os eventos de mousemove e mouseleave\n  onMouseLeave({ currentTarget }) {\n    this.tooltipBox.remove();\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\n  }\n\n  // cria a tolltip box e coloca no body\n  criarToolTip(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  // Cria a tooltip e adiciona os eventos de\n  // mousemove e mouseleave ao target\n  onMouseOver({ currentTarget }) {\n    // cria a tooltipbox e coloca em uma propriedade\n    this.criarToolTip(currentTarget);\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n  }\n\n  // Adiciona os eventos de mouseover a cada tooltip existente\n  addTooltipsEvent() {\n    this.tooltip.forEach((item) => {\n      item.addEventListener('mouseover', this.onMouseOver);\n    });\n  }\n\n  init() {\n    if (this.tooltip.length) {\n      this.addTooltipsEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_linksScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/linksScroll.js */ \"./js/modules/linksScroll.js\");\n/* harmony import */ var _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordionList.js */ \"./js/modules/accordionList.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./js/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n/* harmony import */ var _modules_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scrollAnimation.js */ \"./js/modules/scrollAnimation.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// instanciando um novo objeto da classe SmoothScroll\n// o parâmetro é um querySelectorAll\nconst smoothScroll = new _modules_linksScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nsmoothScroll.init();\n\n// instanciando um novo objeto da classe Accordion\n// o parâmetro é um querySelectorAll\nconst accordion = new _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabNav = new _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n  \"[data-tab='menu'] li\",\n  \"[data-tab='content'] section\",\n);\ntabNav.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n  '[data-modal=\"abrir\"]',\n  '[data-modal=\"fechar\"]',\n  '[data-modal=\"container\"]',\n);\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\nconst scrollAnimation = new _modules_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\"[data-anime='scroll']\");\nscrollAnimation.init();\n\n(0,_modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\n  'https://gabrielmenezesnog.github.io/animaisfantasticos/json/animaisApi.json',\n  '.numeros-grid',\n);\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;