"use strict";(()=>{var e,t,o=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,a=(e=(e,t)=>{t.exports=function(e,t,o,n){var r,i,l;return function(){if(l=this,i=Array.prototype.slice.call(arguments),!r||!o&&!n){if(!o)return a(),r=setTimeout(s,t);r=setTimeout(a,t),e.apply(l,i)}function s(){a(),e.apply(l,i)}function a(){clearTimeout(r),r=null}}}},()=>(t||e((t={exports:{}}).exports,t),t.exports)),u="fs-attributes",d="scrolldisable",c=()=>{};function f(e,t,o,n){return e?(e.addEventListener(t,o,n),()=>e.removeEventListener(t,o,n)):c}var p=e=>{let{overflow:t}=getComputedStyle(e);return"auto"===t||"scroll"===t},v=e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);var w=`${u}-support`,m=e=>{let t=(t,o,n)=>{let r,i=e[t],{key:l,values:s}=i;if(!o)return`[${l}]`;let a=null==s?void 0:s[o];r="string"==typeof a?a:a(n&&"instanceIndex"in n?n.instanceIndex:void 0);let u=n&&"caseInsensitive"in n&&n.caseInsensitive?"i":"";if(null==n||!n.operator)return`[${l}="${r}"${u}]`;switch(n.operator){case"prefixed":return`[${l}^="${r}"${u}]`;case"suffixed":return`[${l}$="${r}"${u}]`;case"contains":return`[${l}*="${r}"${u}]`}};return[t,function(e,o){let n=t("element",e,o),r=(null==o?void 0:o.scope)||document;return null!=o&&o.all?[...r.querySelectorAll(n)]:r.querySelector(n)}]},y={preventLoad:{key:`${u}-preventload`},debugMode:{key:`${u}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${u}-dev`}},[b,g]=m(y),h=()=>{let e=A();if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return void $(window.fsAttributes,e);let t={cms:{},push(...e){var t,o;for(let[n,r]of e)null==(o=null==(t=this[n])?void 0:t.loading)||o.then(r)},destroy(){var t,o;for(let n of e)null==(o=null==(t=window.fsAttributes[n])?void 0:t.destroy)||o.call(t)}};$(t,e),E(t),window.fsAttributes=t,window.FsAttributes=window.fsAttributes,(async()=>{let{fsAttributes:e,location:t}=window,{host:o,searchParams:n}=new URL(t.href);e.support||(e.support={});let{support:r}=e;if(!o.includes("webflow.io")||!n.has(w))return!1;if(r.import)return r.import;try{r.import=new Promise(((e,t)=>{let o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",o.onload=()=>e(!0),o.onerror=t,document.head.append(o)}))}catch(e){return!1}r.import})()},A=()=>{let e=b("src","finsweet",{operator:"contains"}),t=b("dev");return[...document.querySelectorAll(`script${e}, script${t}`)].reduce(((e,t)=>{var o;let n=t.getAttribute(y.dev.key)||(null==(o=t.src.match(/[\w-. ]+(?=(\.js)$)/))?void 0:o[0]);return n&&!e.includes(n)&&e.push(n),e}),[])},$=(e,t)=>{for(let o of t){if(e[o])continue;e[o]={};let t=e[o];t.loading=new Promise((e=>{t.resolve=o=>{e(o),delete t.resolve}}))}},E=e=>{let t=Array.isArray(window.fsAttributes)?window.fsAttributes:[];e.push(...t)},S=`fs-${d}`,x={element:{key:`${S}-element`,values:{whenVisible:"when-visible",enable:"enable",disable:"disable",toggle:"toggle",nav:"smart-nav",preserve:"preserve"}},matchMedia:{key:`${S}-media`},gap:{key:`${S}-gap`,values:{true:"true",false:"false"}}},[M,T]=m(x),P={medium:"(max-width: 991px)",small:"(max-width: 767px)",tiny:"(max-width: 479px)"};var k=!1;"undefined"!=typeof window&&(L={get passive(){k=!0}},window.addEventListener("testPassive",null,L),window.removeEventListener("testPassive",null,L));var L,O,j="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),q=[],I=!1,H=-1,W=void 0,R=void 0,B=void 0,F=function(e){return q.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},Y=function(e){var t=e||window.event;return!!(F(t.target)||t.touches.length>1)||(t.preventDefault&&t.preventDefault(),!1)},C=function(e,t){if(e){if(!q.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};q=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(q),[o]),j?window.requestAnimationFrame((function(){if(void 0===R){R={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===B){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);B=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===W&&(W=document.body.style.overflow,document.body.style.overflow="hidden")}(t),j&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(H=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-H;!F(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?Y(e):e.stopPropagation())}(t,e)},I||(document.addEventListener("touchmove",Y,k?{passive:!1}:void 0),I=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},D=function(){j&&(q.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),I&&(document.removeEventListener("touchmove",Y,k?{passive:!1}:void 0),I=!1),H=-1),j?function(){if(void 0!==R){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=R.position,document.body.style.top=R.top,document.body.style.left=R.left,window.scrollTo(t,e),R=void 0}}():(void 0!==B&&(document.body.style.paddingRight=B,B=void 0),void 0!==W&&(document.body.style.overflow=W,W=void 0)),q=[]},{body:V}=document,G=!0,K=!1,_=()=>K,z=e=>{O=window.scrollY,K=!0,C(e,{reserveScrollBarGap:G}),V.style.setProperty("top",-1*O+"px")},N=()=>{K=!1,D(),V.style.setProperty("top",""),O&&V.scrollTo(0,O)},U=e=>{if(p(e))return e;let t=e.querySelectorAll("*");for(let e of t)if(e instanceof HTMLElement&&p(e))return e},X=((e,t,a)=>(a=null!=e?o(l(e)):{},((e,t,o,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))!s.call(e,a)&&a!==o&&n(e,a,{get:()=>t[a],enumerable:!(l=r(t,a))||l.enumerable});return e})(!t&&e&&e.__esModule?a:n(a,"default",{value:e,enumerable:!0}),e)))(a(),1),{navMenu:J}={navMenu:"w-nav-menu"},Q=new Map,Z=(e,t)=>{let o=Q.get(e);if(!o)return;let{matchMedia:n,firstScrollableElement:r,visible:i}=o;if(n&&!window.matchMedia(n).matches)return;let l=v(e);if(l!==i){if(i)N();else if(l)for(let e of new Set([...t,r]))z(e);o.visible=l}};(({scriptAttributes:e,attributeKey:t,version:o,init:n})=>{var r;h(),(r=window.fsAttributes)[t]||(r[t]={});let{preventsLoad:i,attributes:l}=(e=>{let{currentScript:t}=document,o={};if(!t)return{attributes:o,preventsLoad:!1};let n={preventsLoad:"string"==typeof t.getAttribute(y.preventLoad.key),attributes:o};for(let o in e){let r=t.getAttribute(e[o]);n.attributes[o]=r}return n})(e),s=window.fsAttributes[t];s.version=o,s.init=n,i||(window.Webflow||(window.Webflow=[]),window.Webflow.push((()=>n(l))))})({init:async()=>{await(async(...e)=>{var t;let o=[];for(let n of e){let e=await(null==(t=window.fsAttributes[n])?void 0:t.loading);o.push(e)}return o})("cmsattribute");let e=document.querySelectorAll(M("element","preserve")),t=!0,o=document.querySelector(M("gap"));(null==o?void 0:o.getAttribute(x.gap.key))===x.gap.values.false&&(t=!1),(e=>{G=e})(t);let n=(e=>f(window,"click",(({target:t})=>{if(!(t instanceof Element))return;let o=t.closest(M("element","toggle")),n=o||t.closest(M("element","disable")),r=o||t.closest(M("element","enable")),i=n||r;if(!i)return;let l=i.getAttribute(x.matchMedia.key);if(!l||window.matchMedia(l).matches)if(_()&&r)N();else if(!_()&&n instanceof HTMLElement)for(let t of new Set([...e,U(n)||n]))z(t)})))(e),r=(e=>{let t=M("element","nav"),o=document.querySelectorAll(`${M("element","whenVisible")}, ${t}.${J}, ${t} .${J}`),n=(0,X.default)((t=>{let o=t[0].target;Z(o,e)}),25),r=new MutationObserver(n);for(let t of o){let o=t.getAttribute(x.matchMedia.key),n=t.closest(".w-nav");if(n){let e=n.dataset.collapse;e&&(o=P[e])}let i=U(t)||t;Q.set(t,{visible:v(t),firstScrollableElement:i,matchMedia:o}),Z(t,e),r.observe(t,{attributes:!0,attributeFilter:["style","class"]})}let i=(0,X.default)((()=>{for(let t of o)Z(t,e)}),250),l=f(window,"resize",i);return()=>{r.disconnect(),l()}})(e);return function(e,t,o){var n;let r=window.fsAttributes[e];return r.destroy=o||c,null==(n=r.resolve)||n.call(r,t),t}(d,void 0,(()=>{n(),r()}))},version:"1.6.0",attributeKey:d})})();