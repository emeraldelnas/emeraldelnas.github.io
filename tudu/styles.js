(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, "\n\n/* Imports */\n/* End of Imports */\n/* CSS RESET */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* END OF CSS RESET */\n/* CUSTOM CSS */\nhtml {\n  background-color: #fff;\n}\nbody {\n  background-color: #f3ecc2;\n  color: #222;\n  font-family: 'Roboto', sans-serif;\n  border-radius: 6px;\n  margin: auto;\n  margin: 2rem auto;\n  padding: 8rem 4rem;\n  width: 100%;\n  max-width: 50rem;\n  box-sizing: border-box;\n  box-shadow: 10px 10px 0 hsla(51, 47%, 83%, 1);\n}\nh1 {\n  font-family: 'Times New Roman', sans-serif;\n  font-size: 2.2rem;\n  margin-bottom: .5rem;\n}\np {\n  font-size: 1rem;\n}\nbutton, select,\ninput[type='submit'],\ninput[type='button'],\ninput[type='checkbox'],\ninput[type='range'],\ninput[type='radio'] {\n  cursor: pointer;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  color: #444;\n  background-color: hsla(51, 57%, 76%, 1);\n\n  font-family: inherit;\n  font-size: inherit;\n\n  padding: 10px;\n\n  border: none;\n  border-radius: 6px;\n  outline: none;\n\n  -webkit-appearance: none;\n}\ninput[type='checkbox'],\ninput[type='radio'] {\n  position: relative;\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  margin-right: 2px;\n}\ninput[type='checkbox']:checked,\ninput[type='radio']:checked {\n  background: hsla(51, 57%, 76%, 1);\n}\ninput[type='checkbox']:checked::before,\ninput[type='radio']:checked::before {\n  content: '•';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\ninput[type='checkbox']:checked::before {\n  content: '✔';\n  transform: translateY(-50%) translateY(0.5px) translateX(-6px);\n}\ninput:not([type = checkbox]) {\n  background-color: transparent;\n  border: none;\n}\ninput::placeholder {\n  color: #444;\n}\n#newTask {\n  background-color: hsla(51, 57%, 76%, 1);\n  border-radius: 6px;\n  color: #111;\n  font-size: 1rem;\n  margin: 1rem 0 2rem;\n  padding: .75rem 1rem;\n  width: 20rem;\n}\n#newTask:focus {\n  box-shadow: 0 0 0 2px hsla(51, 46%, 62%, 1);\n}\n.list-wrapper {\n  width: 100%;\n  max-width: 22rem;\n}\n.task-item {\n  display: flex;\n  align-items: center;\n}\n.task-item:not(last-child) {\n  margin-bottom: 1rem;\n}\n.task-name {\n  width: 15.4rem;\n}\n.delete-btn {\n  display: none;\n  background-color: transparent;\n}\n.delete-btn:hover {\n  background-color: hsla(51, 57%, 76%, 1);\n}\n.task-item:hover > .delete-btn {\n  display: block;\n}\n.divider {\n  background-color: hsla(51, 53%, 82%, 1);\n  width: 22.2rem;\n  height: 2px;\n  margin-bottom: 1rem;\n\n}\n.done-list .task-item .task-status, .done-list .task-item .task-name {\n  opacity: 0.7;\n}\n.done-list .task-item .task-name {\n  font-style: italic;\n  text-decoration: line-through;\n}", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":";;AAAA,YAAY;AAIZ,mBAAmB;AAGnB,cAAc;AACd;;;CAGC;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA,qBAAqB;AAIrB,eAAe;AACf;EACE,sBAAsB;AACxB;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,6CAA6C;AAC/C;AAEA;EACE,0CAA0C;EAC1C,iBAAiB;EACjB,oBAAoB;AACtB;AAEA;EACE,eAAe;AACjB;AAKA;;;;;;EAME,eAAe;AACjB;AAGA;;;;EAIE,WAAW;EACX,uCAAuC;;EAEvC,oBAAoB;EACpB,kBAAkB;;EAElB,aAAa;;EAEb,YAAY;EACZ,kBAAkB;EAClB,aAAa;;EAEb,wBAAwB;AAC1B;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;AAEA;;EAEE,iCAAiC;AACnC;AAEA;;EAEE,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,4CAA4C;AAC9C;AAEA;EACE,YAAY;EACZ,8DAA8D;AAChE;AAGA;EACE,6BAA6B;EAC7B,YAAY;AACd;AAEA;EACE,WAAW;AACb;AAKA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;AACd;AAEA;EACE,2CAA2C;AAC7C;AAGA;EACE,WAAW;EACX,gBAAgB;AAClB;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AAIA;EACE,cAAc;AAChB;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,uCAAuC;AACzC;AACA;EACE,cAAc;AAChB;AAGA;EACE,uCAAuC;EACvC,cAAc;EACd,WAAW;EACX,mBAAmB;;AAErB;AAGA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,6BAA6B;AAC/B","file":"styles.css","sourcesContent":["/* Imports */\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n/* End of Imports */\n\n\n/* CSS RESET */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* END OF CSS RESET */\n\n\n\n/* CUSTOM CSS */\nhtml {\n  background-color: #fff;\n}\n\nbody {\n  background-color: #f3ecc2;\n  color: #222;\n  font-family: 'Roboto', sans-serif;\n  border-radius: 6px;\n  margin: auto;\n  margin: 2rem auto;\n  padding: 8rem 4rem;\n  width: 100%;\n  max-width: 50rem;\n  box-sizing: border-box;\n  box-shadow: 10px 10px 0 hsla(51, 47%, 83%, 1);\n}\n\nh1 {\n  font-family: 'Times New Roman', sans-serif;\n  font-size: 2.2rem;\n  margin-bottom: .5rem;\n}\n\np {\n  font-size: 1rem;\n}\n\n\n\n\nbutton, select,\ninput[type='submit'],\ninput[type='button'],\ninput[type='checkbox'],\ninput[type='range'],\ninput[type='radio'] {\n  cursor: pointer;\n}\n\n\ninput,\nbutton,\ntextarea,\nselect {\n  color: #444;\n  background-color: hsla(51, 57%, 76%, 1);\n\n  font-family: inherit;\n  font-size: inherit;\n\n  padding: 10px;\n\n  border: none;\n  border-radius: 6px;\n  outline: none;\n\n  -webkit-appearance: none;\n}\n\ninput[type='checkbox'],\ninput[type='radio'] {\n  position: relative;\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  margin-right: 2px;\n}\n\ninput[type='checkbox']:checked,\ninput[type='radio']:checked {\n  background: hsla(51, 57%, 76%, 1);\n}\n\ninput[type='checkbox']:checked::before,\ninput[type='radio']:checked::before {\n  content: '•';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\ninput[type='checkbox']:checked::before {\n  content: '✔';\n  transform: translateY(-50%) translateY(0.5px) translateX(-6px);\n}\n\n\ninput:not([type = checkbox]) {\n  background-color: transparent;\n  border: none;\n}\n\ninput::placeholder {\n  color: #444;\n}\n\n\n\n\n#newTask {\n  background-color: hsla(51, 57%, 76%, 1);\n  border-radius: 6px;\n  color: #111;\n  font-size: 1rem;\n  margin: 1rem 0 2rem;\n  padding: .75rem 1rem;\n  width: 20rem;\n}\n\n#newTask:focus {\n  box-shadow: 0 0 0 2px hsla(51, 46%, 62%, 1);\n}\n\n\n.list-wrapper {\n  width: 100%;\n  max-width: 22rem;\n}\n\n.task-item {\n  display: flex;\n  align-items: center;\n}\n.task-item:not(last-child) {\n  margin-bottom: 1rem;\n}\n\n\n\n.task-name {\n  width: 15.4rem;\n}\n\n.delete-btn {\n  display: none;\n  background-color: transparent;\n}\n.delete-btn:hover {\n  background-color: hsla(51, 57%, 76%, 1);\n}\n.task-item:hover > .delete-btn {\n  display: block;\n}\n\n\n.divider {\n  background-color: hsla(51, 53%, 82%, 1);\n  width: 22.2rem;\n  height: 2px;\n  margin-bottom: 1rem;\n\n}\n\n\n.done-list .task-item .task-status, .done-list .task-item .task-name {\n  opacity: 0.7;\n}\n.done-list .task-item .task-name {\n  font-style: italic;\n  text-decoration: line-through;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\Dev\tudu\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map