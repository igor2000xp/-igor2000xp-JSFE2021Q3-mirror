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

/***/ "./app/app.component.js":
/*!******************************!*\
  !*** ./app/app.component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponent\": () => (/* binding */ appComponent)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\n\nclass AppComponent extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\n  constructor(config) {\n    super(config)\n  }\n}\n\nconst appComponent = new AppComponent({\n  selector: 'app-root',\n  template: `\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n    `\n});\n\n//# sourceURL=webpack:///./app/app.component.js?");

/***/ }),

/***/ "./app/app.module.js":
/*!***************************!*\
  !*** ./app/app.module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appModule\": () => (/* binding */ appModule)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ \"./app/app.component.js\");\n/* harmony import */ var _common_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/app.header */ \"./app/common/app.header.js\");\n/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ \"./app/app.routes.js\");\n\n\n\n\n\n\nclass AppModule extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMModule {\n  constructor(config) {\n    super(config)\n  }\n}\n\nconst appModule = new AppModule({\n  components: [\n    _common_app_header__WEBPACK_IMPORTED_MODULE_2__.appHeader\n  ],\n\n  bootstrap: _app_component__WEBPACK_IMPORTED_MODULE_1__.appComponent,\n  routes: _app_routes__WEBPACK_IMPORTED_MODULE_3__.appRoutes\n})\n\n//# sourceURL=webpack:///./app/app.module.js?");

/***/ }),

/***/ "./app/app.routes.js":
/*!***************************!*\
  !*** ./app/app.routes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRoutes\": () => (/* binding */ appRoutes)\n/* harmony export */ });\n/* harmony import */ var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page.component */ \"./app/pages/home-page.component.js\");\n/* harmony import */ var _pages_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tabs-page.component */ \"./app/pages/tabs-page.component.js\");\n/* harmony import */ var _common_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/not-found.component */ \"./app/common/not-found.component.js\");\n\n\n\n\nconst appRoutes = [\n  { path: '', component: _pages_home_page_component__WEBPACK_IMPORTED_MODULE_0__.homePageComponent },\n  { path: 'tabs', component: _pages_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__.tabsPageComponent },\n  { path: '**', component: _common_not_found_component__WEBPACK_IMPORTED_MODULE_2__.notFound }\n]\n\n\n//# sourceURL=webpack:///./app/app.routes.js?");

/***/ }),

/***/ "./app/common/app.header.js":
/*!**********************************!*\
  !*** ./app/common/app.header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appHeader\": () => (/* binding */ appHeader)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\n\nclass AppHeader extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\n  constructor(config) {\n    super(config)\n  }\n}\n\nconst appHeader = new AppHeader({\n  selector: 'app-header',\n\n  template: `\n\n    <nav class=\"indigo\">\n      <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo header__logo\" >Art-quiz</a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a href=\"#\">Главная</a></li>\n          <li><a href=\"#tabs\">Табы</a></li>\n        </ul>\n      </div>\n    </nav> \n      \n  `,\n\n  styles: `\n    .header__logo {\n      margin-left: 20px;\n    }\n  \n  `\n})\n\n//# sourceURL=webpack:///./app/common/app.header.js?");

/***/ }),

/***/ "./app/common/not-found.component.js":
/*!*******************************************!*\
  !*** ./app/common/not-found.component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notFound\": () => (/* binding */ notFound)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\n\nclass NotFound extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\n  constructor(config) {\n    super(config)\n  }\n}\n\nconst notFound = new NotFound({\n  selector: 'app-not-found',\n\n  template: `\n    <div class=\"not-found-block\">\n      <div>\n        <h2 class=\"red darken-1\">Страница не найдена</h2>\n        <a href=\"#\">Перейти на главную</a>\n      </div>\n    </div>   \n  `,\n  styles: `\n  .not-found-block {\n    display: flex; \n    align-items: center; \n    justify-content: center;\n  }\n  `\n})\n\n//# sourceURL=webpack:///./app/common/not-found.component.js?");

/***/ }),

/***/ "./app/pages/home-page.component.js":
/*!******************************************!*\
  !*** ./app/pages/home-page.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageComponent\": () => (/* binding */ homePageComponent)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\n\nclass HomePageComponent extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\n  constructor(config) {\n    super(config);\n\n    this.data = {\n      title: 'Главная страница работает!!!',\n      linkTitle: 'Здесь будет картина.'\n    }\n  }\n\n  events() {\n    return {\n      'click .js-link': 'goToTabs'\n    };\n  }\n\n  goToTabs(event) {\n    event.preventDefault();\n    framework__WEBPACK_IMPORTED_MODULE_0__.router.navigate('tabs');\n  }\n\n\n}\n\nconst homePageComponent = new HomePageComponent ({\n  selector: 'app-home-page',\n  template: `\n  <div class=\"row\">\n  <div class=\"home__block col s6 offset-s3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">{{ title }}</span>\n        <p>{{linkTitle}}</p>\n      </div>\n      <div class=\"card-action\">\n        <a href=\"#not-existing-path\" class=\"js-link\">Перейти на другую страницу</a>\n      </div>\n    </div>\n  </div>\n</div>\n  `,\n  styles: `\n  .home__block { \n    margin-top: 40px;\n    marg \n  }\n  \n  `\n\n});\n\n\n\n//# sourceURL=webpack:///./app/pages/home-page.component.js?");

/***/ }),

/***/ "./app/pages/tabs-page.component.js":
/*!******************************************!*\
  !*** ./app/pages/tabs-page.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsPageComponent\": () => (/* binding */ tabsPageComponent)\n/* harmony export */ });\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n\n\nclass TabsPageComponent extends framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\n  constructor(config) {\n    super(config);\n  }\n\n  events() {\n    return {\n      'click .collapsible': 'onTabClick'  \n    }\n  };\n\n  onTabClick({target}) {\n    // console.log(event);\n    if(!target.classList.contains('collapsible-header')) return;\n\n    this.el.querySelectorAll('.js-tab').forEach(e => {\n      e.classList.remove('active');\n    });\n    target.parentNode.classList.add('active');\n  }\n}\n\nconst tabsPageComponent = new TabsPageComponent ({\n  selector: 'app-tabs-page',\n  template: `\n    \n    <div class=\"row\">\n      <div class=\"col s6 offset-s3\">\n        <ul class=\"collapsible popout collapsible-accordion\">\n\n          <li class=\"js-tab\">\n            <div class=\"collapsible-header\">\n              <i class=\"material-icons\">filter_drama</i>First</div>\n            <div class=\"collapsible-body\">\n              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat.</span>\n            </div>\n          </li>\n\n          <li class=\"js-tab active\">\n            <div class=\"collapsible-header\">\n              <i class=\"material-icons\">place</i>Second</div>\n            <div class=\"collapsible-body\">\n              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat.</span>\n            </div>\n          </li>\n\n          <li class=\"js-tab\">\n            <div class=\"collapsible-header\">\n              <i class=\"material-icons\">whatshot</i>Third</div>\n            <div class=\"collapsible-body\">\n              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat.</span>\n            </div>\n          </li>\n\n         </ul>\n\n      </div>\n    </div>\n  `,\n\n    styles: `\n    .collapsible-accordion {\n      margin-top: 30px\n    }\n\n    .collapsible li.active .collapsible-body {\n      display: block;\n    }\n    `\n});\n\n\n\n//# sourceURL=webpack:///./app/pages/tabs-page.component.js?");

/***/ }),

/***/ "./framework/core/component/component.js":
/*!***********************************************!*\
  !*** ./framework/core/component/component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/util */ \"./framework/tools/util.js\");\n\n\nclass Component {\n  constructor(config) {\n    this.template = config.template;\n    this.selector = config.selector;\n    this.styles = config.styles;\n    this.el = null;\n  }\n\n  render() {\n    initStyles(this.styles)\n\n    this.el = document.querySelector(this.selector);\n    if(!this.el) throw new  Error(`Component with selector ${this.selector} wasn't found` )\n    this.el.innerHTML = compileTemplate(this.template, this.data);\n\n    initEvents.call(this);\n  }\n\n};\n\nfunction initEvents() {\n  if(_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(this.events)) return;\n\n  let events = this.events();\n\n  Object.keys(events).forEach(key => {\n    let listener = key.split(' ');\n\n    this.el\n      .querySelector(listener[1])\n      .addEventListener(listener[0], this[events[key]].bind(this))\n  })\n};\n\nfunction compileTemplate(template, data) {\n  if(_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(data)) return template;\n\n  let regex = /\\{{(.*?)}}/g;\n\n  template = template.replace(regex, (str, d) => {\n      let key = d.trim();\n\n      return data[key];\n\n  })\n\n  return template;\n}\n\nfunction initStyles(styles) {\n  if(_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(styles)) return;\nconsole.log(styles);\n\n  let style = document.createElement('style');\n  style.innerHTML = styles;\n  document.head.appendChild(style);\n\n}\n\n//# sourceURL=webpack:///./framework/core/component/component.js?");

/***/ }),

/***/ "./framework/core/component/init-components.js":
/*!*****************************************************!*\
  !*** ./framework/core/component/init-components.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initComponents\": () => (/* binding */ initComponents)\n/* harmony export */ });\n/* harmony import */ var _render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-component */ \"./framework/core/component/render-component.js\");\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools/util */ \"./framework/tools/util.js\");\n\n\n\nfunction initComponents(bootstrap, components) {\n  // this.bootstrapComponent.render();\n  // this.components.forEach(renderComponent);\n  if(_tools_util__WEBPACK_IMPORTED_MODULE_1__._.isUndefined(bootstrap)) {\n    throw new Error('Bootstrap component is not defined');\n  }\n\n    [bootstrap, ...components].forEach(_render_component__WEBPACK_IMPORTED_MODULE_0__.renderComponent)\n\n};\n\n//# sourceURL=webpack:///./framework/core/component/init-components.js?");

/***/ }),

/***/ "./framework/core/component/render-component.js":
/*!******************************************************!*\
  !*** ./framework/core/component/render-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderComponent\": () => (/* binding */ renderComponent)\n/* harmony export */ });\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/util */ \"./framework/tools/util.js\");\n\n\nfunction renderComponent(c) {\n  if(!_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(c.onInit)) c.onInit();\n\n  c.render();\n  \n  if(!_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(c.afterInit)) c.afterInit();\n }\n\n\n\n//# sourceURL=webpack:///./framework/core/component/render-component.js?");

/***/ }),

/***/ "./framework/core/functions/bootstrap.js":
/*!***********************************************!*\
  !*** ./framework/core/functions/bootstrap.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bootstrap\": () => (/* binding */ bootstrap)\n/* harmony export */ });\nfunction bootstrap(module) {\n  module.start()\n}\n\n//# sourceURL=webpack:///./framework/core/functions/bootstrap.js?");

/***/ }),

/***/ "./framework/core/module.js":
/*!**********************************!*\
  !*** ./framework/core/module.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Module\": () => (/* binding */ Module)\n/* harmony export */ });\n/* harmony import */ var _component_init_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/init-components */ \"./framework/core/component/init-components.js\");\n/* harmony import */ var _routing_init_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing/init-routing */ \"./framework/core/routing/init-routing.js\");\n\n\n\n\n class Module { \n   constructor(config) {\n    this.components = config.components;\n    this.bootstrap = config.bootstrap;\n    this.routes = config.routes;\n   }\n\n   start() {\n    (0,_component_init_components__WEBPACK_IMPORTED_MODULE_0__.initComponents)(this.bootstrap, this.components);\n    (0,_routing_init_routing__WEBPACK_IMPORTED_MODULE_1__.initRouting)(this.routes);\n   };\n\n}\n\n\n//# sourceURL=webpack:///./framework/core/module.js?");

/***/ }),

/***/ "./framework/core/routing/init-routing.js":
/*!************************************************!*\
  !*** ./framework/core/routing/init-routing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initRouting\": () => (/* binding */ initRouting)\n/* harmony export */ });\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/util */ \"./framework/tools/util.js\");\n/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing.module */ \"./framework/core/routing/routing.module.js\");\n\n\n\n\n\n function initRouting(routes) {\n  if(_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(routes)) return;\n\n  let routing = new _routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutingModule(routes);\n  routing.init();\n   \n }\n\n//# sourceURL=webpack:///./framework/core/routing/init-routing.js?");

/***/ }),

/***/ "./framework/core/routing/router.js":
/*!******************************************!*\
  !*** ./framework/core/routing/router.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\nconst router = {\n  getUrl() {\n    return window.location.hash.slice(1);\n  },\n\n  navigate(hash) {\n    window.location.hash = hash;\n  }\n}\n\n//# sourceURL=webpack:///./framework/core/routing/router.js?");

/***/ }),

/***/ "./framework/core/routing/routing.module.js":
/*!**************************************************!*\
  !*** ./framework/core/routing/routing.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RoutingModule\": () => (/* binding */ RoutingModule)\n/* harmony export */ });\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/util */ \"./framework/tools/util.js\");\n/* harmony import */ var _component_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/render-component */ \"./framework/core/component/render-component.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./framework/core/routing/router.js\");\n\n\n\n\n\nclass RoutingModule {\n  constructor(routes) {\n    this.routes = routes;\n\n  }\n\n  init() {\n    window.addEventListener('hashchange', renderRoute.bind(this));\n    renderRoute.call(this);\n  };\n\n}\n\nfunction renderRoute() {\n  let url = _router__WEBPACK_IMPORTED_MODULE_2__.router.getUrl();\n  let route = this.routes.find(r => r.path === url);\n\n  if(_tools_util__WEBPACK_IMPORTED_MODULE_0__._.isUndefined(route)) {\n   route = this.routes.find(r => r.path === '**')\n }\n\n  document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`;\n  (0,_component_render_component__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(route.component);\n};\n\n//# sourceURL=webpack:///./framework/core/routing/routing.module.js?");

/***/ }),

/***/ "./framework/index.js":
/*!****************************!*\
  !*** ./framework/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WFMModule\": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_1__.Module),\n/* harmony export */   \"WFMComponent\": () => (/* reexport safe */ _core_component_component__WEBPACK_IMPORTED_MODULE_0__.Component),\n/* harmony export */   \"bootstrap\": () => (/* reexport safe */ _core_functions_bootstrap__WEBPACK_IMPORTED_MODULE_2__.bootstrap),\n/* harmony export */   \"_\": () => (/* reexport safe */ _tools_util__WEBPACK_IMPORTED_MODULE_3__._),\n/* harmony export */   \"router\": () => (/* reexport safe */ _core_routing_router__WEBPACK_IMPORTED_MODULE_4__.router)\n/* harmony export */ });\n/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/component/component */ \"./framework/core/component/component.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/module */ \"./framework/core/module.js\");\n/* harmony import */ var _core_functions_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/functions/bootstrap */ \"./framework/core/functions/bootstrap.js\");\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/util */ \"./framework/tools/util.js\");\n/* harmony import */ var _core_routing_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/routing/router */ \"./framework/core/routing/router.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./framework/index.js?");

/***/ }),

/***/ "./framework/tools/util.js":
/*!*********************************!*\
  !*** ./framework/tools/util.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_\": () => (/* binding */ _)\n/* harmony export */ });\nconst _ = {\n  delay(ms = 1000) {\n    return new Promise((resolve,  reject) => {\n      setTimeout(() => {\n        resolve()\n      }, ms);\n\n    });\n\n    },\n\n        isUndefined(d) {\n      return typeof d == 'undefined';\n\n  }\n\n\n}\n\n\n\n//# sourceURL=webpack:///./framework/tools/util.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framework */ \"./framework/index.js\");\n/* harmony import */ var _framework_core_functions_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/core/functions/bootstrap */ \"./framework/core/functions/bootstrap.js\");\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ \"./app/app.module.js\");\n\n\n\n\nframework__WEBPACK_IMPORTED_MODULE_0__._.delay(1000).then(() => {\n  (0,_framework_core_functions_bootstrap__WEBPACK_IMPORTED_MODULE_1__.bootstrap)(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.appModule);\n})\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;