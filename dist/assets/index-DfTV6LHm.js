var i0=Object.defineProperty;var r0=(r,e,t)=>e in r?i0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s0=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var $o=(r,e,t)=>r0(r,typeof e!="symbol"?e+"":e,t);var QT=s0(Qr=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Zc={exports:{}},Ko={},$c={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function o0(){if(mm)return vt;mm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(O,ee,Oe){this.props=O,this.context=ee,this.refs=T,this.updater=Oe||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function b(O,ee,Oe){this.props=O,this.context=ee,this.refs=T,this.updater=Oe||y}var R=b.prototype=new v;R.constructor=b,M(R,S.prototype),R.isPureReactComponent=!0;var A=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function H(O,ee,Oe){var J,fe={},Ee=null,me=null;if(ee!=null)for(J in ee.ref!==void 0&&(me=ee.ref),ee.key!==void 0&&(Ee=""+ee.key),ee)z.call(ee,J)&&!U.hasOwnProperty(J)&&(fe[J]=ee[J]);var Pe=arguments.length-2;if(Pe===1)fe.children=Oe;else if(1<Pe){for(var ze=Array(Pe),$e=0;$e<Pe;$e++)ze[$e]=arguments[$e+2];fe.children=ze}if(O&&O.defaultProps)for(J in Pe=O.defaultProps,Pe)fe[J]===void 0&&(fe[J]=Pe[J]);return{$$typeof:r,type:O,key:Ee,ref:me,props:fe,_owner:F.current}}function L(O,ee){return{$$typeof:r,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return ee[Oe]})}var oe=/\/+/g;function K(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):ee.toString(36)}function ae(O,ee,Oe,J,fe){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(Ee){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case r:case e:me=!0}}if(me)return me=O,fe=fe(me),O=J===""?"."+K(me,0):J,A(fe)?(Oe="",O!=null&&(Oe=O.replace(oe,"$&/")+"/"),ae(fe,ee,Oe,"",function($e){return $e})):fe!=null&&(C(fe)&&(fe=L(fe,Oe+(!fe.key||me&&me.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+O)),ee.push(fe)),1;if(me=0,J=J===""?".":J+":",A(O))for(var Pe=0;Pe<O.length;Pe++){Ee=O[Pe];var ze=J+K(Ee,Pe);me+=ae(Ee,ee,Oe,ze,fe)}else if(ze=x(O),typeof ze=="function")for(O=ze.call(O),Pe=0;!(Ee=O.next()).done;)Ee=Ee.value,ze=J+K(Ee,Pe++),me+=ae(Ee,ee,Oe,ze,fe);else if(Ee==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return me}function ce(O,ee,Oe){if(O==null)return O;var J=[],fe=0;return ae(O,J,"","",function(Ee){return ee.call(Oe,Ee,fe++)}),J}function ie(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var ue={current:null},V={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ce,forEach:function(O,ee,Oe){ce(O,function(){ee.apply(this,arguments)},Oe)},count:function(O){var ee=0;return ce(O,function(){ee++}),ee},toArray:function(O){return ce(O,function(ee){return ee})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=b,vt.StrictMode=s,vt.Suspense=f,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,vt.act=re,vt.cloneElement=function(O,ee,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=M({},O.props),fe=O.key,Ee=O.ref,me=O._owner;if(ee!=null){if(ee.ref!==void 0&&(Ee=ee.ref,me=F.current),ee.key!==void 0&&(fe=""+ee.key),O.type&&O.type.defaultProps)var Pe=O.type.defaultProps;for(ze in ee)z.call(ee,ze)&&!U.hasOwnProperty(ze)&&(J[ze]=ee[ze]===void 0&&Pe!==void 0?Pe[ze]:ee[ze])}var ze=arguments.length-2;if(ze===1)J.children=Oe;else if(1<ze){Pe=Array(ze);for(var $e=0;$e<ze;$e++)Pe[$e]=arguments[$e+2];J.children=Pe}return{$$typeof:r,type:O.type,key:fe,ref:Ee,props:J,_owner:me}},vt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},vt.createElement=H,vt.createFactory=function(O){var ee=H.bind(null,O);return ee.type=O,ee},vt.createRef=function(){return{current:null}},vt.forwardRef=function(O){return{$$typeof:h,render:O}},vt.isValidElement=C,vt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:ie}},vt.memo=function(O,ee){return{$$typeof:p,type:O,compare:ee===void 0?null:ee}},vt.startTransition=function(O){var ee=V.transition;V.transition={};try{O()}finally{V.transition=ee}},vt.unstable_act=re,vt.useCallback=function(O,ee){return ue.current.useCallback(O,ee)},vt.useContext=function(O){return ue.current.useContext(O)},vt.useDebugValue=function(){},vt.useDeferredValue=function(O){return ue.current.useDeferredValue(O)},vt.useEffect=function(O,ee){return ue.current.useEffect(O,ee)},vt.useId=function(){return ue.current.useId()},vt.useImperativeHandle=function(O,ee,Oe){return ue.current.useImperativeHandle(O,ee,Oe)},vt.useInsertionEffect=function(O,ee){return ue.current.useInsertionEffect(O,ee)},vt.useLayoutEffect=function(O,ee){return ue.current.useLayoutEffect(O,ee)},vt.useMemo=function(O,ee){return ue.current.useMemo(O,ee)},vt.useReducer=function(O,ee,Oe){return ue.current.useReducer(O,ee,Oe)},vt.useRef=function(O){return ue.current.useRef(O)},vt.useState=function(O){return ue.current.useState(O)},vt.useSyncExternalStore=function(O,ee,Oe){return ue.current.useSyncExternalStore(O,ee,Oe)},vt.useTransition=function(){return ue.current.useTransition()},vt.version="18.3.1",vt}var gm;function bf(){return gm||(gm=1,$c.exports=o0()),$c.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function a0(){if(_m)return Ko;_m=1;var r=bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,p){var m,_={},x=null,y=null;p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(_[m]=f[m]);if(h&&h.defaultProps)for(m in f=h.defaultProps,f)_[m]===void 0&&(_[m]=f[m]);return{$$typeof:e,type:h,key:x,ref:y,props:_,_owner:o.current}}return Ko.Fragment=t,Ko.jsx=c,Ko.jsxs=c,Ko}var vm;function l0(){return vm||(vm=1,Zc.exports=a0()),Zc.exports}var xi=l0(),Zr=bf(),Tl={},Kc={exports:{}},Dn={},Jc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function u0(){return xm||(xm=1,function(r){function e(V,le){var re=V.length;V.push(le);e:for(;0<re;){var O=re-1>>>1,ee=V[O];if(0<o(ee,le))V[O]=le,V[re]=ee,re=O;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var le=V[0],re=V.pop();if(re!==le){V[0]=re;e:for(var O=0,ee=V.length,Oe=ee>>>1;O<Oe;){var J=2*(O+1)-1,fe=V[J],Ee=J+1,me=V[Ee];if(0>o(fe,re))Ee<ee&&0>o(me,fe)?(V[O]=me,V[Ee]=re,O=Ee):(V[O]=fe,V[J]=re,O=J);else if(Ee<ee&&0>o(me,re))V[O]=me,V[Ee]=re,O=Ee;else break e}}return le}function o(V,le){var re=V.sortIndex-le.sortIndex;return re!==0?re:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var f=[],p=[],m=1,_=null,x=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(V){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=V)s(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(p)}}function A(V){if(T=!1,R(V),!M)if(t(f)!==null)M=!0,ie(z);else{var le=t(p);le!==null&&ue(A,le.startTime-V)}}function z(V,le){M=!1,T&&(T=!1,v(H),H=-1),y=!0;var re=x;try{for(R(le),_=t(f);_!==null&&(!(_.expirationTime>le)||V&&!k());){var O=_.callback;if(typeof O=="function"){_.callback=null,x=_.priorityLevel;var ee=O(_.expirationTime<=le);le=r.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(f)&&s(f),R(le)}else s(f);_=t(f)}if(_!==null)var Oe=!0;else{var J=t(p);J!==null&&ue(A,J.startTime-le),Oe=!1}return Oe}finally{_=null,x=re,y=!1}}var F=!1,U=null,H=-1,L=5,C=-1;function k(){return!(r.unstable_now()-C<L)}function oe(){if(U!==null){var V=r.unstable_now();C=V;var le=!0;try{le=U(!0,V)}finally{le?K():(F=!1,U=null)}}else F=!1}var K;if(typeof b=="function")K=function(){b(oe)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=oe,K=function(){ce.postMessage(null)}}else K=function(){S(oe,0)};function ie(V){U=V,F||(F=!0,K())}function ue(V,le){H=S(function(){V(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,ie(z))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(V){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var re=x;x=le;try{return V()}finally{x=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var re=x;x=V;try{return le()}finally{x=re}},r.unstable_scheduleCallback=function(V,le,re){var O=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=re+ee,V={id:m++,callback:le,priorityLevel:V,startTime:re,expirationTime:ee,sortIndex:-1},re>O?(V.sortIndex=re,e(p,V),t(f)===null&&V===t(p)&&(T?(v(H),H=-1):T=!0,ue(A,re-O))):(V.sortIndex=ee,e(f,V),M||y||(M=!0,ie(z))),V},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(V){var le=x;return function(){var re=x;x=le;try{return V.apply(this,arguments)}finally{x=re}}}}(Qc)),Qc}var ym;function c0(){return ym||(ym=1,Jc.exports=u0()),Jc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function h0(){if(Sm)return Dn;Sm=1;var r=bf(),e=c0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function x(n){return f.call(_,n)?!0:f.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,d,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,b);S[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,b);S[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,b);S[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function ee(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Oe=!1;function J(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var u=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){u=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){u=Q}n()}}catch(Q){if(Q&&u&&typeof Q.stack=="string"){for(var d=Q.stack.split(`
`),g=u.stack.split(`
`),E=d.length-1,N=g.length-1;1<=E&&0<=N&&d[E]!==g[N];)N--;for(;1<=E&&0<=N;E--,N--)if(d[E]!==g[N]){if(E!==1||N!==1)do if(E--,N--,0>N||d[E]!==g[N]){var B=`
`+d[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=N);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function fe(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case L:return"Profiler";case H:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function gt(n){n._valueTracker||(n._valueTracker=$e(n))}function ge(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function we(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function I(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ke(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Se(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Be(n,i){Se(n,i);var a=Pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&tt(n,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ce(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function tt(n,i,a){(i!=="number"||we(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ie=Array.isArray;function D(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ie(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Pe(a)}}function he(n,i){var a=Pe(i.value),u=Pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,He=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Xe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function nt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function st(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=nt(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ye=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,i){if(i){if(Ye[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ut(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,se=null,pe=null;function Fe(n){if(n=Uo(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=za(i),Le(n.stateNode,n.type,i))}}function Ue(n){se?pe?pe.push(n):pe=[n]:se=n}function ct(){if(se){var n=se,i=pe;if(pe=se=null,Fe(n),i)for(n=0;n<i.length;n++)Fe(i[n])}}function Ft(n,i){return n(i)}function $t(){}var Et=!1;function An(n,i,a){if(Et)return n(i,a);Et=!0;try{return Ft(n,i,a)}finally{Et=!1,(se!==null||pe!==null)&&($t(),ct())}}function xn(n,i){var a=n.stateNode;if(a===null)return null;var u=za(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var hs=!1;if(h)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){hs=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{hs=!1}function Ai(n,i,a,u,d,g,E,N,B){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(a,Q)}catch(xe){this.onError(xe)}}var Ci=!1,Cr=null,Rr=!1,Zi=null,va={onError:function(n){Ci=!0,Cr=n}};function fs(n,i,a,u,d,g,E,N,B){Ci=!1,Cr=null,Ai.apply(va,arguments)}function xa(n,i,a,u,d,g,E,N,B){if(fs.apply(this,arguments),Ci){if(Ci){var Q=Cr;Ci=!1,Cr=null}else throw Error(t(198));Rr||(Rr=!0,Zi=Q)}}function pi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ya(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Sa(n){if(pi(n)!==n)throw Error(t(188))}function vu(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Sa(d),n;if(g===u)return Sa(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=g;else{for(var E=!1,N=d.child;N;){if(N===a){E=!0,a=d,u=g;break}if(N===u){E=!0,u=d,a=g;break}N=N.sibling}if(!E){for(N=g.child;N;){if(N===a){E=!0,a=g,u=d;break}if(N===u){E=!0,u=g,a=d;break}N=N.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ma(n){return n=vu(n),n!==null?Ea(n):null}function Ea(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ea(n);if(i!==null)return i;n=n.sibling}return null}var P=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,W=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,De=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,ot=e.unstable_LowPriority,at=e.unstable_IdlePriority,Qe=null,ht=null;function wt(n){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:et,zt=Math.log,Mt=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(zt(n)/Mt|0)|0}var Wt=64,yt=4194304;function an(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ti(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,E=a&268435455;if(E!==0){var N=E&~d;N!==0?u=an(N):(g&=E,g!==0&&(u=an(g)))}else E=a&~d,E!==0?u=an(E):g!==0&&(u=an(g));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(u&4&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-At(i),d=1<<a,u|=n[a],i&=~d;return u}function yn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-At(g),N=1<<E,B=d[E];B===-1?(!(N&a)||N&u)&&(d[E]=yn(N,i)):B<=i&&(n.expiredLanes|=N),g&=~N}}function bt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=Wt;return Wt<<=1,!(Wt&4194240)&&(Wt=64),n}function cn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-At(i),n[i]=a}function hn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-At(a),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~g}}function br(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-At(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var xt=0;function jf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var qf,xu,Zf,$f,Kf,yu=!1,Ta=[],$i=null,Ki=null,Ji=null,xo=new Map,yo=new Map,Qi=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(i.pointerId)}}function So(n,i,a,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Uo(i),i!==null&&xu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function C_(n,i,a,u,d){switch(i){case"focusin":return $i=So($i,n,i,a,u,d),!0;case"dragenter":return Ki=So(Ki,n,i,a,u,d),!0;case"mouseover":return Ji=So(Ji,n,i,a,u,d),!0;case"pointerover":var g=d.pointerId;return xo.set(g,So(xo.get(g)||null,n,i,a,u,d)),!0;case"gotpointercapture":return g=d.pointerId,yo.set(g,So(yo.get(g)||null,n,i,a,u,d)),!0}return!1}function Qf(n){var i=Lr(n.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=ya(a),i!==null){n.blockedOn=i,Kf(n.priority,function(){Zf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Pt=u,a.target.dispatchEvent(u),Pt=null}else return i=Uo(a),i!==null&&xu(i),n.blockedOn=a,!1;i.shift()}return!0}function ed(n,i,a){wa(n)&&a.delete(i)}function R_(){yu=!1,$i!==null&&wa($i)&&($i=null),Ki!==null&&wa(Ki)&&(Ki=null),Ji!==null&&wa(Ji)&&(Ji=null),xo.forEach(ed),yo.forEach(ed)}function Mo(n,i){n.blockedOn===i&&(n.blockedOn=null,yu||(yu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,R_)))}function Eo(n){function i(d){return Mo(d,n)}if(0<Ta.length){Mo(Ta[0],n);for(var a=1;a<Ta.length;a++){var u=Ta[a];u.blockedOn===n&&(u.blockedOn=null)}}for($i!==null&&Mo($i,n),Ki!==null&&Mo(Ki,n),Ji!==null&&Mo(Ji,n),xo.forEach(i),yo.forEach(i),a=0;a<Qi.length;a++)u=Qi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Qf(a),a.blockedOn===null&&Qi.shift()}var ds=A.ReactCurrentBatchConfig,Aa=!0;function P_(n,i,a,u){var d=xt,g=ds.transition;ds.transition=null;try{xt=1,Su(n,i,a,u)}finally{xt=d,ds.transition=g}}function b_(n,i,a,u){var d=xt,g=ds.transition;ds.transition=null;try{xt=4,Su(n,i,a,u)}finally{xt=d,ds.transition=g}}function Su(n,i,a,u){if(Aa){var d=Mu(n,i,a,u);if(d===null)zu(n,i,u,Ca,a),Jf(n,u);else if(C_(d,n,i,a,u))u.stopPropagation();else if(Jf(n,u),i&4&&-1<A_.indexOf(n)){for(;d!==null;){var g=Uo(d);if(g!==null&&qf(g),g=Mu(n,i,a,u),g===null&&zu(n,i,u,Ca,a),g===d)break;d=g}d!==null&&u.stopPropagation()}else zu(n,i,u,null,a)}}var Ca=null;function Mu(n,i,a,u){if(Ca=null,n=Y(u),n=Lr(n),n!==null)if(i=pi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ya(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ca=n,null}function td(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case De:return 1;case Ve:return 4;case Ge:case ot:return 16;case at:return 536870912;default:return 16}default:return 16}}var er=null,Eu=null,Ra=null;function nd(){if(Ra)return Ra;var n,i=Eu,a=i.length,u,d="value"in er?er.value:er.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===d[g-u];u++);return Ra=d.slice(n,1<u?1-u:void 0)}function Pa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ba(){return!0}function id(){return!1}function kn(n){function i(a,u,d,g,E){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ba:id,this.isPropagationStopped=id,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=kn(ps),To=re({},ps,{view:0,detail:0}),L_=kn(To),wu,Au,wo,La=re({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(wu=n.screenX-wo.screenX,Au=n.screenY-wo.screenY):Au=wu=0,wo=n),wu)},movementY:function(n){return"movementY"in n?n.movementY:Au}}),rd=kn(La),D_=re({},La,{dataTransfer:0}),I_=kn(D_),N_=re({},To,{relatedTarget:0}),Cu=kn(N_),U_=re({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=kn(U_),O_=re({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),k_=kn(O_),z_=re({},ps,{data:0}),sd=kn(z_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=V_[n])?!!i[n]:!1}function Ru(){return G_}var W_=re({},To,{key:function(n){if(n.key){var i=B_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Pa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(n){return n.type==="keypress"?Pa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),X_=kn(W_),Y_=re({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=kn(Y_),j_=re({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),q_=kn(j_),Z_=re({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=kn(Z_),K_=re({},La,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),J_=kn(K_),Q_=[9,13,27,32],Pu=h&&"CompositionEvent"in window,Ao=null;h&&"documentMode"in document&&(Ao=document.documentMode);var ev=h&&"TextEvent"in window&&!Ao,ad=h&&(!Pu||Ao&&8<Ao&&11>=Ao),ld=" ",ud=!1;function cd(n,i){switch(n){case"keyup":return Q_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function tv(n,i){switch(n){case"compositionend":return hd(i);case"keypress":return i.which!==32?null:(ud=!0,ld);case"textInput":return n=i.data,n===ld&&ud?null:n;default:return null}}function nv(n,i){if(ms)return n==="compositionend"||!Pu&&cd(n,i)?(n=nd(),Ra=Eu=er=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!iv[n.type]:i==="textarea"}function dd(n,i,a,u){Ue(u),i=Fa(i,"onChange"),0<i.length&&(a=new Tu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Co=null,Ro=null;function rv(n){Ld(n,0)}function Da(n){var i=ys(n);if(ge(i))return n}function sv(n,i){if(n==="change")return i}var pd=!1;if(h){var bu;if(h){var Lu="oninput"in document;if(!Lu){var md=document.createElement("div");md.setAttribute("oninput","return;"),Lu=typeof md.oninput=="function"}bu=Lu}else bu=!1;pd=bu&&(!document.documentMode||9<document.documentMode)}function gd(){Co&&(Co.detachEvent("onpropertychange",_d),Ro=Co=null)}function _d(n){if(n.propertyName==="value"&&Da(Ro)){var i=[];dd(i,Ro,n,Y(n)),An(rv,i)}}function ov(n,i,a){n==="focusin"?(gd(),Co=i,Ro=a,Co.attachEvent("onpropertychange",_d)):n==="focusout"&&gd()}function av(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Da(Ro)}function lv(n,i){if(n==="click")return Da(i)}function uv(n,i){if(n==="input"||n==="change")return Da(i)}function cv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:cv;function Po(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!f.call(i,d)||!ni(n[d],i[d]))return!1}return!0}function vd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xd(n,i){var a=vd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vd(a)}}function yd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var n=window,i=we();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=we(n.document)}return i}function Du(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hv(n){var i=Sd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yd(a.ownerDocument.documentElement,a)){if(u!==null&&Du(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=xd(a,g);var E=xd(a,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fv=h&&"documentMode"in document&&11>=document.documentMode,gs=null,Iu=null,bo=null,Nu=!1;function Md(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||gs==null||gs!==we(u)||(u=gs,"selectionStart"in u&&Du(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),bo&&Po(bo,u)||(bo=u,u=Fa(Iu,"onSelect"),0<u.length&&(i=new Tu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=gs)))}function Ia(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},Uu={},Ed={};h&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Na(n){if(Uu[n])return Uu[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ed)return Uu[n]=i[a];return n}var Td=Na("animationend"),wd=Na("animationiteration"),Ad=Na("animationstart"),Cd=Na("transitionend"),Rd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){Rd.set(n,i),l(i,[n])}for(var Fu=0;Fu<Pd.length;Fu++){var Ou=Pd[Fu],dv=Ou.toLowerCase(),pv=Ou[0].toUpperCase()+Ou.slice(1);tr(dv,"on"+pv)}tr(Td,"onAnimationEnd"),tr(wd,"onAnimationIteration"),tr(Ad,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Cd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function bd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,xa(u,i,void 0,n),n.currentTarget=null}function Ld(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],B=N.instance,Q=N.currentTarget;if(N=N.listener,B!==g&&d.isPropagationStopped())break e;bd(d,N,Q),g=B}else for(E=0;E<u.length;E++){if(N=u[E],B=N.instance,Q=N.currentTarget,N=N.listener,B!==g&&d.isPropagationStopped())break e;bd(d,N,Q),g=B}}}if(Rr)throw n=Zi,Rr=!1,Zi=null,n}function Ot(n,i){var a=i[Xu];a===void 0&&(a=i[Xu]=new Set);var u=n+"__bubble";a.has(u)||(Dd(i,n,2,!1),a.add(u))}function ku(n,i,a){var u=0;i&&(u|=4),Dd(a,n,u,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Do(n){if(!n[Ua]){n[Ua]=!0,s.forEach(function(a){a!=="selectionchange"&&(mv.has(a)||ku(a,!1,n),ku(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,ku("selectionchange",!1,i))}}function Dd(n,i,a,u){switch(td(i)){case 1:var d=P_;break;case 4:d=b_;break;default:d=Su}a=d.bind(null,i,a,n),d=void 0,!hs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function zu(n,i,a,u,d){var g=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;N!==null;){if(E=Lr(N),E===null)return;if(B=E.tag,B===5||B===6){u=g=E;continue e}N=N.parentNode}}u=u.return}An(function(){var Q=g,xe=Y(a),ye=[];e:{var ve=Rd.get(n);if(ve!==void 0){var ke=Tu,je=n;switch(n){case"keypress":if(Pa(a)===0)break e;case"keydown":case"keyup":ke=X_;break;case"focusin":je="focus",ke=Cu;break;case"focusout":je="blur",ke=Cu;break;case"beforeblur":case"afterblur":ke=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=q_;break;case Td:case wd:case Ad:ke=F_;break;case Cd:ke=$_;break;case"scroll":ke=L_;break;case"wheel":ke=J_;break;case"copy":case"cut":case"paste":ke=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=od}var Ze=(i&4)!==0,jt=!Ze&&n==="scroll",q=Ze?ve!==null?ve+"Capture":null:ve;Ze=[];for(var X=Q,$;X!==null;){$=X;var Ae=$.stateNode;if($.tag===5&&Ae!==null&&($=Ae,q!==null&&(Ae=xn(X,q),Ae!=null&&Ze.push(Io(X,Ae,$)))),jt)break;X=X.return}0<Ze.length&&(ve=new ke(ve,je,null,a,xe),ye.push({event:ve,listeners:Ze}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ve&&a!==Pt&&(je=a.relatedTarget||a.fromElement)&&(Lr(je)||je[Ri]))break e;if((ke||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(je=a.relatedTarget||a.toElement,ke=Q,je=je?Lr(je):null,je!==null&&(jt=pi(je),je!==jt||je.tag!==5&&je.tag!==6)&&(je=null)):(ke=null,je=Q),ke!==je)){if(Ze=rd,Ae="onMouseLeave",q="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=od,Ae="onPointerLeave",q="onPointerEnter",X="pointer"),jt=ke==null?ve:ys(ke),$=je==null?ve:ys(je),ve=new Ze(Ae,X+"leave",ke,a,xe),ve.target=jt,ve.relatedTarget=$,Ae=null,Lr(xe)===Q&&(Ze=new Ze(q,X+"enter",je,a,xe),Ze.target=$,Ze.relatedTarget=jt,Ae=Ze),jt=Ae,ke&&je)t:{for(Ze=ke,q=je,X=0,$=Ze;$;$=vs($))X++;for($=0,Ae=q;Ae;Ae=vs(Ae))$++;for(;0<X-$;)Ze=vs(Ze),X--;for(;0<$-X;)q=vs(q),$--;for(;X--;){if(Ze===q||q!==null&&Ze===q.alternate)break t;Ze=vs(Ze),q=vs(q)}Ze=null}else Ze=null;ke!==null&&Id(ye,ve,ke,Ze,!1),je!==null&&jt!==null&&Id(ye,jt,je,Ze,!0)}}e:{if(ve=Q?ys(Q):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var Je=sv;else if(fd(ve))if(pd)Je=uv;else{Je=av;var it=ov}else(ke=ve.nodeName)&&ke.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=lv);if(Je&&(Je=Je(n,Q))){dd(ye,Je,a,xe);break e}it&&it(n,ve,Q),n==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&tt(ve,"number",ve.value)}switch(it=Q?ys(Q):window,n){case"focusin":(fd(it)||it.contentEditable==="true")&&(gs=it,Iu=Q,bo=null);break;case"focusout":bo=Iu=gs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Md(ye,a,xe);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Md(ye,a,xe)}var rt;if(Pu)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ms?cd(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(ad&&a.locale!=="ko"&&(ms||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ms&&(rt=nd()):(er=xe,Eu="value"in er?er.value:er.textContent,ms=!0)),it=Fa(Q,lt),0<it.length&&(lt=new sd(lt,n,null,a,xe),ye.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=hd(a),rt!==null&&(lt.data=rt)))),(rt=ev?tv(n,a):nv(n,a))&&(Q=Fa(Q,"onBeforeInput"),0<Q.length&&(xe=new sd("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:Q}),xe.data=rt))}Ld(ye,i)})}function Io(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fa(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=xn(n,a),g!=null&&u.unshift(Io(n,g,d)),g=xn(n,i),g!=null&&u.push(Io(n,g,d))),n=n.return}return u}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Id(n,i,a,u,d){for(var g=i._reactName,E=[];a!==null&&a!==u;){var N=a,B=N.alternate,Q=N.stateNode;if(B!==null&&B===u)break;N.tag===5&&Q!==null&&(N=Q,d?(B=xn(a,g),B!=null&&E.unshift(Io(a,B,N))):d||(B=xn(a,g),B!=null&&E.push(Io(a,B,N)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var gv=/\r\n?/g,_v=/\u0000|\uFFFD/g;function Nd(n){return(typeof n=="string"?n:""+n).replace(gv,`
`).replace(_v,"")}function Oa(n,i,a){if(i=Nd(i),Nd(n)!==i&&a)throw Error(t(425))}function ka(){}var Bu=null,Hu=null;function Vu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(n){return Ud.resolve(null).then(n).catch(yv)}:Gu;function yv(n){setTimeout(function(){throw n})}function Wu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),Eo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);Eo(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),mi="__reactFiber$"+xs,No="__reactProps$"+xs,Ri="__reactContainer$"+xs,Xu="__reactEvents$"+xs,Sv="__reactListeners$"+xs,Mv="__reactHandles$"+xs;function Lr(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ri]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fd(n);n!==null;){if(a=n[mi])return a;n=Fd(n)}return i}n=a,a=n.parentNode}return null}function Uo(n){return n=n[mi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function za(n){return n[No]||null}var Yu=[],Ss=-1;function ir(n){return{current:n}}function kt(n){0>Ss||(n.current=Yu[Ss],Yu[Ss]=null,Ss--)}function Nt(n,i){Ss++,Yu[Ss]=n.current,n.current=i}var rr={},fn=ir(rr),Cn=ir(!1),Dr=rr;function Ms(n,i){var a=n.type.contextTypes;if(!a)return rr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Ba(){kt(Cn),kt(fn)}function Od(n,i,a){if(fn.current!==rr)throw Error(t(168));Nt(fn,i),Nt(Cn,a)}function kd(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,me(n)||"Unknown",d));return re({},a,u)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Dr=fn.current,Nt(fn,n),Nt(Cn,Cn.current),!0}function zd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=kd(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,kt(Cn),kt(fn),Nt(fn,n)):kt(Cn),Nt(Cn,a)}var Pi=null,Va=!1,ju=!1;function Bd(n){Pi===null?Pi=[n]:Pi.push(n)}function Ev(n){Va=!0,Bd(n)}function sr(){if(!ju&&Pi!==null){ju=!0;var n=0,i=xt;try{var a=Pi;for(xt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Pi=null,Va=!1}catch(d){throw Pi!==null&&(Pi=Pi.slice(n+1)),P(De,sr),d}finally{xt=i,ju=!1}}return null}var Es=[],Ts=0,Ga=null,Wa=0,jn=[],qn=0,Ir=null,bi=1,Li="";function Nr(n,i){Es[Ts++]=Wa,Es[Ts++]=Ga,Ga=n,Wa=i}function Hd(n,i,a){jn[qn++]=bi,jn[qn++]=Li,jn[qn++]=Ir,Ir=n;var u=bi;n=Li;var d=32-At(u)-1;u&=~(1<<d),a+=1;var g=32-At(i)+d;if(30<g){var E=d-d%5;g=(u&(1<<E)-1).toString(32),u>>=E,d-=E,bi=1<<32-At(i)+d|a<<d|u,Li=g+n}else bi=1<<g|a<<d|u,Li=n}function qu(n){n.return!==null&&(Nr(n,1),Hd(n,1,0))}function Zu(n){for(;n===Ga;)Ga=Es[--Ts],Es[Ts]=null,Wa=Es[--Ts],Es[Ts]=null;for(;n===Ir;)Ir=jn[--qn],jn[qn]=null,Li=jn[--qn],jn[qn]=null,bi=jn[--qn],jn[qn]=null}var zn=null,Bn=null,Bt=!1,ii=null;function Vd(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gd(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:bi,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Bn=null,!0):!1;default:return!1}}function $u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ku(n){if(Bt){var i=Bn;if(i){var a=i;if(!Gd(n,i)){if($u(n))throw Error(t(418));i=nr(a.nextSibling);var u=zn;i&&Gd(n,i)?Vd(u,a):(n.flags=n.flags&-4097|2,Bt=!1,zn=n)}}else{if($u(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,zn=n}}}function Wd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Xa(n){if(n!==zn)return!1;if(!Bt)return Wd(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Vu(n.type,n.memoizedProps)),i&&(i=Bn)){if($u(n))throw Xd(),Error(t(418));for(;i;)Vd(n,i),i=nr(i.nextSibling)}if(Wd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=nr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?nr(n.stateNode.nextSibling):null;return!0}function Xd(){for(var n=Bn;n;)n=nr(n.nextSibling)}function ws(){Bn=zn=null,Bt=!1}function Ju(n){ii===null?ii=[n]:ii.push(n)}var Tv=A.ReactCurrentBatchConfig;function Fo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var N=d.refs;E===null?delete N[g]:N[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ya(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yd(n){var i=n._init;return i(n._payload)}function jd(n){function i(q,X){if(n){var $=q.deletions;$===null?(q.deletions=[X],q.flags|=16):$.push(X)}}function a(q,X){if(!n)return null;for(;X!==null;)i(q,X),X=X.sibling;return null}function u(q,X){for(q=new Map;X!==null;)X.key!==null?q.set(X.key,X):q.set(X.index,X),X=X.sibling;return q}function d(q,X){return q=dr(q,X),q.index=0,q.sibling=null,q}function g(q,X,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<X?(q.flags|=2,X):$):(q.flags|=2,X)):(q.flags|=1048576,X)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,X,$,Ae){return X===null||X.tag!==6?(X=Gc($,q.mode,Ae),X.return=q,X):(X=d(X,$),X.return=q,X)}function B(q,X,$,Ae){var Je=$.type;return Je===U?xe(q,X,$.props.children,Ae,$.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ie&&Yd(Je)===X.type)?(Ae=d(X,$.props),Ae.ref=Fo(q,X,$),Ae.return=q,Ae):(Ae=gl($.type,$.key,$.props,null,q.mode,Ae),Ae.ref=Fo(q,X,$),Ae.return=q,Ae)}function Q(q,X,$,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Wc($,q.mode,Ae),X.return=q,X):(X=d(X,$.children||[]),X.return=q,X)}function xe(q,X,$,Ae,Je){return X===null||X.tag!==7?(X=Vr($,q.mode,Ae,Je),X.return=q,X):(X=d(X,$),X.return=q,X)}function ye(q,X,$){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Gc(""+X,q.mode,$),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return $=gl(X.type,X.key,X.props,null,q.mode,$),$.ref=Fo(q,null,X),$.return=q,$;case F:return X=Wc(X,q.mode,$),X.return=q,X;case ie:var Ae=X._init;return ye(q,Ae(X._payload),$)}if(Ie(X)||le(X))return X=Vr(X,q.mode,$,null),X.return=q,X;Ya(q,X)}return null}function ve(q,X,$,Ae){var Je=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Je!==null?null:N(q,X,""+$,Ae);if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return $.key===Je?B(q,X,$,Ae):null;case F:return $.key===Je?Q(q,X,$,Ae):null;case ie:return Je=$._init,ve(q,X,Je($._payload),Ae)}if(Ie($)||le($))return Je!==null?null:xe(q,X,$,Ae,null);Ya(q,$)}return null}function ke(q,X,$,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return q=q.get($)||null,N(X,q,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case z:return q=q.get(Ae.key===null?$:Ae.key)||null,B(X,q,Ae,Je);case F:return q=q.get(Ae.key===null?$:Ae.key)||null,Q(X,q,Ae,Je);case ie:var it=Ae._init;return ke(q,X,$,it(Ae._payload),Je)}if(Ie(Ae)||le(Ae))return q=q.get($)||null,xe(X,q,Ae,Je,null);Ya(X,Ae)}return null}function je(q,X,$,Ae){for(var Je=null,it=null,rt=X,lt=X=0,sn=null;rt!==null&&lt<$.length;lt++){rt.index>lt?(sn=rt,rt=null):sn=rt.sibling;var Ct=ve(q,rt,$[lt],Ae);if(Ct===null){rt===null&&(rt=sn);break}n&&rt&&Ct.alternate===null&&i(q,rt),X=g(Ct,X,lt),it===null?Je=Ct:it.sibling=Ct,it=Ct,rt=sn}if(lt===$.length)return a(q,rt),Bt&&Nr(q,lt),Je;if(rt===null){for(;lt<$.length;lt++)rt=ye(q,$[lt],Ae),rt!==null&&(X=g(rt,X,lt),it===null?Je=rt:it.sibling=rt,it=rt);return Bt&&Nr(q,lt),Je}for(rt=u(q,rt);lt<$.length;lt++)sn=ke(rt,q,lt,$[lt],Ae),sn!==null&&(n&&sn.alternate!==null&&rt.delete(sn.key===null?lt:sn.key),X=g(sn,X,lt),it===null?Je=sn:it.sibling=sn,it=sn);return n&&rt.forEach(function(pr){return i(q,pr)}),Bt&&Nr(q,lt),Je}function Ze(q,X,$,Ae){var Je=le($);if(typeof Je!="function")throw Error(t(150));if($=Je.call($),$==null)throw Error(t(151));for(var it=Je=null,rt=X,lt=X=0,sn=null,Ct=$.next();rt!==null&&!Ct.done;lt++,Ct=$.next()){rt.index>lt?(sn=rt,rt=null):sn=rt.sibling;var pr=ve(q,rt,Ct.value,Ae);if(pr===null){rt===null&&(rt=sn);break}n&&rt&&pr.alternate===null&&i(q,rt),X=g(pr,X,lt),it===null?Je=pr:it.sibling=pr,it=pr,rt=sn}if(Ct.done)return a(q,rt),Bt&&Nr(q,lt),Je;if(rt===null){for(;!Ct.done;lt++,Ct=$.next())Ct=ye(q,Ct.value,Ae),Ct!==null&&(X=g(Ct,X,lt),it===null?Je=Ct:it.sibling=Ct,it=Ct);return Bt&&Nr(q,lt),Je}for(rt=u(q,rt);!Ct.done;lt++,Ct=$.next())Ct=ke(rt,q,lt,Ct.value,Ae),Ct!==null&&(n&&Ct.alternate!==null&&rt.delete(Ct.key===null?lt:Ct.key),X=g(Ct,X,lt),it===null?Je=Ct:it.sibling=Ct,it=Ct);return n&&rt.forEach(function(n0){return i(q,n0)}),Bt&&Nr(q,lt),Je}function jt(q,X,$,Ae){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case z:e:{for(var Je=$.key,it=X;it!==null;){if(it.key===Je){if(Je=$.type,Je===U){if(it.tag===7){a(q,it.sibling),X=d(it,$.props.children),X.return=q,q=X;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ie&&Yd(Je)===it.type){a(q,it.sibling),X=d(it,$.props),X.ref=Fo(q,it,$),X.return=q,q=X;break e}a(q,it);break}else i(q,it);it=it.sibling}$.type===U?(X=Vr($.props.children,q.mode,Ae,$.key),X.return=q,q=X):(Ae=gl($.type,$.key,$.props,null,q.mode,Ae),Ae.ref=Fo(q,X,$),Ae.return=q,q=Ae)}return E(q);case F:e:{for(it=$.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(q,X.sibling),X=d(X,$.children||[]),X.return=q,q=X;break e}else{a(q,X);break}else i(q,X);X=X.sibling}X=Wc($,q.mode,Ae),X.return=q,q=X}return E(q);case ie:return it=$._init,jt(q,X,it($._payload),Ae)}if(Ie($))return je(q,X,$,Ae);if(le($))return Ze(q,X,$,Ae);Ya(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,X!==null&&X.tag===6?(a(q,X.sibling),X=d(X,$),X.return=q,q=X):(a(q,X),X=Gc($,q.mode,Ae),X.return=q,q=X),E(q)):a(q,X)}return jt}var As=jd(!0),qd=jd(!1),ja=ir(null),qa=null,Cs=null,Qu=null;function ec(){Qu=Cs=qa=null}function tc(n){var i=ja.current;kt(ja),n._currentValue=i}function nc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){qa=n,Qu=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Pn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Qu!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(qa===null)throw Error(t(308));Cs=n,qa.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Ur=null;function ic(n){Ur===null?Ur=[n]:Ur.push(n)}function Zd(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,ic(i)):(a.next=d.next,d.next=a),i.interleaved=a,Di(n,u)}function Di(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var or=!1;function rc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ii(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Tt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Di(n,a)}return d=u.interleaved,d===null?(i.next=i,ic(u)):(i.next=d.next,d.next=i),u.interleaved=i,Di(n,a)}function Za(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,br(n,a)}}function Kd(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $a(n,i,a,u){var d=n.updateQueue;or=!1;var g=d.firstBaseUpdate,E=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var B=N,Q=B.next;B.next=null,E===null?g=Q:E.next=Q,E=B;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==E&&(N===null?xe.firstBaseUpdate=Q:N.next=Q,xe.lastBaseUpdate=B))}if(g!==null){var ye=d.baseState;E=0,xe=Q=B=null,N=g;do{var ve=N.lane,ke=N.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ke,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var je=n,Ze=N;switch(ve=i,ke=a,Ze.tag){case 1:if(je=Ze.payload,typeof je=="function"){ye=je.call(ke,ye,ve);break e}ye=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ze.payload,ve=typeof je=="function"?je.call(ke,ye,ve):je,ve==null)break e;ye=re({},ye,ve);break e;case 2:or=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[N]:ve.push(N))}else ke={eventTime:ke,lane:ve,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(Q=xe=ke,B=ye):xe=xe.next=ke,E|=ve;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;ve=N,N=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(B=ye),d.baseState=B,d.firstBaseUpdate=Q,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);kr|=E,n.lanes=E,n.memoizedState=ye}}function Jd(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Oo={},gi=ir(Oo),ko=ir(Oo),zo=ir(Oo);function Fr(n){if(n===Oo)throw Error(t(174));return n}function sc(n,i){switch(Nt(zo,i),Nt(ko,n),Nt(gi,Oo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=qe(i,n)}kt(gi),Nt(gi,i)}function Ps(){kt(gi),kt(ko),kt(zo)}function Qd(n){Fr(zo.current);var i=Fr(gi.current),a=qe(i,n.type);i!==a&&(Nt(ko,n),Nt(gi,a))}function oc(n){ko.current===n&&(kt(gi),kt(ko))}var Ht=ir(0);function Ka(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ac=[];function lc(){for(var n=0;n<ac.length;n++)ac[n]._workInProgressVersionPrimary=null;ac.length=0}var Ja=A.ReactCurrentDispatcher,uc=A.ReactCurrentBatchConfig,Or=0,Vt=null,Kt=null,nn=null,Qa=!1,Bo=!1,Ho=0,wv=0;function dn(){throw Error(t(321))}function cc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function hc(n,i,a,u,d,g){if(Or=g,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ja.current=n===null||n.memoizedState===null?Pv:bv,n=a(u,d),Bo){g=0;do{if(Bo=!1,Ho=0,25<=g)throw Error(t(301));g+=1,nn=Kt=null,i.updateQueue=null,Ja.current=Lv,n=a(u,d)}while(Bo)}if(Ja.current=nl,i=Kt!==null&&Kt.next!==null,Or=0,nn=Kt=Vt=null,Qa=!1,i)throw Error(t(300));return n}function fc(){var n=Ho!==0;return Ho=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Vt.memoizedState=nn=n:nn=nn.next=n,nn}function $n(){if(Kt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=nn===null?Vt.memoizedState:nn.next;if(i!==null)nn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Vt.memoizedState=nn=n:nn=nn.next=n}return nn}function Vo(n,i){return typeof i=="function"?i(n):i}function dc(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Kt,d=u.baseQueue,g=a.pending;if(g!==null){if(d!==null){var E=d.next;d.next=g.next,g.next=E}u.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,u=u.baseState;var N=E=null,B=null,Q=g;do{var xe=Q.lane;if((Or&xe)===xe)B!==null&&(B=B.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),u=Q.hasEagerState?Q.eagerState:n(u,Q.action);else{var ye={lane:xe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};B===null?(N=B=ye,E=u):B=B.next=ye,Vt.lanes|=xe,kr|=xe}Q=Q.next}while(Q!==null&&Q!==g);B===null?E=u:B.next=N,ni(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Vt.lanes|=g,kr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pc(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do g=n(g,E.action),E=E.next;while(E!==d);ni(g,i.memoizedState)||(Pn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function ep(){}function tp(n,i){var a=Vt,u=$n(),d=i(),g=!ni(u.memoizedState,d);if(g&&(u.memoizedState=d,Pn=!0),u=u.queue,mc(rp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Go(9,ip.bind(null,a,u,d,i),void 0,null),rn===null)throw Error(t(349));Or&30||np(a,i,d)}return d}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,u){i.value=a,i.getSnapshot=u,sp(i)&&op(n)}function rp(n,i,a){return a(function(){sp(i)&&op(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function op(n){var i=Di(n,1);i!==null&&ai(i,n,1,-1)}function ap(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},i.queue=n,n=n.dispatch=Rv.bind(null,Vt,n),[i.memoizedState,n]}function Go(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function lp(){return $n().memoizedState}function el(n,i,a,u){var d=_i();Vt.flags|=n,d.memoizedState=Go(1|i,a,void 0,u===void 0?null:u)}function tl(n,i,a,u){var d=$n();u=u===void 0?null:u;var g=void 0;if(Kt!==null){var E=Kt.memoizedState;if(g=E.destroy,u!==null&&cc(u,E.deps)){d.memoizedState=Go(i,a,g,u);return}}Vt.flags|=n,d.memoizedState=Go(1|i,a,g,u)}function up(n,i){return el(8390656,8,n,i)}function mc(n,i){return tl(2048,8,n,i)}function cp(n,i){return tl(4,2,n,i)}function hp(n,i){return tl(4,4,n,i)}function fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,fp.bind(null,i,n),a)}function gc(){}function pp(n,i){var a=$n();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&cc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=$n();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&cc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return Or&21?(ni(a,i)||(a=Sn(),Vt.lanes|=a,kr|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a)}function Av(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var u=uc.transition;uc.transition={};try{n(!1),i()}finally{xt=a,uc.transition=u}}function _p(){return $n().memoizedState}function Cv(n,i,a){var u=hr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))xp(i,a);else if(a=Zd(n,i,a,u),a!==null){var d=En();ai(a,n,u,d),yp(a,i,u)}}function Rv(n,i,a){var u=hr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))xp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,N=g(E,a);if(d.hasEagerState=!0,d.eagerState=N,ni(N,E)){var B=i.interleaved;B===null?(d.next=d,ic(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Zd(n,i,d,u),a!==null&&(d=En(),ai(a,n,u,d),yp(a,i,u))}}function vp(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function xp(n,i){Bo=Qa=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if(a&4194240){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,br(n,a)}}var nl={readContext:Zn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},Pv={readContext:Zn,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=_i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=_i();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Cv.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:ap,useDebugValue:gc,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=ap(!1),i=n[0];return n=Av.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Vt,d=_i();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),rn===null)throw Error(t(349));Or&30||np(u,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,up(rp.bind(null,u,g,n),[n]),u.flags|=2048,Go(9,ip.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=_i(),i=rn.identifierPrefix;if(Bt){var a=Li,u=bi;a=(u&~(1<<32-At(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ho++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=wv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},bv={readContext:Zn,useCallback:pp,useContext:Zn,useEffect:mc,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:hp,useMemo:mp,useReducer:dc,useRef:lp,useState:function(){return dc(Vo)},useDebugValue:gc,useDeferredValue:function(n){var i=$n();return gp(i,Kt.memoizedState,n)},useTransition:function(){var n=dc(Vo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1},Lv={readContext:Zn,useCallback:pp,useContext:Zn,useEffect:mc,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:hp,useMemo:mp,useReducer:pc,useRef:lp,useState:function(){return pc(Vo)},useDebugValue:gc,useDeferredValue:function(n){var i=$n();return Kt===null?i.memoizedState=n:gp(i,Kt.memoizedState,n)},useTransition:function(){var n=pc(Vo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _c(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=En(),d=hr(n),g=Ii(u,d);g.payload=i,a!=null&&(g.callback=a),i=ar(n,g,d),i!==null&&(ai(i,n,d,u),Za(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=En(),d=hr(n),g=Ii(u,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ar(n,g,d),i!==null&&(ai(i,n,d,u),Za(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),u=hr(n),d=Ii(a,u);d.tag=2,i!=null&&(d.callback=i),i=ar(n,d,u),i!==null&&(ai(i,n,u,a),Za(i,n,u))}};function Sp(n,i,a,u,d,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):i.prototype&&i.prototype.isPureReactComponent?!Po(a,u)||!Po(d,g):!0}function Mp(n,i,a){var u=!1,d=rr,g=i.contextType;return typeof g=="object"&&g!==null?g=Zn(g):(d=Rn(i)?Dr:fn.current,u=i.contextTypes,g=(u=u!=null)?Ms(n,d):rr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ep(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function vc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},rc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Zn(g):(g=Rn(i)?Dr:fn.current,d.context=Ms(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(_c(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&il.enqueueReplaceState(d,d.state,null),$a(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",u=i;do a+=fe(u),u=u.return;while(u);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function xc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function yc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=Ii(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){cl||(cl=!0,Uc=u),yc(n,i)},a}function wp(n,i,a){a=Ii(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){yc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){yc(n,i),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ap(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Dv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=Yv.bind(null,n,i,a),i.then(n,n))}function Cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ii(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n)}var Iv=A.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,u){i.child=n===null?qd(i,null,a,u):As(i,n.child,a,u)}function Pp(n,i,a,u,d){a=a.render;var g=i.ref;return Rs(i,d),u=hc(n,i,a,u,g,d),a=fc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ni(n,i,d)):(Bt&&a&&qu(i),i.flags|=1,Mn(n,i,u,d),i.child)}function bp(n,i,a,u,d){if(n===null){var g=a.type;return typeof g=="function"&&!Vc(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Lp(n,i,g,u,d)):(n=gl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(E,u)&&n.ref===i.ref)return Ni(n,i,d)}return i.flags|=1,n=dr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,a,u,d){if(n!==null){var g=n.memoizedProps;if(Po(g,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=g,(n.lanes&d)!==0)n.flags&131072&&(Pn=!0);else return i.lanes=n.lanes,Ni(n,i,d)}return Sc(n,i,a,u,d)}function Dp(n,i,a){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ds,Hn),Hn|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ds,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Nt(Ds,Hn),Hn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,Nt(Ds,Hn),Hn|=u;return Mn(n,i,d,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Sc(n,i,a,u,d){var g=Rn(a)?Dr:fn.current;return g=Ms(i,g),Rs(i,d),a=hc(n,i,a,u,g,d),u=fc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ni(n,i,d)):(Bt&&u&&qu(i),i.flags|=1,Mn(n,i,a,d),i.child)}function Np(n,i,a,u,d){if(Rn(a)){var g=!0;Ha(i)}else g=!1;if(Rs(i,d),i.stateNode===null)sl(n,i),Mp(i,a,u),vc(i,a,u,d),u=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var B=E.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=Zn(Q):(Q=Rn(a)?Dr:fn.current,Q=Ms(i,Q));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==u||B!==Q)&&Ep(i,E,u,Q),or=!1;var ve=i.memoizedState;E.state=ve,$a(i,u,E,d),B=i.memoizedState,N!==u||ve!==B||Cn.current||or?(typeof xe=="function"&&(_c(i,a,xe,u),B=i.memoizedState),(N=or||Sp(i,a,N,u,ve,B,Q))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),E.props=u,E.state=B,E.context=Q,u=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,$d(n,i),N=i.memoizedProps,Q=i.type===i.elementType?N:ri(i.type,N),E.props=Q,ye=i.pendingProps,ve=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Rn(a)?Dr:fn.current,B=Ms(i,B));var ke=a.getDerivedStateFromProps;(xe=typeof ke=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==ye||ve!==B)&&Ep(i,E,u,B),or=!1,ve=i.memoizedState,E.state=ve,$a(i,u,E,d);var je=i.memoizedState;N!==ye||ve!==je||Cn.current||or?(typeof ke=="function"&&(_c(i,a,ke,u),je=i.memoizedState),(Q=or||Sp(i,a,Q,u,ve,je,B)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,je,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,je,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=je),E.props=u,E.state=je,E.context=B,u=Q):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return Mc(n,i,a,u,g,d)}function Mc(n,i,a,u,d,g){Ip(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&zd(i,a,!1),Ni(n,i,g);u=i.stateNode,Iv.current=i;var N=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=As(i,n.child,null,g),i.child=As(i,null,N,g)):Mn(n,i,N,g),i.memoizedState=u.state,d&&zd(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Od(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(n,i.context,!1),sc(n,i.containerInfo)}function Fp(n,i,a,u,d){return ws(),Ju(d),i.flags|=256,Mn(n,i,a,u),i.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Tc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,i,a){var u=i.pendingProps,d=Ht.current,g=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Nt(Ht,d&1),n===null)return Ku(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(E=u.children,n=u.fallback,g?(u=i.mode,g=i.child,E={mode:"hidden",children:E},!(u&1)&&g!==null?(g.childLanes=0,g.pendingProps=E):g=_l(E,u,0,null),n=Vr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Tc(a),i.memoizedState=Ec,n):wc(i,E));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return Nv(n,i,E,u,N,d,a);if(g){g=u.fallback,E=i.mode,d=n.child,N=d.sibling;var B={mode:"hidden",children:u.children};return!(E&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=dr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?g=dr(N,g):(g=Vr(g,E,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,E=n.child.memoizedState,E=E===null?Tc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~a,i.memoizedState=Ec,u}return g=n.child,n=g.sibling,u=dr(g,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function wc(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,u){return u!==null&&Ju(u),As(i,n.child,null,a),n=wc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nv(n,i,a,u,d,g,E){if(a)return i.flags&256?(i.flags&=-257,u=xc(Error(t(422))),rl(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=_l({mode:"visible",children:u.children},d,0,null),g=Vr(g,d,E,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,i.mode&1&&As(i,n.child,null,E),i.child.memoizedState=Tc(E),i.memoizedState=Ec,g);if(!(i.mode&1))return rl(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,g=Error(t(419)),u=xc(g,u,void 0),rl(n,i,E,u)}if(N=(E&n.childLanes)!==0,Pn||N){if(u=rn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|E)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Di(n,d),ai(u,n,d,-1))}return Hc(),u=xc(Error(t(421))),rl(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=jv.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Bn=nr(d.nextSibling),zn=i,Bt=!0,ii=null,n!==null&&(jn[qn++]=bi,jn[qn++]=Li,jn[qn++]=Ir,bi=n.id,Li=n.overflow,Ir=i),i=wc(i,u.children),i.flags|=4096,i)}function kp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),nc(n.return,i,a)}function Ac(n,i,a,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=d)}function zp(n,i,a){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(Mn(n,i,u.children,a),u=Ht.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,i);else if(n.tag===19)kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Nt(Ht,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Ka(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ac(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ka(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ac(i,!0,a,null,g);break;case"together":Ac(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ni(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=dr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=dr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Uv(n,i,a){switch(i.tag){case 3:Up(i),ws();break;case 5:Qd(i);break;case 1:Rn(i.type)&&Ha(i);break;case 4:sc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Nt(ja,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Ht,Ht.current&1),i.flags|=128,null):a&i.child.childLanes?Op(n,i,a):(Nt(Ht,Ht.current&1),n=Ni(n,i,a),n!==null?n.sibling:null);Nt(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,n.flags&128){if(u)return zp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return Ni(n,i,a)}var Bp,Cc,Hp,Vp;Bp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cc=function(){},Hp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Fr(gi.current);var g=null;switch(a){case"input":d=I(n,d),u=I(n,u),g=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),g=[];break;case"textarea":d=w(n,d),u=w(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ka)}_t(a,u);var E;a=null;for(Q in d)if(!u.hasOwnProperty(Q)&&d.hasOwnProperty(Q)&&d[Q]!=null)if(Q==="style"){var N=d[Q];for(E in N)N.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?g||(g=[]):(g=g||[]).push(Q,null));for(Q in u){var B=u[Q];if(N=d!=null?d[Q]:void 0,u.hasOwnProperty(Q)&&B!==N&&(B!=null||N!=null))if(Q==="style")if(N){for(E in N)!N.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&N[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(g||(g=[]),g.push(Q,a)),a=B;else Q==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(g=g||[]).push(Q,B)):Q==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(Q,""+B):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(B!=null&&Q==="onScroll"&&Ot("scroll",n),g||N===B||(g=[])):(g=g||[]).push(Q,B))}a&&(g=g||[]).push("style",a);var Q=g;(i.updateQueue=Q)&&(i.flags|=4)}},Vp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Wo(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Fv(n,i,a){var u=i.pendingProps;switch(Zu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Rn(i.type)&&Ba(),pn(i),null;case 3:return u=i.stateNode,Ps(),kt(Cn),kt(fn),lc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ii!==null&&(kc(ii),ii=null))),Cc(n,i),pn(i),null;case 5:oc(i);var d=Fr(zo.current);if(a=i.type,n!==null&&i.stateNode!=null)Hp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Fr(gi.current),Xa(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[mi]=i,u[No]=g,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<Lo.length;d++)Ot(Lo[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Ke(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":Z(u,g),Ot("invalid",u)}_t(a,g),d=null;for(var E in g)if(g.hasOwnProperty(E)){var N=g[E];E==="children"?typeof N=="string"?u.textContent!==N&&(g.suppressHydrationWarning!==!0&&Oa(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(g.suppressHydrationWarning!==!0&&Oa(u.textContent,N,n),d=["children",""+N]):o.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ot("scroll",u)}switch(a){case"input":gt(u),Ce(u,g,!0);break;case"textarea":gt(u),_e(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=ka)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[mi]=i,n[No]=u,Bp(n,i,!1,!1),i.stateNode=n;e:{switch(E=ut(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<Lo.length;d++)Ot(Lo[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Ke(n,u),d=I(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":Z(n,u),d=w(n,u),Ot("invalid",n);break;default:d=u}_t(a,d),N=d;for(g in N)if(N.hasOwnProperty(g)){var B=N[g];g==="style"?st(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&He(n,B)):g==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ft(n,B):typeof B=="number"&&ft(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Ot("scroll",n):B!=null&&R(n,g,B,E))}switch(a){case"input":gt(n),Ce(n,u,!1);break;case"textarea":gt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Pe(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?D(n,!!u.multiple,g,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ka)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(zo.current),Fr(gi.current),Xa(i)){if(u=i.stateNode,a=i.memoizedProps,u[mi]=i,(g=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Oa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return pn(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Bn!==null&&i.mode&1&&!(i.flags&128))Xd(),ws(),i.flags|=98560,g=!1;else if(g=Xa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mi]=i}else ws(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;pn(i),g=!1}else ii!==null&&(kc(ii),ii=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Ht.current&1?Jt===0&&(Jt=3):Hc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Ps(),Cc(n,i),n===null&&Do(i.stateNode.containerInfo),pn(i),null;case 10:return tc(i.type._context),pn(i),null;case 17:return Rn(i.type)&&Ba(),pn(i),null;case 19:if(kt(Ht),g=i.memoizedState,g===null)return pn(i),null;if(u=(i.flags&128)!==0,E=g.rendering,E===null)if(u)Wo(g,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(E=Ka(n),E!==null){for(i.flags|=128,Wo(g,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Nt(Ht,Ht.current&1|2),i.child}n=n.sibling}g.tail!==null&&W()>Is&&(i.flags|=128,u=!0,Wo(g,!1),i.lanes=4194304)}else{if(!u)if(n=Ka(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Bt)return pn(i),null}else 2*W()-g.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,u=!0,Wo(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=W(),i.sibling=null,a=Ht.current,Nt(Ht,u?a&1|2:a&1),i):(pn(i),null);case 22:case 23:return Bc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Hn&1073741824&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ov(n,i){switch(Zu(i),i.tag){case 1:return Rn(i.type)&&Ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),kt(Cn),kt(fn),lc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return oc(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Ps(),null;case 10:return tc(i.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var ol=!1,mn=!1,kv=typeof WeakSet=="function"?WeakSet:Set,We=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function Rc(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var Gp=!1;function zv(n,i){if(Bu=Aa,n=Sd(),Du(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,N=-1,B=-1,Q=0,xe=0,ye=n,ve=null;t:for(;;){for(var ke;ye!==a||d!==0&&ye.nodeType!==3||(N=E+d),ye!==g||u!==0&&ye.nodeType!==3||(B=E+u),ye.nodeType===3&&(E+=ye.nodeValue.length),(ke=ye.firstChild)!==null;)ve=ye,ye=ke;for(;;){if(ye===n)break t;if(ve===a&&++Q===d&&(N=E),ve===g&&++xe===u&&(B=E),(ke=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ke}a=N===-1||B===-1?null:{start:N,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hu={focusedElem:n,selectionRange:a},Aa=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var je=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ze=je.memoizedProps,jt=je.memoizedState,q=i.stateNode,X=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:ri(i.type,Ze),jt);q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Xt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return je=Gp,Gp=!1,je}function Xo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Rc(i,a,g)}d=d.next}while(d!==u)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Pc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[No],delete i[Xu],delete i[Sv],delete i[Mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ka));else if(u!==4&&(n=n.child,n!==null))for(bc(n,i,a),n=n.sibling;n!==null;)bc(n,i,a),n=n.sibling}function Lc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Lc(n,i,a),n=n.sibling;n!==null;)Lc(n,i,a),n=n.sibling}var ln=null,si=!1;function lr(n,i,a){for(a=a.child;a!==null;)jp(n,i,a),a=a.sibling}function jp(n,i,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:mn||Ls(a,i);case 6:var u=ln,d=si;ln=null,lr(n,i,a),ln=u,si=d,ln!==null&&(si?(n=ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(si?(n=ln,a=a.stateNode,n.nodeType===8?Wu(n.parentNode,a):n.nodeType===1&&Wu(n,a),Eo(n)):Wu(ln,a.stateNode));break;case 4:u=ln,d=si,ln=a.stateNode.containerInfo,si=!0,lr(n,i,a),ln=u,si=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,E=g.destroy;g=g.tag,E!==void 0&&(g&2||g&4)&&Rc(a,i,E),d=d.next}while(d!==u)}lr(n,i,a);break;case 1:if(!mn&&(Ls(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){Xt(a,i,N)}lr(n,i,a);break;case 21:lr(n,i,a);break;case 22:a.mode&1?(mn=(u=mn)||a.memoizedState!==null,lr(n,i,a),mn=u):lr(n,i,a);break;default:lr(n,i,a)}}function qp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kv),i.forEach(function(u){var d=qv.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var g=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:ln=N.stateNode,si=!1;break e;case 3:ln=N.stateNode.containerInfo,si=!0;break e;case 4:ln=N.stateNode.containerInfo,si=!0;break e}N=N.return}if(ln===null)throw Error(t(160));jp(g,E,d),ln=null,si=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(Q){Xt(d,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zp(i,n),i=i.sibling}function Zp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),vi(n),u&4){try{Xo(3,n,n.return),al(3,n)}catch(Ze){Xt(n,n.return,Ze)}try{Xo(5,n,n.return)}catch(Ze){Xt(n,n.return,Ze)}}break;case 1:oi(i,n),vi(n),u&512&&a!==null&&Ls(a,a.return);break;case 5:if(oi(i,n),vi(n),u&512&&a!==null&&Ls(a,a.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(Ze){Xt(n,n.return,Ze)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,E=a!==null?a.memoizedProps:g,N=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{N==="input"&&g.type==="radio"&&g.name!=null&&Se(d,g),ut(N,E);var Q=ut(N,g);for(E=0;E<B.length;E+=2){var xe=B[E],ye=B[E+1];xe==="style"?st(d,ye):xe==="dangerouslySetInnerHTML"?He(d,ye):xe==="children"?ft(d,ye):R(d,xe,ye,Q)}switch(N){case"input":Be(d,g);break;case"textarea":he(d,g);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ke=g.value;ke!=null?D(d,!!g.multiple,ke,!1):ve!==!!g.multiple&&(g.defaultValue!=null?D(d,!!g.multiple,g.defaultValue,!0):D(d,!!g.multiple,g.multiple?[]:"",!1))}d[No]=g}catch(Ze){Xt(n,n.return,Ze)}}break;case 6:if(oi(i,n),vi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(Ze){Xt(n,n.return,Ze)}}break;case 3:if(oi(i,n),vi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(Ze){Xt(n,n.return,Ze)}break;case 4:oi(i,n),vi(n);break;case 13:oi(i,n),vi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Nc=W())),u&4&&qp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(Q=mn)||xe,oi(i,n),mn=Q):oi(i,n),vi(n),u&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!xe&&n.mode&1)for(We=n,xe=n.child;xe!==null;){for(ye=We=xe;We!==null;){switch(ve=We,ke=ve.child,ve.tag){case 0:case 11:case 14:case 15:Xo(4,ve,ve.return);break;case 1:Ls(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ze){Xt(u,a,Ze)}}break;case 5:Ls(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Jp(ye);continue}}ke!==null?(ke.return=ve,We=ke):Jp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,Q?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(N=ye.stateNode,B=ye.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=nt("display",E))}catch(Ze){Xt(n,n.return,Ze)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(Ze){Xt(n,n.return,Ze)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,n),vi(n),u&4&&qp(n);break;case 21:break;default:oi(i,n),vi(n)}}function vi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var g=Yp(n);Lc(n,g,d);break;case 3:case 4:var E=u.stateNode.containerInfo,N=Yp(n);bc(n,N,E);break;default:throw Error(t(161))}}catch(B){Xt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bv(n,i,a){We=n,$p(n)}function $p(n,i,a){for(var u=(n.mode&1)!==0;We!==null;){var d=We,g=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||ol;if(!E){var N=d.alternate,B=N!==null&&N.memoizedState!==null||mn;N=ol;var Q=mn;if(ol=E,(mn=B)&&!Q)for(We=d;We!==null;)E=We,B=E.child,E.tag===22&&E.memoizedState!==null?Qp(d):B!==null?(B.return=E,We=B):Qp(d);for(;g!==null;)We=g,$p(g),g=g.sibling;We=d,ol=N,mn=Q}Kp(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,We=g):Kp(n)}}function Kp(n){for(;We!==null;){var i=We;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:mn||al(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Jd(i,g,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jd(i,E,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var xe=Q.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Eo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Pc(i)}catch(ve){Xt(i,i.return,ve)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Jp(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Qp(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(B){Xt(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Xt(i,d,B)}}var g=i.return;try{Pc(i)}catch(B){Xt(i,g,B)}break;case 5:var E=i.return;try{Pc(i)}catch(B){Xt(i,E,B)}}}catch(B){Xt(i,i.return,B)}if(i===n){We=null;break}var N=i.sibling;if(N!==null){N.return=i.return,We=N;break}We=i.return}}var Hv=Math.ceil,ll=A.ReactCurrentDispatcher,Dc=A.ReactCurrentOwner,Kn=A.ReactCurrentBatchConfig,Tt=0,rn=null,qt=null,un=0,Hn=0,Ds=ir(0),Jt=0,Yo=null,kr=0,ul=0,Ic=0,jo=null,bn=null,Nc=0,Is=1/0,Ui=null,cl=!1,Uc=null,ur=null,hl=!1,cr=null,fl=0,qo=0,Fc=null,dl=-1,pl=0;function En(){return Tt&6?W():dl!==-1?dl:dl=W()}function hr(n){return n.mode&1?Tt&2&&un!==0?un&-un:Tv.transition!==null?(pl===0&&(pl=Sn()),pl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:td(n.type)),n):1}function ai(n,i,a,u){if(50<qo)throw qo=0,Fc=null,Error(t(185));Yt(n,a,u),(!(Tt&2)||n!==rn)&&(n===rn&&(!(Tt&2)&&(ul|=a),Jt===4&&fr(n,un)),Ln(n,u),a===1&&Tt===0&&!(i.mode&1)&&(Is=W()+500,Va&&sr()))}function Ln(n,i){var a=n.callbackNode;Pr(n,i);var u=ti(n,n===rn?un:0);if(u===0)a!==null&&j(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&j(a),i===1)n.tag===0?Ev(tm.bind(null,n)):Bd(tm.bind(null,n)),xv(function(){!(Tt&6)&&sr()}),a=null;else{switch(jf(u)){case 1:a=De;break;case 4:a=Ve;break;case 16:a=Ge;break;case 536870912:a=at;break;default:a=Ge}a=um(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(dl=-1,pl=0,Tt&6)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var u=ti(n,n===rn?un:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=ml(n,u);else{i=u;var d=Tt;Tt|=2;var g=im();(rn!==n||un!==i)&&(Ui=null,Is=W()+500,Br(n,i));do try{Wv();break}catch(N){nm(n,N)}while(!0);ec(),ll.current=g,Tt=d,qt!==null?i=0:(rn=null,un=0,i=Jt)}if(i!==0){if(i===2&&(d=bt(n),d!==0&&(u=d,i=Oc(n,d))),i===1)throw a=Yo,Br(n,0),fr(n,u),Ln(n,W()),a;if(i===6)fr(n,u);else{if(d=n.current.alternate,!(u&30)&&!Vv(d)&&(i=ml(n,u),i===2&&(g=bt(n),g!==0&&(u=g,i=Oc(n,g))),i===1))throw a=Yo,Br(n,0),fr(n,u),Ln(n,W()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,bn,Ui);break;case 3:if(fr(n,u),(u&130023424)===u&&(i=Nc+500-W(),10<i)){if(ti(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gu(Hr.bind(null,n,bn,Ui),i);break}Hr(n,bn,Ui);break;case 4:if(fr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-At(u);g=1<<E,E=i[E],E>d&&(d=E),u&=~g}if(u=d,u=W()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Hv(u/1960))-u,10<u){n.timeoutHandle=Gu(Hr.bind(null,n,bn,Ui),u);break}Hr(n,bn,Ui);break;case 5:Hr(n,bn,Ui);break;default:throw Error(t(329))}}}return Ln(n,W()),n.callbackNode===a?em.bind(null,n):null}function Oc(n,i){var a=jo;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=ml(n,i),n!==2&&(i=bn,bn=a,i!==null&&kc(i)),n}function kc(n){bn===null?bn=n:bn.push.apply(bn,n)}function Vv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],g=d.getSnapshot;d=d.value;try{if(!ni(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~Ic,i&=~ul,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-At(i),u=1<<a;n[a]=-1,i&=~u}}function tm(n){if(Tt&6)throw Error(t(327));Ns();var i=ti(n,0);if(!(i&1))return Ln(n,W()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var u=bt(n);u!==0&&(i=u,a=Oc(n,u))}if(a===1)throw a=Yo,Br(n,0),fr(n,i),Ln(n,W()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,bn,Ui),Ln(n,W()),null}function zc(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Is=W()+500,Va&&sr())}}function zr(n){cr!==null&&cr.tag===0&&!(Tt&6)&&Ns();var i=Tt;Tt|=1;var a=Kn.transition,u=xt;try{if(Kn.transition=null,xt=1,n)return n()}finally{xt=u,Kn.transition=a,Tt=i,!(Tt&6)&&sr()}}function Bc(){Hn=Ds.current,kt(Ds)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,vv(a)),qt!==null)for(a=qt.return;a!==null;){var u=a;switch(Zu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ba();break;case 3:Ps(),kt(Cn),kt(fn),lc();break;case 5:oc(u);break;case 4:Ps();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:tc(u.type._context);break;case 22:case 23:Bc()}a=a.return}if(rn=n,qt=n=dr(n.current,null),un=Hn=i,Jt=0,Yo=null,Ic=ul=kr=0,bn=jo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(a=Ur[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,g=a.pending;if(g!==null){var E=g.next;g.next=d,u.next=E}a.pending=u}Ur=null}return n}function nm(n,i){do{var a=qt;try{if(ec(),Ja.current=nl,Qa){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Qa=!1}if(Or=0,nn=Kt=Vt=null,Bo=!1,Ho=0,Dc.current=null,a===null||a.return===null){Jt=1,Yo=i,qt=null;break}e:{var g=n,E=a.return,N=a,B=i;if(i=un,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Q=B,xe=N,ye=xe.tag;if(!(xe.mode&1)&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ke=Cp(E);if(ke!==null){ke.flags&=-257,Rp(ke,E,N,g,i),ke.mode&1&&Ap(g,Q,i),i=ke,B=Q;var je=i.updateQueue;if(je===null){var Ze=new Set;Ze.add(B),i.updateQueue=Ze}else je.add(B);break e}else{if(!(i&1)){Ap(g,Q,i),Hc();break e}B=Error(t(426))}}else if(Bt&&N.mode&1){var jt=Cp(E);if(jt!==null){!(jt.flags&65536)&&(jt.flags|=256),Rp(jt,E,N,g,i),Ju(bs(B,N));break e}}g=B=bs(B,N),Jt!==4&&(Jt=2),jo===null?jo=[g]:jo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=Tp(g,B,i);Kd(g,q);break e;case 1:N=B;var X=g.type,$=g.stateNode;if(!(g.flags&128)&&(typeof X.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ur===null||!ur.has($)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=wp(g,N,i);Kd(g,Ae);break e}}g=g.return}while(g!==null)}sm(a)}catch(Je){i=Je,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function im(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Hc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||!(kr&268435455)&&!(ul&268435455)||fr(rn,un)}function ml(n,i){var a=Tt;Tt|=2;var u=im();(rn!==n||un!==i)&&(Ui=null,Br(n,i));do try{Gv();break}catch(d){nm(n,d)}while(!0);if(ec(),Tt=a,ll.current=u,qt!==null)throw Error(t(261));return rn=null,un=0,Jt}function Gv(){for(;qt!==null;)rm(qt)}function Wv(){for(;qt!==null&&!te();)rm(qt)}function rm(n){var i=lm(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?sm(n):qt=i,Dc.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Ov(a,i),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}else if(a=Fv(a,i,Hn),a!==null){qt=a;return}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Jt===0&&(Jt=5)}function Hr(n,i,a){var u=xt,d=Kn.transition;try{Kn.transition=null,xt=1,Xv(n,i,a,u)}finally{Kn.transition=d,xt=u}return null}function Xv(n,i,a,u){do Ns();while(cr!==null);if(Tt&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(hn(n,g),n===rn&&(qt=rn=null,un=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||hl||(hl=!0,um(Ge,function(){return Ns(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Kn.transition,Kn.transition=null;var E=xt;xt=1;var N=Tt;Tt|=4,Dc.current=null,zv(n,a),Zp(a,n),hv(Hu),Aa=!!Bu,Hu=Bu=null,n.current=a,Bv(a),ne(),Tt=N,xt=E,Kn.transition=g}else n.current=a;if(hl&&(hl=!1,cr=n,fl=d),g=n.pendingLanes,g===0&&(ur=null),wt(a.stateNode),Ln(n,W()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(cl)throw cl=!1,n=Uc,Uc=null,n;return fl&1&&n.tag!==0&&Ns(),g=n.pendingLanes,g&1?n===Fc?qo++:(qo=0,Fc=n):qo=0,sr(),null}function Ns(){if(cr!==null){var n=jf(fl),i=Kn.transition,a=xt;try{if(Kn.transition=null,xt=16>n?16:n,cr===null)var u=!1;else{if(n=cr,cr=null,fl=0,Tt&6)throw Error(t(331));var d=Tt;for(Tt|=4,We=n.current;We!==null;){var g=We,E=g.child;if(We.flags&16){var N=g.deletions;if(N!==null){for(var B=0;B<N.length;B++){var Q=N[B];for(We=Q;We!==null;){var xe=We;switch(xe.tag){case 0:case 11:case 15:Xo(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,We=ye;else for(;We!==null;){xe=We;var ve=xe.sibling,ke=xe.return;if(Wp(xe),xe===Q){We=null;break}if(ve!==null){ve.return=ke,We=ve;break}We=ke}}}var je=g.alternate;if(je!==null){var Ze=je.child;if(Ze!==null){je.child=null;do{var jt=Ze.sibling;Ze.sibling=null,Ze=jt}while(Ze!==null)}}We=g}}if(g.subtreeFlags&2064&&E!==null)E.return=g,We=E;else e:for(;We!==null;){if(g=We,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Xo(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,We=q;break e}We=g.return}}var X=n.current;for(We=X;We!==null;){E=We;var $=E.child;if(E.subtreeFlags&2064&&$!==null)$.return=E,We=$;else e:for(E=X;We!==null;){if(N=We,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:al(9,N)}}catch(Je){Xt(N,N.return,Je)}if(N===E){We=null;break e}var Ae=N.sibling;if(Ae!==null){Ae.return=N.return,We=Ae;break e}We=N.return}}if(Tt=d,sr(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{xt=a,Kn.transition=i}}return!1}function om(n,i,a){i=bs(a,i),i=Tp(n,i,1),n=ar(n,i,1),i=En(),n!==null&&(Yt(n,1,i),Ln(n,i))}function Xt(n,i,a){if(n.tag===3)om(n,n,a);else for(;i!==null;){if(i.tag===3){om(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ur===null||!ur.has(u))){n=bs(a,n),n=wp(i,n,1),i=ar(i,n,1),n=En(),i!==null&&(Yt(i,1,n),Ln(i,n));break}}i=i.return}}function Yv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,rn===n&&(un&a)===a&&(Jt===4||Jt===3&&(un&130023424)===un&&500>W()-Nc?Br(n,0):Ic|=a),Ln(n,i)}function am(n,i){i===0&&(n.mode&1?(i=yt,yt<<=1,!(yt&130023424)&&(yt=4194304)):i=1);var a=En();n=Di(n,i),n!==null&&(Yt(n,i,a),Ln(n,a))}function jv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),am(n,a)}function qv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),am(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Pn=!1,Uv(n,i,a);Pn=!!(n.flags&131072)}else Pn=!1,Bt&&i.flags&1048576&&Hd(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;sl(n,i),n=i.pendingProps;var d=Ms(i,fn.current);Rs(i,a),d=hc(null,i,u,n,d,a);var g=fc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(g=!0,Ha(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=il,i.stateNode=d,d._reactInternals=i,vc(i,u,n,a),i=Mc(null,i,u,!0,g,a)):(i.tag=0,Bt&&g&&qu(i),Mn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=$v(u),n=ri(u,n),d){case 0:i=Sc(null,i,u,n,a);break e;case 1:i=Np(null,i,u,n,a);break e;case 11:i=Pp(null,i,u,n,a);break e;case 14:i=bp(null,i,u,ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Sc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Np(n,i,u,d,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,$d(n,i),$a(i,u,null,a);var E=i.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=bs(Error(t(423)),i),i=Fp(n,i,u,a,d);break e}else if(u!==d){d=bs(Error(t(424)),i),i=Fp(n,i,u,a,d);break e}else for(Bn=nr(i.stateNode.containerInfo.firstChild),zn=i,Bt=!0,ii=null,a=qd(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),u===d){i=Ni(n,i,a);break e}Mn(n,i,u,a)}i=i.child}return i;case 5:return Qd(i),n===null&&Ku(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,E=d.children,Vu(u,d)?E=null:g!==null&&Vu(u,g)&&(i.flags|=32),Ip(n,i),Mn(n,i,E,a),i.child;case 6:return n===null&&Ku(i),null;case 13:return Op(n,i,a);case 4:return sc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=As(i,null,u,a):Mn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Pp(n,i,u,d,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,E=d.value,Nt(ja,u._currentValue),u._currentValue=E,g!==null)if(ni(g.value,E)){if(g.children===d.children&&!Cn.current){i=Ni(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var N=g.dependencies;if(N!==null){E=g.child;for(var B=N.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Ii(-1,a&-a),B.tag=2;var Q=g.updateQueue;if(Q!==null){Q=Q.shared;var xe=Q.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),Q.pending=B}}g.lanes|=a,B=g.alternate,B!==null&&(B.lanes|=a),nc(g.return,a,i),N.lanes|=a;break}B=B.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,N=E.alternate,N!==null&&(N.lanes|=a),nc(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Mn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Rs(i,a),d=Zn(d),u=u(d),i.flags|=1,Mn(n,i,u,a),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),bp(n,i,u,d,a);case 15:return Lp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),sl(n,i),i.tag=1,Rn(u)?(n=!0,Ha(i)):n=!1,Rs(i,a),Mp(i,u,d),vc(i,u,d,a),Mc(null,i,u,!0,n,a);case 19:return zp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return P(n,i)}function Zv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,u){return new Zv(n,i,a,u)}function Vc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $v(n){if(typeof n=="function")return Vc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===ce)return 14}return 2}function dr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,u,d,g){var E=2;if(u=n,typeof n=="function")Vc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return Vr(a.children,d,g,i);case H:E=8,d|=8;break;case L:return n=Jn(12,a,i,d|2),n.elementType=L,n.lanes=g,n;case K:return n=Jn(13,a,i,d),n.elementType=K,n.lanes=g,n;case ae:return n=Jn(19,a,i,d),n.elementType=ae,n.lanes=g,n;case ue:return _l(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case k:E=9;break e;case oe:E=11;break e;case ce:E=14;break e;case ie:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(E,a,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Vr(n,i,a,u){return n=Jn(7,n,u,i),n.lanes=a,n}function _l(n,i,a,u){return n=Jn(22,n,u,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Gc(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Wc(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Kv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xc(n,i,a,u,d,g,E,N,B){return n=new Kv(n,i,a,N,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Jn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(g),n}function Jv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return rr;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return kd(n,a,i)}return i}function hm(n,i,a,u,d,g,E,N,B){return n=Xc(a,u,!0,n,d,g,E,N,B),n.context=cm(null),a=n.current,u=En(),d=hr(a),g=Ii(u,d),g.callback=i??null,ar(a,g,d),n.current.lanes=d,Yt(n,d,u),Ln(n,u),n}function vl(n,i,a,u){var d=i.current,g=En(),E=hr(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ii(g,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ar(d,i,E),n!==null&&(ai(n,d,E,g),Za(n,d,E)),E}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yc(n,i){fm(n,i),(n=n.alternate)&&fm(n,i)}var dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function jc(n){this._internalRoot=n}yl.prototype.render=jc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},yl.prototype.unmount=jc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){vl(null,n,null,null)}),i[Ri]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var i=$f();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&Qf(n)}};function qc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function Qv(n,i,a,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var Q=xl(E);g.call(Q)}}var E=hm(i,u,n,0,null,!1,!1,"",pm);return n._reactRootContainer=E,n[Ri]=E.current,Do(n.nodeType===8?n.parentNode:n),zr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var Q=xl(B);N.call(Q)}}var B=Xc(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=B,n[Ri]=B.current,Do(n.nodeType===8?n.parentNode:n),zr(function(){vl(i,B,a,u)}),B}function Ml(n,i,a,u,d){var g=a._reactRootContainer;if(g){var E=g;if(typeof d=="function"){var N=d;d=function(){var B=xl(E);N.call(B)}}vl(i,E,n,d)}else E=Qv(a,i,n,d,u);return xl(E)}qf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=an(i.pendingLanes);a!==0&&(br(i,a|1),Ln(i,W()),!(Tt&6)&&(Is=W()+500,sr()))}break;case 13:zr(function(){var u=Di(n,1);if(u!==null){var d=En();ai(u,n,1,d)}}),Yc(n,1)}},xu=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var a=En();ai(i,n,134217728,a)}Yc(n,134217728)}},Zf=function(n){if(n.tag===13){var i=hr(n),a=Di(n,i);if(a!==null){var u=En();ai(a,n,i,u)}Yc(n,i)}},$f=function(){return xt},Kf=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},Le=function(n,i,a){switch(i){case"input":if(Be(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=za(u);if(!d)throw Error(t(90));ge(u),Be(u,d)}}}break;case"textarea":he(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ft=zc,$t=zr;var e0={usingClientEntryPoint:!1,Events:[Uo,ys,za,Ue,ct,zc]},Zo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t0={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ma(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Qe=El.inject(t0),ht=El}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0,Dn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(i))throw Error(t(200));return Jv(n,i,null,a)},Dn.createRoot=function(n,i){if(!qc(n))throw Error(t(299));var a=!1,u="",d=dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xc(n,1,!1,null,null,a,!1,u,d),n[Ri]=i.current,Do(n.nodeType===8?n.parentNode:n),new jc(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ma(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return zr(n)},Dn.hydrate=function(n,i,a){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!0,a)},Dn.hydrateRoot=function(n,i,a){if(!qc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,g="",E=dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=hm(i,null,n,1,a??null,d,!1,g,E),n[Ri]=i.current,Do(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new yl(i)},Dn.render=function(n,i,a){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!1,a)},Dn.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},Dn.unstable_batchedUpdates=zc,Dn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Sl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Mm;function f0(){if(Mm)return Kc.exports;Mm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Kc.exports=h0(),Kc.exports}var Em;function d0(){if(Em)return Tl;Em=1;var r=f0();return Tl.createRoot=r.createRoot,Tl.hydrateRoot=r.hydrateRoot,Tl}var p0=d0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="171",no={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m0=0,Tm=1,g0=2,Fg=1,_0=2,Vi=3,wr=0,Un=1,Gi=2,Er=0,io=1,wm=2,Am=3,Cm=4,v0=5,Kr=100,x0=101,y0=102,S0=103,M0=104,E0=200,T0=201,w0=202,A0=203,Fh=204,Oh=205,C0=206,R0=207,P0=208,b0=209,L0=210,D0=211,I0=212,N0=213,U0=214,kh=0,zh=1,Bh=2,co=3,Hh=4,Vh=5,Gh=6,Wh=7,Og=0,F0=1,O0=2,Tr=0,k0=1,z0=2,B0=3,H0=4,V0=5,G0=6,W0=7,kg=300,ho=301,fo=302,Xh=303,Yh=304,du=306,jh=1e3,es=1001,qh=1002,di=1003,X0=1004,wl=1005,Si=1006,eh=1007,ts=1008,ji=1009,zg=1010,Bg=1011,ua=1012,Df=1013,rs=1014,Wi=1015,pa=1016,If=1017,Nf=1018,po=1020,Hg=35902,Vg=1021,Gg=1022,fi=1023,Wg=1024,Xg=1025,ro=1026,mo=1027,Yg=1028,Uf=1029,jg=1030,Ff=1031,Of=1033,eu=33776,tu=33777,nu=33778,iu=33779,Zh=35840,$h=35841,Kh=35842,Jh=35843,Qh=36196,ef=37492,tf=37496,nf=37808,rf=37809,sf=37810,of=37811,af=37812,lf=37813,uf=37814,cf=37815,hf=37816,ff=37817,df=37818,pf=37819,mf=37820,gf=37821,ru=36492,_f=36494,vf=36495,qg=36283,xf=36284,yf=36285,Sf=36286,Y0=3200,j0=3201,Zg=0,q0=1,Mr="",ei="srgb",go="srgb-linear",au="linear",Lt="srgb",Us=7680,Rm=519,Z0=512,$0=513,K0=514,$g=515,J0=516,Q0=517,ex=518,tx=519,Pm=35044,bm="300 es",Xi=2e3,lu=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lm=1234567;const sa=Math.PI/180,ca=180/Math.PI;function us(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function kf(r,e){return(r%e+e)%e}function nx(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function ix(r,e,t){return r!==e?(t-r)/(e-r):0}function oa(r,e,t){return(1-t)*r+t*e}function rx(r,e,t,s){return oa(r,e,1-Math.exp(-t*s))}function sx(r,e=1){return e-Math.abs(kf(r,e*2)-e)}function ox(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ax(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function lx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ux(r,e){return r+Math.random()*(e-r)}function cx(r){return r*(.5-Math.random())}function hx(r){r!==void 0&&(Lm=r);let e=Lm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fx(r){return r*sa}function dx(r){return r*ca}function px(r){return(r&r-1)===0&&r!==0}function mx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _x(r,e,t,s,o){const l=Math.cos,c=Math.sin,h=l(t/2),f=c(t/2),p=l((e+s)/2),m=c((e+s)/2),_=l((e-s)/2),x=c((e-s)/2),y=l((s-e)/2),M=c((s-e)/2);switch(o){case"XYX":r.set(h*m,f*_,f*x,h*p);break;case"YZY":r.set(f*x,h*m,f*_,h*p);break;case"ZXZ":r.set(f*_,f*x,h*m,h*p);break;case"XZX":r.set(h*m,f*M,f*y,h*p);break;case"YXY":r.set(f*y,h*m,f*M,h*p);break;case"ZYZ":r.set(f*M,f*y,h*m,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Zs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vx={DEG2RAD:sa,RAD2DEG:ca,generateUUID:us,clamp:mt,euclideanModulo:kf,mapLinear:nx,inverseLerp:ix,lerp:oa,damp:rx,pingpong:sx,smoothstep:ox,smootherstep:ax,randInt:lx,randFloat:ux,randFloatSpread:cx,seededRandom:hx,degToRad:fx,radToDeg:dx,isPowerOfTwo:px,ceilPowerOfTwo:mx,floorPowerOfTwo:gx,setQuaternionFromProperEuler:_x,normalize:Tn,denormalize:Zs};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,s,o,l,c,h,f,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,h,f,p)}set(e,t,s,o,l,c,h,f,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=h,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],h=s[3],f=s[6],p=s[1],m=s[4],_=s[7],x=s[2],y=s[5],M=s[8],T=o[0],S=o[3],v=o[6],b=o[1],R=o[4],A=o[7],z=o[2],F=o[5],U=o[8];return l[0]=c*T+h*b+f*z,l[3]=c*S+h*R+f*F,l[6]=c*v+h*A+f*U,l[1]=p*T+m*b+_*z,l[4]=p*S+m*R+_*F,l[7]=p*v+m*A+_*U,l[2]=x*T+y*b+M*z,l[5]=x*S+y*R+M*F,l[8]=x*v+y*A+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],m=e[8];return t*c*m-t*h*p-s*l*m+s*h*f+o*l*p-o*c*f}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],m=e[8],_=m*c-h*p,x=h*f-m*l,y=p*l-c*f,M=t*_+s*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*p-m*s)*T,e[2]=(h*s-o*c)*T,e[3]=x*T,e[4]=(m*t-o*f)*T,e[5]=(o*l-h*t)*T,e[6]=y*T,e[7]=(s*f-p*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,h){const f=Math.cos(l),p=Math.sin(l);return this.set(s*f,s*p,-s*(f*c+p*h)+c+e,-o*p,o*f,-o*(-p*c+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(th.makeScale(e,t)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,t){return this.premultiply(th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new dt;function Kg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function uu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xx(){const r=uu("canvas");return r.style.display="block",r}const Dm={};function $s(r){r in Dm||(Dm[r]=!0,console.warn(r))}function yx(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Sx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Im=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ex(){const r={enabled:!0,workingColorSpace:go,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(o.r=Yi(o.r),o.g=Yi(o.g),o.b=Yi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?au:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[go]:{primaries:e,whitePoint:s,transfer:au,toXYZ:Im,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:s,transfer:Lt,toXYZ:Im,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Rt=Ex();function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function so(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fs;class Tx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=uu("canvas")),Fs.width=e.width,Fs.height=e.height;const s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Yi(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Yi(t[s]/255)*255):t[s]=Yi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class Jg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?l.push(nh(o[c].image)):l.push(nh(o[c]))}else l=nh(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;class Fn extends ls{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=es,o=es,l=Si,c=ts,h=fi,f=ji,p=Fn.DEFAULT_ANISOTROPY,m=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=us(),this.name="",this.source=new Jg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=kg;Fn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,s=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const f=e.elements,p=f[0],m=f[4],_=f[8],x=f[1],y=f[5],M=f[9],T=f[2],S=f[6],v=f[10];if(Math.abs(m-x)<.01&&Math.abs(_-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+T)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,A=(y+1)/2,z=(v+1)/2,F=(m+x)/4,U=(_+T)/4,H=(M+S)/4;return R>A&&R>z?R<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(R),o=F/s,l=U/s):A>z?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=F/o,l=H/o):z<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),s=U/l,o=H/l),this.set(s,o,l,t),this}let b=Math.sqrt((S-M)*(S-M)+(_-T)*(_-T)+(x-m)*(x-m));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(_-T)/b,this.z=(x-m)/b,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends ls{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Fn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let h=0;h<c;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Cx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Qg extends Fn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rx extends Fn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,h){let f=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];const x=l[c+0],y=l[c+1],M=l[c+2],T=l[c+3];if(h===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=T;return}if(_!==T||f!==x||p!==y||m!==M){let S=1-h;const v=f*x+p*y+m*M+_*T,b=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const z=Math.sqrt(R),F=Math.atan2(z,v*b);S=Math.sin(S*F)/z,h=Math.sin(h*F)/z}const A=h*b;if(f=f*S+x*A,p=p*S+y*A,m=m*S+M*A,_=_*S+T*A,S===1-h){const z=1/Math.sqrt(f*f+p*p+m*m+_*_);f*=z,p*=z,m*=z,_*=z}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){const h=s[o],f=s[o+1],p=s[o+2],m=s[o+3],_=l[c],x=l[c+1],y=l[c+2],M=l[c+3];return e[t]=h*M+m*_+f*y-p*x,e[t+1]=f*M+m*x+p*_-h*y,e[t+2]=p*M+m*y+h*x-f*_,e[t+3]=m*M-h*_-f*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,p=h(s/2),m=h(o/2),_=h(l/2),x=f(s/2),y=f(o/2),M=f(l/2);switch(c){case"XYZ":this._x=x*m*_+p*y*M,this._y=p*y*_-x*m*M,this._z=p*m*M+x*y*_,this._w=p*m*_-x*y*M;break;case"YXZ":this._x=x*m*_+p*y*M,this._y=p*y*_-x*m*M,this._z=p*m*M-x*y*_,this._w=p*m*_+x*y*M;break;case"ZXY":this._x=x*m*_-p*y*M,this._y=p*y*_+x*m*M,this._z=p*m*M+x*y*_,this._w=p*m*_-x*y*M;break;case"ZYX":this._x=x*m*_-p*y*M,this._y=p*y*_+x*m*M,this._z=p*m*M-x*y*_,this._w=p*m*_+x*y*M;break;case"YZX":this._x=x*m*_+p*y*M,this._y=p*y*_+x*m*M,this._z=p*m*M-x*y*_,this._w=p*m*_-x*y*M;break;case"XZY":this._x=x*m*_-p*y*M,this._y=p*y*_-x*m*M,this._z=p*m*M+x*y*_,this._w=p*m*_+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],h=t[5],f=t[9],p=t[2],m=t[6],_=t[10],x=s+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-p)*y,this._z=(c-o)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(m-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(l-p)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(c-o)/y,this._x=(l+p)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,h=t._x,f=t._y,p=t._z,m=t._w;return this._x=s*m+c*h+o*p-l*f,this._y=o*m+c*f+l*h-s*p,this._z=l*m+c*p+s*f-o*h,this._w=c*m-s*h-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let h=c*e._w+s*e._x+o*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*s+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,h),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=c*_+this._w*x,this._x=s*_+this._x*x,this._y=o*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,s=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,h=e.z,f=e.w,p=2*(c*o-h*s),m=2*(h*t-l*o),_=2*(l*s-c*t);return this.x=t+f*p+c*_-h*m,this.y=s+f*m+h*p-l*_,this.z=o+f*_+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=o*f-l*h,this.y=l*c-s*f,this.z=s*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new G,Um=new os;class ma{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Al.copy(s.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Cl.subVectors(this.max,Jo),Os.subVectors(e.a,Jo),ks.subVectors(e.b,Jo),zs.subVectors(e.c,Jo),mr.subVectors(ks,Os),gr.subVectors(zs,ks),Gr.subVectors(Os,zs);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Gr.z,Gr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Gr.z,0,-Gr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Gr.y,Gr.x,0];return!rh(t,Os,ks,zs,Cl)||(t=[1,0,0,0,1,0,0,0,1],!rh(t,Os,ks,zs,Cl))?!1:(Rl.crossVectors(mr,gr),t=[Rl.x,Rl.y,Rl.z],rh(t,Os,ks,zs,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new G,new G,new G,new G,new G,new G,new G,new G],li=new G,Al=new ma,Os=new G,ks=new G,zs=new G,mr=new G,gr=new G,Gr=new G,Jo=new G,Cl=new G,Rl=new G,Wr=new G;function rh(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){Wr.fromArray(r,l);const h=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),f=e.dot(Wr),p=t.dot(Wr),m=s.dot(Wr);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>h)return!1}return!0}const Px=new ma,Qo=new G,sh=new G;class ga{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Px.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Qo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(sh)),this.expandByPoint(Qo.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new G,oh=new G,Pl=new G,_r=new G,ah=new G,bl=new G,lh=new G;class pu{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){oh.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(oh);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Pl),h=_r.dot(this.direction),f=-_r.dot(Pl),p=_r.lengthSq(),m=Math.abs(1-c*c);let _,x,y,M;if(m>0)if(_=c*f-h,x=c*h-f,M=l*m,_>=0)if(x>=-M)if(x<=M){const T=1/m;_*=T,x*=T,y=_*(_+c*x+2*h)+x*(c*_+x+2*f)+p}else x=l,_=Math.max(0,-(c*x+h)),y=-_*_+x*(x+2*f)+p;else x=-l,_=Math.max(0,-(c*x+h)),y=-_*_+x*(x+2*f)+p;else x<=-M?(_=Math.max(0,-(-c*l+h)),x=_>0?-l:Math.min(Math.max(-l,-f),l),y=-_*_+x*(x+2*f)+p):x<=M?(_=0,x=Math.min(Math.max(-l,-f),l),y=x*(x+2*f)+p):(_=Math.max(0,-(c*l+h)),x=_>0?l:Math.min(Math.max(-l,-f),l),y=-_*_+x*(x+2*f)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+h)),y=-_*_+x*(x+2*f)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(oh).addScaledVector(Pl,x),y}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const s=Oi.dot(this.direction),o=Oi.dot(Oi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),h=s-c,f=s+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,h,f;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),m>=0?(l=(e.min.y-x.y)*m,c=(e.max.y-x.y)*m):(l=(e.max.y-x.y)*m,c=(e.min.y-x.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(h=(e.min.z-x.z)*_,f=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,f=(e.min.z-x.z)*_),s>f||h>o)||((h>s||s!==s)&&(s=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,s,o,l){ah.subVectors(t,e),bl.subVectors(s,e),lh.crossVectors(ah,bl);let c=this.direction.dot(lh),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;_r.subVectors(this.origin,e);const f=h*this.direction.dot(bl.crossVectors(_r,bl));if(f<0)return null;const p=h*this.direction.dot(ah.cross(_r));if(p<0||f+p>c)return null;const m=-h*_r.dot(lh);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,s,o,l,c,h,f,p,m,_,x,y,M,T,S){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,h,f,p,m,_,x,y,M,T,S)}set(e,t,s,o,l,c,h,f,p,m,_,x,y,M,T,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=c,v[9]=h,v[13]=f,v[2]=p,v[6]=m,v[10]=_,v[14]=x,v[3]=y,v[7]=M,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),c=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),h=Math.sin(s),f=Math.cos(o),p=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*m,y=c*_,M=h*m,T=h*_;t[0]=f*m,t[4]=-f*_,t[8]=p,t[1]=y+M*p,t[5]=x-T*p,t[9]=-h*f,t[2]=T-x*p,t[6]=M+y*p,t[10]=c*f}else if(e.order==="YXZ"){const x=f*m,y=f*_,M=p*m,T=p*_;t[0]=x+T*h,t[4]=M*h-y,t[8]=c*p,t[1]=c*_,t[5]=c*m,t[9]=-h,t[2]=y*h-M,t[6]=T+x*h,t[10]=c*f}else if(e.order==="ZXY"){const x=f*m,y=f*_,M=p*m,T=p*_;t[0]=x-T*h,t[4]=-c*_,t[8]=M+y*h,t[1]=y+M*h,t[5]=c*m,t[9]=T-x*h,t[2]=-c*p,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const x=c*m,y=c*_,M=h*m,T=h*_;t[0]=f*m,t[4]=M*p-y,t[8]=x*p+T,t[1]=f*_,t[5]=T*p+x,t[9]=y*p-M,t[2]=-p,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const x=c*f,y=c*p,M=h*f,T=h*p;t[0]=f*m,t[4]=T-x*_,t[8]=M*_+y,t[1]=_,t[5]=c*m,t[9]=-h*m,t[2]=-p*m,t[6]=y*_+M,t[10]=x-T*_}else if(e.order==="XZY"){const x=c*f,y=c*p,M=h*f,T=h*p;t[0]=f*m,t[4]=-_,t[8]=p*m,t[1]=x*_+T,t[5]=c*m,t[9]=y*_-M,t[2]=M*_-y,t[6]=h*m,t[10]=T*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Lx)}lookAt(e,t,s){const o=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),vr.crossVectors(s,Vn),vr.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),vr.crossVectors(s,Vn)),vr.normalize(),Ll.crossVectors(Vn,vr),o[0]=vr.x,o[4]=Ll.x,o[8]=Vn.x,o[1]=vr.y,o[5]=Ll.y,o[9]=Vn.y,o[2]=vr.z,o[6]=Ll.z,o[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],h=s[4],f=s[8],p=s[12],m=s[1],_=s[5],x=s[9],y=s[13],M=s[2],T=s[6],S=s[10],v=s[14],b=s[3],R=s[7],A=s[11],z=s[15],F=o[0],U=o[4],H=o[8],L=o[12],C=o[1],k=o[5],oe=o[9],K=o[13],ae=o[2],ce=o[6],ie=o[10],ue=o[14],V=o[3],le=o[7],re=o[11],O=o[15];return l[0]=c*F+h*C+f*ae+p*V,l[4]=c*U+h*k+f*ce+p*le,l[8]=c*H+h*oe+f*ie+p*re,l[12]=c*L+h*K+f*ue+p*O,l[1]=m*F+_*C+x*ae+y*V,l[5]=m*U+_*k+x*ce+y*le,l[9]=m*H+_*oe+x*ie+y*re,l[13]=m*L+_*K+x*ue+y*O,l[2]=M*F+T*C+S*ae+v*V,l[6]=M*U+T*k+S*ce+v*le,l[10]=M*H+T*oe+S*ie+v*re,l[14]=M*L+T*K+S*ue+v*O,l[3]=b*F+R*C+A*ae+z*V,l[7]=b*U+R*k+A*ce+z*le,l[11]=b*H+R*oe+A*ie+z*re,l[15]=b*L+R*K+A*ue+z*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],h=e[5],f=e[9],p=e[13],m=e[2],_=e[6],x=e[10],y=e[14],M=e[3],T=e[7],S=e[11],v=e[15];return M*(+l*f*_-o*p*_-l*h*x+s*p*x+o*h*y-s*f*y)+T*(+t*f*y-t*p*x+l*c*x-o*c*y+o*p*m-l*f*m)+S*(+t*p*_-t*h*y-l*c*_+s*c*y+l*h*m-s*p*m)+v*(-o*h*m-t*f*_+t*h*x+o*c*_-s*c*x+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],m=e[8],_=e[9],x=e[10],y=e[11],M=e[12],T=e[13],S=e[14],v=e[15],b=_*S*p-T*x*p+T*f*y-h*S*y-_*f*v+h*x*v,R=M*x*p-m*S*p-M*f*y+c*S*y+m*f*v-c*x*v,A=m*T*p-M*_*p+M*h*y-c*T*y-m*h*v+c*_*v,z=M*_*f-m*T*f-M*h*x+c*T*x+m*h*S-c*_*S,F=t*b+s*R+o*A+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=b*U,e[1]=(T*x*l-_*S*l-T*o*y+s*S*y+_*o*v-s*x*v)*U,e[2]=(h*S*l-T*f*l+T*o*p-s*S*p-h*o*v+s*f*v)*U,e[3]=(_*f*l-h*x*l-_*o*p+s*x*p+h*o*y-s*f*y)*U,e[4]=R*U,e[5]=(m*S*l-M*x*l+M*o*y-t*S*y-m*o*v+t*x*v)*U,e[6]=(M*f*l-c*S*l-M*o*p+t*S*p+c*o*v-t*f*v)*U,e[7]=(c*x*l-m*f*l+m*o*p-t*x*p-c*o*y+t*f*y)*U,e[8]=A*U,e[9]=(M*_*l-m*T*l-M*s*y+t*T*y+m*s*v-t*_*v)*U,e[10]=(c*T*l-M*h*l+M*s*p-t*T*p-c*s*v+t*h*v)*U,e[11]=(m*h*l-c*_*l-m*s*p+t*_*p+c*s*y-t*h*y)*U,e[12]=z*U,e[13]=(m*T*o-M*_*o+M*s*x-t*T*x-m*s*S+t*_*S)*U,e[14]=(M*h*o-c*T*o-M*s*f+t*T*f+c*s*S-t*h*S)*U,e[15]=(c*_*o-m*h*o+m*s*f-t*_*f-c*s*x+t*h*x)*U,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,h=e.y,f=e.z,p=l*c,m=l*h;return this.set(p*c+s,p*h-o*f,p*f+o*h,0,p*h+o*f,m*h+s,m*f-o*c,0,p*f-o*h,m*f+o*c,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,p=l+l,m=c+c,_=h+h,x=l*p,y=l*m,M=l*_,T=c*m,S=c*_,v=h*_,b=f*p,R=f*m,A=f*_,z=s.x,F=s.y,U=s.z;return o[0]=(1-(T+v))*z,o[1]=(y+A)*z,o[2]=(M-R)*z,o[3]=0,o[4]=(y-A)*F,o[5]=(1-(x+v))*F,o[6]=(S+b)*F,o[7]=0,o[8]=(M+R)*U,o[9]=(S-b)*U,o[10]=(1-(x+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Bs.set(o[0],o[1],o[2]).length();const c=Bs.set(o[4],o[5],o[6]).length(),h=Bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/l,m=1/c,_=1/h;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=m,ui.elements[5]*=m,ui.elements[6]*=m,ui.elements[8]*=_,ui.elements[9]*=_,ui.elements[10]*=_,t.setFromRotationMatrix(ui),s.x=l,s.y=c,s.z=h,this}makePerspective(e,t,s,o,l,c,h=Xi){const f=this.elements,p=2*l/(t-e),m=2*l/(s-o),_=(t+e)/(t-e),x=(s+o)/(s-o);let y,M;if(h===Xi)y=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(h===lu)y=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,o,l,c,h=Xi){const f=this.elements,p=1/(t-e),m=1/(s-o),_=1/(c-l),x=(t+e)*p,y=(s+o)*m;let M,T;if(h===Xi)M=(c+l)*_,T=-2*_;else if(h===lu)M=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Bs=new G,ui=new Ut,bx=new G(0,0,0),Lx=new G(1,1,1),vr=new G,Ll=new G,Vn=new G,Fm=new Ut,Om=new os;class Ei{constructor(e=0,t=0,s=0,o=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],h=o[8],f=o[1],p=o[5],m=o[9],_=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class e_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dx=0;const km=new G,Hs=new os,ki=new Ut,Dl=new G,ea=new G,Ix=new G,Nx=new os,zm=new G(1,0,0),Bm=new G(0,1,0),Hm=new G(0,0,1),Vm={type:"added"},Ux={type:"removed"},Vs={type:"childadded",child:null},uh={type:"childremoved",child:null};class vn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new G,t=new Ei,s=new os,o=new G(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ut},normalMatrix:{value:new dt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Dl.copy(e):Dl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ea,Dl,this.up):ki.lookAt(Dl,ea,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(ki),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ux),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),p=c(e.textures),m=c(e.images),_=c(e.shapes),x=c(e.skeletons),y=c(e.animations),M=c(e.nodes);h.length>0&&(s.geometries=h),f.length>0&&(s.materials=f),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=o,s;function c(h){const f=[];for(const p in h){const m=h[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}vn.DEFAULT_UP=new G(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new G,zi=new G,ch=new G,Bi=new G,Gs=new G,Ws=new G,Gm=new G,hh=new G,fh=new G,dh=new G,ph=new It,mh=new It,gh=new It;class hi{constructor(e=new G,t=new G,s=new G){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){ci.subVectors(o,t),zi.subVectors(s,t),ch.subVectors(e,t);const c=ci.dot(ci),h=ci.dot(zi),f=ci.dot(ch),p=zi.dot(zi),m=zi.dot(ch),_=c*p-h*h;if(_===0)return l.set(0,0,0),null;const x=1/_,y=(p*f-h*m)*x,M=(c*m-h*f)*x;return l.set(1-y-M,M,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,s,o,l,c,h,f){return this.getBarycoord(e,t,s,o,Bi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Bi.x),f.addScaledVector(c,Bi.y),f.addScaledVector(h,Bi.z),f)}static getInterpolatedAttribute(e,t,s,o,l,c){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,t),mh.fromBufferAttribute(e,s),gh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(ph,l.x),c.addScaledVector(mh,l.y),c.addScaledVector(gh,l.z),c}static isFrontFacing(e,t,s,o){return ci.subVectors(s,t),zi.subVectors(e,t),ci.cross(zi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,h;Gs.subVectors(o,s),Ws.subVectors(l,s),hh.subVectors(e,s);const f=Gs.dot(hh),p=Ws.dot(hh);if(f<=0&&p<=0)return t.copy(s);fh.subVectors(e,o);const m=Gs.dot(fh),_=Ws.dot(fh);if(m>=0&&_<=m)return t.copy(o);const x=f*_-m*p;if(x<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(s).addScaledVector(Gs,c);dh.subVectors(e,l);const y=Gs.dot(dh),M=Ws.dot(dh);if(M>=0&&y<=M)return t.copy(l);const T=y*p-f*M;if(T<=0&&p>=0&&M<=0)return h=p/(p-M),t.copy(s).addScaledVector(Ws,h);const S=m*M-y*_;if(S<=0&&_-m>=0&&y-M>=0)return Gm.subVectors(l,o),h=(_-m)/(_-m+(y-M)),t.copy(o).addScaledVector(Gm,h);const v=1/(S+T+x);return c=T*v,h=x*v,t.copy(s).addScaledVector(Gs,c).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function _h(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class St{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Rt.workingColorSpace){if(e=kf(e,1),t=mt(t,0,1),s=mt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=_h(c,l,e+1/3),this.g=_h(c,l,e),this.b=_h(c,l,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=ei){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const s=t_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Rt.fromWorkingColorSpace(_n.copy(this),e),Math.round(mt(_n.r*255,0,255))*65536+Math.round(mt(_n.g*255,0,255))*256+Math.round(mt(_n.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(_n.copy(this),t);const s=_n.r,o=_n.g,l=_n.b,c=Math.max(s,o,l),h=Math.min(s,o,l);let f,p;const m=(h+c)/2;if(h===c)f=0,p=0;else{const _=c-h;switch(p=m<=.5?_/(c+h):_/(2-c-h),c){case s:f=(o-l)/_+(o<l?6:0);break;case o:f=(l-s)/_+2;break;case l:f=(s-o)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ei){Rt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,o=_n.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Il);const s=oa(xr.h,Il.h,t),o=oa(xr.s,Il.s,t),l=oa(xr.l,Il.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new St;St.NAMES=t_;let Fx=0;class cs extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=us(),this.name="",this.type="Material",this.blending=io,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(s.blending=this.blending),this.side!==wr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==Oh&&(s.blendDst=this.blendDst),this.blendEquation!==Kr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class n_ extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new G,Nl=new Re;class Mi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Pm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Zs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),o=Tn(o,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pm&&(e.usage=this.usage),e}}class i_ extends Mi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class r_ extends Mi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class On extends Mi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Ox=0;const Qn=new Ut,vh=new vn,Xs=new G,Gn=new ma,ta=new ma,on=new G;class Yn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?r_:i_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,s){return Qn.makeTranslation(e,t,s),this.applyMatrix4(Qn),this}scale(e,t,s){return Qn.makeScale(e,t,s),this.applyMatrix4(Qn),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new On(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];ta.setFromBufferAttribute(h),this.morphTargetsRelative?(on.addVectors(Gn.min,ta.min),Gn.expandByPoint(on),on.addVectors(Gn.max,ta.max),Gn.expandByPoint(on)):(Gn.expandByPoint(ta.min),Gn.expandByPoint(ta.max))}Gn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(on));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,m=h.count;p<m;p++)on.fromBufferAttribute(h,p),f&&(Xs.fromBufferAttribute(e,p),on.add(Xs)),o=Math.max(o,s.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),h=[],f=[];for(let H=0;H<s.count;H++)h[H]=new G,f[H]=new G;const p=new G,m=new G,_=new G,x=new Re,y=new Re,M=new Re,T=new G,S=new G;function v(H,L,C){p.fromBufferAttribute(s,H),m.fromBufferAttribute(s,L),_.fromBufferAttribute(s,C),x.fromBufferAttribute(l,H),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,C),m.sub(p),_.sub(p),y.sub(x),M.sub(x);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(k),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(k),h[H].add(T),h[L].add(T),h[C].add(T),f[H].add(S),f[L].add(S),f[C].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let H=0,L=b.length;H<L;++H){const C=b[H],k=C.start,oe=C.count;for(let K=k,ae=k+oe;K<ae;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const R=new G,A=new G,z=new G,F=new G;function U(H){z.fromBufferAttribute(o,H),F.copy(z);const L=h[H];R.copy(L),R.sub(z.multiplyScalar(z.dot(L))).normalize(),A.crossVectors(F,L);const k=A.dot(f[H])<0?-1:1;c.setXYZW(H,R.x,R.y,R.z,k)}for(let H=0,L=b.length;H<L;++H){const C=b[H],k=C.start,oe=C.count;for(let K=k,ae=k+oe;K<ae;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const o=new G,l=new G,c=new G,h=new G,f=new G,p=new G,m=new G,_=new G;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),h.fromBufferAttribute(s,M),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(m),f.add(m),p.add(m),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),s.setXYZ(x+0,m.x,m.y,m.z),s.setXYZ(x+1,m.x,m.y,m.z),s.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(h,f){const p=h.array,m=h.itemSize,_=h.normalized,x=new p.constructor(f.length*m);let y=0,M=0;for(let T=0,S=f.length;T<S;T++){h.isInterleavedBufferAttribute?y=f[T]*h.data.stride+h.offset:y=f[T]*m;for(let v=0;v<m;v++)x[M++]=p[y++]}return new Mi(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,s=this.index.array,o=this.attributes;for(const h in o){const f=o[h],p=e(f,s);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let m=0,_=p.length;m<_;m++){const x=p[m],y=e(x,s);f.push(y)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const p=c[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const p=s[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];m.push(y.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let x=0,y=_.length;x<y;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Ut,Xr=new pu,Ul=new ga,Xm=new G,Fl=new G,Ol=new G,kl=new G,xh=new G,zl=new G,Ym=new G,Bl=new G;class Xn extends vn{constructor(e=new Yn,t=new n_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){zl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=h[f],_=l[f];m!==0&&(xh.fromBufferAttribute(_,e),c?zl.addScaledVector(xh,m):zl.addScaledVector(xh.sub(t),m))}t.add(zl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ul.copy(s.boundingSphere),Ul.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ul,Xm)===null||Xr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Wm),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,x=l.groups,y=l.drawRange;if(h!==null)if(Array.isArray(c))for(let M=0,T=x.length;M<T;M++){const S=x[M],v=c[S.materialIndex],b=Math.max(S.start,y.start),R=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,z=R;A<z;A+=3){const F=h.getX(A),U=h.getX(A+1),H=h.getX(A+2);o=Hl(this,v,e,s,p,m,_,F,U,H),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=M,v=T;S<v;S+=3){const b=h.getX(S),R=h.getX(S+1),A=h.getX(S+2);o=Hl(this,c,e,s,p,m,_,b,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=x.length;M<T;M++){const S=x[M],v=c[S.materialIndex],b=Math.max(S.start,y.start),R=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,z=R;A<z;A+=3){const F=A,U=A+1,H=A+2;o=Hl(this,v,e,s,p,m,_,F,U,H),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=M,v=T;S<v;S+=3){const b=S,R=S+1,A=S+2;o=Hl(this,c,e,s,p,m,_,b,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function kx(r,e,t,s,o,l,c,h){let f;if(e.side===Un?f=s.intersectTriangle(c,l,o,!0,h):f=s.intersectTriangle(o,l,c,e.side===wr,h),f===null)return null;Bl.copy(h),Bl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:r}}function Hl(r,e,t,s,o,l,c,h,f,p){r.getVertexPosition(h,Fl),r.getVertexPosition(f,Ol),r.getVertexPosition(p,kl);const m=kx(r,e,t,s,Fl,Ol,kl,Ym);if(m){const _=new G;hi.getBarycoord(Ym,Fl,Ol,kl,_),o&&(m.uv=hi.getInterpolatedAttribute(o,h,f,p,_,new Re)),l&&(m.uv1=hi.getInterpolatedAttribute(l,h,f,p,_,new Re)),c&&(m.normal=hi.getInterpolatedAttribute(c,h,f,p,_,new G),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const x={a:h,b:f,c:p,normal:new G,materialIndex:0};hi.getNormal(Fl,Ol,kl,x.normal),m.face=x,m.barycoord=_}return m}class _a extends Yn{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const h=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],m=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,o,c,2),M("x","z","y",1,-1,e,s,-t,o,c,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(f),this.setAttribute("position",new On(p,3)),this.setAttribute("normal",new On(m,3)),this.setAttribute("uv",new On(_,2));function M(T,S,v,b,R,A,z,F,U,H,L){const C=A/U,k=z/H,oe=A/2,K=z/2,ae=F/2,ce=U+1,ie=H+1;let ue=0,V=0;const le=new G;for(let re=0;re<ie;re++){const O=re*k-K;for(let ee=0;ee<ce;ee++){const Oe=ee*C-oe;le[T]=Oe*b,le[S]=O*R,le[v]=ae,p.push(le.x,le.y,le.z),le[T]=0,le[S]=0,le[v]=F>0?1:-1,m.push(le.x,le.y,le.z),_.push(ee/U),_.push(1-re/H),ue+=1}}for(let re=0;re<H;re++)for(let O=0;O<U;O++){const ee=x+O+ce*re,Oe=x+O+ce*(re+1),J=x+(O+1)+ce*(re+1),fe=x+(O+1)+ce*re;f.push(ee,Oe,fe),f.push(Oe,J,fe),V+=6}h.addGroup(y,V,L),y+=V,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=_o(r[t]);for(const o in s)e[o]=s[o]}return e}function zx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function s_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Bx={clone:_o,merge:wn};var Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class o_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new G,jm=new Re,qm=new Re;class Wn extends o_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,jm,qm),t.subVectors(qm,jm)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*s/p,o*=c.width/f,s*=c.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,js=1;class Gx extends vn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(Ys,js,e,t);o.layers=this.layers,this.add(o);const l=new Wn(Ys,js,e,t);l.layers=this.layers,this.add(l);const c=new Wn(Ys,js,e,t);c.layers=this.layers,this.add(c);const h=new Wn(Ys,js,e,t);h.layers=this.layers,this.add(h);const f=new Wn(Ys,js,e,t);f.layers=this.layers,this.add(f);const p=new Wn(Ys,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,h,f]=t;for(const p of t)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,h),e.setRenderTarget(s,3,o),e.render(t,f),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(_,x,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class a_ extends Fn{constructor(e,t,s,o,l,c,h,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:ho,super(e,t,s,o,l,c,h,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wx extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new a_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new _a(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:Er});l.uniforms.tEquirect.value=t;const c=new Xn(o,l),h=t.minFilter;return t.minFilter===ts&&(t.minFilter=Si),new Gx(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class Xx extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yh=new G,Yx=new G,jx=new dt;class Sr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=yh.subVectors(s,t).cross(Yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(yh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||jx.getNormalMatrix(e),o=this.coplanarPoint(yh).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new ga,Vl=new G;class zf{constructor(e=new Sr,t=new Sr,s=new Sr,o=new Sr,l=new Sr,c=new Sr){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(o),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Xi){const s=this.planes,o=e.elements,l=o[0],c=o[1],h=o[2],f=o[3],p=o[4],m=o[5],_=o[6],x=o[7],y=o[8],M=o[9],T=o[10],S=o[11],v=o[12],b=o[13],R=o[14],A=o[15];if(s[0].setComponents(f-l,x-p,S-y,A-v).normalize(),s[1].setComponents(f+l,x+p,S+y,A+v).normalize(),s[2].setComponents(f+c,x+m,S+M,A+b).normalize(),s[3].setComponents(f-c,x-m,S-M,A-b).normalize(),s[4].setComponents(f-h,x-_,S-T,A-R).normalize(),t===Xi)s[5].setComponents(f+h,x+_,S+T,A+R).normalize();else if(t===lu)s[5].setComponents(h,_,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class l_ extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new G,hu=new G,Zm=new Ut,na=new pu,Gl=new ga,Sh=new G,$m=new G;class qx extends vn{constructor(e=new Yn,t=new l_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)cu.fromBufferAttribute(t,o-1),hu.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=cu.distanceTo(hu);e.setAttribute("lineDistance",new On(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gl.copy(s.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;Zm.copy(o).invert(),na.copy(e.ray).applyMatrix4(Zm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,m=s.index,x=s.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=y,S=M-1;T<S;T+=p){const v=m.getX(T),b=m.getX(T+1),R=Wl(this,e,na,f,v,b);R&&t.push(R)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(y),v=Wl(this,e,na,f,T,S);v&&t.push(v)}}else{const y=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let T=y,S=M-1;T<S;T+=p){const v=Wl(this,e,na,f,T,T+1);v&&t.push(v)}if(this.isLineLoop){const T=Wl(this,e,na,f,M-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Wl(r,e,t,s,o,l){const c=r.geometry.attributes.position;if(cu.fromBufferAttribute(c,o),hu.fromBufferAttribute(c,l),t.distanceSqToSegment(cu,hu,Sh,$m)>s)return;Sh.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Sh);if(!(f<e.near||f>e.far))return{distance:f,point:$m.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class u_ extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new Ut,Mf=new pu,Xl=new ga,Yl=new G;class Zx extends vn{constructor(e=new Yn,t=new u_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xl.copy(s.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;Km.copy(o).invert(),Mf.copy(e.ray).applyMatrix4(Km);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let M=x,T=y;M<T;M++){const S=p.getX(M);Yl.fromBufferAttribute(_,S),Jm(Yl,S,f,o,e,t,this)}}else{const x=Math.max(0,c.start),y=Math.min(_.count,c.start+c.count);for(let M=x,T=y;M<T;M++)Yl.fromBufferAttribute(_,M),Jm(Yl,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Jm(r,e,t,s,o,l,c){const h=Mf.distanceSqToPoint(r);if(h<t){const f=new G;Mf.closestPointToPoint(r,f),f.applyMatrix4(s);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}let ns=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}};class c_ extends Fn{constructor(e,t,s,o,l,c,h,f,p,m=ro){if(m!==ro&&m!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===ro&&(s=rs),s===void 0&&m===mo&&(s=po),super(null,o,l,c,h,f,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:di,this.minFilter=f!==void 0?f:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let o=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let h=0,f=l-1,p;for(;h<=f;)if(o=Math.floor(h+(f-h)/2),p=s[o]-c,p<0)h=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,s[o]===c)return o/(l-1);const m=s[o],x=s[o+1]-m,y=(c-m)/x;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),h=this.getPoint(l),f=t||(c.isVector2?new Re:new G);return f.copy(h).sub(c).normalize(),f}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new G,o=[],l=[],c=[],h=new G,f=new Ut;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new G)}l[0]=new G,c[0]=new G;let p=Number.MAX_VALUE;const m=Math.abs(o[0].x),_=Math.abs(o[0].y),x=Math.abs(o[0].z);m<=p&&(p=m,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),x<=p&&s.set(0,0,1),h.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],h),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),h.crossVectors(o[y-1],o[y]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(mt(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(f.makeRotationAxis(h,M))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(mt(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(h.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(o[M],y*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bf extends wi{constructor(e=0,t=0,s=1,o=1,l=0,c=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new Re){const s=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const m=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=f-this.aX,y=p-this.aY;f=x*m-y*_+this.aX,p=x*_+y*m+this.aY}return s.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $x extends Bf{constructor(e,t,s,o,l,c){super(e,t,s,s,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Hf(){let r=0,e=0,t=0,s=0;function o(l,c,h,f){r=l,e=h,t=-3*l+3*c-2*h-f,s=2*l-2*c+h+f}return{initCatmullRom:function(l,c,h,f,p){o(c,h,p*(h-l),p*(f-c))},initNonuniformCatmullRom:function(l,c,h,f,p,m,_){let x=(c-l)/p-(h-l)/(p+m)+(h-c)/m,y=(h-c)/m-(f-c)/(m+_)+(f-h)/_;x*=m,y*=m,o(c,h,x,y)},calc:function(l){const c=l*l,h=c*l;return r+e*l+t*c+s*h}}}const jl=new G,Mh=new Hf,Eh=new Hf,Th=new Hf;class Kx extends wi{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new G){const s=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let h=Math.floor(c),f=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let p,m;this.closed||h>0?p=o[(h-1)%l]:(jl.subVectors(o[0],o[1]).add(o[0]),p=jl);const _=o[h%l],x=o[(h+1)%l];if(this.closed||h+2<l?m=o[(h+2)%l]:(jl.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=jl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),y),T=Math.pow(_.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(m),y);T<1e-4&&(T=1),M<1e-4&&(M=T),S<1e-4&&(S=T),Mh.initNonuniformCatmullRom(p.x,_.x,x.x,m.x,M,T,S),Eh.initNonuniformCatmullRom(p.y,_.y,x.y,m.y,M,T,S),Th.initNonuniformCatmullRom(p.z,_.z,x.z,m.z,M,T,S)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(p.x,_.x,x.x,m.x,this.tension),Eh.initCatmullRom(p.y,_.y,x.y,m.y,this.tension),Th.initCatmullRom(p.z,_.z,x.z,m.z,this.tension));return s.set(Mh.calc(f),Eh.calc(f),Th.calc(f)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(new G().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qm(r,e,t,s,o){const l=(s-e)*.5,c=(o-t)*.5,h=r*r,f=r*h;return(2*t-2*s+l+c)*f+(-3*t+3*s-2*l-c)*h+l*r+t}function Jx(r,e){const t=1-r;return t*t*e}function Qx(r,e){return 2*(1-r)*r*e}function ey(r,e){return r*r*e}function aa(r,e,t,s){return Jx(r,e)+Qx(r,t)+ey(r,s)}function ty(r,e){const t=1-r;return t*t*t*e}function ny(r,e){const t=1-r;return 3*t*t*r*e}function iy(r,e){return 3*(1-r)*r*r*e}function ry(r,e){return r*r*r*e}function la(r,e,t,s,o){return ty(r,e)+ny(r,t)+iy(r,s)+ry(r,o)}class h_ extends wi{constructor(e=new Re,t=new Re,s=new Re,o=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=o}getPoint(e,t=new Re){const s=t,o=this.v0,l=this.v1,c=this.v2,h=this.v3;return s.set(la(e,o.x,l.x,c.x,h.x),la(e,o.y,l.y,c.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sy extends wi{constructor(e=new G,t=new G,s=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=o}getPoint(e,t=new G){const s=t,o=this.v0,l=this.v1,c=this.v2,h=this.v3;return s.set(la(e,o.x,l.x,c.x,h.x),la(e,o.y,l.y,c.y,h.y),la(e,o.z,l.z,c.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class f_ extends wi{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oy extends wi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d_ extends wi{constructor(e=new Re,t=new Re,s=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new Re){const s=t,o=this.v0,l=this.v1,c=this.v2;return s.set(aa(e,o.x,l.x,c.x),aa(e,o.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ay extends wi{constructor(e=new G,t=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new G){const s=t,o=this.v0,l=this.v1,c=this.v2;return s.set(aa(e,o.x,l.x,c.x),aa(e,o.y,l.y,c.y),aa(e,o.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p_ extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const s=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),h=l-c,f=o[c===0?c:c-1],p=o[c],m=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return s.set(Qm(h,f.x,p.x,m.x,_.x),Qm(h,f.y,p.y,m.y,_.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(new Re().fromArray(o))}return this}}var Ef=Object.freeze({__proto__:null,ArcCurve:$x,CatmullRomCurve3:Kx,CubicBezierCurve:h_,CubicBezierCurve3:sy,EllipseCurve:Bf,LineCurve:f_,LineCurve3:oy,QuadraticBezierCurve:d_,QuadraticBezierCurve3:ay,SplineCurve:p_});class ly extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ef[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=s){const c=o[l]-s,h=this.curves[l],f=h.getLength(),p=f===0?0:1-c/f;return h.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,o=this.curves.length;s<o;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],h=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(h);for(let p=0;p<f.length;p++){const m=f[p];s&&s.equals(m)||(t.push(m),s=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const o=e.curves[t];this.curves.push(new Ef[o.type]().fromJSON(o))}return this}}class Tf extends ly{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new f_(this.currentPoint.clone(),new Re(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,o){const l=new d_(this.currentPoint.clone(),new Re(e,t),new Re(s,o));return this.curves.push(l),this.currentPoint.set(s,o),this}bezierCurveTo(e,t,s,o,l,c){const h=new h_(this.currentPoint.clone(),new Re(e,t),new Re(s,o),new Re(l,c));return this.curves.push(h),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new p_(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,o,l,c){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+h,t+f,s,o,l,c),this}absarc(e,t,s,o,l,c){return this.absellipse(e,t,s,s,o,l,c),this}ellipse(e,t,s,o,l,c,h,f){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+p,t+m,s,o,l,c,h,f),this}absellipse(e,t,s,o,l,c,h,f){const p=new Bf(e,t,s,o,l,c,h,f);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class su extends Tf{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,o=this.holes.length;s<o;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const o=e.holes[t];this.holes.push(new Tf().fromJSON(o))}return this}}const uy={triangulate:function(r,e,t=2){const s=e&&e.length,o=s?e[0]*t:r.length;let l=m_(r,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let h,f,p,m,_,x,y;if(s&&(l=py(r,e,l,t)),r.length>80*t){h=p=r[0],f=m=r[1];for(let M=t;M<o;M+=t)_=r[M],x=r[M+1],_<h&&(h=_),x<f&&(f=x),_>p&&(p=_),x>m&&(m=x);y=Math.max(p-h,m-f),y=y!==0?32767/y:0}return ha(l,c,t,h,f,y,0),c}};function m_(r,e,t,s,o){let l,c;if(o===wy(r,e,t,s)>0)for(l=e;l<t;l+=s)c=eg(l,r[l],r[l+1],c);else for(l=t-s;l>=e;l-=s)c=eg(l,r[l],r[l+1],c);return c&&mu(c,c.next)&&(da(c),c=c.next),c}function as(r,e){if(!r)return r;e||(e=r);let t=r,s;do if(s=!1,!t.steiner&&(mu(t,t.next)||Gt(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function ha(r,e,t,s,o,l,c){if(!r)return;!c&&l&&xy(r,s,o,l);let h=r,f,p;for(;r.prev!==r.next;){if(f=r.prev,p=r.next,l?hy(r,s,o,l):cy(r)){e.push(f.i/t|0),e.push(r.i/t|0),e.push(p.i/t|0),da(r),r=p.next,h=p.next;continue}if(r=p,r===h){c?c===1?(r=fy(as(r),e,t),ha(r,e,t,s,o,l,2)):c===2&&dy(r,e,t,s,o,l):ha(as(r),e,t,s,o,l,1);break}}}function cy(r){const e=r.prev,t=r,s=r.next;if(Gt(e,t,s)>=0)return!1;const o=e.x,l=t.x,c=s.x,h=e.y,f=t.y,p=s.y,m=o<l?o<c?o:c:l<c?l:c,_=h<f?h<p?h:p:f<p?f:p,x=o>l?o>c?o:c:l>c?l:c,y=h>f?h>p?h:p:f>p?f:p;let M=s.next;for(;M!==e;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=y&&Qs(o,h,l,f,c,p,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function hy(r,e,t,s){const o=r.prev,l=r,c=r.next;if(Gt(o,l,c)>=0)return!1;const h=o.x,f=l.x,p=c.x,m=o.y,_=l.y,x=c.y,y=h<f?h<p?h:p:f<p?f:p,M=m<_?m<x?m:x:_<x?_:x,T=h>f?h>p?h:p:f>p?f:p,S=m>_?m>x?m:x:_>x?_:x,v=wf(y,M,e,t,s),b=wf(T,S,e,t,s);let R=r.prevZ,A=r.nextZ;for(;R&&R.z>=v&&A&&A.z<=b;){if(R.x>=y&&R.x<=T&&R.y>=M&&R.y<=S&&R!==o&&R!==c&&Qs(h,m,f,_,p,x,R.x,R.y)&&Gt(R.prev,R,R.next)>=0||(R=R.prevZ,A.x>=y&&A.x<=T&&A.y>=M&&A.y<=S&&A!==o&&A!==c&&Qs(h,m,f,_,p,x,A.x,A.y)&&Gt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;R&&R.z>=v;){if(R.x>=y&&R.x<=T&&R.y>=M&&R.y<=S&&R!==o&&R!==c&&Qs(h,m,f,_,p,x,R.x,R.y)&&Gt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;A&&A.z<=b;){if(A.x>=y&&A.x<=T&&A.y>=M&&A.y<=S&&A!==o&&A!==c&&Qs(h,m,f,_,p,x,A.x,A.y)&&Gt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function fy(r,e,t){let s=r;do{const o=s.prev,l=s.next.next;!mu(o,l)&&g_(o,s,s.next,l)&&fa(o,l)&&fa(l,o)&&(e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),da(s),da(s.next),s=r=l),s=s.next}while(s!==r);return as(s)}function dy(r,e,t,s,o,l){let c=r;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&My(c,h)){let f=__(c,h);c=as(c,c.next),f=as(f,f.next),ha(c,e,t,s,o,l,0),ha(f,e,t,s,o,l,0);return}h=h.next}c=c.next}while(c!==r)}function py(r,e,t,s){const o=[];let l,c,h,f,p;for(l=0,c=e.length;l<c;l++)h=e[l]*s,f=l<c-1?e[l+1]*s:r.length,p=m_(r,h,f,s,!1),p===p.next&&(p.steiner=!0),o.push(Sy(p));for(o.sort(my),l=0;l<o.length;l++)t=gy(o[l],t);return t}function my(r,e){return r.x-e.x}function gy(r,e){const t=_y(r,e);if(!t)return e;const s=__(t,r);return as(s,s.next),as(t,t.next)}function _y(r,e){let t=e,s=-1/0,o;const l=r.x,c=r.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const x=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=l&&x>s&&(s=x,o=t.x<t.next.x?t:t.next,x===l))return o}t=t.next}while(t!==e);if(!o)return null;const h=o,f=o.x,p=o.y;let m=1/0,_;t=o;do l>=t.x&&t.x>=f&&l!==t.x&&Qs(c<p?l:s,c,f,p,c<p?s:l,c,t.x,t.y)&&(_=Math.abs(c-t.y)/(l-t.x),fa(t,r)&&(_<m||_===m&&(t.x>o.x||t.x===o.x&&vy(o,t)))&&(o=t,m=_)),t=t.next;while(t!==h);return o}function vy(r,e){return Gt(r.prev,r,e.prev)<0&&Gt(e.next,r,r.next)<0}function xy(r,e,t,s){let o=r;do o.z===0&&(o.z=wf(o.x,o.y,e,t,s)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,yy(o)}function yy(r){let e,t,s,o,l,c,h,f,p=1;do{for(t=r,r=null,l=null,c=0;t;){for(c++,s=t,h=0,e=0;e<p&&(h++,s=s.nextZ,!!s);e++);for(f=p;h>0||f>0&&s;)h!==0&&(f===0||!s||t.z<=s.z)?(o=t,t=t.nextZ,h--):(o=s,s=s.nextZ,f--),l?l.nextZ=o:r=o,o.prevZ=l,l=o;t=s}l.nextZ=null,p*=2}while(c>1);return r}function wf(r,e,t,s,o){return r=(r-t)*o|0,e=(e-s)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Sy(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qs(r,e,t,s,o,l,c,h){return(o-c)*(e-h)>=(r-c)*(l-h)&&(r-c)*(s-h)>=(t-c)*(e-h)&&(t-c)*(l-h)>=(o-c)*(s-h)}function My(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Ey(r,e)&&(fa(r,e)&&fa(e,r)&&Ty(r,e)&&(Gt(r.prev,r,e.prev)||Gt(r,e.prev,e))||mu(r,e)&&Gt(r.prev,r,r.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function mu(r,e){return r.x===e.x&&r.y===e.y}function g_(r,e,t,s){const o=Zl(Gt(r,e,t)),l=Zl(Gt(r,e,s)),c=Zl(Gt(t,s,r)),h=Zl(Gt(t,s,e));return!!(o!==l&&c!==h||o===0&&ql(r,t,e)||l===0&&ql(r,s,e)||c===0&&ql(t,r,s)||h===0&&ql(t,e,s))}function ql(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Zl(r){return r>0?1:r<0?-1:0}function Ey(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&g_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function fa(r,e){return Gt(r.prev,r,r.next)<0?Gt(r,e,r.next)>=0&&Gt(r,r.prev,e)>=0:Gt(r,e,r.prev)<0||Gt(r,r.next,e)<0}function Ty(r,e){let t=r,s=!1;const o=(r.x+e.x)/2,l=(r.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==r);return s}function __(r,e){const t=new Af(r.i,r.x,r.y),s=new Af(e.i,e.x,e.y),o=r.next,l=e.prev;return r.next=e,e.prev=r,t.next=o,o.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function eg(r,e,t,s){const o=new Af(r,e,t);return s?(o.next=s.next,o.prev=s,s.next.prev=o,s.next=o):(o.prev=o,o.next=o),o}function da(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Af(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wy(r,e,t,s){let o=0;for(let l=e,c=t-s;l<t;l+=s)o+=(r[c]-r[l])*(r[l+1]+r[c+1]),c=l;return o}class oo{static area(e){const t=e.length;let s=0;for(let o=t-1,l=0;l<t;o=l++)s+=e[o].x*e[l].y-e[l].x*e[o].y;return s*.5}static isClockWise(e){return oo.area(e)<0}static triangulateShape(e,t){const s=[],o=[],l=[];tg(e),ng(s,e);let c=e.length;t.forEach(tg);for(let f=0;f<t.length;f++)o.push(c),c+=t[f].length,ng(s,t[f]);const h=uy.triangulate(s,o);for(let f=0;f<h.length;f+=3)l.push(h.slice(f,f+3));return l}}function tg(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ng(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Vf extends Yn{constructor(e=new su([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,o=[],l=[];for(let h=0,f=e.length;h<f;h++){const p=e[h];c(p)}this.setAttribute("position",new On(o,3)),this.setAttribute("uv",new On(l,2)),this.computeVertexNormals();function c(h){const f=[],p=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let x=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,T=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Ay;let R,A=!1,z,F,U,H;v&&(R=v.getSpacedPoints(m),A=!0,x=!1,z=v.computeFrenetFrames(m,!1),F=new G,U=new G,H=new G),x||(S=0,y=0,M=0,T=0);const L=h.extractPoints(p);let C=L.shape;const k=L.holes;if(!oo.isClockWise(C)){C=C.reverse();for(let ge=0,we=k.length;ge<we;ge++){const I=k[ge];oo.isClockWise(I)&&(k[ge]=I.reverse())}}const K=oo.triangulateShape(C,k),ae=C;for(let ge=0,we=k.length;ge<we;ge++){const I=k[ge];C=C.concat(I)}function ce(ge,we,I){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(we,I)}const ie=C.length,ue=K.length;function V(ge,we,I){let Ke,Se,Be;const Ce=ge.x-we.x,tt=ge.y-we.y,Ie=I.x-ge.x,D=I.y-ge.y,w=Ce*Ce+tt*tt,Z=Ce*D-tt*Ie;if(Math.abs(Z)>Number.EPSILON){const he=Math.sqrt(w),_e=Math.sqrt(Ie*Ie+D*D),de=we.x-tt/he,qe=we.y+Ce/he,be=I.x-D/_e,He=I.y+Ie/_e,ft=((be-de)*D-(He-qe)*Ie)/(Ce*D-tt*Ie);Ke=de+Ce*ft-ge.x,Se=qe+tt*ft-ge.y;const Me=Ke*Ke+Se*Se;if(Me<=2)return new Re(Ke,Se);Be=Math.sqrt(Me/2)}else{let he=!1;Ce>Number.EPSILON?Ie>Number.EPSILON&&(he=!0):Ce<-Number.EPSILON?Ie<-Number.EPSILON&&(he=!0):Math.sign(tt)===Math.sign(D)&&(he=!0),he?(Ke=-tt,Se=Ce,Be=Math.sqrt(w)):(Ke=Ce,Se=tt,Be=Math.sqrt(w/2))}return new Re(Ke/Be,Se/Be)}const le=[];for(let ge=0,we=ae.length,I=we-1,Ke=ge+1;ge<we;ge++,I++,Ke++)I===we&&(I=0),Ke===we&&(Ke=0),le[ge]=V(ae[ge],ae[I],ae[Ke]);const re=[];let O,ee=le.concat();for(let ge=0,we=k.length;ge<we;ge++){const I=k[ge];O=[];for(let Ke=0,Se=I.length,Be=Se-1,Ce=Ke+1;Ke<Se;Ke++,Be++,Ce++)Be===Se&&(Be=0),Ce===Se&&(Ce=0),O[Ke]=V(I[Ke],I[Be],I[Ce]);re.push(O),ee=ee.concat(O)}for(let ge=0;ge<S;ge++){const we=ge/S,I=y*Math.cos(we*Math.PI/2),Ke=M*Math.sin(we*Math.PI/2)+T;for(let Se=0,Be=ae.length;Se<Be;Se++){const Ce=ce(ae[Se],le[Se],Ke);me(Ce.x,Ce.y,-I)}for(let Se=0,Be=k.length;Se<Be;Se++){const Ce=k[Se];O=re[Se];for(let tt=0,Ie=Ce.length;tt<Ie;tt++){const D=ce(Ce[tt],O[tt],Ke);me(D.x,D.y,-I)}}}const Oe=M+T;for(let ge=0;ge<ie;ge++){const we=x?ce(C[ge],ee[ge],Oe):C[ge];A?(U.copy(z.normals[0]).multiplyScalar(we.x),F.copy(z.binormals[0]).multiplyScalar(we.y),H.copy(R[0]).add(U).add(F),me(H.x,H.y,H.z)):me(we.x,we.y,0)}for(let ge=1;ge<=m;ge++)for(let we=0;we<ie;we++){const I=x?ce(C[we],ee[we],Oe):C[we];A?(U.copy(z.normals[ge]).multiplyScalar(I.x),F.copy(z.binormals[ge]).multiplyScalar(I.y),H.copy(R[ge]).add(U).add(F),me(H.x,H.y,H.z)):me(I.x,I.y,_/m*ge)}for(let ge=S-1;ge>=0;ge--){const we=ge/S,I=y*Math.cos(we*Math.PI/2),Ke=M*Math.sin(we*Math.PI/2)+T;for(let Se=0,Be=ae.length;Se<Be;Se++){const Ce=ce(ae[Se],le[Se],Ke);me(Ce.x,Ce.y,_+I)}for(let Se=0,Be=k.length;Se<Be;Se++){const Ce=k[Se];O=re[Se];for(let tt=0,Ie=Ce.length;tt<Ie;tt++){const D=ce(Ce[tt],O[tt],Ke);A?me(D.x,D.y+R[m-1].y,R[m-1].x+I):me(D.x,D.y,_+I)}}}J(),fe();function J(){const ge=o.length/3;if(x){let we=0,I=ie*we;for(let Ke=0;Ke<ue;Ke++){const Se=K[Ke];Pe(Se[2]+I,Se[1]+I,Se[0]+I)}we=m+S*2,I=ie*we;for(let Ke=0;Ke<ue;Ke++){const Se=K[Ke];Pe(Se[0]+I,Se[1]+I,Se[2]+I)}}else{for(let we=0;we<ue;we++){const I=K[we];Pe(I[2],I[1],I[0])}for(let we=0;we<ue;we++){const I=K[we];Pe(I[0]+ie*m,I[1]+ie*m,I[2]+ie*m)}}s.addGroup(ge,o.length/3-ge,0)}function fe(){const ge=o.length/3;let we=0;Ee(ae,we),we+=ae.length;for(let I=0,Ke=k.length;I<Ke;I++){const Se=k[I];Ee(Se,we),we+=Se.length}s.addGroup(ge,o.length/3-ge,1)}function Ee(ge,we){let I=ge.length;for(;--I>=0;){const Ke=I;let Se=I-1;Se<0&&(Se=ge.length-1);for(let Be=0,Ce=m+S*2;Be<Ce;Be++){const tt=ie*Be,Ie=ie*(Be+1),D=we+Ke+tt,w=we+Se+tt,Z=we+Se+Ie,he=we+Ke+Ie;ze(D,w,Z,he)}}}function me(ge,we,I){f.push(ge),f.push(we),f.push(I)}function Pe(ge,we,I){$e(ge),$e(we),$e(I);const Ke=o.length/3,Se=b.generateTopUV(s,o,Ke-3,Ke-2,Ke-1);gt(Se[0]),gt(Se[1]),gt(Se[2])}function ze(ge,we,I,Ke){$e(ge),$e(we),$e(Ke),$e(we),$e(I),$e(Ke);const Se=o.length/3,Be=b.generateSideWallUV(s,o,Se-6,Se-3,Se-2,Se-1);gt(Be[0]),gt(Be[1]),gt(Be[3]),gt(Be[1]),gt(Be[2]),gt(Be[3])}function $e(ge){o.push(f[ge*3+0]),o.push(f[ge*3+1]),o.push(f[ge*3+2])}function gt(ge){l.push(ge.x),l.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return Cy(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const h=t[e.shapes[l]];s.push(h)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Ef[o.type]().fromJSON(o)),new Vf(s,e.options)}}const Ay={generateTopUV:function(r,e,t,s,o){const l=e[t*3],c=e[t*3+1],h=e[s*3],f=e[s*3+1],p=e[o*3],m=e[o*3+1];return[new Re(l,c),new Re(h,f),new Re(p,m)]},generateSideWallUV:function(r,e,t,s,o,l){const c=e[t*3],h=e[t*3+1],f=e[t*3+2],p=e[s*3],m=e[s*3+1],_=e[s*3+2],x=e[o*3],y=e[o*3+1],M=e[o*3+2],T=e[l*3],S=e[l*3+1],v=e[l*3+2];return Math.abs(h-m)<Math.abs(c-p)?[new Re(c,1-f),new Re(p,1-_),new Re(x,1-M),new Re(T,1-v)]:[new Re(h,1-f),new Re(m,1-_),new Re(y,1-M),new Re(S,1-v)]}};function Cy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let s=0,o=r.length;s<o;s++){const l=r[s];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gu extends Yn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,h=Math.floor(s),f=Math.floor(o),p=h+1,m=f+1,_=e/h,x=t/f,y=[],M=[],T=[],S=[];for(let v=0;v<m;v++){const b=v*x-c;for(let R=0;R<p;R++){const A=R*_-l;M.push(A,-b,0),T.push(0,0,1),S.push(R/h),S.push(1-v/f)}}for(let v=0;v<f;v++)for(let b=0;b<h;b++){const R=b+p*v,A=b+p*(v+1),z=b+1+p*(v+1),F=b+1+p*v;y.push(R,A,F),y.push(A,z,F)}this.setIndex(y),this.setAttribute("position",new On(M,3)),this.setAttribute("normal",new On(T,3)),this.setAttribute("uv",new On(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class fu extends Yn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(c+h,Math.PI);let p=0;const m=[],_=new G,x=new G,y=[],M=[],T=[],S=[];for(let v=0;v<=s;v++){const b=[],R=v/s;let A=0;v===0&&c===0?A=.5/t:v===s&&f===Math.PI&&(A=-.5/t);for(let z=0;z<=t;z++){const F=z/t;_.x=-e*Math.cos(o+F*l)*Math.sin(c+R*h),_.y=e*Math.cos(c+R*h),_.z=e*Math.sin(o+F*l)*Math.sin(c+R*h),M.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),S.push(F+A,1-R),b.push(p++)}m.push(b)}for(let v=0;v<s;v++)for(let b=0;b<t;b++){const R=m[v][b+1],A=m[v][b],z=m[v+1][b],F=m[v+1][b+1];(v!==0||c>0)&&y.push(R,A,F),(v!==s-1||f<Math.PI)&&y.push(A,z,F)}this.setIndex(y),this.setAttribute("position",new On(M,3)),this.setAttribute("normal",new On(T,3)),this.setAttribute("uv",new On(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ig extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zg,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ry extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Py extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class by{constructor(e,t,s){const o=this;let l=!1,c=0,h=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){h++,l===!1&&o.onStart!==void 0&&o.onStart(m,c,h),l=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,h),c===h&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],M=p[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const Ly=new by;class Gf{constructor(e){this.manager=e!==void 0?e:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class Dy extends Error{constructor(e,t){super(e),this.response=t}}class Iy extends Gf{constructor(e){super(e)}load(e,t,s,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=rg.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:s,onError:o});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:s,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,f=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const m=Hi[e],_=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=x?parseInt(x):0,M=y!==0;let T=0;const S=new ReadableStream({start(v){b();function b(){_.read().then(({done:R,value:A})=>{if(R)v.close();else{T+=A.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:y});for(let F=0,U=m.length;F<U;F++){const H=m[F];H.onProgress&&H.onProgress(z)}v.enqueue(A),b()}},R=>{v.error(R)})}}});return new Response(S)}else throw new Dy(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(f){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(m=>new DOMParser().parseFromString(m,h));case"json":return p.json();default:if(h===void 0)return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),x=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(x);return p.arrayBuffer().then(M=>y.decode(M))}}}).then(p=>{rg.add(e,p);const m=Hi[e];delete Hi[e];for(let _=0,x=m.length;_<x;_++){const y=m[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const m=Hi[e];if(m===void 0)throw this.manager.itemError(e),p;delete Hi[e];for(let _=0,x=m.length;_<x;_++){const y=m[_];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class v_ extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wh=new Ut,sg=new G,og=new G;class Ny{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(og),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ag=new Ut,ia=new G,Ah=new G;class Uy extends Ny{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const s=this.camera,o=this.matrix,l=e.distance||s.far;l!==s.far&&(s.far=l,s.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),s.position.copy(ia),Ah.copy(s.position),Ah.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(Ah),s.updateMatrixWorld(),o.makeTranslation(-ia.x,-ia.y,-ia.z),ag.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ag)}}class Fy extends v_{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new Uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Oy extends o_{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,h-=m*this.view.offsetY,f=h-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ky extends v_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zy extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lg{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class By{constructor(){this.type="ShapePath",this.color=new St,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Tf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,s,o){return this.currentPath.quadraticCurveTo(e,t,s,o),this}bezierCurveTo(e,t,s,o,l,c){return this.currentPath.bezierCurveTo(e,t,s,o,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const b=[];for(let R=0,A=v.length;R<A;R++){const z=v[R],F=new su;F.curves=z.curves,b.push(F)}return b}function s(v,b){const R=b.length;let A=!1;for(let z=R-1,F=0;F<R;z=F++){let U=b[z],H=b[F],L=H.x-U.x,C=H.y-U.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(U=b[F],L=-L,H=b[z],C=-C),v.y<U.y||v.y>H.y)continue;if(v.y===U.y){if(v.x===U.x)return!0}else{const k=C*(v.x-U.x)-L*(v.y-U.y);if(k===0)return!0;if(k<0)continue;A=!A}}else{if(v.y!==U.y)continue;if(H.x<=v.x&&v.x<=U.x||U.x<=v.x&&v.x<=H.x)return!0}}return A}const o=oo.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,h,f;const p=[];if(l.length===1)return h=l[0],f=new su,f.curves=h.curves,p.push(f),p;let m=!o(l[0].getPoints());m=e?!m:m;const _=[],x=[];let y=[],M=0,T;x[M]=void 0,y[M]=[];for(let v=0,b=l.length;v<b;v++)h=l[v],T=h.getPoints(),c=o(T),c=e?!c:c,c?(!m&&x[M]&&M++,x[M]={s:new su,p:T},x[M].s.curves=h.curves,m&&M++,y[M]=[]):y[M].push({h,p:T[0]});if(!x[0])return t(l);if(x.length>1){let v=!1,b=0;for(let R=0,A=x.length;R<A;R++)_[R]=[];for(let R=0,A=x.length;R<A;R++){const z=y[R];for(let F=0;F<z.length;F++){const U=z[F];let H=!0;for(let L=0;L<x.length;L++)s(U.p,x[L].p)&&(R!==L&&b++,H?(H=!1,_[L].push(U)):v=!0);H&&_[R].push(U)}}b>0&&v===!1&&(y=_)}let S;for(let v=0,b=x.length;v<b;v++){f=x[v].s,p.push(f),S=y[v];for(let R=0,A=S.length;R<A;R++)f.holes.push(S[R].h)}return p}}class Hy extends ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ug(r,e,t,s){const o=Vy(s);switch(t){case Vg:return r*e;case Wg:return r*e;case Xg:return r*e*2;case Yg:return r*e/o.components*o.byteLength;case Uf:return r*e/o.components*o.byteLength;case jg:return r*e*2/o.components*o.byteLength;case Ff:return r*e*2/o.components*o.byteLength;case Gg:return r*e*3/o.components*o.byteLength;case fi:return r*e*4/o.components*o.byteLength;case Of:return r*e*4/o.components*o.byteLength;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:case Jh:return Math.max(r,16)*Math.max(e,8)/4;case Zh:case Kh:return Math.max(r,8)*Math.max(e,8)/2;case Qh:case ef:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case sf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case af:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case lf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case cf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case df:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case mf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case gf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ru:case _f:case vf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qg:case xf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yf:case Sf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(r){switch(r){case ji:case zg:return{byteLength:1,components:1};case ua:case Bg:case pa:return{byteLength:2,components:1};case If:case Nf:return{byteLength:2,components:4};case rs:case Df:case Wi:return{byteLength:4,components:1};case Hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function x_(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Gy(r){const e=new WeakMap;function t(h,f){const p=h.array,m=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(f,x),r.bufferData(f,p,m),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,f,p){const m=f.array,_=f.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,m);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],T=_[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const T=_[y];r.bufferSubData(p,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(r.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,f),p.version=h.version}}return{get:o,remove:l,update:c}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:Yy,alphamap_pars_fragment:jy,alphatest_fragment:qy,alphatest_pars_fragment:Zy,aomap_fragment:$y,aomap_pars_fragment:Ky,batching_pars_vertex:Jy,batching_vertex:Qy,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:rS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:oS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:lS,color_fragment:uS,color_pars_fragment:cS,color_pars_vertex:hS,color_vertex:fS,common:dS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:_S,emissivemap_fragment:vS,emissivemap_pars_fragment:xS,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:ES,envmap_pars_fragment:TS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:FS,envmap_vertex:AS,fog_vertex:CS,fog_pars_vertex:RS,fog_fragment:PS,fog_pars_fragment:bS,gradientmap_pars_fragment:LS,lightmap_pars_fragment:DS,lights_lambert_fragment:IS,lights_lambert_pars_fragment:NS,lights_pars_begin:US,lights_toon_fragment:OS,lights_toon_pars_fragment:kS,lights_phong_fragment:zS,lights_phong_pars_fragment:BS,lights_physical_fragment:HS,lights_physical_pars_fragment:VS,lights_fragment_begin:GS,lights_fragment_maps:WS,lights_fragment_end:XS,logdepthbuf_fragment:YS,logdepthbuf_pars_fragment:jS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:ZS,map_fragment:$S,map_pars_fragment:KS,map_particle_fragment:JS,map_particle_pars_fragment:QS,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphinstance_vertex:nM,morphcolor_vertex:iM,morphnormal_vertex:rM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:uM,normal_pars_vertex:cM,normal_vertex:hM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:_M,packing:vM,premultiplied_alpha_fragment:xM,project_vertex:yM,dithering_fragment:SM,dithering_pars_fragment:MM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:AM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:PM,skinning_pars_vertex:bM,skinning_vertex:LM,skinnormal_vertex:DM,specularmap_fragment:IM,specularmap_pars_fragment:NM,tonemapping_fragment:UM,tonemapping_pars_fragment:FM,transmission_fragment:OM,transmission_pars_fragment:kM,uv_pars_fragment:zM,uv_pars_vertex:BM,uv_vertex:HM,worldpos_vertex:VM,background_vert:GM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:YM,cube_vert:jM,cube_frag:qM,depth_vert:ZM,depth_frag:$M,distanceRGBA_vert:KM,distanceRGBA_frag:JM,equirect_vert:QM,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:uE,meshnormal_frag:cE,meshphong_vert:hE,meshphong_frag:fE,meshphysical_vert:dE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:_E,points_frag:vE,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},Ne={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},yi={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};yi.physical={uniforms:wn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const $l={r:0,b:0,g:0},jr=new Ei,EE=new Ut;function TE(r,e,t,s,o,l,c){const h=new St(0);let f=l===!0?0:1,p,m,_=null,x=0,y=null;function M(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function T(R){let A=!1;const z=M(R);z===null?v(h,f):z&&z.isColor&&(v(z,1),A=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(R,A){const z=M(A);z&&(z.isCubeTexture||z.mapping===du)?(m===void 0&&(m=new Xn(new _a(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:_o(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),jr.copy(A.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),m.material.uniforms.envMap.value=z,m.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(jr)),m.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Lt,(_!==z||x!==z.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=z,x=z.version,y=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Xn(new gu(2,2),new Ar({name:"BackgroundMaterial",uniforms:_o(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Lt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,y=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function v(R,A){R.getRGB($l,s_(r)),s.buffers.color.setClear($l.r,$l.g,$l.b,A,c)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(R,A=1){h.set(R),f=A,v(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,v(h,f)},render:T,addToRenderList:S,dispose:b}}function wE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,c=!1;function h(C,k,oe,K,ae){let ce=!1;const ie=_(K,oe,k);l!==ie&&(l=ie,p(l.object)),ce=y(C,K,oe,ae),ce&&M(C,K,oe,ae),ae!==null&&e.update(ae,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,A(C,k,oe,K),ae!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function m(C){return r.deleteVertexArray(C)}function _(C,k,oe){const K=oe.wireframe===!0;let ae=s[C.id];ae===void 0&&(ae={},s[C.id]=ae);let ce=ae[k.id];ce===void 0&&(ce={},ae[k.id]=ce);let ie=ce[K];return ie===void 0&&(ie=x(f()),ce[K]=ie),ie}function x(C){const k=[],oe=[],K=[];for(let ae=0;ae<t;ae++)k[ae]=0,oe[ae]=0,K[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:K,object:C,attributes:{},index:null}}function y(C,k,oe,K){const ae=l.attributes,ce=k.attributes;let ie=0;const ue=oe.getAttributes();for(const V in ue)if(ue[V].location>=0){const re=ae[V];let O=ce[V];if(O===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;ie++}return l.attributesNum!==ie||l.index!==K}function M(C,k,oe,K){const ae={},ce=k.attributes;let ie=0;const ue=oe.getAttributes();for(const V in ue)if(ue[V].location>=0){let re=ce[V];re===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),ae[V]=O,ie++}l.attributes=ae,l.attributesNum=ie,l.index=K}function T(){const C=l.newAttributes;for(let k=0,oe=C.length;k<oe;k++)C[k]=0}function S(C){v(C,0)}function v(C,k){const oe=l.newAttributes,K=l.enabledAttributes,ae=l.attributeDivisors;oe[C]=1,K[C]===0&&(r.enableVertexAttribArray(C),K[C]=1),ae[C]!==k&&(r.vertexAttribDivisor(C,k),ae[C]=k)}function b(){const C=l.newAttributes,k=l.enabledAttributes;for(let oe=0,K=k.length;oe<K;oe++)k[oe]!==C[oe]&&(r.disableVertexAttribArray(oe),k[oe]=0)}function R(C,k,oe,K,ae,ce,ie){ie===!0?r.vertexAttribIPointer(C,k,oe,ae,ce):r.vertexAttribPointer(C,k,oe,K,ae,ce)}function A(C,k,oe,K){T();const ae=K.attributes,ce=oe.getAttributes(),ie=k.defaultAttributeValues;for(const ue in ce){const V=ce[ue];if(V.location>=0){let le=ae[ue];if(le===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,O=le.itemSize,ee=e.get(le);if(ee===void 0)continue;const Oe=ee.buffer,J=ee.type,fe=ee.bytesPerElement,Ee=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===Df;if(le.isInterleavedBufferAttribute){const me=le.data,Pe=me.stride,ze=le.offset;if(me.isInstancedInterleavedBuffer){for(let $e=0;$e<V.locationSize;$e++)v(V.location+$e,me.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<V.locationSize;$e++)S(V.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let $e=0;$e<V.locationSize;$e++)R(V.location+$e,O/V.locationSize,J,re,Pe*fe,(ze+O/V.locationSize*$e)*fe,Ee)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)v(V.location+me,le.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<V.locationSize;me++)S(V.location+me);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let me=0;me<V.locationSize;me++)R(V.location+me,O/V.locationSize,J,re,O*fe,O/V.locationSize*me*fe,Ee)}}else if(ie!==void 0){const re=ie[ue];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(V.location,re);break;case 3:r.vertexAttrib3fv(V.location,re);break;case 4:r.vertexAttrib4fv(V.location,re);break;default:r.vertexAttrib1fv(V.location,re)}}}}b()}function z(){H();for(const C in s){const k=s[C];for(const oe in k){const K=k[oe];for(const ae in K)m(K[ae].object),delete K[ae];delete k[oe]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const oe in k){const K=k[oe];for(const ae in K)m(K[ae].object),delete K[ae];delete k[oe]}delete s[C.id]}function U(C){for(const k in s){const oe=s[k];if(oe[C.id]===void 0)continue;const K=oe[C.id];for(const ae in K)m(K[ae].object),delete K[ae];delete oe[C.id]}}function H(){L(),c=!0,l!==o&&(l=o,p(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:H,resetDefaultState:L,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:b}}function AE(r,e,t){let s;function o(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,_){_!==0&&(r.drawArraysInstanced(s,p,m,_),t.update(m,s,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let y=0;for(let M=0;M<_;M++)y+=m[M];t.update(y,s,1)}function f(p,m,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)c(p[M],m[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,m,0,x,0,_);let M=0;for(let T=0;T<_;T++)M+=m[T]*x[T];t.update(M,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function CE(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==fi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const H=U===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ji&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Wi&&!H)}function f(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:z,maxSamples:F}}function RE(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new Sr,h=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||o;return o=x,s=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||M===null||M.length===0||l&&!S)l?m(null):p();else{const b=l?0:s,R=b*4;let A=v.clippingState||null;f.value=A,A=m(M,x,R,y);for(let z=0;z!==R;++z)A[z]=t[z];v.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(_,x,y,M){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const v=y+T*4,b=x.matrixWorldInverse;h.getNormalMatrix(b),(S===null||S.length<v)&&(S=new Float32Array(v));for(let R=0,A=y;R!==T;++R,A+=4)c.copy(_[R]).applyMatrix4(b,h),c.normal.toArray(S,A),S[A+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function PE(r){let e=new WeakMap;function t(c,h){return h===Xh?c.mapping=ho:h===Yh&&(c.mapping=fo),c}function s(c){if(c&&c.isTexture){const h=c.mapping;if(h===Xh||h===Yh)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const p=new Wx(f.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const eo=4,cg=[.125,.215,.35,.446,.526,.582],Jr=20,Ch=new Oy,hg=new St;let Rh=null,Ph=0,bh=0,Lh=!1;const $r=(1+Math.sqrt(5))/2,qs=1/$r,fg=[new G(-$r,qs,0),new G($r,qs,0),new G(-qs,0,$r),new G(qs,0,$r),new G(0,$r,-qs),new G(0,$r,qs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Rh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ph,bh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ho||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:pa,format:fi,colorSpace:go,depthBuffer:!1},o=pg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bE(l)),this._blurMaterial=LE(l,e,t)}return o}_compileMaterial(e){const t=new Xn(this._lodPlanes[0],e);this._renderer.compile(t,Ch)}_sceneToCubeUV(e,t,s,o){const h=new Wn(90,1,t,s),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(hg),m.toneMapping=Tr,m.autoClear=!1;const y=new n_({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),M=new Xn(new _a,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(hg),T=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(h.up.set(0,f[v],0),h.lookAt(p[v],0,0)):b===1?(h.up.set(0,0,f[v]),h.lookAt(0,p[v],0)):(h.up.set(0,f[v],0),h.lookAt(0,0,p[v]));const R=this._cubeSize;Kl(o,b*R,v>2?R:0,R,R),m.setRenderTarget(o),T&&m.render(M,h),m.render(e,h)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ho||e.mapping===fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Xn(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Kl(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(c,Ch)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=fg[(o-l-1)%fg.length];this._blur(e,l-1,l,c,h)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,h){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Xn(this._lodPlanes[o],p),x=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),T=l/M,S=isFinite(l)?1+Math.floor(m*T):Jr;S>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const v=[];let b=0;for(let U=0;U<Jr;++U){const H=U/T,L=Math.exp(-H*H/2);v.push(L),U===0?b+=L:U<S&&(b+=2*L)}for(let U=0;U<v.length;U++)v[U]=v[U]/b;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=c==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:R}=this;x.dTheta.value=M,x.mipInt.value=R-s;const A=this._sizeLods[o],z=3*A*(o>R-eo?o-R+eo:0),F=4*(this._cubeSize-A);Kl(t,z,F,3*A,2*A),f.setRenderTarget(t),f.render(_,Ch)}}function bE(r){const e=[],t=[],s=[];let o=r;const l=r-eo+1+cg.length;for(let c=0;c<l;c++){const h=Math.pow(2,o);t.push(h);let f=1/h;c>r-eo?f=cg[c-r+eo-1]:c===0&&(f=0),s.push(f);const p=1/(h-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,M=6,T=3,S=2,v=1,b=new Float32Array(T*M*y),R=new Float32Array(S*M*y),A=new Float32Array(v*M*y);for(let F=0;F<y;F++){const U=F%3*2/3-1,H=F>2?0:-1,L=[U,H,0,U+2/3,H,0,U+2/3,H+1,0,U,H,0,U+2/3,H+1,0,U,H+1,0];b.set(L,T*M*F),R.set(x,S*M*F);const C=[F,F,F,F,F,F];A.set(C,v*M*F)}const z=new Yn;z.setAttribute("position",new Mi(b,T)),z.setAttribute("uv",new Mi(R,S)),z.setAttribute("faceIndex",new Mi(A,v)),e.push(z),o>eo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function pg(r,e,t){const s=new ss(r,e,t);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Kl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function LE(r,e,t){const s=new Float32Array(Jr),o=new G(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function mg(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function gg(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DE(r){let e=new WeakMap,t=null;function s(h){if(h&&h.isTexture){const f=h.mapping,p=f===Xh||f===Yh,m=f===ho||f===fo;if(p||m){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new dg(r)),_=p?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new dg(r)),_=p?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function o(h){let f=0;const p=6;for(let m=0;m<p;m++)h[m]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function IE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&$s("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function NE(r,e,t,s){const o={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete o[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function f(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,M=_.attributes.position;let T=0;if(y!==null){const b=y.array;T=y.version;for(let R=0,A=b.length;R<A;R+=3){const z=b[R+0],F=b[R+1],U=b[R+2];x.push(z,F,F,U,U,z)}}else if(M!==void 0){const b=M.array;T=M.version;for(let R=0,A=b.length/3-1;R<A;R+=3){const z=R+0,F=R+1,U=R+2;x.push(z,F,F,U,U,z)}}else return;const S=new(Kg(x)?r_:i_)(x,1);S.version=T;const v=l.get(_);v&&e.remove(v),l.set(_,S)}function m(_){const x=l.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:f,getWireframeAttribute:m}}function UE(r,e,t){let s;function o(x){s=x}let l,c;function h(x){l=x.type,c=x.bytesPerElement}function f(x,y){r.drawElements(s,y,l,x*c),t.update(y,s,1)}function p(x,y,M){M!==0&&(r.drawElementsInstanced(s,y,l,x*c,M),t.update(y,s,M))}function m(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,x,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];t.update(S,s,1)}function _(x,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/c,y[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,x,0,T,0,M);let v=0;for(let b=0;b<M;b++)v+=y[b]*T[b];t.update(v,s,1)}}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function FE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,h){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=h*(l/3);break;case r.LINES:t.lines+=h*(l/2);break;case r.LINE_STRIP:t.lines+=h*(l-1);break;case r.LINE_LOOP:t.lines+=h*l;break;case r.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function OE(r,e,t){const s=new WeakMap,o=new It;function l(c,h,f){const p=c.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let C=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let A=0;M===!0&&(A=1),T===!0&&(A=2),S===!0&&(A=3);let z=h.attributes.position.count*A,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const U=new Float32Array(z*F*4*_),H=new Qg(U,z,F,_);H.type=Wi,H.needsUpdate=!0;const L=A*4;for(let k=0;k<_;k++){const oe=v[k],K=b[k],ae=R[k],ce=z*F*4*k;for(let ie=0;ie<oe.count;ie++){const ue=ie*L;M===!0&&(o.fromBufferAttribute(oe,ie),U[ce+ue+0]=o.x,U[ce+ue+1]=o.y,U[ce+ue+2]=o.z,U[ce+ue+3]=0),T===!0&&(o.fromBufferAttribute(K,ie),U[ce+ue+4]=o.x,U[ce+ue+5]=o.y,U[ce+ue+6]=o.z,U[ce+ue+7]=0),S===!0&&(o.fromBufferAttribute(ae,ie),U[ce+ue+8]=o.x,U[ce+ue+9]=o.y,U[ce+ue+10]=o.z,U[ce+ue+11]=ae.itemSize===4?o.w:1)}}x={count:_,texture:H,size:new Re(z,F)},s.set(h,x),h.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const T=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",T),f.getUniforms().setValue(r,"morphTargetInfluences",p)}f.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function kE(r,e,t,s){let o=new WeakMap;function l(f){const p=s.render.frame,m=f.geometry,_=e.get(f,m);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function c(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const y_=new Fn,_g=new c_(1,1),S_=new Qg,M_=new Rx,E_=new a_,vg=[],xg=[],yg=new Float32Array(16),Sg=new Float32Array(9),Mg=new Float32Array(4);function vo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=vg[o];if(l===void 0&&(l=new Float32Array(o),vg[o]=l),e!==0){s.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,r[c].toArray(l,h)}return l}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function _u(r,e){let t=xg[e];t===void 0&&(t=new Int32Array(e),xg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function zE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function HE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function GE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Mg.set(s),r.uniformMatrix2fv(this.addr,!1,Mg),tn(t,s)}}function WE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Sg.set(s),r.uniformMatrix3fv(this.addr,!1,Sg),tn(t,s)}}function XE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;yg.set(s),r.uniformMatrix4fv(this.addr,!1,yg),tn(t,s)}}function YE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function qE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function $E(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function e1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(_g.compareFunction=$g,l=_g):l=y_,t.setTexture2D(e||l,o)}function t1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||M_,o)}function n1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||E_,o)}function i1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||S_,o)}function r1(r){switch(r){case 5126:return zE;case 35664:return BE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return YE;case 35667:case 35671:return jE;case 35668:case 35672:return qE;case 35669:case 35673:return ZE;case 5125:return $E;case 36294:return KE;case 36295:return JE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(r,e){r.uniform1fv(this.addr,e)}function o1(r,e){const t=vo(e,this.size,2);r.uniform2fv(this.addr,t)}function a1(r,e){const t=vo(e,this.size,3);r.uniform3fv(this.addr,t)}function l1(r,e){const t=vo(e,this.size,4);r.uniform4fv(this.addr,t)}function u1(r,e){const t=vo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function c1(r,e){const t=vo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function h1(r,e){const t=vo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function f1(r,e){r.uniform1iv(this.addr,e)}function d1(r,e){r.uniform2iv(this.addr,e)}function p1(r,e){r.uniform3iv(this.addr,e)}function m1(r,e){r.uniform4iv(this.addr,e)}function g1(r,e){r.uniform1uiv(this.addr,e)}function _1(r,e){r.uniform2uiv(this.addr,e)}function v1(r,e){r.uniform3uiv(this.addr,e)}function x1(r,e){r.uniform4uiv(this.addr,e)}function y1(r,e,t){const s=this.cache,o=e.length,l=_u(t,o);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||y_,l[c])}function S1(r,e,t){const s=this.cache,o=e.length,l=_u(t,o);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||M_,l[c])}function M1(r,e,t){const s=this.cache,o=e.length,l=_u(t,o);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||E_,l[c])}function E1(r,e,t){const s=this.cache,o=e.length,l=_u(t,o);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||S_,l[c])}function T1(r){switch(r){case 5126:return s1;case 35664:return o1;case 35665:return a1;case 35666:return l1;case 35674:return u1;case 35675:return c1;case 35676:return h1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}class w1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}}class A1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T1(t.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const h=o[l];h.setValue(e,t[h.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function Eg(r,e){r.seq.push(e),r.map[e.id]=e}function R1(r,e,t){const s=r.name,o=s.length;for(Dh.lastIndex=0;;){const l=Dh.exec(s),c=Dh.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&c+2===o){Eg(t,p===void 0?new w1(h,r,e):new A1(h,r,e));break}else{let _=t.map[h];_===void 0&&(_=new C1(h),Eg(t,_)),t=_}}}class ou{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);R1(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=s[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Tg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const P1=37297;let b1=0;function L1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const h=c+1;s.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return s.join(`
`)}const wg=new dt;function D1(r){Rt._getMatrix(wg,Rt.workingColorSpace,r);const e=`mat3( ${wg.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case au:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ag(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+L1(r.getShaderSource(e),c)}else return o}function I1(r,e){const t=D1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N1(r,e){let t;switch(e){case k0:t="Linear";break;case z0:t="Reinhard";break;case B0:t="Cineon";break;case H0:t="ACESFilmic";break;case G0:t="AgX";break;case W0:t="Neutral";break;case V0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jl=new G;function U1(){Rt.getLuminanceCoefficients(Jl);const r=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function O1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function k1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let h=1;l.type===r.FLOAT_MAT2&&(h=2),l.type===r.FLOAT_MAT3&&(h=3),l.type===r.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:h}}return t}function ra(r){return r!==""}function Cg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(r){return r.replace(z1,H1)}const B1=new Map;function H1(r,e){let t=pt[e];if(t===void 0){const s=B1.get(e);if(s!==void 0)t=pt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Cf(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(r){return r.replace(V1,G1)}function G1(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function bg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ho:case fo:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function j1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Og:e="ENVMAP_BLENDING_MULTIPLY";break;case F0:e="ENVMAP_BLENDING_MIX";break;case O0:e="ENVMAP_BLENDING_ADD";break}return e}function q1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Z1(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=W1(t),p=X1(t),m=Y1(t),_=j1(t),x=q1(t),y=F1(t),M=O1(l),T=o.createProgram();let S,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ra).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ra).join(`
`),v.length>0&&(v+=`
`)):(S=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),v=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?N1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),U1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),c=Cf(c),c=Cg(c,t),c=Rg(c,t),h=Cf(h),h=Cg(h,t),h=Rg(h,t),c=Pg(c),h=Pg(h),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=b+S+c,A=b+v+h,z=Tg(o,o.VERTEX_SHADER,R),F=Tg(o,o.FRAGMENT_SHADER,A);o.attachShader(T,z),o.attachShader(T,F),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(k){if(r.debug.checkShaderErrors){const oe=o.getProgramInfoLog(T).trim(),K=o.getShaderInfoLog(z).trim(),ae=o.getShaderInfoLog(F).trim();let ce=!0,ie=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,z,F);else{const ue=Ag(o,z,"vertex"),V=Ag(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oe+`
`+ue+`
`+V)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(K===""||ae==="")&&(ie=!1);ie&&(k.diagnostics={runnable:ce,programLog:oe,vertexShader:{log:K,prefix:S},fragmentShader:{log:ae,prefix:v}})}o.deleteShader(z),o.deleteShader(F),H=new ou(o,T),L=k1(o,T)}let H;this.getUniforms=function(){return H===void 0&&U(this),H};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,P1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=F,this}let $1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new J1(e),t.set(e,s)),s}}class J1{constructor(e){this.id=$1++,this.code=e,this.usedTimes=0}}function Q1(r,e,t,s,o,l,c){const h=new e_,f=new K1,p=new Set,m=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,C,k,oe,K){const ae=oe.fog,ce=K.geometry,ie=L.isMeshStandardMaterial?oe.environment:null,ue=(L.isMeshStandardMaterial?t:e).get(L.envMap||ie),V=ue&&ue.mapping===du?ue.image.height:null,le=M[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=re!==void 0?re.length:0;let ee=0;ce.morphAttributes.position!==void 0&&(ee=1),ce.morphAttributes.normal!==void 0&&(ee=2),ce.morphAttributes.color!==void 0&&(ee=3);let Oe,J,fe,Ee;if(le){const Et=yi[le];Oe=Et.vertexShader,J=Et.fragmentShader}else Oe=L.vertexShader,J=L.fragmentShader,f.update(L),fe=f.getVertexShaderID(L),Ee=f.getFragmentShaderID(L);const me=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),ze=K.isInstancedMesh===!0,$e=K.isBatchedMesh===!0,gt=!!L.map,ge=!!L.matcap,we=!!ue,I=!!L.aoMap,Ke=!!L.lightMap,Se=!!L.bumpMap,Be=!!L.normalMap,Ce=!!L.displacementMap,tt=!!L.emissiveMap,Ie=!!L.metalnessMap,D=!!L.roughnessMap,w=L.anisotropy>0,Z=L.clearcoat>0,he=L.dispersion>0,_e=L.iridescence>0,de=L.sheen>0,qe=L.transmission>0,be=w&&!!L.anisotropyMap,He=Z&&!!L.clearcoatMap,ft=Z&&!!L.clearcoatNormalMap,Me=Z&&!!L.clearcoatRoughnessMap,Xe=_e&&!!L.iridescenceMap,nt=_e&&!!L.iridescenceThicknessMap,st=de&&!!L.sheenColorMap,Ye=de&&!!L.sheenRoughnessMap,_t=!!L.specularMap,ut=!!L.specularColorMap,Pt=!!L.specularIntensityMap,Y=qe&&!!L.transmissionMap,Le=qe&&!!L.thicknessMap,se=!!L.gradientMap,pe=!!L.alphaMap,Fe=L.alphaTest>0,Ue=!!L.alphaHash,ct=!!L.extensions;let Ft=Tr;L.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const $t={shaderID:le,shaderType:L.type,shaderName:L.name,vertexShader:Oe,fragmentShader:J,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:$e,batchingColor:$e&&K._colorsTexture!==null,instancing:ze,instancingColor:ze&&K.instanceColor!==null,instancingMorph:ze&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:go,alphaToCoverage:!!L.alphaToCoverage,map:gt,matcap:ge,envMap:we,envMapMode:we&&ue.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:Ke,bumpMap:Se,normalMap:Be,displacementMap:x&&Ce,emissiveMap:tt,normalMapObjectSpace:Be&&L.normalMapType===q0,normalMapTangentSpace:Be&&L.normalMapType===Zg,metalnessMap:Ie,roughnessMap:D,anisotropy:w,anisotropyMap:be,clearcoat:Z,clearcoatMap:He,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:he,iridescence:_e,iridescenceMap:Xe,iridescenceThicknessMap:nt,sheen:de,sheenColorMap:st,sheenRoughnessMap:Ye,specularMap:_t,specularColorMap:ut,specularIntensityMap:Pt,transmission:qe,transmissionMap:Y,thicknessMap:Le,gradientMap:se,opaque:L.transparent===!1&&L.blending===io&&L.alphaToCoverage===!1,alphaMap:pe,alphaTest:Fe,alphaHash:Ue,combine:L.combine,mapUv:gt&&T(L.map.channel),aoMapUv:I&&T(L.aoMap.channel),lightMapUv:Ke&&T(L.lightMap.channel),bumpMapUv:Se&&T(L.bumpMap.channel),normalMapUv:Be&&T(L.normalMap.channel),displacementMapUv:Ce&&T(L.displacementMap.channel),emissiveMapUv:tt&&T(L.emissiveMap.channel),metalnessMapUv:Ie&&T(L.metalnessMap.channel),roughnessMapUv:D&&T(L.roughnessMap.channel),anisotropyMapUv:be&&T(L.anisotropyMap.channel),clearcoatMapUv:He&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:st&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&T(L.sheenRoughnessMap.channel),specularMapUv:_t&&T(L.specularMap.channel),specularColorMapUv:ut&&T(L.specularColorMap.channel),specularIntensityMapUv:Pt&&T(L.specularIntensityMap.channel),transmissionMapUv:Y&&T(L.transmissionMap.channel),thicknessMapUv:Le&&T(L.thicknessMap.channel),alphaMapUv:pe&&T(L.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Be||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ce.attributes.uv&&(gt||pe),fog:!!ae,useFog:L.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Pe,skinning:K.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:gt&&L.map.isVideoTexture===!0&&Rt.getTransfer(L.map.colorSpace)===Lt,decodeVideoTextureEmissive:tt&&L.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(L.emissiveMap.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Gi,flipSided:L.side===Un,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ct&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&L.extensions.multiDraw===!0||$e)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return $t.vertexUv1s=p.has(1),$t.vertexUv2s=p.has(2),$t.vertexUv3s=p.has(3),p.clear(),$t}function v(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)C.push(k),C.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(b(C,L),R(C,L),C.push(r.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function b(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function R(L,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),L.push(h.mask)}function A(L){const C=M[L.type];let k;if(C){const oe=yi[C];k=Bx.clone(oe.uniforms)}else k=L.uniforms;return k}function z(L,C){let k;for(let oe=0,K=m.length;oe<K;oe++){const ae=m[oe];if(ae.cacheKey===C){k=ae,++k.usedTimes;break}}return k===void 0&&(k=new Z1(r,C,L,l),m.push(k)),k}function F(L){if(--L.usedTimes===0){const C=m.indexOf(L);m[C]=m[m.length-1],m.pop(),L.destroy()}}function U(L){f.remove(L)}function H(){f.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:z,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:H}}function eT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let h=r.get(c);return h===void 0&&(h={},r.set(c,h)),h}function s(c){r.delete(c)}function o(c,h,f){r.get(c)[h]=f}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function tT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(_,x,y,M,T,S){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:T,group:S},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=T,v.group=S),e++,v}function h(_,x,y,M,T,S){const v=c(_,x,y,M,T,S);y.transmission>0?s.push(v):y.transparent===!0?o.push(v):t.push(v)}function f(_,x,y,M,T,S){const v=c(_,x,y,M,T,S);y.transmission>0?s.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||tT),s.length>1&&s.sort(x||Lg),o.length>1&&o.sort(x||Lg)}function m(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:f,finish:m,sort:p}}function nT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new Dg,r.set(s,[c])):o>=l.length?(c=new Dg,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function iT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new St};break;case"SpotLight":t={position:new G,direction:new G,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function rT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sT=0;function oT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aT(r){const e=new iT,t=rT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new G);const o=new G,l=new Ut,c=new Ut;function h(p){let m=0,_=0,x=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,M=0,T=0,S=0,v=0,b=0,R=0,A=0,z=0,F=0,U=0;p.sort(oT);for(let L=0,C=p.length;L<C;L++){const k=p[L],oe=k.color,K=k.intensity,ae=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=oe.r*K,_+=oe.g*K,x+=oe.b*K;else if(k.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(k.sh.coefficients[ie],K);U++}else if(k.isDirectionalLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,V=t.get(k);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,s.directionalShadow[y]=V,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=k.shadow.matrix,b++}s.directional[y]=ie,y++}else if(k.isSpotLight){const ie=e.get(k);ie.position.setFromMatrixPosition(k.matrixWorld),ie.color.copy(oe).multiplyScalar(K),ie.distance=ae,ie.coneCos=Math.cos(k.angle),ie.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ie.decay=k.decay,s.spot[T]=ie;const ue=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,ue.updateMatrices(k),k.castShadow&&F++),s.spotLightMatrix[T]=ue.matrix,k.castShadow){const V=t.get(k);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,s.spotShadow[T]=V,s.spotShadowMap[T]=ce,A++}T++}else if(k.isRectAreaLight){const ie=e.get(k);ie.color.copy(oe).multiplyScalar(K),ie.halfWidth.set(k.width*.5,0,0),ie.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=ie,S++}else if(k.isPointLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),ie.distance=k.distance,ie.decay=k.decay,k.castShadow){const ue=k.shadow,V=t.get(k);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,V.shadowCameraNear=ue.camera.near,V.shadowCameraFar=ue.camera.far,s.pointShadow[M]=V,s.pointShadowMap[M]=ce,s.pointShadowMatrix[M]=k.shadow.matrix,R++}s.point[M]=ie,M++}else if(k.isHemisphereLight){const ie=e.get(k);ie.skyColor.copy(k.color).multiplyScalar(K),ie.groundColor.copy(k.groundColor).multiplyScalar(K),s.hemi[v]=ie,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=x;const H=s.hash;(H.directionalLength!==y||H.pointLength!==M||H.spotLength!==T||H.rectAreaLength!==S||H.hemiLength!==v||H.numDirectionalShadows!==b||H.numPointShadows!==R||H.numSpotShadows!==A||H.numSpotMaps!==z||H.numLightProbes!==U)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=S,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=U,H.directionalLength=y,H.pointLength=M,H.spotLength=T,H.rectAreaLength=S,H.hemiLength=v,H.numDirectionalShadows=b,H.numPointShadows=R,H.numSpotShadows=A,H.numSpotMaps=z,H.numLightProbes=U,s.version=sT++)}function f(p,m){let _=0,x=0,y=0,M=0,T=0;const S=m.matrixWorldInverse;for(let v=0,b=p.length;v<b;v++){const R=p[v];if(R.isDirectionalLight){const A=s.directional[_];A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(R.isSpotLight){const A=s.spot[y];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(R.isRectAreaLight){const A=s.rectArea[M];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(R.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(R.isPointLight){const A=s.point[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),x++}else if(R.isHemisphereLight){const A=s.hemi[T];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:h,setupView:f,state:s}}function Ig(r){const e=new aT(r),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function h(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:f,pushLight:l,pushShadow:c}}function lT(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let h;return c===void 0?(h=new Ig(r),e.set(o,[h])):l>=c.length?(h=new Ig(r),c.push(h)):h=c[l],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hT(r,e,t){let s=new zf;const o=new Re,l=new Re,c=new It,h=new Ry({depthPacking:j0}),f=new Py,p={},m=t.maxTextureSize,_={[wr]:Un,[Un]:wr,[Gi]:Gi},x=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:uT,fragmentShader:cT}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new Yn;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Xn(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fg;let v=this.type;this.render=function(F,U,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const L=r.getRenderTarget(),C=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Er),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const K=v!==Vi&&this.type===Vi,ae=v===Vi&&this.type!==Vi;for(let ce=0,ie=F.length;ce<ie;ce++){const ue=F[ce],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||K===!0||ae===!0){const O=this.type!==Vi?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new ss(o.x,o.y,O),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const re=V.getViewportCount();for(let O=0;O<re;O++){const ee=V.getViewport(O);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),oe.viewport(c),V.updateMatrices(ue,O),s=V.getFrustum(),A(U,H,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===Vi&&b(V,H),V.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(L,C,k)};function b(F,U){const H=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ss(o.x,o.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(U,null,H,x,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(U,null,H,y,T,null)}function R(F,U,H,L){let C=null;const k=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)C=k;else if(C=H.isPointLight===!0?f:h,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=C.uuid,K=U.uuid;let ae=p[oe];ae===void 0&&(ae={},p[oe]=ae);let ce=ae[K];ce===void 0&&(ce=C.clone(),ae[K]=ce,U.addEventListener("dispose",z)),C=ce}if(C.visible=U.visible,C.wireframe=U.wireframe,L===Vi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:_[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=r.properties.get(C);oe.light=H}return C}function A(F,U,H,L,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Vi)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const K=e.update(F),ae=F.material;if(Array.isArray(ae)){const ce=K.groups;for(let ie=0,ue=ce.length;ie<ue;ie++){const V=ce[ie],le=ae[V.materialIndex];if(le&&le.visible){const re=R(F,le,L,C);F.onBeforeShadow(r,F,U,H,K,re,V),r.renderBufferDirect(H,null,K,re,F,V),F.onAfterShadow(r,F,U,H,K,re,V)}}}else if(ae.visible){const ce=R(F,ae,L,C);F.onBeforeShadow(r,F,U,H,K,ce,null),r.renderBufferDirect(H,null,K,ce,F,null),F.onAfterShadow(r,F,U,H,K,ce,null)}}const oe=F.children;for(let K=0,ae=oe.length;K<ae;K++)A(oe[K],U,H,L,C)}function z(F){F.target.removeEventListener("dispose",z);for(const H in p){const L=p[H],C=F.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const fT={[kh]:zh,[Bh]:Gh,[Hh]:Wh,[co]:Vh,[zh]:kh,[Gh]:Bh,[Wh]:Hh,[Vh]:co};function dT(r,e){function t(){let Y=!1;const Le=new It;let se=null;const pe=new It(0,0,0,0);return{setMask:function(Fe){se!==Fe&&!Y&&(r.colorMask(Fe,Fe,Fe,Fe),se=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Ue,ct,Ft,$t){$t===!0&&(Fe*=Ft,Ue*=Ft,ct*=Ft),Le.set(Fe,Ue,ct,Ft),pe.equals(Le)===!1&&(r.clearColor(Fe,Ue,ct,Ft),pe.copy(Le))},reset:function(){Y=!1,se=null,pe.set(-1,0,0,0)}}}function s(){let Y=!1,Le=!1,se=null,pe=null,Fe=null;return{setReversed:function(Ue){if(Le!==Ue){const ct=e.get("EXT_clip_control");Le?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Fe;Fe=null,this.setClear(Ft)}Le=Ue},getReversed:function(){return Le},setTest:function(Ue){Ue?me(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(Ue){se!==Ue&&!Y&&(r.depthMask(Ue),se=Ue)},setFunc:function(Ue){if(Le&&(Ue=fT[Ue]),pe!==Ue){switch(Ue){case kh:r.depthFunc(r.NEVER);break;case zh:r.depthFunc(r.ALWAYS);break;case Bh:r.depthFunc(r.LESS);break;case co:r.depthFunc(r.LEQUAL);break;case Hh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case Gh:r.depthFunc(r.GREATER);break;case Wh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Ue}},setLocked:function(Ue){Y=Ue},setClear:function(Ue){Fe!==Ue&&(Le&&(Ue=1-Ue),r.clearDepth(Ue),Fe=Ue)},reset:function(){Y=!1,se=null,pe=null,Fe=null,Le=!1}}}function o(){let Y=!1,Le=null,se=null,pe=null,Fe=null,Ue=null,ct=null,Ft=null,$t=null;return{setTest:function(Et){Y||(Et?me(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!Y&&(r.stencilMask(Et),Le=Et)},setFunc:function(Et,An,xn){(se!==Et||pe!==An||Fe!==xn)&&(r.stencilFunc(Et,An,xn),se=Et,pe=An,Fe=xn)},setOp:function(Et,An,xn){(Ue!==Et||ct!==An||Ft!==xn)&&(r.stencilOp(Et,An,xn),Ue=Et,ct=An,Ft=xn)},setLocked:function(Et){Y=Et},setClear:function(Et){$t!==Et&&(r.clearStencil(Et),$t=Et)},reset:function(){Y=!1,Le=null,se=null,pe=null,Fe=null,Ue=null,ct=null,Ft=null,$t=null}}}const l=new t,c=new s,h=new o,f=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,y=[],M=null,T=!1,S=null,v=null,b=null,R=null,A=null,z=null,F=null,U=new St(0,0,0),H=0,L=!1,C=null,k=null,oe=null,K=null,ae=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ue=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(V)[1]),ie=ue>=1):V.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ie=ue>=2);let le=null,re={};const O=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),Oe=new It().fromArray(O),J=new It().fromArray(ee);function fe(Y,Le,se,pe){const Fe=new Uint8Array(4),Ue=r.createTexture();r.bindTexture(Y,Ue),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<se;ct++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Le+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ue}const Ee={};Ee[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),me(r.DEPTH_TEST),c.setFunc(co),Se(!1),Be(Tm),me(r.CULL_FACE),I(Er);function me(Y){m[Y]!==!0&&(r.enable(Y),m[Y]=!0)}function Pe(Y){m[Y]!==!1&&(r.disable(Y),m[Y]=!1)}function ze(Y,Le){return _[Y]!==Le?(r.bindFramebuffer(Y,Le),_[Y]=Le,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Le),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function $e(Y,Le){let se=y,pe=!1;if(Y){se=x.get(Le),se===void 0&&(se=[],x.set(Le,se));const Fe=Y.textures;if(se.length!==Fe.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Ue=0,ct=Fe.length;Ue<ct;Ue++)se[Ue]=r.COLOR_ATTACHMENT0+Ue;se.length=Fe.length,pe=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,pe=!0);pe&&r.drawBuffers(se)}function gt(Y){return M!==Y?(r.useProgram(Y),M=Y,!0):!1}const ge={[Kr]:r.FUNC_ADD,[x0]:r.FUNC_SUBTRACT,[y0]:r.FUNC_REVERSE_SUBTRACT};ge[S0]=r.MIN,ge[M0]=r.MAX;const we={[E0]:r.ZERO,[T0]:r.ONE,[w0]:r.SRC_COLOR,[Fh]:r.SRC_ALPHA,[L0]:r.SRC_ALPHA_SATURATE,[P0]:r.DST_COLOR,[C0]:r.DST_ALPHA,[A0]:r.ONE_MINUS_SRC_COLOR,[Oh]:r.ONE_MINUS_SRC_ALPHA,[b0]:r.ONE_MINUS_DST_COLOR,[R0]:r.ONE_MINUS_DST_ALPHA,[D0]:r.CONSTANT_COLOR,[I0]:r.ONE_MINUS_CONSTANT_COLOR,[N0]:r.CONSTANT_ALPHA,[U0]:r.ONE_MINUS_CONSTANT_ALPHA};function I(Y,Le,se,pe,Fe,Ue,ct,Ft,$t,Et){if(Y===Er){T===!0&&(Pe(r.BLEND),T=!1);return}if(T===!1&&(me(r.BLEND),T=!0),Y!==v0){if(Y!==S||Et!==L){if((v!==Kr||A!==Kr)&&(r.blendEquation(r.FUNC_ADD),v=Kr,A=Kr),Et)switch(Y){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wm:r.blendFunc(r.ONE,r.ONE);break;case Am:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Am:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}b=null,R=null,z=null,F=null,U.set(0,0,0),H=0,S=Y,L=Et}return}Fe=Fe||Le,Ue=Ue||se,ct=ct||pe,(Le!==v||Fe!==A)&&(r.blendEquationSeparate(ge[Le],ge[Fe]),v=Le,A=Fe),(se!==b||pe!==R||Ue!==z||ct!==F)&&(r.blendFuncSeparate(we[se],we[pe],we[Ue],we[ct]),b=se,R=pe,z=Ue,F=ct),(Ft.equals(U)===!1||$t!==H)&&(r.blendColor(Ft.r,Ft.g,Ft.b,$t),U.copy(Ft),H=$t),S=Y,L=!1}function Ke(Y,Le){Y.side===Gi?Pe(r.CULL_FACE):me(r.CULL_FACE);let se=Y.side===Un;Le&&(se=!se),Se(se),Y.blending===io&&Y.transparent===!1?I(Er):I(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const pe=Y.stencilWrite;h.setTest(pe),pe&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),tt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Se(Y){C!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),C=Y)}function Be(Y){Y!==m0?(me(r.CULL_FACE),Y!==k&&(Y===Tm?r.cullFace(r.BACK):Y===g0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),k=Y}function Ce(Y){Y!==oe&&(ie&&r.lineWidth(Y),oe=Y)}function tt(Y,Le,se){Y?(me(r.POLYGON_OFFSET_FILL),(K!==Le||ae!==se)&&(r.polygonOffset(Le,se),K=Le,ae=se)):Pe(r.POLYGON_OFFSET_FILL)}function Ie(Y){Y?me(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function D(Y){Y===void 0&&(Y=r.TEXTURE0+ce-1),le!==Y&&(r.activeTexture(Y),le=Y)}function w(Y,Le,se){se===void 0&&(le===null?se=r.TEXTURE0+ce-1:se=le);let pe=re[se];pe===void 0&&(pe={type:void 0,texture:void 0},re[se]=pe),(pe.type!==Y||pe.texture!==Le)&&(le!==se&&(r.activeTexture(se),le=se),r.bindTexture(Y,Le||Ee[Y]),pe.type=Y,pe.texture=Le)}function Z(){const Y=re[le];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xe(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function st(Y){Oe.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Oe.copy(Y))}function Ye(Y){J.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),J.copy(Y))}function _t(Y,Le){let se=p.get(Le);se===void 0&&(se=new WeakMap,p.set(Le,se));let pe=se.get(Y);pe===void 0&&(pe=r.getUniformBlockIndex(Le,Y.name),se.set(Y,pe))}function ut(Y,Le){const pe=p.get(Le).get(Y);f.get(Le)!==pe&&(r.uniformBlockBinding(Le,pe,Y.__bindingPointIndex),f.set(Le,pe))}function Pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},le=null,re={},_={},x=new WeakMap,y=[],M=null,T=!1,S=null,v=null,b=null,R=null,A=null,z=null,F=null,U=new St(0,0,0),H=0,L=!1,C=null,k=null,oe=null,K=null,ae=null,Oe.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:me,disable:Pe,bindFramebuffer:ze,drawBuffers:$e,useProgram:gt,setBlending:I,setMaterial:Ke,setFlipSided:Se,setCullFace:Be,setLineWidth:Ce,setPolygonOffset:tt,setScissorTest:Ie,activeTexture:D,bindTexture:w,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Xe,texImage3D:nt,updateUBOMapping:_t,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:Me,texSubImage2D:de,texSubImage3D:qe,compressedTexSubImage2D:be,compressedTexSubImage3D:He,scissor:st,viewport:Ye,reset:Pt}}function pT(r,e,t,s,o,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,m=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return y?new OffscreenCanvas(D,w):uu("canvas")}function T(D,w,Z){let he=1;const _e=Ie(D);if((_e.width>Z||_e.height>Z)&&(he=Z/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(he*_e.width),qe=Math.floor(he*_e.height);_===void 0&&(_=M(de,qe));const be=w?M(de,qe):_;return be.width=de,be.height=qe,be.getContext("2d").drawImage(D,0,0,de,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+qe+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function S(D){return D.generateMipmaps}function v(D){r.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(D,w,Z,he,_e=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=w;if(w===r.RED&&(Z===r.FLOAT&&(de=r.R32F),Z===r.HALF_FLOAT&&(de=r.R16F),Z===r.UNSIGNED_BYTE&&(de=r.R8)),w===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.R8UI),Z===r.UNSIGNED_SHORT&&(de=r.R16UI),Z===r.UNSIGNED_INT&&(de=r.R32UI),Z===r.BYTE&&(de=r.R8I),Z===r.SHORT&&(de=r.R16I),Z===r.INT&&(de=r.R32I)),w===r.RG&&(Z===r.FLOAT&&(de=r.RG32F),Z===r.HALF_FLOAT&&(de=r.RG16F),Z===r.UNSIGNED_BYTE&&(de=r.RG8)),w===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RG8UI),Z===r.UNSIGNED_SHORT&&(de=r.RG16UI),Z===r.UNSIGNED_INT&&(de=r.RG32UI),Z===r.BYTE&&(de=r.RG8I),Z===r.SHORT&&(de=r.RG16I),Z===r.INT&&(de=r.RG32I)),w===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Z===r.UNSIGNED_INT&&(de=r.RGB32UI),Z===r.BYTE&&(de=r.RGB8I),Z===r.SHORT&&(de=r.RGB16I),Z===r.INT&&(de=r.RGB32I)),w===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Z===r.UNSIGNED_INT&&(de=r.RGBA32UI),Z===r.BYTE&&(de=r.RGBA8I),Z===r.SHORT&&(de=r.RGBA16I),Z===r.INT&&(de=r.RGBA32I)),w===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),w===r.RGBA){const qe=_e?au:Rt.getTransfer(he);Z===r.FLOAT&&(de=r.RGBA32F),Z===r.HALF_FLOAT&&(de=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(de=qe===Lt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(D,w){let Z;return D?w===null||w===rs||w===po?Z=r.DEPTH24_STENCIL8:w===Wi?Z=r.DEPTH32F_STENCIL8:w===ua&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rs||w===po?Z=r.DEPTH_COMPONENT24:w===Wi?Z=r.DEPTH_COMPONENT32F:w===ua&&(Z=r.DEPTH_COMPONENT16),Z}function z(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),H(w),w.isVideoTexture&&m.delete(w)}function U(D){const w=D.target;w.removeEventListener("dispose",U),C(w)}function H(D){const w=s.get(D);if(w.__webglInit===void 0)return;const Z=D.source,he=x.get(Z);if(he){const _e=he[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&L(D),Object.keys(he).length===0&&x.delete(Z)}s.remove(D)}function L(D){const w=s.get(D);r.deleteTexture(w.__webglTexture);const Z=D.source,he=x.get(Z);delete he[w.__cacheKey],c.memory.textures--}function C(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let _e=0;_e<w.__webglFramebuffer[he].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[he][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)r.deleteFramebuffer(w.__webglFramebuffer[he]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let he=0,_e=Z.length;he<_e;he++){const de=s.get(Z[he]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(Z[he])}s.remove(D)}let k=0;function oe(){k=0}function K(){const D=k;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function ae(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ce(D,w){const Z=s.get(D);if(D.isVideoTexture&&Ce(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,D,w);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+w)}function ie(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){J(Z,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+w)}function ue(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){J(Z,D,w);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+w)}function V(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){fe(Z,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+w)}const le={[jh]:r.REPEAT,[es]:r.CLAMP_TO_EDGE,[qh]:r.MIRRORED_REPEAT},re={[di]:r.NEAREST,[X0]:r.NEAREST_MIPMAP_NEAREST,[wl]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[eh]:r.LINEAR_MIPMAP_NEAREST,[ts]:r.LINEAR_MIPMAP_LINEAR},O={[Z0]:r.NEVER,[tx]:r.ALWAYS,[$0]:r.LESS,[$g]:r.LEQUAL,[K0]:r.EQUAL,[ex]:r.GEQUAL,[J0]:r.GREATER,[Q0]:r.NOTEQUAL};function ee(D,w){if(w.type===Wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===eh||w.magFilter===wl||w.magFilter===ts||w.minFilter===Si||w.minFilter===eh||w.minFilter===wl||w.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,le[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,le[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,le[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,re[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===di||w.minFilter!==wl&&w.minFilter!==ts||w.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const he=w.source;let _e=x.get(he);_e===void 0&&(_e={},x.set(he,_e));const de=ae(w);if(de!==D.__cacheKey){_e[de]===void 0&&(_e[de]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),_e[de].usedTimes++;const qe=_e[D.__cacheKey];qe!==void 0&&(_e[D.__cacheKey].usedTimes--,qe.usedTimes===0&&L(w)),D.__cacheKey=de,D.__webglTexture=_e[de].texture}return Z}function J(D,w,Z){let he=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=r.TEXTURE_3D);const _e=Oe(D,w),de=w.source;t.bindTexture(he,D.__webglTexture,r.TEXTURE0+Z);const qe=s.get(de);if(de.version!==qe.__version||_e===!0){t.activeTexture(r.TEXTURE0+Z);const be=Rt.getPrimaries(Rt.workingColorSpace),He=w.colorSpace===Mr?null:Rt.getPrimaries(w.colorSpace),ft=w.colorSpace===Mr||be===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=T(w.image,!1,o.maxTextureSize);Me=tt(w,Me);const Xe=l.convert(w.format,w.colorSpace),nt=l.convert(w.type);let st=R(w.internalFormat,Xe,nt,w.colorSpace,w.isVideoTexture);ee(he,w);let Ye;const _t=w.mipmaps,ut=w.isVideoTexture!==!0,Pt=qe.__version===void 0||_e===!0,Y=de.dataReady,Le=z(w,Me);if(w.isDepthTexture)st=A(w.format===mo,w.type),Pt&&(ut?t.texStorage2D(r.TEXTURE_2D,1,st,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,st,Me.width,Me.height,0,Xe,nt,null));else if(w.isDataTexture)if(_t.length>0){ut&&Pt&&t.texStorage2D(r.TEXTURE_2D,Le,st,_t[0].width,_t[0].height);for(let se=0,pe=_t.length;se<pe;se++)Ye=_t[se],ut?Y&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Ye.width,Ye.height,Xe,nt,Ye.data):t.texImage2D(r.TEXTURE_2D,se,st,Ye.width,Ye.height,0,Xe,nt,Ye.data);w.generateMipmaps=!1}else ut?(Pt&&t.texStorage2D(r.TEXTURE_2D,Le,st,Me.width,Me.height),Y&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,Xe,nt,Me.data)):t.texImage2D(r.TEXTURE_2D,0,st,Me.width,Me.height,0,Xe,nt,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,st,_t[0].width,_t[0].height,Me.depth);for(let se=0,pe=_t.length;se<pe;se++)if(Ye=_t[se],w.format!==fi)if(Xe!==null)if(ut){if(Y)if(w.layerUpdates.size>0){const Fe=ug(Ye.width,Ye.height,w.format,w.type);for(const Ue of w.layerUpdates){const ct=Ye.data.subarray(Ue*Fe/Ye.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Ue,Ye.width,Ye.height,1,Xe,ct)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Ye.width,Ye.height,Me.depth,Xe,Ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,st,Ye.width,Ye.height,Me.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Y&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Ye.width,Ye.height,Me.depth,Xe,nt,Ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,st,Ye.width,Ye.height,Me.depth,0,Xe,nt,Ye.data)}else{ut&&Pt&&t.texStorage2D(r.TEXTURE_2D,Le,st,_t[0].width,_t[0].height);for(let se=0,pe=_t.length;se<pe;se++)Ye=_t[se],w.format!==fi?Xe!==null?ut?Y&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,Ye.width,Ye.height,Xe,Ye.data):t.compressedTexImage2D(r.TEXTURE_2D,se,st,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Y&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Ye.width,Ye.height,Xe,nt,Ye.data):t.texImage2D(r.TEXTURE_2D,se,st,Ye.width,Ye.height,0,Xe,nt,Ye.data)}else if(w.isDataArrayTexture)if(ut){if(Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,st,Me.width,Me.height,Me.depth),Y)if(w.layerUpdates.size>0){const se=ug(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Fe=Me.data.subarray(pe*se/Me.data.BYTES_PER_ELEMENT,(pe+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Xe,nt,Fe)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Xe,nt,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,st,Me.width,Me.height,Me.depth,0,Xe,nt,Me.data);else if(w.isData3DTexture)ut?(Pt&&t.texStorage3D(r.TEXTURE_3D,Le,st,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Xe,nt,Me.data)):t.texImage3D(r.TEXTURE_3D,0,st,Me.width,Me.height,Me.depth,0,Xe,nt,Me.data);else if(w.isFramebufferTexture){if(Pt)if(ut)t.texStorage2D(r.TEXTURE_2D,Le,st,Me.width,Me.height);else{let se=Me.width,pe=Me.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,st,se,pe,0,Xe,nt,null),se>>=1,pe>>=1}}else if(_t.length>0){if(ut&&Pt){const se=Ie(_t[0]);t.texStorage2D(r.TEXTURE_2D,Le,st,se.width,se.height)}for(let se=0,pe=_t.length;se<pe;se++)Ye=_t[se],ut?Y&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Xe,nt,Ye):t.texImage2D(r.TEXTURE_2D,se,st,Xe,nt,Ye);w.generateMipmaps=!1}else if(ut){if(Pt){const se=Ie(Me);t.texStorage2D(r.TEXTURE_2D,Le,st,se.width,se.height)}Y&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Xe,nt,Me)}else t.texImage2D(r.TEXTURE_2D,0,st,Xe,nt,Me);S(w)&&v(he),qe.__version=de.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function fe(D,w,Z){if(w.image.length!==6)return;const he=Oe(D,w),_e=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Z);const de=s.get(_e);if(_e.version!==de.__version||he===!0){t.activeTexture(r.TEXTURE0+Z);const qe=Rt.getPrimaries(Rt.workingColorSpace),be=w.colorSpace===Mr?null:Rt.getPrimaries(w.colorSpace),He=w.colorSpace===Mr||qe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Xe=[];for(let pe=0;pe<6;pe++)!ft&&!Me?Xe[pe]=T(w.image[pe],!0,o.maxCubemapSize):Xe[pe]=Me?w.image[pe].image:w.image[pe],Xe[pe]=tt(w,Xe[pe]);const nt=Xe[0],st=l.convert(w.format,w.colorSpace),Ye=l.convert(w.type),_t=R(w.internalFormat,st,Ye,w.colorSpace),ut=w.isVideoTexture!==!0,Pt=de.__version===void 0||he===!0,Y=_e.dataReady;let Le=z(w,nt);ee(r.TEXTURE_CUBE_MAP,w);let se;if(ft){ut&&Pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,_t,nt.width,nt.height);for(let pe=0;pe<6;pe++){se=Xe[pe].mipmaps;for(let Fe=0;Fe<se.length;Fe++){const Ue=se[Fe];w.format!==fi?st!==null?ut?Y&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,0,0,Ue.width,Ue.height,st,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,_t,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,0,0,Ue.width,Ue.height,st,Ye,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,_t,Ue.width,Ue.height,0,st,Ye,Ue.data)}}}else{if(se=w.mipmaps,ut&&Pt){se.length>0&&Le++;const pe=Ie(Xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,_t,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){ut?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe[pe].width,Xe[pe].height,st,Ye,Xe[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_t,Xe[pe].width,Xe[pe].height,0,st,Ye,Xe[pe].data);for(let Fe=0;Fe<se.length;Fe++){const ct=se[Fe].image[pe].image;ut?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,0,0,ct.width,ct.height,st,Ye,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,_t,ct.width,ct.height,0,st,Ye,ct.data)}}else{ut?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,st,Ye,Xe[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_t,st,Ye,Xe[pe]);for(let Fe=0;Fe<se.length;Fe++){const Ue=se[Fe];ut?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,0,0,st,Ye,Ue.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,_t,st,Ye,Ue.image[pe])}}}S(w)&&v(r.TEXTURE_CUBE_MAP),de.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,Z,he,_e,de){const qe=l.convert(Z.format,Z.colorSpace),be=l.convert(Z.type),He=R(Z.internalFormat,qe,be,Z.colorSpace),ft=s.get(w),Me=s.get(Z);if(Me.__renderTarget=w,!ft.__hasExternalTextures){const Xe=Math.max(1,w.width>>de),nt=Math.max(1,w.height>>de);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,He,Xe,nt,w.depth,0,qe,be,null):t.texImage2D(_e,de,He,Xe,nt,0,qe,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Be(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,_e,Me.__webglTexture,0,Se(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,_e,Me.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(D,w,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const he=w.depthTexture,_e=he&&he.isDepthTexture?he.type:null,de=A(w.stencilBuffer,_e),qe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Se(w);Be(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,de,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,de,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,de,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,D)}else{const he=w.textures;for(let _e=0;_e<he.length;_e++){const de=he[_e],qe=l.convert(de.format,de.colorSpace),be=l.convert(de.type),He=R(de.internalFormat,qe,be,de.colorSpace),ft=Se(w);Z&&Be(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,He,w.width,w.height):Be(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,He,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,He,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ce(w.depthTexture,0);const _e=he.__webglTexture,de=Se(w);if(w.depthTexture.format===ro)Be(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(w.depthTexture.format===mo)Be(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ze(D){const w=s.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=he}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(w.__webglFramebuffer,D)}else if(Z){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=r.createRenderbuffer(),me(w.__webglDepthbuffer[he],D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,de)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),me(w.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(D,w,Z){const he=s.get(D);w!==void 0&&Ee(he.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ze(D)}function gt(D){const w=D.texture,Z=s.get(D),he=s.get(w);D.addEventListener("dispose",U);const _e=D.textures,de=D.isWebGLCubeRenderTarget===!0,qe=_e.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=w.version,c.memory.textures++),de){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let He=0;He<w.mipmaps.length;He++)Z.__webglFramebuffer[be][He]=r.createFramebuffer()}else Z.__webglFramebuffer[be]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)Z.__webglFramebuffer[be]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(qe)for(let be=0,He=_e.length;be<He;be++){const ft=s.get(_e[be]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&Be(D)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const He=_e[be];Z.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const ft=l.convert(He.format,He.colorSpace),Me=l.convert(He.type),Xe=R(He.internalFormat,ft,Me,He.colorSpace,D.isXRRenderTarget===!0),nt=Se(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Xe,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),me(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ee(r.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Ee(Z.__webglFramebuffer[be][He],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He);else Ee(Z.__webglFramebuffer[be],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(w)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let be=0,He=_e.length;be<He;be++){const ft=_e[be],Me=s.get(ft);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ee(r.TEXTURE_2D,ft),Ee(Z.__webglFramebuffer,D,ft,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),S(ft)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),ee(be,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Ee(Z.__webglFramebuffer[He],D,w,r.COLOR_ATTACHMENT0,be,He);else Ee(Z.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,be,0);S(w)&&v(be),t.unbindTexture()}D.depthBuffer&&ze(D)}function ge(D){const w=D.textures;for(let Z=0,he=w.length;Z<he;Z++){const _e=w[Z];if(S(_e)){const de=b(D),qe=s.get(_e).__webglTexture;t.bindTexture(de,qe),v(de),t.unbindTexture()}}}const we=[],I=[];function Ke(D){if(D.samples>0){if(Be(D)===!1){const w=D.textures,Z=D.width,he=D.height;let _e=r.COLOR_BUFFER_BIT;const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=s.get(D),be=w.length>1;if(be)for(let He=0;He<w.length;He++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let He=0;He<w.length;He++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[He]);const ft=s.get(w[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,Z,he,0,0,Z,he,_e,r.NEAREST),f===!0&&(we.length=0,I.length=0,we.push(r.COLOR_ATTACHMENT0+He),D.depthBuffer&&D.resolveDepthBuffer===!1&&(we.push(de),I.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let He=0;He<w.length;He++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,qe.__webglColorRenderbuffer[He]);const ft=s.get(w[He]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Se(D){return Math.min(o.maxSamples,D.samples)}function Be(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(D){const w=c.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function tt(D,w){const Z=D.colorSpace,he=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==go&&Z!==Mr&&(Rt.getTransfer(Z)===Lt?(he!==fi||_e!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=oe,this.setTexture2D=ce,this.setTexture2DArray=ie,this.setTexture3D=ue,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Be}function mT(r,e){function t(s,o=Mr){let l;const c=Rt.getTransfer(o);if(s===ji)return r.UNSIGNED_BYTE;if(s===If)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Nf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===zg)return r.BYTE;if(s===Bg)return r.SHORT;if(s===ua)return r.UNSIGNED_SHORT;if(s===Df)return r.INT;if(s===rs)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===pa)return r.HALF_FLOAT;if(s===Vg)return r.ALPHA;if(s===Gg)return r.RGB;if(s===fi)return r.RGBA;if(s===Wg)return r.LUMINANCE;if(s===Xg)return r.LUMINANCE_ALPHA;if(s===ro)return r.DEPTH_COMPONENT;if(s===mo)return r.DEPTH_STENCIL;if(s===Yg)return r.RED;if(s===Uf)return r.RED_INTEGER;if(s===jg)return r.RG;if(s===Ff)return r.RG_INTEGER;if(s===Of)return r.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===eu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===eu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===$h||s===Kh||s===Jh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Zh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$h)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh||s===ef||s===tf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Qh||s===ef)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===tf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nf||s===rf||s===sf||s===of||s===af||s===lf||s===uf||s===cf||s===hf||s===ff||s===df||s===pf||s===mf||s===gf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===nf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===of)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===af)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ff)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===df)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ru||s===_f||s===vf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ru)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_f)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qg||s===xf||s===yf||s===Sf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ru)return l.COMPRESSED_RED_RGTC1_EXT;if(s===xf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===po?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const gT={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ns;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const _T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Fn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ar({vertexShader:_T,fragmentShader:vT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new gu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends ls{constructor(e,t){super();const s=this;let o=null,l=1,c=null,h="local-floor",f=1,p=null,m=null,_=null,x=null,y=null,M=null;const T=new xT,S=t.getContextAttributes();let v=null,b=null;const R=[],A=[],z=new Re;let F=null;const U=new Wn;U.viewport=new It;const H=new Wn;H.viewport=new It;const L=[U,H],C=new zy;let k=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=R[J];return fe===void 0&&(fe=new Ih,R[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=R[J];return fe===void 0&&(fe=new Ih,R[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=R[J];return fe===void 0&&(fe=new Ih,R[J]=fe),fe.getHandSpace()};function K(J){const fe=A.indexOf(J.inputSource);if(fe===-1)return;const Ee=R[fe];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,p||c),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function ae(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",ce);for(let J=0;J<R.length;J++){const fe=A[J];fe!==null&&(A[J]=null,R[J].disconnect(fe))}k=null,oe=null,T.reset(),e.setRenderTarget(v),y=null,x=null,_=null,o=null,b=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",ce),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),o.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new ss(y.framebufferWidth,y.framebufferHeight,{format:fi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Ee=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?mo:ro,Ee=S.stencil?po:rs);const Pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:l};_=new XRWebGLBinding(o,t),x=_.createProjectionLayer(Pe),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new ss(x.textureWidth,x.textureHeight,{format:fi,type:ji,depthTexture:new c_(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await o.requestReferenceSpace(h),Oe.setContext(o),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ce(J){for(let fe=0;fe<J.removed.length;fe++){const Ee=J.removed[fe],me=A.indexOf(Ee);me>=0&&(A[me]=null,R[me].disconnect(Ee))}for(let fe=0;fe<J.added.length;fe++){const Ee=J.added[fe];let me=A.indexOf(Ee);if(me===-1){for(let ze=0;ze<R.length;ze++)if(ze>=A.length){A.push(Ee),me=ze;break}else if(A[ze]===null){A[ze]=Ee,me=ze;break}if(me===-1)break}const Pe=R[me];Pe&&Pe.connect(Ee)}}const ie=new G,ue=new G;function V(J,fe,Ee){ie.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const me=ie.distanceTo(ue),Pe=fe.projectionMatrix.elements,ze=Ee.projectionMatrix.elements,$e=Pe[14]/(Pe[10]-1),gt=Pe[14]/(Pe[10]+1),ge=(Pe[9]+1)/Pe[5],we=(Pe[9]-1)/Pe[5],I=(Pe[8]-1)/Pe[0],Ke=(ze[8]+1)/ze[0],Se=$e*I,Be=$e*Ke,Ce=me/(-I+Ke),tt=Ce*-I;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(tt),J.translateZ(Ce),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ie=$e+Ce,D=gt+Ce,w=Se-tt,Z=Be+(me-tt),he=ge*gt/D*Ie,_e=we*gt/D*Ie;J.projectionMatrix.makePerspective(w,Z,he,_e,Ie,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let fe=J.near,Ee=J.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=H.near=U.near=fe,C.far=H.far=U.far=Ee,(k!==C.near||oe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,oe=C.far),U.layers.mask=J.layers.mask|2,H.layers.mask=J.layers.mask|4,C.layers.mask=U.layers.mask|H.layers.mask;const me=J.parent,Pe=C.cameras;le(C,me);for(let ze=0;ze<Pe.length;ze++)le(Pe[ze],me);Pe.length===2?V(C,U,H):C.projectionMatrix.copy(U.projectionMatrix),re(J,C,me)};function re(J,fe,Ee){Ee===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ca*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return f},this.setFoveation=function(J){f=J,x!==null&&(x.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let O=null;function ee(J,fe){if(m=fe.getViewerPose(p||c),M=fe,m!==null){const Ee=m.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let me=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,me=!0);for(let ze=0;ze<Ee.length;ze++){const $e=Ee[ze];let gt=null;if(y!==null)gt=y.getViewport($e);else{const we=_.getViewSubImage(x,$e);gt=we.viewport,ze===0&&(e.setRenderTargetTextures(b,we.colorTexture,x.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(b))}let ge=L[ze];ge===void 0&&(ge=new Wn,ge.layers.enable(ze),ge.viewport=new It,L[ze]=ge),ge.matrix.fromArray($e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray($e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(gt.x,gt.y,gt.width,gt.height),ze===0&&(C.matrix.copy(ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),me===!0&&C.cameras.push(ge)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const ze=_.getDepthInformation(Ee[0]);ze&&ze.isValid&&ze.texture&&T.init(e,ze,o.renderState)}}for(let Ee=0;Ee<R.length;Ee++){const me=A[Ee],Pe=R[Ee];me!==null&&Pe!==void 0&&Pe.update(me,fe,p||c)}O&&O(J,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Oe=new x_;Oe.setAnimationLoop(ee),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const qr=new Ei,ST=new Ut;function MT(r,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,s_(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,b,R,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),m(S,v)):v.isMeshStandardMaterial?(l(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,A)):v.isMeshMatcapMaterial?(l(S,v),M(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),T(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?f(S,v,b,R):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Un&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Un&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const b=e.get(v),R=b.envMap,A=b.envMapRotation;R&&(S.envMap.value=R,qr.copy(A),qr.x*=-1,qr.y*=-1,qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(qr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function f(S,v,b,R){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*b,S.scale.value=R*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,b){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Un&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const b=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function ET(r,e,t,s){let o={},l={},c=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,R){const A=R.program;s.uniformBlockBinding(b,A)}function p(b,R){let A=o[b.id];A===void 0&&(M(b),A=m(b),o[b.id]=A,b.addEventListener("dispose",S));const z=R.program;s.updateUBOMapping(b,z);const F=e.render.frame;l[b.id]!==F&&(x(b),l[b.id]=F)}function m(b){const R=_();b.__bindingPointIndex=R;const A=r.createBuffer(),z=b.__size,F=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,A),A}function _(){for(let b=0;b<h;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const R=o[b.id],A=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let F=0,U=A.length;F<U;F++){const H=Array.isArray(A[F])?A[F]:[A[F]];for(let L=0,C=H.length;L<C;L++){const k=H[L];if(y(k,F,L,z)===!0){const oe=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ae=0;for(let ce=0;ce<K.length;ce++){const ie=K[ce],ue=T(ie);typeof ie=="number"||typeof ie=="boolean"?(k.__data[0]=ie,r.bufferSubData(r.UNIFORM_BUFFER,oe+ae,k.__data)):ie.isMatrix3?(k.__data[0]=ie.elements[0],k.__data[1]=ie.elements[1],k.__data[2]=ie.elements[2],k.__data[3]=0,k.__data[4]=ie.elements[3],k.__data[5]=ie.elements[4],k.__data[6]=ie.elements[5],k.__data[7]=0,k.__data[8]=ie.elements[6],k.__data[9]=ie.elements[7],k.__data[10]=ie.elements[8],k.__data[11]=0):(ie.toArray(k.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(b,R,A,z){const F=b.value,U=R+"_"+A;if(z[U]===void 0)return typeof F=="number"||typeof F=="boolean"?z[U]=F:z[U]=F.clone(),!0;{const H=z[U];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return z[U]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function M(b){const R=b.uniforms;let A=0;const z=16;for(let U=0,H=R.length;U<H;U++){const L=Array.isArray(R[U])?R[U]:[R[U]];for(let C=0,k=L.length;C<k;C++){const oe=L[C],K=Array.isArray(oe.value)?oe.value:[oe.value];for(let ae=0,ce=K.length;ae<ce;ae++){const ie=K[ae],ue=T(ie),V=A%z,le=V%ue.boundary,re=V+le;A+=le,re!==0&&z-re<ue.storage&&(A+=z-re),oe.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=A,A+=ue.storage}}}const F=A%z;return F>0&&(A+=z-F),b.__size=A,b.__cache={},this}function T(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function S(b){const R=b.target;R.removeEventListener("dispose",S);const A=c.indexOf(R.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function v(){for(const b in o)r.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:f,update:p,dispose:v}}class TT{constructor(e={}){const{canvas:t=xx(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,v=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Tr,this.toneMappingExposure=1;const A=this;let z=!1,F=0,U=0,H=null,L=-1,C=null;const k=new It,oe=new It;let K=null;const ae=new St(0);let ce=0,ie=t.width,ue=t.height,V=1,le=null,re=null;const O=new It(0,0,ie,ue),ee=new It(0,0,ie,ue);let Oe=!1;const J=new zf;let fe=!1,Ee=!1;const me=new Ut,Pe=new Ut,ze=new G,$e=new It,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function we(){return H===null?V:1}let I=s;function Ke(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),I===null){const j="webgl2";if(I=Ke(j,P),I===null)throw Ke(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Se,Be,Ce,tt,Ie,D,w,Z,he,_e,de,qe,be,He,ft,Me,Xe,nt,st,Ye,_t,ut,Pt,Y;function Le(){Se=new IE(I),Se.init(),ut=new mT(I,Se),Be=new CE(I,Se,e,ut),Ce=new dT(I,Se),Be.reverseDepthBuffer&&x&&Ce.buffers.depth.setReversed(!0),tt=new FE(I),Ie=new eT,D=new pT(I,Se,Ce,Ie,Be,ut,tt),w=new PE(A),Z=new DE(A),he=new Gy(I),Pt=new wE(I,he),_e=new NE(I,he,tt,Pt),de=new kE(I,_e,he,tt),st=new OE(I,Be,D),Me=new RE(Ie),qe=new Q1(A,w,Z,Se,Be,Pt,Me),be=new MT(A,Ie),He=new nT,ft=new lT(Se),nt=new TE(A,w,Z,Ce,de,y,f),Xe=new hT(A,de,Be),Y=new ET(I,tt,Be,Ce),Ye=new AE(I,Se,tt),_t=new UE(I,Se,tt),tt.programs=qe.programs,A.capabilities=Be,A.extensions=Se,A.properties=Ie,A.renderLists=He,A.shadowMap=Xe,A.state=Ce,A.info=tt}Le();const se=new yT(A,I);this.xr=se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=Se.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Se.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(ie,ue,!1))},this.getSize=function(P){return P.set(ie,ue)},this.setSize=function(P,j,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=P,ue=j,t.width=Math.floor(P*V),t.height=Math.floor(j*V),te===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(ie*V,ue*V).floor()},this.setDrawingBufferSize=function(P,j,te){ie=P,ue=j,V=te,t.width=Math.floor(P*te),t.height=Math.floor(j*te),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(k)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,j,te,ne){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,j,te,ne),Ce.viewport(k.copy(O).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(ee)},this.setScissor=function(P,j,te,ne){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,j,te,ne),Ce.scissor(oe.copy(ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){Ce.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){le=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(P=!0,j=!0,te=!0){let ne=0;if(P){let W=!1;if(H!==null){const Te=H.texture.format;W=Te===Of||Te===Ff||Te===Uf}if(W){const Te=H.texture.type,De=Te===ji||Te===rs||Te===ua||Te===po||Te===If||Te===Nf,Ve=nt.getClearColor(),Ge=nt.getClearAlpha(),ot=Ve.r,at=Ve.g,Qe=Ve.b;De?(M[0]=ot,M[1]=at,M[2]=Qe,M[3]=Ge,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=ot,T[1]=at,T[2]=Qe,T[3]=Ge,I.clearBufferiv(I.COLOR,0,T))}else ne|=I.COLOR_BUFFER_BIT}j&&(ne|=I.DEPTH_BUFFER_BIT),te&&(ne|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),nt.dispose(),He.dispose(),ft.dispose(),Ie.dispose(),w.dispose(),Z.dispose(),de.dispose(),Pt.dispose(),Y.dispose(),qe.dispose(),se.dispose(),se.removeEventListener("sessionstart",hs),se.removeEventListener("sessionend",qi),Ai.stop()};function pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const P=tt.autoReset,j=Xe.enabled,te=Xe.autoUpdate,ne=Xe.needsUpdate,W=Xe.type;Le(),tt.autoReset=P,Xe.enabled=j,Xe.autoUpdate=te,Xe.needsUpdate=ne,Xe.type=W}function Ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const j=P.target;j.removeEventListener("dispose",ct),Ft(j)}function Ft(P){$t(P),Ie.remove(P)}function $t(P){const j=Ie.get(P).programs;j!==void 0&&(j.forEach(function(te){qe.releaseProgram(te)}),P.isShaderMaterial&&qe.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,te,ne,W,Te){j===null&&(j=gt);const De=W.isMesh&&W.matrixWorld.determinant()<0,Ve=ya(P,j,te,ne,W);Ce.setMaterial(ne,De);let Ge=te.index,ot=1;if(ne.wireframe===!0){if(Ge=_e.getWireframeAttribute(te),Ge===void 0)return;ot=2}const at=te.drawRange,Qe=te.attributes.position;let ht=at.start*ot,wt=(at.start+at.count)*ot;Te!==null&&(ht=Math.max(ht,Te.start*ot),wt=Math.min(wt,(Te.start+Te.count)*ot)),Ge!==null?(ht=Math.max(ht,0),wt=Math.min(wt,Ge.count)):Qe!=null&&(ht=Math.max(ht,0),wt=Math.min(wt,Qe.count));const At=wt-ht;if(At<0||At===1/0)return;Pt.setup(W,ne,Ve,te,Ge);let zt,Mt=Ye;if(Ge!==null&&(zt=he.get(Ge),Mt=_t,Mt.setIndex(zt)),W.isMesh)ne.wireframe===!0?(Ce.setLineWidth(ne.wireframeLinewidth*we()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(W.isLine){let et=ne.linewidth;et===void 0&&(et=1),Ce.setLineWidth(et*we()),W.isLineSegments?Mt.setMode(I.LINES):W.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else W.isPoints?Mt.setMode(I.POINTS):W.isSprite&&Mt.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Mt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const et=W._multiDrawStarts,Wt=W._multiDrawCounts,yt=W._multiDrawCount,an=Ge?he.get(Ge).bytesPerElement:1,ti=Ie.get(ne).currentProgram.getUniforms();for(let yn=0;yn<yt;yn++)ti.setValue(I,"_gl_DrawID",yn),Mt.render(et[yn]/an,Wt[yn])}else if(W.isInstancedMesh)Mt.renderInstances(ht,At,W.count);else if(te.isInstancedBufferGeometry){const et=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,et);Mt.renderInstances(ht,At,Wt)}else Mt.render(ht,At)};function Et(P,j,te){P.transparent===!0&&P.side===Gi&&P.forceSinglePass===!1?(P.side=Un,P.needsUpdate=!0,fs(P,j,te),P.side=wr,P.needsUpdate=!0,fs(P,j,te),P.side=Gi):fs(P,j,te)}this.compile=function(P,j,te=null){te===null&&(te=P),v=ft.get(te),v.init(j),R.push(v),te.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),P!==te&&P.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const ne=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ve=Te[De];Et(Ve,te,W),ne.add(Ve)}else Et(Te,te,W),ne.add(Te)}),R.pop(),v=null,ne},this.compileAsync=function(P,j,te=null){const ne=this.compile(P,j,te);return new Promise(W=>{function Te(){if(ne.forEach(function(De){Ie.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){W(P);return}setTimeout(Te,10)}Se.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let An=null;function xn(P){An&&An(P)}function hs(){Ai.stop()}function qi(){Ai.start()}const Ai=new x_;Ai.setAnimationLoop(xn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(P){An=P,se.setAnimationLoop(P),P===null?Ai.stop():Ai.start()},se.addEventListener("sessionstart",hs),se.addEventListener("sessionend",qi),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,j,H),v=ft.get(P,R.length),v.init(j),R.push(v),Pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Pe),Ee=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Ee),S=He.get(P,b.length),S.init(),b.push(S),se.enabled===!0&&se.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&Ci(Te,j,-1/0,A.sortObjects)}Ci(P,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,re),ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ge&&nt.addToRenderList(S,P),this.info.render.frame++,fe===!0&&Me.beginShadows();const te=v.state.shadowsArray;Xe.render(te,P,j),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,W=S.transmissive;if(v.setupLights(),j.isArrayCamera){const Te=j.cameras;if(W.length>0)for(let De=0,Ve=Te.length;De<Ve;De++){const Ge=Te[De];Rr(ne,W,P,Ge)}ge&&nt.render(P);for(let De=0,Ve=Te.length;De<Ve;De++){const Ge=Te[De];Cr(S,P,Ge,Ge.viewport)}}else W.length>0&&Rr(ne,W,P,j),ge&&nt.render(P),Cr(S,P,j);H!==null&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),P.isScene===!0&&P.onAfterRender(A,P,j),Pt.resetDefaultState(),L=-1,C=null,R.pop(),R.length>0?(v=R[R.length-1],fe===!0&&Me.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function Ci(P,j,te,ne){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){ne&&$e.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Pe);const De=de.update(P),Ve=P.material;Ve.visible&&S.push(P,De,Ve,te,$e.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||J.intersectsObject(P))){const De=de.update(P),Ve=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$e.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),$e.copy(De.boundingSphere.center)),$e.applyMatrix4(P.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ve)){const Ge=De.groups;for(let ot=0,at=Ge.length;ot<at;ot++){const Qe=Ge[ot],ht=Ve[Qe.materialIndex];ht&&ht.visible&&S.push(P,De,ht,te,$e.z,Qe)}}else Ve.visible&&S.push(P,De,Ve,te,$e.z,null)}}const Te=P.children;for(let De=0,Ve=Te.length;De<Ve;De++)Ci(Te[De],j,te,ne)}function Cr(P,j,te,ne){const W=P.opaque,Te=P.transmissive,De=P.transparent;v.setupLightsView(te),fe===!0&&Me.setGlobalState(A.clippingPlanes,te),ne&&Ce.viewport(k.copy(ne)),W.length>0&&Zi(W,j,te),Te.length>0&&Zi(Te,j,te),De.length>0&&Zi(De,j,te),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Rr(P,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new ss(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?pa:ji,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[ne.id],De=ne.viewport||k;Te.setSize(De.z,De.w);const Ve=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(ae),ce=A.getClearAlpha(),ce<1&&A.setClearColor(16777215,.5),A.clear(),ge&&nt.render(te);const Ge=A.toneMapping;A.toneMapping=Tr;const ot=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),fe===!0&&Me.setGlobalState(A.clippingPlanes,ne),Zi(P,te,ne),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),Se.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Qe=0,ht=j.length;Qe<ht;Qe++){const wt=j[Qe],At=wt.object,zt=wt.geometry,Mt=wt.material,et=wt.group;if(Mt.side===Gi&&At.layers.test(ne.layers)){const Wt=Mt.side;Mt.side=Un,Mt.needsUpdate=!0,va(At,te,ne,zt,Mt,et),Mt.side=Wt,Mt.needsUpdate=!0,at=!0}}at===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ve),A.setClearColor(ae,ce),ot!==void 0&&(ne.viewport=ot),A.toneMapping=Ge}function Zi(P,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let W=0,Te=P.length;W<Te;W++){const De=P[W],Ve=De.object,Ge=De.geometry,ot=ne===null?De.material:ne,at=De.group;Ve.layers.test(te.layers)&&va(Ve,j,te,Ge,ot,at)}}function va(P,j,te,ne,W,Te){P.onBeforeRender(A,j,te,ne,W,Te),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(A,j,te,ne,P,Te),W.transparent===!0&&W.side===Gi&&W.forceSinglePass===!1?(W.side=Un,W.needsUpdate=!0,A.renderBufferDirect(te,j,ne,W,P,Te),W.side=wr,W.needsUpdate=!0,A.renderBufferDirect(te,j,ne,W,P,Te),W.side=Gi):A.renderBufferDirect(te,j,ne,W,P,Te),P.onAfterRender(A,j,te,ne,W,Te)}function fs(P,j,te){j.isScene!==!0&&(j=gt);const ne=Ie.get(P),W=v.state.lights,Te=v.state.shadowsArray,De=W.state.version,Ve=qe.getParameters(P,W.state,Te,j,te),Ge=qe.getProgramCacheKey(Ve);let ot=ne.programs;ne.environment=P.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(P.isMeshStandardMaterial?Z:w).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,ot===void 0&&(P.addEventListener("dispose",ct),ot=new Map,ne.programs=ot);let at=ot.get(Ge);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===De)return pi(P,Ve),at}else Ve.uniforms=qe.getUniforms(P),P.onBeforeCompile(Ve,A),at=qe.acquireProgram(Ve,Ge),ot.set(Ge,at),ne.uniforms=Ve.uniforms;const Qe=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=Me.uniform),pi(P,Ve),ne.needsLights=vu(P),ne.lightsStateVersion=De,ne.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=at,ne.uniformsList=null,at}function xa(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=ou.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function pi(P,j){const te=Ie.get(P);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function ya(P,j,te,ne,W){j.isScene!==!0&&(j=gt),D.resetTextureUnits();const Te=j.fog,De=ne.isMeshStandardMaterial?j.environment:null,Ve=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:go,Ge=(ne.isMeshStandardMaterial?Z:w).get(ne.envMap||De),ot=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,at=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,wt=!!te.morphAttributes.color;let At=Tr;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(At=A.toneMapping);const zt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Mt=zt!==void 0?zt.length:0,et=Ie.get(ne),Wt=v.state.lights;if(fe===!0&&(Ee===!0||P!==C)){const Yt=P===C&&ne.id===L;Me.setState(ne,P,Yt)}let yt=!1;ne.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Wt.state.version||et.outputColorSpace!==Ve||W.isBatchedMesh&&et.batching===!1||!W.isBatchedMesh&&et.batching===!0||W.isBatchedMesh&&et.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&et.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&et.instancing===!1||!W.isInstancedMesh&&et.instancing===!0||W.isSkinnedMesh&&et.skinning===!1||!W.isSkinnedMesh&&et.skinning===!0||W.isInstancedMesh&&et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&et.instancingMorph===!1&&W.morphTexture!==null||et.envMap!==Ge||ne.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Me.numPlanes||et.numIntersection!==Me.numIntersection)||et.vertexAlphas!==ot||et.vertexTangents!==at||et.morphTargets!==Qe||et.morphNormals!==ht||et.morphColors!==wt||et.toneMapping!==At||et.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,et.__version=ne.version);let an=et.currentProgram;yt===!0&&(an=fs(ne,j,W));let ti=!1,yn=!1,Pr=!1;const bt=an.getUniforms(),Sn=et.uniforms;if(Ce.useProgram(an.program)&&(ti=!0,yn=!0,Pr=!0),ne.id!==L&&(L=ne.id,yn=!0),ti||C!==P){Ce.buffers.depth.getReversed()?(me.copy(P.projectionMatrix),Sx(me),Mx(me),bt.setValue(I,"projectionMatrix",me)):bt.setValue(I,"projectionMatrix",P.projectionMatrix),bt.setValue(I,"viewMatrix",P.matrixWorldInverse);const hn=bt.map.cameraPosition;hn!==void 0&&hn.setValue(I,ze.setFromMatrixPosition(P.matrixWorld)),Be.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bt.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,yn=!0,Pr=!0)}if(W.isSkinnedMesh){bt.setOptional(I,W,"bindMatrix"),bt.setOptional(I,W,"bindMatrixInverse");const Yt=W.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),bt.setValue(I,"boneTexture",Yt.boneTexture,D))}W.isBatchedMesh&&(bt.setOptional(I,W,"batchingTexture"),bt.setValue(I,"batchingTexture",W._matricesTexture,D),bt.setOptional(I,W,"batchingIdTexture"),bt.setValue(I,"batchingIdTexture",W._indirectTexture,D),bt.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(I,"batchingColorTexture",W._colorsTexture,D));const cn=te.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&st.update(W,te,an),(yn||et.receiveShadow!==W.receiveShadow)&&(et.receiveShadow=W.receiveShadow,bt.setValue(I,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Sn.envMap.value=Ge,Sn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(Sn.envMapIntensity.value=j.environmentIntensity),yn&&(bt.setValue(I,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&Sa(Sn,Pr),Te&&ne.fog===!0&&be.refreshFogUniforms(Sn,Te),be.refreshMaterialUniforms(Sn,ne,V,ue,v.state.transmissionRenderTarget[P.id]),ou.upload(I,xa(et),Sn,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ou.upload(I,xa(et),Sn,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bt.setValue(I,"center",W.center),bt.setValue(I,"modelViewMatrix",W.modelViewMatrix),bt.setValue(I,"normalMatrix",W.normalMatrix),bt.setValue(I,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Yt=ne.uniformsGroups;for(let hn=0,br=Yt.length;hn<br;hn++){const xt=Yt[hn];Y.update(xt,an),Y.bind(xt,an)}}return an}function Sa(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function vu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(P,j,te){Ie.get(P.texture).__webglTexture=j,Ie.get(P.depthTexture).__webglTexture=te;const ne=Ie.get(P);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){const te=Ie.get(P);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,te=0){H=P,F=j,U=te;let ne=!0,W=null,Te=!1,De=!1;if(P){const Ge=Ie.get(P);if(Ge.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(I.FRAMEBUFFER,null),ne=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Ge.__hasExternalTextures)D.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Qe=P.depthTexture;if(Ge.__boundDepthTexture!==Qe){if(Qe!==null&&Ie.has(Qe)&&(P.width!==Qe.image.width||P.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const ot=P.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(De=!0);const at=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(at[j])?W=at[j][te]:W=at[j],Te=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?W=Ie.get(P).__webglMultisampledFramebuffer:Array.isArray(at)?W=at[te]:W=at,k.copy(P.viewport),oe.copy(P.scissor),K=P.scissorTest}else k.copy(O).multiplyScalar(V).floor(),oe.copy(ee).multiplyScalar(V).floor(),K=Oe;if(Ce.bindFramebuffer(I.FRAMEBUFFER,W)&&ne&&Ce.drawBuffers(P,W),Ce.viewport(k),Ce.scissor(oe),Ce.setScissorTest(K),Te){const Ge=Ie.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,te)}else if(De){const Ge=Ie.get(P.texture),ot=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,te||0,ot)}L=-1},this.readRenderTargetPixels=function(P,j,te,ne,W,Te,De){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){Ce.bindFramebuffer(I.FRAMEBUFFER,Ve);try{const Ge=P.texture,ot=Ge.format,at=Ge.type;if(!Be.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-ne&&te>=0&&te<=P.height-W&&I.readPixels(j,te,ne,W,ut.convert(ot),ut.convert(at),Te)}finally{const Ge=H!==null?Ie.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,j,te,ne,W,Te,De){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){const Ge=P.texture,ot=Ge.format,at=Ge.type;if(!Be.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=P.width-ne&&te>=0&&te<=P.height-W){Ce.bindFramebuffer(I.FRAMEBUFFER,Ve);const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(j,te,ne,W,ut.convert(ot),ut.convert(at),0);const ht=H!==null?Ie.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,ht);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yx(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(Qe),I.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,j=null,te=0){P.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1]);const ne=Math.pow(2,-te),W=Math.floor(P.image.width*ne),Te=Math.floor(P.image.height*ne),De=j!==null?j.x:0,Ve=j!==null?j.y:0;D.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,te,0,0,De,Ve,W,Te),Ce.unbindTexture()};const Ma=I.createFramebuffer(),Ea=I.createFramebuffer();this.copyTextureToTexture=function(P,j,te=null,ne=null,W=0,Te=null){P.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1],j=arguments[2],Te=arguments[3]||0,te=null),Te===null&&(W!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=W,W=0):Te=0);let De,Ve,Ge,ot,at,Qe,ht,wt,At;const zt=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(te!==null)De=te.max.x-te.min.x,Ve=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,ot=te.min.x,at=te.min.y,Qe=te.isBox3?te.min.z:0;else{const cn=Math.pow(2,-W);De=Math.floor(zt.width*cn),Ve=Math.floor(zt.height*cn),P.isDataArrayTexture?Ge=zt.depth:P.isData3DTexture?Ge=Math.floor(zt.depth*cn):Ge=1,ot=0,at=0,Qe=0}ne!==null?(ht=ne.x,wt=ne.y,At=ne.z):(ht=0,wt=0,At=0);const Mt=ut.convert(j.format),et=ut.convert(j.type);let Wt;j.isData3DTexture?(D.setTexture3D(j,0),Wt=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Wt=I.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=I.getParameter(I.UNPACK_ROW_LENGTH),an=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ti=I.getParameter(I.UNPACK_SKIP_PIXELS),yn=I.getParameter(I.UNPACK_SKIP_ROWS),Pr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,at),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe);const bt=P.isDataArrayTexture||P.isData3DTexture,Sn=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const cn=Ie.get(P),Yt=Ie.get(j),hn=Ie.get(cn.__renderTarget),br=Ie.get(Yt.__renderTarget);Ce.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let xt=0;xt<Ge;xt++)bt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.get(P).__webglTexture,W,Qe+xt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.get(j).__webglTexture,Te,At+xt)),I.blitFramebuffer(ot,at,De,Ve,ht,wt,De,Ve,I.DEPTH_BUFFER_BIT,I.NEAREST);Ce.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||P.isRenderTargetTexture||Ie.has(P)){const cn=Ie.get(P),Yt=Ie.get(j);Ce.bindFramebuffer(I.READ_FRAMEBUFFER,Ma),Ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ea);for(let hn=0;hn<Ge;hn++)bt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,cn.__webglTexture,W,Qe+hn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,cn.__webglTexture,W),Sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,Te,At+hn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,Te),W!==0?I.blitFramebuffer(ot,at,De,Ve,ht,wt,De,Ve,I.COLOR_BUFFER_BIT,I.NEAREST):Sn?I.copyTexSubImage3D(Wt,Te,ht,wt,At+hn,ot,at,De,Ve):I.copyTexSubImage2D(Wt,Te,ht,wt,ot,at,De,Ve);Ce.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Sn?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(Wt,Te,ht,wt,At,De,Ve,Ge,Mt,et,zt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Wt,Te,ht,wt,At,De,Ve,Ge,Mt,zt.data):I.texSubImage3D(Wt,Te,ht,wt,At,De,Ve,Ge,Mt,et,zt):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,ht,wt,De,Ve,Mt,et,zt.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,ht,wt,zt.width,zt.height,Mt,zt.data):I.texSubImage2D(I.TEXTURE_2D,Te,ht,wt,De,Ve,Mt,et,zt);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,an),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ti),I.pixelStorei(I.UNPACK_SKIP_ROWS,yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pr),Te===0&&j.generateMipmaps&&I.generateMipmap(Wt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(P,j,te=null,ne=null,W=0){return P.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,P=arguments[2],j=arguments[3],W=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,te,ne,W)},this.initRenderTarget=function(P){Ie.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),Ce.unbindTexture()},this.resetState=function(){F=0,U=0,H=null,Ce.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const Ng={type:"change"},Xf={type:"start"},T_={type:"end"},Ql=new pu,Ug=new Sr,wT=Math.cos(70*vx.DEG2RAD),Qt=new G,In=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6;class AT extends Hy{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:no.ROTATE,MIDDLE:no.DOLLY,RIGHT:no.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new os,this._lastTargetPosition=new G,this._quat=new os().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lg,this._sphericalDelta=new lg,this._scale=1,this._panOffset=new G,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new G,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RT.bind(this),this._onPointerDown=CT.bind(this),this._onPointerUp=PT.bind(this),this._onContextMenu=FT.bind(this),this._onMouseWheel=DT.bind(this),this._onKeyDown=IT.bind(this),this._onTouchStart=NT.bind(this),this._onTouchMove=UT.bind(this),this._onMouseDown=bT.bind(this),this._onMouseMove=LT.bind(this),this._interceptControlDown=OT.bind(this),this._interceptControlUp=kT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ng),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(s)&&isFinite(o)&&(s<-Math.PI?s+=In:s>Math.PI&&(s-=In),o<-Math.PI?o+=In:o>Math.PI&&(o-=In),s<=o?this._spherical.theta=Math.max(s,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+o)/2?Math.max(s,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=Qt.length();c=this._clampDistance(h*this._scale);const f=h-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new G(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new G(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),c=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ql.origin.copy(this.object.position),Ql.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ql.direction))<wT?this.object.lookAt(this.target):(Ug.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ql.intersectPlane(Ug,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(Ng),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Qt.copy(o).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),o=e-s.left,l=t-s.top,c=s.width,h=s.height;this._mouse.x=o/c*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(s,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(s,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),o=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(s,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(s*s+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function CT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function RT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function PT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(T_),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case no.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Dt.DOLLY;break;case no.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Dt.ROTATE}break;case no.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Xf)}function LT(r){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function DT(r){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(r.preventDefault(),this.dispatchEvent(Xf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(T_))}function IT(r){this.enabled!==!1&&this._handleKeyDown(r)}function NT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Dt.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Dt.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Xf)}function UT(r){switch(this._trackPointer(r),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Dt.NONE}}function FT(r){this.enabled!==!1&&r.preventDefault()}function OT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class zT extends Gf{constructor(e){super(e)}load(e,t,s,o){const l=this,c=new Iy(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){const f=l.parse(JSON.parse(h));t&&t(f)},s,o)}parse(e){return new BT(e)}}class BT{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const s=[],o=HT(e,t,this.data);for(let l=0,c=o.length;l<c;l++)s.push(...o[l].toShapes());return s}}function HT(r,e,t){const s=Array.from(r),o=e/t.resolution,l=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*o,c=[];let h=0,f=0;for(let p=0;p<s.length;p++){const m=s[p];if(m===`
`)h=0,f-=l;else{const _=VT(m,o,h,f,t);h+=_.offsetX,c.push(_.path)}}return c}function VT(r,e,t,s,o){const l=o.glyphs[r]||o.glyphs["?"];if(!l){console.error('THREE.Font: character "'+r+'" does not exists in font family '+o.familyName+".");return}const c=new By;let h,f,p,m,_,x,y,M;if(l.o){const T=l._cachedOutline||(l._cachedOutline=l.o.split(" "));for(let S=0,v=T.length;S<v;)switch(T[S++]){case"m":h=T[S++]*e+t,f=T[S++]*e+s,c.moveTo(h,f);break;case"l":h=T[S++]*e+t,f=T[S++]*e+s,c.lineTo(h,f);break;case"q":p=T[S++]*e+t,m=T[S++]*e+s,_=T[S++]*e+t,x=T[S++]*e+s,c.quadraticCurveTo(_,x,p,m);break;case"b":p=T[S++]*e+t,m=T[S++]*e+s,_=T[S++]*e+t,x=T[S++]*e+s,y=T[S++]*e+t,M=T[S++]*e+s,c.bezierCurveTo(_,x,y,M,p,m);break}}return{offsetX:l.ha*e,path:c}}class Uh extends Vf{constructor(e,t={}){const s=t.font;if(s===void 0)super();else{const o=s.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}var ao=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return r},Out:function(r){return r},InOut:function(r){return r}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-ao.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?ao.Bounce.In(r*2)*.5:ao.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),to=function(){return performance.now()},w_=function(){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(){for(var e,t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];for(var o=0,l=t;o<l.length;o++){var c=l[o];(e=c._group)===null||e===void 0||e.remove(c),c._group=this,this._tweens[c.getId()]=c,this._tweensAddedDuringUpdate[c.getId()]=c}},r.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var s=0,o=e;s<o.length;s++){var l=o[s];l._group=void 0,delete this._tweens[l.getId()],delete this._tweensAddedDuringUpdate[l.getId()]}},r.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},r.prototype.update=function(e,t){e===void 0&&(e=to()),t===void 0&&(t=!0);var s=Object.keys(this._tweens);if(s.length!==0)for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var o=0;o<s.length;o++){var l=this._tweens[s[o]],c=!t;l&&l.update(e,c)===!1&&!t&&this.remove(l)}s=Object.keys(this._tweensAddedDuringUpdate)}},r}(),is={Linear:function(r,e){var t=r.length-1,s=t*e,o=Math.floor(s),l=is.Utils.Linear;return e<0?l(r[0],r[1],s):e>1?l(r[t],r[t-1],t-s):l(r[o],r[o+1>t?t:o+1],s-o)},Bezier:function(r,e){for(var t=0,s=r.length-1,o=Math.pow,l=is.Utils.Bernstein,c=0;c<=s;c++)t+=o(1-e,s-c)*o(e,c)*r[c]*l(s,c);return t},CatmullRom:function(r,e){var t=r.length-1,s=t*e,o=Math.floor(s),l=is.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(o=Math.floor(s=t*(1+e))),l(r[(o-1+t)%t],r[o],r[(o+1)%t],r[(o+2)%t],s-o)):e<0?r[0]-(l(r[0],r[0],r[1],r[1],-s)-r[0]):e>1?r[t]-(l(r[t],r[t],r[t-1],r[t-1],s-t)-r[t]):l(r[o?o-1:0],r[o],r[t<o+1?t:o+1],r[t<o+2?t:o+2],s-o)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=is.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var s=e;s>1;s--)t*=s;return r[e]=t,t}}(),CatmullRom:function(r,e,t,s,o){var l=(t-r)*.5,c=(s-e)*.5,h=o*o,f=o*h;return(2*e-2*t+l+c)*f+(-3*e+3*t-2*l-c)*h+l*o+e}}},Yf=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Rf=new w_,GT=function(){function r(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ao.Linear.None,this._interpolationFunction=is.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Yf.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Rf,Rf.add(this))}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=to()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var s in this._valuesStartRepeat)this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var o={};for(var l in this._valuesEnd)o[l]=this._valuesEnd[l];this._valuesEnd=o}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,s,o,l){for(var c in s){var h=e[c],f=Array.isArray(h),p=f?"array":typeof h,m=!f&&Array.isArray(s[c]);if(!(p==="undefined"||p==="function")){if(m){var _=s[c];if(_.length===0)continue;for(var x=[h],y=0,M=_.length;y<M;y+=1){var T=this._handleRelativeValue(h,_[y]);if(isNaN(T)){m=!1,console.warn("Found invalid interpolation list. Skipping.");break}x.push(T)}m&&(s[c]=x)}if((p==="object"||f)&&h&&!m){t[c]=f?[]:{};var S=h;for(var v in S)t[c][v]=S[v];o[c]=f?[]:{};var _=s[c];if(!this._isDynamic){var b={};for(var v in _)b[v]=_[v];s[c]=_=b}this._setupProperties(S,t[c],_,o[c],l)}else(typeof t[c]>"u"||l)&&(t[c]=h),f||(t[c]*=1),m?o[c]=s[c].slice().reverse():o[c]=t[c]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},r.prototype.pause=function(e){return e===void 0&&(e=to()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},r.prototype.resume=function(e){return e===void 0&&(e=to()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},r.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=ao.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=is.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var s=this,o;if(e===void 0&&(e=to()),t===void 0&&(t=r.autoStartOnUpdate),this._isPaused)return!0;var l;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var c=e-this._startTime,h=this._duration+((o=this._repeatDelayTime)!==null&&o!==void 0?o:this._delayTime),f=this._duration+this._repeat*h,p=function(){if(s._duration===0||c>f)return 1;var T=Math.trunc(c/h),S=c-T*h,v=Math.min(S/s._duration,1);return v===0&&c===s._duration?1:v},m=p(),_=this._easingFunction(m);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,_),this._onUpdateCallback&&this._onUpdateCallback(this._object,m),this._duration===0||c>=this._duration)if(this._repeat>0){var x=Math.min(Math.trunc((c-this._duration)/h)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=x);for(l in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[l]=="string"&&(this._valuesStartRepeat[l]=this._valuesStartRepeat[l]+parseFloat(this._valuesEnd[l])),this._yoyo&&this._swapEndStartRepeatValues(l),this._valuesStart[l]=this._valuesStartRepeat[l];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=h*x,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var y=0,M=this._chainedTweens.length;y<M;y++)this._chainedTweens[y].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,s,o){for(var l in s)if(t[l]!==void 0){var c=t[l]||0,h=s[l],f=Array.isArray(e[l]),p=Array.isArray(h),m=!f&&p;m?e[l]=this._interpolationFunction(h,o):typeof h=="object"&&h?this._updateProperties(e[l],c,h,o):(h=this._handleRelativeValue(c,h),typeof h=="number"&&(e[l]=c+(h-c)*o))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],s=this._valuesEnd[e];typeof s=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(s):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r.autoStartOnUpdate=!1,r}(),WT="25.0.0",XT=Yf.nextId,Ti=Rf,YT=Ti.getAll.bind(Ti),jT=Ti.removeAll.bind(Ti),qT=Ti.add.bind(Ti),ZT=Ti.remove.bind(Ti),$T=Ti.update.bind(Ti),Qr={Easing:ao,Group:w_,Interpolation:is,now:to,Sequence:Yf,nextId:XT,Tween:GT,VERSION:WT,getAll:YT,removeAll:jT,add:qT,remove:ZT,update:$T};class KT{constructor(e){$o(this,"value");$o(this,"left");$o(this,"right");$o(this,"height");this.value=e,this.left=null,this.right=null,this.height=1}}const Nn=r=>r?r.height:0,Ks=r=>r?Nn(r.left)-Nn(r.right):0,lo=r=>{const e=r.left,t=e.right;return e.right=r,r.left=t,r.height=Math.max(Nn(r.left),Nn(r.right))+1,e.height=Math.max(Nn(e.left),Nn(e.right))+1,e},uo=r=>{const e=r.right,t=e.left;return e.left=r,r.right=t,r.height=Math.max(Nn(r.left),Nn(r.right))+1,e.height=Math.max(Nn(e.left),Nn(e.right))+1,e},Pf=(r,e)=>{if(!r)return new KT(e);if(e<r.value)r.left=Pf(r.left,e);else if(e>r.value)r.right=Pf(r.right,e);else return r;r.height=Math.max(Nn(r.left),Nn(r.right))+1;const t=Ks(r);return t>1&&e<r.left.value?lo(r):t<-1&&e>r.right.value?uo(r):t>1&&e>r.left.value?(r.left=uo(r.left),lo(r)):t<-1&&e<r.right.value?(r.right=lo(r.right),uo(r)):r},JT=()=>{const r=Zr.useRef(null),[e,t]=Zr.useState(null),[s]=Zr.useState(new ns),[o,l]=Zr.useState(null),[c,h]=Zr.useState(0);Zr.useEffect(()=>{const b=new Xx;b.add(s);const R=new Yn,A=1e4,z=new u_({color:16777215,size:.1}),F=[];for(let ie=0;ie<A;ie++)F.push(Math.random()*2e3-1e3,Math.random()*2e3-1e3,Math.random()*2e3-1e3);R.setAttribute("position",new On(F,3));const U=new Zx(R,z);b.add(U),b.background=new St(986895);const H=new Wn(75,window.innerWidth/window.innerHeight,.1,1e4);H.position.set(0,15,20);const L=new TT({antialias:!0});L.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(L.domElement);const C=new AT(H,L.domElement);C.enableDamping=!0,C.dampingFactor=.05,new zT().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",l);const oe=new ky(16777215,.7);b.add(oe);const K=new Fy(16777215,.5);K.position.set(10,10,10),b.add(K);const ae=()=>{requestAnimationFrame(ae),Qr.update(),C.update(),L.render(b,H)};ae();const ce=()=>{H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),L.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ce),()=>{r.current.removeChild(L.domElement),window.removeEventListener("resize",ce)}},[s]);const f=b=>{const R=[3447003,15158332,15844367,3066993,10181046];return R[b%R.length]},p=(b,R,A,z)=>{const F=new ns,U=new fu(.5,32,32),H=new ig({color:f(z)}),L=new Xn(U,H);if(L.position.set(b,R,0),F.add(L),o){const C=new Uh(A.toString(),{font:o,size:.2,height:.05}),k=new ig({color:16777215}),oe=new Xn(C,k);oe.position.set(b-.2,R+.6,0),F.add(oe)}return F},m=(b,R,A,z)=>{const F=new l_({color:16777215}),U=[new G(b,R,0),new G(A,z,0)],H=new Yn().setFromPoints(U);return new qx(H,F)},_=(b,R,A,z=1)=>{if(!b)return;const F=p(R,A,b.value,z);if(s.add(F),b.left){const U=m(R,A,R-2/z,A-2);s.add(U),_(b.left,R-2/z,A-2,z+1)}if(b.right){const U=m(R,A,R+2/z,A-2);s.add(U),_(b.right,R+2/z,A-2,z+1)}},x=(b,R)=>{if(!b)return b;if(R<b.value)b.left=x(b.left,R);else if(R>b.value)b.right=x(b.right,R);else{if(!b.left||!b.right)return b.left||b.right;let z=b.right;for(;z.left;)z=z.left;b.value=z.value,b.right=x(b.right,z.value)}b.height=Math.max(Nn(b.left),Nn(b.right))+1;const A=Ks(b);return A>1&&Ks(b.left)>=0?lo(b):A>1&&Ks(b.left)<0?(b.left=uo(b.left),lo(b)):A<-1&&Ks(b.right)<=0?uo(b):A<-1&&Ks(b.right)>0?(b.right=lo(b.right),uo(b)):b},y=(b,R)=>b?R===b.value?b:R<b.value?y(b.left,R):y(b.right,R):null,M=b=>{s.children.forEach(R=>{R instanceof ns&&R.children.forEach(A=>{var z;if(A instanceof Xn&&A.geometry instanceof fu){const F=(z=A.parent)==null?void 0:z.children.find(U=>U instanceof Xn&&U.geometry instanceof Uh);if(F){const U=F;if(U.geometry instanceof Uh&&Number(U.geometry)===b){const L=A.scale.clone(),C=new Qr.Tween(A.scale).to({x:L.x*1.5,y:L.y*1.5,z:L.z*1.5},500).easing(Qr.Easing.Quadratic.Out),k=new Qr.Tween(A.scale).to({x:L.x,y:L.y,z:L.z},500).easing(Qr.Easing.Quadratic.In);C.chain(k),k.chain(C),C.start(),A.material.color.set(16766720)}}}})})},T=()=>{const b=Pf(e,c);t(b),s.clear(),_(b,0,5)},S=()=>{const b=x(e,c);t(b),s.clear(),_(b,0,5)},v=()=>{if(!e){alert("The tree is empty!");return}y(e,c)?(alert(`Node with value ${c} found!`),M(c)):alert(`Node with value ${c} not found.`)};return xi.jsxs("div",{children:[xi.jsx("input",{type:"number",value:c,onChange:b=>h(Number(b.target.value)),placeholder:"Enter node value",style:{position:"absolute",top:20,left:20,color:"white",height:32,fontSize:18}}),xi.jsx("button",{onClick:T,style:{position:"absolute",top:20,left:180,backgroundColor:"white",color:"black",borderRadius:0},children:"Insert"}),xi.jsx("button",{onClick:S,style:{position:"absolute",top:20,left:255,backgroundColor:"white",color:"black",borderRadius:0},children:"Delete"}),xi.jsx("button",{onClick:v,style:{position:"absolute",top:20,left:335,backgroundColor:"white",color:"black",borderRadius:0},children:"Search"}),xi.jsx("footer",{children:xi.jsx("p",{style:{position:"absolute",bottom:0,left:20,backgroundColor:"white",color:"black",borderRadius:0},children:"Crafted by Sidali DJEGHBAL - Built using Three.js and TWEEN.JS."})}),xi.jsx("div",{ref:r})]})};p0.createRoot(document.getElementById("root")).render(xi.jsx(Zr.StrictMode,{children:xi.jsx(JT,{})}))});export default QT();
