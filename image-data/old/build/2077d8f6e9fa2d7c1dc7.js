'use strict';

import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "./styles/style.scss";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Settings } from "./pages/Settings";
import { Error404 } from "./pages/Error404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Utils } from "./utils/Utils";
var homeInstance = new Home();
var settingsSettings = new Settings();
var categoriesInstance = new Categories();
var error404Instance = new Error404();
var headerInstance = new Header();
var footerInstance = new Footer();
var routes = {
  '/': homeInstance,
  '/settings': settingsSettings,
  '/categories': categoriesInstance
};

var router = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var header, content, footer, request, parsedURL, page;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            header = null || document.getElementById('header_container');
            content = null || document.getElementById('page_container');
            footer = null || document.getElementById('footer_container');
            _context.next = 5;
            return headerInstance.render();

          case 5:
            header.innerHTML = _context.sent;
            _context.next = 8;
            return headerInstance.after_render();

          case 8:
            _context.next = 10;
            return footerInstance.render();

          case 10:
            footer.innerHTML = _context.sent;
            _context.next = 13;
            return footerInstance.after_render();

          case 13:
            request = Utils.parseRequestURL();
            parsedURL = (request.resource ? "/".concat(request.resource) : '/') + (request.id ? '/:id' : '') + (request.verb ? "/".concat(request.verb) : '');
            page = routes[parsedURL] ? routes[parsedURL] : error404Instance;
            _context.next = 18;
            return page.render();

          case 18:
            content.innerHTML = _context.sent;
            _context.next = 21;
            return page.after_render();

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function router() {
    return _ref.apply(this, arguments);
  };
}();

window.addEventListener('hashchange', router);
window.addEventListener('load', router);