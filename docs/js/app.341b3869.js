(function(e){function t(t){for(var r,u,a=t[0],i=t[1],f=t[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-use-local-storage/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("79c4");function o(e,t,n,o,c,u){return Object(r["f"])(),Object(r["b"])("div",null,[Object(r["d"])("div",null,[Object(r["c"])(" persisted: "+Object(r["h"])(e.state.persistValue)+" ",1),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(){return e.onRandomPersist.apply(e,arguments)})}," random ")]),Object(r["d"])("div",null,[Object(r["c"])(" not persisted: "+Object(r["h"])(e.state.ignoreValue)+" ",1),Object(r["d"])("button",{onClick:t[2]||(t[2]=function(){return e.onRandomNotPersist.apply(e,arguments)})}," random ")])])}n("b0c0"),n("862d"),n("46d4"),n("494a"),n("dddc");function c(e,t){localStorage.setItem(e,JSON.stringify(t))}function u(e){var t=localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(n){return}}function a(e,t,n){var o,a=n||Object.keys(e);function i(){a.forEach((function(n){Object(r["i"])((function(){return e[n]}),(function(e){f("".concat(t,".").concat(n),e)}),{deep:!0})}))}function f(e,t){c(e,t)}function s(){return a.forEach((function(n){var r=u("".concat(t,".").concat(n));void 0!==r&&(e[n]=r)})),void 0!==o&&o(e),p}function l(t){return o=function(){return t(e)},s(),p}s(),i();var p={onRehydrate:l};return p}var i=a,f=n("359c"),s=n.n(f),l=Object(r["e"])({name:"App",setup:function(){s.a.seed(1);var e=Object(r["g"])({persistValue:s.a.name.firstName(),ignoreValue:s.a.name.firstName()});function t(){e.persistValue=s.a.name.firstName()}function n(){e.ignoreValue=s.a.name.firstName()}return i(e,"someKey",["persistValue"]).onRehydrate((function(e){console.log(e)})),{onRandomPersist:t,onRandomNotPersist:n,state:e}}});n("64be");l.render=o;var p=l,d=Object(r["a"])(p);d.mount("#app")}});
//# sourceMappingURL=app.341b3869.js.map