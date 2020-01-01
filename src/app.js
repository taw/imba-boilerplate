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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg__WEBPACK_IMPORTED_MODULE_2__);
function extend$(target,ext){
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	Object.defineProperties(target.prototype,descriptors);
	// var keys = Object.keys(descriptors);
	// for(const key of keys){ let desc = descriptors[key]; }
	return target;
};
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
var sfc$ = {/*$sfc$*/}, customElements_;

var root = ((typeof window !== 'undefined') ? window : (((typeof global !== 'undefined') ? global : null)));

var imba = {
	version: '2.0.0',
	global: root,
	ctx: null,
	document: root.document
};

root.imba = imba;

var raf = root.requestAnimationFrame || function(blk) { return setTimeout(blk,1000 / 60); };

(customElements_ = root.customElements) || (root.customElements = {
	define: function() { return console.log('no custom elements'); },
	get: function() { return console.log('no custom elements'); }
});

imba.setTimeout = function(fn,ms) {
	return setTimeout(function() {
		fn();
		return imba.commit();
	},ms);
};

imba.setInterval = function(fn,ms) {
	return setInterval(function() {
		fn();
		return imba.commit();
	},ms);
};

imba.clearInterval = root.clearInterval;
imba.clearTimeout = root.clearTimeout;

function activateSelectionHandler(){
	imba.document.addEventListener('selectionchange',function(e) {
		if (e.handled$) { return };
		e.handled$ = true;
		
		let target = imba.document.activeElement;
		if (target && target.matches('input,textarea')) {
			let custom = new CustomEvent('selection',{
				detail: {
					start: target.selectionStart,
					end: target.selectionEnd
				}
			});
			return target.dispatchEvent(custom);
		};
	});
	return activateSelectionHandler = function() { return true; };
};


imba.q$ = function (query,ctx){
	return ((ctx instanceof Element) ? ctx : document).querySelector(query);
};

imba.q$$ = function (query,ctx){
	return ((ctx instanceof Element) ? ctx : document).querySelectorAll(query);
};

imba.inlineStyles = function (styles){
	var el = document.createElement('style');
	
	
	el.textContent = styles;
	
	
	document.head.appendChild(el);
	return;
};

var dashRegex = /-./g;

imba.toCamelCase = function (str){
	if (str.indexOf('-') >= 0) {
		return str.replace(dashRegex,function(m) { return m.charAt(1).toUpperCase(); });
	} else {
		return str;
	};
};

imba.createLiveFragment = function (bitflags,options){
	var el = imba.document.createDocumentFragment();
	el.setup$(bitflags,options);
	return el;
};

var setterCache = {};


imba.toSetter = function (str){
	return setterCache[str] || (setterCache[str] = imba.toCamelCase('set-' + str));
};


var emit__ = function(event,args,node) {
	// var node = cbs[event]
	var prev;
	var cb;
	var ret;
	
	while ((prev = node) && (node = node.next)){
		if (cb = node.listener) {
			if (node.path && cb[node.path]) {
				ret = args ? cb[node.path].apply(cb,args) : cb[node.path]();
			} else {
				// check if it is a method?
				ret = args ? cb.apply(node,args) : cb.call(node);
			};
		};
		
		if (node.times && (node.times = node.times - 1) <= 0) {
			prev.next = node.next;
			node.listener = null;
		};
	};
	return;
};


imba.listen = function (obj,event,listener,path){
	var __listeners___;
	var cbs;
	var list;
	var tail;
	cbs = (__listeners___ = obj.__listeners__) || (obj.__listeners__ = {});
	list = cbs[event] || (cbs[event] = {});
	tail = list.tail || (list.tail = (list.next = {}));
	tail.listener = listener;
	tail.path = path;
	list.tail = tail.next = {};
	return tail;
};


imba.once = function (obj,event,listener){
	var tail = imba.listen(obj,event,listener);
	tail.times = 1;
	return tail;
};


imba.unlisten = function (obj,event,cb,meth){
	var node;
	var prev;
	var meta = obj.__listeners__;
	if (!meta) { return };
	
	if (node = meta[event]) {
		while ((prev = node) && (node = node.next)){
			if (node == cb || node.listener == cb) {
				prev.next = node.next;
				
				node.listener = null;
				break;
			};
		};
	};
	return;
};


imba.emit = function (obj,event,params){
	var cb;
	if (cb = obj.__listeners__) {
		if (cb[event]) { emit__(event,params,cb[event]) };
		if (cb.all) { emit__(event,[event,params],cb.all) };
	};
	return;
};



class Scheduler {
	constructor(){
		var self = this;
		this.queue = [];
		this.stage = -1;
		this.batch = 0;
		this.scheduled = false;
		this.listeners = {};
		
		this.__ticker = function(e) {
			self.scheduled = false;
			return self.tick(e);
		};
		this;
	}
	
	add(item,force){
		if (force || this.queue.indexOf(item) == -1) {
			this.queue.push(item);
		};
		
		if (!this.scheduled) { return this.schedule() };
	}
	
	listen(ns,item){
		this.listeners[ns] || (this.listeners[ns] = new Set());
		return this.listeners[ns].add(item);
	}
	
	unlisten(ns,item){
		this.listeners[ns] || (this.listeners[ns] = new Set());
		return this.listeners[ns].remove(item);
	}
	
	get promise(){
		var self = this;
		return new Promise(function(resolve) { return self.add(resolve); });
	}
	
	tick(timestamp){
		var self = this;
		var items = this.queue;
		if (!this.ts) { this.ts = timestamp };
		this.dt = timestamp - this.ts;
		this.ts = timestamp;
		this.queue = [];
		this.stage = 1;
		this.batch++;
		
		if (items.length) {
			for (let i = 0, ary = iter$(items), len = ary.length, item; i < len; i++) {
				item = ary[i];
				if (typeof item === 'string' && this.listeners[item]) {
					this.listeners[item].forEach(function(item) {
						if (item.tick instanceof Function) {
							return item.tick(self);
						} else if (item instanceof Function) {
							return item(self);
						};
					});
				} else if (item instanceof Function) {
					item(this.dt,this);
				} else if (item.tick) {
					item.tick(this.dt,this);
				};
			};
		};
		this.stage = 2;
		this.stage = this.scheduled ? 0 : -1;
		return this;
	}
	
	schedule(){
		if (!this.scheduled) {
			this.scheduled = true;
			if (this.stage == -1) {
				this.stage = 0;
			};
			raf(this.__ticker);
		};
		return this;
	}
};

imba.scheduler = new Scheduler();
imba.commit = function() { return imba.scheduler.add('render'); };





imba.mount = function (element,into){
	// automatic scheduling of element - even before
	element.__schedule = true;
	return (into || document.body).appendChild(element);
};



class ImbaElementRegistry {
	
	get(name){
		if (!name) { return ImbaElement };
		return root.customElements.get(name);
	}
	
	define(name,klass){
		// console.log "define element",name,klass
		root.customElements.define(name,klass);
		
		return klass;
	}
};

root.imbaElements = new ImbaElementRegistry();



extend$(Node,{
	// replace this with something else
	replaceWith$(other){
		this.parentNode.replaceChild(other,this);
		return other;
	},
	
	insertInto$(parent){
		parent.appendChild$(this);
		return this;
	},
	
	insertBefore$(el,prev){
		return this.insertBefore(el,prev);
	},
	
	insertBeforeBegin$(other){
		return this.parentNode.insertBefore(other,this);
	},
	
	insertAfterEnd$(other){
		if (this.nextSibling) {
			return this.nextSibling.insertBeforeBegin$(other);
		} else {
			return this.parentNode.appendChild(other);
		};
	},
});

extend$(Comment,{
	// replace this with something else
	replaceWith$(other){
		if (other && other.joinBefore$) {
			other.joinBefore$(this);
		} else {
			this.parentNode.insertBefore$(other,this);
		};
		
		this.parentNode.removeChild(this);
		
		return other;
	},
});


extend$(Element,{
	
	on$(type,parts,scope){
		var self = this;
		var handler = new _events__WEBPACK_IMPORTED_MODULE_0__["EventHandler"](parts,scope);
		var capture = parts.indexOf('capture') >= 0;
		var passive = parts.indexOf('passive') >= 0;
		var o = capture;
		
		if (passive) {
			o = {passive: passive,capture: capture};
		};
		
		if (type == 'selection') {
			activateSelectionHandler();
		} else if (type == 'resize') {
			if (!this.__resizeObserver) {
				this.__resizeObserver || (this.__resizeObserver = new ResizeObserver(function(entries) {
					return console.log("was resized",entries);
					
					
					
					
				}));
				this.__resizeObserver.observe(this);
			};
		} else if (type == 'intersect') {
			if (!this.__intersectObserver) {
				this.__intersectObserver || (this.__intersectObserver = new IntersectionObserver(function(entries) {
					
					let res = [];
					for (let entry of iter$(entries)){
						let e = new CustomEvent('intersect',{bubbles: false,detail: entry});
						res.push(self.dispatchEvent(e));
					};
					return res;
				}));
				this.__intersectObserver.observe(this);
			};
		};
		
		
		this.addEventListener(type,handler,o);
		return handler;
	},
	
	
	text$(item){
		this.textContent = item;
		return this;
	},
	
	insert$(item,f,prev){
		let type = typeof item;
		
		if (type === 'undefined' || item === null) {
			// what if the prev value was the same?
			if (prev && (prev instanceof Comment)) {
				return prev;
			};
			
			let el = document.createComment('');
			prev ? prev.replaceWith$(el) : el.insertInto$(this);
			return el;
		};
		
		
		if (item === prev) {
			return item;
		} else if (type !== 'object') {
			let res;
			let txt = item;
			
			if ((f & 128) && (f & 256)) {
				// FIXME what if the previous one was not text? Possibly dangerous
				// when we set this on a fragment - it essentially replaces the whole
				// fragment?
				this.textContent = txt;
				return;
			};
			
			if (prev) {
				if (prev instanceof Text) {
					prev.textContent = txt;
					return prev;
				} else {
					res = document.createTextNode(txt);
					prev.replaceWith$(res,this);
					return res;
				};
			} else {
				this.appendChild$(res = document.createTextNode(txt));
				return res;
			};
		} else {
			prev ? prev.replaceWith$(item,this) : item.insertInto$(this);
			return item;
		};
		return;
	},
	
	flag$(str){
		this.className = str;
		return;
	},
	
	flagSelf$(str){
		// if a tag receives flags from inside <self> we need to
		// redefine the flag-methods to later use both
		var self = this;
		this.flag$ = function(str) { return self.flagSync$(self.__extflags = str); };
		this.flagSelf$ = function(str) { return self.flagSync$(self.__ownflags = str); };
		this.className = (this.className || '') + ' ' + (this.__ownflags = str);
		return;
	},
	
	flagSync$(){
		return this.className = ((this.__extflags || '') + ' ' + (this.__ownflags || ''));
	},
	
	open$(){
		return this;
	},
	
	close$(){
		return this;
	},
	
	end$(){
		if (this.render) { this.render() };
		return;
	},
	
	css$(key,value,mods){
		return this.style[key] = value;
	},
});

Element.prototype.appendChild$ = Element.prototype.appendChild;
Element.prototype.insertBefore$ = Element.prototype.insertBefore;
Element.prototype.replaceChild$ = Element.prototype.replaceChild;




imba.createLiveFragment = _fragment__WEBPACK_IMPORTED_MODULE_1__["createLiveFragment"];
imba.createFragment = _fragment__WEBPACK_IMPORTED_MODULE_1__["createFragment"];



class ImbaElement extends HTMLElement {
	super$set(k,v){
		return super[k] = v;
	}
	super$(k){
		return super[k];
	}
	constructor(){
		super();
		this.setup$();
		if (this.build) { this.build() };
	}
	
	setup$(){
		this.__slots = {};
		return this.__f = 0;
	}
	
	init$(){
		return this;
	}
	
	
	slot$(name,ctx){
		// if the component has no render method
		// we can simply pass through
		if (name == '__' && !this.render) {
			return this;
		};
		
		return this.__slots[name] || (this.__slots[name] = imba.createLiveFragment());
	}
	
	schedule(){
		imba.scheduler.listen('render',this);
		this.__scheduled = true;
		return this.tick();
	}
	
	unschedule(){
		imba.scheduler.unlisten('render',this);
		return this.__scheduled = false;
	}
	
	connectedCallback(){
		if (!this.__f) {
			this.__f = 8;
			this.awaken();
		};
		if (this.__schedule) { this.schedule() };
		if (this.mount) { return this.mount() };
	}
	
	disconnectedCallback(){
		if (this.__scheduled) { this.unschedule() };
		if (this.unmount) { return this.unmount() };
	}
	
	tick(){
		return this.render && this.render();
	}
	
	awaken(){
		return this.__schedule = true;
	}
};

root.customElements.define('imba-element',ImbaElement);


imba.createProxyProperty = function (target){
	function getter(){
		return target[0] ? target[0][target[1]] : undefined;
	};
	
	function setter(v){
		return target[0] ? ((target[0][target[1]] = v)) : null;
	};
	
	return {
		get: getter,
		set: setter
	};
};

var isArray = function(val) {
	return val && val.splice && val.sort;
};

var isGroup = function(obj) {
	return (obj instanceof Array) || (obj && (obj.has instanceof Function));
};

var bindHas = function(object,value) {
	if (object instanceof Array) {
		return object.indexOf(value) >= 0;
	} else if (object && (object.has instanceof Function)) {
		return object.has(value);
	} else if (object && (object.contains instanceof Function)) {
		return object.contains(value);
	} else if (object == value) {
		return true;
	} else {
		return false;
	};
};

var bindAdd = function(object,value) {
	if (object instanceof Array) {
		return object.push(value);
	} else if (object && (object.add instanceof Function)) {
		return object.add(value);
	};
};

var bindRemove = function(object,value) {
	if (object instanceof Array) {
		let idx = object.indexOf(value);
		if (idx >= 0) { return object.splice(idx,1) };
	} else if (object && (object.delete instanceof Function)) {
		return object.delete(value);
	};
};



extend$(Element,{
	getRichValue(){
		return this.value;
	},
	
	setRichValue(value){
		return this.value = value;
	},
	
	bind$(key,mods,value){
		let o = value || [];
		
		if (key == 'model') {
			if (!(this.__f & 16384)) {
				this.__f |= 16384;
				if (this.change$) { this.on$('change',[this.change$],this) };
				if (this.input$) { this.on$('input',['capture',this.input$],this) };
			};
		};
		
		Object.defineProperty(this,key,(o instanceof Array) ? imba.createProxyProperty(o) : o);
		return o;
	},
});

Object.defineProperty(Element.prototype,'richValue',{
	get(){
		return this.getRichValue();
	},
	set(v){
		return this.setRichValue(v);
	}
});

extend$(HTMLSelectElement,{
	
	change$(e){
		if (!(this.__f & 16384)) { return };
		
		let model = this.model;
		let prev = this.__richValue;
		this.__richValue = undefined;
		let values = this.getRichValue();
		
		if (this.multiple) {
			if (prev) {
				for (let i = 0, items = iter$(prev), len = items.length, value; i < len; i++) {
					value = items[i];
					if (values.indexOf(value) != -1) { continue; };
					bindRemove(model,value);
				};
			};
			
			for (let i = 0, items = iter$(values), len = items.length, value; i < len; i++) {
				value = items[i];
				if (!prev || prev.indexOf(value) == -1) {
					bindAdd(model,value);
				};
			};
		} else {
			this.model = values[0];
		};
		return this;
	},
	
	getRichValue(){
		if (this.__richValue) {
			return this.__richValue;
		};
		
		let res = [];
		for (let i = 0, items = iter$(this.selectedOptions), len = items.length, o; i < len; i++) {
			o = items[i];
			res.push(o.richValue);
		};
		return this.__richValue = res;
	},
	
	syncValue(){
		let model = this.model;
		
		if (this.multiple) {
			let vals = [];
			for (let i = 0, items = iter$(this.options), len = items.length, option; i < len; i++) {
				option = items[i];
				let val = option.richValue;
				let sel = bindHas(model,val);
				option.selected = sel;
				if (sel) { vals.push(val) };
			};
			this.__richValue = vals;
		} else {
			for (let i = 0, items = iter$(this.options), len = items.length, option; i < len; i++) {
				option = items[i];
				let val = option.richValue;
				if (val == model) {
					this.__richValue = [val];
					this.selectedIndex = i;break;
				};
			};
		};
		return;
	},
	
	end$(){
		return this.syncValue();
	},
});

extend$(HTMLOptionElement,{
	setRichValue(value){
		this.__richValue = value;
		return this.value = value;
	},
	
	getRichValue(){
		if (this.__richValue !== undefined) {
			return this.__richValue;
		};
		return this.value;
	},
});

extend$(HTMLTextAreaElement,{
	setRichValue(value){
		this.__richValue = value;
		return this.value = value;
	},
	
	getRichValue(){
		if (this.__richValue !== undefined) {
			return this.__richValue;
		};
		return this.value;
	},
	
	input$(e){
		return this.model = this.value;
	},
	
	end$(){
		return this.value = this.model;
	},
});

extend$(HTMLInputElement,{
	
	input$(e){
		if (!(this.__f & 16384)) { return };
		let typ = this.type;
		
		if (typ == 'checkbox' || typ == 'radio') {
			return;
		};
		
		this.__richValue = undefined;
		return this.model = this.richValue;
	},
	
	change$(e){
		if (!(this.__f & 16384)) { return };
		
		let model = this.model;
		let val = this.richValue;
		
		if (this.type == 'checkbox' || this.type == 'radio') {
			let checked = this.checked;
			if (isGroup(model)) {
				return checked ? bindAdd(model,val) : bindRemove(model,val);
			} else {
				return this.model = checked ? val : false;
			};
		};
	},
	
	setRichValue(value){
		this.__richValue = value;
		return this.value = value;
	},
	
	getRichValue(){
		if (this.__richValue !== undefined) {
			return this.__richValue;
		};
		
		let value = this.value;
		let typ = this.type;
		
		if (typ == 'range' || typ == 'number') {
			value = this.valueAsNumber;
			if (Number.isNaN(value)) { value = null };
		} else if (typ == 'checkbox') {
			if (value == undefined || value === 'on') { value = true };
		};
		
		return value;
	},
	
	end$(){
		if (this.__f & 16384) {
			if (this.type == 'checkbox' || this.type == 'radio') {
				return this.checked = bindHas(this.model,this.richValue);
			} else {
				return this.richValue = this.model;
			};
		};
	},
});



imba.createElement = function (name,bitflags,parent,flags,text,sfc){
	var el = root.document.createElement(name);
	
	if ((bitflags & 4) || (bitflags === undefined && el.__f != undefined)) {
		el.__f = bitflags;
		el.init$();
		
		if (text !== null) {
			el.slot$('__').text$(text);
			text = null;
		};
	};
	
	if (flags) { el.className = flags };
	
	if (sfc) {
		el.setAttribute('data-' + sfc,'');
	};
	
	if (text !== null) {
		el.text$(text);
	};
	
	if (parent && (parent instanceof Node)) {
		el.insertInto$(parent);
	};
	
	return el;
};



imba.createSVGElement = function (name,bitflags,parent,flags,text,sfc){
	var el = root.document.createElementNS("http://www.w3.org/2000/svg",name);
	if (flags) { el.className.baseVal = flags };
	if (parent && (parent instanceof Node)) {
		el.insertInto$(parent);
	};
	return el;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
var sfc$ = {/*$sfc$*/};
var keyCodes = {
	esc: [27],
	tab: [9],
	enter: [13],
	space: [32],
	up: [38],
	down: [40],
	del: [8,46]
};


class EventHandler {
	constructor(params,closure){
		this.params = params;
		this.closure = closure;
	}
	
	getHandlerForMethod(el,name){
		if (!el) { return null };
		return el[name] ? el : this.getHandlerForMethod(el.parentNode,name);
	}
	
	handleEvent(event){
		var target = event.target;
		var parts = this.params;
		var i = 0;
		let commit = true; 
		
		
		
		for (let i = 0, items = iter$(this.params), len = items.length, part; i < len; i++) {
			part = items[i];
			let handler = part;
			let args = [event];
			let res;
			let context = null;
			
			if (handler instanceof Array) {
				args = handler.slice(1);
				handler = handler[0];
				
				for (let i = 0, ary = iter$(args), len = ary.length, param; i < len; i++) {
					// what about fully nested arrays and objects?
					// ought to redirect this
					param = ary[i];
					if (typeof param == 'string' && param[0] == '~') {
						let name = param.slice(2);
						
						if (param[1] == '&') {
							// reference to a cache slot
							args[i] = this[name];
						} else if (param[1] == '$') {
							let target = event;
							
							if (name[0] == '$') {
								target = target.detail;
								name = name.slice(1);
							};
							
							if (name == '') {
								args[i] = target;
							} else {
								args[i] = target ? target[name] : null;
							};
						};
					};
				};
			};
			
			
			if (handler == 'stop') {
				event.stopImmediatePropagation();
			} else if (handler == 'prevent') {
				event.preventDefault();
			} else if (handler == 'ctrl') {
				if (!event.ctrlKey) { break; };
			} else if (handler == 'commit') {
				commit = true;
			} else if (handler == 'silence') {
				commit = false;
			} else if (handler == 'alt') {
				if (!event.altKey) { break; };
			} else if (handler == 'shift') {
				if (!event.shiftKey) { break; };
			} else if (handler == 'meta') {
				if (!event.metaKey) { break; };
			} else if (handler == 'self') {
				if (target != event.currentTarget) { break; };
			} else if (handler == 'once') {
				event.currentTarget.removeEventListener(event.type,this);
			} else if (keyCodes[handler]) {
				if (keyCodes[handler].indexOf(event.keyCode) < 0) {
					break;
				};
			} else if (typeof handler == 'string') {
				if (handler[0] == '@') {
					handler = handler.slice(1);
					context = this.closure;
				} else if (handler == 'trigger') {
					
					let name = args[0];
					let detail = args[1];
					let e = detail ? new CustomEvent(name,{bubbles: true,detail: detail}) : new Event(name);
					let customRes = event.currentTarget.dispatchEvent(e);
				} else {
					context = this.getHandlerForMethod(event.currentTarget,handler);
				};
			};
			
			if (context) {
				// commit = yes
				res = context[handler].apply(context,args);
			} else if (handler instanceof Function) {
				// commit = yes
				res = handler.apply(event.currentTarget,args);
			};
		};
		
		if (commit) { imba.commit() };
		
		return;
	}
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLiveFragment", function() { return createLiveFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
function iter$(a){ return a ? (a.toIterable ? a.toIterable() : a) : []; };
function extend$(target,ext){
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	Object.defineProperties(target.prototype,descriptors);
	// var keys = Object.keys(descriptors);
	// for(const key of keys){ let desc = descriptors[key]; }
	return target;
};
var sfc$ = {/*$sfc$*/};


extend$(DocumentFragment,{
	
	// Called to make a documentFragment become a live fragment
	setup$(flags,options){
		this.__start = imba.document.createComment('start');
		this.__end = imba.document.createComment('end');
		
		this.__end.replaceWith$ = function(other) {
			this.parentNode.insertBefore(other,this);
			return other;
		};
		
		this.appendChild(this.__start);
		return this.appendChild(this.__end);
	},
	
	
	
	text$(item){
		if (!this.__text) {
			this.__text = this.insert$(item);
		} else {
			this.__text.textContent = item;
		};
		return;
	},
	
	insert$(item,options,toReplace){
		if (this.__parent) {
			// if the fragment is attached to a parent
			// we can just proxy the call through
			return this.__parent.insert$(item,options,toReplace || this.__end);
		} else {
			return Element.prototype.insert$.call(this,item,options,toReplace || this.__end);
		};
	},
	
	insertInto$(parent,before){
		if (!this.__parent) {
			this.__parent = parent;
			parent.appendChild$(this);
		};
		return this;
	},
	
	replaceWith$(other){
		this.__start.insertBeforeBegin$(other);
		var el = this.__start;
		while (el){
			let next = el.nextSibling;
			this.appendChild(el);
			if (el == this.__end) { break; };
			el = next;
		};
		
		return other;
	},
	
	appendChild$(child){
		this.__end.insertBeforeBegin$(child);
		return child;
	},
	
	removeChild$(child){
		child.parentNode && child.parentNode.removeChild(child);
		return this;
	},
});

class TagFragment {
	
	constructor(f,parent){
		this.__f = f;
		this.__parent = parent;
		
		if (!(f & 128) && (this instanceof KeyedTagFragment)) {
			this.__start = imba.document.createComment('start');
			if (parent) { this.__parent.appendChild(this.__start) }; 
		};
		
		if (!(f & 256)) {
			this.__end = imba.document.createComment('end');
			if (parent) { parent.appendChild(this.__end) };
		};
		
		this.setup();
	}
	
	appendChild$(item,index){
		// we know that these items are dom elements
		if (this.__end && this.__parent) {
			this.__end.insertBeforeBegin$(item);
		} else if (this.__parent) {
			this.__parent.appendChild(item);
		};
		return;
	}
	
	replaceWith$(other){
		this.detachNodes();
		this.__end.insertBeforeBegin$(other);
		this.__parent.removeChild(this.__end);
		this.__parent = null;
		console.log("replace TagFragment with other!",other,this);
		return;
	}
	
	joinBefore$(before){
		return this.insertInto$(before.parentNode,before);
	}
	
	insertInto$(parent,before){
		if (!this.__parent) {
			this.__parent = parent;
			before ? before.insertBeforeBegin$(this.__end) : parent.appendChild$(this.__end);
			this.attachNodes();
		};
		return this;
	}
	
	setup(){
		return this;
	}
};

class KeyedTagFragment extends TagFragment {
	super$set(k,v){
		return super[k] = v;
	}
	super$(k){
		return super[k];
	}
	setup(){
		this.array = [];
		this.changes = new Map();
		this.dirty = false;
		return this.$ = {};
	}
	
	push(item,idx){
		// on first iteration we can merely run through
		if (!(this.__f & 8)) {
			this.array.push(item);
			this.appendChild$(item);
			return;
		};
		
		let toReplace = this.array[idx];
		
		if (toReplace === item) {
			true;
		} else {
			this.dirty = true;
			
			let prevIndex = this.array.indexOf(item);
			let changed = this.changes.get(item);
			
			if (prevIndex === -1) {
				// should we mark the one currently in slot as removed?
				this.array.splice(idx,0,item);
				this.insertChild(item,idx);
			} else if (prevIndex === idx + 1) {
				if (toReplace) {
					this.changes.set(toReplace,-1);
				};
				this.array.splice(idx,1);
			} else {
				if (prevIndex >= 0) { this.array.splice(prevIndex,1) };
				this.array.splice(idx,0,item);
				this.insertChild(item,idx);
			};
			
			if (changed == -1) {
				this.changes.delete(item);
			};
		};
		return;
	}
	
	insertChild(item,index){
		if (index > 0) {
			let other = this.array[index - 1];
			
			other.insertAfterEnd$(item);
		} else if (this.__start) {
			this.__start.insertAfterEnd$(item);
		} else {
			this.__parent.insertAdjacentElement('afterbegin',item);
		};
		return;
	}
	
	removeChild(item,index){
		// @map.delete(item)
		// what if this is a fragment or virtual node?
		if (item.parentNode == this.__parent) {
			this.__parent.removeChild(item);
		};
		return;
	}
	
	attachNodes(){
		for (let i = 0, items = iter$(this.array), len = items.length, item; i < len; i++) {
			item = items[i];
			this.__end.insertBeforeBegin$(item);
		};
		return;
	}
	
	detachNodes(){
		for (let i = 0, items = iter$(this.array), len = items.length, item; i < len; i++) {
			item = items[i];
			this.__parent.removeChild(item);
		};
		return;
	}
	
	end$(index){
		var self = this;
		if (!(this.__f & 8)) {
			this.__f |= 8;
			return;
		};
		
		if (this.dirty) {
			this.changes.forEach(function(pos,item) {
				if (pos == -1) {
					return self.removeChild(item);
				};
			});
			this.changes.clear();
			this.dirty = false;
		};
		
		
		if (this.array.length > index) {
			
			// remove the children below
			while (this.array.length > index){
				let item = this.array.pop();
				this.removeChild(item);
			};
			
		};
		return;
	}
};

class IndexedTagFragment extends TagFragment {
	
	super$set(k,v){
		return super[k] = v;
	}
	super$(k){
		return super[k];
	}
	setup(){
		this.$ = [];
		return this.length = 0;
	}
	
	end$(len){
		let from = this.length;
		if (from == len || !this.__parent) { return };
		let array = this.$;
		
		if (from > len) {
			while (from > len){
				this.removeChild(array[--from]);
			};
		} else if (len > from) {
			while (len > from){
				this.appendChild$(array[from++]);
			};
		};
		this.length = len;
		return;
	}
	
	attachNodes(){
		for (let i = 0, items = iter$(this.$), len = items.length, item; i < len; i++) {
			item = items[i];
			if (i == this.length) { break; };
			this.__end.insertBeforeBegin$(item);
		};
		return;
	}
	
	detachNodes(){
		let i = 0;
		while (i < this.length){
			let item = this.$[i++];
			this.__parent.removeChild(item);
		};
		return;
	}
	
	insertInto(parent,slot){
		return this;
	}
	
	removeChild(item,index){
		// item need to be able to be added
		this.__parent.removeChild(item);
		return;
	}
};

function createLiveFragment(bitflags,options){
	var el = imba.document.createDocumentFragment();
	el.setup$(bitflags,options);
	return el;
};

function createFragment(bitflags,parent){
	if (bitflags & 32768) {
		return new IndexedTagFragment(bitflags,parent);
	} else {
		return new KeyedTagFragment(bitflags,parent);
	};
};




/***/ }),
/* 3 */
/***/ (function(module, exports) {

function extend$(target,ext){
	var descriptors = Object.getOwnPropertyDescriptors(ext);
	Object.defineProperties(target.prototype,descriptors);
	// var keys = Object.keys(descriptors);
	// for(const key of keys){ let desc = descriptors[key]; }
	return target;
};
var sfc$ = {/*$sfc$*/};

extend$(SVGElement,{
	
	flag$(str){
		this.className.baseVal = str;
		return;
	},
	
	flagSelf$(str){
		// if a tag receives flags from inside <self> we need to
		// redefine the flag-methods to later use both
		var self = this;
		this.flag$ = function(str) { return self.flagSync$(self.__extflags = str); };
		this.flagSelf$ = function(str) { return self.flagSync$(self.__ownflags = str); };
		this.className.baseVal = (this.className.baseVal || '') + ' ' + (this.__ownflags = str);
		return;
	},
	
	flagSync$(){
		return this.className.baseVal = ((this.__extflags || '') + ' ' + (this.__ownflags || ''));
	},
});


/***/ })
/******/ ]);
var class$, t$0;
class$ = class App extends imbaElements.get() {
	render(){
		var t$0, c$0, b$0, d$0, t$1;
		t$0=this;
		t$0.open$();
		c$0 = (b$0=d$0=1,t$0.$) || (b$0=d$0=0,t$0.$={});
		b$0 || (t$1=imba.createElement('header',384,t$0,null,"Hello, world!",null));
		t$0.close$(d$0);
		return t$0;
	}
	init$(){
		return super.init$();
	}
}; imbaElements.define('App',class$);

imba.mount(((t$0=imba.createElement(App,0,null,null,null,null)),
t$0));
