/*! For license information please see 69e58998.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[426],{77426:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e){return null==e}n.d(t,{oW:function(){return nt},Dy:function(){return tt},$w:function(){return rt},zD:function(){return it}});var o={isNothing:r,isObject:function(e){return"object"===i(e)&&null!==e},toArray:function(e){return Array.isArray(e)?e:r(e)?[]:[e]},repeat:function(e,t){var n,i="";for(n=0;n<t;n+=1)i+=e;return i},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var n,i,r,o;if(t)for(n=0,i=(o=Object.keys(t)).length;n<i;n+=1)e[r=o[n]]=t[r];return e}};function a(e,t){var n="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+="\n\n"+e.mark.snippet),i+" "+n):i}function l(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=a(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}l.prototype=Object.create(Error.prototype),l.prototype.constructor=l,l.prototype.toString=function(e){return this.name+": "+a(this,e)};var c=l;function u(e,t,n,i,r){var o="",a="",l=Math.floor(r/2)-1;return i-t>l&&(t=i-l+(o=" ... ").length),n-i>l&&(n=i+l-(a=" ...").length),{str:o+e.slice(t,n).replace(/\t/g,"→")+a,pos:i-t+o.length}}function s(e,t){return o.repeat(" ",t-e.length)+e}var p=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var n,i=/\r?\n|\r|\0/g,r=[0],a=[],l=-1;n=i.exec(e.buffer);)a.push(n.index),r.push(n.index+n[0].length),e.position<=n.index&&l<0&&(l=r.length-2);l<0&&(l=r.length-1);var c,p,f="",d=Math.min(e.line+t.linesAfter,a.length).toString().length,h=t.maxLength-(t.indent+d+3);for(c=1;c<=t.linesBefore&&!(l-c<0);c++)p=u(e.buffer,r[l-c],a[l-c],e.position-(r[l]-r[l-c]),h),f=o.repeat(" ",t.indent)+s((e.line-c+1).toString(),d)+" | "+p.str+"\n"+f;for(p=u(e.buffer,r[l],a[l],e.position,h),f+=o.repeat(" ",t.indent)+s((e.line+1).toString(),d)+" | "+p.str+"\n",f+=o.repeat("-",t.indent+d+3+p.pos)+"^\n",c=1;c<=t.linesAfter&&!(l+c>=a.length);c++)p=u(e.buffer,r[l+c],a[l+c],e.position-(r[l]-r[l+c]),h),f+=o.repeat(" ",t.indent)+s((e.line+c+1).toString(),d)+" | "+p.str+"\n";return f.replace(/\n$/,"")},f=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],d=["scalar","sequence","mapping"];var h=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===f.indexOf(t))throw new c('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){t[String(e)]=n}))})),t}(t.styleAliases||null),-1===d.indexOf(this.kind))throw new c('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function g(e,t){var n=[];return e[t].forEach((function(e){var t=n.length;n.forEach((function(n,i){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=i)})),n[t]=e})),n}function m(e){return this.extend(e)}m.prototype.extend=function(e){var t=[],n=[];if(e instanceof h)n.push(e);else if(Array.isArray(e))n=n.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new c("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof h))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new c("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new c("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),n.forEach((function(e){if(!(e instanceof h))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var i=Object.create(m.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(n),i.compiledImplicit=g(i,"implicit"),i.compiledExplicit=g(i,"explicit"),i.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function i(e){e.multi?(n.multi[e.kind].push(e),n.multi.fallback.push(e)):n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(i);return n}(i.compiledImplicit,i.compiledExplicit),i};var y=m,b=new h("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),v=new h("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),A=new h("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),w=new y({explicit:[b,v,A]});var k=new h("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var C=new h("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function x(e){return 48<=e&&e<=55}function I(e){return 48<=e&&e<=57}var O=new h("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i=e.length,r=0,o=!1;if(!i)return!1;if("-"!==(t=e[r])&&"+"!==t||(t=e[++r]),"0"===t){if(r+1===i)return!0;if("b"===(t=e[++r])){for(r++;r<i;r++)if("_"!==(t=e[r])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!(48<=(n=e.charCodeAt(r))&&n<=57||65<=n&&n<=70||97<=n&&n<=102))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!x(e.charCodeAt(r)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;r<i;r++)if("_"!==(t=e[r])){if(!I(e.charCodeAt(r)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,n=e,i=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(i=-1),t=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===t){if("b"===n[1])return i*parseInt(n.slice(2),2);if("x"===n[1])return i*parseInt(n.slice(2),16);if("o"===n[1])return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!o.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),j=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var S=/^[-+]?[0-9]+e/;var T=new h("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!j.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||o.isNegativeZero(e))},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(o.isNegativeZero(e))return"-0.0";return n=e.toString(10),S.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),N=w.extend({implicit:[k,C,O,T]}),F=N,M=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),L=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var E=new h("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==M.exec(e)||null!==L.exec(e))},construct:function(e){var t,n,i,r,o,a,l,c,u=0,s=null;if(null===(t=M.exec(e))&&(t=L.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,i,r));if(o=+t[4],a=+t[5],l=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(s=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(s=-s)),c=new Date(Date.UTC(n,i,r,o,a,l,u)),s&&c.setTime(c.getTime()-s),c},instanceOf:Date,represent:function(e){return e.toISOString()}});var _=new h("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var q=new h("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i=0,r=e.length,o=D;for(n=0;n<r;n++)if(!((t=o.indexOf(e.charAt(n)))>64)){if(t<0)return!1;i+=6}return i%8==0},construct:function(e){var t,n,i=e.replace(/[\r\n=]/g,""),r=i.length,o=D,a=0,l=[];for(t=0;t<r;t++)t%4==0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)),a=a<<6|o.indexOf(i.charAt(t));return 0===(n=r%4*6)?(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)):18===n?(l.push(a>>10&255),l.push(a>>2&255)):12===n&&l.push(a>>4&255),new Uint8Array(l)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,n,i="",r=0,o=e.length,a=D;for(t=0;t<o;t++)t%3==0&&t&&(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]),r=(r<<8)+e[t];return 0===(n=o%3)?(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]):2===n?(i+=a[r>>10&63],i+=a[r>>4&63],i+=a[r<<2&63],i+=a[64]):1===n&&(i+=a[r>>2&63],i+=a[r<<4&63],i+=a[64],i+=a[64]),i}}),U=Object.prototype.hasOwnProperty,Y=Object.prototype.toString;var R=new h("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,i,r,o,a=[],l=e;for(t=0,n=l.length;t<n;t+=1){if(i=l[t],o=!1,"[object Object]"!==Y.call(i))return!1;for(r in i)if(U.call(i,r)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==a.indexOf(r))return!1;a.push(r)}return!0},construct:function(e){return null!==e?e:[]}}),B=Object.prototype.toString;var W=new h("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(i=a[t],"[object Object]"!==B.call(i))return!1;if(1!==(r=Object.keys(i)).length)return!1;o[t]=[r[0],i[r[0]]]}return!0},construct:function(e){if(null===e)return[];var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)i=a[t],r=Object.keys(i),o[t]=[r[0],i[r[0]]];return o}}),K=Object.prototype.hasOwnProperty;var $=new h("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(K.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),P=F.extend({implicit:[E,_],explicit:[q,R,W,$]}),G=Object.prototype.hasOwnProperty,V=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Z=/[\x85\u2028\u2029]/,z=/[,\[\]\{\}]/,Q=/^(?:!|!!|![a-z\-]+!)$/i,J=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function H(e){return Object.prototype.toString.call(e)}function X(e){return 10===e||13===e}function ee(e){return 9===e||32===e}function te(e){return 9===e||32===e||10===e||13===e}function ne(e){return 44===e||91===e||93===e||123===e||125===e}function ie(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function re(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function oe(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var ae=new Array(256),le=new Array(256),ce=0;ce<256;ce++)ae[ce]=re(ce)?1:0,le[ce]=re(ce);function ue(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||P,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function se(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=p(n),new c(t,n)}function pe(e,t){throw se(e,t)}function fe(e,t){e.onWarning&&e.onWarning.call(null,se(e,t))}var de={YAML:function(e,t,n){var i,r,o;null!==e.version&&pe(e,"duplication of %YAML directive"),1!==n.length&&pe(e,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&pe(e,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&pe(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&fe(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var i,r;2!==n.length&&pe(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],Q.test(i)||pe(e,"ill-formed tag handle (first argument) of the TAG directive"),G.call(e.tagMap,i)&&pe(e,'there is a previously declared suffix for "'+i+'" tag handle'),J.test(r)||pe(e,"ill-formed tag prefix (second argument) of the TAG directive");try{r=decodeURIComponent(r)}catch(o){pe(e,"tag prefix is malformed: "+r)}e.tagMap[i]=r}};function he(e,t,n,i){var r,o,a,l;if(t<n){if(l=e.input.slice(t,n),i)for(r=0,o=l.length;r<o;r+=1)9===(a=l.charCodeAt(r))||32<=a&&a<=1114111||pe(e,"expected valid JSON character");else V.test(l)&&pe(e,"the stream contains non-printable characters");e.result+=l}}function ge(e,t,n,i){var r,a,l,c;for(o.isObject(n)||pe(e,"cannot merge mappings; the provided source object is unacceptable"),l=0,c=(r=Object.keys(n)).length;l<c;l+=1)a=r[l],G.call(t,a)||(t[a]=n[a],i[a]=!0)}function me(e,t,n,r,o,a,l,c,u){var s,p;if(Array.isArray(o))for(s=0,p=(o=Array.prototype.slice.call(o)).length;s<p;s+=1)Array.isArray(o[s])&&pe(e,"nested arrays are not supported inside keys"),"object"===i(o)&&"[object Object]"===H(o[s])&&(o[s]="[object Object]");if("object"===i(o)&&"[object Object]"===H(o)&&(o="[object Object]"),o=String(o),null===t&&(t={}),"tag:yaml.org,2002:merge"===r)if(Array.isArray(a))for(s=0,p=a.length;s<p;s+=1)ge(e,t,a[s],n);else ge(e,t,a,n);else e.json||G.call(n,o)||!G.call(t,o)||(e.line=l||e.line,e.lineStart=c||e.lineStart,e.position=u||e.position,pe(e,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(t,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):t[o]=a,delete n[o];return t}function ye(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):pe(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function be(e,t,n){for(var i=0,r=e.input.charCodeAt(e.position);0!==r;){for(;ee(r);)9===r&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&35===r)do{r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!X(r))break;for(ye(e),r=e.input.charCodeAt(e.position),i++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==n&&0!==i&&e.lineIndent<n&&fe(e,"deficient indentation"),i}function ve(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!te(t)))}function Ae(e,t){1===t?e.result+=" ":t>1&&(e.result+=o.repeat("\n",t-1))}function we(e,t){var n,i,r=e.tag,o=e.anchor,a=[],l=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),i=e.input.charCodeAt(e.position);0!==i&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,pe(e,"tab characters must not be used in indentation")),45===i)&&te(e.input.charCodeAt(e.position+1));)if(l=!0,e.position++,be(e,!0,-1)&&e.lineIndent<=t)a.push(null),i=e.input.charCodeAt(e.position);else if(n=e.line,xe(e,t,3,!1,!0),a.push(e.result),be(e,!0,-1),i=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==i)pe(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!l&&(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0)}function ke(e){var t,n,i,r,o=!1,a=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&pe(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(o=!0,r=e.input.charCodeAt(++e.position)):33===r?(a=!0,n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,o){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r);e.position<e.length?(i=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):pe(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!te(r);)33===r&&(a?pe(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),Q.test(n)||pe(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);i=e.input.slice(t,e.position),z.test(i)&&pe(e,"tag suffix cannot contain flow indicator characters")}i&&!J.test(i)&&pe(e,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(l){pe(e,"tag name is malformed: "+i)}return o?e.tag=i:G.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:pe(e,'undeclared tag handle "'+n+'"'),!0}function Ce(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&pe(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!te(n)&&!ne(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&pe(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function xe(e,t,n,i,r){var a,l,c,u,s,p,f,d,h,g=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=l=c=4===n||3===n,i&&be(e,!0,-1)&&(m=!0,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)),1===g)for(;ke(e)||Ce(e);)be(e,!0,-1)?(m=!0,c=a,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)):c=!1;if(c&&(c=m||r),1!==g&&4!==n||(d=1===n||2===n?t:t+1,h=e.position-e.lineStart,1===g?c&&(we(e,h)||function(e,t,n){var i,r,o,a,l,c,u,s=e.tag,p=e.anchor,f={},d=Object.create(null),h=null,g=null,m=null,y=!1,b=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=f),u=e.input.charCodeAt(e.position);0!==u;){if(y||-1===e.firstTabInLine||(e.position=e.firstTabInLine,pe(e,"tab characters must not be used in indentation")),i=e.input.charCodeAt(e.position+1),o=e.line,63!==u&&58!==u||!te(i)){if(a=e.line,l=e.lineStart,c=e.position,!xe(e,n,2,!1,!0))break;if(e.line===o){for(u=e.input.charCodeAt(e.position);ee(u);)u=e.input.charCodeAt(++e.position);if(58===u)te(u=e.input.charCodeAt(++e.position))||pe(e,"a whitespace character is expected after the key-value separator within a block mapping"),y&&(me(e,f,d,h,g,null,a,l,c),h=g=m=null),b=!0,y=!1,r=!1,h=e.tag,g=e.result;else{if(!b)return e.tag=s,e.anchor=p,!0;pe(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return e.tag=s,e.anchor=p,!0;pe(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===u?(y&&(me(e,f,d,h,g,null,a,l,c),h=g=m=null),b=!0,y=!0,r=!0):y?(y=!1,r=!0):pe(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,u=i;if((e.line===o||e.lineIndent>t)&&(y&&(a=e.line,l=e.lineStart,c=e.position),xe(e,t,4,!0,r)&&(y?g=e.result:m=e.result),y||(me(e,f,d,h,g,m,a,l,c),h=g=m=null),be(e,!0,-1),u=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==u)pe(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return y&&me(e,f,d,h,g,null,a,l,c),b&&(e.tag=s,e.anchor=p,e.kind="mapping",e.result=f),b}(e,h,d))||function(e,t){var n,i,r,o,a,l,c,u,s,p,f,d,h=!0,g=e.tag,m=e.anchor,y=Object.create(null);if(91===(d=e.input.charCodeAt(e.position)))a=93,u=!1,o=[];else{if(123!==d)return!1;a=125,u=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),d=e.input.charCodeAt(++e.position);0!==d;){if(be(e,!0,t),(d=e.input.charCodeAt(e.position))===a)return e.position++,e.tag=g,e.anchor=m,e.kind=u?"mapping":"sequence",e.result=o,!0;h?44===d&&pe(e,"expected the node content, but found ','"):pe(e,"missed comma between flow collection entries"),f=null,l=c=!1,63===d&&te(e.input.charCodeAt(e.position+1))&&(l=c=!0,e.position++,be(e,!0,t)),n=e.line,i=e.lineStart,r=e.position,xe(e,t,1,!1,!0),p=e.tag,s=e.result,be(e,!0,t),d=e.input.charCodeAt(e.position),!c&&e.line!==n||58!==d||(l=!0,d=e.input.charCodeAt(++e.position),be(e,!0,t),xe(e,t,1,!1,!0),f=e.result),u?me(e,o,y,p,s,f,n,i,r):l?o.push(me(e,null,y,p,s,f,n,i,r)):o.push(s),be(e,!0,t),44===(d=e.input.charCodeAt(e.position))?(h=!0,d=e.input.charCodeAt(++e.position)):h=!1}pe(e,"unexpected end of the stream within a flow collection")}(e,d)?y=!0:(l&&function(e,t){var n,i,r,a,l,c=1,u=!1,s=!1,p=t,f=0,d=!1;if(124===(a=e.input.charCodeAt(e.position)))i=!1;else{if(62!==a)return!1;i=!0}for(e.kind="scalar",e.result="";0!==a;)if(43===(a=e.input.charCodeAt(++e.position))||45===a)1===c?c=43===a?3:2:pe(e,"repeat of a chomping mode identifier");else{if(!((r=48<=(l=a)&&l<=57?l-48:-1)>=0))break;0===r?pe(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?pe(e,"repeat of an indentation width identifier"):(p=t+r-1,s=!0)}if(ee(a)){do{a=e.input.charCodeAt(++e.position)}while(ee(a));if(35===a)do{a=e.input.charCodeAt(++e.position)}while(!X(a)&&0!==a)}for(;0!==a;){for(ye(e),e.lineIndent=0,a=e.input.charCodeAt(e.position);(!s||e.lineIndent<p)&&32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>p&&(p=e.lineIndent),X(a))f++;else{if(e.lineIndent<p){3===c?e.result+=o.repeat("\n",u?1+f:f):1===c&&u&&(e.result+="\n");break}for(i?ee(a)?(d=!0,e.result+=o.repeat("\n",u?1+f:f)):d?(d=!1,e.result+=o.repeat("\n",f+1)):0===f?u&&(e.result+=" "):e.result+=o.repeat("\n",f):e.result+=o.repeat("\n",u?1+f:f),u=!0,s=!0,f=0,n=e.position;!X(a)&&0!==a;)a=e.input.charCodeAt(++e.position);he(e,n,e.position,!1)}}return!0}(e,d)||function(e,t){var n,i,r;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=r=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(he(e,i,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;i=e.position,e.position++,r=e.position}else X(n)?(he(e,i,r,!0),Ae(e,be(e,!1,t)),i=r=e.position):e.position===e.lineStart&&ve(e)?pe(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);pe(e,"unexpected end of the stream within a single quoted scalar")}(e,d)||function(e,t){var n,i,r,o,a,l,c;if(34!==(l=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(l=e.input.charCodeAt(e.position));){if(34===l)return he(e,n,e.position,!0),e.position++,!0;if(92===l){if(he(e,n,e.position,!0),X(l=e.input.charCodeAt(++e.position)))be(e,!1,t);else if(l<256&&ae[l])e.result+=le[l],e.position++;else if((a=120===(c=l)?2:117===c?4:85===c?8:0)>0){for(r=a,o=0;r>0;r--)(a=ie(l=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+a:pe(e,"expected hexadecimal character");e.result+=oe(o),e.position++}else pe(e,"unknown escape sequence");n=i=e.position}else X(l)?(he(e,n,i,!0),Ae(e,be(e,!1,t)),n=i=e.position):e.position===e.lineStart&&ve(e)?pe(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}pe(e,"unexpected end of the stream within a double quoted scalar")}(e,d)?y=!0:!function(e){var t,n,i;if(42!==(i=e.input.charCodeAt(e.position)))return!1;for(i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!te(i)&&!ne(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&pe(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),G.call(e.anchorMap,n)||pe(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],be(e,!0,-1),!0}(e)?function(e,t,n){var i,r,o,a,l,c,u,s,p=e.kind,f=e.result;if(te(s=e.input.charCodeAt(e.position))||ne(s)||35===s||38===s||42===s||33===s||124===s||62===s||39===s||34===s||37===s||64===s||96===s)return!1;if((63===s||45===s)&&(te(i=e.input.charCodeAt(e.position+1))||n&&ne(i)))return!1;for(e.kind="scalar",e.result="",r=o=e.position,a=!1;0!==s;){if(58===s){if(te(i=e.input.charCodeAt(e.position+1))||n&&ne(i))break}else if(35===s){if(te(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&ve(e)||n&&ne(s))break;if(X(s)){if(l=e.line,c=e.lineStart,u=e.lineIndent,be(e,!1,-1),e.lineIndent>=t){a=!0,s=e.input.charCodeAt(e.position);continue}e.position=o,e.line=l,e.lineStart=c,e.lineIndent=u;break}}a&&(he(e,r,o,!1),Ae(e,e.line-l),r=o=e.position,a=!1),ee(s)||(o=e.position+1),s=e.input.charCodeAt(++e.position)}return he(e,r,o,!1),!!e.result||(e.kind=p,e.result=f,!1)}(e,d,1===n)&&(y=!0,null===e.tag&&(e.tag="?")):(y=!0,null===e.tag&&null===e.anchor||pe(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===g&&(y=c&&we(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&pe(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),u=0,s=e.implicitTypes.length;u<s;u+=1)if((f=e.implicitTypes[u]).resolve(e.result)){e.result=f.construct(e.result),e.tag=f.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(G.call(e.typeMap[e.kind||"fallback"],e.tag))f=e.typeMap[e.kind||"fallback"][e.tag];else for(f=null,u=0,s=(p=e.typeMap.multi[e.kind||"fallback"]).length;u<s;u+=1)if(e.tag.slice(0,p[u].tag.length)===p[u].tag){f=p[u];break}f||pe(e,"unknown tag !<"+e.tag+">"),null!==e.result&&f.kind!==e.kind&&pe(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+f.kind+'", not "'+e.kind+'"'),f.resolve(e.result,e.tag)?(e.result=f.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):pe(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function Ie(e){var t,n,i,r,o=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(r=e.input.charCodeAt(e.position))&&(be(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!te(r);)r=e.input.charCodeAt(++e.position);for(i=[],(n=e.input.slice(t,e.position)).length<1&&pe(e,"directive name must not be less than one character in length");0!==r;){for(;ee(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&!X(r));break}if(X(r))break;for(t=e.position;0!==r&&!te(r);)r=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}0!==r&&ye(e),G.call(de,n)?de[n](e,n,i):fe(e,'unknown document directive "'+n+'"')}be(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,be(e,!0,-1)):a&&pe(e,"directives end mark is expected"),xe(e,e.lineIndent-1,4,!1,!0),be(e,!0,-1),e.checkLineBreaks&&Z.test(e.input.slice(o,e.position))&&fe(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ve(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,be(e,!0,-1)):e.position<e.length-1&&pe(e,"end of the stream or a document separator is expected")}function Oe(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new ue(e,t),i=e.indexOf("\0");for(-1!==i&&(n.position=i,pe(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)Ie(n);return n.documents}var je={loadAll:function(e,t,n){null!==t&&"object"===i(t)&&void 0===n&&(n=t,t=null);var r=Oe(e,n);if("function"!=typeof t)return r;for(var o=0,a=r.length;o<a;o+=1)t(r[o])},load:function(e,t){var n=Oe(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new c("expected a single document in the stream, but found more")}}},Se=Object.prototype.toString,Te=Object.prototype.hasOwnProperty,Ne=65279,Fe={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Me=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Le=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ee(e){var t,n,i;if(t=e.toString(16).toUpperCase(),e<=255)n="x",i=2;else if(e<=65535)n="u",i=4;else{if(!(e<=4294967295))throw new c("code point within a string may not be greater than 0xFFFFFFFF");n="U",i=8}return"\\"+n+o.repeat("0",i-t.length)+t}function _e(e){this.schema=e.schema||P,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=o.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,i,r,o,a,l,c;if(null===t)return{};for(n={},r=0,o=(i=Object.keys(t)).length;r<o;r+=1)a=i[r],l=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(c=e.compiledTypeMap.fallback[a])&&Te.call(c.styleAliases,l)&&(l=c.styleAliases[l]),n[a]=l;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function De(e,t){for(var n,i=o.repeat(" ",t),r=0,a=-1,l="",c=e.length;r<c;)-1===(a=e.indexOf("\n",r))?(n=e.slice(r),r=c):(n=e.slice(r,a+1),r=a+1),n.length&&"\n"!==n&&(l+=i),l+=n;return l}function qe(e,t){return"\n"+o.repeat(" ",e.indent*t)}function Ue(e){return 32===e||9===e}function Ye(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==Ne||65536<=e&&e<=1114111}function Re(e){return Ye(e)&&e!==Ne&&13!==e&&10!==e}function Be(e,t,n){var i=Re(e),r=i&&!Ue(e);return(n?i:i&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!r)||Re(t)&&!Ue(t)&&35===e||58===t&&r}function We(e,t){var n,i=e.charCodeAt(t);return i>=55296&&i<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}function Ke(e){return/^\n* /.test(e)}function $e(e,t,n,i,r,o,a,l){var c,u,s=0,p=null,f=!1,d=!1,h=-1!==i,g=-1,m=Ye(u=We(e,0))&&u!==Ne&&!Ue(u)&&45!==u&&63!==u&&58!==u&&44!==u&&91!==u&&93!==u&&123!==u&&125!==u&&35!==u&&38!==u&&42!==u&&33!==u&&124!==u&&61!==u&&62!==u&&39!==u&&34!==u&&37!==u&&64!==u&&96!==u&&function(e){return!Ue(e)&&58!==e}(We(e,e.length-1));if(t||a)for(c=0;c<e.length;s>=65536?c+=2:c++){if(!Ye(s=We(e,c)))return 5;m=m&&Be(s,p,l),p=s}else{for(c=0;c<e.length;s>=65536?c+=2:c++){if(10===(s=We(e,c)))f=!0,h&&(d=d||c-g-1>i&&" "!==e[g+1],g=c);else if(!Ye(s))return 5;m=m&&Be(s,p,l),p=s}d=d||h&&c-g-1>i&&" "!==e[g+1]}return f||d?n>9&&Ke(e)?5:a?2===o?5:2:d?4:3:!m||a||r(e)?2===o?5:2:1}function Pe(e,t,n,i,r){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Me.indexOf(t)||Le.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,n),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),l=i||e.flowLevel>-1&&n>=e.flowLevel;switch($e(t,l,e.indent,a,(function(t){return function(e,t){var n,i;for(n=0,i=e.implicitTypes.length;n<i;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!i,r)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Ge(t,e.indent)+Ve(De(t,o));case 4:return">"+Ge(t,e.indent)+Ve(De(function(e,t){var n,i,r=/(\n+)([^\n]*)/g,o=(l=e.indexOf("\n"),l=-1!==l?l:e.length,r.lastIndex=l,Ze(e.slice(0,l),t)),a="\n"===e[0]||" "===e[0];var l;for(;i=r.exec(e);){var c=i[1],u=i[2];n=" "===u[0],o+=c+(a||n||""===u?"":"\n")+Ze(u,t),a=n}return o}(t,a),o));case 5:return'"'+function(e){for(var t,n="",i=0,r=0;r<e.length;i>=65536?r+=2:r++)i=We(e,r),!(t=Fe[i])&&Ye(i)?(n+=e[r],i>=65536&&(n+=e[r+1])):n+=t||Ee(i);return n}(t)+'"';default:throw new c("impossible error: invalid scalar style")}}()}function Ge(e,t){var n=Ke(e)?String(t):"",i="\n"===e[e.length-1];return n+(i&&("\n"===e[e.length-2]||"\n"===e)?"+":i?"":"-")+"\n"}function Ve(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Ze(e,t){if(""===e||" "===e[0])return e;for(var n,i,r=/ [^ ]/g,o=0,a=0,l=0,c="";n=r.exec(e);)(l=n.index)-o>t&&(i=a>o?a:l,c+="\n"+e.slice(o,i),o=i+1),a=l;return c+="\n",e.length-o>t&&a>o?c+=e.slice(o,a)+"\n"+e.slice(a+1):c+=e.slice(o),c.slice(1)}function ze(e,t,n,i){var r,o,a,l="",c=e.tag;for(r=0,o=n.length;r<o;r+=1)a=n[r],e.replacer&&(a=e.replacer.call(n,String(r),a)),(Je(e,t+1,a,!0,!0,!1,!0)||void 0===a&&Je(e,t+1,null,!0,!0,!1,!0))&&(i&&""===l||(l+=qe(e,t)),e.dump&&10===e.dump.charCodeAt(0)?l+="-":l+="- ",l+=e.dump);e.tag=c,e.dump=l||"[]"}function Qe(e,t,n){var r,o,a,l,u,s;for(a=0,l=(o=n?e.explicitTypes:e.implicitTypes).length;a<l;a+=1)if(((u=o[a]).instanceOf||u.predicate)&&(!u.instanceOf||"object"===i(t)&&t instanceof u.instanceOf)&&(!u.predicate||u.predicate(t))){if(n?u.multi&&u.representName?e.tag=u.representName(t):e.tag=u.tag:e.tag="?",u.represent){if(s=e.styleMap[u.tag]||u.defaultStyle,"[object Function]"===Se.call(u.represent))r=u.represent(t,s);else{if(!Te.call(u.represent,s))throw new c("!<"+u.tag+'> tag resolver accepts not "'+s+'" style');r=u.represent[s](t,s)}e.dump=r}return!0}return!1}function Je(e,t,n,i,r,o,a){e.tag=null,e.dump=n,Qe(e,n,!1)||Qe(e,n,!0);var l,u=Se.call(e.dump),s=i;i&&(i=e.flowLevel<0||e.flowLevel>t);var p,f,d="[object Object]"===u||"[object Array]"===u;if(d&&(f=-1!==(p=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||f||2!==e.indent&&t>0)&&(r=!1),f&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&f&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===u)i&&0!==Object.keys(e.dump).length?(!function(e,t,n,i){var r,o,a,l,u,s,p="",f=e.tag,d=Object.keys(n);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new c("sortKeys must be a boolean or a function");for(r=0,o=d.length;r<o;r+=1)s="",i&&""===p||(s+=qe(e,t)),l=n[a=d[r]],e.replacer&&(l=e.replacer.call(n,a,l)),Je(e,t+1,a,!0,!0,!0)&&((u=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?s+="?":s+="? "),s+=e.dump,u&&(s+=qe(e,t)),Je(e,t+1,l,!0,u)&&(e.dump&&10===e.dump.charCodeAt(0)?s+=":":s+=": ",p+=s+=e.dump));e.tag=f,e.dump=p||"{}"}(e,t,e.dump,r),f&&(e.dump="&ref_"+p+e.dump)):(!function(e,t,n){var i,r,o,a,l,c="",u=e.tag,s=Object.keys(n);for(i=0,r=s.length;i<r;i+=1)l="",""!==c&&(l+=", "),e.condenseFlow&&(l+='"'),a=n[o=s[i]],e.replacer&&(a=e.replacer.call(n,o,a)),Je(e,t,o,!1,!1)&&(e.dump.length>1024&&(l+="? "),l+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Je(e,t,a,!1,!1)&&(c+=l+=e.dump));e.tag=u,e.dump="{"+c+"}"}(e,t,e.dump),f&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===u)i&&0!==e.dump.length?(e.noArrayIndent&&!a&&t>0?ze(e,t-1,e.dump,r):ze(e,t,e.dump,r),f&&(e.dump="&ref_"+p+e.dump)):(!function(e,t,n){var i,r,o,a="",l=e.tag;for(i=0,r=n.length;i<r;i+=1)o=n[i],e.replacer&&(o=e.replacer.call(n,String(i),o)),(Je(e,t,o,!1,!1)||void 0===o&&Je(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=l,e.dump="["+a+"]"}(e,t,e.dump),f&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==u){if("[object Undefined]"===u)return!1;if(e.skipInvalid)return!1;throw new c("unacceptable kind of an object to dump "+u)}"?"!==e.tag&&Pe(e,e.dump,t,o,s)}null!==e.tag&&"?"!==e.tag&&(l=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),l="!"===e.tag[0]?"!"+l:"tag:yaml.org,2002:"===l.slice(0,18)?"!!"+l.slice(18):"!<"+l+">",e.dump=l+" "+e.dump)}return!0}function He(e,t){var n,i,r=[],o=[];for(Xe(e,r,o),n=0,i=o.length;n<i;n+=1)t.duplicates.push(r[o[n]]);t.usedDuplicates=new Array(i)}function Xe(e,t,n){var r,o,a;if(null!==e&&"object"===i(e))if(-1!==(o=t.indexOf(e)))-1===n.indexOf(o)&&n.push(o);else if(t.push(e),Array.isArray(e))for(o=0,a=e.length;o<a;o+=1)Xe(e[o],t,n);else for(o=0,a=(r=Object.keys(e)).length;o<a;o+=1)Xe(e[r[o]],t,n)}function et(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var tt=h,nt=P,it=je.load,rt={dump:function(e,t){var n=new _e(t=t||{});n.noRefs||He(e,n);var i=e;return n.replacer&&(i=n.replacer.call({"":i},"",i)),Je(n,0,i,!0,!0)?n.dump+"\n":""}}.dump;et("safeLoad","load"),et("safeLoadAll","loadAll"),et("safeDump","dump")}}]);