"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4758],{94758:function(e,t,r){var n,i,o,a,s,l=r(37500),c=r(63550),u=r(63864),d=r(12198),f=r(44583);r(32511),r(83927),r(260),r(52039);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var i=g(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=T(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:x(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=x(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function T(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S,D,O,z,j,H,V,F,R,I,L,M,B,Z,U,N,$,W,q;!function(e,t,r,n){var i=w();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(A(o.descriptor)||A(i.descriptor)){if(P(o)||P(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(P(o)){if(P(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}C(o,i)}else t.push(o)}return t}(a.d.map(E)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,c.Mo)("supervisor-formfield-label")],(function(e,t){var r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,t);var r=v(n);function n(){var t;m(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(k(t)),t}return n}(t);return{F:r,d:[{kind:"field",decorators:[(0,c.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:String})],key:"imageUrl",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:String})],key:"iconPath",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:String})],key:"version",value:void 0},{kind:"method",key:"render",value:function(){return(0,l.dy)(n||(n=h(["\n      ",'\n      <span class="label">',"</span>\n      ","\n    "])),this.imageUrl?(0,l.dy)(i||(i=h(['<img loading="lazy" .src=',' class="icon" />'])),this.imageUrl):this.iconPath?(0,l.dy)(o||(o=h(["<ha-svg-icon .path=",' class="icon"></ha-svg-icon>'])),this.iconPath):"",this.label,this.version?(0,l.dy)(a||(a=h(['<span class="version">(',")</span>"])),this.version):"")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,l.iv)(s||(s=h(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      .label {\n        margin-right: 4px;\n      }\n      .version {\n        color: var(--secondary-text-color);\n      }\n      .icon {\n        max-height: 22px;\n        max-width: 22px;\n        margin-right: 8px;\n      }\n    "])))}}]}}),l.oi);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function J(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ue(e);if(t){var i=ue(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Y(this,r)}}function Y(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ee(e)}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(){te=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!ie(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?le(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=se(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ae(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=ae(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function re(e){var t,r=se(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function ne(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function ie(e){return e.decorators&&e.decorators.length}function oe(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ae(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function se(e){var t=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===G(t)?t:String(t)}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ce(e,t,r){return ce="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ue(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},ce(e,t,r||e)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ue(e)}var de="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",fe="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z";!function(e,t,r,n){var i=te();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(oe(o.descriptor)||oe(i.descriptor)){if(ie(o)||ie(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(ie(o)){if(ie(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}ne(o,i)}else t.push(o)}return t}(a.d.map(re)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,c.Mo)("supervisor-backup-content")],(function(e,t){var r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(n,t);var r=X(n);function n(){var t;K(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(ee(t)),t}return n}(t);return{F:r,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"localize",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"backup",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"backupType",value:function(){return"full"}},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"folders",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"addons",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"homeAssistant",value:function(){return!1}},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"backupHasPassword",value:function(){return!1}},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"onboarding",value:function(){return!1}},{kind:"field",decorators:[(0,c.Cb)()],key:"backupName",value:function(){return""}},{kind:"field",decorators:[(0,c.Cb)()],key:"backupPassword",value:function(){return""}},{kind:"field",decorators:[(0,c.Cb)()],key:"confirmBackupPassword",value:function(){return""}},{kind:"field",decorators:[(0,c.IO)("paper-input, ha-radio, ha-checkbox",!0)],key:"_focusTarget",value:void 0},{kind:"method",key:"willUpdate",value:function(e){var t,n,i,o,a,s;(ce(ue(r.prototype),"willUpdate",this).call(this,e),this.hasUpdated)||(this.folders=(a=this.backup?this.backup.folders:["ssl","share","media","addons/local"],s=[],a.includes("ssl")&&s.push({slug:"ssl",name:"SSL",checked:!1}),a.includes("share")&&s.push({slug:"share",name:"Share",checked:!1}),a.includes("media")&&s.push({slug:"media",name:"Media",checked:!1}),a.includes("addons/local")&&s.push({slug:"addons/local",name:"Local add-ons",checked:!1}),s.sort((function(e,t){return e.name>t.name?1:-1}))),this.addons=(this.backup?this.backup.addons:null===(t=this.supervisor)||void 0===t?void 0:t.addon.addons).map((function(e){return{slug:e.slug,name:e.name,version:e.version,checked:!1}})).sort((function(e,t){return e.name>t.name?1:-1})),this.backupType=(null===(n=this.backup)||void 0===n?void 0:n.type)||"full",this.backupName=(null===(i=this.backup)||void 0===i?void 0:i.name)||"",this.backupHasPassword=(null===(o=this.backup)||void 0===o?void 0:o.protected)||!1)}},{kind:"method",key:"focus",value:function(){var e;null===(e=this._focusTarget)||void 0===e||e.focus()}},{kind:"field",key:"_localize",value:function(){var e=this;return function(t){var r;return(null===(r=e.supervisor)||void 0===r?void 0:r.localize("backup.".concat(t)))||e.localize("ui.panel.page-onboarding.restore.".concat(t))}}},{kind:"method",key:"render",value:function(){if(!this.onboarding&&!this.supervisor)return(0,l.dy)(S||(S=J([""])));var e="partial"===this.backupType?this._getSection("folders"):void 0,t="partial"===this.backupType?this._getSection("addons"):void 0;return(0,l.dy)(D||(D=J(["\n      ","\n      ","\n      ","\n      ","\n      ","\n      ","\n    "])),this.backup?(0,l.dy)(O||(O=J(['<div class="details">\n            ',"\n            (",")<br />\n            ","\n          </div>"])),"full"===this.backup.type?this._localize("full_backup"):this._localize("partial_backup"),Math.ceil(10*this.backup.size)/10+" MB",this.hass?(0,f.o0)(new Date(this.backup.date),this.hass.locale):this.backup.date):(0,l.dy)(z||(z=J(['<paper-input\n            name="backupName"\n            .label=',"\n            .value=","\n            @value-changed=","\n          >\n          </paper-input>"])),this._localize("name"),this.backupName,this._handleTextValueChanged),this.backup&&"full"!==this.backup.type?"":(0,l.dy)(j||(j=J(['<div class="sub-header">\n              ','\n            </div>\n            <div class="backup-types">\n              <ha-formfield .label=',">\n                <ha-radio\n                  @change=",'\n                  value="full"\n                  name="backupType"\n                  .checked=',"\n                >\n                </ha-radio>\n              </ha-formfield>\n              <ha-formfield .label=",">\n                <ha-radio\n                  @change=",'\n                  value="partial"\n                  name="backupType"\n                  .checked=',"\n                >\n                </ha-radio>\n              </ha-formfield>\n            </div>"])),this.backup?this._localize("select_type"):this._localize("type"),this._localize("full_backup"),this._handleRadioValueChanged,"full"===this.backupType,this._localize("partial_backup"),this._handleRadioValueChanged,"partial"===this.backupType),"partial"===this.backupType?(0,l.dy)(H||(H=J(['<div class="partial-picker">\n            ',"\n            ","\n            ","\n          </div> "])),!this.backup||this.backup.homeassistant?(0,l.dy)(V||(V=J(["<ha-formfield\n                  .label=","\n                >\n                  <ha-checkbox\n                    .checked=","\n                    @change=","\n                  >\n                  </ha-checkbox>\n                </ha-formfield>"])),(0,l.dy)(F||(F=J(['<supervisor-formfield-label\n                    label="Home Assistant"\n                    .iconPath=',"\n                    .version=","\n                  >\n                  </supervisor-formfield-label>"])),"M21.8,13H20V21H13V17.67L15.79,14.88L16.5,15C17.66,15 18.6,14.06 18.6,12.9C18.6,11.74 17.66,10.8 16.5,10.8A2.1,2.1 0 0,0 14.4,12.9L14.5,13.61L13,15.13V9.65C13.66,9.29 14.1,8.6 14.1,7.8A2.1,2.1 0 0,0 12,5.7A2.1,2.1 0 0,0 9.9,7.8C9.9,8.6 10.34,9.29 11,9.65V15.13L9.5,13.61L9.6,12.9A2.1,2.1 0 0,0 7.5,10.8A2.1,2.1 0 0,0 5.4,12.9A2.1,2.1 0 0,0 7.5,15L8.21,14.88L11,17.67V21H4V13H2.25C1.83,13 1.42,13 1.42,12.79C1.43,12.57 1.85,12.15 2.28,11.72L11,3C11.33,2.67 11.67,2.33 12,2.33C12.33,2.33 12.67,2.67 13,3L17,7V6H19V9L21.78,11.78C22.18,12.18 22.59,12.59 22.6,12.8C22.6,13 22.2,13 21.8,13M7.5,12A0.9,0.9 0 0,1 8.4,12.9A0.9,0.9 0 0,1 7.5,13.8A0.9,0.9 0 0,1 6.6,12.9A0.9,0.9 0 0,1 7.5,12M16.5,12C17,12 17.4,12.4 17.4,12.9C17.4,13.4 17,13.8 16.5,13.8A0.9,0.9 0 0,1 15.6,12.9A0.9,0.9 0 0,1 16.5,12M12,6.9C12.5,6.9 12.9,7.3 12.9,7.8C12.9,8.3 12.5,8.7 12,8.7C11.5,8.7 11.1,8.3 11.1,7.8C11.1,7.3 11.5,6.9 12,6.9Z",this.backup?this.backup.homeassistant:this.hass.config.version),this.homeAssistant,this.toggleHomeAssistant):"",null!=e&&e.templates.length?(0,l.dy)(R||(R=J(["\n                  <ha-formfield\n                    .label=","\n                  >\n                    <ha-checkbox\n                      @change=","\n                      .checked=","\n                      .indeterminate=","\n                      .section=",'\n                    >\n                    </ha-checkbox>\n                  </ha-formfield>\n                  <div class="section-content">',"</div>\n                "])),(0,l.dy)(I||(I=J(["<supervisor-formfield-label\n                      .label=","\n                      .iconPath=","\n                    >\n                    </supervisor-formfield-label>"])),this._localize("folders"),de),this._toggleSection,e.checked,e.indeterminate,"folders",e.templates):"",null!=t&&t.templates.length?(0,l.dy)(L||(L=J(["\n                  <ha-formfield\n                    .label=","\n                  >\n                    <ha-checkbox\n                      @change=","\n                      .checked=","\n                      .indeterminate=","\n                      .section=",'\n                    >\n                    </ha-checkbox>\n                  </ha-formfield>\n                  <div class="section-content">',"</div>\n                "])),(0,l.dy)(M||(M=J(["<supervisor-formfield-label\n                      .label=","\n                      .iconPath=","\n                    >\n                    </supervisor-formfield-label>"])),this._localize("addons"),fe),this._toggleSection,t.checked,t.indeterminate,"addons",t.templates):""):"","partial"!==this.backupType||this.backup&&!this.backupHasPassword?"":(0,l.dy)(B||(B=J(["<hr />"]))),this.backup?"":(0,l.dy)(Z||(Z=J(['<ha-formfield\n            class="password"\n            .label=',"\n          >\n            <ha-checkbox\n              .checked=","\n              @change=","\n            >\n            </ha-checkbox>\n          </ha-formfield>"])),this._localize("password_protection"),this.backupHasPassword,this._toggleHasPassword),this.backupHasPassword?(0,l.dy)(U||(U=J(["\n            <paper-input\n              .label=",'\n              type="password"\n              name="backupPassword"\n              .value=',"\n              @value-changed=","\n            >\n            </paper-input>\n            ","\n          "])),this._localize("password"),this.backupPassword,this._handleTextValueChanged,this.backup?"":(0,l.dy)(N||(N=J([" <paper-input\n                  .label=",'\n                  type="password"\n                  name="confirmBackupPassword"\n                  .value=',"\n                  @value-changed=","\n                >\n                </paper-input>"])),this._localize("confirm_password"),this.confirmBackupPassword,this._handleTextValueChanged)):"")}},{kind:"method",key:"toggleHomeAssistant",value:function(){this.homeAssistant=!this.homeAssistant}},{kind:"get",static:!0,key:"styles",value:function(){return(0,l.iv)($||($=J(["\n      .partial-picker ha-formfield {\n        display: block;\n      }\n      .partial-picker ha-checkbox {\n        --mdc-checkbox-touch-target-size: 32px;\n      }\n      .partial-picker {\n        display: block;\n        margin: 0px -6px;\n      }\n      supervisor-formfield-label {\n        display: inline-flex;\n        align-items: center;\n      }\n      hr {\n        border-color: var(--divider-color);\n        border-bottom: none;\n        margin: 16px 0;\n      }\n      .details {\n        color: var(--secondary-text-color);\n      }\n      .section-content {\n        display: flex;\n        flex-direction: column;\n        margin-left: 30px;\n      }\n      ha-formfield.password {\n        display: block;\n        margin: 0 -14px -16px;\n      }\n      .backup-types {\n        display: flex;\n        margin-left: -13px;\n      }\n      .sub-header {\n        margin-top: 8px;\n      }\n    "])))}},{kind:"method",key:"backupDetails",value:function(){var e,t,r={};if(this.backup||(r.name=this.backupName||(0,d.p6)(new Date,this.hass.locale)),this.backupHasPassword&&(r.password=this.backupPassword,this.backup||(r.confirm_password=this.confirmBackupPassword)),"full"===this.backupType)return r;var n=null===(e=this.addons)||void 0===e?void 0:e.filter((function(e){return e.checked})).map((function(e){return e.slug})),i=null===(t=this.folders)||void 0===t?void 0:t.filter((function(e){return e.checked})).map((function(e){return e.slug}));return null!=n&&n.length&&(r.addons=n),null!=i&&i.length&&(r.folders=i),r.homeassistant=this.homeAssistant,r}},{kind:"method",key:"_getSection",value:function(e){var t,r=this,n=[],i="addons"===e?new Map(null===(t=this.supervisor)||void 0===t?void 0:t.addon.addons.map((function(e){return[e.slug,e]}))):void 0,o=0;this[e].forEach((function(t){var a;n.push((0,l.dy)(W||(W=J(["<ha-formfield\n        .label=","\n      >\n        <ha-checkbox\n          .item=","\n          .checked=","\n          .section=","\n          @change=","\n        >\n        </ha-checkbox>\n      </ha-formfield>"])),(0,l.dy)(q||(q=J(["<supervisor-formfield-label\n          .label=","\n          .iconPath=","\n          .imageUrl=","\n          .version=","\n        >\n        </supervisor-formfield-label>"])),t.name,"addons"===e?fe:de,"addons"===e&&!r.onboarding&&(0,u.I)(r.hass.config.version,0,105)&&null!=i&&null!==(a=i.get(t.slug))&&void 0!==a&&a.icon?"/api/hassio/addons/".concat(t.slug,"/icon"):void 0,t.version),t,t.checked,e,r._updateSectionEntry)),t.checked&&o++}));var a=o===this[e].length;return{templates:n,checked:a,indeterminate:!a&&0!==o}}},{kind:"method",key:"_handleRadioValueChanged",value:function(e){var t=e.currentTarget;this[t.name]=t.value}},{kind:"method",key:"_handleTextValueChanged",value:function(e){this[e.currentTarget.name]=e.detail.value}},{kind:"method",key:"_toggleHasPassword",value:function(){this.backupHasPassword=!this.backupHasPassword}},{kind:"method",key:"_toggleSection",value:function(e){var t=e.currentTarget.section;this[t]=("addons"===t?this.addons:this.folders).map((function(t){return Object.assign({},t,{checked:e.currentTarget.checked})}))}},{kind:"method",key:"_updateSectionEntry",value:function(e){var t=e.currentTarget.item,r=e.currentTarget.section;this[r]=this[r].map((function(r){return r.slug===t.slug?Object.assign({},r,{checked:e.currentTarget.checked}):r}))}}]}}),l.oi)},12198:function(e,t,r){r.d(t,{p6:function(){return i},WB:function(){return a}});var n=r(14516);r(29607);(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})}));var i=function(e,t){return o(t).format(e)},o=(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})})),a=function(e,t){return s(t).format(e)},s=(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})}));(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"})})),(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"})})),(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{month:"long"})})),(0,n.Z)((function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric"})}))}}]);