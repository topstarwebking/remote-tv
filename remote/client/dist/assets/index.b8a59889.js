(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Xg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=Symbol.for("react.element"),aE=Symbol.for("react.portal"),uE=Symbol.for("react.fragment"),cE=Symbol.for("react.strict_mode"),dE=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),hE=Symbol.for("react.context"),pE=Symbol.for("react.forward_ref"),mE=Symbol.for("react.suspense"),gE=Symbol.for("react.memo"),vE=Symbol.for("react.lazy"),Qh=Symbol.iterator;function _E(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,ev={};function yi(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Jg}yi.prototype.isReactComponent={};yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tv(){}tv.prototype=yi.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Jg}var Dd=bd.prototype=new tv;Dd.constructor=bd;Zg(Dd,yi.prototype);Dd.isPureReactComponent=!0;var Yh=Array.isArray,nv=Object.prototype.hasOwnProperty,Ld={current:null},rv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nv.call(e,r)&&!rv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Hs,type:t,key:s,ref:o,props:i,_owner:Ld.current}}function yE(t,e){return{$$typeof:Hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hs}function wE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wE(""+t.key):e.toString(36)}function Wo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Hs:case aE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eu(o,0):r,Yh(i)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),Wo(i,e,n,"",function(u){return u})):i!=null&&(Md(i)&&(i=yE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+eu(s,l);o+=Wo(s,e,n,a,i)}else if(a=_E(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+eu(s,l++),o+=Wo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var r=[],i=0;return Wo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},Ho={transition:null},SE={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Ld};z.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=yi;z.Fragment=uE;z.Profiler=dE;z.PureComponent=bd;z.StrictMode=cE;z.Suspense=mE;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ld.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)nv.call(e,a)&&!rv.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Hs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:hE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fE,_context:t},t.Consumer=t};z.createElement=iv;z.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:pE,render:t}};z.isValidElement=Md;z.lazy=function(t){return{$$typeof:vE,_payload:{_status:-1,_result:t},_init:EE}};z.memo=function(t,e){return{$$typeof:gE,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return ze.current.useCallback(t,e)};z.useContext=function(t){return ze.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};z.useEffect=function(t,e){return ze.current.useEffect(t,e)};z.useId=function(){return ze.current.useId()};z.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return ze.current.useMemo(t,e)};z.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};z.useRef=function(t){return ze.current.useRef(t)};z.useState=function(t){return ze.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return ze.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(k);const us=Xg(k.exports);var ac={},Fd={exports:{}},it={},sv={exports:{}},ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var M=P.length;P.push(L);e:for(;0<M;){var ae=M-1>>>1,pe=P[ae];if(0<i(pe,L))P[ae]=L,P[M]=pe,M=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],M=P.pop();if(M!==L){P[0]=M;e:for(var ae=0,pe=P.length,Eo=pe>>>1;ae<Eo;){var Bn=2*(ae+1)-1,Za=P[Bn],Wn=Bn+1,So=P[Wn];if(0>i(Za,M))Wn<pe&&0>i(So,Za)?(P[ae]=So,P[Wn]=M,ae=Wn):(P[ae]=Za,P[Bn]=M,ae=Bn);else if(Wn<pe&&0>i(So,M))P[ae]=So,P[Wn]=M,ae=Wn;else break e}}return L}function i(P,L){var M=P.sortIndex-L.sortIndex;return M!==0?M:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,f=null,d=3,p=!1,g=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function w(P){if(_=!1,v(P),!g)if(n(a)!==null)g=!0,jn(y);else{var L=n(u);L!==null&&Ja(w,L.startTime-P)}}function y(P,L){g=!1,_&&(_=!1,m(I),I=-1),p=!0;var M=d;try{for(v(L),f=n(a);f!==null&&(!(f.expirationTime>L)||P&&!V());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,d=f.priorityLevel;var pe=ae(f.expirationTime<=L);L=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(a)&&r(a),v(L)}else r(a);f=n(a)}if(f!==null)var Eo=!0;else{var Bn=n(u);Bn!==null&&Ja(w,Bn.startTime-L),Eo=!1}return Eo}finally{f=null,d=M,p=!1}}var x=!1,E=null,I=-1,D=5,O=-1;function V(){return!(t.unstable_now()-O<D)}function ee(){if(E!==null){var P=t.unstable_now();O=P;var L=!0;try{L=E(!0,P)}finally{L?Ne():(x=!1,E=null)}}else x=!1}var Ne;if(typeof h=="function")Ne=function(){h(ee)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,wo=Fe.port2;Fe.port1.onmessage=ee,Ne=function(){wo.postMessage(null)}}else Ne=function(){S(ee,0)};function jn(P){E=P,x||(x=!0,Ne())}function Ja(P,L){I=S(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,jn(y))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var M=d;d=L;try{return P()}finally{d=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=d;d=P;try{return L()}finally{d=M}},t.unstable_scheduleCallback=function(P,L,M){var ae=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ae+M:ae):M=ae,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=M+pe,P={id:c++,callback:L,priorityLevel:P,startTime:M,expirationTime:pe,sortIndex:-1},M>ae?(P.sortIndex=M,e(u,P),n(a)===null&&P===n(u)&&(_?(m(I),I=-1):_=!0,Ja(w,M-ae))):(P.sortIndex=pe,e(a,P),g||p||(g=!0,jn(y))),P},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(P){var L=d;return function(){var M=d;d=L;try{return P.apply(this,arguments)}finally{d=M}}}})(ov);(function(t){t.exports=ov})(sv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=k.exports,nt=sv.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var av=new Set,cs={};function wr(t,e){ii(t,e),ii(t+"Capture",e)}function ii(t,e){for(cs[t]=e,t=0;t<e.length;t++)av.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,CE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jh={},Zh={};function IE(t){return uc.call(Zh,t)?!0:uc.call(Jh,t)?!1:CE.test(t)?Zh[t]=!0:(Jh[t]=!0,!1)}function TE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kE(t,e,n,r){if(e===null||typeof e>"u"||TE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,$d);ke[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,$d);ke[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,$d);ke[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kE(e,n,i,r)&&(n=null),r||i===null?IE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jt=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),dv=Symbol.for("react.offscreen"),ep=Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,tu;function Bi(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function ru(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bi(t):""}function RE(t){switch(t.tag){case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Pr:return"Portal";case cc:return"Profiler";case jd:return"StrictMode";case dc:return"Suspense";case fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cv:return(t.displayName||"Context")+".Consumer";case uv:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wd:return e=t.displayName||null,e!==null?e:hc(t.type)||"Memo";case on:e=t._payload,t=t._init;try{return hc(t(e))}catch{}}return null}function NE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(e);case 8:return e===jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function On(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xE(t){var e=fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=xE(t))}function hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pc(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function tp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=On(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function mc(t,e){pv(t,e);var n=On(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&gc(t,e.type,On(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gc(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wi=Array.isArray;function Vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+On(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Wi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:On(n)}}function mv(t,e){var n=On(e.value),r=On(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PE=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(t){PE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qi[e]=Qi[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qi.hasOwnProperty(t)&&Qi[t]?(""+e).trim():e+"px"}function yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OE=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(t,e){if(e){if(OE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,qr=null,Gr=null;function sp(t){if(t=Gs(t)){if(typeof Sc!="function")throw Error(C(280));var e=t.stateNode;e&&(e=da(e),Sc(t.stateNode,t.type,e))}}function wv(t){qr?Gr?Gr.push(t):Gr=[t]:qr=t}function Ev(){if(qr){var t=qr,e=Gr;if(Gr=qr=null,sp(t),e)for(t=0;t<e.length;t++)sp(e[t])}}function Sv(t,e){return t(e)}function Cv(){}var iu=!1;function Iv(t,e,n){if(iu)return t(e,n);iu=!0;try{return Sv(t,e,n)}finally{iu=!1,(qr!==null||Gr!==null)&&(Cv(),Ev())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=da(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Cc=!1;if(qt)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{Cc=!1}function AE(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Yi=!1,al=null,ul=!1,Ic=null,bE={onError:function(t){Yi=!0,al=t}};function DE(t,e,n,r,i,s,o,l,a){Yi=!1,al=null,AE.apply(bE,arguments)}function LE(t,e,n,r,i,s,o,l,a){if(DE.apply(this,arguments),Yi){if(Yi){var u=al;Yi=!1,al=null}else throw Error(C(198));ul||(ul=!0,Ic=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(Er(t)!==t)throw Error(C(188))}function ME(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return op(i),t;if(s===r)return op(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function kv(t){return t=ME(t),t!==null?Rv(t):null}function Rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rv(t);if(e!==null)return e;t=t.sibling}return null}var Nv=nt.unstable_scheduleCallback,lp=nt.unstable_cancelCallback,FE=nt.unstable_shouldYield,UE=nt.unstable_requestPaint,ue=nt.unstable_now,$E=nt.unstable_getCurrentPriorityLevel,Vd=nt.unstable_ImmediatePriority,xv=nt.unstable_UserBlockingPriority,cl=nt.unstable_NormalPriority,zE=nt.unstable_LowPriority,Pv=nt.unstable_IdlePriority,la=null,At=null;function jE(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(la,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:HE,BE=Math.log,WE=Math.LN2;function HE(t){return t>>>=0,t===0?32:31-(BE(t)/WE|0)|0}var Ro=64,No=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hi(l):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function VE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=VE(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Tc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Ro;return Ro<<=1,(Ro&4194240)===0&&(Ro=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function GE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Av(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var bv,Gd,Dv,Lv,Mv,kc=!1,xo=[],_n=null,yn=null,wn=null,hs=new Map,ps=new Map,un=[],KE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(e.pointerId)}}function Ai(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Gs(e),e!==null&&Gd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QE(t,e,n,r,i){switch(e){case"focusin":return _n=Ai(_n,t,e,n,r,i),!0;case"dragenter":return yn=Ai(yn,t,e,n,r,i),!0;case"mouseover":return wn=Ai(wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return hs.set(s,Ai(hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ps.set(s,Ai(ps.get(s)||null,t,e,n,r,i)),!0}return!1}function Fv(t){var e=Qn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=Tv(n),e!==null){t.blockedOn=e,Mv(t.priority,function(){Dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ec=r,n.target.dispatchEvent(r),Ec=null}else return e=Gs(n),e!==null&&Gd(e),t.blockedOn=n,!1;e.shift()}return!0}function up(t,e,n){Vo(t)&&n.delete(e)}function YE(){kc=!1,_n!==null&&Vo(_n)&&(_n=null),yn!==null&&Vo(yn)&&(yn=null),wn!==null&&Vo(wn)&&(wn=null),hs.forEach(up),ps.forEach(up)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,YE)))}function ms(t){function e(i){return bi(i,t)}if(0<xo.length){bi(xo[0],t);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&bi(_n,t),yn!==null&&bi(yn,t),wn!==null&&bi(wn,t),hs.forEach(e),ps.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Fv(n),n.blockedOn===null&&un.shift()}var Kr=Jt.ReactCurrentBatchConfig,fl=!0;function XE(t,e,n,r){var i=W,s=Kr.transition;Kr.transition=null;try{W=1,Kd(t,e,n,r)}finally{W=i,Kr.transition=s}}function JE(t,e,n,r){var i=W,s=Kr.transition;Kr.transition=null;try{W=4,Kd(t,e,n,r)}finally{W=i,Kr.transition=s}}function Kd(t,e,n,r){if(fl){var i=Rc(t,e,n,r);if(i===null)mu(t,e,r,hl,n),ap(t,r);else if(QE(i,t,e,n,r))r.stopPropagation();else if(ap(t,r),e&4&&-1<KE.indexOf(t)){for(;i!==null;){var s=Gs(i);if(s!==null&&bv(s),s=Rc(t,e,n,r),s===null&&mu(t,e,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mu(t,e,r,null,n)}}var hl=null;function Rc(t,e,n,r){if(hl=null,t=Hd(r),t=Qn(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function Uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($E()){case Vd:return 1;case xv:return 4;case cl:case zE:return 16;case Pv:return 536870912;default:return 16}default:return 16}}var gn=null,Qd=null,qo=null;function $v(){if(qo)return qo;var t,e=Qd,n=e.length,r,i="value"in gn?gn.value:gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qo=i.slice(t,1<r?1-r:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function cp(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:cp,this.isPropagationStopped=cp,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=st(wi),qs=se({},wi,{view:0,detail:0}),ZE=st(qs),ou,lu,Di,aa=se({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(ou=t.screenX-Di.screenX,lu=t.screenY-Di.screenY):lu=ou=0,Di=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),dp=st(aa),eS=se({},aa,{dataTransfer:0}),tS=st(eS),nS=se({},qs,{relatedTarget:0}),au=st(nS),rS=se({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=st(rS),sS=se({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=st(sS),lS=se({},wi,{data:0}),fp=st(lS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cS[t])?!!e[t]:!1}function Xd(){return dS}var fS=se({},qs,{key:function(t){if(t.key){var e=aS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=st(fS),pS=se({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=st(pS),mS=se({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),gS=st(mS),vS=se({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=st(vS),yS=se({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=st(yS),ES=[9,13,27,32],Jd=qt&&"CompositionEvent"in window,Xi=null;qt&&"documentMode"in document&&(Xi=document.documentMode);var SS=qt&&"TextEvent"in window&&!Xi,zv=qt&&(!Jd||Xi&&8<Xi&&11>=Xi),pp=String.fromCharCode(32),mp=!1;function jv(t,e){switch(t){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function CS(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(mp=!0,pp);case"textInput":return t=e.data,t===pp&&mp?null:t;default:return null}}function IS(t,e){if(Ar)return t==="compositionend"||!Jd&&jv(t,e)?(t=$v(),qo=Qd=gn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zv&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function Wv(t,e,n,r){wv(r),e=pl(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ji=null,gs=null;function kS(t){e_(t,0)}function ua(t){var e=Lr(t);if(hv(e))return t}function RS(t,e){if(t==="change")return e}var Hv=!1;if(qt){var uu;if(qt){var cu="oninput"in document;if(!cu){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),cu=typeof vp.oninput=="function"}uu=cu}else uu=!1;Hv=uu&&(!document.documentMode||9<document.documentMode)}function _p(){Ji&&(Ji.detachEvent("onpropertychange",Vv),gs=Ji=null)}function Vv(t){if(t.propertyName==="value"&&ua(gs)){var e=[];Wv(e,gs,t,Hd(t)),Iv(kS,e)}}function NS(t,e,n){t==="focusin"?(_p(),Ji=e,gs=n,Ji.attachEvent("onpropertychange",Vv)):t==="focusout"&&_p()}function xS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ua(gs)}function PS(t,e){if(t==="click")return ua(e)}function OS(t,e){if(t==="input"||t==="change")return ua(e)}function AS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:AS;function vs(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uc.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var n=yp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bS(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(r!==null&&Zd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wp(n,s);var o=wp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DS=qt&&"documentMode"in document&&11>=document.documentMode,br=null,Nc=null,Zi=null,xc=!1;function Ep(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||br==null||br!==ll(r)||(r=br,"selectionStart"in r&&Zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&vs(Zi,r)||(Zi=r,r=pl(Nc,"onSelect"),0<r.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=br)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},du={},Kv={};qt&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function ca(t){if(du[t])return du[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kv)return du[t]=e[n];return t}var Qv=ca("animationend"),Yv=ca("animationiteration"),Xv=ca("animationstart"),Jv=ca("transitionend"),Zv=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){Zv.set(t,e),wr(e,[t])}for(var fu=0;fu<Sp.length;fu++){var hu=Sp[fu],LS=hu.toLowerCase(),MS=hu[0].toUpperCase()+hu.slice(1);Fn(LS,"on"+MS)}Fn(Qv,"onAnimationEnd");Fn(Yv,"onAnimationIteration");Fn(Xv,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Jv,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function Cp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LE(r,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Cp(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Cp(i,l,u),s=a}}}if(ul)throw t=Ic,ul=!1,Ic=null,t}function X(t,e){var n=e[Dc];n===void 0&&(n=e[Dc]=new Set);var r=t+"__bubble";n.has(r)||(t_(e,t,2,!1),n.add(r))}function pu(t,e,n){var r=0;e&&(r|=4),t_(n,t,r,e)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[Ao]){t[Ao]=!0,av.forEach(function(n){n!=="selectionchange"&&(FS.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ao]||(e[Ao]=!0,pu("selectionchange",!1,e))}}function t_(t,e,n,r){switch(Uv(e)){case 1:var i=XE;break;case 4:i=JE;break;default:i=Kd}n=i.bind(null,e,n,t),i=void 0,!Cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Iv(function(){var u=s,c=Hd(n),f=[];e:{var d=Zv.get(t);if(d!==void 0){var p=Yd,g=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":p=hS;break;case"focusin":g="focus",p=au;break;case"focusout":g="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gS;break;case Qv:case Yv:case Xv:p=iS;break;case Jv:p=_S;break;case"scroll":p=ZE;break;case"wheel":p=wS;break;case"copy":case"cut":case"paste":p=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hp}var _=(e&4)!==0,S=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var h=u,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=fs(h,m),w!=null&&_.push(ys(h,w,v)))),S)break;h=h.return}0<_.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:_}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ec&&(g=n.relatedTarget||n.fromElement)&&(Qn(g)||g[Gt]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Qn(g):null,g!==null&&(S=Er(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=dp,w="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=hp,w="onPointerLeave",m="onPointerEnter",h="pointer"),S=p==null?d:Lr(p),v=g==null?d:Lr(g),d=new _(w,h+"leave",p,n,c),d.target=S,d.relatedTarget=v,w=null,Qn(c)===u&&(_=new _(m,h+"enter",g,n,c),_.target=v,_.relatedTarget=S,w=_),S=w,p&&g)t:{for(_=p,m=g,h=0,v=_;v;v=kr(v))h++;for(v=0,w=m;w;w=kr(w))v++;for(;0<h-v;)_=kr(_),h--;for(;0<v-h;)m=kr(m),v--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=kr(_),m=kr(m)}_=null}else _=null;p!==null&&Ip(f,d,p,_,!1),g!==null&&S!==null&&Ip(f,S,g,_,!0)}}e:{if(d=u?Lr(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var y=RS;else if(gp(d))if(Hv)y=OS;else{y=xS;var x=NS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(y=PS);if(y&&(y=y(t,u))){Wv(f,y,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&gc(d,"number",d.value)}switch(x=u?Lr(u):window,t){case"focusin":(gp(x)||x.contentEditable==="true")&&(br=x,Nc=u,Zi=null);break;case"focusout":Zi=Nc=br=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Ep(f,n,c);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Ep(f,n,c)}var E;if(Jd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ar?jv(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(zv&&n.locale!=="ko"&&(Ar||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ar&&(E=$v()):(gn=c,Qd="value"in gn?gn.value:gn.textContent,Ar=!0)),x=pl(u,I),0<x.length&&(I=new fp(I,t,null,n,c),f.push({event:I,listeners:x}),E?I.data=E:(E=Bv(n),E!==null&&(I.data=E)))),(E=SS?CS(t,n):IS(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(c=new fp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}e_(f,e)})}function ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fs(t,n),s!=null&&r.unshift(ys(t,s,i)),s=fs(t,e),s!=null&&r.push(ys(t,s,i))),t=t.return}return r}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=fs(n,s),a!=null&&o.unshift(ys(n,a,l))):i||(a=fs(n,s),a!=null&&o.push(ys(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var US=/\r\n?/g,$S=/\u0000|\uFFFD/g;function Tp(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace($S,"")}function bo(t,e,n){if(e=Tp(e),Tp(t)!==e&&n)throw Error(C(425))}function ml(){}var Pc=null,Oc=null;function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(BS)}:bc;function BS(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Ei,ws="__reactProps$"+Ei,Gt="__reactContainer$"+Ei,Dc="__reactEvents$"+Ei,WS="__reactListeners$"+Ei,HS="__reactHandles$"+Ei;function Qn(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rp(t);t!==null;){if(n=t[Ot])return n;t=Rp(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[Ot]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function da(t){return t[ws]||null}var Lc=[],Mr=-1;function Un(t){return{current:t}}function Z(t){0>Mr||(t.current=Lc[Mr],Lc[Mr]=null,Mr--)}function Y(t,e){Mr++,Lc[Mr]=t.current,t.current=e}var An={},Le=Un(An),qe=Un(!1),ir=An;function si(t,e){var n=t.type.contextTypes;if(!n)return An;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(t){return t=t.childContextTypes,t!=null}function gl(){Z(qe),Z(Le)}function Np(t,e,n){if(Le.current!==An)throw Error(C(168));Y(Le,e),Y(qe,n)}function n_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,NE(t)||"Unknown",i));return se({},n,r)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||An,ir=Le.current,Y(Le,t),Y(qe,qe.current),!0}function xp(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=n_(t,e,ir),r.__reactInternalMemoizedMergedChildContext=t,Z(qe),Z(Le),Y(Le,t)):Z(qe),Y(qe,n)}var Ut=null,fa=!1,vu=!1;function r_(t){Ut===null?Ut=[t]:Ut.push(t)}function VS(t){fa=!0,r_(t)}function $n(){if(!vu&&Ut!==null){vu=!0;var t=0,e=W;try{var n=Ut;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,fa=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),Nv(Vd,$n),i}finally{W=e,vu=!1}}return null}var Fr=[],Ur=0,_l=null,yl=0,lt=[],at=0,sr=null,$t=1,zt="";function Hn(t,e){Fr[Ur++]=yl,Fr[Ur++]=_l,_l=t,yl=e}function i_(t,e,n){lt[at++]=$t,lt[at++]=zt,lt[at++]=sr,sr=t;var r=$t;t=zt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$t=1<<32-St(e)+i|n<<i|r,zt=s+t}else $t=1<<s|n<<i|r,zt=t}function ef(t){t.return!==null&&(Hn(t,1),i_(t,1,0))}function tf(t){for(;t===_l;)_l=Fr[--Ur],Fr[Ur]=null,yl=Fr[--Ur],Fr[Ur]=null;for(;t===sr;)sr=lt[--at],lt[at]=null,zt=lt[--at],lt[at]=null,$t=lt[--at],lt[at]=null}var et=null,Ze=null,ne=!1,vt=null;function s_(t,e){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Ze=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=sr!==null?{id:$t,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Ze=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fc(t){if(ne){var e=Ze;if(e){var n=e;if(!Pp(t,e)){if(Mc(t))throw Error(C(418));e=En(n.nextSibling);var r=et;e&&Pp(t,e)?s_(r,n):(t.flags=t.flags&-4097|2,ne=!1,et=t)}}else{if(Mc(t))throw Error(C(418));t.flags=t.flags&-4097|2,ne=!1,et=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function Do(t){if(t!==et)return!1;if(!ne)return Op(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ac(t.type,t.memoizedProps)),e&&(e=Ze)){if(Mc(t))throw o_(),Error(C(418));for(;e;)s_(t,e),e=En(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ze=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=et?En(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=Ze;t;)t=En(t.nextSibling)}function oi(){Ze=et=null,ne=!1}function nf(t){vt===null?vt=[t]:vt.push(t)}var qS=Jt.ReactCurrentBatchConfig;function mt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wl=Un(null),El=null,$r=null,rf=null;function sf(){rf=$r=El=null}function of(t){var e=wl.current;Z(wl),t._currentValue=e}function Uc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){El=t,rf=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(We=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(rf!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(El===null)throw Error(C(308));$r=t,El.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var Yn=null;function lf(t){Yn===null?Yn=[t]:Yn.push(t)}function l_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(j&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,lf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function Ap(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,p=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,_=l;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=se({},f,d);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else p={eventTime:p,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,a=f):c=c.next=p,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);lr|=o,t.lanes=o,t.memoizedState=f}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var u_=new lv.Component().refs;function $c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ha={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$e(),i=In(t),s=Ht(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(Ct(e,t,i,r),Ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$e(),i=In(t),s=Ht(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(Ct(e,t,i,r),Ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$e(),r=In(t),i=Ht(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sn(t,i,r),e!==null&&(Ct(e,t,r,n),Ko(e,t,r))}};function Dp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vs(n,r)||!vs(i,s):!0}function c_(t,e,n){var r=!1,i=An,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ge(e)?ir:Le.current,r=e.contextTypes,s=(r=r!=null)?si(t,i):An),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ha,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ha.enqueueReplaceState(e,e.state,null)}function zc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=u_,af(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ge(e)?ir:Le.current,i.context=si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ha.enqueueReplaceState(i,i.state,null),Sl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===u_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mp(t){var e=t._init;return e(t._payload)}function d_(t){function e(m,h){if(t){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Tn(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,h,v,w){return h===null||h.tag!==6?(h=Iu(v,m.mode,w),h.return=m,h):(h=i(h,v),h.return=m,h)}function a(m,h,v,w){var y=v.type;return y===Or?c(m,h,v.props.children,w,v.key):h!==null&&(h.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===on&&Mp(y)===h.type)?(w=i(h,v.props),w.ref=Li(m,h,v),w.return=m,w):(w=el(v.type,v.key,v.props,null,m.mode,w),w.ref=Li(m,h,v),w.return=m,w)}function u(m,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Tu(v,m.mode,w),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function c(m,h,v,w,y){return h===null||h.tag!==7?(h=tr(v,m.mode,w,y),h.return=m,h):(h=i(h,v),h.return=m,h)}function f(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Iu(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Io:return v=el(h.type,h.key,h.props,null,m.mode,v),v.ref=Li(m,null,h),v.return=m,v;case Pr:return h=Tu(h,m.mode,v),h.return=m,h;case on:var w=h._init;return f(m,w(h._payload),v)}if(Wi(h)||Pi(h))return h=tr(h,m.mode,v,null),h.return=m,h;Lo(m,h)}return null}function d(m,h,v,w){var y=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return y!==null?null:l(m,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Io:return v.key===y?a(m,h,v,w):null;case Pr:return v.key===y?u(m,h,v,w):null;case on:return y=v._init,d(m,h,y(v._payload),w)}if(Wi(v)||Pi(v))return y!==null?null:c(m,h,v,w,null);Lo(m,v)}return null}function p(m,h,v,w,y){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,l(h,m,""+w,y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Io:return m=m.get(w.key===null?v:w.key)||null,a(h,m,w,y);case Pr:return m=m.get(w.key===null?v:w.key)||null,u(h,m,w,y);case on:var x=w._init;return p(m,h,v,x(w._payload),y)}if(Wi(w)||Pi(w))return m=m.get(v)||null,c(h,m,w,y,null);Lo(h,w)}return null}function g(m,h,v,w){for(var y=null,x=null,E=h,I=h=0,D=null;E!==null&&I<v.length;I++){E.index>I?(D=E,E=null):D=E.sibling;var O=d(m,E,v[I],w);if(O===null){E===null&&(E=D);break}t&&E&&O.alternate===null&&e(m,E),h=s(O,h,I),x===null?y=O:x.sibling=O,x=O,E=D}if(I===v.length)return n(m,E),ne&&Hn(m,I),y;if(E===null){for(;I<v.length;I++)E=f(m,v[I],w),E!==null&&(h=s(E,h,I),x===null?y=E:x.sibling=E,x=E);return ne&&Hn(m,I),y}for(E=r(m,E);I<v.length;I++)D=p(E,m,I,v[I],w),D!==null&&(t&&D.alternate!==null&&E.delete(D.key===null?I:D.key),h=s(D,h,I),x===null?y=D:x.sibling=D,x=D);return t&&E.forEach(function(V){return e(m,V)}),ne&&Hn(m,I),y}function _(m,h,v,w){var y=Pi(v);if(typeof y!="function")throw Error(C(150));if(v=y.call(v),v==null)throw Error(C(151));for(var x=y=null,E=h,I=h=0,D=null,O=v.next();E!==null&&!O.done;I++,O=v.next()){E.index>I?(D=E,E=null):D=E.sibling;var V=d(m,E,O.value,w);if(V===null){E===null&&(E=D);break}t&&E&&V.alternate===null&&e(m,E),h=s(V,h,I),x===null?y=V:x.sibling=V,x=V,E=D}if(O.done)return n(m,E),ne&&Hn(m,I),y;if(E===null){for(;!O.done;I++,O=v.next())O=f(m,O.value,w),O!==null&&(h=s(O,h,I),x===null?y=O:x.sibling=O,x=O);return ne&&Hn(m,I),y}for(E=r(m,E);!O.done;I++,O=v.next())O=p(E,m,I,O.value,w),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?I:O.key),h=s(O,h,I),x===null?y=O:x.sibling=O,x=O);return t&&E.forEach(function(ee){return e(m,ee)}),ne&&Hn(m,I),y}function S(m,h,v,w){if(typeof v=="object"&&v!==null&&v.type===Or&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Io:e:{for(var y=v.key,x=h;x!==null;){if(x.key===y){if(y=v.type,y===Or){if(x.tag===7){n(m,x.sibling),h=i(x,v.props.children),h.return=m,m=h;break e}}else if(x.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===on&&Mp(y)===x.type){n(m,x.sibling),h=i(x,v.props),h.ref=Li(m,x,v),h.return=m,m=h;break e}n(m,x);break}else e(m,x);x=x.sibling}v.type===Or?(h=tr(v.props.children,m.mode,w,v.key),h.return=m,m=h):(w=el(v.type,v.key,v.props,null,m.mode,w),w.ref=Li(m,h,v),w.return=m,m=w)}return o(m);case Pr:e:{for(x=v.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Tu(v,m.mode,w),h.return=m,m=h}return o(m);case on:return x=v._init,S(m,h,x(v._payload),w)}if(Wi(v))return g(m,h,v,w);if(Pi(v))return _(m,h,v,w);Lo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=Iu(v,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return S}var li=d_(!0),f_=d_(!1),Ks={},bt=Un(Ks),Es=Un(Ks),Ss=Un(Ks);function Xn(t){if(t===Ks)throw Error(C(174));return t}function uf(t,e){switch(Y(Ss,e),Y(Es,t),Y(bt,Ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_c(e,t)}Z(bt),Y(bt,e)}function ai(){Z(bt),Z(Es),Z(Ss)}function h_(t){Xn(Ss.current);var e=Xn(bt.current),n=_c(e,t.type);e!==n&&(Y(Es,t),Y(bt,n))}function cf(t){Es.current===t&&(Z(bt),Z(Es))}var re=Un(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function df(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Qo=Jt.ReactCurrentDispatcher,yu=Jt.ReactCurrentBatchConfig,or=0,ie=null,de=null,ve=null,Il=!1,es=!1,Cs=0,GS=0;function xe(){throw Error(C(321))}function ff(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function hf(t,e,n,r,i,s){if(or=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?XS:JS,t=n(r,i),es){s=0;do{if(es=!1,Cs=0,25<=s)throw Error(C(301));s+=1,ve=de=null,e.updateQueue=null,Qo.current=ZS,t=n(r,i)}while(es)}if(Qo.current=Tl,e=de!==null&&de.next!==null,or=0,ve=de=ie=null,Il=!1,e)throw Error(C(300));return t}function pf(){var t=Cs!==0;return Cs=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=t:ve=ve.next=t,ve}function ft(){if(de===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=ve===null?ie.memoizedState:ve.next;if(e!==null)ve=e,de=t;else{if(t===null)throw Error(C(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ve===null?ie.memoizedState=ve=t:ve=ve.next=t}return ve}function Is(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=ft(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((or&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,ie.lanes|=c,lr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Tt(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eu(t){var e=ft(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function p_(){}function m_(t,e){var n=ie,r=ft(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,mf(__.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Ts(9,v_.bind(null,n,r,i,e),void 0,null),Ee===null)throw Error(C(349));(or&30)!==0||g_(n,e,i)}return i}function g_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,r){e.value=n,e.getSnapshot=r,y_(e)&&w_(t)}function __(t,e,n){return n(function(){y_(e)&&w_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function w_(t){var e=Kt(t,1);e!==null&&Ct(e,t,1,-1)}function Fp(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=YS.bind(null,ie,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function E_(){return ft().memoizedState}function Yo(t,e,n,r){var i=Pt();ie.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function pa(t,e,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&ff(r,o.deps)){i.memoizedState=Ts(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Ts(1|e,n,s,r)}function Up(t,e){return Yo(8390656,8,t,e)}function mf(t,e){return pa(2048,8,t,e)}function S_(t,e){return pa(4,2,t,e)}function C_(t,e){return pa(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,n){return n=n!=null?n.concat([t]):null,pa(4,4,I_.bind(null,e,t),n)}function gf(){}function k_(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return(or&21)===0?(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n):(Tt(n,e)||(n=Ov(),ie.lanes|=n,lr|=n,t.baseState=!0),e)}function KS(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=yu.transition;yu.transition={};try{t(!1),e()}finally{W=n,yu.transition=r}}function x_(){return ft().memoizedState}function QS(t,e,n){var r=In(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))O_(e,n);else if(n=l_(t,e,n,r),n!==null){var i=$e();Ct(n,t,r,i),A_(n,e,r)}}function YS(t,e,n){var r=In(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))O_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Tt(l,o)){var a=e.interleaved;a===null?(i.next=i,lf(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=l_(t,e,i,r),n!==null&&(i=$e(),Ct(n,t,r,i),A_(n,e,r))}}function P_(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function O_(t,e){es=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A_(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var Tl={readContext:dt,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},XS={readContext:dt,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:Up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QS.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:Fp,useDebugValue:gf,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=Fp(!1),e=t[0];return t=KS.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Pt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ee===null)throw Error(C(349));(or&30)!==0||g_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Up(__.bind(null,r,s,t),[t]),r.flags|=2048,Ts(9,v_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pt(),e=Ee.identifierPrefix;if(ne){var n=zt,r=$t;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Cs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:dt,useCallback:k_,useContext:dt,useEffect:mf,useImperativeHandle:T_,useInsertionEffect:S_,useLayoutEffect:C_,useMemo:R_,useReducer:wu,useRef:E_,useState:function(){return wu(Is)},useDebugValue:gf,useDeferredValue:function(t){var e=ft();return N_(e,de.memoizedState,t)},useTransition:function(){var t=wu(Is)[0],e=ft().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:x_,unstable_isNewReconciler:!1},ZS={readContext:dt,useCallback:k_,useContext:dt,useEffect:mf,useImperativeHandle:T_,useInsertionEffect:S_,useLayoutEffect:C_,useMemo:R_,useReducer:Eu,useRef:E_,useState:function(){return Eu(Is)},useDebugValue:gf,useDeferredValue:function(t){var e=ft();return de===null?e.memoizedState=t:N_(e,de.memoizedState,t)},useTransition:function(){var t=Eu(Is)[0],e=ft().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:x_,unstable_isNewReconciler:!1};function ui(t,e){try{var n="",r=e;do n+=RE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eC=typeof WeakMap=="function"?WeakMap:Map;function b_(t,e,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rl||(Rl=!0,Xc=r),jc(t,e)},n}function D_(t,e,n){n=Ht(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(t,e),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $p(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pC.bind(null,t,e,n),e.then(t,t))}function zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ht(-1,1),e.tag=2,Sn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var tC=Jt.ReactCurrentOwner,We=!1;function Ue(t,e,n,r){e.child=t===null?f_(e,null,n,r):li(e,t.child,n,r)}function Bp(t,e,n,r,i){n=n.render;var s=e.ref;return Qr(e,i),r=hf(t,e,n,r,s,i),n=pf(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ne&&n&&ef(e),e.flags|=1,Ue(t,e,r,i),e.child)}function Wp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!If(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,r,i)):(t=el(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vs,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=Tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vs(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(We=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return Bc(t,e,n,r,i)}function M_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(jr,Je),Je|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(jr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(jr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(jr,Je),Je|=r;return Ue(t,e,i,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,r,i){var s=Ge(n)?ir:Le.current;return s=si(e,s),Qr(e,i),n=hf(t,e,n,r,s,i),r=pf(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ne&&r&&ef(e),e.flags|=1,Ue(t,e,n,i),e.child)}function Hp(t,e,n,r,i){if(Ge(n)){var s=!0;vl(e)}else s=!1;if(Qr(e,i),e.stateNode===null)Xo(t,e),c_(e,n,r),zc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ge(n)?ir:Le.current,u=si(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Lp(e,o,r,u),ln=!1;var d=e.memoizedState;o.state=d,Sl(e,r,o,i),a=e.memoizedState,l!==r||d!==a||qe.current||ln?(typeof c=="function"&&($c(e,n,c,r),a=e.memoizedState),(l=ln||Dp(e,n,l,r,d,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:mt(e.type,l),o.props=u,f=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=dt(a):(a=Ge(n)?ir:Le.current,a=si(e,a));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||d!==a)&&Lp(e,o,r,a),ln=!1,d=e.memoizedState,o.state=d,Sl(e,r,o,i);var g=e.memoizedState;l!==f||d!==g||qe.current||ln?(typeof p=="function"&&($c(e,n,p,r),g=e.memoizedState),(u=ln||Dp(e,n,u,r,d,g,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Wc(t,e,n,r,s,i)}function Wc(t,e,n,r,i,s){F_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xp(e,n,!1),Qt(t,e,s);r=e.stateNode,tC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,s),e.child=li(e,null,l,s)):Ue(t,e,l,s),e.memoizedState=r.state,i&&xp(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?Np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Np(t,e.context,!1),uf(t,e.containerInfo)}function Vp(t,e,n,r,i){return oi(),nf(i),e.flags|=256,Ue(t,e,n,r),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function $_(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(re,i&1),t===null)return Fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=va(o,r,0,null),t=tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vc(n),e.memoizedState=Hc,t):vf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tn(l,s):(s=tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hc,r}return s=t.child,t=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vf(t,e){return e=va({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mo(t,e,n,r){return r!==null&&nf(r),li(e,t.child,null,n),t=vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Su(Error(C(422))),Mo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=va({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&li(e,t.child,null,o),e.child.memoizedState=Vc(o),e.memoizedState=Hc,s);if((e.mode&1)===0)return Mo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Su(s,r,void 0),Mo(t,e,o,r)}if(l=(o&t.childLanes)!==0,We||l){if(r=Ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kt(t,i),Ct(r,t,i,-1))}return Cf(),r=Su(Error(C(421))),Mo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ze=En(i.nextSibling),et=e,ne=!0,vt=null,t!==null&&(lt[at++]=$t,lt[at++]=zt,lt[at++]=sr,$t=t.id,zt=t.overflow,sr=e),e=vf(e,r.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uc(t.return,e,n)}function Cu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function z_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(re,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),lr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rC(t,e,n){switch(e.tag){case 3:U_(e),oi();break;case 5:h_(e);break;case 1:Ge(e.type)&&vl(e);break;case 4:uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?$_(t,e,n):(Y(re,re.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return z_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,M_(t,e,n)}return Qt(t,e,n)}var j_,qc,B_,W_;j_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};B_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xn(bt.current);var s=null;switch(n){case"input":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=vc(t,i),r=vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ml)}yc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};W_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iC(t,e,n){var r=e.pendingProps;switch(tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ge(e.type)&&gl(),Pe(e),null;case 3:return r=e.stateNode,ai(),Z(qe),Z(Le),df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Do(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,vt!==null&&(ed(vt),vt=null))),qc(t,e),Pe(e),null;case 5:cf(e);var i=Xn(Ss.current);if(n=e.type,t!==null&&e.stateNode!=null)B_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Pe(e),null}if(t=Xn(bt.current),Do(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)X(Vi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":tp(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":rp(r,s),X("invalid",r)}yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&bo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bo(r.textContent,l,t),i=["children",""+l]):cs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":To(r),np(r,s,!0);break;case"textarea":To(r),ip(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ml)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[ws]=r,j_(t,e,!1,!1),e.stateNode=t;e:{switch(o=wc(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)X(Vi[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":tp(t,r),i=pc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),X("invalid",t);break;case"textarea":rp(t,r),i=vc(t,r),X("invalid",t);break;default:i=r}yc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?yv(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vv(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ds(t,a):typeof a=="number"&&ds(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&X("scroll",t):a!=null&&zd(t,s,a,o))}switch(n){case"input":To(t),np(t,r,!1);break;case"textarea":To(t),ip(t);break;case"option":r.value!=null&&t.setAttribute("value",""+On(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)W_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Xn(Ss.current),Xn(bt.current),Do(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:bo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Pe(e),null;case 13:if(Z(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Ze!==null&&(e.mode&1)!==0&&(e.flags&128)===0)o_(),oi(),e.flags|=98560,s=!1;else if(s=Do(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ot]=e}else oi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else vt!==null&&(ed(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(re.current&1)!==0?he===0&&(he=3):Cf())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return ai(),qc(t,e),t===null&&_s(e.stateNode.containerInfo),Pe(e),null;case 10:return of(e.type._context),Pe(e),null;case 17:return Ge(e.type)&&gl(),Pe(e),null;case 19:if(Z(re),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mi(s,!1);else{if(he!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,Mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>ci&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Pe(e),null}else 2*ue()-s.renderingStartTime>ci&&n!==1073741824&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return Sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Je&1073741824)!==0&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function sC(t,e){switch(tf(e),e.tag){case 1:return Ge(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),Z(qe),Z(Le),df(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return cf(e),null;case 13:if(Z(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(re),null;case 4:return ai(),null;case 10:return of(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Fo=!1,Ae=!1,oC=typeof WeakSet=="function"?WeakSet:Set,N=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Gc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var Gp=!1;function lC(t,e){if(Pc=fl,t=Gv(),Zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:t,selectionRange:n},fl=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,S=g.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:mt(e.type,_),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){oe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=Gp,Gp=!1,g}function ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gc(e,n,s)}i=i.next}while(i!==r)}}function ma(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[ws],delete e[Dc],delete e[WS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function Kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(r!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}var Ie=null,gt=!1;function nn(t,e,n){for(n=n.child;n!==null;)q_(t,e,n),n=n.sibling}function q_(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(la,n)}catch{}switch(n.tag){case 5:Ae||zr(n,e);case 6:var r=Ie,i=gt;Ie=null,nn(t,e,n),Ie=r,gt=i,Ie!==null&&(gt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(gt?(t=Ie,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),ms(t)):gu(Ie,n.stateNode));break;case 4:r=Ie,i=gt,Ie=n.stateNode.containerInfo,gt=!0,nn(t,e,n),Ie=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Gc(n,e,o),i=i.next}while(i!==r)}nn(t,e,n);break;case 1:if(!Ae&&(zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,e,l)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,nn(t,e,n),Ae=r):nn(t,e,n);break;default:nn(t,e,n)}}function Qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oC),e.forEach(function(r){var i=gC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,gt=!1;break e;case 3:Ie=l.stateNode.containerInfo,gt=!0;break e;case 4:Ie=l.stateNode.containerInfo,gt=!0;break e}l=l.return}if(Ie===null)throw Error(C(160));q_(s,o,i),Ie=null,gt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),xt(t),r&4){try{ts(3,t,t.return),ma(3,t)}catch(_){oe(t,t.return,_)}try{ts(5,t,t.return)}catch(_){oe(t,t.return,_)}}break;case 1:ht(e,t),xt(t),r&512&&n!==null&&zr(n,n.return);break;case 5:if(ht(e,t),xt(t),r&512&&n!==null&&zr(n,n.return),t.flags&32){var i=t.stateNode;try{ds(i,"")}catch(_){oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pv(i,s),wc(l,o);var u=wc(l,s);for(o=0;o<a.length;o+=2){var c=a[o],f=a[o+1];c==="style"?yv(i,f):c==="dangerouslySetInnerHTML"?vv(i,f):c==="children"?ds(i,f):zd(i,c,f,u)}switch(l){case"input":mc(i,s);break;case"textarea":mv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vr(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vr(i,!!s.multiple,s.defaultValue,!0):Vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ws]=s}catch(_){oe(t,t.return,_)}}break;case 6:if(ht(e,t),xt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){oe(t,t.return,_)}}break;case 3:if(ht(e,t),xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(e.containerInfo)}catch(_){oe(t,t.return,_)}break;case 4:ht(e,t),xt(t);break;case 13:ht(e,t),xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=ue())),r&4&&Qp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(u=Ae)||c,ht(e,t),Ae=u):ht(e,t),xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(N=t,c=t.child;c!==null;){for(f=N=c;N!==null;){switch(d=N,p=d.child,d.tag){case 0:case 11:case 14:case 15:ts(4,d,d.return);break;case 1:zr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){oe(r,n,_)}}break;case 5:zr(d,d.return);break;case 22:if(d.memoizedState!==null){Xp(f);continue}}p!==null?(p.return=d,N=p):Xp(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=_v("display",o))}catch(_){oe(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){oe(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ht(e,t),xt(t),r&4&&Qp(t);break;case 21:break;default:ht(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ds(i,""),r.flags&=-33);var s=Kp(t);Yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Kp(t);Qc(t,l,o);break;default:throw Error(C(161))}}catch(a){oe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aC(t,e,n){N=t,K_(t)}function K_(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ae;l=Fo;var u=Ae;if(Fo=o,(Ae=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?Jp(i):a!==null?(a.return=o,N=a):Jp(i);for(;s!==null;)N=s,K_(s),s=s.sibling;N=i,Fo=l,Ae=u}Yp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,N=s):Yp(t)}}function Yp(t){for(;N!==null;){var e=N;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ae||ma(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ms(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ae||e.flags&512&&Kc(e)}catch(d){oe(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Xp(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Jp(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ma(4,e)}catch(a){oe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){oe(e,i,a)}}var s=e.return;try{Kc(e)}catch(a){oe(e,s,a)}break;case 5:var o=e.return;try{Kc(e)}catch(a){oe(e,o,a)}}}catch(a){oe(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var uC=Math.ceil,kl=Jt.ReactCurrentDispatcher,_f=Jt.ReactCurrentOwner,ct=Jt.ReactCurrentBatchConfig,j=0,Ee=null,ce=null,Te=0,Je=0,jr=Un(0),he=0,ks=null,lr=0,ga=0,yf=0,ns=null,Be=null,wf=0,ci=1/0,Ft=null,Rl=!1,Xc=null,Cn=null,Uo=!1,vn=null,Nl=0,rs=0,Jc=null,Jo=-1,Zo=0;function $e(){return(j&6)!==0?ue():Jo!==-1?Jo:Jo=ue()}function In(t){return(t.mode&1)===0?1:(j&2)!==0&&Te!==0?Te&-Te:qS.transition!==null?(Zo===0&&(Zo=Ov()),Zo):(t=W,t!==0||(t=window.event,t=t===void 0?16:Uv(t.type)),t)}function Ct(t,e,n,r){if(50<rs)throw rs=0,Jc=null,Error(C(185));Vs(t,n,r),((j&2)===0||t!==Ee)&&(t===Ee&&((j&2)===0&&(ga|=n),he===4&&cn(t,Te)),Ke(t,r),n===1&&j===0&&(e.mode&1)===0&&(ci=ue()+500,fa&&$n()))}function Ke(t,e){var n=t.callbackNode;qE(t,e);var r=dl(t,t===Ee?Te:0);if(r===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?VS(Zp.bind(null,t)):r_(Zp.bind(null,t)),jS(function(){(j&6)===0&&$n()}),n=null;else{switch(Av(r)){case 1:n=Vd;break;case 4:n=xv;break;case 16:n=cl;break;case 536870912:n=Pv;break;default:n=cl}n=ny(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(Jo=-1,Zo=0,(j&6)!==0)throw Error(C(327));var n=t.callbackNode;if(Yr()&&t.callbackNode!==n)return null;var r=dl(t,t===Ee?Te:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=xl(t,r);else{e=r;var i=j;j|=2;var s=X_();(Ee!==t||Te!==e)&&(Ft=null,ci=ue()+500,er(t,e));do try{fC();break}catch(l){Y_(t,l)}while(1);sf(),kl.current=s,j=i,ce!==null?e=0:(Ee=null,Te=0,e=he)}if(e!==0){if(e===2&&(i=Tc(t),i!==0&&(r=i,e=Zc(t,i))),e===1)throw n=ks,er(t,0),cn(t,r),Ke(t,ue()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!cC(i)&&(e=xl(t,r),e===2&&(s=Tc(t),s!==0&&(r=s,e=Zc(t,s))),e===1))throw n=ks,er(t,0),cn(t,r),Ke(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Vn(t,Be,Ft);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=wf+500-ue(),10<e)){if(dl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$e(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bc(Vn.bind(null,t,Be,Ft),e);break}Vn(t,Be,Ft);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uC(r/1960))-r,10<r){t.timeoutHandle=bc(Vn.bind(null,t,Be,Ft),r);break}Vn(t,Be,Ft);break;case 5:Vn(t,Be,Ft);break;default:throw Error(C(329))}}}return Ke(t,ue()),t.callbackNode===n?Q_.bind(null,t):null}function Zc(t,e){var n=ns;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=xl(t,e),t!==2&&(e=Be,Be=n,e!==null&&ed(e)),t}function ed(t){Be===null?Be=t:Be.push.apply(Be,t)}function cC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~yf,e&=~ga,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Zp(t){if((j&6)!==0)throw Error(C(327));Yr();var e=dl(t,0);if((e&1)===0)return Ke(t,ue()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var r=Tc(t);r!==0&&(e=r,n=Zc(t,r))}if(n===1)throw n=ks,er(t,0),cn(t,e),Ke(t,ue()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,Be,Ft),Ke(t,ue()),null}function Ef(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(ci=ue()+500,fa&&$n())}}function ar(t){vn!==null&&vn.tag===0&&(j&6)===0&&Yr();var e=j;j|=1;var n=ct.transition,r=W;try{if(ct.transition=null,W=1,t)return t()}finally{W=r,ct.transition=n,j=e,(j&6)===0&&$n()}}function Sf(){Je=jr.current,Z(jr)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zS(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:ai(),Z(qe),Z(Le),df();break;case 5:cf(r);break;case 4:ai();break;case 13:Z(re);break;case 19:Z(re);break;case 10:of(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(Ee=t,ce=t=Tn(t.current,null),Te=Je=e,he=0,ks=null,yf=ga=lr=0,Be=ns=null,Yn!==null){for(e=0;e<Yn.length;e++)if(n=Yn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yn=null}return t}function Y_(t,e){do{var n=ce;try{if(sf(),Qo.current=Tl,Il){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if(or=0,ve=de=ie=null,es=!1,Cs=0,_f.current=null,n===null||n.return===null){he=1,ks=e,ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Te,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=zp(o);if(p!==null){p.flags&=-257,jp(p,o,l,s,e),p.mode&1&&$p(s,u,e),e=p,a=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(a),e.updateQueue=_}else g.add(a);break e}else{if((e&1)===0){$p(s,u,e),Cf();break e}a=Error(C(426))}}else if(ne&&l.mode&1){var S=zp(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),jp(S,o,l,s,e),nf(ui(a,l));break e}}s=a=ui(a,l),he!==4&&(he=2),ns===null?ns=[s]:ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=b_(s,a,e);Ap(s,m);break e;case 1:l=a;var h=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cn===null||!Cn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=D_(s,l,e);Ap(s,w);break e}}s=s.return}while(s!==null)}Z_(n)}catch(y){e=y,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function X_(){var t=kl.current;return kl.current=Tl,t===null?Tl:t}function Cf(){(he===0||he===3||he===2)&&(he=4),Ee===null||(lr&268435455)===0&&(ga&268435455)===0||cn(Ee,Te)}function xl(t,e){var n=j;j|=2;var r=X_();(Ee!==t||Te!==e)&&(Ft=null,er(t,e));do try{dC();break}catch(i){Y_(t,i)}while(1);if(sf(),j=n,kl.current=r,ce!==null)throw Error(C(261));return Ee=null,Te=0,he}function dC(){for(;ce!==null;)J_(ce)}function fC(){for(;ce!==null&&!FE();)J_(ce)}function J_(t){var e=ty(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Z_(t):ce=e,_f.current=null}function Z_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=iC(n,e,Je),n!==null){ce=n;return}}else{if(n=sC(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ce=null;return}}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);he===0&&(he=5)}function Vn(t,e,n){var r=W,i=ct.transition;try{ct.transition=null,W=1,hC(t,e,n,r)}finally{ct.transition=i,W=r}return null}function hC(t,e,n,r){do Yr();while(vn!==null);if((j&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GE(t,s),t===Ee&&(ce=Ee=null,Te=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Uo||(Uo=!0,ny(cl,function(){return Yr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ct.transition,ct.transition=null;var o=W;W=1;var l=j;j|=4,_f.current=null,lC(t,n),G_(n,t),bS(Oc),fl=!!Pc,Oc=Pc=null,t.current=n,aC(n),UE(),j=l,W=o,ct.transition=s}else t.current=n;if(Uo&&(Uo=!1,vn=t,Nl=i),s=t.pendingLanes,s===0&&(Cn=null),jE(n.stateNode),Ke(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rl)throw Rl=!1,t=Xc,Xc=null,t;return(Nl&1)!==0&&t.tag!==0&&Yr(),s=t.pendingLanes,(s&1)!==0?t===Jc?rs++:(rs=0,Jc=t):rs=0,$n(),null}function Yr(){if(vn!==null){var t=Av(Nl),e=ct.transition,n=W;try{if(ct.transition=null,W=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,Nl=0,(j&6)!==0)throw Error(C(331));var i=j;for(j|=4,N=t.current;N!==null;){var s=N,o=s.child;if((N.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:ts(8,c,s)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var d=c.sibling,p=c.return;if(H_(c),c===u){N=null;break}if(d!==null){d.return=p,N=d;break}N=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}N=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ts(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var h=t.current;for(N=h;N!==null;){o=N;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,N=v;else e:for(o=h;N!==null;){if(l=N,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ma(9,l)}}catch(y){oe(l,l.return,y)}if(l===o){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(j=i,$n(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(la,t)}catch{}r=!0}return r}finally{W=n,ct.transition=e}}return!1}function em(t,e,n){e=ui(n,e),e=b_(t,e,1),t=Sn(t,e,1),e=$e(),t!==null&&(Vs(t,1,e),Ke(t,e))}function oe(t,e,n){if(t.tag===3)em(t,t,n);else for(;e!==null;){if(e.tag===3){em(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){t=ui(n,t),t=D_(e,t,1),e=Sn(e,t,1),t=$e(),e!==null&&(Vs(e,1,t),Ke(e,t));break}}e=e.return}}function pC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$e(),t.pingedLanes|=t.suspendedLanes&n,Ee===t&&(Te&n)===n&&(he===4||he===3&&(Te&130023424)===Te&&500>ue()-wf?er(t,0):yf|=n),Ke(t,e)}function ey(t,e){e===0&&((t.mode&1)===0?e=1:(e=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=$e();t=Kt(t,e),t!==null&&(Vs(t,e,n),Ke(t,n))}function mC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ey(t,n)}function gC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),ey(t,n)}var ty;ty=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)We=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return We=!1,rC(t,e,n);We=(t.flags&131072)!==0}else We=!1,ne&&(e.flags&1048576)!==0&&i_(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xo(t,e),t=e.pendingProps;var i=si(e,Le.current);Qr(e,n),i=hf(null,e,r,t,i,n);var s=pf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(s=!0,vl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,af(e),i.updater=ha,e.stateNode=i,i._reactInternals=e,zc(e,r,t,n),e=Wc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&ef(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_C(r),t=mt(r,t),i){case 0:e=Bc(null,e,r,t,n);break e;case 1:e=Hp(null,e,r,t,n);break e;case 11:e=Bp(null,e,r,t,n);break e;case 14:e=Wp(null,e,r,mt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Bc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Hp(t,e,r,i,n);case 3:e:{if(U_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a_(t,e),Sl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ui(Error(C(423)),e),e=Vp(t,e,r,n,i);break e}else if(r!==i){i=ui(Error(C(424)),e),e=Vp(t,e,r,n,i);break e}else for(Ze=En(e.stateNode.containerInfo.firstChild),et=e,ne=!0,vt=null,n=f_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===i){e=Qt(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return h_(e),t===null&&Fc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ac(r,i)?o=null:s!==null&&Ac(r,s)&&(e.flags|=32),F_(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Fc(e),null;case 13:return $_(t,e,n);case 4:return uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Bp(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(wl,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!qe.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ht(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Uc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qr(e,n),i=dt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),Wp(t,e,r,i,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Xo(t,e),e.tag=1,Ge(r)?(t=!0,vl(e)):t=!1,Qr(e,n),c_(e,r,i),zc(e,r,i,n),Wc(null,e,r,!0,t,n);case 19:return z_(t,e,n);case 22:return M_(t,e,n)}throw Error(C(156,e.tag))};function ny(t,e){return Nv(t,e)}function vC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,e,n,r){return new vC(t,e,n,r)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _C(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===Wd)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")If(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return tr(n.children,i,s,e);case jd:o=8,i|=8;break;case cc:return t=ut(12,n,e,i|2),t.elementType=cc,t.lanes=s,t;case dc:return t=ut(13,n,e,i),t.elementType=dc,t.lanes=s,t;case fc:return t=ut(19,n,e,i),t.elementType=fc,t.lanes=s,t;case dv:return va(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uv:o=10;break e;case cv:o=9;break e;case Bd:o=11;break e;case Wd:o=14;break e;case on:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tr(t,e,n,r){return t=ut(7,t,r,e),t.lanes=n,t}function va(t,e,n,r){return t=ut(22,t,r,e),t.elementType=dv,t.lanes=n,t.stateNode={isHidden:!1},t}function Iu(t,e,n){return t=ut(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tf(t,e,n,r,i,s,o,l,a){return t=new yC(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),t}function wC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ry(t){if(!t)return An;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ge(n))return n_(t,n,e)}return e}function iy(t,e,n,r,i,s,o,l,a){return t=Tf(n,r,!0,t,i,s,o,l,a),t.context=ry(null),n=t.current,r=$e(),i=In(n),s=Ht(r,i),s.callback=e!=null?e:null,Sn(n,s,i),t.current.lanes=i,Vs(t,i,r),Ke(t,r),t}function _a(t,e,n,r){var i=e.current,s=$e(),o=In(i);return n=ry(n),e.context===null?e.context=n:e.pendingContext=n,e=Ht(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sn(i,e,o),t!==null&&(Ct(t,i,o,s),Ko(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){tm(t,e),(t=t.alternate)&&tm(t,e)}function EC(){return null}var sy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}ya.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));_a(t,e,null,null)};ya.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){_a(null,t,null,null)}),e[Gt]=null}};function ya(t){this._internalRoot=t}ya.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Fv(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nm(){}function SC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pl(o);s.call(u)}}var o=iy(e,r,t,0,null,!1,!1,"",nm);return t._reactRootContainer=o,t[Gt]=o.current,_s(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Pl(a);l.call(u)}}var a=Tf(t,0,!1,null,null,!1,!1,"",nm);return t._reactRootContainer=a,t[Gt]=a.current,_s(t.nodeType===8?t.parentNode:t),ar(function(){_a(e,a,n,r)}),a}function Ea(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Pl(o);l.call(a)}}_a(e,o,t,i)}else o=SC(n,e,t,i,r);return Pl(o)}bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(qd(e,n|1),Ke(e,ue()),(j&6)===0&&(ci=ue()+500,$n()))}break;case 13:ar(function(){var r=Kt(t,1);if(r!==null){var i=$e();Ct(r,t,1,i)}}),kf(t,1)}};Gd=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=$e();Ct(e,t,134217728,n)}kf(t,134217728)}};Dv=function(t){if(t.tag===13){var e=In(t),n=Kt(t,e);if(n!==null){var r=$e();Ct(n,t,e,r)}kf(t,e)}};Lv=function(){return W};Mv=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Sc=function(t,e,n){switch(e){case"input":if(mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=da(r);if(!i)throw Error(C(90));hv(r),mc(r,i)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&Vr(t,!!n.multiple,e,!1)}};Sv=Ef;Cv=ar;var CC={usingClientEntryPoint:!1,Events:[Gs,Lr,da,wv,Ev,Ef]},Fi={findFiberByHostInstance:Qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},IC={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kv(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||EC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{la=$o.inject(IC),At=$o}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CC;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(C(200));return wC(t,e,null,n)};it.createRoot=function(t,e){if(!Nf(t))throw Error(C(299));var n=!1,r="",i=sy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tf(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,_s(t.nodeType===8?t.parentNode:t),new Rf(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=kv(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return ar(t)};it.hydrate=function(t,e,n){if(!wa(e))throw Error(C(200));return Ea(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iy(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Gt]=e.current,_s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ya(e)};it.render=function(t,e,n){if(!wa(e))throw Error(C(200));return Ea(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!wa(t))throw Error(C(40));return t._reactRootContainer?(ar(function(){Ea(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};it.unstable_batchedUpdates=Ef;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wa(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Ea(t,e,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=it})(Fd);var rm=Fd.exports;ac.createRoot=rm.createRoot,ac.hydrateRoot=rm.hydrateRoot;function Ol(){return Ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ol.apply(this,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));var im=function(t){return t},sm="beforeunload",TC="popstate";function kC(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var E=r.location,I=E.pathname,D=E.search,O=E.hash,V=i.state||{};return[V.idx,im({pathname:I,search:D,hash:O,state:V.usr||null,key:V.key||"default"})]}var o=null;function l(){if(o)p.call(o),o=null;else{var E=Jn.Pop,I=s(),D=I[0],O=I[1];if(p.length){if(D!=null){var V=c-D;V&&(o={action:E,location:O,retry:function(){y(V*-1)}},y(V))}}else h(E)}}r.addEventListener(TC,l);var a=Jn.Pop,u=s(),c=u[0],f=u[1],d=lm(),p=lm();c==null&&(c=0,i.replaceState(Ol({},i.state,{idx:c}),""));function g(E){return typeof E=="string"?E:td(E)}function _(E,I){return I===void 0&&(I=null),im(Ol({pathname:f.pathname,hash:"",search:""},typeof E=="string"?Sr(E):E,{state:I,key:RC()}))}function S(E,I){return[{usr:E.state,key:E.key,idx:I},g(E)]}function m(E,I,D){return!p.length||(p.call({action:E,location:I,retry:D}),!1)}function h(E){a=E;var I=s();c=I[0],f=I[1],d.call({action:a,location:f})}function v(E,I){var D=Jn.Push,O=_(E,I);function V(){v(E,I)}if(m(D,O,V)){var ee=S(O,c+1),Ne=ee[0],Fe=ee[1];try{i.pushState(Ne,"",Fe)}catch{r.location.assign(Fe)}h(D)}}function w(E,I){var D=Jn.Replace,O=_(E,I);function V(){w(E,I)}if(m(D,O,V)){var ee=S(O,c),Ne=ee[0],Fe=ee[1];i.replaceState(Ne,"",Fe),h(D)}}function y(E){i.go(E)}var x={get action(){return a},get location(){return f},createHref:g,push:v,replace:w,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(I){return d.push(I)},block:function(I){var D=p.push(I);return p.length===1&&r.addEventListener(sm,om),function(){D(),p.length||r.removeEventListener(sm,om)}}};return x}function om(t){t.preventDefault(),t.returnValue=""}function lm(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function RC(){return Math.random().toString(36).substr(2,8)}function td(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Sr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xf=k.exports.createContext(null),Pf=k.exports.createContext(null),Qs=k.exports.createContext({outlet:null,matches:[]});function kt(t,e){if(!t)throw new Error(e)}function NC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Sr(e):e,i=ay(r.pathname||"/",n);if(i==null)return null;let s=oy(t);xC(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=UC(s[l],i);return o}function oy(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||kt(!1),o.relativePath=o.relativePath.slice(r.length));let l=kn([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&kt(!1),oy(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:MC(l,i.index),routesMeta:a})}),e}function xC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PC=/^:\w+$/,OC=3,AC=2,bC=1,DC=10,LC=-2,am=t=>t==="*";function MC(t,e){let n=t.split("/"),r=n.length;return n.some(am)&&(r+=LC),e&&(r+=AC),n.filter(i=>!am(i)).reduce((i,s)=>i+(PC.test(s)?OC:s===""?bC:DC),r)}function FC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$C({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;s.push({params:r,pathname:kn([i,c.pathname]),pathnameBase:uy(kn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=kn([i,c.pathnameBase]))}return s}function $C(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=l[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=jC(l[f]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function jC(t,e){try{return decodeURIComponent(t)}catch{return t}}function BC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Sr(t):t;return{pathname:n?n.startsWith("/")?n:WC(n,e):e,search:VC(r),hash:qC(i)}}function WC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ly(t,e,n){let r=typeof t=="string"?Sr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let l=e.length-1;if(i.startsWith("..")){let a=i.split("/");for(;a[0]==="..";)a.shift(),l-=1;r.pathname=a.join("/")}s=l>=0?e[l]:"/"}let o=BC(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function HC(t){return t===""||t.pathname===""?"/":typeof t=="string"?Sr(t).pathname:t.pathname}function ay(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const kn=t=>t.join("/").replace(/\/\/+/g,"/"),uy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function GC(t){Si()||kt(!1);let{basename:e,navigator:n}=k.exports.useContext(xf),{hash:r,pathname:i,search:s}=Of(t),o=i;if(e!=="/"){let l=HC(t),a=l!=null&&l.endsWith("/");o=i==="/"?e+(a?"/":""):kn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Si(){return k.exports.useContext(Pf)!=null}function Ys(){return Si()||kt(!1),k.exports.useContext(Pf).location}function Xs(){Si()||kt(!1);let{basename:t,navigator:e}=k.exports.useContext(xf),{matches:n}=k.exports.useContext(Qs),{pathname:r}=Ys(),i=JSON.stringify(n.map(l=>l.pathnameBase)),s=k.exports.useRef(!1);return k.exports.useEffect(()=>{s.current=!0}),k.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=ly(l,JSON.parse(i),r);t!=="/"&&(u.pathname=kn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state)},[t,e,i,r])}const KC=k.exports.createContext(null);function QC(t){let e=k.exports.useContext(Qs).outlet;return e&&k.exports.createElement(KC.Provider,{value:t},e)}function Of(t){let{matches:e}=k.exports.useContext(Qs),{pathname:n}=Ys(),r=JSON.stringify(e.map(i=>i.pathnameBase));return k.exports.useMemo(()=>ly(t,JSON.parse(r),n),[t,r,n])}function YC(t,e){Si()||kt(!1);let{matches:n}=k.exports.useContext(Qs),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ys(),l;if(e){var a;let d=typeof e=="string"?Sr(e):e;s==="/"||((a=d.pathname)==null?void 0:a.startsWith(s))||kt(!1),l=d}else l=o;let u=l.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",f=NC(t,{pathname:c});return XC(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:kn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:kn([s,d.pathnameBase])})),n)}function XC(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>k.exports.createElement(Qs.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function JC(t){let{to:e,replace:n,state:r}=t;Si()||kt(!1);let i=Xs();return k.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function ZC(t){return QC(t.context)}function sn(t){kt(!1)}function e1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1}=t;Si()&&kt(!1);let l=uy(e),a=k.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Sr(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:p="default"}=r,g=k.exports.useMemo(()=>{let _=ay(u,l);return _==null?null:{pathname:_,search:c,hash:f,state:d,key:p}},[l,u,c,f,d,p]);return g==null?null:k.exports.createElement(xf.Provider,{value:a},k.exports.createElement(Pf.Provider,{children:n,value:{location:g,navigationType:i}}))}function t1(t){let{children:e,location:n}=t;return YC(nd(e),n)}function nd(t){let e=[];return k.exports.Children.forEach(t,n=>{if(!k.exports.isValidElement(n))return;if(n.type===k.exports.Fragment){e.push.apply(e,nd(n.props.children));return}n.type!==sn&&kt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=nd(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}function cy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const n1=["onClick","reloadDocument","replace","state","target","to"],r1=["aria-current","caseSensitive","className","end","style","to","children"];function i1(t){let{basename:e,children:n,window:r}=t,i=k.exports.useRef();i.current==null&&(i.current=kC({window:r}));let s=i.current,[o,l]=k.exports.useState({action:s.action,location:s.location});return k.exports.useLayoutEffect(()=>s.listen(l),[s]),k.exports.createElement(e1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function s1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const o1=k.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:l,to:a}=e,u=cy(e,n1),c=GC(a),f=l1(a,{replace:s,state:o,target:l});function d(p){r&&r(p),!p.defaultPrevented&&!i&&f(p)}return k.exports.createElement("a",Al({},u,{href:c,onClick:d,ref:n,target:l}))}),ku=k.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=e,c=cy(e,r1),f=Ys(),d=Of(a),p=f.pathname,g=d.pathname;i||(p=p.toLowerCase(),g=g.toLowerCase());let _=p===g||!o&&p.startsWith(g)&&p.charAt(g.length)==="/",S=_?r:void 0,m;typeof s=="function"?m=s({isActive:_}):m=[s,_?"active":null].filter(Boolean).join(" ");let h=typeof l=="function"?l({isActive:_}):l;return k.exports.createElement(o1,Al({},c,{"aria-current":S,className:m,ref:n,style:h,to:a}),typeof u=="function"?u({isActive:_}):u)});function l1(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Xs(),o=Ys(),l=Of(t);return k.exports.useCallback(a=>{if(a.button===0&&(!n||n==="_self")&&!s1(a)){a.preventDefault();let u=!!r||td(o)===td(l);s(t,{replace:u,state:i})}},[o,s,l,r,i,n,t])}var Af={exports:{}},a1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",u1=a1,c1=u1;function dy(){}function fy(){}fy.resetWarningCache=dy;var d1=function(){function t(r,i,s,o,l,a){if(a!==c1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:fy,resetWarningCache:dy};return n.PropTypes=n,n};Af.exports=d1();var bn=us.createContext(null);function f1(t){t()}var hy=f1,h1=function(e){return hy=e},p1=function(){return hy};function m1(){var t=p1(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var um={notify:function(){},get:function(){return[]}};function py(t,e){var n,r=um;function i(f){return a(),r.subscribe(f)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function l(){return Boolean(n)}function a(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=m1())}function u(){n&&(n(),n=void 0,r.clear(),r=um)}var c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:l,trySubscribe:a,tryUnsubscribe:u,getListeners:function(){return r}};return c}var rd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?k.exports.useLayoutEffect:k.exports.useEffect,bf={exports:{}},Sa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=k.exports,v1=Symbol.for("react.element"),_1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,w1=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E1={key:!0,ref:!0,__self:!0,__source:!0};function my(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)y1.call(e,r)&&!E1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:v1,type:t,key:s,ref:o,props:i,_owner:w1.current}}Sa.Fragment=_1;Sa.jsx=my;Sa.jsxs=my;(function(t){t.exports=Sa})(bf);const R=bf.exports.jsx,ye=bf.exports.jsxs;function S1(t){var e=t.store,n=t.context,r=t.children,i=k.exports.useMemo(function(){var l=py(e);return{store:e,subscription:l}},[e]),s=k.exports.useMemo(function(){return e.getState()},[e]);rd(function(){var l=i.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[i,s]);var o=n||bn;return R(o.Provider,{value:i,children:r})}var gy={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se=typeof Symbol=="function"&&Symbol.for,Df=Se?Symbol.for("react.element"):60103,Lf=Se?Symbol.for("react.portal"):60106,Ca=Se?Symbol.for("react.fragment"):60107,Ia=Se?Symbol.for("react.strict_mode"):60108,Ta=Se?Symbol.for("react.profiler"):60114,ka=Se?Symbol.for("react.provider"):60109,Ra=Se?Symbol.for("react.context"):60110,Mf=Se?Symbol.for("react.async_mode"):60111,Na=Se?Symbol.for("react.concurrent_mode"):60111,xa=Se?Symbol.for("react.forward_ref"):60112,Pa=Se?Symbol.for("react.suspense"):60113,C1=Se?Symbol.for("react.suspense_list"):60120,Oa=Se?Symbol.for("react.memo"):60115,Aa=Se?Symbol.for("react.lazy"):60116,I1=Se?Symbol.for("react.block"):60121,T1=Se?Symbol.for("react.fundamental"):60117,k1=Se?Symbol.for("react.responder"):60118,R1=Se?Symbol.for("react.scope"):60119;function ot(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Df:switch(t=t.type,t){case Mf:case Na:case Ca:case Ta:case Ia:case Pa:return t;default:switch(t=t&&t.$$typeof,t){case Ra:case xa:case Aa:case Oa:case ka:return t;default:return e}}case Lf:return e}}}function vy(t){return ot(t)===Na}H.AsyncMode=Mf;H.ConcurrentMode=Na;H.ContextConsumer=Ra;H.ContextProvider=ka;H.Element=Df;H.ForwardRef=xa;H.Fragment=Ca;H.Lazy=Aa;H.Memo=Oa;H.Portal=Lf;H.Profiler=Ta;H.StrictMode=Ia;H.Suspense=Pa;H.isAsyncMode=function(t){return vy(t)||ot(t)===Mf};H.isConcurrentMode=vy;H.isContextConsumer=function(t){return ot(t)===Ra};H.isContextProvider=function(t){return ot(t)===ka};H.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Df};H.isForwardRef=function(t){return ot(t)===xa};H.isFragment=function(t){return ot(t)===Ca};H.isLazy=function(t){return ot(t)===Aa};H.isMemo=function(t){return ot(t)===Oa};H.isPortal=function(t){return ot(t)===Lf};H.isProfiler=function(t){return ot(t)===Ta};H.isStrictMode=function(t){return ot(t)===Ia};H.isSuspense=function(t){return ot(t)===Pa};H.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ca||t===Na||t===Ta||t===Ia||t===Pa||t===C1||typeof t=="object"&&t!==null&&(t.$$typeof===Aa||t.$$typeof===Oa||t.$$typeof===ka||t.$$typeof===Ra||t.$$typeof===xa||t.$$typeof===T1||t.$$typeof===k1||t.$$typeof===R1||t.$$typeof===I1)};H.typeOf=ot;(function(t){t.exports=H})(gy);var _y=gy.exports,N1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},x1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yy={};yy[_y.ForwardRef]=N1;yy[_y.Memo]=x1;var P1={exports:{}},K={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=60103,Da=60106,Js=60107,Zs=60108,eo=60114,to=60109,no=60110,ro=60112,io=60113,Ff=60120,so=60115,oo=60116,wy=60121,Ey=60122,Sy=60117,Cy=60129,Iy=60131;if(typeof Symbol=="function"&&Symbol.for){var Ce=Symbol.for;ba=Ce("react.element"),Da=Ce("react.portal"),Js=Ce("react.fragment"),Zs=Ce("react.strict_mode"),eo=Ce("react.profiler"),to=Ce("react.provider"),no=Ce("react.context"),ro=Ce("react.forward_ref"),io=Ce("react.suspense"),Ff=Ce("react.suspense_list"),so=Ce("react.memo"),oo=Ce("react.lazy"),wy=Ce("react.block"),Ey=Ce("react.server.block"),Sy=Ce("react.fundamental"),Cy=Ce("react.debug_trace_mode"),Iy=Ce("react.legacy_hidden")}function Nt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ba:switch(t=t.type,t){case Js:case eo:case Zs:case io:case Ff:return t;default:switch(t=t&&t.$$typeof,t){case no:case ro:case oo:case so:case to:return t;default:return e}}case Da:return e}}}var O1=to,A1=ba,b1=ro,D1=Js,L1=oo,M1=so,F1=Da,U1=eo,$1=Zs,z1=io;K.ContextConsumer=no;K.ContextProvider=O1;K.Element=A1;K.ForwardRef=b1;K.Fragment=D1;K.Lazy=L1;K.Memo=M1;K.Portal=F1;K.Profiler=U1;K.StrictMode=$1;K.Suspense=z1;K.isAsyncMode=function(){return!1};K.isConcurrentMode=function(){return!1};K.isContextConsumer=function(t){return Nt(t)===no};K.isContextProvider=function(t){return Nt(t)===to};K.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba};K.isForwardRef=function(t){return Nt(t)===ro};K.isFragment=function(t){return Nt(t)===Js};K.isLazy=function(t){return Nt(t)===oo};K.isMemo=function(t){return Nt(t)===so};K.isPortal=function(t){return Nt(t)===Da};K.isProfiler=function(t){return Nt(t)===eo};K.isStrictMode=function(t){return Nt(t)===Zs};K.isSuspense=function(t){return Nt(t)===io};K.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Js||t===eo||t===Cy||t===Zs||t===io||t===Ff||t===Iy||typeof t=="object"&&t!==null&&(t.$$typeof===oo||t.$$typeof===so||t.$$typeof===to||t.$$typeof===no||t.$$typeof===ro||t.$$typeof===Sy||t.$$typeof===wy||t[0]===Ey)};K.typeOf=Nt;(function(t){t.exports=K})(P1);function Ty(){var t=k.exports.useContext(bn);return t}function ky(t){t===void 0&&(t=bn);var e=t===bn?Ty:function(){return k.exports.useContext(t)};return function(){var r=e(),i=r.store;return i}}var j1=ky();function B1(t){t===void 0&&(t=bn);var e=t===bn?j1:ky(t);return function(){var r=e();return r.dispatch}}var Uf=B1(),W1=function(e,n){return e===n};function H1(t,e,n,r){var i=k.exports.useReducer(function(g){return g+1},0),s=i[1],o=k.exports.useMemo(function(){return py(n,r)},[n,r]),l=k.exports.useRef(),a=k.exports.useRef(),u=k.exports.useRef(),c=k.exports.useRef(),f=n.getState(),d;try{if(t!==a.current||f!==u.current||l.current){var p=t(f);c.current===void 0||!e(p,c.current)?d=p:d=c.current}else d=c.current}catch(g){throw l.current&&(g.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),g}return rd(function(){a.current=t,u.current=f,c.current=d,l.current=void 0}),rd(function(){function g(){try{var _=n.getState();if(_===u.current)return;var S=a.current(_);if(e(S,c.current))return;c.current=S,u.current=_}catch(m){l.current=m}s()}return o.onStateChange=g,o.trySubscribe(),g(),function(){return o.tryUnsubscribe()}},[n,o]),d}function V1(t){t===void 0&&(t=bn);var e=t===bn?Ty:function(){return k.exports.useContext(t)};return function(r,i){i===void 0&&(i=W1);var s=e(),o=s.store,l=s.subscription,a=H1(r,i,o,l);return k.exports.useDebugValue(a),a}}var $f=V1();h1(Fd.exports.unstable_batchedUpdates);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Ci(e)},Ci=function(t){return new Error("Firebase Database ("+Ry.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,f=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(d=64)),r.push(n[c],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ny(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const p=l<<4&240|u>>2;if(r.push(p),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xy=function(t){const e=Ny(t);return zf.encodeByteArray(e,!0)},Py=function(t){return xy(t).replace(/\./g,"")},id=function(t){try{return zf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){return Oy(void 0,t)}function Oy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!K1(n)||(t[n]=Oy(t[n],e[n]));return t}function K1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Q1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y1(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function by(){return Ry.NODE_ADMIN===!0}function X1(){return typeof indexedDB=="object"}function J1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Z1,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function eI(t,e){return t.replace(tI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Rs(id(s[0])||""),n=Rs(id(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},nI=function(t){const e=Dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rI=function(t){const e=Dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cm(s)&&cm(o)){if(!Dl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):f<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+r[f]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function sI(t,e){const n=new oI(t,e);return n.subscribe.bind(n)}class oI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ru),i.error===void 0&&(i.error=Ru),i.complete===void 0&&(i.complete=Ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ru(){}function Ly(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},La=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dI(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(t){return t===qn?void 0:t}function dI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const hI={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},pI=q.INFO,mI={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},gI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wf{constructor(e){this.name=e,this._logLevel=pI,this._logHandler=gI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const vI=(t,e)=>e.some(n=>t instanceof n);let dm,fm;function _I(){return dm||(dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yI(){return fm||(fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const My=new WeakMap,od=new WeakMap,Fy=new WeakMap,Nu=new WeakMap,Hf=new WeakMap;function wI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&My.set(n,t)}).catch(()=>{}),Hf.set(e,t),e}function EI(t){if(od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});od.set(t,e)}let ld={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SI(t){ld=t(ld)}function CI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xu(this),e,...n);return Fy.set(r,e.sort?e.sort():[e]),Rn(r)}:yI().includes(t)?function(...e){return t.apply(xu(this),e),Rn(My.get(this))}:function(...e){return Rn(t.apply(xu(this),e))}}function II(t){return typeof t=="function"?CI(t):(t instanceof IDBTransaction&&EI(t),vI(t,_I())?new Proxy(t,ld):t)}function Rn(t){if(t instanceof IDBRequest)return wI(t);if(Nu.has(t))return Nu.get(t);const e=II(t);return e!==t&&(Nu.set(t,e),Hf.set(e,t)),e}const xu=t=>Hf.get(t);function TI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rn(o.result),a.oldVersion,a.newVersion,Rn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const kI=["get","getKey","getAll","getAllKeys","count"],RI=["put","add","delete","clear"],Pu=new Map;function hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Pu.set(e,s),s}SI(t=>({...t,get:(e,n,r)=>hm(e,n)||t.get(e,n,r),has:(e,n)=>!!hm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",pm="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Wf("@firebase/app"),PI="@firebase/app-compat",OI="@firebase/analytics-compat",AI="@firebase/analytics",bI="@firebase/app-check-compat",DI="@firebase/app-check",LI="@firebase/auth",MI="@firebase/auth-compat",FI="@firebase/database",UI="@firebase/database-compat",$I="@firebase/functions",zI="@firebase/functions-compat",jI="@firebase/installations",BI="@firebase/installations-compat",WI="@firebase/messaging",HI="@firebase/messaging-compat",VI="@firebase/performance",qI="@firebase/performance-compat",GI="@firebase/remote-config",KI="@firebase/remote-config-compat",QI="@firebase/storage",YI="@firebase/storage-compat",XI="@firebase/firestore",JI="@firebase/firestore-compat",ZI="firebase",eT="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="[DEFAULT]",tT={[ad]:"fire-core",[PI]:"fire-core-compat",[AI]:"fire-analytics",[OI]:"fire-analytics-compat",[DI]:"fire-app-check",[bI]:"fire-app-check-compat",[LI]:"fire-auth",[MI]:"fire-auth-compat",[FI]:"fire-rtdb",[UI]:"fire-rtdb-compat",[$I]:"fire-fn",[zI]:"fire-fn-compat",[jI]:"fire-iid",[BI]:"fire-iid-compat",[WI]:"fire-fcm",[HI]:"fire-fcm-compat",[VI]:"fire-perf",[qI]:"fire-perf-compat",[GI]:"fire-rc",[KI]:"fire-rc-compat",[QI]:"fire-gcs",[YI]:"fire-gcs-compat",[XI]:"fire-fst",[JI]:"fire-fst-compat","fire-js":"fire-js",[ZI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,ud=new Map;function nT(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(ud.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,t);for(const n of Ll.values())nT(n,t);return!0}function Vf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dr=new lo("app","Firebase",rT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=eT;function sT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Uy,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw dr.create("bad-app-name",{appName:String(r)});const i=Ll.get(r);if(i){if(Dl(t,i.options)&&Dl(n,i.config))return i;throw dr.create("duplicate-app",{appName:r})}const s=new fI(r);for(const l of ud.values())s.addComponent(l);const o=new iT(t,n,s);return Ll.set(r,o),o}function $y(t=Uy){const e=Ll.get(t);if(!e)throw dr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=tT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(l.join(" "));return}fi(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="firebase-heartbeat-database",lT=1,Ns="firebase-heartbeat-store";let Ou=null;function zy(){return Ou||(Ou=TI(oT,lT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Ou}async function aT(t){var e;try{return(await zy()).transaction(Ns).objectStore(Ns).get(jy(t))}catch(n){if(n instanceof zn)cr.warn(n.message);else{const r=dr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});cr.warn(r.message)}}}async function mm(t,e){var n;try{const i=(await zy()).transaction(Ns,"readwrite");return await i.objectStore(Ns).put(e,jy(t)),i.done}catch(r){if(r instanceof zn)cr.warn(r.message);else{const i=dr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});cr.warn(i.message)}}}function jy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=1024,cT=30*24*60*60*1e3;class dT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gm(),{heartbeatsToSend:n,unsentEntries:r}=fT(this._heartbeatsCache.heartbeats),i=Py(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gm(){return new Date().toISOString().substring(0,10)}function fT(t,e=uT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X1()?J1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vm(t){return Py(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){fi(new ur("platform-logger",e=>new NI(e),"PRIVATE")),fi(new ur("heartbeat",e=>new dT(e),"PRIVATE")),Nn(ad,pm,t),Nn(ad,pm,"esm2017"),Nn("fire-js","")}pT("");function qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function By(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mT=By,Wy=new lo("auth","Firebase",By());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Wf("@firebase/auth");function tl(t,...e){_m.logLevel<=q.ERROR&&_m.error(`Auth (${ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw Gf(t,...e)}function Dt(t,...e){return Gf(t,...e)}function gT(t,e,n){const r=Object.assign(Object.assign({},mT()),{[e]:n});return new lo("auth","Firebase",r).create(e,{appName:t.name})}function Gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wy.create(t,...e)}function b(t,e,...n){if(!t)throw Gf(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function Yt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new Map;function Bt(t){Yt(t instanceof Function,"Expected a class definition");let e=ym.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ym.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e){const n=Vf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dl(s,e!=null?e:{}))return i;Rt(i,"already-initialized")}return n.initialize({options:e})}function _T(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yT(){return wm()==="http:"||wm()==="https:"}function wm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yT()||Q1()||"connection"in navigator)?navigator.onLine:!0}function ET(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Bf()||Ay()}get(){return wT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new uo(3e4,6e4);function Ma(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function co(t,e,n,r,i={}){return Vy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Hy.fetch()(qy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Vy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ST),e);try{const i=new IT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw zo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gT(t,c,u);Rt(t,c)}}catch(i){if(i instanceof zn)throw i;Rt(t,"network-request-failed")}}async function Fa(t,e,n,r,i={}){const s=await co(t,e,n,r,i);return"mfaPendingCredential"in s&&Rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kf(t.config,i):`${t.config.apiScheme}://${i}`}class IT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),CT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e){return co(t,"POST","/v1/accounts:delete",e)}async function kT(t,e){return co(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RT(t,e=!1){const n=en(t),r=await n.getIdToken(e),i=Qf(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:is(Au(i.auth_time)),issuedAtTime:is(Au(i.iat)),expirationTime:is(Au(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Au(t){return Number(t)*1e3}function Qf(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const s=id(r);return s?JSON.parse(s):(tl("Failed to decode base64 JWT payload"),null)}catch(s){return tl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function NT(t){const e=Qf(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&xT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xs(t,kT(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bT(s.providerUserInfo):[],l=AT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Gy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function OT(t){const e=en(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bT(t){return t.map(e=>{var{providerId:n}=e,r=qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e){const n=await Vy(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ps;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RT(this,e)}reload(){return OT(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xs(this,TT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:y,providerData:x,stsTokenManager:E}=n;b(v&&E,e,"internal-error");const I=Ps.fromJSON(this.name,E);b(typeof v=="string",e,"internal-error"),rn(f,e.name),rn(d,e.name),b(typeof w=="boolean",e,"internal-error"),b(typeof y=="boolean",e,"internal-error"),rn(p,e.name),rn(g,e.name),rn(_,e.name),rn(S,e.name),rn(m,e.name),rn(h,e.name);const D=new nr({uid:v,auth:e,email:d,emailVerified:w,displayName:f,isAnonymous:y,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:I,createdAt:m,lastLoginAt:h});return x&&Array.isArray(x)&&(D.providerData=x.map(O=>Object.assign({},O))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ps;i.updateFromServerResponse(n);const s=new nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ml(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ky.type="NONE";const Em=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(Bt(Em),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bt(Em);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const f=nr._fromJSON(e,c);u!==s&&(l=f),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Xr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zy(e))return"Blackberry";if(e0(e))return"Webos";if(Yf(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qy(t=Me()){return/firefox\//i.test(t)}function Yf(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(t=Me()){return/crios\//i.test(t)}function Xy(t=Me()){return/iemobile/i.test(t)}function Jy(t=Me()){return/android/i.test(t)}function Zy(t=Me()){return/blackberry/i.test(t)}function e0(t=Me()){return/webos/i.test(t)}function Ua(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LT(t=Me()){var e;return Ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MT(){return Y1()&&document.documentMode===10}function t0(t=Me()){return Ua(t)||Jy(t)||e0(t)||Zy(t)||/windows phone/i.test(t)||Xy(t)}function FT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t,e=[]){let n;switch(t){case"Browser":n=Sm(Me());break;case"Worker":n=`${Sm(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ao}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cm(this),this.idTokenSubscription=new Cm(this),this.beforeStateQueue=new UT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ml(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ET()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?en(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Xf(t){return en(t)}class Cm{constructor(e){this.auth=e,this.observer=null,this.addObserver=sI(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function zT(t,e){return co(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",Ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Ma(t,e))}async function WT(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Jf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Os(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Os(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return jT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BT(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return WT(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",Ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="http://localhost";class fr extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:HT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qT(t){const e=qi(Gi(t)).link,n=e?qi(Gi(e)).deep_link_id:null,r=qi(Gi(t)).deep_link_id;return(r?qi(Gi(r)).link:null)||r||n||e||t}class Zf{constructor(e){var n,r,i,s,o,l;const a=qi(Gi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,f=VT((i=a.mode)!==null&&i!==void 0?i:null);b(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=qT(e);try{return new Zf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return Os._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zf.parseLink(n);return b(r,"argument-error"),Os._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends r0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends fo{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends fo{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends fo{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await nr._fromIdTokenResponse(e,r,i),o=Im(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Im(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Im(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fl(e,n,r,i)}}function i0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,s,e,r):s})}async function GT(t,e,n=!1){const r=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await xs(t,i0(i,s,e,t),n);b(o.idToken,i,"internal-error");const l=Qf(o.idToken);b(l,i,"internal-error");const{sub:a}=l;return b(t.uid===a,i,"user-mismatch"),hi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Rt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e,n=!1){const r="signIn",i=await i0(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QT(t,e){return s0(Xf(t),e)}function YT(t,e,n){return QT(en(t),Ti.credential(e,n))}function o0(t){return en(t).signOut()}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(){const t=Me();return Yf(t)||Ua(t)}const JT=1e3,ZT=10;class a0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XT()&&FT(),this.fallbackToPolling=t0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a0.type="LOCAL";const ek=a0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u0.type="SESSION";const c0=u0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await tk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=eh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function rk(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ok(){return d0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="firebaseLocalStorageDb",lk=1,$l="firebaseLocalStorage",h0="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function ak(){const t=indexedDB.deleteDatabase(f0);return new ho(t).toPromise()}function dd(){const t=indexedDB.open(f0,lk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:h0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await ak(),e(await dd()))})})}async function Tm(t,e,n){const r=za(t,!0).put({[h0]:e,value:n});return new ho(r).toPromise()}async function uk(t,e){const n=za(t,!1).get(e),r=await new ho(n).toPromise();return r===void 0?null:r.value}function km(t,e){const n=za(t,!0).delete(e);return new ho(n).toPromise()}const ck=800,dk=3;class p0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(ok()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ik(),!this.activeServiceWorker)return;this.sender=new nk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dd();return await Tm(e,Ul,"1"),await km(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>km(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=za(i,!1).getAll();return new ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p0.type="LOCAL";const fk=p0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hk().appendChild(r)})}function mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e){return e?Bt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vk(t){return s0(t.auth,new th(t),t.bypassAuthState)}function _k(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),KT(n,new th(t),t.bypassAuthState)}async function yk(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),GT(n,new th(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return _k;default:Rt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new uo(2e3,1e4);class Br extends m0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wk.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="pendingRedirect",rl=new Map;class Sk extends m0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await Ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(t,e){const n=kk(e),r=Tk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ik(t,e){rl.set(t._key(),e)}function Tk(t){return Bt(t._redirectPersistence)}function kk(t){return nl(Ek,t.config.apiKey,t.name)}async function Rk(t,e,n=!1){const r=Xf(t),i=gk(r,e),o=await new Sk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=10*60*1e3;class xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e={}){return co(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function Dk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ok(t);for(const n of e)try{if(Lk(n))return}catch{}Rt(t,"unauthorized-domain")}function Lk(t){const e=cd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bk.test(n))return!1;if(Ak.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new uo(3e4,6e4);function Nm(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fk(t){return new Promise((e,n)=>{var r,i,s;function o(){Nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nm(),n(Dt(t,"network-request-failed"))},timeout:Mk.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const l=mk("iframefcb");return Lt()[l]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},pk(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw il=null,e})}let il=null;function Uk(t){return il=il||Fk(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new uo(5e3,15e3),zk="__/auth/iframe",jk="emulator/auth/iframe",Bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,jk):`https://${t.config.authDomain}/${zk}`,r={apiKey:e.apiKey,appName:t.name,v:ao},i=Wk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}async function Vk(t){const e=await Uk(t),n=Lt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:Hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=Lt().setTimeout(()=>{s(o)},$k.get());function a(){Lt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gk=500,Kk=600,Qk="_blank",Yk="http://localhost";class xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(t,e,n,r=Gk,i=Kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},qk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();n&&(l=Yy(u)?Qk:n),Qy(u)&&(e=e||Yk,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(LT(u)&&l!=="_self")return Jk(e||"",l),new xm(null);const f=window.open(e||"",l,c);b(f,t,"popup-blocked");try{f.focus()}catch{}return new xm(f)}function Jk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="__/auth/handler",eR="emulator/auth/handler";function Pm(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ao,eventId:i};if(e instanceof r0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof fo){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${tR(t)}?${Ii(l).slice(1)}`}function tR({config:t}){return t.emulator?Kf(t,eR):`https://${t.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="webStorageSupport";class nR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c0,this._completeRedirectFn=Rk,this._overrideRedirectResult=Ik}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Pm(e,n,r,cd(),i);return Xk(e,o,eh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),rk(Pm(e,n,r,cd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vk(e),r=new xk(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bu];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Dk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return t0()||Yf()||Ua()}}const rR=nR;var Om="@firebase/auth",Am="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oR(t){fi(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n0(t)},c=new $T(l,a,u);return _T(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new ur("auth-internal",e=>{const n=Xf(e.getProvider("auth").getImmediate());return(r=>new iR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Om,Am,sR(t)),Nn(Om,Am,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t=$y()){const e=Vf(t,"auth");return e.isInitialized()?e.getImmediate():vT(t,{popupRedirectResolver:rR,persistence:[fk,ek,c0]})}oR("Browser");const zl=({className:t,...e})=>R("input",{className:`p-2 text-xl w-full my-2 border border-gray-400 rounded-sm ${t}`,...e}),hr=({className:t,children:e,variant:n,...r})=>{var i="";return n==="sm"?i+="px-2 py-1 text-md m-0":n==="md"?i+="px-3 py-1.5 text-lg m-0":i+="px-4 py-1.5 text-xl my-2",R("button",{className:`${t} ${i} border rounded-md `,...r,children:e})};hr.propTypes={variant:Af.exports.oneOf(["sm","md","default"])};function _t(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Dn(t){return!!t&&!!t[te]}function Xt(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===mR}(t)||Array.isArray(t)||!!t[$m]||!!t.constructor[$m]||rh(t)||ih(t))}function pr(t,e,n){n===void 0&&(n=!1),ki(t)===0?(n?Object.keys:ei)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function ki(t){var e=t[te];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:rh(t)?2:ih(t)?3:0}function Zr(t,e){return ki(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function lR(t,e){return ki(t)===2?t.get(e):t[e]}function v0(t,e,n){var r=ki(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function _0(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function rh(t){return hR&&t instanceof Map}function ih(t){return pR&&t instanceof Set}function Gn(t){return t.o||t.t}function sh(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=w0(t);delete e[te];for(var n=ei(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function oh(t,e){return e===void 0&&(e=!1),lh(t)||Dn(t)||!Xt(t)||(ki(t)>1&&(t.set=t.add=t.clear=t.delete=aR),Object.freeze(t),e&&pr(t,function(n,r){return oh(r,!0)},!0)),t}function aR(){_t(2)}function lh(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Mt(t){var e=md[t];return e||_t(18,t),e}function uR(t,e){md[t]||(md[t]=e)}function fd(){return As}function Du(t,e){e&&(Mt("Patches"),t.u=[],t.s=[],t.v=e)}function jl(t){hd(t),t.p.forEach(cR),t.p=null}function hd(t){t===As&&(As=t.l)}function bm(t){return As={p:[],l:As,h:t,m:!0,_:0}}function cR(t){var e=t[te];e.i===0||e.i===1?e.j():e.O=!0}function Lu(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||Mt("ES5").S(e,t,r),r?(n[te].P&&(jl(e),_t(4)),Xt(t)&&(t=Bl(e,t),e.l||Wl(e,t)),e.u&&Mt("Patches").M(n[te].t,t,e.u,e.s)):t=Bl(e,n,[]),jl(e),e.u&&e.v(e.u,e.s),t!==y0?t:void 0}function Bl(t,e,n){if(lh(e))return e;var r=e[te];if(!r)return pr(e,function(s,o){return Dm(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Wl(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=sh(r.k):r.o;pr(r.i===3?new Set(i):i,function(s,o){return Dm(t,r,i,s,o,n)}),Wl(t,i,!1),n&&t.u&&Mt("Patches").R(r,n,t.u,t.s)}return r.o}function Dm(t,e,n,r,i,s){if(Dn(i)){var o=Bl(t,i,s&&e&&e.i!==3&&!Zr(e.D,r)?s.concat(r):void 0);if(v0(n,r,o),!Dn(o))return;t.m=!1}if(Xt(i)&&!lh(i)){if(!t.h.F&&t._<1)return;Bl(t,i),e&&e.A.l||Wl(t,i)}}function Wl(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&oh(e,n)}function Mu(t,e){var n=t[te];return(n?Gn(n):t)[e]}function Lm(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function mn(t){t.P||(t.P=!0,t.l&&mn(t.l))}function Fu(t){t.o||(t.o=sh(t.t))}function pd(t,e,n){var r=rh(e)?Mt("MapSet").N(e,n):ih(e)?Mt("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),l={i:o?1:0,A:s?s.A:fd(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},a=l,u=bs;o&&(a=[l],u=Ki);var c=Proxy.revocable(a,u),f=c.revoke,d=c.proxy;return l.k=d,l.j=f,d}(e,n):Mt("ES5").J(e,n);return(n?n.A:fd()).p.push(r),r}function dR(t){return Dn(t)||_t(22,t),function e(n){if(!Xt(n))return n;var r,i=n[te],s=ki(n);if(i){if(!i.P&&(i.i<4||!Mt("ES5").K(i)))return i.t;i.I=!0,r=Mm(n,s),i.I=!1}else r=Mm(n,s);return pr(r,function(o,l){i&&lR(i.t,o)===l||v0(r,o,e(l))}),s===3?new Set(r):r}(t)}function Mm(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return sh(t)}function fR(){function t(s,o){var l=i[s];return l?l.enumerable=o:i[s]=l={configurable:!0,enumerable:o,get:function(){var a=this[te];return bs.get(a,s)},set:function(a){var u=this[te];bs.set(u,s,a)}},l}function e(s){for(var o=s.length-1;o>=0;o--){var l=s[o][te];if(!l.P)switch(l.i){case 5:r(l)&&mn(l);break;case 4:n(l)&&mn(l)}}}function n(s){for(var o=s.t,l=s.k,a=ei(l),u=a.length-1;u>=0;u--){var c=a[u];if(c!==te){var f=o[c];if(f===void 0&&!Zr(o,c))return!0;var d=l[c],p=d&&d[te];if(p?p.t!==f:!_0(d,f))return!0}}var g=!!o[te];return a.length!==ei(o).length+(g?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var l=Object.getOwnPropertyDescriptor(o,o.length-1);if(l&&!l.get)return!0;for(var a=0;a<o.length;a++)if(!o.hasOwnProperty(a))return!0;return!1}var i={};uR("ES5",{J:function(s,o){var l=Array.isArray(s),a=function(c,f){if(c){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var g=w0(f);delete g[te];for(var _=ei(g),S=0;S<_.length;S++){var m=_[S];g[m]=t(m,c||!!g[m].enumerable)}return Object.create(Object.getPrototypeOf(f),g)}(l,s),u={i:l?5:4,A:o?o.A:fd(),P:!1,I:!1,D:{},l:o,t:s,k:a,o:null,O:!1,C:!1};return Object.defineProperty(a,te,{value:u,writable:!0}),a},S:function(s,o,l){l?Dn(o)&&o[te].A===s&&e(s.p):(s.u&&function a(u){if(u&&typeof u=="object"){var c=u[te];if(c){var f=c.t,d=c.k,p=c.D,g=c.i;if(g===4)pr(d,function(v){v!==te&&(f[v]!==void 0||Zr(f,v)?p[v]||a(d[v]):(p[v]=!0,mn(c)))}),pr(f,function(v){d[v]!==void 0||Zr(d,v)||(p[v]=!1,mn(c))});else if(g===5){if(r(c)&&(mn(c),p.length=!0),d.length<f.length)for(var _=d.length;_<f.length;_++)p[_]=!1;else for(var S=f.length;S<d.length;S++)p[S]=!0;for(var m=Math.min(d.length,f.length),h=0;h<m;h++)d.hasOwnProperty(h)||(p[h]=!0),p[h]===void 0&&a(d[h])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var Fm,As,ah=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",hR=typeof Map<"u",pR=typeof Set<"u",Um=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",y0=ah?Symbol.for("immer-nothing"):((Fm={})["immer-nothing"]=!0,Fm),$m=ah?Symbol.for("immer-draftable"):"__$immer_draftable",te=ah?Symbol.for("immer-state"):"__$immer_state",mR=""+Object.prototype.constructor,ei=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,w0=Object.getOwnPropertyDescriptors||function(t){var e={};return ei(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},md={},bs={get:function(t,e){if(e===te)return t;var n=Gn(t);if(!Zr(n,e))return function(i,s,o){var l,a=Lm(s,o);return a?"value"in a?a.value:(l=a.get)===null||l===void 0?void 0:l.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Xt(r)?r:r===Mu(t.t,e)?(Fu(t),t.o[e]=pd(t.A.h,r,t)):r},has:function(t,e){return e in Gn(t)},ownKeys:function(t){return Reflect.ownKeys(Gn(t))},set:function(t,e,n){var r=Lm(Gn(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Mu(Gn(t),e),s=i==null?void 0:i[te];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(_0(n,i)&&(n!==void 0||Zr(t.t,e)))return!0;Fu(t),mn(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Mu(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,Fu(t),mn(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Gn(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){_t(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){_t(12)}},Ki={};pr(bs,function(t,e){Ki[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ki.deleteProperty=function(t,e){return Ki.set.call(this,t,e,void 0)},Ki.set=function(t,e,n){return bs.set.call(this,t[0],e,n,t[0])};var gR=function(){function t(n){var r=this;this.g=Um,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var l=s;s=i;var a=r;return function(_){var S=this;_===void 0&&(_=l);for(var m=arguments.length,h=Array(m>1?m-1:0),v=1;v<m;v++)h[v-1]=arguments[v];return a.produce(_,function(w){var y;return(y=s).call.apply(y,[S,w].concat(h))})}}var u;if(typeof s!="function"&&_t(6),o!==void 0&&typeof o!="function"&&_t(7),Xt(i)){var c=bm(r),f=pd(r,i,void 0),d=!0;try{u=s(f),d=!1}finally{d?jl(c):hd(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(_){return Du(c,o),Lu(_,c)},function(_){throw jl(c),_}):(Du(c,o),Lu(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===y0&&(u=void 0),r.F&&oh(u,!0),o){var p=[],g=[];Mt("Patches").M(i,u,p,g),o(p,g)}return u}_t(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(f))})};var o,l,a=r.produce(i,s,function(u,c){o=u,l=c});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,o,l]}):[a,o,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Xt(n)||_t(8),Dn(n)&&(n=dR(n));var r=bm(this),i=pd(this,n,void 0);return i[te].C=!0,hd(r),i},e.finishDraft=function(n,r){var i=n&&n[te],s=i.A;return Du(s,r),Lu(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!Um&&_t(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Mt("Patches").$;return Dn(n)?o(n,r):this.produce(n,function(l){return o(l,r)})},t}(),rt=new gR,E0=rt.produce;rt.produceWithPatches.bind(rt);rt.setAutoFreeze.bind(rt);rt.setUseProxies.bind(rt);rt.applyPatches.bind(rt);rt.createDraft.bind(rt);rt.finishDraft.bind(rt);function vR(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function jm(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zm(Object(n),!0).forEach(function(r){vR(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Oe(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Bm=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Uu=function(){return Math.random().toString(36).substring(7).split("").join(".")},Hl={INIT:"@@redux/INIT"+Uu(),REPLACE:"@@redux/REPLACE"+Uu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Uu()}};function _R(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function S0(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Oe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Oe(1));return n(S0)(t,e)}if(typeof t!="function")throw new Error(Oe(2));var i=t,s=e,o=[],l=o,a=!1;function u(){l===o&&(l=o.slice())}function c(){if(a)throw new Error(Oe(3));return s}function f(_){if(typeof _!="function")throw new Error(Oe(4));if(a)throw new Error(Oe(5));var S=!0;return u(),l.push(_),function(){if(!!S){if(a)throw new Error(Oe(6));S=!1,u();var h=l.indexOf(_);l.splice(h,1),o=null}}}function d(_){if(!_R(_))throw new Error(Oe(7));if(typeof _.type>"u")throw new Error(Oe(8));if(a)throw new Error(Oe(9));try{a=!0,s=i(s,_)}finally{a=!1}for(var S=o=l,m=0;m<S.length;m++){var h=S[m];h()}return _}function p(_){if(typeof _!="function")throw new Error(Oe(10));i=_,d({type:Hl.REPLACE})}function g(){var _,S=f;return _={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(Oe(11));function v(){h.next&&h.next(c())}v();var w=S(v);return{unsubscribe:w}}},_[Bm]=function(){return this},_}return d({type:Hl.INIT}),r={dispatch:d,subscribe:f,getState:c,replaceReducer:p},r[Bm]=g,r}function yR(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Hl.INIT});if(typeof r>"u")throw new Error(Oe(12));if(typeof n(void 0,{type:Hl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Oe(13))})}function wR(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{yR(n)}catch(l){o=l}return function(a,u){if(a===void 0&&(a={}),o)throw o;for(var c=!1,f={},d=0;d<s.length;d++){var p=s[d],g=n[p],_=a[p],S=g(_,u);if(typeof S>"u")throw u&&u.type,new Error(Oe(14));f[p]=S,c=c||S!==_}return c=c||s.length!==Object.keys(a).length,c?f:a}}function Vl(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function ER(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Oe(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},l=e.map(function(a){return a(o)});return s=Vl.apply(void 0,l)(i.dispatch),jm(jm({},i),{},{dispatch:s})}}}function C0(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(l){return typeof l=="function"?l(i,s,t):o(l)}}};return e}var I0=C0();I0.withExtraArgument=C0;const Wm=I0;var SR=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var ql=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},CR=Object.defineProperty,Hm=Object.getOwnPropertySymbols,IR=Object.prototype.hasOwnProperty,TR=Object.prototype.propertyIsEnumerable,Vm=function(t,e,n){return e in t?CR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Ds=function(t,e){for(var n in e||(e={}))IR.call(e,n)&&Vm(t,n,e[n]);if(Hm)for(var r=0,i=Hm(e);r<i.length;r++){var n=i[r];TR.call(e,n)&&Vm(t,n,e[n])}return t},kR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Vl:Vl.apply(null,arguments)};function RR(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var NR=function(t){SR(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ql([void 0],n[0].concat(this)))):new(e.bind.apply(e,ql([void 0],n.concat(this))))},e}(Array);function gd(t){return Xt(t)?E0(t,function(){}):t}function xR(t){return typeof t=="boolean"}function PR(){return function(e){return OR(e)}}function OR(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new NR;return n&&(xR(n)?r.push(Wm):r.push(Wm.withExtraArgument(n.extraArgument))),r}var AR=!0;function bR(t){var e=PR(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,l=n.devTools,a=l===void 0?!0:l,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,d=f===void 0?void 0:f,p;if(typeof i=="function")p=i;else if(RR(i))p=wR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=o;typeof g=="function"&&(g=g(e));var _=ER.apply(void 0,g),S=Vl;a&&(S=kR(Ds({trace:!AR},typeof a=="object"&&a)));var m=[_];Array.isArray(d)?m=ql([_],d):typeof d=="function"&&(m=d(m));var h=S.apply(void 0,m);return S0(p,c,h)}function Ls(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Ds(Ds({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function T0(t){var e={},n=[],r,i={addCase:function(s,o){var l=typeof s=="string"?s:s.type;if(l in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[l]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function DR(t){return typeof t=="function"}function LR(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?T0(e):[e,n,r],s=i[0],o=i[1],l=i[2],a;if(DR(t))a=function(){return gd(t())};else{var u=gd(t);a=function(){return u}}function c(f,d){f===void 0&&(f=a());var p=ql([s[d.type]],o.filter(function(g){var _=g.matcher;return _(d)}).map(function(g){var _=g.reducer;return _}));return p.filter(function(g){return!!g}).length===0&&(p=[l]),p.reduce(function(g,_){if(_)if(Dn(g)){var S=g,m=_(S,d);return m===void 0?g:m}else{if(Xt(g))return E0(g,function(h){return _(h,d)});var m=_(g,d);if(m===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return g},f)}return c.getInitialState=a,c}function MR(t,e){return t+"/"+e}function FR(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:gd(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},l={};i.forEach(function(c){var f=r[c],d=MR(e,c),p,g;"reducer"in f?(p=f.reducer,g=f.prepare):p=f,s[c]=p,o[d]=p,l[c]=g?Ls(d,g):Ls(d)});function a(){var c=typeof t.extraReducers=="function"?T0(t.extraReducers):[t.extraReducers],f=c[0],d=f===void 0?{}:f,p=c[1],g=p===void 0?[]:p,_=c[2],S=_===void 0?void 0:_,m=Ds(Ds({},d),o);return LR(n,m,g,S)}var u;return{name:e,reducer:function(c,f){return u||(u=a()),u(c,f)},actions:l,caseReducers:s,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var uh="listenerMiddleware";Ls(uh+"/add");Ls(uh+"/removeAll");Ls(uh+"/remove");fR();const UR={isAuthenticated:!1,authToken:null},k0=FR({name:"authentication",initialState:UR,reducers:{login(t,e){t.authToken=e.payload,t.isAuthenticated=!0},logout(t){t.isAuthenticated=!1;const e=nh();o0(e)}}}),vd=k0.actions,$R=k0.reducer,ch=({size:t})=>{t||(t="Default");var e;return t==="sm"&&(e+="w-6 h-6 px-3"),t==="lg"&&(e+="w-10 h-10"),t==="default"&&(e+="w-8 h-8"),R("div",{children:ye("svg",{"aria-hidden":"true",className:`mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ${e}`,viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[R("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),R("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})};ch.propTypes={size:Af.exports.oneOf(["sm","lg","default"])};const zR=()=>{let t=Xs();const e=Uf(),[n,r]=k.exports.useState(""),[i,s]=k.exports.useState(""),[o,l]=k.exports.useState(""),[a,u]=k.exports.useState(!1);return $f(d=>d.auth.isAuthenticated)&&t("/"),R("div",{className:"flex items-center justify-center  max-w-screen-xl mx-auto",children:ye("form",{className:"border max-w-sm px-8 py-4 mt-24 border-slate-800 shadow-sm rounded-md",onSubmit:d=>{d.preventDefault(),u(!0);const p=nh();YT(p,n,i).then(g=>{console.log(g);const _=g._tokenResponse.idToken;localStorage.setItem("authToken",_),e(vd.login(_)),console.log(_)}).catch(g=>{u(!1),console.log(g),g.code==="auth/wrong-password"?l("Invalid Password"):g.code==="auth/user-not-found"?l("Invalid Email"):l(g.message)})},children:[R("h2",{className:"text-3xl font-medium pb-6 text-center",children:"Login Form"}),o&&ye("p",{className:"border border-red-400 bg-red-100 text-red-800 p-2 rounded-sm flex  justify-between",children:[o,R("span",{className:"font-bold cursor-pointer",onClick:()=>{l("")},children:"x"})]}),R(zl,{value:n,onChange:d=>r(d.target.value),placeholder:"Email Address",type:"email",required:!0}),R(zl,{value:i,onChange:d=>s(d.target.value),placeholder:"Password",type:"password",required:!0}),R(hr,{className:"border-slate-800 bg-slate-800 text-white",children:a?R(ch,{size:"sm"}):"Login"})]})})};var jR="firebase",BR="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(jR,BR,"app");const qm="@firebase/database",Gm="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R0="";function WR(t){R0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HR(e)}}catch{}return new VR},Zn=N0("localStorage"),_d=N0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Wf("@firebase/database"),qR=function(){let t=1;return function(){return t++}}(),x0=function(t){const e=aI(t),n=new iI;n.update(e);const r=n.digest();return zf.encodeByteArray(r)},po=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=po.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let rr=null,Km=!0;const GR=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ti.logLevel=q.VERBOSE,rr=ti.log.bind(ti),e&&_d.set("logging_enabled",!0)):typeof t=="function"?rr=t:(rr=null,_d.remove("logging_enabled"))},be=function(...t){if(Km===!0&&(Km=!1,rr===null&&_d.get("logging_enabled")===!0&&GR(!0)),rr){const e=po.apply(null,t);rr(e)}},mo=function(t){return function(...e){be(t,...e)}},yd=function(...t){const e="FIREBASE INTERNAL ERROR: "+po(...t);ti.error(e)},mr=function(...t){const e=`FIREBASE FATAL ERROR: ${po(...t)}`;throw ti.error(e),new Error(e)},tt=function(...t){const e="FIREBASE WARNING: "+po(...t);ti.warn(e)},KR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},P0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pi="[MIN_NAME]",gr="[MAX_NAME]",Ri=function(t,e){if(t===e)return 0;if(t===pi||e===gr)return-1;if(e===pi||t===gr)return 1;{const n=Qm(t),r=Qm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},YR=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},dh=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=dh(t[e[r]]);return n+="}",n},O0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const A0=function(t){T(!P0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},XR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},JR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ZR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const eN=new RegExp("^-?(0*)\\d{1,10}$"),tN=-2147483648,nN=2147483647,Qm=function(t){if(eN.test(t)){const e=Number(t);if(e>=tN&&e<=nN)return e}return null},go=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},rN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tt(e)}}class wd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="5",b0="v",D0="s",L0="r",M0="f",F0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,U0="ls",$0="p",Ed="ac",z0="websocket",j0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function B0(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===z0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===j0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lN(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.counters_={}}incrementCounter(e,n=1){Zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return G1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={},zu={};function hh(t){const e=t.toString();return $u[e]||($u[e]=new aN),$u[e]}function uN(t,e){const n=t.toString();return zu[n]||(zu[n]=e()),zu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&go(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="start",dN="close",fN="pLPCommand",hN="pRTLPCB",W0="id",H0="pw",V0="ser",pN="cb",mN="seg",gN="ts",vN="d",_N="dframe",q0=1870,G0=30,yN=q0-G0,wN=25e3,EN=3e4;class Wr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mo(e),this.stats_=hh(n),this.urlFn=a=>(this.appCheckToken&&(a[Ed]=this.appCheckToken),B0(n,j0,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EN)),QR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ph((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ym)this.id=l,this.password=a;else if(o===dN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ym]="t",r[V0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[b0]=fh,this.transportSessionId&&(r[D0]=this.transportSessionId),this.lastSessionId&&(r[U0]=this.lastSessionId),this.applicationId&&(r[$0]=this.applicationId),this.appCheckToken&&(r[Ed]=this.appCheckToken),typeof location<"u"&&location.hostname&&F0.test(location.hostname)&&(r[L0]=M0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wr.forceAllow_=!0}static forceDisallow(){Wr.forceDisallow_=!0}static isAvailable(){return Wr.forceAllow_?!0:!Wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XR()&&!JR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xy(n),i=O0(r,yN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[_N]="t",r[W0]=e,r[H0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ph{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qR(),window[fN+this.uniqueCallbackIdentifier]=e,window[hN+this.uniqueCallbackIdentifier]=n,this.myIFrame=ph.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[W0]=this.myID,e[H0]=this.myPW,e[V0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+G0+r.length<=q0;){const o=this.pendingSegs.shift();r=r+"&"+mN+i+"="+o.seg+"&"+gN+i+"="+o.ts+"&"+vN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=16384,CN=45e3;let Gl=null;typeof MozWebSocket<"u"?Gl=MozWebSocket:typeof WebSocket<"u"&&(Gl=WebSocket);class yt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mo(this.connId),this.stats_=hh(n),this.connURL=yt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[b0]=fh,typeof location<"u"&&location.hostname&&F0.test(location.hostname)&&(o[L0]=M0),n&&(o[D0]=n),r&&(o[U0]=r),i&&(o[Ed]=i),s&&(o[$0]=s),B0(e,z0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zn.set("previous_websocket_failure",!0);try{let r;by(),this.mySock=new Gl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Gl!==null&&!yt.forceDisallow_}static previouslyFailed(){return Zn.isInMemoryStorage||Zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Rs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=O0(n,SN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2;yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wr,yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yt&&yt.isAvailable();let r=n&&!yt.previouslyFailed();if(e.webSocketOnly&&(n||tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[yt];else{const i=this.transports_=[];for(const s of Ms.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=6e4,TN=5e3,kN=10*1024,RN=100*1024,ju="t",Xm="d",NN="s",Jm="r",xN="e",Zm="o",eg="a",tg="n",ng="p",PN="h";class ON{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mo("c:"+this.id+":"),this.transportManager_=new Ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ju in e){const n=e[ju];n===eg?this.upgradeIfSecondaryHealthy_():n===Jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ng,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(ju,e);if(Xm in e){const r=e[Xm];if(n===PN)this.onHandshake_(r);else if(n===tg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NN?this.onConnectionShutdown_(r):n===Jm?this.onReset_(r):n===xN?yd("Server Error: "+r):n===Zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fh!==r&&tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(IN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ng,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Q0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Kl}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=32,ig=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new G("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ln(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Y0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function X0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function J0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return He(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mh(t,e){if(Ln(t)!==Ln(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ln(t)>Ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bN{constructor(e,n){this.errorPrefix_=n,this.parts_=X0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=La(this.parts_[r]);Z0(this)}}function DN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=La(e),Z0(t)}function LN(t){const e=t.parts_.pop();t.byteLength_-=La(e),t.parts_.length>0&&(t.byteLength_-=1)}function Z0(t){if(t.byteLength_>ig)throw new Error(t.errorPrefix_+"has a key path longer than "+ig+" bytes ("+t.byteLength_+").");if(t.parts_.length>rg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rg+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends Q0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new gh}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=1e3,MN=60*5*1e3,sg=30*1e3,FN=1.3,UN=3e4,$N="server_kill",og=3;class Vt extends K0{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Vt.nextPersistentConnectionId_++,this.log_=mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$i,this.maxReconnectDelay_=MN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!by())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Kl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(we(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new jf,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Vt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zt(e,"w")){const r=di(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yd("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=$i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(f){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new ON(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{tt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt($N)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&tt(f),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sd(this.interruptReasons_)&&(this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=og&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=og&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+R0.replace(/\./g,"-")]=1,Bf()?e["framework.cordova"]=1:Ay()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Kl.getInstance().currentlyOnline();return sd(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(pi,e),i=new F(pi,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class ew extends ja{static get __EMPTY_NODE(){return jo}static set __EMPTY_NODE(e){jo=e}compare(e,n){return Ri(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(gr,jo)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,jo)}toString(){return".key"}}const ni=new ew;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:_e.RED,this.left=i!=null?i:Ve.EMPTY_NODE,this.right=s!=null?s:Ve.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class zN{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bo(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new zN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t,e){return Ri(t.name,e.name)}function vh(t,e){return Ri(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;function BN(t){Sd=t}const tw=function(t){return typeof t=="number"?"number:"+A0(t):"string:"+t},nw=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zt(e,".sv"),"Priority must be a string or number.")}else T(t===Sd||t.isEmpty(),"priority of unexpected type.");T(t===Sd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lg;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nw(this.priorityNode_)}static set __childrenNodeConstructor(e){lg=e}static get __childrenNodeConstructor(){return lg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:U(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=A0(this.value_):e+=this.value_,this.lazyHash_=x0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rw,iw;function WN(t){rw=t}function HN(t){iw=t}class VN extends ja{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(gr,new ge("[PRIORITY-POST]",iw))}makePost(e,n){const r=rw(e);return new F(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new VN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=Math.log(2);class GN{constructor(e){const n=s=>parseInt(Math.log(s)/qN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ql=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let f,d;if(c===0)return null;if(c===1)return f=t[a],d=n?n(f):f,new _e(d,f.node,_e.BLACK,null,null);{const p=parseInt(c/2,10)+a,g=i(a,p),_=i(p+1,u);return f=t[p],d=n?n(f):f,new _e(d,f.node,_e.BLACK,g,_)}},s=function(a){let u=null,c=null,f=t.length;const d=function(g,_){const S=f-g,m=f;f-=g;const h=i(S+1,m),v=t[S],w=n?n(v):v;p(new _e(w,v.node,_,null,h))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<a.count;++g){const _=a.nextBitIsOne(),S=Math.pow(2,a.count-(g+1));_?d(S,_e.BLACK):(d(S,_e.BLACK),d(S,_e.RED))}return c},o=new GN(t.length),l=s(o);return new Ve(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;const Rr={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Rr&&le,"ChildrenNode.ts has not been loaded"),Bu=Bu||new Wt({".priority":Rr},{".priority":le}),Bu}get(e){const n=di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Zt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ql(r,e.getCompare()):l=Rr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Wt(c,u)}addToIndexes(e,n){const r=bl(this.indexes_,(i,s)=>{const o=di(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Rr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ql(l,o.getCompare())}else return Rr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=bl(this.indexes_,i=>{if(i===Rr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nw(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zi||(zi=new A(new Ve(vh),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zi:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?zi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{T(U(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tw(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":x0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vo?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KN extends A{constructor(){super(new Ve(vh),A.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const vo=new KN;Object.defineProperties(F,{MIN:{value:new F(pi,A.EMPTY_NODE)},MAX:{value:new F(gr,vo)}});ew.__EMPTY_NODE=A.EMPTY_NODE;ge.__childrenNodeConstructor=A;BN(vo);HN(vo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=!0;function De(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,De(e))}if(!(t instanceof Array)&&QN){const n=[];let r=!1;if(Qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=De(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Ql(n,jN,o=>o.name,vh);if(r){const o=Ql(n,le.getCompare());return new A(s,De(e),new Wt({".priority":o},{".priority":le}))}else return new A(s,De(e),Wt.Default)}else{let n=A.EMPTY_NODE;return Qe(t,(r,i)=>{if(Zt(t,r)&&r.substring(0,1)!=="."){const s=De(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(De(e))}}WN(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN extends ja{constructor(e){super(),this.indexPath_=e,T(!$(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}makePost(e,n){const r=De(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,vo);return new F(gr,e)}toString(){return X0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN extends ja{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=De(e);return new F(n,r)}toString(){return".value"}}const JN=new XN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){return{type:"value",snapshotNode:t}}function mi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Us(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Fs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(mi(n,r)):o.trackChildChange(Us(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(Fs(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Us(i,s,o))}else r.trackChildChange(mi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.indexedFilter_=new _h(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();l=(d,p)=>f(p,d)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,c=!1;for(;a.hasNext();){const f=a.getNext();!c&&l(s,f)<=0&&(c=!0),c&&u<this.limit_&&l(f,o)<=0?u++:i=i.updateImmediateChild(f.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const f=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Us(n,r,f)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Fs(n,f));const _=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(mi(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Fs(u.name,u.node)),s.trackChildChange(mi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new yh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tx(t){return t.loadsAllData()?new _h(t.getIndex()):t.hasLimit()?new ex(t):new $s(t)}function ag(t){const e={};if(t.isDefault())return e;let n;return t.index_===le?n="$priority":t.index_===JN?n="$value":t.index_===ni?n="$key":(T(t.index_ instanceof YN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_&&(e.startAt=we(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+we(t.indexStartName_))),t.endSet_&&(e.endAt=we(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+we(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ug(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends K0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=mo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yl.getListenId_(e,r),l={};this.listens_[o]=l;const a=ag(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),di(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Yl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ag(e._queryParams),r=e._path.toString(),i=new jf;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Rs(l.responseText)}catch{tt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&tt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return{value:null,children:new Map}}function ow(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Xl());const i=t.children.get(r);e=Q(e),ow(i,e,n)}}function Cd(t,e,n){t.value!==null?n(e,t.value):rx(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Cd(i,s,n)})}function rx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=10*1e3,sx=30*1e3,ox=5*60*1e3;class lx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ix(e);const r=cg+(sx-cg)*Math.random();ss(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qe(e,(i,s)=>{s>0&&Zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*ox))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function lw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=lw()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Jl(B(),n,this.revert)}}else return T(U(this.path)===e,"operationForChild called for unrelated child."),new Jl(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new zs(this.source,B()):new zs(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return $(this.path)?new vr(this.source,B(),this.snap.getImmediateChild(e)):new vr(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new vr(this.source,B(),n.value):new js(this.source,B(),n)}else return T(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new js(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ux(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ZN(o.childName,o.snapshotNode))}),ji(t,i,"child_removed",e,r,n),ji(t,i,"child_added",e,r,n),ji(t,i,"child_moved",s,r,n),ji(t,i,"child_changed",e,r,n),ji(t,i,"value",e,r,n),i}function ji(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>dx(t,l,a)),o.forEach(l=>{const a=cx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function cx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dx(t,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,r){return Ba(new _r(e,n,r),t.serverCache)}function aw(t,e,n,r){return Ba(t.eventCache,new _r(e,n,r))}function Id(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;const fx=()=>(Wu||(Wu=new Ve(YR)),Wu);class J{constructor(e,n=fx()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Qe(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if($(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:fe(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new J(null)}}set(e,n){if($(e))return new J(n,this.children);{const r=U(e),s=(this.children.get(r)||new J(null)).set(Q(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if($(e))return n;{const r=U(e),s=(this.children.get(r)||new J(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),fe(n,i),r):new J(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new J(null))}}function ls(t,e,n){if($(e))return new It(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new It(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new It(s)}}}function dg(t,e,n){let r=t;return Qe(n,(i,s)=>{r=ls(r,fe(e,i),s)}),r}function fg(t,e){if($(e))return It.empty();{const n=t.writeTree_.setTree(e,new J(null));return new It(n)}}function Td(t,e){return Cr(t,e)!=null}function Cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function hg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function xn(t,e){if($(e))return t;{const n=Cr(t,e);return n!=null?new It(new J(n)):new It(t.writeTree_.subtree(e))}}function kd(t){return t.writeTree_.isEmpty()}function gi(t,e){return uw(B(),t.writeTree_,e)}function uw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=uw(fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){return hw(e,t)}function hx(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ls(t.visibleWrites,e,n)),t.lastWriteId=r}function px(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&gx(l,r.path)?i=!1:wt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return vx(t),!0;if(r.snap)t.visibleWrites=fg(t.visibleWrites,r.path);else{const l=r.children;Qe(l,a=>{t.visibleWrites=fg(t.visibleWrites,fe(r.path,a))})}return!0}else return!1}function gx(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(fe(t.path,n),e))return!0;return!1}function vx(t){t.visibleWrites=cw(t.allWrites,_x,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _x(t){return t.visible}function cw(t,e,n){let r=It.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)wt(n,o)?(l=He(n,o),r=ls(r,l,s.snap)):wt(o,n)&&(l=He(o,n),r=ls(r,B(),s.snap.getChild(l)));else if(s.children){if(wt(n,o))l=He(n,o),r=dg(r,l,s.children);else if(wt(o,n))if(l=He(o,n),$(l))r=dg(r,B(),s.children);else{const a=di(s.children,U(l));if(a){const u=a.getChild(Q(l));r=ls(r,B(),u)}}}else throw Ci("WriteRecord should have .snap or .children")}}return r}function dw(t,e,n,r,i){if(!r&&!i){const s=Cr(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(kd(o))return n;if(n==null&&!Td(o,B()))return null;{const l=n||A.EMPTY_NODE;return gi(o,l)}}}else{const s=xn(t.visibleWrites,e);if(!i&&kd(s))return n;if(!i&&n==null&&!Td(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(wt(u.path,e)||wt(e,u.path))},l=cw(t.allWrites,o,e),a=n||A.EMPTY_NODE;return gi(l,a)}}}function yx(t,e,n){let r=A.EMPTY_NODE;const i=Cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=gi(xn(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),hg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xn(t.visibleWrites,e);return hg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wx(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(Td(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return kd(o)?i.getChild(n):gi(o,i.getChild(n))}}function Ex(t,e,n,r){const i=fe(e,n),s=Cr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return gi(o,r.getNode().getImmediateChild(n))}else return null}function Sx(t,e){return Cr(t.visibleWrites,e)}function Cx(t,e,n,r,i,s,o){let l;const a=xn(t.visibleWrites,e),u=Cr(a,B());if(u!=null)l=u;else if(n!=null)l=gi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],f=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)f(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function Ix(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function Zl(t,e,n,r){return dw(t.writeTree,t.treePath,e,n,r)}function Ch(t,e){return yx(t.writeTree,t.treePath,e)}function pg(t,e,n,r){return wx(t.writeTree,t.treePath,e,n,r)}function ea(t,e){return Sx(t.writeTree,fe(t.treePath,e))}function Tx(t,e,n,r,i,s){return Cx(t.writeTree,t.treePath,e,n,r,i,s)}function Ih(t,e,n){return Ex(t.writeTree,t.treePath,e,n)}function fw(t,e){return hw(fe(t.treePath,e),t.writeTree)}function hw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Us(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,mi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Us(r,e.snapshotNode,i.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const pw=new Rx;class Th{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new _r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ih(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),s=Tx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){return{filter:t}}function xx(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Px(t,e,n,r,i){const s=new kx;let o,l;if(n.type===Et.OVERWRITE){const u=n;u.source.fromUser?o=Rd(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=ta(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Et.MERGE){const u=n;u.source.fromUser?o=Ax(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Nd(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Et.ACK_USER_WRITE){const u=n;u.revert?o=Lx(t,e,u.path,r,i,s):o=bx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=Dx(t,e,n.path,r,s);else throw Ci("Unknown operation type: "+n.type);const a=s.getChanges();return Ox(e,o,a),{viewCache:o,changes:a}}function Ox(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Id(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sw(Id(e)))}}function mw(t,e,n,r,i,s){const o=e.eventCache;if(ea(r,n)!=null)return e;{let l,a;if($(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=yr(e),c=u instanceof A?u:A.EMPTY_NODE,f=Ch(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=Zl(r,yr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){T(Ln(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const f=pg(r,n,c,a);f!=null?l=t.filter.updatePriority(c,f):l=o.getNode()}else{const c=Q(n);let f;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=pg(r,n,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(u).updateChild(c,d):f=o.getNode().getImmediateChild(u)}else f=Ih(r,u,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),u,f,c,i,s):l=o.getNode()}}return os(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function ta(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if($(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),p,null)}else{const p=U(n);if(!a.isCompleteForPath(n)&&Ln(n)>1)return e;const g=Q(n),S=a.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),p,S,g,pw,null)}const f=aw(e,u,a.isFullyInitialized()||$(n),c.filtersNodes()),d=new Th(i,f,s);return mw(t,f,n,i,d,l)}function Rd(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Th(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=os(e,u,!0,t.filter.filtersNodes());else{const f=U(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=os(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=Q(n),p=l.getNode().getImmediateChild(f);let g;if($(d))g=r;else{const _=c.getCompleteChild(f);_!=null?Y0(d)===".priority"&&_.getChild(J0(d)).isEmpty()?g=_:g=_.updateChild(d,r):g=A.EMPTY_NODE}if(p.equals(g))a=e;else{const _=t.filter.updateChild(l.getNode(),f,g,d,c,o);a=os(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function mg(t,e){return t.eventCache.isCompleteForChild(e)}function Ax(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=fe(n,a);mg(e,U(c))&&(l=Rd(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=fe(n,a);mg(e,U(c))||(l=Rd(t,l,c,u,i,s,o))}),l}function gg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nd(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;$(n)?u=r:u=new J(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),g=gg(t,p,d);a=ta(t,a,new G(f),g,i,s,o,l)}}),u.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!p){const g=e.serverCache.getNode().getImmediateChild(f),_=gg(t,g,d);a=ta(t,a,new G(f),_,i,s,o,l)}}),a}function bx(t,e,n,r,i,s,o){if(ea(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ta(t,e,n,a.getNode().getChild(n),i,s,l,o);if($(n)){let u=new J(null);return a.getNode().forEachChild(ni,(c,f)=>{u=u.set(new G(c),f)}),Nd(t,e,n,u,i,s,l,o)}else return e}else{let u=new J(null);return r.foreach((c,f)=>{const d=fe(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),Nd(t,e,n,u,i,s,l,o)}}function Dx(t,e,n,r,i){const s=e.serverCache,o=aw(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return mw(t,o,n,r,pw,i)}function Lx(t,e,n,r,i,s){let o;if(ea(r,n)!=null)return e;{const l=new Th(r,e,i),a=e.eventCache.getNode();let u;if($(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Zl(r,yr(e));else{const f=e.serverCache.getNode();T(f instanceof A,"serverChildren would be complete if leaf node"),c=Ch(r,f)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let f=Ih(r,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=a.getImmediateChild(c)),f!=null?u=t.filter.updateChild(a,c,f,Q(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,A.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zl(r,yr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ea(r,B())!=null,os(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new _h(r.getIndex()),s=tx(r);this.processor_=Nx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),c=new _r(a,o.isFullyInitialized(),i.filtersNodes()),f=new _r(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ba(f,c),this.eventGenerator_=new ax(this.query_)}get query(){return this.query_}}function Fx(t){return t.viewCache_.serverCache.getNode()}function Ux(t,e){const n=yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function vg(t){return t.eventRegistrations_.length===0}function $x(t,e){t.eventRegistrations_.push(e)}function _g(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function yg(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(T(yr(t.viewCache_),"We should always have a full cache before handling merges"),T(Id(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Px(t.processor_,i,e,n,r);return xx(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,gw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function zx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(mi(s,o))}),n.isFullyInitialized()&&r.push(sw(n.getNode())),gw(t,r,n.getNode(),e)}function gw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ux(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;class jx{constructor(){this.views=new Map}}function Bx(t){T(!na,"__referenceConstructor has already been defined"),na=t}function Wx(){return T(na,"Reference.ts has not been loaded"),na}function Hx(t){return t.views.size===0}function kh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),yg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(yg(o,e,n,r));return s}}function Vx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Zl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Ch(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Ba(new _r(l,a,!1),new _r(r,i,!1));return new Mx(e,u)}return o}function qx(t,e,n,r,i,s){const o=Vx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$x(o,n),zx(o,n)}function Gx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Mn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(_g(u,n,r)),vg(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(_g(a,n,r)),vg(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Mn(t)&&s.push(new(Wx())(e._repo,e._path)),{removed:s,events:o}}function vw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ri(t,e){let n=null;for(const r of t.views.values())n=n||Ux(r,e);return n}function _w(t,e){if(e._queryParams.loadsAllData())return Wa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function yw(t,e){return _w(t,e)!=null}function Mn(t){return Wa(t)!=null}function Wa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;function Kx(t){T(!ra,"__referenceConstructor has already been defined"),ra=t}function Qx(){return T(ra,"Reference.ts has not been loaded"),ra}let Yx=1;class wg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Ix(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xx(t,e,n,r,i){return hx(t.pendingWriteTree_,e,n,r,i),i?_o(t,new vr(lw(),e,n)):[]}function Hr(t,e,n=!1){const r=px(t.pendingWriteTree_,e);if(mx(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(B(),!0):Qe(r.children,o=>{s=s.set(new G(o),!0)}),_o(t,new Jl(r.path,s,n))}else return[]}function Ha(t,e,n){return _o(t,new vr(wh(),e,n))}function Jx(t,e,n){const r=J.fromObject(n);return _o(t,new js(wh(),e,r))}function Zx(t,e){return _o(t,new zs(wh(),e))}function eP(t,e,n){const r=Rh(t,n);if(r){const i=Nh(r),s=i.path,o=i.queryId,l=He(s,e),a=new zs(Eh(o),l);return xh(t,s,a)}else return[]}function xd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||yw(o,e))){const a=Gx(o,e,n,r);Hx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,p)=>Mn(p));if(c&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=rP(d);for(let g=0;g<p.length;++g){const _=p[g],S=_.query,m=Cw(t,_);t.listenProvider_.startListening(as(S),ia(t,S),m.hashFn,m.onComplete)}}}!f&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(as(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(Va(d));t.listenProvider_.stopListening(as(d),p)}))}iP(t,u)}return l}function tP(t,e,n,r){const i=Rh(t,r);if(i!=null){const s=Nh(i),o=s.path,l=s.queryId,a=He(o,e),u=new vr(Eh(l),a,n);return xh(t,o,u)}else return[]}function nP(t,e,n,r){const i=Rh(t,r);if(i){const s=Nh(i),o=s.path,l=s.queryId,a=He(o,e),u=J.fromObject(n),c=new js(Eh(l),a,u);return xh(t,o,c)}else return[]}function Eg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=He(d,i);s=s||ri(p,g),o=o||Mn(p)});let l=t.syncPointTree_.get(i);l?(o=o||Mn(l),s=s||ri(l,B())):(l=new jx,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const _=ri(g,B());_&&(s=s.updateImmediateChild(p,_))}));const u=yw(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Va(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=sP();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=Sh(t.pendingWriteTree_,i);let f=qx(l,e,n,c,s,a);if(!u&&!o&&!r){const d=_w(l,e);f=f.concat(oP(t,e,d))}return f}function ww(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),u=ri(l,a);if(u)return u});return dw(i,e,s,n,!0)}function _o(t,e){return Ew(e,t.syncPointTree_,null,Sh(t.pendingWriteTree_,B()))}function Ew(t,e,n,r){if($(t.path))return Sw(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=ri(i,B()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=fw(r,o);s=s.concat(Ew(l,a,u,c))}return i&&(s=s.concat(kh(i,t,r,n))),s}}function Sw(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=ri(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=fw(r,o),c=t.operationForChild(o);c&&(s=s.concat(Sw(c,l,a,u)))}),i&&(s=s.concat(kh(i,t,r,n))),s}function Cw(t,e){const n=e.query,r=ia(t,n);return{hashFn:()=>(Fx(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?eP(t,n._path,r):Zx(t,n._path);{const s=ZR(i,n);return xd(t,n,null,s)}}}}function ia(t,e){const n=Va(e);return t.queryToTagMap.get(n)}function Va(t){return t._path.toString()+"$"+t._queryIdentifier}function Rh(t,e){return t.tagToQueryMap.get(e)}function Nh(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function xh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Sh(t.pendingWriteTree_,e);return kh(r,n,i,null)}function rP(t){return t.fold((e,n,r)=>{if(n&&Mn(n))return[Wa(n)];{let i=[];return n&&(i=vw(n)),Qe(r,(s,o)=>{i=i.concat(o)}),i}})}function as(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Qx())(t._repo,t._path):t}function iP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Va(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function sP(){return Yx++}function oP(t,e,n){const r=e._path,i=ia(t,e),s=Cw(t,n),o=t.listenProvider_.startListening(as(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!Mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,f)=>{if(!$(u)&&c&&Mn(c))return[Wa(c).query];{let d=[];return c&&(d=d.concat(vw(c).map(p=>p.query))),Qe(f,(p,g)=>{d=d.concat(g)}),d}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(as(c),ia(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ph(n)}node(){return this.node_}}class Oh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new Oh(this.syncTree_,n)}node(){return ww(this.syncTree_,this.path_)}}const lP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sg=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uP(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},uP=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cP=function(t,e,n,r){return Ah(e,new Oh(n,t),r)},dP=function(t,e,n){return Ah(t,new Ph(e),n)};function Ah(t,e,n){const r=t.getPriority().val(),i=Sg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Sg(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,De(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(le,(l,a)=>{const u=Ah(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Dh(t,e){let n=e instanceof G?e:new G(e),r=t,i=U(n);for(;i!==null;){const s=di(r.node.children,i)||{children:{},childCount:0};r=new bh(i,r,s),n=Q(n),i=U(n)}return r}function Ni(t){return t.node.value}function Iw(t,e){t.node.value=e,Pd(t)}function Tw(t){return t.node.childCount>0}function fP(t){return Ni(t)===void 0&&!Tw(t)}function qa(t,e){Qe(t.node.children,(n,r)=>{e(new bh(n,t,r))})}function kw(t,e,n,r){n&&!r&&e(t),qa(t,i=>{kw(i,e,!0,r)}),n&&r&&e(t)}function hP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yo(t){return new G(t.parent===null?t.name:yo(t.parent)+"/"+t.name)}function Pd(t){t.parent!==null&&pP(t.parent,t.name,t)}function pP(t,e,n){const r=fP(n),i=Zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/[\[\].#$\/\u0000-\u001F\u007F]/,gP=/[\[\].#$\u0000-\u001F\u007F]/,Hu=10*1024*1024,Rw=function(t){return typeof t=="string"&&t.length!==0&&!mP.test(t)},Nw=function(t){return typeof t=="string"&&t.length!==0&&!gP.test(t)},vP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nw(t)},xw=function(t,e,n){const r=n instanceof G?new bN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(r)+" with contents = "+e.toString());if(P0(e))throw new Error(t+"contains "+e.toString()+" "+Kn(r));if(typeof e=="string"&&e.length>Hu/3&&La(e)>Hu)throw new Error(t+"contains a string greater than "+Hu+" utf8 bytes "+Kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Rw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DN(r,o),xw(t,l,r),LN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Kn(r)+" in addition to actual children.")}},Pw=function(t,e,n,r){if(!(r&&n===void 0)&&!Nw(n))throw new Error(Ly(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_P=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pw(t,e,n,r)},yP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vP(n))throw new Error(Ly(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ow(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!mh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Aw(t,e,n){Ow(t,n),bw(t,r=>mh(r,e))}function Ir(t,e,n){Ow(t,n),bw(t,r=>wt(r,e)||wt(e,r))}function bw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(EP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function EP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();rr&&be("event: "+n.toString()),go(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="repo_interrupt",CP=25;class IP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xl(),this.transactionQueueTree_=new bh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TP(t,e,n){if(t.stats_=hh(t.repoInfo_),t.forceRestClient_||rN())t.server_=new Yl(t.repoInfo_,(r,i,s,o)=>{Cg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ig(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(r,i,s,o)=>{Cg(t,r,i,s,o)},r=>{Ig(t,r)},r=>{RP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uN(t.repoInfo_,()=>new lx(t.stats_,t.server_)),t.infoData_=new nx,t.infoSyncTree_=new wg({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ha(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Lh(t,"connected",!1),t.serverSyncTree_=new wg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ir(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function kP(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dw(t){return lP({timestamp:kP(t)})}function Cg(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=bl(n,u=>De(u));o=nP(t.serverSyncTree_,s,a,i)}else{const a=De(n);o=tP(t.serverSyncTree_,s,a,i)}else if(r){const a=bl(n,u=>De(u));o=Jx(t.serverSyncTree_,s,a)}else{const a=De(n);o=Ha(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Fh(t,s)),Ir(t.eventQueue_,l,o)}function Ig(t,e){Lh(t,"connected",e),e===!1&&xP(t)}function RP(t,e){Qe(e,(n,r)=>{Lh(t,n,r)})}function Lh(t,e,n){const r=new G("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(r,i);const s=Ha(t.infoSyncTree_,r,i);Ir(t.eventQueue_,r,s)}function NP(t){return t.nextWriteId_++}function xP(t){Lw(t,"onDisconnectEvents");const e=Dw(t),n=Xl();Cd(t.onDisconnect_,B(),(i,s)=>{const o=cP(i,s,t.serverSyncTree_,e);ow(n,i,o)});let r=[];Cd(n,B(),(i,s)=>{r=r.concat(Ha(t.serverSyncTree_,i,s));const o=DP(t,i);Fh(t,o)}),t.onDisconnect_=Xl(),Ir(t.eventQueue_,B(),r)}function PP(t,e,n){let r;U(e._path)===".info"?r=Eg(t.infoSyncTree_,e,n):r=Eg(t.serverSyncTree_,e,n),Aw(t.eventQueue_,e._path,r)}function Tg(t,e,n){let r;U(e._path)===".info"?r=xd(t.infoSyncTree_,e,n):r=xd(t.serverSyncTree_,e,n),Aw(t.eventQueue_,e._path,r)}function OP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SP)}function Lw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Mw(t,e,n){return ww(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Mh(t,e=t.transactionQueueTree_){if(e||Ga(t,e),Ni(e)){const n=Uw(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&AP(t,yo(e),n)}else Tw(e)&&qa(e,n=>{Mh(t,n)})}function AP(t,e,n){const r=n.map(u=>u.currentWriteId),i=Mw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=He(e,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Lw(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Hr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ga(t,Dh(t.transactionQueueTree_,e)),Mh(t,t.transactionQueueTree_),Ir(t.eventQueue_,e,c);for(let d=0;d<f.length;d++)go(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{tt("transaction at "+a.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Fh(t,e)}},o)}function Fh(t,e){const n=Fw(t,e),r=yo(n),i=Uw(t,n);return bP(t,i,r),r}function bP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=He(n,a.path);let c=!1,f;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,f=a.abortReason,i=i.concat(Hr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=CP)c=!0,f="maxretry",i=i.concat(Hr(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Mw(t,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){xw("transaction failed: Data returned ",p,a.path);let g=De(p);typeof p=="object"&&p!=null&&Zt(p,".priority")||(g=g.updatePriority(d.getPriority()));const S=a.currentWriteId,m=Dw(t),h=dP(g,d,m);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=h,a.currentWriteId=NP(t),o.splice(o.indexOf(S),1),i=i.concat(Xx(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Hr(t.serverSyncTree_,S,!0))}else c=!0,f="nodata",i=i.concat(Hr(t.serverSyncTree_,a.currentWriteId,!0))}Ir(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}Ga(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)go(r[l]);Mh(t,t.transactionQueueTree_)}function Fw(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Ni(r)===void 0;)r=Dh(r,n),e=Q(e),n=U(e);return r}function Uw(t,e){const n=[];return $w(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $w(t,e,n){const r=Ni(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);qa(e,i=>{$w(t,i,n)})}function Ga(t,e){const n=Ni(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Iw(e,n.length>0?n:void 0)}qa(e,r=>{Ga(t,r)})}function DP(t,e){const n=yo(Fw(t,e)),r=Dh(t.transactionQueueTree_,e);return hP(r,i=>{Vu(t,i)}),Vu(t,r),kw(r,i=>{Vu(t,i)}),n}function Vu(t,e){const n=Ni(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Iw(e,void 0):n.length=s+1,Ir(t.eventQueue_,yo(e),i);for(let o=0;o<r.length;o++)go(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function MP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const kg=function(t,e){const n=FP(t),r=n.namespace;n.domain==="firebase.com"&&mr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&mr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oN(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},FP=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=LP(t.substring(c,f)));const d=MP(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class jw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:Y0(this._path)}get ref(){return new tn(this._repo,this._path)}get _queryIdentifier(){const e=ug(this._queryParams),n=dh(e);return n==="{}"?"default":n}get _queryObject(){return ug(this._queryParams)}isEqual(e){if(e=en(e),!(e instanceof Uh))return!1;const n=this._repo===e._repo,r=mh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AN(this._path)}}class tn extends Uh{constructor(e,n){super(e,n,new yh,!1)}get parent(){const e=J0(this._path);return e===null?null:new tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=sa(this.ref,e);return new Bs(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Bs(i,sa(this.ref,r),le)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $P(t,e){return t=en(t),t._checkNotDeleted("ref"),e!==void 0?sa(t._root,e):t._root}function sa(t,e){return t=en(t),U(t._path)===null?_P("child","path",e,!1):Pw("child","path",e,!1),new tn(t._repo,fe(t._path,e))}class $h{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new zw("value",this,new Bs(e.snapshotNode,new tn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jw(this,e,n):null}matches(e){return e instanceof $h?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jw(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=sa(new tn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new zw(e.type,this,new Bs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function zP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,f)=>{Tg(t._repo,t,l),a(c,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new UP(n,s||void 0),l=e==="value"?new $h(o):new zh(e,o);return PP(t._repo,t,l),()=>Tg(t._repo,t,l)}function jP(t,e,n,r){return zP(t,"value",e,n,r)}Bx(tn);Kx(tn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="FIREBASE_DATABASE_EMULATOR_HOST",Od={};let WP=!1;function HP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||mr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kg(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[BP]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=kg(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new wd(wd.OWNER):new sN(t.name,t.options,e);yP("Invalid Firebase Database URL",o),$(o.path)||mr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=qP(l,t,c,new iN(t.name,n));return new GP(f,t)}function VP(t,e){const n=Od[e];(!n||n[t.key]!==t)&&mr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),OP(t),delete n[t.key]}function qP(t,e,n,r){let i=Od[e.name];i||(i={},Od[e.name]=i);let s=i[t.toURLString()];return s&&mr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new IP(t,WP,n,r),i[t.toURLString()]=s,s}class GP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tn(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(VP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mr("Cannot call "+e+" on a deleted database.")}}function KP(t=$y(),e){return Vf(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){WR(ao),fi(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return HP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Nn(qm,Gm,t),Nn(qm,Gm,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QP();const YP={apiKey:"AIzaSyBb4tW1uaaFH612frNd75Am7jv3NDO6PPI",authDomain:"react-remote-demo.firebaseapp.com",projectId:"react-remote-demo",storageBucket:"react-remote-demo.appspot.com",messagingSenderId:"94704326393",appId:"1:94704326393:web:ab8b4f7d6c2f1f306ff428",databaseURL:"https://react-remote-demo-default-rtdb.firebaseio.com"},XP=sT(YP),JP=KP(XP);var Bw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rg=us.createContext&&us.createContext(Bw),Pn=globalThis&&globalThis.__assign||function(){return Pn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Pn.apply(this,arguments)},ZP=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Ww(t){return t&&t.map(function(e,n){return us.createElement(e.tag,Pn({key:n},e.attr),Ww(e.child))})}function Hw(t){return function(e){return R(eO,{...Pn({attr:Pn({},t.attr)},e),children:Ww(t.child)})}}function eO(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=ZP(t,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),ye("svg",{...Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:Pn(Pn({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&R("title",{children:s}),t.children]})};return Rg!==void 0?R(Rg.Consumer,{children:function(n){return e(n)}}):e(Bw)}function tO(t){return Hw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(t)}function nO(t){return Hw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(t)}var Vw={exports:{}},jh={exports:{}},qw=function(e,n){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(n,i)}},rO=qw,Bh=Object.prototype.toString,Wh=function(t){return function(e){var n=Bh.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Tr(t){return t=t.toLowerCase(),function(n){return Wh(n)===t}}function Hh(t){return Array.isArray(t)}function oa(t){return typeof t>"u"}function iO(t){return t!==null&&!oa(t)&&t.constructor!==null&&!oa(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Gw=Tr("ArrayBuffer");function sO(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Gw(t.buffer),e}function oO(t){return typeof t=="string"}function lO(t){return typeof t=="number"}function Kw(t){return t!==null&&typeof t=="object"}function sl(t){if(Wh(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var aO=Tr("Date"),uO=Tr("File"),cO=Tr("Blob"),dO=Tr("FileList");function Vh(t){return Bh.call(t)==="[object Function]"}function fO(t){return Kw(t)&&Vh(t.pipe)}function hO(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Bh.call(t)===e||Vh(t.toString)&&t.toString()===e)}var pO=Tr("URLSearchParams");function mO(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function gO(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function qh(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Hh(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function Ad(){var t={};function e(i,s){sl(t[s])&&sl(i)?t[s]=Ad(t[s],i):sl(i)?t[s]=Ad({},i):Hh(i)?t[s]=i.slice():t[s]=i}for(var n=0,r=arguments.length;n<r;n++)qh(arguments[n],e);return t}function vO(t,e,n){return qh(e,function(i,s){n&&typeof i=="function"?t[s]=rO(i,n):t[s]=i}),t}function _O(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function yO(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function wO(t,e,n){var r,i,s,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)s=r[i],o[s]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function EO(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function SO(t){if(!t)return null;var e=t.length;if(oa(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var CO=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),Re={isArray:Hh,isArrayBuffer:Gw,isBuffer:iO,isFormData:hO,isArrayBufferView:sO,isString:oO,isNumber:lO,isObject:Kw,isPlainObject:sl,isUndefined:oa,isDate:aO,isFile:uO,isBlob:cO,isFunction:Vh,isStream:fO,isURLSearchParams:pO,isStandardBrowserEnv:gO,forEach:qh,merge:Ad,extend:vO,trim:mO,stripBOM:_O,inherits:yO,toFlatObject:wO,kindOf:Wh,kindOfTest:Tr,endsWith:EO,toArray:SO,isTypedArray:CO,isFileList:dO},Nr=Re;function Ng(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Qw=function(e,n,r){if(!n)return e;var i;if(r)i=r(n);else if(Nr.isURLSearchParams(n))i=n.toString();else{var s=[];Nr.forEach(n,function(a,u){a===null||typeof a>"u"||(Nr.isArray(a)?u=u+"[]":a=[a],Nr.forEach(a,function(f){Nr.isDate(f)?f=f.toISOString():Nr.isObject(f)&&(f=JSON.stringify(f)),s.push(Ng(u)+"="+Ng(f))}))}),i=s.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},IO=Re;function Ka(){this.handlers=[]}Ka.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Ka.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Ka.prototype.forEach=function(e){IO.forEach(this.handlers,function(r){r!==null&&e(r)})};var TO=Ka,kO=Re,RO=function(e,n){kO.forEach(e,function(i,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(e[n]=i,delete e[s])})},Yw=Re;function vi(t,e,n,r,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Yw.inherits(vi,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Xw=vi.prototype,Jw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Jw[t]={value:t}});Object.defineProperties(vi,Jw);Object.defineProperty(Xw,"isAxiosError",{value:!0});vi.from=function(t,e,n,r,i,s){var o=Object.create(Xw);return Yw.toFlatObject(t,o,function(a){return a!==Error.prototype}),vi.call(o,t.message,e,n,r,i),o.name=t.name,s&&Object.assign(o,s),o};var xi=vi,Zw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pt=Re;function NO(t,e){e=e||new FormData;var n=[];function r(s){return s===null?"":pt.isDate(s)?s.toISOString():pt.isArrayBuffer(s)||pt.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function i(s,o){if(pt.isPlainObject(s)||pt.isArray(s)){if(n.indexOf(s)!==-1)throw Error("Circular reference detected in "+o);n.push(s),pt.forEach(s,function(a,u){if(!pt.isUndefined(a)){var c=o?o+"."+u:u,f;if(a&&!o&&typeof a=="object"){if(pt.endsWith(u,"{}"))a=JSON.stringify(a);else if(pt.endsWith(u,"[]")&&(f=pt.toArray(a))){f.forEach(function(d){!pt.isUndefined(d)&&e.append(c,r(d))});return}}i(a,c)}}),n.pop()}else e.append(o,r(s))}return i(t),e}var eE=NO,qu,xg;function xO(){if(xg)return qu;xg=1;var t=xi;return qu=function(n,r,i){var s=i.config.validateStatus;!i.status||!s||s(i.status)?n(i):r(new t("Request failed with status code "+i.status,[t.ERR_BAD_REQUEST,t.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},qu}var Gu,Pg;function PO(){if(Pg)return Gu;Pg=1;var t=Re;return Gu=t.isStandardBrowserEnv()?function(){return{write:function(r,i,s,o,l,a){var u=[];u.push(r+"="+encodeURIComponent(i)),t.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),t.isString(o)&&u.push("path="+o),t.isString(l)&&u.push("domain="+l),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Gu}var OO=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},AO=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},bO=OO,DO=AO,tE=function(e,n){return e&&!bO(n)?DO(e,n):n},Ku,Og;function LO(){if(Og)return Ku;Og=1;var t=Re,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Ku=function(r){var i={},s,o,l;return r&&t.forEach(r.split(`
`),function(u){if(l=u.indexOf(":"),s=t.trim(u.substr(0,l)).toLowerCase(),o=t.trim(u.substr(l+1)),s){if(i[s]&&e.indexOf(s)>=0)return;s==="set-cookie"?i[s]=(i[s]?i[s]:[]).concat([o]):i[s]=i[s]?i[s]+", "+o:o}}),i},Ku}var Qu,Ag;function MO(){if(Ag)return Qu;Ag=1;var t=Re;return Qu=t.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function s(o){var l=o;return n&&(r.setAttribute("href",l),l=r.href),r.setAttribute("href",l),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=s(window.location.href),function(l){var a=t.isString(l)?s(l):l;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}(),Qu}var Yu,bg;function Qa(){if(bg)return Yu;bg=1;var t=xi,e=Re;function n(r){t.call(this,r==null?"canceled":r,t.ERR_CANCELED),this.name="CanceledError"}return e.inherits(n,t,{__CANCEL__:!0}),Yu=n,Yu}var Xu,Dg;function FO(){return Dg||(Dg=1,Xu=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}),Xu}var Ju,Lg;function Mg(){if(Lg)return Ju;Lg=1;var t=Re,e=xO(),n=PO(),r=Qw,i=tE,s=LO(),o=MO(),l=Zw,a=xi,u=Qa(),c=FO();return Ju=function(d){return new Promise(function(g,_){var S=d.data,m=d.headers,h=d.responseType,v;function w(){d.cancelToken&&d.cancelToken.unsubscribe(v),d.signal&&d.signal.removeEventListener("abort",v)}t.isFormData(S)&&t.isStandardBrowserEnv()&&delete m["Content-Type"];var y=new XMLHttpRequest;if(d.auth){var x=d.auth.username||"",E=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";m.Authorization="Basic "+btoa(x+":"+E)}var I=i(d.baseURL,d.url);y.open(d.method.toUpperCase(),r(I,d.params,d.paramsSerializer),!0),y.timeout=d.timeout;function D(){if(!!y){var ee="getAllResponseHeaders"in y?s(y.getAllResponseHeaders()):null,Ne=!h||h==="text"||h==="json"?y.responseText:y.response,Fe={data:Ne,status:y.status,statusText:y.statusText,headers:ee,config:d,request:y};e(function(jn){g(jn),w()},function(jn){_(jn),w()},Fe),y=null}}if("onloadend"in y?y.onloadend=D:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(D)},y.onabort=function(){!y||(_(new a("Request aborted",a.ECONNABORTED,d,y)),y=null)},y.onerror=function(){_(new a("Network Error",a.ERR_NETWORK,d,y,y)),y=null},y.ontimeout=function(){var Ne=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded",Fe=d.transitional||l;d.timeoutErrorMessage&&(Ne=d.timeoutErrorMessage),_(new a(Ne,Fe.clarifyTimeoutError?a.ETIMEDOUT:a.ECONNABORTED,d,y)),y=null},t.isStandardBrowserEnv()){var O=(d.withCredentials||o(I))&&d.xsrfCookieName?n.read(d.xsrfCookieName):void 0;O&&(m[d.xsrfHeaderName]=O)}"setRequestHeader"in y&&t.forEach(m,function(Ne,Fe){typeof S>"u"&&Fe.toLowerCase()==="content-type"?delete m[Fe]:y.setRequestHeader(Fe,Ne)}),t.isUndefined(d.withCredentials)||(y.withCredentials=!!d.withCredentials),h&&h!=="json"&&(y.responseType=d.responseType),typeof d.onDownloadProgress=="function"&&y.addEventListener("progress",d.onDownloadProgress),typeof d.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",d.onUploadProgress),(d.cancelToken||d.signal)&&(v=function(ee){!y||(_(!ee||ee&&ee.type?new u:ee),y.abort(),y=null)},d.cancelToken&&d.cancelToken.subscribe(v),d.signal&&(d.signal.aborted?v():d.signal.addEventListener("abort",v))),S||(S=null);var V=c(I);if(V&&["http","https","file"].indexOf(V)===-1){_(new a("Unsupported protocol "+V+":",a.ERR_BAD_REQUEST,d));return}y.send(S)})},Ju}var Zu,Fg;function UO(){return Fg||(Fg=1,Zu=null),Zu}var me=Re,Ug=RO,$g=xi,$O=Zw,zO=eE,jO={"Content-Type":"application/x-www-form-urlencoded"};function zg(t,e){!me.isUndefined(t)&&me.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function BO(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Mg()),t}function WO(t,e,n){if(me.isString(t))try{return(e||JSON.parse)(t),me.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Ya={transitional:$O,adapter:BO(),transformRequest:[function(e,n){if(Ug(n,"Accept"),Ug(n,"Content-Type"),me.isFormData(e)||me.isArrayBuffer(e)||me.isBuffer(e)||me.isStream(e)||me.isFile(e)||me.isBlob(e))return e;if(me.isArrayBufferView(e))return e.buffer;if(me.isURLSearchParams(e))return zg(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=me.isObject(e),i=n&&n["Content-Type"],s;if((s=me.isFileList(e))||r&&i==="multipart/form-data"){var o=this.env&&this.env.FormData;return zO(s?{"files[]":e}:e,o&&new o)}else if(r||i==="application/json")return zg(n,"application/json"),WO(e);return e}],transformResponse:[function(e){var n=this.transitional||Ya.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,s=!r&&this.responseType==="json";if(s||i&&me.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?$g.from(o,$g.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:UO()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};me.forEach(["delete","get","head"],function(e){Ya.headers[e]={}});me.forEach(["post","put","patch"],function(e){Ya.headers[e]=me.merge(jO)});var Gh=Ya,HO=Re,VO=Gh,qO=function(e,n,r){var i=this||VO;return HO.forEach(r,function(o){e=o.call(i,e,n)}),e},ec,jg;function nE(){return jg||(jg=1,ec=function(e){return!!(e&&e.__CANCEL__)}),ec}var Bg=Re,tc=qO,GO=nE(),KO=Gh,QO=Qa();function nc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new QO}var YO=function(e){nc(e),e.headers=e.headers||{},e.data=tc.call(e,e.data,e.headers,e.transformRequest),e.headers=Bg.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Bg.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var n=e.adapter||KO.adapter;return n(e).then(function(i){return nc(e),i.data=tc.call(e,i.data,i.headers,e.transformResponse),i},function(i){return GO(i)||(nc(e),i&&i.response&&(i.response.data=tc.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},Xe=Re,rE=function(e,n){n=n||{};var r={};function i(c,f){return Xe.isPlainObject(c)&&Xe.isPlainObject(f)?Xe.merge(c,f):Xe.isPlainObject(f)?Xe.merge({},f):Xe.isArray(f)?f.slice():f}function s(c){if(Xe.isUndefined(n[c])){if(!Xe.isUndefined(e[c]))return i(void 0,e[c])}else return i(e[c],n[c])}function o(c){if(!Xe.isUndefined(n[c]))return i(void 0,n[c])}function l(c){if(Xe.isUndefined(n[c])){if(!Xe.isUndefined(e[c]))return i(void 0,e[c])}else return i(void 0,n[c])}function a(c){if(c in n)return i(e[c],n[c]);if(c in e)return i(void 0,e[c])}var u={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a};return Xe.forEach(Object.keys(e).concat(Object.keys(n)),function(f){var d=u[f]||s,p=d(f);Xe.isUndefined(p)&&d!==a||(r[f]=p)}),r},rc,Wg;function iE(){return Wg||(Wg=1,rc={version:"0.27.2"}),rc}var XO=iE().version,an=xi,Kh={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Kh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Hg={};Kh.transitional=function(e,n,r){function i(s,o){return"[Axios v"+XO+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return function(s,o,l){if(e===!1)throw new an(i(o," has been removed"+(n?" in "+n:"")),an.ERR_DEPRECATED);return n&&!Hg[o]&&(Hg[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function JO(t,e,n){if(typeof t!="object")throw new an("options must be an object",an.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),i=r.length;i-- >0;){var s=r[i],o=e[s];if(o){var l=t[s],a=l===void 0||o(l,s,t);if(a!==!0)throw new an("option "+s+" must be "+a,an.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new an("Unknown option "+s,an.ERR_BAD_OPTION)}}var ZO={assertOptions:JO,validators:Kh},sE=Re,eA=Qw,Vg=TO,qg=YO,Xa=rE,tA=tE,oE=ZO,xr=oE.validators;function _i(t){this.defaults=t,this.interceptors={request:new Vg,response:new Vg}}_i.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Xa(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&oE.assertOptions(r,{silentJSONParsing:xr.transitional(xr.boolean),forcedJSONParsing:xr.transitional(xr.boolean),clarifyTimeoutError:xr.transitional(xr.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(s=s&&p.synchronous,i.unshift(p.fulfilled,p.rejected))});var o=[];this.interceptors.response.forEach(function(p){o.push(p.fulfilled,p.rejected)});var l;if(!s){var a=[qg,void 0];for(Array.prototype.unshift.apply(a,i),a=a.concat(o),l=Promise.resolve(n);a.length;)l=l.then(a.shift(),a.shift());return l}for(var u=n;i.length;){var c=i.shift(),f=i.shift();try{u=c(u)}catch(d){f(d);break}}try{l=qg(u)}catch(d){return Promise.reject(d)}for(;o.length;)l=l.then(o.shift(),o.shift());return l};_i.prototype.getUri=function(e){e=Xa(this.defaults,e);var n=tA(e.baseURL,e.url);return eA(n,e.params,e.paramsSerializer)};sE.forEach(["delete","get","head","options"],function(e){_i.prototype[e]=function(n,r){return this.request(Xa(r||{},{method:e,url:n,data:(r||{}).data}))}});sE.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(Xa(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}_i.prototype[e]=n(),_i.prototype[e+"Form"]=n(!0)});var nA=_i,ic,Gg;function rA(){if(Gg)return ic;Gg=1;var t=Qa();function e(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var i=this;this.promise.then(function(s){if(!!i._listeners){var o,l=i._listeners.length;for(o=0;o<l;o++)i._listeners[o](s);i._listeners=null}}),this.promise.then=function(s){var o,l=new Promise(function(a){i.subscribe(a),o=a}).then(s);return l.cancel=function(){i.unsubscribe(o)},l},n(function(o){i.reason||(i.reason=new t(o),r(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},e.prototype.unsubscribe=function(r){if(!!this._listeners){var i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}},e.source=function(){var r,i=new e(function(o){r=o});return{token:i,cancel:r}},ic=e,ic}var sc,Kg;function iA(){return Kg||(Kg=1,sc=function(e){return function(r){return e.apply(null,r)}}),sc}var oc,Qg;function sA(){if(Qg)return oc;Qg=1;var t=Re;return oc=function(n){return t.isObject(n)&&n.isAxiosError===!0},oc}var Yg=Re,oA=qw,ol=nA,lA=rE,aA=Gh;function lE(t){var e=new ol(t),n=oA(ol.prototype.request,e);return Yg.extend(n,ol.prototype,e),Yg.extend(n,e),n.create=function(i){return lE(lA(t,i))},n}var Ye=lE(aA);Ye.Axios=ol;Ye.CanceledError=Qa();Ye.CancelToken=rA();Ye.isCancel=nE();Ye.VERSION=iE().version;Ye.toFormData=eE;Ye.AxiosError=xi;Ye.Cancel=Ye.CanceledError;Ye.all=function(e){return Promise.all(e)};Ye.spread=iA();Ye.isAxiosError=sA();jh.exports=Ye;jh.exports.default=Ye;(function(t){t.exports=jh.exports})(Vw);const Ws=Xg(Vw.exports),uA=()=>{const[t,e]=k.exports.useState(1),[n,r]=k.exports.useState(!0),[i,s]=k.exports.useState(!0),[o,l]=k.exports.useState({data:{},count:0}),[a,u]=k.exports.useState({left:!1,right:!1});k.exports.useEffect(()=>{async function g(){const S=(await Ws.get("http://localhost:3001/channels",{headers:{Authorization:localStorage.getItem("authToken")}})).data;S&&l({data:S,count:Object.keys(S).length})}g()},[]),k.exports.useEffect(()=>{const g=$P(JP,"remote");jP(g,_=>{const S=_.val();e(S.current),s(!1)}),s(!1)},[]),k.exports.useEffect(()=>{c()},[t,o]);const c=()=>{const g=o.count;if(g===0)return r(!1),u({left:!0,right:!0});if(r(!0),g===1)return u({left:!0,right:!0});switch(t){case 0:u({left:!0,right:!1});break;case o.count===1:u({left:!0,right:!0});break;case 1:u({left:!0,right:!1});break;case o.count:u({left:!1,right:!0});break;default:u({left:!1,right:!1});break}},f=()=>{t!==o.count&&p(t+1)},d=()=>{t!==0&&t!==1&&p(t-1)},p=g=>{Ws.post("http://localhost:3002/update",{data:g},{headers:{Authorization:localStorage.getItem("authToken")}})};return ye("div",{className:"mx-auto w-fit flex flex-col text-center items-center justify-center mt-4 border border-slate-300 px-6 py-4 rounded-md shadow-md",children:[ye("div",{className:"mb-6 flex flex-col gap-5 ",children:[R("p",{className:"font-bold text-2xl  ",children:"Current Channel"}),i?R("p",{className:"m-auto",children:R(ch,{})}):R("p",{className:"text-2xl font-bold ",children:n?t:"No Channels Found"})]}),ye("div",{className:"flex gap-4 w-52 mb-3 items-center justify-center",children:[ye(hr,{size:"md",...a.left?{disabled:!0}:{},className:"bg-indigo-700 text-2xl text-white  flex items-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed",onClick:()=>{d()},children:[R(tO,{}),R("span",{children:"Prev"})]}),ye(hr,{...a.right?{disabled:!0}:{},size:"md",className:"bg-indigo-700 text-2xl text-white  flex items-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed",onClick:()=>{f()},children:[R("span",{children:"Next"})," ",R(nO,{})]})]})]})},cA=()=>{let t=Xs();Uf();const[e,n]=k.exports.useState(""),[r,i]=k.exports.useState(""),[s,o]=k.exports.useState("");return k.exports.useState(!1),$f(a=>a.auth.isAuthenticated),R("div",{className:"max-w-screen-xl mx-auto flex justify-center",children:ye("form",{className:"px-2 py-4 max-w-md",onSubmit:async a=>{a.preventDefault();try{await Ws.post("http://localhost:3001/channels/new",{name:e,image:r},{headers:{Authorization:localStorage.getItem("authToken")}}),t("/channels")}catch(u){console.log(u)}},children:[R("h2",{className:"text-3xl font-medium pb-4 ",children:"New Channel"}),s&&ye("p",{className:"border border-red-400 bg-red-100 text-red-800 p-2 rounded-sm flex  justify-between",children:[s,R("span",{className:"font-bold cursor-pointer",onClick:()=>{o("")},children:"x"})]}),R(zl,{value:e,onChange:a=>n(a.target.value),placeholder:"Channel Name",type:"text",required:!0}),R(zl,{value:r,onChange:a=>i(a.target.value),placeholder:"Channel image path (/images/{name})",type:"text",required:!0}),R(hr,{className:"border-slate-800 bg-slate-800 text-white",children:"Add New"})]})})},dA=()=>{const[t,e]=k.exports.useState({});k.exports.useEffect(()=>{async function i(){try{const o=(await Ws.get("http://localhost:3001/channels",{headers:{Authorization:localStorage.getItem("authToken")}})).data;o&&e(o)}catch(s){console.log(s),alert("Server Error")}}i()},[]);const n=async i=>{try{(await Ws.delete(`http://localhost:3001/channel/${i}`,{headers:{Authorization:localStorage.getItem("authToken")}})).status===200&&e(o=>{var l={...o};return delete l[i],l})}catch(s){console.log(s),alert("Server Error")}};var r=0;return R("div",{className:" max-w-screen-xl mx-auto mt-2 ",children:Object.keys(t).length!==0?ye("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[R("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:ye("tr",{children:[R("th",{scope:"col",className:"py-3 px-6",children:"channel number"}),R("th",{scope:"col",className:"py-3 px-6",children:"name"}),R("th",{scope:"col",className:"py-3 px-6",children:"image-src"}),R("th",{scope:"col",className:"py-3 px-6",children:"#"})]})}),R("tbody",{children:Object.keys(t).map(i=>(r++,ye("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[R("th",{scope:"row",className:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:r}),R("td",{className:"py-4 px-6",children:t[i].name}),R("td",{className:"py-4 px-6",children:t[i].image}),R("td",{className:"py-4 px-6",children:R(hr,{variant:"sm",className:" border-red-800 text-red-900 hover:bg-red-100 transition-colors font-semibold",onClick:()=>{n(i)},children:"Delete"})})]},i)))})]}):R("p",{className:"text-2xl font-semibold text-center",children:"No Channels Found"})})},fA=()=>!!localStorage.getItem("authToken"),lc=t=>fA()?R(ZC,{}):R(JC,{to:"/login"}),hA=()=>{let t=Xs();const e=Uf(),n=$f(o=>o.auth.isAuthenticated);k.exports.useEffect(()=>{const o=localStorage.getItem("authToken");o?e(vd.login(o)):t("/login")},[]);const r=()=>{const o=nh();o0(o).then(()=>{localStorage.removeItem("authToken"),e(vd.logout())}).catch(l=>{console.log(l)})};let i="font-bold px-3 py-2 border-slate-800 bg-slate-800 text-white rounded-md";const s=" px-3 py-2 ";return ye("div",{children:[n&&ye("nav",{className:" border-b shadow-md px-2 py-4 flex items-center justify-between",children:[ye("ul",{className:"flex gap-4 max-w-screen-xl ",children:[R("li",{children:R(ku,{to:"",className:({isActive:o})=>o?i:s,children:"Home"})}),R("li",{children:R(ku,{to:"new-channel",className:({isActive:o})=>o?i:void 0,children:"New Channel"})}),R("li",{children:R(ku,{to:"channels",className:({isActive:o})=>o?i:void 0,children:"Channels"})})]}),R(hr,{onClick:r,variant:"sm",className:"border-red-600 text-red-800  font-semibold",children:"Logout"})]}),ye(t1,{children:[R(sn,{path:"/login",element:R(zR,{})}),R(sn,{path:"/",element:R(lc,{}),children:R(sn,{path:"/",element:R(uA,{})})}),R(sn,{path:"/channels",element:R(lc,{}),children:R(sn,{path:"/channels",element:R(dA,{})})}),R(sn,{path:"new-channel",element:R(lc,{}),children:R(sn,{path:"/new-channel",element:R(cA,{})})})]})]})};const pA=bR({reducer:{auth:$R}});ac.createRoot(document.getElementById("root")).render(R(us.StrictMode,{children:R(S1,{store:pA,children:R(i1,{children:R(hA,{})})})}));
