(self.webpackChunkmain_app=self.webpackChunkmain_app||[]).push([[403],{1767:(t,n,e)=>{"use strict";e.d(n,{ZA:()=>nt,IH:()=>rt});var r,u,o,i=e(3038),c=e.n(i),a=e(8),s=e.n(a),f="undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("Trident");function l(t,n){if(!t.hasOwnProperty(n)||!isNaN(n)&&n<t.length)return!0;if(!f)return!1;try{return t[n]&&"undefined"!=typeof window&&t[n].parent===window}catch(t){return!0}}function h(t){var n,e=0,i=!1;for(var c in t)if(!l(t,c)){for(var a=0;a<window.frames.length&&!i;a++)if(window.frames[a]===t[c]){i=!0;break}if(!i&&(0===e&&c!==r||1===e&&c!==u))return c;e++,n=c}if(n!==o)return n}function p(t){for(var n in r=u=void 0,t)l(t,n)||(r?u||(u=n):r=n,o=n);return o}function d(t){var n=t.indexOf(">")+1,e=t.lastIndexOf("<");return t.substring(n,e)}function m(t){if("object"===s()(t))return"/";try{var n=new URL(t.startsWith("//")?"".concat(location.protocol).concat(t):t,location.href),e=n.origin,r=n.pathname.split("/");return r.pop(),"".concat(e).concat(r.join("/"),"/")}catch(t){return console.warn(t),""}}var F=window.requestIdleCallback||function(t){var n=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)};function y(t,n){if(!n)return t.text();if(!t.headers)return t.text();var e=t.headers.get("Content-Type");if(!e)return t.text();var r="utf-8",u=e.split(";");if(2===u.length){var o=u[1].split("="),i=c()(o,2)[1],a=i&&i.trim();a&&(r=a)}return"UTF-8"===r.toUpperCase()?t.text():t.blob().then((function(t){return new Promise((function(n,e){var u=new window.FileReader;u.onload=function(){n(u.result)},u.onerror=e,u.readAsText(t,r)}))}))}var w=/(<script[\s\S]*?>)[\s\S]*?<\/script>/gi,v=/<(script)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+((?!type=('|')text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i,x=/.*\ssrc=('|")?([^>'"\s]+)/,g=/.*\stype=('|")?([^>'"\s]+)/,A=/.*\sentry\s*.*/,E=/.*\sasync\s*.*/,b=/.*\snomodule\s*.*/,S=/.*\stype=('|")?module('|")?\s*.*/,P=/<(link)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*?>/gi,T=/\srel=('|")?(preload|prefetch)\1/,k=/.*\shref=('|")?([^>'"\s]+)/,j=/.*\sas=('|")?font\1.*/,R=/<style[^>]*>[\s\S]*?<\/style>/gi,C=/\s+rel=('|")?stylesheet\1.*/,D=/.*\shref=('|")?([^>'"\s]+)/,W=/<!--([\s\S]*?)-->/g,O=/<link([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)ignore([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*|=[\s\S]*)>/i,U=/<style([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)ignore([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*|=[\s\S]*)>/i,M=/<script([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)ignore([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*|=[\s\S]*)>/i;function G(t){return t.startsWith("//")||t.startsWith("http://")||t.startsWith("https://")}function I(t,n){return new URL(t,n).toString()}var L=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"\x3c!-- ".concat(n?"prefetch/preload":""," link ").concat(t," replaced by import-html-entry --\x3e")},H=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"\x3c!-- ".concat(n?"async":""," script ").concat(t," replaced by import-html-entry --\x3e")},N=function(t){return"\x3c!-- ignore asset ".concat(t||"file"," replaced by import-html-entry --\x3e")},_=function(t,n){return"\x3c!-- ".concat(n?"nomodule":"module"," script ").concat(t," ignored by import-html-entry --\x3e")};function q(t,n){var e=[],r=[],u=null,o="noModule"in document.createElement("script");return{template:t.replace(W,"").replace(P,(function(t){if(t.match(C)){var e=t.match(D),u=t.match(O);if(e){var o=e&&e[2],i=o;return o&&!G(o)&&(i=I(o,n)),u?N(i):(r.push(i),L(i))}}if(t.match(T)&&t.match(k)&&!t.match(j)){var a=t.match(k),s=c()(a,3)[2];return L(s,!0)}return t})).replace(R,(function(t){return U.test(t)?N("style file"):t})).replace(w,(function(t,r){var i,c=r.match(M),a=o&&!!r.match(b)||!o&&!!r.match(S),s=r.match(g);if((i=s&&s[2])&&-1===["text/javascript","module","application/javascript","text/ecmascript","application/ecmascript"].indexOf(i))return t;if(v.test(t)&&r.match(x)){var f=r.match(A),l=r.match(x),h=l&&l[2];if(u&&f)throw new SyntaxError("You should not set multiply entry script!");if(h&&!G(h)&&(h=I(h,n)),u=u||f&&h,c)return N(h||"js file");if(a)return _(h||"js file",o);if(h){var p=!!r.match(E);return e.push(p?{async:!0,src:h}:h),H(h,p)}return t}return c?N("js file"):a?_("js file",o):(d(t).split(/[\r\n]+/).every((function(t){return!t.trim()||t.trim().startsWith("//")}))||e.push(t),"\x3c!-- inline scripts replaced by import-html-entry --\x3e")})),scripts:e=e.filter((function(t){return!!t})),styles:r,entry:u||e[e.length-1]}}var Y={},Z={},z={};if(!window.fetch)throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');var B=window.fetch.bind(window);function J(t){return t}function K(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.fetch,u=void 0===r?B:r,o=t;return X(n,u).then((function(t){return o=n.reduce((function(n,e,r){return n.replace(L(e),"<style>/* ".concat(e," */").concat(t[r],"</style>"))}),o)}))}var Q=function(t){return t.startsWith("<")};function V(t,n,e,r){var u=Q(t)?"":"//# sourceURL=".concat(t,"\n");return(0,eval)("window").proxy=e,r?";(function(window, self, globalThis){with(window){;".concat(n,"\n").concat(u,"}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);"):";(function(window, self, globalThis){;".concat(n,"\n").concat(u,"}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);")}function X(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B;return Promise.all(t.map((function(t){return Q(t)?d(t):Y[t]||(Y[t]=n(t).then((function(t){return t.text()})))})))}function $(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=function(t){return Z[t]||(Z[t]=n(t).then((function(n){if(n.status>=400)throw e(),new Error("".concat(t," load failed with status ").concat(n.status));return n.text()})))};return Promise.all(t.map((function(t){if("string"==typeof t)return Q(t)?d(t):r(t);var n=t.src;return t.async?{src:n,async:!0,content:new Promise((function(t,e){return F((function(){return r(n).then(t,e)}))}))}:r(n)})))}function tt(t,n){setTimeout((function(){throw console.error(n),t}))}function nt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=r.fetch,o=void 0===u?B:u,i=r.strictGlobal,c=void 0!==i&&i,a=r.success,s=r.error,f=void 0===s?function(){}:s,l=r.beforeExec,d=void 0===l?function(){}:l,m=r.afterExec,F=void 0===m?function(){}:m;return $(n,o,f).then((function(r){var u=function(t,n){var r=V(t,d(n,t)||n,e,c);(0,eval)(r),F(n,t)};function o(i,a){i<n.length&&(function(n,r,o){if("Evaluating script ".concat(n),"Evaluating Time Consuming: ".concat(n),n===t){p(c?e:window);try{u(n,r),o(e[h(c?e:window)]||{})}catch(t){throw console.error("[import-html-entry]: error occurs while executing entry script ".concat(n)),t}}else if("string"==typeof r)try{u(n,r)}catch(t){tt(t,"[import-html-entry]: error occurs while executing normal script ".concat(n))}else r.async&&(null==r||r.content.then((function(t){return u(r.src,t)})).catch((function(t){tt(t,"[import-html-entry]: error occurs while executing async script ".concat(r.src))})))}(n[i],r[i],a),t||i!==n.length-1?o(i+1,a):a())}return new Promise((function(t){return o(0,a||t)}))}))}function et(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=B,r=!1,u=m,o=J;return"function"==typeof n?e=n:(n.fetch&&("function"==typeof n.fetch?e=n.fetch:(e=n.fetch.fn||B,r=!!n.fetch.autoDecodeResponse)),u=n.getPublicPath||n.getDomain||m,o=n.getTemplate||J),z[t]||(z[t]=e(t).then((function(t){return y(t,r)})).then((function(n){var r=u(t),i=q(o(n),r),c=i.template,a=i.scripts,s=i.entry,f=i.styles;return K(c,f,{fetch:e}).then((function(t){return{template:t,assetPublicPath:r,getExternalScripts:function(){return $(a,e)},getExternalStyleSheets:function(){return X(f,e)},execScripts:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.length?nt(s,a,t,{fetch:e,strictGlobal:n,beforeExec:r.beforeExec,afterExec:r.afterExec}):Promise.resolve()}}}))})))}function rt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.fetch,r=void 0===e?B:e,u=n.getTemplate,o=void 0===u?J:u,i=n.getPublicPath||n.getDomain||m;if(!t)throw new SyntaxError("entry should not be empty!");if("string"==typeof t)return et(t,{fetch:r,getPublicPath:i,getTemplate:o});if(Array.isArray(t.scripts)||Array.isArray(t.styles)){var c=t.scripts,a=void 0===c?[]:c,s=t.styles,f=void 0===s?[]:s,l=t.html,h=void 0===l?"":l,p=function(t){return f.reduceRight((function(t,n){return"".concat(L(n)).concat(t)}),t)},d=function(t){return a.reduce((function(t,n){return"".concat(t).concat(H(n))}),t)};return K(o(d(p(h))),f,{fetch:r}).then((function(n){return{template:n,assetPublicPath:i(t),getExternalScripts:function(){return $(a,r)},getExternalStyleSheets:function(){return X(f,r)},execScripts:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.length?nt(a[a.length-1],a,t,{fetch:r,strictGlobal:n,beforeExec:e.beforeExec,afterExec:e.afterExec}):Promise.resolve()}}}))}throw new SyntaxError("entry scripts or styles should be array!")}"undefined"!=typeof performance&&"function"==typeof performance.mark&&"function"==typeof performance.clearMarks&&"function"==typeof performance.measure&&performance.clearMeasures}}]);