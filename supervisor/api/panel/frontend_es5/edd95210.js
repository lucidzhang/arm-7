(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9191],{58556:function(t,n,r){"use strict";var e;(e="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)||"undefined"!=typeof navigator&&"ReactNative"===navigator.product?global:self).Proxy||(e.Proxy=r(87082)(),e.Proxy.revocable=e.Proxy.revocable)},87082:function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}t.exports=function(){var t,r=null;function e(t){return!!t&&("object"===n(t)||"function"==typeof t)}function o(t){if(null!==t&&!e(t))throw new TypeError("Object prototype may only be an Object or null: "+t)}var a=Object,i=Boolean(a.create)||!({__proto__:null}instanceof a),u=a.create||(i?function(t){return o(t),{__proto__:t}}:function(t){if(o(t),null===t)throw new SyntaxError("Native Object.create is required to create objects with null prototype");var n=function(){};return n.prototype=t,new n}),c=function(){return null},f=a.getPrototypeOf||([].__proto__===Array.prototype?function(t){var n=t.__proto__;return e(n)?n:null}:c);return t=function(n,l){if(void 0===(this&&this instanceof t?this.constructor:void 0))throw new TypeError("Constructor Proxy requires 'new'");if(!e(n)||!e(l))throw new TypeError("Cannot create proxy with a non-object as target or handler");var s=function(){};r=function(){n=null,s=function(t){throw new TypeError("Cannot perform '".concat(t,"' on a proxy that has been revoked"))}},setTimeout((function(){r=null}),0);var p=l;for(var y in l={get:null,set:null,apply:null,construct:null},p){if(!(y in l))throw new TypeError("Proxy polyfill does not support trap '".concat(y,"'"));l[y]=p[y]}"function"==typeof p&&(l.apply=p.apply.bind(p));var v,b=f(n),h=!1,d=!1;"function"==typeof n?(v=function(){var t=this&&this.constructor===v,r=Array.prototype.slice.call(arguments);if(s(t?"construct":"apply"),t&&l.construct)return l.construct.call(this,n,r);if(!t&&l.apply)return l.apply(n,this,r);if(t){r.unshift(n);var e=n.bind.apply(n,r);return new e}return n.apply(this,r)},h=!0):n instanceof Array?(v=[],d=!0):v=i||null!==b?u(b):{};var m=l.get?function(t){return s("get"),l.get(this,t,v)}:function(t){return s("get"),this[t]},g=l.set?function(t,n){s("set");l.set(this,t,n,v)}:function(t,n){s("set"),this[t]=n},w=a.getOwnPropertyNames(n),S={};w.forEach((function(t){if(!h&&!d||!(t in v)){var r=a.getOwnPropertyDescriptor(n,t),e={enumerable:Boolean(r.enumerable),get:m.bind(n,t),set:g.bind(n,t)};a.defineProperty(v,t,e),S[t]=!0}}));var E=!0;if(h||d){var _=a.setPrototypeOf||([].__proto__===Array.prototype?function(t,n){return o(n),t.__proto__=n,t}:c);b&&_(v,b)||(E=!1)}if(l.get||!E)for(var A in n)S[A]||a.defineProperty(v,A,{get:m.bind(n,A)});return a.seal(n),a.seal(v),v},t.revocable=function(n,e){return{proxy:new t(n,e),revoke:r}},t}},93217:function(t,n,r){"use strict";function e(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(e=r.next()).done)&&(a.push(e.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(t,n)||f(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(t,n,r){return a=i()?Reflect.construct.bind():function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&u(o,r.prototype),o},a.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},u(t,n)}function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,n){if(t){if("string"==typeof t)return l(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,n):void 0}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}r.d(n,{Jj:function(){return m}});var p=Symbol("Comlink.proxy"),y=Symbol("Comlink.endpoint"),v=Symbol("Comlink.releaseProxy"),b=Symbol("Comlink.thrown"),h=function(t){return"object"===s(t)&&null!==t||"function"==typeof t},d=new Map([["proxy",{canHandle:function(t){return h(t)&&t[p]},serialize:function(t){var n=new MessageChannel,r=n.port1,e=n.port2;return m(t,r),[e,[e]]},deserialize:function(t){return t.start(),S(t,[],n);var n}}],["throw",{canHandle:function(t){return h(t)&&b in t},serialize:function(t){var n=t.value;return[n instanceof Error?{isError:!0,value:{message:n.message,name:n.name,stack:n.stack}}:{isError:!1,value:n},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;n.addEventListener("message",(function r(i){if(i&&i.data){var u,f=Object.assign({path:[]},i.data),l=f.id,s=f.type,p=f.path,y=(i.data.argumentList||[]).map(j);try{var v=p.slice(0,-1).reduce((function(t,n){return t[n]}),t),h=p.reduce((function(t,n){return t[n]}),t);switch(s){case"GET":u=h;break;case"SET":v[p.slice(-1)[0]]=j(i.data.value),u=!0;break;case"APPLY":u=h.apply(v,y);break;case"CONSTRUCT":var d;u=P(a(h,c(y)));break;case"ENDPOINT":var w=new MessageChannel,S=w.port1,E=w.port2;m(t,E),u=A(S,[S]);break;case"RELEASE":u=void 0;break;default:return}}catch(d){u=o({value:d},b,0)}Promise.resolve(u).catch((function(t){return o({value:t},b,0)})).then((function(t){var o=e(O(t),2),a=o[0],i=o[1];n.postMessage(Object.assign(Object.assign({},a),{id:l}),i),"RELEASE"===s&&(n.removeEventListener("message",r),g(n))}))}})),n.start&&n.start()}function g(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function w(t){if(t)throw new Error("Proxy has been released and is not useable")}function S(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=!1,a=new Proxy(r,{get:function(r,e){if(w(o),e===v)return function(){return T(t,{type:"RELEASE",path:n.map((function(t){return t.toString()}))}).then((function(){g(t),o=!0}))};if("then"===e){if(0===n.length)return{then:function(){return a}};var i=T(t,{type:"GET",path:n.map((function(t){return t.toString()}))}).then(j);return i.then.bind(i)}return S(t,[].concat(c(n),[e]))},set:function(r,a,i){w(o);var u=e(O(i),2),f=u[0],l=u[1];return T(t,{type:"SET",path:[].concat(c(n),[a]).map((function(t){return t.toString()})),value:f},l).then(j)},apply:function(r,a,i){w(o);var u=n[n.length-1];if(u===y)return T(t,{type:"ENDPOINT"}).then(j);if("bind"===u)return S(t,n.slice(0,-1));var c=e(E(i),2),f=c[0],l=c[1];return T(t,{type:"APPLY",path:n.map((function(t){return t.toString()})),argumentList:f},l).then(j)},construct:function(r,a){w(o);var i=e(E(a),2),u=i[0],c=i[1];return T(t,{type:"CONSTRUCT",path:n.map((function(t){return t.toString()})),argumentList:u},c).then(j)}});return a}function E(t){var n,r=t.map(O);return[r.map((function(t){return t[0]})),(n=r.map((function(t){return t[1]})),Array.prototype.concat.apply([],n))]}var _=new WeakMap;function A(t,n){return _.set(t,n),t}function P(t){return Object.assign(t,o({},p,!0))}function O(t){var n,r=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=f(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}(d);try{for(r.s();!(n=r.n()).done;){var o=e(n.value,2),a=o[0],i=o[1];if(i.canHandle(t)){var u=e(i.serialize(t),2);return[{type:"HANDLER",name:a,value:u[0]},u[1]]}}}catch(c){r.e(c)}finally{r.f()}return[{type:"RAW",value:t},_.get(t)||[]]}function j(t){switch(t.type){case"HANDLER":return d.get(t.name).deserialize(t.value);case"RAW":return t.value}}function T(t,n,r){return new Promise((function(e){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function n(r){r.data&&r.data.id&&r.data.id===o&&(t.removeEventListener("message",n),e(r.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},n),r)}))}}}]);