/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _TimePicker = __webpack_require__(1);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(8);
	// require('../less/a.css')

	// import hello from './Hello.vue'
	var WebStyle = {
	  timePicker: _TimePicker2.default
	};
	if (typeof window != 'undefined') window.WebStyle = WebStyle;

	module.exports = WebStyle;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/TimePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2565e8b8/TimePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/selector.js?type=style&index=0!./TimePicker.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/selector.js?type=style&index=0!./TimePicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tp{\n    width: 168px;\n    height: 178px;\n    border-radius: 6px;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);\n    border: 1px solid #ccc;\n    line-height: 1.5;\n    background: #fff;\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    z-index: 102;\n}\n.tp-header{\n    padding: 6px;\n    position: relative;\n    border-bottom: 1px solid #e9e9e9;\ninput{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 100%;\n    cursor: auto;\n    line-height: 1.5;\n    outline: 0;\n    color: #666;\n&::selection {\n     background: #4BB8FF;\n     color: #fff;\n }\n}\ni{\n    position: absolute;\n    right: 10px;\n    top: 6px;\n    font-size: 12px;\n    color: #ccc;\n    -webkit-transition: color ease .3s;\n    transition: color ease .3s;\n    cursor: pointer;\n&:hover{\n     color: #999;\n }\n}\n}\n.tp-body{\nul{\n    float: left;\n    height: 144px;\n    width: 55px;\n    overflow-y: scroll;\n\n.tp-active{\n    background: #f7f7f7;\n    font-weight: 700;\n\n&:hover{\n     background: #f7f7f7;\n }\n}\nli{\n    height: 24px;\n    line-height: 24px;\n    text-align: center;\n    -webkit-transition: background 0.3s ease;\n    transition: background 0.3s ease;\n    cursor: pointer;\n&:hover{\n     background: #eaf8fe;\n }\n}\n&:after{\n     content: '';\n     display: block;\n     height:120px;\n\n }\n}\n.tp-line{\n    float: left;\n    width: 1px;\n    height: 144px;\n    background: #e9e9e9\n}\n}\n\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template lang="html">
	//     <div>
	//         <div class="tp-out">
	//             <input type="text" class="input" placeholder="请选择时间" @focus="show=true" :value="out">
	//         </div>
	//
	//         <div class="tp" v-show="show" v-el:tp transition="slide">
	//             <div class="tp-header">
	//                 <input placeholder="请选择时间" :value="out">
	//                 <i class="iconfont icon-crosscircle" @click="show=false"></i>
	//             </div>
	//             <div class="tp-body">
	//                 <ul v-el:h>
	//                     <li v-for="n in h" :class="{'tp-active': n == sh}" @click="click(n, 'h')">{{n}}</li>
	//                 </ul>
	//                 <div class="tp-line"></div>
	//                 <ul v-el:m>
	//                     <li v-for="n in m" :class="{'tp-active': n == sm}" @click="click(n, 'm')">{{n}}</li>
	//                 </ul>
	//                 <div class="tp-line"></div>
	//                 <ul v-el:s>
	//                     <li v-for="n in s" :class="{'tp-active': n == ss}" @click="click(n, 's')">{{n}}</li>
	//                 </ul>
	//             </div>
	//         </div>
	//
	//     </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	    props: {
	        val: {
	            coerce: function coerce(val) {

	                if (!val) return '';

	                if (val.indexOf(':') != -1) {

	                    // val = ('0' + n.getHours()).slice(-2) + ':' + ('0' + n.getMinutes()).slice(-2) + ':' + ('0' + n.getSeconds()).slice(-2)
	                    var sp = val.split(':');
	                    val = parseInt(sp[0]) + ':' + parseInt(sp[1]) + ':' + parseInt(sp[2]);
	                }

	                return val;
	            }
	        }
	    },
	    data: function data() {

	        var sp = this.val.split(':');

	        if (!this.val) sp = [-1, -1, -1];

	        return {
	            sh: sp[0],
	            sm: sp[1],
	            ss: sp[2],
	            show: false,
	            op: false
	        };
	    },
	    ready: function ready() {
	        this.$els.h.scrollTop = this.sh * 24;
	        this.$els.m.scrollTop = this.sm * 24;
	        this.$els.s.scrollTop = this.ss * 24;

	        this.$els.tp.addEventListener('click', function (e) {
	            e.stopPropagation();
	            return false;
	        });

	        document.body.addEventListener('click', function () {
	            this.show = false;
	            // if(this.show){
	            //   this.show = false
	            // }
	        }.bind(this));
	    },

	    computed: {
	        h: function h() {
	            return 24;
	        },
	        m: function m() {
	            return 60;
	        },
	        s: function s() {
	            return 60;
	        },
	        out: function out() {
	            if (!this.val) return '';
	            var sp = this.val.split(':');

	            return ('0' + sp[0]).slice(-2) + ':' + ('0' + sp[1]).slice(-2) + ':' + ('0' + sp[2]).slice(-2);
	        }
	    },
	    watch: {
	        val: function val(_val) {
	            if (this.op) {

	                this.$dispatch('time-change', this.val);
	            } else {
	                //外部赋值
	                if (_val) {
	                    var sp = _val.split(':');
	                    this.sh = parseInt(sp[0]);
	                    this.sm = parseInt(sp[1]);
	                    this.ss = parseInt(sp[2]);
	                    this.$els.h.scrollTop = this.sh * 24;
	                    this.$els.m.scrollTop = this.sm * 24;
	                    this.$els.s.scrollTop = this.ss * 24;
	                } else {
	                    this.clear();
	                }
	            }

	            this.op = false;
	        }
	    },
	    methods: {
	        click: function click(num, type) {
	            this.op = true;
	            this['s' + type] = num;
	            this.scroll(num, type);
	            this.change();
	        },
	        scroll: function scroll(num, type) {

	            var dom = this.$els[type];

	            requestAnimationFrame(step);
	            function step() {
	                var pg = num * 24 - dom.scrollTop;
	                if (pg > 0) {
	                    dom.scrollTop += 12;
	                    requestAnimationFrame(step);
	                } else if (pg < -12) {
	                    dom.scrollTop -= 12;
	                    requestAnimationFrame(step);
	                } else {
	                    dom.scrollTop += pg;
	                }
	            }
	        },
	        change: function change() {
	            if (this.sh == -1) {
	                this.sh = 0;
	            }
	            if (this.sm == -1) {
	                this.sm = 0;
	            }
	            if (this.ss == -1) {
	                this.ss = 0;
	            }

	            var val = ('0' + this.sh).slice(-2) + ':' + ('0' + this.sm).slice(-2) + ':' + ('0' + this.ss).slice(-2);

	            this.val = val;
	        },
	        clear: function clear() {
	            this.sh = -1;
	            this.sm = -1;
	            this.ss = -1;
	            this.op = false;
	            this.$els.h.scrollTop = 0;
	            this.$els.m.scrollTop = 0;
	            this.$els.s.scrollTop = 0;
	            this.val = '';
	        }
	    }
	};

	// </script>
	//
	//
	// <style style="scss">
	//
	//     .tp{
	//         width: 168px;
	//         height: 178px;
	//         border-radius: 6px;
	//         box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
	//         border: 1px solid #ccc;
	//         line-height: 1.5;
	//         background: #fff;
	//         position: absolute;
	//         top: -2px;
	//         left: -2px;
	//         z-index: 102;
	//     }
	//     .tp-header{
	//         padding: 6px;
	//         position: relative;
	//         border-bottom: 1px solid #e9e9e9;
	//     input{
	//         margin: 0;
	//         padding: 0;
	//         border: 0;
	//         width: 100%;
	//         cursor: auto;
	//         line-height: 1.5;
	//         outline: 0;
	//         color: #666;
	//     &::selection {
	//          background: #4BB8FF;
	//          color: #fff;
	//      }
	//     }
	//     i{
	//         position: absolute;
	//         right: 10px;
	//         top: 6px;
	//         font-size: 12px;
	//         color: #ccc;
	//         transition: color ease .3s;
	//         cursor: pointer;
	//     &:hover{
	//          color: #999;
	//      }
	//     }
	//     }
	//     .tp-body{
	//     ul{
	//         float: left;
	//         height: 144px;
	//         width: 55px;
	//         overflow-y: scroll;
	//
	//     .tp-active{
	//         background: #f7f7f7;
	//         font-weight: 700;
	//
	//     &:hover{
	//          background: #f7f7f7;
	//      }
	//     }
	//     li{
	//         height: 24px;
	//         line-height: 24px;
	//         text-align: center;
	//         transition: background 0.3s ease;
	//         cursor: pointer;
	//     &:hover{
	//          background: #eaf8fe;
	//      }
	//     }
	//     &:after{
	//          content: '';
	//          display: block;
	//          height:120px;
	//
	//      }
	//     }
	//     .tp-line{
	//         float: left;
	//         width: 1px;
	//         height: 144px;
	//         background: #e9e9e9
	//     }
	//     }
	//
	// </style>

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div class=\"tp-out\">\n        <input type=\"text\" class=\"input\" placeholder=\"请选择时间\" @focus=\"show=true\" :value=\"out\">\n    </div>\n\n    <div class=\"tp\" v-show=\"show\" v-el:tp transition=\"slide\">\n        <div class=\"tp-header\">\n            <input placeholder=\"请选择时间\" :value=\"out\">\n            <i class=\"iconfont icon-crosscircle\" @click=\"show=false\"></i>\n        </div>\n        <div class=\"tp-body\">\n            <ul v-el:h>\n                <li v-for=\"n in h\" :class=\"{'tp-active': n == sh}\" @click=\"click(n, 'h')\">{{n}}</li>\n            </ul>\n            <div class=\"tp-line\"></div>\n            <ul v-el:m>\n                <li v-for=\"n in m\" :class=\"{'tp-active': n == sm}\" @click=\"click(n, 'm')\">{{n}}</li>\n            </ul>\n            <div class=\"tp-line\"></div>\n            <ul v-el:s>\n                <li v-for=\"n in s\" :class=\"{'tp-active': n == ss}\" @click=\"click(n, 's')\">{{n}}</li>\n            </ul>\n        </div>\n    </div>\n\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);