/*! For license information please see 834b6284.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2993],{89833:function(t,e,n){n.d(e,{O:function(){return v}});var r,i,o=n(87480),a=n(86251),u=n(37500),c=n(63550),l=n(8636),s=n(51346),f=n(71260);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_(t);if(e){var i=_(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(c,t);var e,n,o,a=b(c);function c(){var t;return d(this,c),(t=a.apply(this,arguments)).rows=2,t.cols=20,t.charCounter=!1,t}return e=c,(n=[{key:"render",value:function(){var t=this.charCounter&&-1!==this.maxLength,e=t&&"internal"===this.charCounter,n=t&&!e,i=!!this.helper||!!this.validationMessage||n,o={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e};return(0,u.dy)(r||(r=h(['\n      <label class="mdc-text-field mdc-text-field--textarea ','">\n        ',"\n        ","\n        ","\n        ","\n        ","\n      </label>\n      ","\n    "])),(0,l.$)(o),this.renderRipple(),this.outlined?this.renderOutline():this.renderLabel(),this.renderInput(),this.renderCharCounter(e),this.renderLineRipple(),this.renderHelperText(i,n))}},{key:"renderInput",value:function(){var t=this.label?"label":void 0,e=-1===this.minLength?void 0:this.minLength,n=-1===this.maxLength?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0;return(0,u.dy)(i||(i=h(["\n      <textarea\n          aria-labelledby=",'\n          class="mdc-text-field__input"\n          .value="','"\n          rows="','"\n          cols="','"\n          ?disabled="','"\n          placeholder="','"\n          ?required="','"\n          ?readonly="','"\n          minlength="','"\n          maxlength="','"\n          name="','"\n          inputmode="','"\n          autocapitalize="','"\n          @input="','"\n          @blur="','">\n      </textarea>'])),(0,s.o)(t),(0,f.a)(this.value),this.rows,this.cols,this.disabled,this.placeholder,this.required,this.readOnly,(0,s.o)(e),(0,s.o)(n),(0,s.o)(""===this.name?void 0:this.name),(0,s.o)(this.inputMode),(0,s.o)(r),this.handleInputChange,this.onInputBlur)}}])&&y(e.prototype,n),o&&y(e,o),Object.defineProperty(e,"prototype",{writable:!1}),c}(a.P);(0,o.__decorate)([(0,c.IO)("textarea")],v.prototype,"formElement",void 0),(0,o.__decorate)([(0,c.Cb)({type:Number})],v.prototype,"rows",void 0),(0,o.__decorate)([(0,c.Cb)({type:Number})],v.prototype,"cols",void 0),(0,o.__decorate)([(0,c.Cb)({converter:{fromAttribute:function(t){return null!==t&&(""===t||t)},toAttribute:function(t){return"boolean"==typeof t?t?"":null:t}}})],v.prototype,"charCounter",void 0)},96791:function(t,e,n){var r;n.d(e,{W:function(){return a}});var i,o,a=(0,n(37500).iv)(r||(i=[".mdc-text-field{height:100%}.mdc-text-field__input{resize:none}"],o||(o=i.slice(0)),r=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}}))))},31157:function(t,e,n){n.d(e,{e:function(){return R}});var r=n(73418);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=s(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},l.apply(this,arguments)}function s(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(t){return"horizontal"===t?"row":"column"}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(s,t);var e,n,i,a=p(s);function s(){var t;return u(this,s),(t=a.apply(this,arguments))._itemSize={},t._gaps={},t._padding={},t}return e=s,(n=[{key:"_defaultConfig",get:function(){return Object.assign({},l(d(s.prototype),"_defaultConfig",this),{itemSize:{width:"300px",height:"300px"},gap:"8px",padding:"match-gap"})}},{key:"_gap",get:function(){return this._gaps.row}},{key:"_idealSize",get:function(){return this._itemSize[(0,r.qF)(this.direction)]}},{key:"_idealSize1",get:function(){return this._itemSize[(0,r.qF)(this.direction)]}},{key:"_idealSize2",get:function(){return this._itemSize[(0,r.gu)(this.direction)]}},{key:"_gap1",get:function(){return this._gaps[(t=this.direction,"horizontal"===t?"column":"row")];var t}},{key:"_gap2",get:function(){return this._gaps[y(this.direction)]}},{key:"_padding1",get:function(){var t=this._padding,e=o("horizontal"===this.direction?["left","right"]:["top","bottom"],2),n=e[0],r=e[1];return[t[n],t[r]]}},{key:"_padding2",get:function(){var t=this._padding,e=o("horizontal"===this.direction?["top","bottom"]:["left","right"],2),n=e[0],r=e[1];return[t[n],t[r]]}},{key:"itemSize",set:function(t){var e=this._itemSize,n=parseInt(t.width),r=parseInt(t.height);n!==e.width&&(e.width=n,this._triggerReflow()),r!==e.height&&(e.height=r,this._triggerReflow())}},{key:"_setGap",value:function(t){var e=t.split(" ").map((function(t){return function(t){return"auto"===t?1/0:parseInt(t)}(t)})),n=this._gaps;e[0]!==n.row&&(n.row=e[0],this._triggerReflow()),void 0===e[1]?e[0]!==n.column&&(n.column=e[0],this._triggerReflow()):e[1]!==n.column&&(n.column=e[1],this._triggerReflow())}},{key:"padding",set:function(t){var e=this._padding,n=t.split(" ").map((function(t){return function(t){return"match-gap"===t?1/0:parseInt(t)}(t)}));1===n.length?e.top=e.right=e.bottom=e.left=n[0]:2===n.length?(e.top=e.bottom=n[0],e.right=e.left=n[1]):3===n.length?(e.top=n[0],e.right=e.left=n[1],e.bottom=n[2]):4===n.length&&["top","right","bottom","left"].forEach((function(t,r){return e[t]=n[r]}))}}])&&c(e.prototype,n),i&&c(e,i),Object.defineProperty(e,"prototype",{writable:!1}),s}(r.IE);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=j(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},S.apply(this,arguments)}function j(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var i=k(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var R=function(t){return Object.assign({type:M},t)},M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(a,t);var e,n,i,o=x(a);function a(){var t;return w(this,a),(t=o.apply(this,arguments))._metrics=null,t.flex=null,t.justify=null,t}return e=a,n=[{key:"_defaultConfig",get:function(){return Object.assign({},S(k(a.prototype),"_defaultConfig",this),{flex:!1,justify:"start"})}},{key:"gap",set:function(t){this._setGap(t)}},{key:"_updateLayout",value:function(){var t=this,e=this.justify,n=_(this._padding1,2),i=n[0],o=n[1],a=_(this._padding2,2),u=a[0],c=a[1];["_gap1","_gap2"].forEach((function(n){var r=t[n];if(r===1/0&&!["space-between","space-around","space-evenly"].includes(e))throw new Error("grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'");if(r===1/0&&"_gap2"===n)throw new Error("grid layout: ".concat(y(t.direction),"-gap cannot be set to 'auto' when direction is set to ").concat(t.direction))}));var l={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:this._gap2,padding1:{start:i===1/0?this._gap1:i,end:o===1/0?this._gap1:o},padding2:{start:u===1/0?this._gap2:u,end:c===1/0?this._gap2:c},positions:[]},s=this._viewDim2;this.flex||["start","center","end"].includes(e)?(s-=l.padding2.start,s-=l.padding2.end):"space-between"===e?s+=l.gap2:"space-evenly"===e&&(s-=l.gap2);var f,p,h=s/(this._idealSize2+l.gap2);if(this.flex)switch(l.rolumns=Math.round(h),l.itemSize2=Math.round((s-l.gap2*(l.rolumns-1))/l.rolumns),!0===this.flex?"area":this.flex.preserve){case"aspect-ratio":l.itemSize1=Math.round(this._idealSize1/this._idealSize2*l.itemSize2);break;case(0,r.qF)(this.direction):l.itemSize1=Math.round(this._idealSize1);break;default:l.itemSize1=Math.round(this._idealSize1*this._idealSize2/l.itemSize2)}else l.itemSize1=this._idealSize1,l.itemSize2=this._idealSize2,l.rolumns=Math.floor(h);if(this.flex||["start","center","end"].includes(e)){var d=l.rolumns*l.itemSize2+(l.rolumns-1)*l.gap2;f=this.flex||"start"===e?l.padding2.start:"end"===e?this._viewDim2-l.padding2.end-d:Math.round(this._viewDim2/2-d/2),p=l.gap2}else{var m=s-l.rolumns*l.itemSize2;"space-between"===e?(p=Math.round(m/(l.rolumns-1)),f=0):"space-around"===e?(p=Math.round(m/l.rolumns),f=Math.round(p/2)):f=p=Math.round(m/(l.rolumns+1)),this._gap1===1/0&&(l.gap1=p,i===1/0&&(l.padding1.start=f),o===1/0&&(l.padding1.end=f))}for(var b=0;b<l.rolumns;b++)l.positions.push(f),f+=l.itemSize2+p;this._metrics=l}},{key:"_delta",get:function(){return this._metrics.itemSize1+this._metrics.gap1}},{key:"_getItemSize",value:function(t){var e;return g(e={},this._sizeDim,this._metrics.itemSize1),g(e,this._secondarySizeDim,this._metrics.itemSize2),e}},{key:"_getActiveItems",value:function(){var t=this._metrics.padding1,e=Math.max(0,this._scrollPosition-this._overhang),n=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),r=Math.max(0,Math.floor((e-t.start)/this._delta)),i=Math.max(0,Math.ceil((n-t.start)/this._delta));this._first=r*this._metrics.rolumns,this._last=Math.min(i*this._metrics.rolumns-1,this._totalItems-1),this._physicalMin=t.start+this._delta*r,this._physicalMax=t.start+this._delta*i}},{key:"_getItemPosition",value:function(t){var e,n=this._metrics,i=n.rolumns,o=n.padding1,a=n.positions,u=n.itemSize1,c=n.itemSize2;return g(e={},this._positionDim,o.start+Math.floor(t/i)*this._delta),g(e,this._secondaryPositionDim,a[t%i]),g(e,(0,r.qF)(this.direction),u),g(e,(0,r.gu)(this.direction),c),e}},{key:"_updateScrollSize",value:function(){this._scrollSize=Math.max(1,Math.ceil(this._totalItems/this._metrics.rolumns)*this._delta+this._gap)}}],n&&O(e.prototype,n),i&&O(e,i),Object.defineProperty(e,"prototype",{writable:!1}),a}(m)}}]);