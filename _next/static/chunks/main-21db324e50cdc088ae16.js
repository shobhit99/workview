_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{BMP1:function(e,t,r){"use strict";var n=r("284h")(r("IKlv"));window.next=n,(0,n.default)().catch(console.error)},DqTX:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}));var a=n.title?n.title[0]:null,i="";if(a){var c=a.props.children;i="string"===typeof c?c:c.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var a=Number(n.content),i=[],c=0,u=n.previousElementSibling;c<a;c++,u=u.previousElementSibling)u.tagName.toLowerCase()===e&&i.push(u);var s=t.map(o).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return r.insertBefore(e,n)})),n.content=(a-i.length+s.length).toString()}(e,n[e]||[])}))}}))}}};var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();o.setAttribute(i,r[a])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?o.innerHTML=u.__html||"":c&&(o.textContent="string"===typeof c?c:c.join("")),o}},IKlv:function(e,t,r){"use strict";var n=r("yXPU"),o=r("lwsE"),a=r("W8MJ"),i=r("7W2i"),c=r("a1gu"),u=r("Nsbk"),s=r("J4zp");function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(N){u=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new T(o||[]);return n(i,"_invoke",{value:S(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=s;var d={};function p(){}function h(){}function v(){}var m={};u(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&r.call(y,a)&&(m=y);var w=v.prototype=p.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var u=f(e[o],e,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function S(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function b(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e||""===e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return h.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(_.prototype),u(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var d=r("284h"),p=r("TqRt");t.__esModule=!0,t.render=te,t.renderError=ne,t.default=t.emitter=t.router=t.version=void 0;var h=p(r("pVnL")),v=(p(r("284h")),p(r("q1tI"))),m=p(r("i8i4")),g=r("FYa8"),y=p(r("dZ6Y")),w=r("qOIg"),E=r("elyg"),_=r("/jkW"),S=d(r("3WeD")),b=d(r("yLiY")),x=r("g/15"),P=p(r("DqTX")),T=d(r("zmvN")),L=p(r("bGXG")),N=r("nOHt");"finally"in Promise.prototype||(Promise.prototype.finally=r("Z577"));var k=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=k;t.version="9.5.3";var R=k.props,C=k.err,A=k.page,M=k.query,I=k.buildId,F=k.assetPrefix,D=k.runtimeConfig,j=k.dynamicIds,B=k.isFallback,O=F||"";r.p="".concat(O,"/_next/"),b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:D||{}});var q=(0,x.getURL)();(0,E.hasBasePath)(q)&&(q=(0,E.delBasePath)(q));var G=new T.default(I,O,A),U=function(e){var t=s(e,2),r=t[0],n=t[1];return G.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return U(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=U;var H,W,X,Y,J,V,Z,z=(0,P.default)(),K=document.getElementById("__next");t.router=X;var Q=function(e){i(r,e);var t=f(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),X.isSsr&&(B||k.nextExport&&((0,_.isDynamicRoute)(X.pathname)||location.search)||R&&R.__N_SSG&&location.search)&&X.replace(X.pathname+"?"+String(S.assign(S.urlQueryToSearchParams(X.query),new URLSearchParams(location.search))),q,{_h:1,shallow:!B})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(v.default.Component),$=(0,y.default)();t.emitter=$;var ee=function(){var e=n(l().mark((function e(){var r,n,o,a,i,c,u=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.length>0&&void 0!==u[0]?u[0]:{},e.next=4,G.loadPage("/_app");case 4:return r=e.sent,n=r.page,o=r.mod,V=n,o&&o.reportWebVitals&&(Z=function(e){var t,r=e.id,n=e.name,a=e.startTime,i=e.value,c=e.duration,u=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),o.reportWebVitals({id:r||l,name:n,startTime:a||t,value:null==i?c:i,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),a=C,e.prev=10,e.next=14,G.loadPage(A);case 14:i=e.sent,Y=i.page,J=i.styleSheets,e.next=21;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),a=e.t0;case 26:if(!window.__NEXT_PRELOADREADY){e.next=30;break}return e.next=30,window.__NEXT_PRELOADREADY(j);case 30:return t.router=X=(0,N.createRouter)(A,M,q,{initialProps:R,pageLoader:G,App:V,Component:Y,initialStyleSheets:J,wrapApp:se,err:a,isFallback:Boolean(B),subscription:function(e,t){return te({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})}}),te(c={App:V,Component:Y,styleSheets:J,props:R,err:a}),e.abrupt("return",$);case 38:return e.abrupt("return",{emitter:$,render:te,renderCtx:c});case 39:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function te(e){return re.apply(this,arguments)}function re(){return(re=n(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ne(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,le(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ne((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ne(e){var t=e.App,r=e.err;return console.error(r),G.loadPage("/_error").then((function(n){var o=n.page,a=n.styleSheets,i=se(t),c={Component:o,AppTree:i,router:X,ctx:{err:r,pathname:A,query:M,asPath:q,AppTree:i}};return Promise.resolve(e.props?e.props:(0,x.loadGetInitialProps)(t,c)).then((function(t){return le((0,h.default)({},e,{err:r,Component:o,styleSheets:a,props:t}))}))}))}t.default=ee;var oe="function"===typeof m.default.hydrate;function ae(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),Z&&performance.getEntriesByName("Next.js-hydration").forEach(Z),ce())}function ie(){if(x.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),Z&&(performance.getEntriesByName("Next.js-render").forEach(Z),performance.getEntriesByName("Next.js-route-change-to-render").forEach(Z)),ce(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ce(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ue(e){var t=e.children;return v.default.createElement(Q,{fn:function(e){return ne({App:V,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},v.default.createElement(w.RouterContext.Provider,{value:(0,N.makePublicRouterInstance)(X)},v.default.createElement(g.HeadManagerContext.Provider,{value:z},t)))}var se=function(e){return function(t){var r=(0,h.default)({},t,{Component:Y,err:C,router:X});return v.default.createElement(ue,null,v.default.createElement(e,r))}};function le(e){var t=e.App,r=e.Component,n=e.props,o=e.err,a=e.styleSheets;r=r||H.Component,n=n||H.props;var i=(0,h.default)({},n,{Component:r,err:o,router:X});H=i;var c,u=!1,s=new Promise((function(e,t){W&&W(),c=function(){W=null,e()},W=function(){u=!0,W=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var l,f,d=v.default.createElement(fe,{callback:function(){if(!oe&&!u){for(var e=new Set(a.map((function(e){return e.href}))),t=(0,T.looseToArray)(document.querySelectorAll("style[data-n-href]")),r=t.map((function(e){return e.getAttribute("data-n-href")})),n=0;n<r.length;++n)e.has(r[n])?t[n].removeAttribute("media"):t[n].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&a.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(o.parentNode.insertBefore(r,o.nextSibling),o=r)})),(0,T.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}c()}},v.default.createElement(ue,null,v.default.createElement(t,i)));return function(){if(oe)return!1;var e=(0,T.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));a.forEach((function(e){var r=e.href,n=e.text;if(!t.has(r)){var o=document.createElement("style");o.setAttribute("data-n-href",r),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(n))}}))}(),l=d,f=K,x.ST&&performance.mark("beforeRender"),oe?(m.default.hydrate(l,f,ae),oe=!1,Z&&x.ST&&(0,L.default)(Z)):m.default.render(l,f,ie),s}function fe(e){var t=e.callback,r=e.children;return v.default.useLayoutEffect((function(){return t()}),[t]),r}},Lab5:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return r+t}},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}},bGXG:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r("w6Sm");t.default=function(e){(0,n.getCLS)(e),(0,n.getFID)(e),(0,n.getFCP)(e),(0,n.getLCP)(e),(0,n.getTTFB)(e)}},fcRV:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(/[/#?]/g,(function(e){return encodeURIComponent(e)}))}},pVnL:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},w6Sm:function(e,t,r){"use strict";r.r(t),r.d(t,"getCLS",(function(){return h})),r.d(t,"getFCP",(function(){return m})),r.d(t,"getFID",(function(){return g})),r.d(t,"getLCP",(function(){return w})),r.d(t,"getTTFB",(function(){return E}));var n,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},u=!1,s=!1,l=function(e){u=!e.persisted},f=function(){addEventListener("pagehide",l),addEventListener("unload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(f(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:u})}),{capture:!0,once:t})},p=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),n=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),a())},o=c("layout-shift",n),a=p(e,r,o,t);d((function(e){var t=e.isUnloading;o&&o.takeRecords().map(n),t&&(r.isFinal=!0),a()}))},v=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return n=t}),!0)),{get timeStamp(){return n}}},m=function(e){var t=i("FCP"),r=v(),n=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=p(e,t,n)},g=function(e){var t=i("FID"),r=v(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=c("first-input",n),a=p(e,t,o);d((function(){o&&(o.takeRecords().map(n),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),n=v(),o=function(e){var t=e.startTime;t<n.timeStamp?(r.value=t,r.entries.push(e)):r.isFinal=!0,u()},a=c("largest-contentful-paint",o),u=p(e,r,a,t),s=function(){r.isFinal||(a&&a.takeRecords().map(o),r.isFinal=!0,u())};y().then(s),d(s,!0)},E=function(e){var t,r=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},yLiY:function(e,t,r){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},zmvN:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("TqRt");t.__esModule=!0,t.default=t.looseToArray=void 0;var i=a(r("dZ6Y")),c=r("elyg"),u=a(r("fcRV")),s=a(r("Lab5")),l=r("/jkW"),f=r("hS4m"),d=r("3WeD"),p=r("gguc"),h=r("YTqd"),v=function(e){return[].slice.call(e)};function m(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}function g(e){return(0,c.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=v;var y=m("preload")&&!m("prefetch")?"preload":"prefetch",w=m("preload")?"preload":y;document.createElement("script");function E(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function _(e,t,r,n){return new Promise((function(o,a){n=document.createElement("link"),r&&(n.as=r),n.rel=t,n.crossOrigin=void 0,n.onload=o,n.onerror=a,n.href=e,document.head.appendChild(n)}))}var S=function(){function e(t,r,o){n(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=o,this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,i.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==o&&(this.loadingRoutes[o]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]?r[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(g(e))}))}},{key:"getDataHref",value:function(e,t,r){var n,o=this,a=(0,f.parseRelativeUrl)(e),i=a.pathname,v=a.searchParams,m=a.search,g=(0,d.searchParamsToUrlQuery)(v),y=(0,f.parseRelativeUrl)(t).pathname,w=E(i),_=function(e){var t=(0,s.default)(e,".json");return(0,c.addBasePath)("/_next/data/".concat(o.buildId).concat(t).concat(r?"":m))},S=(0,l.isDynamicRoute)(w);if(S){var b=(0,h.getRouteRegex)(w),x=b.groups,P=(0,p.getRouteMatcher)(b)(y)||g;n=w,Object.keys(x).every((function(e){var t=P[e]||"",r=x[e],o=r.repeat,a=r.optional,i="[".concat(o?"...":"").concat(e,"]");return a&&(i="".concat(t?"":"/","[").concat(i,"]")),o&&!Array.isArray(t)&&(t=[t]),(a||e in P)&&(n=n.replace(i,o?t.map(u.default).join("/"):(0,u.default)(t))||"/")}))||(n="")}return S?n&&_(n):_(w)}},{key:"prefetchData",value:function(e,t){var r=this,n=E((0,f.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(n)&&(a=r.getDataHref(e,t,!0))&&!document.querySelector('link[rel="'.concat(y,'"][href^="').concat(a,'"]'))&&_(a,y,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=E(e),new Promise((function(r,n){var o=t.pageCache[e];if(o)"error"in o?n(o.error):r(o);else{var a=function o(a){t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],"error"in a?n(a.error):r(a)};if(t.pageRegisterEvents.on(e,a),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,r){var n=document.createElement("script");n.crossOrigin=void 0,n.src=e,n.onload=t,n.onerror=function(){return r(g(e))},document.body.appendChild(n)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(w,'"][href^="').concat(e,'"]'))&&_(e,w,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(r){t.pageCache[e]={error:r},a({error:r})}))}}))}},{key:"registerPage",value:function(e,t){var r=this;var n=e===this.initialPage;("/_app"===e?Promise.resolve([]):(n?Promise.resolve(v(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw g(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){if(n)return v(document.styleSheets).filter((function(e){return e.ownerNode&&"LINK"===e.ownerNode.tagName&&e.ownerNode.hasAttribute("data-n-p")})).map((function(e){return{href:e.ownerNode.getAttribute("href"),text:v(e.cssRules).map((function(e){return e.cssText})).join("")}}));throw e}))}))).then((function(n){return function(n){try{var o=t(),a={page:o.default||o,mod:o,styleSheets:n};r.pageCache[e]=a,r.pageRegisterEvents.emit(e,a)}catch(i){r.pageCache[e]={error:i},r.pageRegisterEvents.emit(e,{error:i})}}(n)}),(function(t){r.pageCache[e]={error:t},r.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else;return Promise.all(document.querySelector('link[rel="'.concat(y,'"][href^="').concat(n,'"]'))?[]:[n&&_(n,y,n.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=S}},[["BMP1",0,2,1]]]);