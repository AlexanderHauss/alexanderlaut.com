/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-csstransforms-localstorage-touchevents-hasevent-prefixed-prefixedcss-prefixedcssvalue-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var u in S)if(S.hasOwnProperty(u)){if(e=[],n=S[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(e,n){return!!~(""+e).indexOf(n)}function f(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?f(o,t||n):o);return!1}function d(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,a,u,l,f="modernizr",c=s("div"),p=d();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:f+(r+1),c.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=t(c,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=l,_.offsetHeight):c.parentNode.removeChild(c),!!a}function v(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==v(e,null,"position")})}return t}function g(e,n,o,i){function u(){c&&(delete L.style,delete L.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var c,d,p,v,g,h=["modernizr","tspan","samp"];!L.style&&h.length;)c=!0,L.modElem=s(h.shift()),L.style=L.modElem.style;for(p=e.length,d=0;p>d;d++)if(v=e[d],g=L.style[v],l(v,"-")&&(v=a(v)),L.style[v]!==t){if(i||r(o,"undefined"))return u(),"pfx"==n?v:!0;try{L.style[v]=o}catch(y){}if(L.style[v]!=g)return u(),"pfx"==n?v:!0}return u(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?g(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),c(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var C=[],S=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),b=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=s(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();x.hasEvent=b,Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))});var z=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=z;var T="Moz O ms Webkit",E=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=E;var P=function(e,n){var t=!1,r=s("div"),o=r.style;if(e in o){var i=E.length;for(o[e]=n,t=o[e];i--&&!t;)o[e]="-"+E[i]+"-"+n,t=o[e]}return""===t&&(t=!1),t};x.prefixedCSSValue=P;var A=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=A;var j=function(n){var r,o=z.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=z[s],u=a.toUpperCase()+"_"+r;if(u in i)return"@-"+a.toLowerCase()+"-"+n}return!1};x.atRule=j,Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}});var N=x.testStyles=p;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",z.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(r,function(e){t=9===e.offsetTop})}return t});var k={elem:s("modernizr")};Modernizr._q.push(function(){delete k.elem});var L={style:k.elem.style};Modernizr._q.unshift(function(){delete L.style}),x.testAllProps=h;var O=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=a(e)),n?h(e,n,t):h(e,"pfx"))};x.prefixedCSS=function(e){var n=O(e);return n&&u(n)};x.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),o(),i(C),delete x.addTest,delete x.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);

/*imagesloaded*/
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});


/*iScroll*/

/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin'),
		touchAction: _prefixStyle('touchAction')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
			// initMouseEvent is deprecated.
			ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
			ev.initEvent('click', true, true);
			ev.view = e.view || window;
			ev.detail = 1;
			ev.screenX = target.screenX || 0;
			ev.screenY = target.screenY || 0;
			ev.clientX = target.clientX || 0;
			ev.clientY = target.clientY || 0;
			ev.ctrlKey = !!e.ctrlKey;
			ev.altKey = !!e.altKey;
			ev.shiftKey = !!e.shiftKey;
			ev.metaKey = !!e.metaKey;
			ev.button = 0;
			ev.relatedTarget = null;
			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	me.getTouchAction = function(eventPassthrough, addPinch) {
		var touchAction = 'none';
		if ( eventPassthrough === 'vertical' ) {
			touchAction = 'pan-y';
		} else if (eventPassthrough === 'horizontal' ) {
			touchAction = 'pan-x';
		}
		if (addPinch && touchAction != 'none') {
			// add pinch-zoom support if the browser supports it, but if not (eg. Chrome <55) do nothing
			touchAction += ' pinch-zoom';
		}
		return touchAction;
	};

	me.getRect = function(el) {
		if (el instanceof SVGElement) {
			var rect = el.getBoundingClientRect();
			return {
				top : rect.top,
				left : rect.left,
				width : rect.width,
				height : rect.height
			};
		} else {
			return {
				top : el.offsetTop,
				left : el.offsetLeft,
				width : el.offsetWidth,
				height : el.offsetHeight
			};
		}
	};

	return me;
})();
function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	// https://github.com/cubiq/iscroll/issues/1029
	if (!this.options.useTransition && !this.options.useTransform) {
		if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
			this.scrollerStyle.position = "relative";
		}
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	if ( this.options.probeType == 3 ) {
		this.options.useTransition = false;	}

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0-snapshot',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */
		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;

			if ( this.options.probeType == 1 ) {
				this._execEvent('scroll');
			}
		}

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}
/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		utils.getRect(this.wrapper);		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

		var rect = utils.getRect(this.scroller);
/* REPLACE START: refresh */

		this.scrollerWidth	= rect.width;
		this.scrollerHeight	= rect.height;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
		
		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;
		
		if(utils.hasPointer && !this.options.disablePointer) {
			// The wrapper should have `touchAction` property for using pointerEvent.
			this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, true);

			// case. not support 'pinch-zoom'
			// https://github.com/cubiq/iscroll/issues/1118#issuecomment-270057583
			if (!this.wrapper.style[utils.style.touchAction]) {
				this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, false);
			}
		}
		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},	

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		var elRect = utils.getRect(el);
		var wrapperRect = utils.getRect(this.wrapper);
		if ( offsetX === true ) {
			offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		if (!this.options.useTransition) {
			return;
		}
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		if(!durationProp) {
			return;
		}

		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				alert('ok2')
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el,
				rect;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					rect = utils.getRect(el[i]);
					if ( i === 0 || rect.left <= utils.getRect(el[i-1]).left ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-rect.left, this.maxScrollX);
					y = Math.max(-rect.top, this.maxScrollY);
					cx = x - Math.round(rect.width / 2);
					cy = y - Math.round(rect.height / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: rect.width,
						height: rect.height,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);
				
				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}

			if ( that.options.probeType == 3 ) {
				that._execEvent('scroll');
			}
		}

		this.isAnimating = true;
		step();
	},

	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		if(!durationProp) {
			return;
		}
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				alert('ok3')
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars && this.wrapper.parentNode ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);


		if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.scroller._execEvent('scroll');
		} else if ( this.scroller.options.probeType > 1 ) {
			this.scroller._execEvent('scroll');
		}


// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		if(!durationProp) {
			return;
		}

		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				alert('ok1')
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		utils.getRect(this.wrapper);	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);

/********************************/

/*! glDatePicker v2.0  | Tue Jan 1 2013 | http://glad.github.com/glDatePicker/ */;
(function(){$.fn.glDatePicker=function(a){var G=this.data("glDatePicker");return!G?this.each(function(){return $(this).data("glDatePicker",new O(this,a))}):!0===a?G:this};$.fn.glDatePicker.defaults={cssName:"default",zIndex:1E3,borderSize:1,calendarOffset:{x:0,y:1},showAlways:!1,hideOnClick:!0,allowMonthSelect:!0,allowYearSelect:!0,todayDate:new Date,selectedDate:null,prevArrow:"\u25c4",nextArrow:"\u25ba",selectableDates:null,selectableDateRange:null,specialDates:null,selectableMonths:null,selectableYears:null,
selectableDOW:null,monthNames:null,dowNames:null,dowOffset:0,onClick:function(a,G,g){a.val(g.toLocaleDateString())},onHover:function(){},onShow:function(a){a.show()},onHide:function(a){a.hide()},firstDate:null};var O=function(){function a(a,g){var d=this;d.el=$(a);var b=d.el;d.options=$.extend(!0,{},$.fn.glDatePicker.defaults,g);var c=d.options;d.calendar=$($.find("[gldp-el="+b.attr("gldp-id")+" ]"));c.selectedDate=c.selectedDate||c.todayDate;c.firstDate=(new Date(c.firstDate||c.selectedDate))._first();
(b.attr("gldp-id")||"").length||b.attr("gldp-id","gldp-"+Math.round(1E10*Math.random()));b.addClass("gldp-el").bind("click",function(b){d.show(b)}).bind("focus",function(b){d.show(b)});d.calendar.length&&!c.showAlways&&d.calendar.hide();$(document).bind("mouseup",function(a){var a=a.target,c=d.calendar;!b.is(a)&&(!c.is(a)&&0===c.has(a).length&&c.is(":visible"))&&d.hide()});d.render()}a.prototype={show:function(){$.each($(".gldp-el").not(this.el),function(a,g){if(g.length)g.options.onHide(g.calendar)});
this.options.onShow(this.calendar)},hide:function(){if(this.options&&!this.options.showAlways)this.options.onHide(this.calendar)},render:function(a){var g=this,d=g.el,b=g.options,c=g.calendar,j="gldp-"+b.cssName,t=b.todayDate._val(),u=t.time,h=b.borderSize+"px",y=function(b,m,a){for(var c=[],e=b;e<=m;e++)c.push(e);if(a){var d=[];$.each(a,function(a,c){c>=b&&(c<=m&&0>d._indexOf(c))&&d.push(c)});c=d.length?d:c}c.sort();return c},H=y(0,11,b.selectableMonths),v=y(t.year-5,t.year+5,b.selectableYears),
y=y(0,6,b.selectableDOW),z=b.dowNames||"Sun Mon Tue Wed Thu Fri Sat".split(" "),t=b.monthNames||"January February March April May June July August September October November December".split(" "),f=d.outerWidth(),e,k=f/7+6*(b.borderSize/7),f=f/8+7*(b.borderSize/8);c.length?eval(c.data("is"))||(f=c.outerWidth(),e=c.outerHeight(),k=f/7+6*(b.borderSize/7),f=e/8+7*(b.borderSize/8)):(g.calendar=c=$("<div/>").attr("gldp-el",d.attr("gldp-id")).data("is",!0).css({display:b.showAlways?void 0:"none",zIndex:b.zIndex,
width:7*k+"px"}),$("body").append(c));d.is(":visible")||c.hide();c.removeClass().addClass(j).children().remove();j=function(){var i=d.offset();c.css({top:i.top+d.outerHeight()+b.calendarOffset.y+"px",left:i.left+b.calendarOffset.x+"px",width:d.width()})};$(window).resize(j);j();var j={width:k+"px",height:f+"px",lineHeight:f+"px"},f=function(i){for(var m=new Date(b.firstDate),i=i||0;;){m.setMonth(m.getMonth()+i);m.setDate(Math.min(1,m._max()));if(0==i)break;var c=m._val(),a=c.year;if(-1!=H._indexOf(c.month))if(-1!=
v._indexOf(a))break;else if(a<v[0]||a>v[v.length-1])return null}return m},A=f(-1),B=f(1),f=b.firstDate=f();e=f._val();var I=e.month,J=e.year,f=new Date(f);e=Math.abs(Math.min(6,Math.max(0,b.dowOffset)));var l=f.getDay()-e,l=1>l?-7-l:-l,z=z.concat(z).slice(e,e+7);f._add(l);e=$("<div/>").addClass(" core border monyear ").css($.extend({},j,{borderWidth:h+" 0 0 "+h})).append($("<a/>").addClass("prev-arrow"+(A?"":"-off")).html(b.prevArrow)).mousedown(function(){return!1}).click(function(i){""!=b.prevArrow&&
A&&(i.stopPropagation(),A&&(b.firstDate=A,g.render()))});k=5*k-5*b.borderSize+b.borderSize;k=$("<div/>").addClass(" core border monyear title").css($.extend({},j,{width:k+"px",borderTopWidth:h,marginLeft:"-"+h}));l=$("<div/>").addClass(" core border monyear ").css($.extend({},j,{marginLeft:"-"+h,borderWidth:h+" "+h+" 0 0"})).append($("<a/>").addClass("next-arrow"+(B?"":"-off")).html(b.nextArrow)).mousedown(function(){return!1}).click(function(i){""!=b.nextArrow&&B&&(i.stopPropagation(),B&&(b.firstDate=
B,g.render()))});c.append(e).append(k).append(l);for(l=e=0;7>e;e++)for(var q=0;7>q;q++,l++){var C=new Date(f),n="day",r=b.zIndex+l,w=$("<div/>");if(e){C._add(q+7*(e-1));var p=C._val(),x=p.time,K=null,s=!0,D=function(b,a){!0===b.repeatYear&&a.setYear(p.year);!0===b.repeatMonth&&a.setMonth(p.month);return a._val()};w.html(p.date);b.selectableDateRange&&(s=!1,$.each(b.selectableDateRange,function(b,a){var c=a.from,d=a.to||null,d=d||new Date(a.from.getFullYear(),a.from.getMonth(),a.from._max()),c=D(a,
c),d=D(a,d);if(x>=c.time&&x<=d.time)return s=!0}));if(b.selectableDates){if(b.selectableDateRange&&!s||s&&!b.selectableDateRange)s=!1;$.each(b.selectableDates,function(b,a){if(D(a,a.date).time==x)return s=!0})}!s||0>v._indexOf(p.year)||0>H._indexOf(p.month)||0>y._indexOf(p.day)?n="noday":(n="sun mon tue wed thu fri sat".split(" ")[p.day],I!=p.month&&(n+=" outday"),u==x&&(n="today",r+=50),b.selectedDate._time()==x&&(n="selected",r+=51),b.specialDates&&$.each(b.specialDates,function(b,a){D(a,a.date).time==
x&&(n=a.cssClass||"special",r+=52,K=a.data)}),w.mousedown(function(){return!1}).hover(function(a){a.stopPropagation();a=$(this).data("data");b.onHover(d,w,a.date,a.data)}).click(function(a){a.stopPropagation();a=$(this).data("data");b.selectedDate=b.firstDate=a.date;g.render(function(){!b.showAlways&&b.hideOnClick&&g.hide()});b.onClick(d,$(this),a.date,a.data)}))}else n="dow",w.html(z[q]),C=null;$.extend(j,{borderTopWidth:h,borderBottomWidth:h,borderLeftWidth:0<e||!e&&!q?h:0,borderRightWidth:0<e||
!e&&6==q?h:0,marginLeft:0<q?"-"+h:0,marginTop:0<e?"-"+h:0,zIndex:r});w.data("data",{date:C,data:K}).addClass(" core border "+n).css(j);c.append(w)}var N=function(a){b.allowMonthSelect&&(L.css({display:!a?"none":"inline-block"}),E.css({display:!a?"inline-block":"none"}));b.allowYearSelect&&(M.css({display:a?"none":"inline-block"}),F.css({display:a?"inline-block":"none"}))},u=function(){b.firstDate=new Date(F.val(),E.val(),1);g.render()},E=$("<select/>").hide().change(u),F=$("<select/>").hide().change(u),
L=$("<span/>").html(t[I]).mousedown(function(){return!1}).click(function(a){a.stopPropagation();N(!1)}),M=$("<span/>").html(J).mousedown(function(){return!1}).click(function(a){a.stopPropagation();N(!0)});$.each(t,function(a,c){if(b.allowMonthSelect&&-1!=H._indexOf(a)){var d=$("<option/>").html(c).attr("value",a);a==I&&d.attr("selected","selected");E.append(d)}});$.each(v,function(a,c){if(b.allowYearSelect){var d=$("<option/>").html(c).attr("value",c);c==J&&d.attr("selected","selected");F.append(d)}});
u=$("<div/>").append(L).append(E).append(M).append(F);k.children().remove();k.append(u);(a||function(){})()}};return a}();Date.prototype._clear=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this};Date.prototype._time=function(){return this._clear().getTime()};Date.prototype._max=function(){return[31,28+(1==(new Date(this.getYear(),1,29)).getMonth()?1:0),31,30,31,30,31,31,30,31,30,31][this.getMonth()]};Date.prototype._add=function(a){this.setDate(this.getDate()+
a)};Date.prototype._first=function(){var a=new Date(this);a.setDate(1);return a};Date.prototype._val=function(){this._clear();return{year:this.getFullYear(),month:this.getMonth(),date:this.getDate(),time:this.getTime(),day:this.getDay()}};Array.prototype._indexOf=function(a){return $.inArray(a,this)}})();

/* isMobile */
function isMobile(){var e=false;(function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e}
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/************ VIEWPORT ***********/
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}


var clocks_running;

function run_clocks (){
	 
	
	 var time1;
	 var time2;
	 var time3;
	 var time4;
	 var time5;
	 var time6;
	 var time7;
	
	    function updateClock(){
	        time1 = moment().tz($('.clock:eq(0)').attr('timezone')),
	            second1 = time1.seconds() * 6,
	            minute1 = time1.minutes() * 6 + second1 / 60,
	            hour1 = ((time1.hours() % 12) / 12) * 360 + 90 + minute1 / 12;

		        $('#hour_1').css("transform", "rotate(" + hour1 + "deg)");
		        $('#minute_1').css("transform", "rotate(" + minute1 + "deg)");
		        $('#second_1').css("transform", "rotate(" + second1 + "deg)");
		        
		        
		        time2 = moment().tz($('.clock:eq(1)').attr('timezone')),
	            second2 = time2.seconds() * 6,
	            minute2 = time2.minutes() * 6 + second2 / 60,
	            hour2 = ((time2.hours() % 12) / 12) * 360 + 90 + minute2 / 12;
	
		        $('#hour_2').css("transform", "rotate(" + hour2 + "deg)");
		        $('#minute_2').css("transform", "rotate(" + minute2 + "deg)");
		        $('#second_2').css("transform", "rotate(" + second2 + "deg)");
		        
		        time3 = moment().tz($('.clock:eq(2)').attr('timezone')),
		        second3 = time3.seconds() * 6,
		        minute3 = time3.minutes() * 6 + second3 / 60,
		        hour3 = ((time3.hours() % 12) / 12) * 360 + 90 + minute3 / 12;
	
			    $('#hour_3').css("transform", "rotate(" + hour3 + "deg)");
			    $('#minute_3').css("transform", "rotate(" + minute3 + "deg)");
			    $('#second_3').css("transform", "rotate(" + second3 + "deg)");
			    
			    time4 = moment().tz($('.clock:eq(3)').attr('timezone')),
			    second4 = time4.seconds() * 6,
			    minute4 = time4.minutes() * 6 + second4 / 60,
			    hour4 = ((time4.hours() % 12) / 12) * 360 + 90 + minute4 / 12;
	
				$('#hour_4').css("transform", "rotate(" + hour4 + "deg)");
				$('#minute_4').css("transform", "rotate(" + minute4 + "deg)");
				$('#second_4').css("transform", "rotate(" + second4 + "deg)");
				
				time5 = moment().tz($('.clock:eq(4)').attr('timezone')),
				second5 = time5.seconds() * 6,
				minute5 = time5.minutes() * 6 + second5 / 60,
				hour5 = ((time5.hours() % 12) / 12) * 360 + 90 + minute5 / 12;
				
				$('#hour_5').css("transform", "rotate(" + hour5 + "deg)");
				$('#minute_5').css("transform", "rotate(" + minute5 + "deg)");
				$('#second_5').css("transform", "rotate(" + second5 + "deg)");
				
				time6 = moment().tz($('.clock:eq(5)').attr('timezone')),
				second6 = time6.seconds() * 6,
				minute6 = time6.minutes() * 6 + second6 / 60,
				hour6 = ((time6.hours() % 12) / 12) * 360 + 90 + minute6 / 12;
				
				$('#hour_6').css("transform", "rotate(" + hour6 + "deg)");
				$('#minute_6').css("transform", "rotate(" + minute6 + "deg)");
				$('#second_6').css("transform", "rotate(" + second6 + "deg)");
				
				time7 = moment().tz($('.clock:eq(6)').attr('timezone')),
				second7 = time7.seconds() * 6,
				minute7 = time7.minutes() * 6 + second7 / 60,
				hour7 = ((time7.hours() % 12) / 12) * 360 + 90 + minute7 / 12;
				
				$('#hour_7').css("transform", "rotate(" + hour7 + "deg)");
				$('#minute_7').css("transform", "rotate(" + minute7 + "deg)");
				$('#second_7').css("transform", "rotate(" + second7 + "deg)");
		    }
	
		    function timedUpdate () {
		        updateClock();
		        clocks_running = setTimeout(timedUpdate, 1000);
		    }
		  
		    timedUpdate();
		
}
 

function launch_audio(){
    var AudioContext = window.AudioContext 
    || window.webkitAudioContext
    || false; 

	if (AudioContext) {
	   
 
    var audioCtx = new AudioContext;
    var buf;
    var analyser = audioCtx.createAnalyser();
    var src;
    

    var req = new XMLHttpRequest(); 
    req.open("GET","/music/music.mp3",true); 
    req.responseType = "arraybuffer"; 
    req.onload = function() { 
        //decode the loaded data 
        audioCtx.decodeAudioData(req.response, function(buffer) { 
            buf = buffer;
           

            $('.play_btn').bind('touchstart',function(){
            	if(!playing){play();}
            });
            
            $('.pause_btn').bind('touchstart',function(){
            	src.stop(0); 
            	playing = false;
            });
            
            
            $('.play_btn').bind('click',function(){
            	if(!playing){play();}
            });
            
            $('.pause_btn').bind('click',function(){
            	src.stop(); 
            	playing = false;

            });
            
            if(!isHandheld && !mobilePlatform){play();}
            
             
        }); 
    }; 
    req.send(); 
    
    function play() { 
    	playing = true;
    	src = audioCtx.createBufferSource();  
    	src.buffer = buf; 
       
        src.connect(analyser);
        analyser.connect(audioCtx.destination);
        src.loop = true;
        src.start(0); 
       
    }
    
   

   
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    var canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 1, //width of the meters in the spectrum
        gap = 0, //gap between meters
        capHeight = 2,
        capStyle = '#fff',
        meterNum = 80, //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    canvasCtx = canvas.getContext('2d'),
    gradient = canvasCtx.createLinearGradient(0, 0, 0, 60);
    gradient.addColorStop(1, '#CCCCCC');
    gradient.addColorStop(0.3, '#999999');
    gradient.addColorStop(0, '#666666');
    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        canvasCtx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step]/6;
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            canvasCtx.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                canvasCtx.fillRect(i * 3, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                canvasCtx.fillRect(i * 3, cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            };
            canvasCtx.fillStyle = gradient; //set the filllStyle to gradient for a better look
            canvasCtx.fillRect(i * 3 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);
    }
    renderFrame();
	} else {
	
		
	}
}

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */




/*
 * jQuery Shorten plugin 1.1.0
 *
 * Copyright (c) 2014 Viral Patel
 * http://viralpatel.net
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

/*
** updated by Jeff Richardson
** Updated to use strict,
** IE 7 has a "bug" It is returning undefined when trying to reference string characters in this format
** content[i]. IE 7 allows content.charAt(i) This works fine in all modern browsers.
** I've also added brackets where they weren't added just for readability (mostly for me).
*/

(function($) {
    $.fn.shorten = function(settings) {
        "use strict";

        var config = {
            showChars: 100,
            minHideChars: 10,
            ellipsesText: "...",
            moreText: "more",
            lessText: "less",
            onLess: function() {},
            onMore: function() {},
            errMsg: null,
            force: false
        };

        if (settings) {
            $.extend(config, settings);
        }

        if ($(this).data('jquery.shorten') && !config.force) {
            return false;
        }
        $(this).data('jquery.shorten', true);

        $(document).off("click", '.morelink');

        $(document).on({
            click: function() {

                var $this = $(this);
                if ($this.hasClass('less')) {
                    $this.removeClass('less');
                    $this.html(config.moreText);
                    $this.parent().prev().animate({'height':'0'+'%'},0, 'linear', function () { $this.parent().prev().prev().show(); }).hide(0, function() {
                        config.onLess();
                        $('body,html').stop(true).animate({
        					 scrollTop:(windowHeight/1.5)+1
        				 },600,'easeOutQuint');
                      });

                } else {
                    $this.addClass('less');
                    $this.html(config.lessText);
                    $this.parent().prev().animate({'height':'100'+'%'},0, 'linear', function () { $this.parent().prev().prev().hide(); }).show(0, function() {
                        config.onMore();
                        $('body,html').stop(true).animate({
         					 scrollTop:$this.parent().prev().position().top-10
         				 },600,'easeOutQuint');
                      });
                    
                }
                return false;
            }
        }, '.morelink');

        return this.each(function() {
            var $this = $(this);

            var content = $this.html();
            var contentlen = $this.text().length;
            if (contentlen > config.showChars + config.minHideChars) {
                var c = content.substr(0, config.showChars);
                if (c.indexOf('<') >= 0) // If there's HTML don't want to cut it
                {
                    var inTag = false; // I'm in a tag?
                    var bag = ''; // Put the characters to be shown here
                    var countChars = 0; // Current bag size
                    var openTags = []; // Stack for opened tags, so I can close them later
                    var tagName = null;

                    for (var i = 0, r = 0; r <= config.showChars; i++) {
                        if (content[i] == '<' && !inTag) {
                            inTag = true;

                            // This could be "tag" or "/tag"
                            tagName = content.substring(i + 1, content.indexOf('>', i));

                            // If its a closing tag
                            if (tagName[0] == '/') {


                                if (tagName != '/' + openTags[0]) {
                                    config.errMsg = 'ERROR en HTML: the top of the stack should be the tag that closes';
                                } else {
                                    openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                                }

                            } else {
                                // There are some nasty tags that don't have a close tag like <br/>
                                if (tagName.toLowerCase() != 'br') {
                                    openTags.unshift(tagName); // Add to start the name of the tag that opens
                                }
                            }
                        }
                        if (inTag && content[i] == '>') {
                            inTag = false;
                        }

                        if (inTag) { bag += content.charAt(i); } // Add tag name chars to the result
                        else {
                            r++;
                            if (countChars <= config.showChars) {
                                bag += content.charAt(i); // Fix to ie 7 not allowing you to reference string characters using the []
                                countChars++;
                            } else // Now I have the characters needed
                            {
                                if (openTags.length > 0) // I have unclosed tags
                                {
                                    //console.log('They were open tags');
                                    //console.log(openTags);
                                    for (j = 0; j < openTags.length; j++) {
                                        //console.log('Cierro tag ' + openTags[j]);
                                        bag += '</' + openTags[j] + '>'; // Close all tags that were opened

                                        // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    c = $('<div/>').html(bag + '<span class="ellip">' + config.ellipsesText + '</span>').html();
                }else{
                    c+=config.ellipsesText;
                }

                var html = '<div class="shortcontent">' + c +
                    '</div><div class="allcontent">' + content +
                    '</div><span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';

                $this.html(html);
                $this.find(".allcontent").hide(); // Hide all text
                $('.shortcontent p:last', $this).css('margin-bottom', 0); //Remove bottom margin on last paragraph as it's likely shortened
            }
        });

    };

})(jQuery);

/*! image-scale v2.2 | ©2012-2016 GestiXi | Licensed under the MIT license */
(function(l){"function"===typeof define&&define.amd?define(["jquery"],l):"object"===typeof module&&module.exports?module.exports=function(m,a){void 0===a&&(a="undefined"!==typeof window?require("jquery"):require("jquery")(m));l(a);return a}:l(jQuery)})(function(l){l.fn.imageScale=function(a){return this.each(function(){var f=this,d=l(this),b=d.data("imageScale"),g="IMG"===this.tagName?d:d.find("img");if(b)if("string"==typeof a)b[a]();else if("object"==typeof a)b[a.method||"scale"](!1,a);else b.scale();
else{var e=g[0].complete,k=l.extend({},l.fn.imageScale.defaults,"object"==typeof a&&a),h=function(){d.data("imageScale",b=new m(f,k));b.scale(!0,k)};e?h.apply(d[0]):g.on("load",h).attr("src",g.attr("src"))}})};l.fn.imageScale.defaults={scale:"best-fill",align:"center",parent:null,hideParentOverflow:!0,fadeInDuration:0,rescaleOnResize:!1,didScale:function(a,f){},logLevel:0};var m=function(a,f){var d=this;d.options=f;d.element=a;var b=d.$element=l(a),g=d.$img="IMG"===a.tagName?b:b.find("img"),e=d.img=
g[0];d.src=g.attr("src");d.imgWidth=e.naturalWidth||e.width;d.imgHeight=e.naturalHeight||e.height;b=d.$parent=f.parent?f.parent:l(b.parent()[0]);d.parent=b[0];"static"===b.css("position")&&b.css("position","relative");f.rescaleOnResize&&l(window).resize(function(a){d.scheduleScale()})};l.fn.imageScale.Constructor=m;m.prototype={NONE:"none",FILL:"fill",BEST_FILL:"best-fill",BEST_FIT:"best-fit",BEST_FIT_DOWN_ONLY:"best-fit-down",ALIGN_LEFT:"left",ALIGN_RIGHT:"right",ALIGN_CENTER:"center",ALIGN_TOP:"top",
ALIGN_BOTTOM:"bottom",ALIGN_TOP_LEFT:"top-left",ALIGN_TOP_RIGHT:"top-right",ALIGN_BOTTOM_LEFT:"bottom-left",ALIGN_BOTTOM_RIGHT:"bottom-right",constructor:m,element:null,options:null,scale:function(a,f){if(!this._isDestroyed&&!1!==this._canScale){var d=this,b=this.options,g=this.$parent,e=this.element,k=this.$element,h=this.$img;if(a)b.hideParentOverflow&&g.css({overflow:"hidden"});else if(this.src!==h.attr("src")){this.destroy();k.data("imageScale",null);k.imageScale(b);return}this._didScheduleScale=
!1;if(!b.rescaleOnResize||f||this._needUpdate(this.parent)){f=f?f:{};if(h=f.transition)this._canScale=!1,k.css("transition","all "+h+"ms"),setTimeout(function(){d._canScale=null;k.css("transition","null")},h);var h=f.destWidth?f.destWidth:g.outerWidth(),c=f.destHeight?f.destHeight:g.outerHeight(),l=f.destWidth?f.destWidth:g.innerWidth(),n=f.destHeight?f.destHeight:g.innerHeight(),g=h-l,l=c-n,n=k.attr("data-scale"),m=k.attr("data-align"),n=n?n:b.scale,r=m?m:b.align,m=b.fadeInDuration;if(n){this._cacheDestWidth===
h&&this._cacheDestHeight===c&&2<b.logLevel&&console.log("imageScale - DEBUG NOTICE: The parent size hasn't changed: dest width: '"+h+"' - dest height: '"+c+"'.",e);var p=this.imgWidth,q=this.imgHeight;h&&c&&p&&q?(this._cacheDestWidth=h,this._cacheDestHeight=c,e=this._innerFrameForSize(n,r,p,q,h,c),g&&(e.x-=g/2),l&&(e.y-=l/2),k.css({position:"absolute",top:e.y+"px",left:e.x+"px",width:e.width+"px",height:e.height+"px","max-width":"none"}),a&&m&&(k.css({display:"none"}),k.fadeIn(m)),b.didScale.call(this,
a,f)):0<b.logLevel&&console.error("imageScale - DEBUG ERROR: The dimensions are incorrect: source width: '"+p+"' - source height: '"+q+"' - dest width: '"+h+"' - dest height: '"+c+"'.",e)}else 2<b.logLevel&&console.log("imageScale - DEBUG NOTICE: The scale property is null.",e)}}},destroy:function(){this._isDestroyed=!0;this.$element.removeData("imageScale")},_innerFrameForSize:function(a,f,d,b,g,e){var k,h,c;c={x:0,y:0,width:g,height:e};if(a===this.FILL)return c;k=g/d;h=e/b;switch(a){case this.BEST_FIT_DOWN_ONLY:a!==
this.BEST_FIT_DOWN_ONLY&&1<this.options.logLevel&&console.warn("imageScale - DEBUG WARNING: The scale '"+a+"' was not understood.");a=d>g||b>e?k<h?k:h:1;break;case this.BEST_FIT:a=k<h?k:h;break;case this.NONE:a=1;break;default:a=k>h?k:h}d*=a;b*=a;c.width=Math.round(d);c.height=Math.round(b);switch(f){case this.ALIGN_LEFT:c.x=0;c.y=e/2-b/2;break;case this.ALIGN_RIGHT:c.x=g-d;c.y=e/2-b/2;break;case this.ALIGN_TOP:c.x=g/2-d/2;c.y=0;break;case this.ALIGN_BOTTOM:c.x=g/2-d/2;c.y=e-b;break;case this.ALIGN_TOP_LEFT:c.x=
0;c.y=0;break;case this.ALIGN_TOP_RIGHT:c.x=g-d;c.y=0;break;case this.ALIGN_BOTTOM_LEFT:c.x=0;c.y=e-b;break;case this.ALIGN_BOTTOM_RIGHT:c.x=g-d;c.y=e-b;break;default:f!==this.ALIGN_CENTER&&1<this.options.logLevel&&console.warn("imageScale - DEBUG WARNING: The align '"+f+"' was not understood."),c.x=g/2-d/2,c.y=e/2-b/2}return c},_needUpdate:function(a){a=a.clientHeight+" "+a.clientWidth;return this._lastParentSize!==a?(this._lastParentSize=a,!0):!1},scheduleScale:function(){if(!this._didScheduleScale)if(window.requestAnimationFrame){var a=
this;this._didScheduleScale=!0;requestAnimationFrame(function(){setTimeout(function(){a.scale()},0)})}else this.scale()}}});



//zoomoz
//Everything but the relevant parts stripped out by Janne Aukia
//for Zoomooz on April 4 2012 by using jscoverage coverage analysis tool.

//=== Sylvester ===
//Vector and Matrix mathematics modules for JavaScript
//Copyright (c) 2007 James Coglan
//
//Permission is hereby granted, free of charge, to any person obtaining
//a copy of this software and associated documentation files (the "Software"),
//to deal in the Software without restriction, including without limitation
//the rights to use, copy, modify, merge, publish, distribute, sublicense,
//and/or sell copies of the Software, and to permit persons to whom the
//Software is furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included
//in all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//DEALINGS IN THE SOFTWARE.

var Sylvester = {
version: '0.1.3',
precision: 1e-6
};

function Matrix() {}
Matrix.prototype = {

// Returns a copy of the matrix
dup: function() {
 return Matrix.create(this.elements);
},

// Maps the matrix to another matrix (of the same dimensions) according to the given function
/*map: function(fn) {
 var els = [], ni = this.elements.length, ki = ni, i, nj, kj = this.elements[0].length, j;
 do { i = ki - ni;
   nj = kj;
   els[i] = [];
   do { j = kj - nj;
     els[i][j] = fn(this.elements[i][j], i + 1, j + 1);
   } while (--nj);
 } while (--ni);
 return Matrix.create(els);
},*/

// Returns true iff the matrix can multiply the argument from the left
canMultiplyFromLeft: function(matrix) {
 var M = matrix.elements || matrix;
 if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
 // this.columns should equal matrix.rows
 return (this.elements[0].length == M.length);
},

// Returns the result of multiplying the matrix from the right by the argument.
// If the argument is a scalar then just multiply all the elements. If the argument is
// a vector, a vector is returned, which saves you having to remember calling
// col(1) on the result.
multiply: function(matrix) {
 /*if (!matrix.elements) {
   return this.map(function(x) { return x * matrix; });
 }*/

 var returnVector = matrix.modulus ? true : false;
 var M = matrix.elements || matrix;
 if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
 if (!this.canMultiplyFromLeft(M)) { return null; }
 var ni = this.elements.length, ki = ni, i, nj, kj = M[0].length, j;
 var cols = this.elements[0].length, elements = [], sum, nc, c;
 do { i = ki - ni;
   elements[i] = [];
   nj = kj;
   do { j = kj - nj;
     sum = 0;
     nc = cols;
     do { c = cols - nc;
       sum += this.elements[i][c] * M[c][j];
     } while (--nc);
     elements[i][j] = sum;
   } while (--nj);
 } while (--ni);

 M = Matrix.create(elements);
 return returnVector ? M.col(1) : M;
},

// Returns true iff the matrix is square
isSquare: function() {
 return (this.elements.length == this.elements[0].length);
},

// Make the matrix upper (right) triangular by Gaussian elimination.
// This method only adds multiples of rows to other rows. No rows are
// scaled up or switched, and the determinant is preserved.
toRightTriangular: function() {
 var M = this.dup(), els;
 var n = this.elements.length, k = n, i, np, kp = this.elements[0].length, p;
 do { i = k - n;
   if (M.elements[i][i] === 0) {
     for (j = i + 1; j < k; j++) {
       if (M.elements[j][i] !== 0) {
         els = []; np = kp;
         do { p = kp - np;
           els.push(M.elements[i][p] + M.elements[j][p]);
         } while (--np);
         M.elements[i] = els;
         break;
       }
     }
   }
   if (M.elements[i][i] !== 0) {
     for (j = i + 1; j < k; j++) {
       var multiplier = M.elements[j][i] / M.elements[i][i];
       els = []; np = kp;
       do { p = kp - np;
         // Elements with column numbers up to an including the number
         // of the row that we're subtracting can safely be set straight to
         // zero, since that's the point of this routine and it avoids having
         // to loop over and correct rounding errors later
         els.push(p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier);
       } while (--np);
       M.elements[j] = els;
     }
   }
 } while (--n);
 return M;
},

// Returns the determinant for square matrices
determinant: function() {
 if (!this.isSquare()) { return null; }
 var M = this.toRightTriangular();
 var det = M.elements[0][0], n = M.elements.length - 1, k = n, i;
 do { i = k - n + 1;
   det = det * M.elements[i][i];
 } while (--n);
 return det;
},

// Returns true iff the matrix is singular
isSingular: function() {
 return (this.isSquare() && this.determinant() === 0);
},

// Returns the result of attaching the given argument to the right-hand side of the matrix
augment: function(matrix) {
 var M = matrix.elements || matrix;
 if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
 var T = this.dup(), cols = T.elements[0].length;
 var ni = T.elements.length, ki = ni, i, nj, kj = M[0].length, j;
 if (ni != M.length) { return null; }
 do { i = ki - ni;
   nj = kj;
   do { j = kj - nj;
     T.elements[i][cols + j] = M[i][j];
   } while (--nj);
 } while (--ni);
 return T;
},

// Returns the inverse (if one exists) using Gauss-Jordan
inverse: function() {
 if (!this.isSquare() || this.isSingular()) { return null; }
 var ni = this.elements.length, ki = ni, i, j;
 var M = this.augment(Matrix.I(ni)).toRightTriangular();
 var np, kp = M.elements[0].length, p, els, divisor;
 var inverse_elements = [], new_element;
 // Matrix is non-singular so there will be no zeros on the diagonal
 // Cycle through rows from last to first
 do { i = ni - 1;
   // First, normalise diagonal elements to 1
   els = []; np = kp;
   inverse_elements[i] = [];
   divisor = M.elements[i][i];
   do { p = kp - np;
     new_element = M.elements[i][p] / divisor;
     els.push(new_element);
     // Shuffle of the current row of the right hand side into the results
     // array as it will not be modified by later runs through this loop
     if (p >= ki) { inverse_elements[i].push(new_element); }
   } while (--np);
   M.elements[i] = els;
   // Then, subtract this row from those above it to
   // give the identity matrix on the left hand side
   for (j = 0; j < i; j++) {
     els = []; np = kp;
     do { p = kp - np;
       els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i]);
     } while (--np);
     M.elements[j] = els;
   }
 } while (--ni);
 return Matrix.create(inverse_elements);
},

// Set the matrix's elements from an array. If the argument passed
// is a vector, the resulting matrix will be a single column.
setElements: function(els) {
 var i, elements = els.elements || els;
 if (typeof(elements[0][0]) != 'undefined') {
   var ni = elements.length, ki = ni, nj, kj, j;
   this.elements = [];
   do { i = ki - ni;
     nj = elements[i].length; kj = nj;
     this.elements[i] = [];
     do { j = kj - nj;
       this.elements[i][j] = elements[i][j];
     } while (--nj);
   } while(--ni);
   return this;
 }
 var n = elements.length, k = n;
 this.elements = [];
 do { i = k - n;
   this.elements.push([elements[i]]);
 } while (--n);
 return this;
}
};

//Constructor function
Matrix.create = function(elements) {
var M = new Matrix();
return M.setElements(elements);
};

//Identity matrix of size n
Matrix.I = function(n) {
var els = [], k = n, i, nj, j;
do { i = k - n;
 els[i] = []; nj = k;
 do { j = k - nj;
   els[i][j] = (i == j) ? 1 : 0;
 } while (--nj);
} while (--n);
return Matrix.create(els);
};;/*
* purecssmatrix.js, version 0.10, part of:
* http://janne.aukia.com/zoomooz
*
* 0.10 initial stand-alone version
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
*/

PureCSSMatrix = (function() {
 "use strict";

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 var regexp_is_deg = /deg$/;
 var regexp_filter_number = /([0-9.\-e]+)/g;
 var regexp_trans_splitter = /([a-zA-Z]+)\(([^\)]+)\)/g;

 //**********************************//
 //***  WebKitCSSMatrix in        ***//
 //***  pure Javascript           ***//
 //**********************************//

 function CssMatrix(trans) {
     if(trans && trans !== null && trans!="none") {
         if(trans instanceof Matrix) {
             this.setMatrix(trans);
         } else {
             this.setMatrixValue(trans);
         }
     } else {
         this.m = Matrix.I(3);
     }
 }

 CssMatrix.prototype.setMatrix = function(matr) {
     this.m = matr;
 };

 function rawRotationToRadians(raw) {
     var rot = parseFloat(filterNumber(raw));
     if(raw.match(regexp_is_deg)) {
         rot = (2*Math.PI)*rot/360.0;
     }
     return rot;
 }

 CssMatrix.prototype.setMatrixValue = function(transString) {
     var mtr = Matrix.I(3);
     var items;
     while((items = regexp_trans_splitter.exec(transString)) !== null) {
         var action = items[1].toLowerCase();
         var val = items[2].split(",");
         var trans;
         if(action=="matrix") {
             trans = Matrix.create([[parseFloat(val[0]),parseFloat(val[2]),parseFloat(filterNumber(val[4]))],
                            [parseFloat(val[1]),parseFloat(val[3]),parseFloat(filterNumber(val[5]))],
                            [                0,                0,                              1]]);
         } else if(action=="translate") {
             trans = Matrix.I(3);
             trans.elements[0][2] = parseFloat(filterNumber(val[0]));
             trans.elements[1][2] = parseFloat(filterNumber(val[1]));
         } else if(action=="scale") {
             var sx = parseFloat(val[0]);
             var sy;
             if(val.length>1) {
                 sy = parseFloat(val[1]);
             } else {
                 sy = sx;
             }
             trans = Matrix.create([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]);
         } else if(action=="rotate") {
             trans = Matrix.RotationZ(rawRotationToRadians(val[0]));
         } else if(action=="skew" || action=="skewx") {
             // TODO: supports only one parameter skew
             trans = Matrix.I(3);
             trans.elements[0][1] = Math.tan(rawRotationToRadians(val[0]));
         } else if(action=="skewy") {
             // TODO: test that this works (or unit test them all!)
             trans = Matrix.I(3);
             trans.elements[1][0] = Math.tan(rawRotationToRadians(val[0]));
         } else {
             console.log("Problem with setMatrixValue", action, val);
         }

         mtr = mtr.multiply(trans);
     }

     this.m = mtr;
 };

 CssMatrix.prototype.multiply = function(m2) {
     return new CssMatrix(this.m.multiply(m2.m));
 };

 CssMatrix.prototype.inverse = function() {
     if(Math.abs(this.m.elements[0][0])<0.000001) {
         /* fixes a weird displacement problem with 90 deg rotations */
         this.m.elements[0][0] = 0;
     }
     return new CssMatrix(this.m.inverse());
 };

 CssMatrix.prototype.translate = function(x,y) {
     var trans = Matrix.I(3);
     trans.elements[0][2] = x;
     trans.elements[1][2] = y;
     return new CssMatrix(this.m.multiply(trans));
 };

 CssMatrix.prototype.scale = function(sx,sy) {
     var trans = Matrix.create([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]);
     return new CssMatrix(this.m.multiply(trans));
 };

 CssMatrix.prototype.rotate = function(rot) {
     var trans = Matrix.RotationZ(rot);
     return new CssMatrix(this.m.multiply(trans));
 };

 CssMatrix.prototype.toString = function() {
     var e = this.m.elements;
     var pxstr = "";
     if($.browser.mozilla || $.browser.opera) {
         pxstr = "px";
     }
     return "matrix("+printFixedNumber(e[0][0])+", "+printFixedNumber(e[1][0])+", "+
                      printFixedNumber(e[0][1])+", "+printFixedNumber(e[1][1])+", "+
                      printFixedNumber(e[0][2])+pxstr+", "+printFixedNumber(e[1][2])+pxstr+")";
 };

 //****************************************//
 //***  Not part of the WebkitCSSMatrix ***//
 //***  interface (but used in Zoomooz) ***//
 //****************************************//

 CssMatrix.prototype.elements = function() {
     var mv = this.m.elements;
     return {"a":mv[0][0],"b":mv[1][0],"c":mv[0][1],
             "d":mv[1][1],"e":mv[0][2],"f":mv[1][2]};
 };

 //**********************************//
 //***  Helpers                   ***//
 //**********************************//

 function filterNumber(x) {
     return x.match(regexp_filter_number);
 }

 function printFixedNumber(x) {
     return Number(x).toFixed(6);
 }

 return CssMatrix;
})();;/*
* jquery.zoomooz-helpers.js, part of:
* http://janne.aukia.com/zoomooz
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
*/

/*jslint sub: true */

if(!$.zoomooz) {
 $.zoomooz = {};
}

$.zoomooz.helpers = (function($, ns) {
 "use strict";

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 var browser_prefixes = ["-moz-","-webkit-","-o-","-ms-"];

 //**********************************//
 //***  Helpers                   ***//
 //**********************************//

 ns.forEachPrefix = function(func,includeNoPrefix) {
     for(var i=0;i<browser_prefixes.length;i++) {
         func(browser_prefixes[i]);
     }
     if(includeNoPrefix) {
         func("");
     }
 };

 ns.getElementTransform = function(elem) {
     var retVal;
     ns.forEachPrefix(function(prefix) {
         retVal = retVal || $(elem).css(prefix+"transform");
     },true);
     return retVal;
 };

 return ns;

})(jQuery, {});;/*
* jquery.zoomooz-anim.js, part of:
* http://janne.aukia.com/zoomooz
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
* LICENCE INFORMATION FOR DERIVED FUNCTIONS:
*
* Functions CubicBezierAtPosition and
* CubicBezierAtTime are written by Christian Effenberger,
* and correspond 1:1 to WebKit project functions.
* "WebCore and JavaScriptCore are available under the
* Lesser GNU Public License. WebKit is available under
* a BSD-style license."
*
*/

/*jslint sub: true */

(function($) {
 "use strict";

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 var animation_start_time;
 var animation_interval_timer;

 var regexp_filter_number = /([0-9.\-e]+)/g;
 var regexp_trans_splitter = /([a-z]+)\(([^\)]+)\)/g;
 var regexp_is_deg = /deg$/;

 var helpers = $.zoomooz.helpers;

 var default_settings = {
     duration: 450,
     easing: "ease",
     /* Native animation may cause issues with pixelated content while zooming,
        and there might be other issues with browser compatibility etc. so use
        it with care and test on your target devices/browsers :). */
     nativeanimation: false
 };

 var endCallbackTimeout;

 //**********************************//
 //***  Setup css hook for IE     ***//
 //**********************************//

 jQuery.cssHooks["MsTransform"] = {
     set: function( elem, value ) {
         elem.style.msTransform = value;
     }
 };

 jQuery.cssHooks["MsTransformOrigin"] = {
     set: function( elem, value ) {
         elem.style.msTransformOrigin = value;
     }
 };

 //**********************************//
 //***  jQuery functions          ***//
 //**********************************//

 $.fn.animateTransformation = function(transformation, settings, posOffset, animateEndCallback, animateStartedCallback) {
     settings = jQuery.extend({}, default_settings, settings);

     // FIXME: what would be the best way to handle leftover animations?
     if(endCallbackTimeout) {
         clearTimeout(endCallbackTimeout);
         endCallbackTimeout = null;
     }

     if(settings.nativeanimation && animateEndCallback) {
         endCallbackTimeout = setTimeout(animateEndCallback, settings.duration);
     }

     this.each(function() {
         var $target = $(this);

         if(!transformation) transformation = new PureCSSMatrix();

         var current_affine = constructAffineFixingRotation($target, posOffset);
         var final_affine = fixRotationToSameLap(current_affine, affineTransformDecompose(transformation));

         if(settings.nativeanimation) {
             $target.css(constructZoomRootCssTransform(matrixCompose(final_affine), settings.duration, settings.easing));
             if(animateStartedCallback) {
                 animateStartedCallback();
             }
         } else {
             animateTransition($target, current_affine, final_affine, settings, animateEndCallback, animateStartedCallback);
         }
     });
 };

 $.fn.setTransformation = function(transformation) {
     this.each(function() {
         var $target = $(this);
         var current_affine = constructAffineFixingRotation($target);
         var final_affine = fixRotationToSameLap(current_affine, affineTransformDecompose(transformation));
         $target.css(constructZoomRootCssTransform(matrixCompose(final_affine)));
     });
 };

 //**********************************//
 //***  Element positioning       ***//
 //**********************************//

 function constructZoomRootCssTransform(trans, duration, easing) {
     var propMap = {};

     helpers.forEachPrefix(function(prefix) {
         propMap[prefix+"transform"] = trans;
     },true);

     if(duration) {
         var transdur = roundNumber(duration/1000,6)+"s";
         propMap["-webkit-transition-duration"] = transdur;
         propMap["-o-transition-duration"] = transdur;
         propMap["-moz-transition-duration"] = transdur;
     }

     if(easing) {
         var transtiming = constructEasingCss(easing);
         propMap["-webkit-transition-timing-function"] = transtiming;
         propMap["-o-transition-timing-function"] = transtiming;
         propMap["-moz-transition-timing-function"] = transtiming;
     }

     return propMap;
 }

 //**********************************//
 //***  Non-native animation      ***//
 //**********************************//

 function animateTransition($target, st, et, settings, animateEndCallback, animateStartedCallback) {

     if(!st) {
         st = affineTransformDecompose(new PureCSSMatrix());
     }
     animation_start_time = (new Date()).getTime();
     if(animation_interval_timer) {
         clearInterval(animation_interval_timer);
         animation_interval_timer = null;
     }
     if(settings.easing) {
         settings.easingfunction = constructEasingFunction(settings.easing, settings.duration);
     }

     // first step
     animationStep($target, st, et, settings, animateEndCallback);

     if(animateStartedCallback) {
         animateStartedCallback();
     }

     animation_interval_timer = setInterval(function() { animationStep($target, st, et, settings, animateEndCallback); }, 1);
 }

 function animationStep($target, affine_start, affine_end, settings, animateEndCallback) {
     var current_time = (new Date()).getTime() - animation_start_time;
     var time_value;
     if(settings.easingfunction) {
         time_value = settings.easingfunction(current_time/settings.duration);
     } else {
         time_value = current_time/settings.duration;
     }

     $target.css(constructZoomRootCssTransform(matrixCompose(interpolateArrays(affine_start, affine_end, time_value))));

     if(current_time>settings.duration) {
         clearInterval(animation_interval_timer);
         animation_interval_timer = null;
         time_value=1.0;
         if(animateEndCallback) {
             animateEndCallback();
         }
     }

 }

 /* Based on pseudo-code in:
  * https://bugzilla.mozilla.org/show_bug.cgi?id=531344
  */
 function affineTransformDecompose(matrix) {
     var m = matrix.elements();
     var a=m.a, b=m.b, c=m.c, d=m.d, e=m.e, f=m.f;

     if(Math.abs(a*d-b*c)<0.001) {
         console.log("fail!");
         return;
     }

     var tx = e, ty = f;

     var sx = Math.sqrt(a*a+b*b);
     a = a/sx;
     b = b/sx;

     var k = a*c+b*d;
     c -= a*k;
     d -= b*k;

     var sy = Math.sqrt(c*c+d*d);
     c = c/sy;
     d = d/sy;
     k = k/sy;

     if((a*d-b*c)<0.0) {
         a = -a;
         b = -b;
         c = -c;
         d = -d;
         sx = -sx;
         sy = -sy;
     }

     var r = Math.atan2(b,a);
     return {"tx":tx, "ty":ty, "r":r, "k":Math.atan(k), "sx":sx, "sy":sy};
 }

 function matrixCompose(ia) {
     var ret = "";
     /* this probably made safari 5.1.1. + os 10.6.8 + non-unibody mac? */
     //ret += "translateZ(0) ";
     ret += "translate("+roundNumber(ia.tx,6)+"px,"+roundNumber(ia.ty,6)+"px) ";
     ret += "rotate("+roundNumber(ia.r,6)+"rad) skewX("+roundNumber(ia.k,6)+"rad) ";
     ret += "scale("+roundNumber(ia.sx,6)+","+roundNumber(ia.sy,6)+")";
     return ret;
 }

 //**********************************//
 //***  Easing functions          ***//
 //**********************************//

 function constructEasingCss(input) {
     if((input instanceof Array)) {
         return "cubic-bezier("+roundNumber(input[0],6)+","+roundNumber(input[1],6)+","+
                                roundNumber(input[2],6)+","+roundNumber(input[3],6)+")";
     } else {
         return input;
     }
 }

 function constructEasingFunction(input, dur) {
     var params = [];
     if((input instanceof Array)) {
         params = input;
     } else {
         switch(input) {
             case "linear": params = [0.0,0.0,1.0,1.0]; break;
             case "ease": params = [0.25,0.1,0.25,1.0]; break;
             case "ease-in": params = [0.42,0.0,1.0,1.0]; break;
             case "ease-out": params = [0.0,0.0,0.58,1.0]; break;
             case "ease-in-out": params = [0.42,0.0,0.58,1.0]; break;
         }
     }

     var easingFunc = function(t) {
         return cubicBezierAtTime(t, params[0], params[1], params[2], params[3], dur);
     };

     return easingFunc;
 }

 // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
 function cubicBezierAtPosition(t,P1x,P1y,P2x,P2y) {
     var x,y,k=((1-t)*(1-t)*(1-t));
     x=P1x*(3*t*t*(1-t))+P2x*(3*t*(1-t)*(1-t))+k;
     y=P1y*(3*t*t*(1-t))+P2y*(3*t*(1-t)*(1-t))+k;
     return {x:Math.abs(x),y:Math.abs(y)};
 }

 // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
 // 1:1 conversion to js from webkit source files
 // UnitBezier.h, WebCore_animation_AnimationBase.cpp
 function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
     var ax=0,bx=0,cx=0,ay=0,by=0,cy=0;
     // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
     function sampleCurveX(t) {return ((ax*t+bx)*t+cx)*t;}
     function sampleCurveY(t) {return ((ay*t+by)*t+cy)*t;}
     function sampleCurveDerivativeX(t) {return (3.0*ax*t+2.0*bx)*t+cx;}
     // The epsilon value to pass given that the animation is going to run over |dur| seconds. The longer the
     // animation, the more precision is needed in the timing function result to avoid ugly discontinuities.
     function solveEpsilon(duration) {return 1.0/(200.0*duration);}
     function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
     // Given an x value, find a parametric value it came from.
     function solveCurveX(x,epsilon) {var t0,t1,t2,x2,d2,i;
         function fabs(n) {if(n>=0) {return n;}else {return 0-n;}}
         // First try a few iterations of Newton's method -- normally very fast.
         for(t2=x, i=0; i<8; i++) {x2=sampleCurveX(t2)-x; if(fabs(x2)<epsilon) {return t2;} d2=sampleCurveDerivativeX(t2); if(fabs(d2)<1e-6) {break;} t2=t2-x2/d2;}
         // Fall back to the bisection method for reliability.
         t0=0.0; t1=1.0; t2=x; if(t2<t0) {return t0;} if(t2>t1) {return t1;}
         while(t0<t1) {x2=sampleCurveX(t2); if(fabs(x2-x)<epsilon) {return t2;} if(x>x2) {t0=t2;}else {t1=t2;} t2=(t1-t0)*0.5+t0;}
         return t2; // Failure.
     }
     // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
     cx=3.0*p1x; bx=3.0*(p2x-p1x)-cx; ax=1.0-cx-bx; cy=3.0*p1y; by=3.0*(p2y-p1y)-cy; ay=1.0-cy-by;
     // Convert from input time to parametric value in curve, then from that to output time.
     return solve(t, solveEpsilon(duration));
 }

 //**********************************//
 //***  CSS Matrix helpers        ***//
 //**********************************//

 function constructAffineFixingRotation(elem, posOffset) {
     var rawTrans = helpers.getElementTransform(elem);
     var matr;
     if(!rawTrans) {
         matr = new PureCSSMatrix();
     } else {
         matr = new PureCSSMatrix(rawTrans);
     }

     if(posOffset) {
         matr = matr.translate(posOffset.x,posOffset.y);
     }

     var current_affine = affineTransformDecompose(matr);
     current_affine.r = getTotalRotation(rawTrans);
     return current_affine;
 }

 function getTotalRotation(transString) {
     var totalRot = 0;
     var items;
     while((items = regexp_trans_splitter.exec(transString)) !== null) {
         var action = items[1].toLowerCase();
         var val = items[2].split(",");
         if(action=="matrix") {
             var recomposedTransItem = action+"("+items[2]+")";
             totalRot += affineTransformDecompose(new PureCSSMatrix(recomposedTransItem)).r;
         } else if(action=="rotate") {
             var raw = val[0];
             var rot = parseFloat(filterNumber(raw));
             if(raw.match(regexp_is_deg)) {
                 rot = (2*Math.PI)*rot/360.0;
             }
             totalRot += rot;
         }
     }
     return totalRot;
 }

 // TODO: use modulo instead of loops
 function fixRotationToSameLap(current_affine, final_affine) {

     if(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
         if(final_affine.r<current_affine.r) {
             while(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
                 final_affine.r+=(2*Math.PI);
             }
         } else {
             while(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
                 final_affine.r-=(2*Math.PI);
             }
         }
     }
     return final_affine;
 }

 //**********************************//
 //***  Helpers                   ***//
 //**********************************//

 function interpolateArrays(st, et, pos) {
     var it = {};
     for(var i in st) {
         if (st.hasOwnProperty(i)) {
             it[i] = st[i]+(et[i]-st[i])*pos;
         }
     }
     return it;
 }

 function roundNumber(number, precision) {
     precision = Math.abs(parseInt(precision,10)) || 0;
     var coefficient = Math.pow(10, precision);
     return Math.round(number*coefficient)/coefficient;
 }

 function filterNumber(x) {
     return x.match(regexp_filter_number);
 }

})(jQuery);;/*
* jquery.zoomooz-core.js, part of:
* http://janne.aukia.com/zoomooz
*
* Version history:
* 1.1.5 zoom for scrolled pages without flickering
* 1.1.0 carousel prev/next navigation
* 1.0.6 support for jQuery 1.9
* 1.0.4 fixed examples, iphone tuneups, transform offset fix
* 1.0.3 added closeclick, code structuring
* 1.0.2 bug fix on endcallback resetting for native animation
* 1.0.1 declarative syntax and fixes
* 0.9.2 working scrolling
* 0.9.1 simplifying code base and scrolling for non-body zoom roots
* 0.9.0 fixing margin on first body child
* 0.8.9 support for jQuery 1.7
* 0.8.8 fixed a bug with 90 deg rotations
* 0.8.7 fixed a bug with settings and a couple of demos
* 0.8.6 fixed a bug with non-body zoom root
* 0.8.5 basic IE9 support
* 0.8.1 basic support for scrolling
* 0.8.0 refactored position code to a separate file
* 0.7.2 fixed a bug with skew in Webkit
* 0.7.1 fixed bugs with FF4
* 0.7.0 support for non-body zoom root
* 0.6.9 better settings management
* 0.6.8 root element tuning
* 0.6.7 adjustable zoom origin (not fully working yet)
* 0.6.5 zoom origin to center
* 0.6.3 basic Opera support
* 0.6.1 refactored to use CSSMatrix classes
* 0.5.1 initial public version
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
* LICENCE INFORMATION FOR DERIVED FUNCTIONS:
*
* Function computeTotalTransformation based
* on jquery.fn.offset, copyright John Resig, 2010
* (MIT and GPL Version 2).
*
*/

/*jslint sub: true */

(function($) {
 "use strict";

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 var helpers = $.zoomooz.helpers;

 var animationSettings = ["duration", "easing", "nativeanimation"];

 //**********************************//
 //***  Static setup              ***//
 //**********************************//

 // document.ready needed for scroll bar width
 // calculation
 setupCssStyles();

 //**********************************//
 //***  jQuery functions          ***//
 //**********************************//

 if(!$.zoomooz) {
     $.zoomooz = {};
 }

 /* this can be used for setting the default settings for zoomooz explicitly. */
 $.zoomooz.setup = function(settings) {
     $.zoomooz.defaultSettings = jQuery.extend(constructDefaultSettings(), settings);
 };

 /* returns the zooming settings of a particular element. used by zoomTarget. */
 $.fn.zoomSettings = function(settings) {
     var retValue;
     this.each(function() {
         var $elem = $(this);
         retValue = setupElementSettings($elem, settings);
     });
     return retValue;
 };

 /* the main zooming method. */
 $.fn.zoomTo = function(settings, skipElementSettings) {
     this.each(function() {
         var $this = $(this);

         if(!skipElementSettings) {
             settings = $this.zoomSettings(settings);
         }

         zoomTo($this, settings);

         if(settings.debug) {
             if($("#debug").length===0) {
                 $(settings.root).append('<div id="debug"><div>');
             } else {
                 $("#debug").html("");
             }
             showDebug($this,settings);
         } else {
             if($("#debug").length!==0) {
                 $("#debug").html("");
             }
         }
     });

     return this;
 };

 //**********************************//
 //***  Setup functions           ***//
 //**********************************//

 function setupElementSettings($elem, baseSettings) {

     var settings = jQuery.extend({}, baseSettings);

     if(!$.zoomooz.defaultSettings) {
         $.zoomooz.setup();
     }

     var defaultSettings = $.zoomooz.defaultSettings;
     var elementSettings = jQuery.extend({},settings);

     var key;

     for(key in defaultSettings) {
         if (defaultSettings.hasOwnProperty(key) && !elementSettings[key]) {
             elementSettings[key] = $elem.data(key);
         }
     }

     // FIXME: it would be better, that the animationSettings
     // would come from the jquery.zoomooz-anim file somehow
     for(var i=0;i<animationSettings.length;i++) {
         key = animationSettings[i];
         if(!elementSettings[key]) {
             elementSettings[key] = $elem.data(key);
         }
     }

     return jQuery.extend({}, defaultSettings, elementSettings);
 }

 /* setup css styles in javascript to not need an extra zoomooz.css file for the user to load.
    having the styles here helps also at keeping the css requirements minimal. */
 function setupCssStyles() {
     var style = document.createElement('style');
     style.type = 'text/css';

     var transformOrigin = "";
     helpers.forEachPrefix(function(prefix) {
         transformOrigin += prefix+"transform-origin: 0 0;";
     },true);

     // FIXME: how to remove the html height requirement?
     // FIXME: how to remove the transform origin?
     style.innerHTML = "html {height:100%;}" +
                       ".noScroll{overflow:hidden !important;}"

     document.getElementsByTagName('head')[0].appendChild(style);

     $(document).ready(function() {
         var scrollBarWidth = window.innerWidth - $("body").width();
         style.innerHTML += "body.noScroll,html.noScroll body{margin-right:"+scrollBarWidth+"px;}";
     });

 }

 function constructDefaultSettings() {
     var retObject = {
         targetsize: 0.9,
         scalemode: "both",
         root: $(document.body),
         debug: false,
         animationendcallback: null,
         closeclick: false
     };

     // FIXME: feat detection would be better
     var isFF = (window.mozInnerScreenX !== undefined);
     retObject.scrollresetbeforezoom = isFF;

     return retObject;
 }

 //**********************************//
 //***  Main zoom function        ***//
 //**********************************//

 function zoomTo(elem, settings) {

     // scrolling:

     var useScrollResetBeforeZoom = settings.scrollresetbeforezoom;

     var scrollData = null;
     var startedZoomFromScroll;

     (function() {
         var $root = settings.root;
         var $scroll = $root.parent();

         if(elem[0] === $root[0]) {
             scrollData = getExistingScrollData($root, $scroll);
         } else if(!$root.data("original-scroll")) {
             startedZoomFromScroll = true;
             scrollData = storeNewScrollData($root, $scroll, useScrollResetBeforeZoom);
         } else if(!useScrollResetBeforeZoom) {
             scrollData = getExistingScrollData($root, $scroll);
         }
     }());

     var rootTransformation;
     var animationendcallback = null;

     setTransformOrigin(settings.root);

     var animScrollData = null;

     if(elem[0] !== settings.root[0]) {
         var inv = computeTotalTransformation(elem, settings.root).inverse();

         if(!useScrollResetBeforeZoom) {
             animScrollData = scrollData;
         }

         rootTransformation = computeViewportTransformation(elem, inv, animScrollData, settings);

         if(settings.animationendcallback) {
             animationendcallback = function() {
                 settings.animationendcallback.call(elem[0]);
             };
         }

     } else {

         if(useScrollResetBeforeZoom) {
             rootTransformation = (new PureCSSMatrix()).translate(-scrollData.x,-scrollData.y);
         }

         animationendcallback = function() {
             var $root = $(settings.root);
             var $scroll = scrollData.elem;

             $scroll.removeClass("noScroll");

             $root.setTransformation(new PureCSSMatrix());
             $root.data("original-scroll",null);

             $(document).off("touchmove");

             if(useScrollResetBeforeZoom) {

                 // this needs to be after the setTransformation and
                 // done with window.scrollTo to not have iPhone repaints
                 if($scroll[0]==document.body || $scroll[0]==window) {
                     window.scrollTo(scrollData.x,scrollData.y);
                 } else {
                     $scroll.scrollLeft(scrollData.x);
                     $scroll.scrollTop(scrollData.y);
                 }

             }

             if(settings.animationendcallback) {
                 settings.animationendcallback.call(elem[0]);
             }
         };
     }

     var animationstartedcallback = null;
     if(useScrollResetBeforeZoom && scrollData && scrollData.animationstartedcallback) {
         animationstartedcallback = scrollData.animationstartedcallback;
     }

     if(!startedZoomFromScroll) {
         animScrollData = false;
     }

     $(settings.root).animateTransformation(rootTransformation, settings, animScrollData, animationendcallback, animationstartedcallback);
 }

 //**********************************//
 //***  Handle scrolling          ***//
 //**********************************//


     function getExistingScrollData($root, $scroll) {
         var scrollData = $root.data("original-scroll");
         if(!scrollData) {
             scrollData = {"elem": $scroll, "x":0,"y:":0};
         }
         return scrollData;
     }

     function storeNewScrollData($root, $scroll, useScrollResetBeforeZoom) {
         // safari
         var scrollY = $root.scrollTop();
         var scrollX = $root.scrollLeft();
         var elem = $root;

         // moz
         if(!scrollY) {
             scrollY = $scroll.scrollTop();
             scrollX = $scroll.scrollLeft();
             elem = $scroll;
         }

         var scrollData = {"elem":elem,"x":scrollX,"y":scrollY};
         $root.data("original-scroll",scrollData);

         $(document).on("touchmove", function(e) {
             e.preventDefault();
         });

         var transformStr = "translate(-"+scrollX+"px,-"+scrollY+"px)";
         helpers.forEachPrefix(function(prefix) {
             $root.css(prefix+"transform", transformStr);
         });

         elem.addClass("noScroll");

         if(useScrollResetBeforeZoom) {
             scrollData.animationstartedcallback = function() {

                 // this needs to be after the setTransformation and
                 // done with window.scrollTo to not have iPhone repaints
                 if(elem[0]==document.body || elem[0]==document) {
                     window.scrollTo(0,0);
                 } else {
                     elem.scrollLeft(0);
                     elem.scrollTop(0);
                 }

             };
         }

         return scrollData;
     }

 //**********************************//
 //***  Element positioning       ***//
 //**********************************//

 function setTransformOrigin(zoomParent) {
     var zoomViewport = $(zoomParent).parent();

     var dw = zoomViewport.width();
     var dh = zoomViewport.height();

     var xrotorigin = dw/2.0;
     var yrotorigin = dh/2.0;

     var offsetStr = printFixedNumber(xrotorigin)+"px "+printFixedNumber(yrotorigin)+"px";

     helpers.forEachPrefix(function(prefix) {
          zoomParent.css(prefix+"transform-origin", offsetStr);
     });
 }

 function computeViewportTransformation(elem, endtrans, scrollData, settings) {
     var zoomAmount = settings.targetsize;
     var zoomMode = settings.scalemode;
     var zoomParent = settings.root;
     var zoomViewport = $(zoomParent).parent();

     var dw = zoomViewport.width();
     var dh = zoomViewport.height();

     var relw = dw/elem.outerWidth();
     var relh = dh/elem.outerHeight();

     var scale;
     if(zoomMode=="width") {
         scale = zoomAmount*relw;
     } else if(zoomMode=="height") {
         scale = zoomAmount*relh;
     } else if(zoomMode=="both") {
         scale = zoomAmount*Math.min(relw,relh);
     } else if(zoomMode=="scale") {
         scale = zoomAmount;
     } else {
         console.log("wrong zoommode");
         return;
     }

     var xoffset = -2;
     var yoffset = (dh-elem.outerHeight()*scale)/2.0;

     var xrotorigin = dw/2.0;
     var yrotorigin = dh/2.0;

     /* fix for body margins, hope that this does not break anything .. */
     /* see also the part of the fix that is in computeTotalTransformation! */
     var xmarginfix = -parseFloat(zoomParent.css("margin-left")) || 0;
     var ymarginfix = -parseFloat(zoomParent.css("margin-top")) || 0;

     var initTransformation = (new PureCSSMatrix());
     if(scrollData) {
         initTransformation = initTransformation.translate(scrollData.x,scrollData.y);
     }

     var viewportTransformation =
         initTransformation
         .translate(xmarginfix,ymarginfix)
         .translate(-xrotorigin,-yrotorigin)
         .translate(xoffset,yoffset)
         .scale(scale,scale)
         .multiply(endtrans)
         .translate(xrotorigin,yrotorigin);

     return viewportTransformation;
 }

 //**********************************//
 //***  Debugging positioning     ***//
 //**********************************//

 function calcPoint(e,x,y) {
     return [e.a*x+e.c*y+e.e,e.b*x+e.d*y+e.f];
 }

 function showDebug(elem, settings) {
     var e = computeTotalTransformation(elem, settings.root).elements();
     displayLabel(calcPoint(e,0,0));
     displayLabel(calcPoint(e,0,elem.outerHeight()));
     displayLabel(calcPoint(e,elem.outerWidth(),elem.outerHeight()));
     displayLabel(calcPoint(e,elem.outerWidth(),0));
 }

 function displayLabel(pos) {
     var labelStyle = "width:4px;height:4px;background-color:red;position:absolute;margin-left:-2px;margin-top:-2px;";
     labelStyle += 'left:'+pos[0]+'px;top:'+pos[1]+'px;';
     var label = '<div class="debuglabel" style="'+labelStyle+'"></div>';
     $("#debug").append(label);
 }

 //**********************************//
 //***  Calculating element       ***//
 //***  total transformation      ***//
 //**********************************//

 /* Based on:
  * jQuery.fn.offset
  */
 function computeTotalTransformation(input, transformationRootElement) {
     var elem = input[0];
     if( !elem || !elem.ownerDocument ) {
         return null;
     }

     var totalTransformation = new PureCSSMatrix();

     var trans;
     if ( elem === elem.ownerDocument.body ) {
         var bOffset = jQuery.offset.bodyOffset( elem );
         trans = new PureCSSMatrix();
         trans = trans.translate(bOffset.left, bOffset.top);
         totalTransformation = totalTransformation.multiply(trans);
         return totalTransformation;
     }

     var support;
     if(jQuery.offset.initialize) {
         jQuery.offset.initialize();
         support = {
             fixedPosition:jQuery.offset.supportsFixedPosition,
             doesNotAddBorder:jQuery.offset.doesNotAddBorder,
             doesAddBorderForTableAndCells:jQuery.support.doesAddBorderForTableAndCells,
             subtractsBorderForOverflowNotVisible:jQuery.offset.subtractsBorderForOverflowNotVisible
         };
     } else {
         support = jQuery.support;
     }

     var offsetParent = elem.offsetParent;
     var doc = elem.ownerDocument;
     var computedStyle;
     var docElem = doc.documentElement;
     var body = doc.body;
     var root = transformationRootElement[0];
     var defaultView = doc.defaultView;
     var prevComputedStyle;
     if(defaultView) {
         prevComputedStyle = defaultView.getComputedStyle( elem, null );
     } else {
         prevComputedStyle = elem.currentStyle;
     }

     /*
     function offsetParentInsideRoot($elem, $root) {
         // FIXME:
         // wondering, should this be $root.closest()
         // or $root.parent().closest...
         var $viewport = $root.parent();
         var $offsetParent = $elem.offsetParent();
         return ($viewport[0]==$offsetParent[0]) || $viewport.closest($offsetParent).length==0;
     }

     console.log("inside root",offsetParentInsideRoot(input, transformationRootElement));
     */

     var top = elem.offsetTop;
     var left = elem.offsetLeft;

     var transformation = constructTransformation().translate(left,top);
     transformation = transformation.multiply(constructTransformation(elem));
     totalTransformation = transformation.multiply((totalTransformation));
     // loop from node down to root
     while ( (elem = elem.parentNode) && elem !== root) {
         top = 0; left = 0;
         if ( support.fixedPosition && prevComputedStyle.position === "fixed" ) {
             break;
         }
         computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
         top  -= elem.scrollTop;
         left -= elem.scrollLeft;
         if ( elem === offsetParent ) {
             top  += elem.offsetTop;
             left += elem.offsetLeft;
             if ( support.doesNotAddBorder && !(support.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.nodeName)) ) {
                 top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
                 left += parseFloat( computedStyle.borderLeftWidth ) || 0;
             }
             offsetParent = elem.offsetParent;
         }
         if ( support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
             top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
             left += parseFloat( computedStyle.borderLeftWidth ) || 0;
         }
         prevComputedStyle = computedStyle;

         if(elem.offsetParent==root) {
             top -= parseFloat($(elem.offsetParent).css("margin-top")) || 0;
             left -= parseFloat($(elem.offsetParent).css("margin-left")) || 0;
         }

         transformation = constructTransformation().translate(left,top);
         transformation = transformation.multiply(constructTransformation(elem));
         totalTransformation = transformation.multiply(totalTransformation);

     }

     top = 0;
     left = 0;

     // fixme: should disable these for non-body roots?
     if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
         top  += body.offsetTop;
         left += body.offsetLeft;
     }
     if ( support.fixedPosition && prevComputedStyle.position === "fixed" ) {
         top  += Math.max( docElem.scrollTop, body.scrollTop );
         left += Math.max( docElem.scrollLeft, body.scrollLeft );
     }

     var itertrans = (new PureCSSMatrix()).translate(left,top);
     totalTransformation = totalTransformation.multiply(itertrans);

     return totalTransformation;

 }

 //**********************************//
 //***  Helpers                   ***//
 //**********************************//

 function printFixedNumber(x) {
     return Number(x).toFixed(6);
 }

 function constructTransformation(elem) {
     var rawTrans = helpers.getElementTransform(elem);
     if(!rawTrans) {
         return new PureCSSMatrix();
     } else {
         return new PureCSSMatrix(rawTrans);
     }
 }

})(jQuery);;/*
* jquery.zoomooz-zoomTarget.js, part of:
* http://janne.aukia.com/zoomooz
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
*/

/*jslint sub: true */

(function($) {
 "use strict";

 if(!$.zoomooz) {
     $.zoomooz = {};
 }

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 var helpers = $.zoomooz.helpers;

 //**********************************//
 //***  jQuery functions          ***//
 //**********************************//

 $.fn.zoomTarget = function(baseSettings) {
     this.each(function() {
         var settings = $(this).zoomSettings(baseSettings);
         setupClickHandler($(this),$(this),settings);
     });
 };

 //**********************************//
 //***  Helper functions          ***//
 //**********************************//

 function setupClickHandler(clickTarget, zoomTarget, settings) {
     clickTarget.addClass("zoomTarget");

     if(!settings.animationendcallback) {
         if(!settings.closeclick) {
             settings.animationendcallback = function() {
                 $(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");
                 clickTarget.addClass("selectedZoomTarget zoomNotClickable");
             };
         } else {
             settings.animationendcallback = function() {
                 $(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");
                 clickTarget.addClass("selectedZoomTarget");
             };
         }
     }

     var zoomContainer = zoomTarget.closest(".zoomContainer");
     if(zoomContainer.length!==0) {
         settings.root = zoomContainer;
     }

     var $root = settings.root;

     if(!$root.hasClass("zoomTarget")) {

         var rootSettings = $root.zoomSettings({});

         rootSettings.animationendcallback = function() {
             var $elem = $(this);
             $(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");
             $elem.addClass("selectedZoomTarget zoomNotClickable");
             $elem.parent().addClass("selectedZoomTarget zoomNotClickable");
         };

         setupClickHandler($root,$root,rootSettings);
         setupClickHandler($root.parent(),$root,rootSettings);

         // FIXME: there could be many of these called simultaneously,
         // don't know what would happen then
         $root.click();
     }

     clickTarget.on("click", function(evt) {

         // closeclick not available here...
         if(settings.closeclick && zoomTarget.hasClass("selectedZoomTarget")) {
             settings.root.click();
         } else {
             zoomTarget.zoomTo(settings);
         }
         evt.stopPropagation();
     });
 }

 //**********************************//
 //***  Setup functions           ***//
 //**********************************//

 /* setup css styles in javascript to not need an extra zoomooz.css file for the user to load.
    having the styles here helps also at keeping the css requirements minimal. */
 function setupCssStyles() {
     var style = document.createElement('style');
     style.type = 'text/css';

     function setupSelectionCss(enabled) {
         var selectionString = "-webkit-touch-callout: "+(enabled?"default":"none")+";";
         helpers.forEachPrefix(function(prefix) {
             selectionString += prefix+"user-select:"+(enabled?"text":"none")+";";
         },true);
         return selectionString;
     }

     // FIXME: how to remove the html height requirement?
     // FIXME: how to remove the transform origin?
     style.innerHTML = ".zoomTarget{"+setupSelectionCss(false)+"}"+
                       ".zoomTarget:hover{cursor:pointer!important;}"+
                       ".zoomNotClickable{"+setupSelectionCss(true)+"}"+
                       ".zoomNotClickable:hover{cursor:auto!important;}"+
                       /* padding to fix margin collapse issues */
                       ".zoomContainer{position:relative;padding:1px;margin:-1px;}";

     document.getElementsByTagName('head')[0].appendChild(style);
 }

 //**********************************//
 //***  Static setup              ***//
 //**********************************//

 setupCssStyles();

 // make all elements with the zoomTarget class zooming
 $(document).ready(function() {
     // this needs to be after the "$.fn.zoomTarget" has been initialized
     $(".zoomTarget").zoomTarget();
 });

})(jQuery);
;/*
* jquery.zoomooz-zoomContainer.js, part of:
* http://janne.aukia.com/zoomooz
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
*/

/*jslint sub: true */

(function($) {
 "use strict";

 if(!$.zoomooz) {
     $.zoomooz = {};
 }

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 //var helpers = $.zoomooz.helpers;


 //**********************************//
 //***  jQuery functions          ***//
 //**********************************//

 $.fn.zoomContainer = function(settings) {

     // add next and previous calls to the canvas
     // (auto detect next and previous buttons)

 };

 //**********************************//
 //***  Static setup              ***//
 //**********************************//

 // FIXME: move zoomContainer styling here?
 //setupCssStyles();

 // make all elements with the zoomContainer class zooming containers
 $(document).ready(function() {
     // this needs to be after the "$.fn.zoomContainer" has been initialized
     $(".zoomContainer").zoomContainer();
 });

})(jQuery);
;/*
* jquery.zoomooz-zoomButton.js, part of:
* http://janne.aukia.com/zoomooz
*
* LICENCE INFORMATION:
*
* Copyright (c) 2010 Janne Aukia (janne.aukia.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL Version 2 (GPL-LICENSE.txt) licenses.
*
*/

/*jslint sub: true */

(function($) {

 if(!$.zoomooz) {
     $.zoomooz = {};
 }

 //**********************************//
 //***  Variables                 ***//
 //**********************************//

 var helpers = $.zoomooz.helpers;

 //**********************************//
 //***  jQuery functions          ***//
 //**********************************//

 $.fn.zoomButton = function(baseSettings) {
     this.each(function() {
         var settings = setupZoomButtonSettings($(this),baseSettings);
         setupClickHandler($(this),settings);
     });
 };

 //**********************************//
 //***  Setup functions           ***//
 //**********************************//

 function setupZoomButtonSettings($elem, settings) {

     var defaultSettings = constructDefaultSettings();
     var elementSettings = jQuery.extend({},settings);

     // FIXME: could move the core declarative stuff to a separate lib or file

     for(var key in defaultSettings) {
         if (defaultSettings.hasOwnProperty(key) && !elementSettings[key]) {
             if(defaultSettings[key] instanceof jQuery) {
                 elementSettings[key] = $($elem.data(key));
             } else {
                 elementSettings[key] = $elem.data(key);
             }
         }
     }

     return jQuery.extend({}, defaultSettings, elementSettings);
 }

 function constructDefaultSettings() {
     return {
         type: "next",
         root: $(document.body),
         wrap: "true"
     };
 }

 //**********************************//
 //***  Helper functions          ***//
 //**********************************//

 function setupClickHandler(clickTarget, settings) {

     clickTarget.addClass("zoomButton");

     var $root;

     if(settings.root.hasClass("zoomContainer")) {
         $root = settings.root;
     } else {
         $root = settings.root.find(".zoomContainer");
     }

     var displayList = (function() {
         var listData = jQuery.makeArray($root.find(".zoomTarget"));

         function _getIndex(elem) {
             return listData.indexOf(elem);
         }

         function _getNext(elem) {
             var index = _getIndex(elem)+1;
             if(index<listData.length && index!==0) {
                 return listData[index];
             } else {
                 return null;
             }
         }

         function _getPrev(elem) {
             var index = _getIndex(elem)-1;
             if(index<0) {
                 return null;
             } else {
                 return listData[index];
             }
         }

         function _getFirst() {
             return listData[0];
         }

         function _getLast() {
             return listData[listData.length-1];
         }

         return {
             next: _getNext,
             prev: _getPrev,
             last: _getLast,
             first: _getFirst
         };
     }());

     clickTarget.on("click", function(evt) {

         var target;
         var performZoom = true;

         var $selected = $root.find(".selectedZoomTarget");

         if($selected.length===0) {
             $selected = displayList.first();
         }

         switch (settings.type) {
             case "close":
                 target = $root;
                 break;
             case "prev":
                 target = displayList.prev($selected[0]);
                 if (target === null) {
                     if (settings.wrap) {
                         target = displayList.last();
                     } else {
                         performZoom = false;
                     }
                 }
                 break;
             case "next":
             default:
                 target = displayList.next($selected[0]);
                 if (target === null) {
                     if (settings.wrap) {
                         target = displayList.first();
                     } else {
                         performZoom = false;
                     }
                 }
                 break;
         }

         if(performZoom) {
             // not this easy! would need to read the data fields
             //target.zoomTo();

             // FIXME: hacky...
             target.click();
         } else {
             // don't do anything if no wrap
             // (would be great if the button was disabled)
         }

         evt.stopPropagation();
     });
 }

 //**********************************//
 //***  Static setup              ***//
 //**********************************//

 // make all elements with the zoomButton class activate
 $(document).ready(function() {
     // this needs to be after the "$.fn.zoomButton" has been initialized
     $(".zoomButton").zoomButton();
 });

})(jQuery);
