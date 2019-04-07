(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{134:function(e,n,t){"use strict";t.r(n);var o=t(4),r=t(7),a=(t(13),t(35),t(43),t(99));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <style include="iron-flex ha-style hassio-style">\n        paper-card {\n          cursor: pointer;\n        }\n        .not_available {\n          opacity: 0.6;\n        }\n        a.repo {\n          display: block;\n          color: var(--primary-text-color);\n        }\n      </style>\n      <template is="dom-if" if="[[addons.length]]">\n        <div class="card-group">\n          <div class="title">\n            [[repo.name]]\n            <div class="description">\n              Maintained by [[repo.maintainer]]\n              <a class="repo" href="[[repo.url]]" target="_blank"\n                >[[repo.url]]</a\n              >\n            </div>\n          </div>\n          <template\n            is="dom-repeat"\n            items="[[addons]]"\n            as="addon"\n            sort="sortAddons"\n          >\n            <paper-card class$="[[computeClass(addon)]]" on-click="addonTapped">\n              <div class="card-content">\n                <hassio-card-content\n                  hass="[[hass]]"\n                  title="[[addon.name]]"\n                  description="[[addon.description]]"\n                  available="[[addon.available]]"\n                  icon="[[computeIcon(addon)]]"\n                  icon-title="[[computeIconTitle(addon)]]"\n                  icon-class="[[computeIconClass(addon)]]"\n                ></hassio-card-content>\n              </div>\n            </paper-card>\n          </template>\n        </div>\n      </template>\n    ']);return s=function(){return e},e}function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,l(n).apply(this,arguments))}var t,i,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,Object(a["a"])(r["a"])),t=n,d=[{key:"template",get:function(){return Object(o.a)(s())}},{key:"properties",get:function(){return{hass:Object,repo:Object,addons:Array}}}],(i=[{key:"sortAddons",value:function(e,n){return e.name.toUpperCase()<n.name.toUpperCase()?-1:1}},{key:"computeIcon",value:function(e){return e.installed&&e.installed!==e.version?"hassio:arrow-up-bold-circle":"hassio:puzzle"}},{key:"computeIconTitle",value:function(e){return e.installed?e.installed!==e.version?"New version available":"Add-on is installed":e.available?"Add-on is not installed":"Add-on is not available on your system"}},{key:"computeIconClass",value:function(e){return e.installed?e.installed!==e.version?"update":"installed":e.available?"":"not_available"}},{key:"computeClass",value:function(e){return e.available?"":"not_available"}},{key:"addonTapped",value:function(e){this.navigate("/hassio/addon/".concat(e.model.addon.slug))}}])&&c(t.prototype,i),d&&c(t,d),n}();customElements.define("hassio-addon-repository",d);t(30),t(46),t(31);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <style include="ha-style hassio-style">\n        .add {\n          padding: 12px 16px;\n        }\n        iron-icon {\n          color: var(--secondary-text-color);\n          margin-right: 16px;\n          display: inline-block;\n        }\n        paper-input {\n          width: calc(100% - 49px);\n          display: inline-block;\n        }\n      </style>\n      <div class="card-group">\n        <div class="title">\n          Repositories\n          <div class="description">\n            Configure which add-on repositories to fetch data from:\n          </div>\n        </div>\n        <template\n          id="list"\n          is="dom-repeat"\n          items="[[repoList]]"\n          as="repo"\n          sort="sortRepos"\n        >\n          <paper-card>\n            <div class="card-content">\n              <hassio-card-content\n                hass="[[hass]]"\n                title="[[repo.name]]"\n                description="[[repo.url]]"\n                icon="hassio:github-circle"\n              ></hassio-card-content>\n            </div>\n            <div class="card-actions">\n              <ha-call-api-button\n                hass="[[hass]]"\n                path="hassio/supervisor/options"\n                data="[[computeRemoveRepoData(repoList, repo.url)]]"\n                class="warning"\n                >Remove</ha-call-api-button\n              >\n            </div>\n          </paper-card>\n        </template>\n        <paper-card>\n          <div class="card-content add">\n            <iron-icon icon="hassio:github-circle"></iron-icon>\n            <paper-input\n              label="Add new repository by URL"\n              value="{{repoUrl}}"\n            ></paper-input>\n          </div>\n          <div class="card-actions">\n            <ha-call-api-button\n              hass="[[hass]]"\n              path="hassio/supervisor/options"\n              data="[[computeAddRepoData(repoList, repoUrl)]]"\n              >Add</ha-call-api-button\n            >\n          </div>\n        </paper-card>\n      </div>\n    ']);return y=function(){return e},e}function b(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,v(n).apply(this,arguments))}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r["a"]),t=n,i=[{key:"template",get:function(){return Object(o.a)(y())}},{key:"properties",get:function(){return{hass:Object,repos:{type:Array,observer:"reposChanged"},repoList:Array,repoUrl:String}}}],(a=[{key:"reposChanged",value:function(e){this.repoList=e.filter(function(e){return"core"!==e.slug&&"local"!==e.slug}),this.repoUrl=""}},{key:"sortRepos",value:function(e,n){return e.name<n.name?-1:1}},{key:"computeRemoveRepoData",value:function(e,n){return{addons_repositories:e.filter(function(e){return e.url!==n}).map(function(e){return e.source})}}},{key:"computeAddRepoData",value:function(e,n){var t=e?e.map(function(e){return e.source}):[];return t.push(n),{addons_repositories:t}}}])&&b(t.prototype,a),i&&b(t,i),n}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <style include="iron-flex ha-style">\n        hassio-addon-repository {\n          margin-top: 24px;\n        }\n      </style>\n      <hassio-repositories-editor\n        hass="[[hass]]"\n        repos="[[repos]]"\n      ></hassio-repositories-editor>\n\n      <template is="dom-repeat" items="[[repos]]" as="repo" sort="sortRepos">\n        <hassio-addon-repository\n          hass="[[hass]]"\n          repo="[[repo]]"\n          addons="[[computeAddons(repo.slug)]]"\n        ></hassio-addon-repository>\n      </template>\n    ']);return w=function(){return e},e}function j(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,n){return!n||"object"!==O(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e,n,t){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=P(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,n){return(R=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}customElements.define("hassio-repositories-editor",g);var S=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),k(this,P(n).apply(this,arguments))}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&R(e,n)}(n,r["a"]),t=n,i=[{key:"template",get:function(){return Object(o.a)(w())}},{key:"properties",get:function(){return{hass:Object,addons:Array,repos:Array}}}],(a=[{key:"ready",value:function(){var e=this;_(P(n.prototype),"ready",this).call(this),this.addEventListener("hass-api-called",function(n){return e.apiCalled(n)}),this.loadData()}},{key:"apiCalled",value:function(e){e.detail.success&&this.loadData()}},{key:"sortRepos",value:function(e,n){return"local"===e.slug?-1:"local"===n.slug?1:"core"===e.slug?-1:"core"===n.slug?1:e.name.toUpperCase()<n.name.toUpperCase()?-1:1}},{key:"computeAddons",value:function(e){return this.addons.filter(function(n){return n.repository===e})}},{key:"loadData",value:function(){var e=this;this.hass.callApi("get","hassio/addons").then(function(n){e.addons=n.data.addons,e.repos=n.data.repositories},function(){e.addons=[],e.repos=[]})}},{key:"refreshData",value:function(){var e=this;this.hass.callApi("post","hassio/addons/reload").then(function(){e.loadData()})}}])&&j(t.prototype,a),i&&j(t,i),n}();customElements.define("hassio-addon-store",S)}}]);