import{i as Ot,r as $t,g as Ht,t as M,a as q,B as T,c as L,s as N,b as le,d as qt,m as y,e as Gt,f as vt,P as dt,h as U,j as bt,_ as W,o as m,k as b,w as k,l as G,n as u,u as ue,p as _t,q as de,v as xt,x as A,y as F,z as Pt,A as ce,C as jt,D as At,E as pe,F as me,G as fe,H as Xt,I as St,J as be,K as J,L as X,M as V,N as Lt,O as wt,Q as Yt,R as ct,S as C,T as et,U as Z,V as ve,W as ge,X as he,Y as pt,Z as mt,$ as Y,a0 as ye}from"./index-C2skKnnm.js";var ft={};function $e(t="pui_id_"){return Object.hasOwn(ft,t)||(ft[t]=0),ft[t]++,`${t}${ft[t]}`}var z={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function nt(t){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nt(t)}function Vt(t,e){return we(t)||Se(t,e)||xe(t,e)||_e()}function _e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xe(t,e){if(t){if(typeof t=="string")return Bt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Bt(t,e):void 0}}function Bt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function Se(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,r,i,l,s=[],a=!0,d=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(a=(o=i.call(n)).done)&&(s.push(o.value),s.length!==e);a=!0);}catch(c){d=!0,r=c}finally{try{if(!a&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw r}}return s}}function we(t){if(Array.isArray(t))return t}function Et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Et(Object(n),!0).forEach(function(o){kt(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function kt(t,e,n){return(e=ke(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ke(t){var e=Ce(t,"string");return nt(e)=="symbol"?e:e+""}function Ce(t,e){if(nt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(nt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var h={_getMeta:function(){return[Ot(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],$t(Ot(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var o,r,i;return(o=(e==null||(r=e.instance)===null||r===void 0?void 0:r.$primevue)||(n==null||(i=n.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:Ht,_getPTValue:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var j=h._getOptionValue.apply(h,arguments);return q(j)||Gt(j)?{class:j}:j},d=((e=o.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=o.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},c=d.mergeSections,p=c===void 0?!0:c,v=d.mergeProps,g=v===void 0?!1:v,_=s?h._useDefaultPT(o,o.defaultPT(),a,i,l):void 0,I=h._usePT(o,h._getPT(r,o.$name),a,i,x(x({},l),{},{global:_||{}})),w=h._getPTDatasets(o,i);return p||!p&&I?g?h._mergeProps(o,g,_,I,w):x(x(x({},_),I),w):x(x({},I),w)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return x(x({},n==="root"&&kt({},"".concat(o,"name"),M(e.$name))),{},kt({},"".concat(o,"section"),M(n)))},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=function(l){var s,a=o?o(l):l,d=M(n);return(s=a==null?void 0:a[d])!==null&&s!==void 0?s:a};return e&&Object.hasOwn(e,"_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,l=function(w){return o(w,r,i)};if(n&&Object.hasOwn(n,"_usept")){var s,a=n._usept||((s=e.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},d=a.mergeSections,c=d===void 0?!0:d,p=a.mergeProps,v=p===void 0?!1:p,g=l(n.originalValue),_=l(n.value);return g===void 0&&_===void 0?void 0:q(_)?_:q(g)?g:c||!c&&_?v?h._mergeProps(e,v,g,_):x(x({},g),_):_}return l(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return h._usePT(e,n,o,r,i)},_loadStyles:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=h._getConfig(o,r),l={nonce:i==null||(e=i.csp)===null||e===void 0?void 0:e.nonce};h._loadCoreStyles(n,l),h._loadThemeStyles(n,l),h._loadScopedThemeStyles(n,l),h._removeThemeListeners(n),n.$loadStyles=function(){return h._loadThemeStyles(n,l)},h._themeChangeListener(n.$loadStyles)},_loadCoreStyles:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!z.isStyleNameLoaded((e=o.$style)===null||e===void 0?void 0:e.name)&&(n=o.$style)!==null&&n!==void 0&&n.name){var i;T.loadCSS(r),(i=o.$style)===null||i===void 0||i.loadCSS(r),z.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var e,n,o,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(r!=null&&r.isUnstyled()||(r==null||(e=r.theme)===null||e===void 0?void 0:e.call(r))==="none")){if(!L.isStyleNameLoaded("common")){var l,s,a=((l=r.$style)===null||l===void 0||(s=l.getCommonTheme)===null||s===void 0?void 0:s.call(l))||{},d=a.primitive,c=a.semantic,p=a.global,v=a.style;T.load(d==null?void 0:d.css,x({name:"primitive-variables"},i)),T.load(c==null?void 0:c.css,x({name:"semantic-variables"},i)),T.load(p==null?void 0:p.css,x({name:"global-variables"},i)),T.loadStyle(x({name:"global-style"},i),v),L.setLoadedStyleName("common")}if(!L.isStyleNameLoaded((n=r.$style)===null||n===void 0?void 0:n.name)&&(o=r.$style)!==null&&o!==void 0&&o.name){var g,_,I,w,P=((g=r.$style)===null||g===void 0||(_=g.getDirectiveTheme)===null||_===void 0?void 0:_.call(g))||{},j=P.css,O=P.style;(I=r.$style)===null||I===void 0||I.load(j,x({name:"".concat(r.$style.name,"-variables")},i)),(w=r.$style)===null||w===void 0||w.loadStyle(x({name:"".concat(r.$style.name,"-style")},i),O),L.setLoadedStyleName(r.$style.name)}if(!L.isStyleNameLoaded("layer-order")){var f,S,D=(f=r.$style)===null||f===void 0||(S=f.getLayerOrderThemeCSS)===null||S===void 0?void 0:S.call(f);T.load(D,x({name:"layer-order",first:!0},i)),L.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=e.preset();if(o&&e.$attrSelector){var r,i,l,s=((r=e.$style)===null||r===void 0||(i=r.getPresetTheme)===null||i===void 0?void 0:i.call(r,o,"[".concat(e.$attrSelector,"]")))||{},a=s.css,d=(l=e.$style)===null||l===void 0?void 0:l.load(a,x({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},n));e.scopedStyleEl=d.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};z.clearLoadedStyleNames(),N.on("theme:change",e)},_removeThemeListeners:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};N.off("theme:change",e.$loadStyles)},_hook:function(e,n,o,r,i,l){var s,a,d="on".concat(le(n)),c=h._getConfig(r,i),p=o==null?void 0:o.$instance,v=h._usePT(p,h._getPT(r==null||(s=r.value)===null||s===void 0?void 0:s.pt,e),h._getOptionValue,"hooks.".concat(d)),g=h._useDefaultPT(p,c==null||(a=c.pt)===null||a===void 0||(a=a.directives)===null||a===void 0?void 0:a[e],h._getOptionValue,"hooks.".concat(d)),_={el:o,binding:r,vnode:i,prevVnode:l};v==null||v(p,_),g==null||g(p,_)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return qt(e)?e.apply(void 0,o):y.apply(void 0,o)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(s,a,d,c,p){var v,g,_,I;a._$instances=a._$instances||{};var w=h._getConfig(d,c),P=a._$instances[e]||{},j=vt(P)?x(x({},n),n==null?void 0:n.methods):{};a._$instances[e]=x(x({},P),{},{$name:e,$host:a,$binding:d,$modifiers:d==null?void 0:d.modifiers,$value:d==null?void 0:d.value,$el:P.$el||a||void 0,$style:x({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},n==null?void 0:n.style),$primevueConfig:w,$attrSelector:(v=a.$pd)===null||v===void 0||(v=v[e])===null||v===void 0?void 0:v.attrSelector,defaultPT:function(){return h._getPT(w==null?void 0:w.pt,void 0,function(f){var S;return f==null||(S=f.directives)===null||S===void 0?void 0:S[e]})},isUnstyled:function(){var f,S;return((f=a._$instances[e])===null||f===void 0||(f=f.$binding)===null||f===void 0||(f=f.value)===null||f===void 0?void 0:f.unstyled)!==void 0?(S=a._$instances[e])===null||S===void 0||(S=S.$binding)===null||S===void 0||(S=S.value)===null||S===void 0?void 0:S.unstyled:w==null?void 0:w.unstyled},theme:function(){var f;return(f=a._$instances[e])===null||f===void 0||(f=f.$primevueConfig)===null||f===void 0?void 0:f.theme},preset:function(){var f;return(f=a._$instances[e])===null||f===void 0||(f=f.$binding)===null||f===void 0||(f=f.value)===null||f===void 0?void 0:f.dt},ptm:function(){var f,S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return h._getPTValue(a._$instances[e],(f=a._$instances[e])===null||f===void 0||(f=f.$binding)===null||f===void 0||(f=f.value)===null||f===void 0?void 0:f.pt,S,x({},D))},ptmo:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h._getPTValue(a._$instances[e],f,S,D,!1)},cx:function(){var f,S,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",yt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(f=a._$instances[e])!==null&&f!==void 0&&f.isUnstyled()?void 0:h._getOptionValue((S=a._$instances[e])===null||S===void 0||(S=S.$style)===null||S===void 0?void 0:S.classes,D,x({},yt))},sx:function(){var f,S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,yt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return D?h._getOptionValue((f=a._$instances[e])===null||f===void 0||(f=f.$style)===null||f===void 0?void 0:f.inlineStyles,S,x({},yt)):void 0}},j),a.$instance=a._$instances[e],(g=(_=a.$instance)[s])===null||g===void 0||g.call(_,a,d,c,p),a["$".concat(e)]=a.$instance,h._hook(e,s,a,d,c,p),a.$pd||(a.$pd={}),a.$pd[e]=x(x({},(I=a.$pd)===null||I===void 0?void 0:I[e]),{},{name:e,instance:a._$instances[e]})},r=function(s){var a,d,c,p=s._$instances[e],v=p==null?void 0:p.watch,g=function(w){var P,j=w.newValue,O=w.oldValue;return v==null||(P=v.config)===null||P===void 0?void 0:P.call(p,j,O)},_=function(w){var P,j=w.newValue,O=w.oldValue;return v==null||(P=v["config.ripple"])===null||P===void 0?void 0:P.call(p,j,O)};p.$watchersCallback={config:g,"config.ripple":_},v==null||(a=v.config)===null||a===void 0||a.call(p,p==null?void 0:p.$primevueConfig),dt.on("config:change",g),v==null||(d=v["config.ripple"])===null||d===void 0||d.call(p,p==null||(c=p.$primevueConfig)===null||c===void 0?void 0:c.ripple),dt.on("config:ripple:change",_)},i=function(s){var a=s._$instances[e].$watchersCallback;a&&(dt.off("config:change",a.config),dt.off("config:ripple:change",a["config.ripple"]))};return{created:function(s,a,d,c){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:$e("pd")},o("created",s,a,d,c)},beforeMount:function(s,a,d,c){var p;h._loadStyles((p=s.$pd[e])===null||p===void 0?void 0:p.instance,a,d),o("beforeMount",s,a,d,c),r(s)},mounted:function(s,a,d,c){var p;h._loadStyles((p=s.$pd[e])===null||p===void 0?void 0:p.instance,a,d),o("mounted",s,a,d,c)},beforeUpdate:function(s,a,d,c){o("beforeUpdate",s,a,d,c)},updated:function(s,a,d,c){var p;h._loadStyles((p=s.$pd[e])===null||p===void 0?void 0:p.instance,a,d),o("updated",s,a,d,c)},beforeUnmount:function(s,a,d,c){var p;i(s),h._removeThemeListeners((p=s.$pd[e])===null||p===void 0?void 0:p.instance),o("beforeUnmount",s,a,d,c)},unmounted:function(s,a,d,c){var p;(p=s.$pd[e])===null||p===void 0||(p=p.instance)===null||p===void 0||(p=p.scopedStyleEl)===null||p===void 0||(p=p.value)===null||p===void 0||p.remove(),o("unmounted",s,a,d,c)}}},extend:function(){var e=h._getMeta.apply(h,arguments),n=Vt(e,2),o=n[0],r=n[1];return x({extend:function(){var l=h._getMeta.apply(h,arguments),s=Vt(l,2),a=s[0],d=s[1];return h.extend(a,x(x(x({},r),r==null?void 0:r.methods),d))}},h._extend(o,r))}},Ie=T.extend({name:"animateonscroll-directive"}),Pe=h.extend({style:Ie});function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function Dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function Nt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dt(Object(n),!0).forEach(function(o){Te(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dt(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Te(t,e,n){return(e=Oe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Oe(t){var e=je(t,"string");return ot(e)=="symbol"?e:e+""}function je(t,e){if(ot(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(ot(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Mt(t,e){return Be(t)||Ve(t,e)||Le(t,e)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(t,e){if(t){if(typeof t=="string")return zt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zt(t,e):void 0}}function zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function Ve(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,r,i,l,s=[],a=!0,d=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(a=(o=i.call(n)).done)&&(s.push(o.value),s.length!==e);a=!0);}catch(c){d=!0,r=c}finally{try{if(!a&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw r}}return s}}function Be(t){if(Array.isArray(t))return t}var R=Pe.extend("animateonscroll",{created:function(){this.$value=this.$value||{},this.$el.style.opacity=this.$value.enterClass?"0":""},mounted:function(){this.$el.setAttribute("data-pd-animateonscroll",!0),this.bindIntersectionObserver()},unmounted:function(){this.unbindAnimationEvents(),this.unbindIntersectionObserver()},observer:void 0,resetObserver:void 0,isObserverActive:!1,animationState:void 0,animationEndListener:void 0,methods:{bindAnimationEvents:function(){var e=this;this.animationEndListener||(this.animationEndListener=function(){U(e.$el,[e.$value.enterClass,e.$value.leaveClass]),!e.$modifiers.once&&e.resetObserver.observe(e.$el),e.unbindAnimationEvents()},this.$el.addEventListener("animationend",this.animationEndListener))},bindIntersectionObserver:function(){var e=this,n=this.$value,o=n.root,r=n.rootMargin,i=n.threshold,l=i===void 0?.5:i,s={root:o,rootMargin:r,threshold:l};this.observer=new IntersectionObserver(function(a){var d=Mt(a,1),c=d[0];e.isObserverActive?c.boundingClientRect.top>0&&(c.isIntersecting?e.enter():e.leave()):c.isIntersecting&&e.enter(),e.isObserverActive=!0},s),setTimeout(function(){return e.observer.observe(e.$el)},0),this.resetObserver=new IntersectionObserver(function(a){var d=Mt(a,1),c=d[0];c.boundingClientRect.top>0&&!c.isIntersecting&&(e.$el.style.opacity=e.$value.enterClass?"0":"",U(e.$el,[e.$value.enterClass,e.$value.leaveClass]),e.resetObserver.unobserve(e.$el)),e.animationState=void 0},Nt(Nt({},s),{},{threshold:0}))},enter:function(){this.animationState!=="enter"&&this.$value.enterClass&&(this.$el.style.opacity="",U(this.$el,this.$value.leaveClass),bt(this.$el,this.$value.enterClass),this.$modifiers.once&&this.unbindIntersectionObserver(this.$el),this.bindAnimationEvents(),this.animationState="enter")},leave:function(){this.animationState!=="leave"&&this.$value.leaveClass&&(this.$el.style.opacity=this.$value.enterClass?"0":"",U(this.$el,this.$value.enterClass),bt(this.$el,this.$value.leaveClass),this.bindAnimationEvents(),this.animationState="leave")},unbindAnimationEvents:function(){this.animationEndListener&&(this.$el.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=void 0)},unbindIntersectionObserver:function(){var e,n;(e=this.observer)===null||e===void 0||e.unobserve(this.$el),(n=this.resetObserver)===null||n===void 0||n.unobserve(this.$el),this.isObserverActive=!1}}});const Ee={},De={class:"lg:px-20 px-10 lg:flex w-full min-h-dvh lg:items-center lg:justify-around gap-5"},Ne={class:"items-center lg:w-1/3 justify-center pr-10"},Me={class:"flex flex-wrap justify-start mt-6"},ze={class:"lg:flex lg:items-center p-3"},Ue={class:"lg:flex lg:items-center p-3"},Fe={class:"lg:flex lg:items-center gap-2 p-3"};function Re(t,e){const n=R;return m(),b("div",De,[k((m(),b("div",Ne,[e[3]||(e[3]=G('<span class="text-7xl font-bold">let&#39;s connect</span><p class="font-light text-lg text-pretty mt-5">Entre em contato enviando uma um email para <a href="mailto:jpsshome@gmail.com" class="border-b border-[#D3E97A]">jpsshome@gmail.com</a>.</p><p class="font-light text-lg text-pretty mt-5">Confira meu <a href="../../assets/João_Pedro_Silva_Santos.docx" download class="border-b border-[#D3E97A]">currículo.</a></p>',3)),u("div",Me,[k((m(),b("div",ze,e[0]||(e[0]=[u("p",null,[u("a",{href:"mailto:jpsshome@gmail.com"},[u("i",{class:"pi pi-envelope",style:{"font-size":"1.8rem",color:"#b74f4f"}})])],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",Ue,e[1]||(e[1]=[u("p",null,[u("a",{href:"https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/",target:"_blank"},[u("i",{class:"pi pi-linkedin",style:{"font-size":"2rem",color:"#0966c2"}})])],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",Fe,e[2]||(e[2]=[u("p",null,[u("i",{class:"pi pi-github",style:{"font-size":"2rem"}})],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),e[4]||(e[4]=u("div",{class:"items-center w-1/2"},null,-1))])}const Ke=W(Ee,[["render",Re]]);function Je(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",e=ue();return"".concat(t).concat(e.replace("v-","").replaceAll("-","_"))}var Ut=T.extend({name:"common"});function rt(t){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rt(t)}function We(t){return te(t)||He(t)||Qt(t)||Zt()}function He(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Q(t,e){return te(t)||qe(t,e)||Qt(t,e)||Zt()}function Zt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qt(t,e){if(t){if(typeof t=="string")return Ft(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ft(t,e):void 0}}function Ft(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function qe(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,r,i,l,s=[],a=!0,d=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(s.push(o.value),s.length!==e);a=!0);}catch(c){d=!0,r=c}finally{try{if(!a&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw r}}return s}}function te(t){if(Array.isArray(t))return t}function Rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rt(Object(n),!0).forEach(function(o){tt(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function tt(t,e,n){return(e=Ge(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ge(t){var e=Xe(t,"string");return rt(e)=="symbol"?e:e+""}function Xe(t,e){if(rt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(rt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var lt={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){N.off("theme:change",this._loadCoreStyles),e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e,n){var o=this;N.off("theme:change",this._themeScopedListener),e?(this._loadScopedThemeStyles(e),this._themeScopedListener=function(){return o._loadScopedThemeStyles(e)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var e,n,o,r,i,l,s,a,d,c,p,v=(e=this.pt)===null||e===void 0?void 0:e._usept,g=v?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=v?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(r=_||g)===null||r===void 0||(r=r.hooks)===null||r===void 0||(i=r.onBeforeCreate)===null||i===void 0||i.call(r);var I=(l=this.$primevueConfig)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l._usept,w=I?(s=this.$primevue)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s.originalValue:void 0,P=I?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(d=this.$primevue)===null||d===void 0||(d=d.config)===null||d===void 0?void 0:d.pt;(c=P||w)===null||c===void 0||(c=c[this.$.type.name])===null||c===void 0||(c=c.hooks)===null||c===void 0||(p=c.onBeforeCreate)===null||p===void 0||p.call(c),this.$attrSelector=Je(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var e;this.rootEl=_t(de(this.$el)?this.$el:(e=this.$el)===null||e===void 0?void 0:e.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=$({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),o==null||o()}},_mergeProps:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return qt(e)?e.apply(void 0,o):y.apply(void 0,o)},_load:function(){z.isStyleNameLoaded("base")||(T.loadCSS(this.$styleOptions),this._loadGlobalStyles(),z.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var e,n;!z.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(Ut.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),z.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);xt(e)&&T.load(e,$({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!(this.isUnstyled||this.$theme==="none")){if(!L.isStyleNameLoaded("common")){var o,r,i=((o=this.$style)===null||o===void 0||(r=o.getCommonTheme)===null||r===void 0?void 0:r.call(o))||{},l=i.primitive,s=i.semantic,a=i.global,d=i.style;T.load(l==null?void 0:l.css,$({name:"primitive-variables"},this.$styleOptions)),T.load(s==null?void 0:s.css,$({name:"semantic-variables"},this.$styleOptions)),T.load(a==null?void 0:a.css,$({name:"global-variables"},this.$styleOptions)),T.loadStyle($({name:"global-style"},this.$styleOptions),d),L.setLoadedStyleName("common")}if(!L.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var c,p,v,g,_=((c=this.$style)===null||c===void 0||(p=c.getComponentTheme)===null||p===void 0?void 0:p.call(c))||{},I=_.css,w=_.style;(v=this.$style)===null||v===void 0||v.load(I,$({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(g=this.$style)===null||g===void 0||g.loadStyle($({name:"".concat(this.$style.name,"-style")},this.$styleOptions),w),L.setLoadedStyleName(this.$style.name)}if(!L.isStyleNameLoaded("layer-order")){var P,j,O=(P=this.$style)===null||P===void 0||(j=P.getLayerOrderThemeCSS)===null||j===void 0?void 0:j.call(P);T.load(O,$({name:"layer-order",first:!0},this.$styleOptions)),L.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,o,r,i=((n=this.$style)===null||n===void 0||(o=n.getPresetTheme)===null||o===void 0?void 0:o.call(n,e,"[".concat(this.$attrSelector,"]")))||{},l=i.css,s=(r=this.$style)===null||r===void 0?void 0:r.load(l,$({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=s.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};z.clearLoadedStyleNames(),N.on("theme:change",e)},_removeThemeListeners:function(){N.off("theme:change",this._loadCoreStyles),N.off("theme:change",this._load),N.off("theme:change",this._themeScopedListener)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ht(e,n,o)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,l=/./g.test(o)&&!!r[o.split(".")[0]],s=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},a=s.mergeSections,d=a===void 0?!0:a,c=s.mergeProps,p=c===void 0?!1:c,v=i?l?this._useGlobalPT(this._getPTClassValue,o,r):this._useDefaultPT(this._getPTClassValue,o,r):void 0,g=l?void 0:this._getPTSelf(n,this._getPTClassValue,o,$($({},r),{},{global:v||{}})),_=this._getPTDatasets(o);return d||!d&&g?p?this._mergeProps(p,v,g,_):$($($({},v),g),_):$($({},g),_)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return y(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",i=o==="root"&&xt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return o!=="transition"&&$($({},o==="root"&&$($(tt({},"".concat(r,"name"),M(i?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),i&&tt({},"".concat(r,"extend"),M(this.$.type.name))),{},tt({},"".concat(this.$attrSelector),""))),{},tt({},"".concat(r,"section"),M(o)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return q(e)||Gt(e)?{class:e}:e},_getPT:function(e){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(s){var a,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=r?r(s):s,p=M(o),v=M(n.$name);return(a=d?p!==v?c==null?void 0:c[p]:void 0:c==null?void 0:c[p])!==null&&a!==void 0?a:c};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,n,o,r){var i=function(I){return n(I,o,r)};if(e!=null&&e.hasOwnProperty("_usept")){var l,s=e._usept||((l=this.$primevueConfig)===null||l===void 0?void 0:l.ptOptions)||{},a=s.mergeSections,d=a===void 0?!0:a,c=s.mergeProps,p=c===void 0?!1:c,v=i(e.originalValue),g=i(e.value);return v===void 0&&g===void 0?void 0:q(g)?g:q(v)?v:d||!d&&g?p?this._mergeProps(p,v,g):$($({},v),g):g}return i(e)},_useGlobalPT:function(e,n,o){return this._usePT(this.globalPT,e,n,o)},_useDefaultPT:function(e,n,o){return this._usePT(this.defaultPT,e,n,o)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,$($({},this.$params),n))},ptmi:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=y(this.$_attrsWithoutPT,this.ptm(n,o));return r!=null&&r.hasOwnProperty("id")&&((e=r.id)!==null&&e!==void 0||(r.id=this.$id)),r},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,$({instance:this},o),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,$($({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var r=this._getOptionValue(this.$style.inlineStyles,e,$($({},this.$params),o)),i=this._getOptionValue(Ut.inlineStyles,e,$($({},this.$params),o));return[i,r]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return $t(o,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return n._getOptionValue(o,n.$name,$({},n.$params))||$t(o,$({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var e,n=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(o){var r=Q(o,1),i=r[0];return n==null?void 0:n.includes(i)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return $($({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Q(e,1),o=n[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(e,n){var o=Q(n,2),r=o[0],i=o[1],l=r.split(":"),s=We(l),a=s.slice(1);return a==null||a.reduce(function(d,c,p,v){return!d[c]&&(d[c]=p===v.length-1?i:{}),d[c]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Q(e,1),o=n[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(e,n){var o=Q(n,2),r=o[0],i=o[1];return e[r]=i,e},{})}}},Ye=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ze=T.extend({name:"baseicon",css:Ye});function it(t){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(t)}function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kt(Object(n),!0).forEach(function(o){Qe(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Qe(t,e,n){return(e=tn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tn(t){var e=en(t,"string");return it(e)=="symbol"?e:e+""}function en(t,e){if(it(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(it(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ut={name:"BaseIcon",extends:lt,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Ze,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=vt(this.label);return Jt(Jt({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},ee={name:"SpinnerIcon",extends:ut};function nn(t,e,n,o,r,i){return m(),b("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[u("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}ee.render=nn;var on=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
}
`,rn={root:function(e){var n=e.props,o=e.instance;return["p-badge p-component",{"p-badge-circle":xt(n.value)&&String(n.value).length===1,"p-badge-dot":vt(n.value)&&!o.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},an=T.extend({name:"badge",style:on,classes:rn}),sn={name:"BaseBadge",extends:lt,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:an,provide:function(){return{$pcBadge:this,$parentInstance:this}}},ne={name:"Badge",extends:sn,inheritAttrs:!1};function ln(t,e,n,o,r,i){return m(),b("span",y({class:t.cx("root")},t.ptmi("root")),[A(t.$slots,"default",{},function(){return[F(Pt(t.value),1)]})],16)}ne.render=ln;var un=({dt:t})=>`
.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,dn={root:"p-ink"},cn=T.extend({name:"ripple-directive",style:un,classes:dn}),pn=h.extend({style:cn});function at(t){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},at(t)}function mn(t){return gn(t)||vn(t)||bn(t)||fn()}function fn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(t,e){if(t){if(typeof t=="string")return Ct(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ct(t,e):void 0}}function vn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gn(t){if(Array.isArray(t))return Ct(t)}function Ct(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function Wt(t,e,n){return(e=hn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hn(t){var e=yn(t,"string");return at(e)=="symbol"?e:e+""}function yn(t,e){if(at(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(at(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var oe=pn.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var n=this.getInk(e);n||(n=ce("span",Wt(Wt({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),e.appendChild(n),this.$el=n)},remove:function(e){var n=this.getInk(e);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,o=e.currentTarget,r=this.getInk(o);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&U(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!jt(r)&&!At(r)){var i=Math.max(pe(o),me(o));r.style.height=i+"px",r.style.width=i+"px"}var l=fe(o),s=e.pageX-l.left+document.body.scrollTop-At(r)/2,a=e.pageY-l.top+document.body.scrollLeft-jt(r)/2;r.style.top=a+"px",r.style.left=s+"px",!this.isUnstyled()&&bt(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!n.isUnstyled()&&U(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&U(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?mn(e.children).find(function(n){return Xt(n,"data-pc-name")==="ripple"}):void 0}}}),$n=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding: ${t("button.padding.y")} ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding: ${t("button.sm.padding.y")} ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding: ${t("button.lg.padding.y")} ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}
`;function st(t){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},st(t)}function B(t,e,n){return(e=_n(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _n(t){var e=xn(t,"string");return st(e)=="symbol"?e:e+""}function xn(t,e){if(st(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(st(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Sn={root:function(e){var n=e.instance,o=e.props;return["p-button p-component",B(B(B(B(B(B(B(B(B({"p-button-icon-only":n.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link||o.variant==="link"},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text||o.variant==="text"),"p-button-outlined",o.outlined||o.variant==="outlined"),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var n=e.props;return["p-button-icon",B({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},wn=T.extend({name:"button",style:$n,classes:Sn}),kn={name:"BaseButton",extends:lt,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:wn,provide:function(){return{$pcButton:this,$parentInstance:this}}},Tt={name:"Button",extends:kn,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return y(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return vt(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:ee,Badge:ne},directives:{ripple:oe}};function Cn(t,e,n,o,r,i){var l=St("SpinnerIcon"),s=St("Badge"),a=be("ripple");return t.asChild?A(t.$slots,"default",{key:1,class:Lt(t.cx("root")),a11yAttrs:i.a11yAttrs}):k((m(),J(wt(t.as),y({key:0,class:t.cx("root")},i.attrs),{default:X(function(){return[A(t.$slots,"default",{},function(){return[t.loading?A(t.$slots,"loadingicon",y({key:0,class:[t.cx("loadingIcon"),t.cx("icon")]},t.ptm("loadingIcon")),function(){return[t.loadingIcon?(m(),b("span",y({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(m(),J(l,y({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):A(t.$slots,"icon",y({key:1,class:[t.cx("icon")]},t.ptm("icon")),function(){return[t.icon?(m(),b("span",y({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):V("",!0)]}),!i.hasIcon||t.label?(m(),b("span",y({key:2,class:t.cx("label")},t.ptm("label")),Pt(t.label||" "),17)):V("",!0),t.badge?(m(),J(s,{key:3,value:t.badge,class:Lt(t.badgeClass),severity:t.badgeSeverity,unstyled:t.unstyled,pt:t.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):V("",!0)]})]}),_:3},16,["class"])),[[a]])}Tt.render=Cn;const K=Yt({preset:"Aura",primary:"emerald",surface:null,darkTheme:!0,menuMode:"static"}),E=Yt({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1,activeMenuItem:null});function In(){const t=a=>{E.activeMenuItem=a.value||a},e=()=>{if(!document.startViewTransition){n();return}document.startViewTransition(()=>n(event))},n=()=>{K.darkTheme=!K.darkTheme,document.documentElement.classList.toggle("app-dark")},o=()=>{K.menuMode==="overlay"&&(E.overlayMenuActive=!E.overlayMenuActive),window.innerWidth>991?E.staticMenuDesktopInactive=!E.staticMenuDesktopInactive:E.staticMenuMobileActive=!E.staticMenuMobileActive},r=ct(()=>E.overlayMenuActive||E.staticMenuMobileActive),i=ct(()=>K.darkTheme),l=ct(()=>K.primary),s=ct(()=>K.surface);return{layoutConfig:K,layoutState:E,toggleMenu:o,isSidebarActive:r,isDarkTheme:i,getPrimary:l,getSurface:s,setActiveMenuItem:t,toggleDarkMode:e}}const Pn={class:"fixed flex gap-4 top-5 right-8 z-50"},Tn={__name:"FloatingConfigurator",setup(t){const{toggleDarkMode:e,isDarkTheme:n}=In();return(o,r)=>{const i=Tt,l=R;return k((m(),b("div",Pn,[C(i,{type:"button",onClick:et(e),rounded:"",icon:et(n)?"pi pi-moon":"pi pi-sun",severity:"secondary"},null,8,["onClick","icon"])])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000"}]])}}},On={},jn={class:"lg:px-20 px-10 lg:flex w-full min-h-dvh lg:items-center lg:justify-around gap-5"},An={class:"items-center lg:w-1/3 justify-center lg:pr-10"},Ln={class:"items-center lg:w-1/2"},Vn={class:"text-4xl font-bold py-10"},Bn={class:"font-light text-lg text-pretty mt-5 text-justify"},En={class:"font-light text-lg text-pretty mt-5 text-justify"};function Dn(t,e){const n=R;return m(),b("div",jn,[k((m(),b("div",An,e[0]||(e[0]=[u("span",{class:"text-7xl font-bold"},"about me",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),u("div",Ln,[k((m(),b("p",Vn,e[1]||(e[1]=[F("Desenvolvedor Full-Stack & Analista de Tecnologia .")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),k((m(),b("p",Bn,e[2]||(e[2]=[F(" Sou João Pedro Silva Santos, desenvolvedor experiente com formação em Análise e Desenvolvimento de Sistemas e mais de dois anos de experiência prática no mercado de tecnologia. Tenho experiência no desenvolvimento de aplicações web e mobile, trabalhando com tecnologias como Kotlin, Java, Swift, Objective-C, e gerenciando aplicativos nas principais stores digitais. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),k((m(),b("p",En,e[3]||(e[3]=[F(" Minha expertise abrange desenvolvimento web e mobile, com sólidos conhecimentos em JavaScript, Node.js, React, Vue.js, Python e Flutter. Tenho experiência tanto no frontend quanto no backend, desenvolvendo APIs REST e soluções completas que conectam diferentes plataformas. Além das habilidades técnicas, possuo facilidade com idiomas (português nativo, inglês intermediário e espanhol fluente) e experiência em liderança de equipes, sempre buscando desafios que me permitam aplicar meu conhecimento em programação e desenvolvimento de aplicações de alta performance.s ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]])])])}const Nn=W(On,[["render",Dn]]);var Mn=({dt:t})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${t("divider.horizontal.margin")};
    padding: ${t("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${t("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${t("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${t("divider.vertical.margin")};
    padding: ${t("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${t("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${t("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${t("divider.content.background")};
    color: ${t("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,zn={root:function(e){var n=e.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},Un={root:function(e){var n=e.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},Fn=T.extend({name:"divider",style:Mn,classes:Un,inlineStyles:zn}),Rn={name:"BaseDivider",extends:lt,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Fn,provide:function(){return{$pcDivider:this,$parentInstance:this}}},gt={name:"Divider",extends:Rn,inheritAttrs:!1},Kn=["aria-orientation"];function Jn(t,e,n,o,r,i){return m(),b("div",y({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(m(),b("div",y({key:0,class:t.cx("content")},t.ptm("content")),[A(t.$slots,"default")],16)):V("",!0)],16,Kn)}gt.render=Jn;var re={name:"ChevronDownIcon",extends:ut};function Wn(t,e,n,o,r,i){return m(),b("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[u("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}re.render=Wn;var ie={name:"ChevronLeftIcon",extends:ut};function Hn(t,e,n,o,r,i){return m(),b("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[u("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}ie.render=Hn;var ae={name:"ChevronRightIcon",extends:ut};function qn(t,e,n,o,r,i){return m(),b("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[u("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}ae.render=qn;var se={name:"ChevronUpIcon",extends:ut};function Gn(t,e,n,o,r,i){return m(),b("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[u("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}se.render=Gn;var Xn=({dt:t})=>`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
    gap: ${t("carousel.content.gap")};
}

.p-carousel-content:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-item-list:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
    flex-shrink: 0;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${t("carousel.indicator.list.padding")};
    gap: ${t("carousel.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("carousel.indicator.background")};
    width: ${t("carousel.indicator.width")};
    height: ${t("carousel.indicator.height")};
    border: 0 none;
    transition: background ${t("carousel.transition.duration")}, color ${t("carousel.transition.duration")}, outline-color ${t("carousel.transition.duration")}, box-shadow ${t("carousel.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("carousel.indicator.border.radius")};
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: ${t("carousel.indicator.focus.ring.shadow")};
    outline: ${t("carousel.indicator.focus.ring.width")} ${t("carousel.indicator.focus.ring.style")} ${t("carousel.indicator.focus.ring.color")};
    outline-offset: ${t("carousel.indicator.focus.ring.offset")};
}

.p-carousel-indicator-button:hover {
    background: ${t("carousel.indicator.hover.background")};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${t("carousel.indicator.active.background")};
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`,Yn={root:function(e){var n=e.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(e){var n=e.instance;return["p-carousel-prev-button",{"p-disabled":n.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(e){var n=e.index,o=e.value,r=e.totalShiftedItems,i=e.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":r*-1===o.length+i,"p-carousel-item-start":n===0,"p-carousel-item-end":o.slice(-1*i).length-1===n}]},item:function(e){var n=e.instance,o=e.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=o&&n.lastIndex()>=o,"p-carousel-item-start":n.firstIndex()===o,"p-carousel-item-end":n.lastIndex()===o}]},pcNextButton:function(e){var n=e.instance;return["p-carousel-next-button",{"p-disabled":n.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(e){var n=e.instance,o=e.index;return["p-carousel-indicator",{"p-carousel-indicator-active":n.d_page===o}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},Zn=T.extend({name:"carousel",style:Xn,classes:Yn}),Qn={name:"BaseCarousel",extends:lt,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Zn,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function H(t){return oo(t)||no(t)||eo(t)||to()}function to(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eo(t,e){if(t){if(typeof t=="string")return It(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?It(t,e):void 0}}function no(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oo(t){if(Array.isArray(t))return It(t)}function It(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var ht={name:"Carousel",extends:Qn,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(e){e>this.d_page?this.navForward({},e):e<this.d_page&&this.navBackward({},e),this.d_page=e},circular:function(e){this.d_circular=e},numVisible:function(e,n){this.d_numVisible=e,this.d_oldNumVisible=n},numScroll:function(e,n){this.d_oldNumScroll=n,this.d_numScroll=e},value:function(e){this.d_oldValue=e}},mounted:function(){var e=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,e=!0)}!e&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var e=this.isCircular(),n=!1,o=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,n=!0),o=r*this.d_numScroll*-1,e&&(o-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(o+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)")}e&&(this.d_page===0?o=-1*this.d_numVisible:o===0&&(o=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(e,n){return this.ptm(e,{context:{highlighted:n===this.d_page}})},getItemPTOptions:function(e,n){return this.ptm(e,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})},step:function(e,n){var o=this.totalShiftedItems,r=this.isCircular();if(n!=null)o=this.d_numScroll*n*-1,r&&(o-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{o+=this.d_numScroll*e,this.isRemainingItemsAdded&&(o+=this.remainingItems-this.d_numScroll*e,this.isRemainingItemsAdded=!1);var i=r?o+this.d_numVisible:o;n=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&e===-1?(o=-1*(this.value.length+this.d_numVisible),n=0):r&&this.d_page===0&&e===1?(o=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this.d_numScroll*e,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&U(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var e=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},o=0;o<this.responsiveOptions.length;o++){var r=this.responsiveOptions[o];parseInt(r.breakpoint,10)>=e&&(n=r)}if(this.d_numScroll!==n.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(e,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},navForward:function(e,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},onIndicatorClick:function(e,n){var o=this.d_page;n>o?this.navForward(e,n):n<o&&this.navBackward(e,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&bt(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(e){var n=e.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(e){var n=e.changedTouches[0],o=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(o)>this.swipeThreshold&&e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var n=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,n.pageY-this.startPos.y):this.changePageOnTouch(e,n.pageX-this.startPos.x)},changePageOnTouch:function(e,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(e):this.navBackward(e))},onIndicatorKeydown:function(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=H(Z(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=H(Z(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=H(Z(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=e.findIndex(function(i){return Xt(i,"data-p-active")===!0}),o=_t(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=e.findIndex(function(i){return i===o.parentElement});e[r].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=H(Z(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=_t(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(function(o){return o===n.parentElement})},changedFocusedIndicator:function(e,n){var o=H(Z(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));o[e].children[0].tabIndex="-1",o[n].children[0].tabIndex="0",o[n].children[0].focus()},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(n){e.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var e=this;this.interval=setInterval(function(){e.d_page===e.totalIndicators-1?e.step(-1,0):e.step(-1,e.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var e;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",ve(this.carouselStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var o=H(this.responsiveOptions),r=ge();o.sort(function(s,a){var d=s.breakpoint,c=a.breakpoint;return he(d,c,-1,r)});for(var i=0;i<o.length;i++){var l=o[i];n+=`
                        @media screen and (max-width: `.concat(l.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/l.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)===null||e===void 0||(e=e.locale)===null||e===void 0?void 0:e.emptyMessage)||""}},components:{Button:Tt,ChevronRightIcon:ae,ChevronDownIcon:re,ChevronLeftIcon:ie,ChevronUpIcon:se},directives:{ripple:oe}},ro=["aria-live"],io=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],ao=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],so=["data-p-active"],lo=["tabindex","aria-label","aria-current","onClick"];function uo(t,e,n,o,r,i){var l=St("Button");return m(),b("div",y({class:t.cx("root"),role:"region"},t.ptmi("root")),[t.$slots.header?(m(),b("div",y({key:0,class:t.cx("header")},t.ptm("header")),[A(t.$slots,"header")],16)):V("",!0),i.empty?A(t.$slots,"empty",{key:2},function(){return[F(Pt(i.emptyMessageText),1)]}):(m(),b("div",y({key:1,class:[t.cx("contentContainer"),t.containerClass]},t.ptm("contentContainer")),[u("div",y({class:[t.cx("content"),t.contentClass],"aria-live":r.allowAutoplay?"polite":"off"},t.ptm("content")),[t.showNavigators?(m(),J(l,y({key:0,class:t.cx("pcPrevButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,unstyled:t.unstyled,onClick:i.navBackward},t.prevButtonProps,{pt:t.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:X(function(s){return[A(t.$slots,"previcon",{},function(){return[(m(),J(wt(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),y({class:s.icon},t.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):V("",!0),u("div",y({class:t.cx("viewport"),style:[{height:i.isVertical()?t.verticalViewPortHeight:"auto"}],onTouchend:e[1]||(e[1]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:e[2]||(e[2]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:e[3]||(e[3]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},t.ptm("viewport")),[u("div",y({ref:"itemsContainer",class:t.cx("itemList"),onTransitionend:e[0]||(e[0]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},t.ptm("itemList")),[i.isCircular()?(m(!0),b(pt,{key:0},mt(t.value.slice(-1*r.d_numVisible),function(s,a){return m(),b("div",y({key:a+"_scloned",class:t.cx("itemClone",{index:a,value:t.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},t.ptm("itemClone"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===t.value.length+r.d_numVisible,"data-p-carousel-item-start":a===0,"data-p-carousel-item-end":t.value.slice(-1*r.d_numVisible).length-1===a}),[A(t.$slots,"item",{data:s,index:a})],16,io)}),128)):V("",!0),(m(!0),b(pt,null,mt(t.value,function(s,a){return m(),b("div",y({key:a,class:t.cx("item",{index:a}),role:"group","aria-hidden":i.firstIndex()>a||i.lastIndex()<a?!0:void 0,"aria-label":i.ariaSlideNumber(a),"aria-roledescription":i.ariaSlideLabel,ref_for:!0},i.getItemPTOptions("item",a),{"data-p-carousel-item-active":i.firstIndex()<=a&&i.lastIndex()>=a,"data-p-carousel-item-start":i.firstIndex()===a,"data-p-carousel-item-end":i.lastIndex()===a}),[A(t.$slots,"item",{data:s,index:a})],16,ao)}),128)),i.isCircular()?(m(!0),b(pt,{key:1},mt(t.value.slice(0,r.d_numVisible),function(s,a){return m(),b("div",y({key:a+"_fcloned",class:t.cx("itemClone",{index:a,value:t.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},t.ptm("itemClone")),[A(t.$slots,"item",{data:s,index:a})],16)}),128)):V("",!0)],16)],16),t.showNavigators?(m(),J(l,y({key:1,class:t.cx("pcNextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,unstyled:t.unstyled,onClick:i.navForward},t.nextButtonProps,{pt:t.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:X(function(s){return[A(t.$slots,"nexticon",{},function(){return[(m(),J(wt(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),y({class:s.class},t.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):V("",!0)],16,ro),i.totalIndicators>=0&&t.showIndicators?(m(),b("ul",y({key:0,ref:"indicatorContent",class:[t.cx("indicatorList"),t.indicatorsContentClass],onKeydown:e[4]||(e[4]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},t.ptm("indicatorList")),[(m(!0),b(pt,null,mt(i.totalIndicators,function(s,a){return m(),b("li",y({key:"p-carousel-indicator-"+a.toString(),class:t.cx("indicator",{index:a}),ref_for:!0},i.getIndicatorPTOptions("indicator",a),{"data-p-active":r.d_page===a}),[u("button",y({class:t.cx("indicatorButton"),type:"button",tabindex:r.d_page===a?"0":"-1","aria-label":i.ariaPageLabel(a+1),"aria-current":r.d_page===a?"page":void 0,onClick:function(c){return i.onIndicatorClick(c,a)},ref_for:!0},i.getIndicatorPTOptions("indicatorButton",a)),null,16,lo)],16,so)}),128))],16)):V("",!0)],16)),t.$slots.footer?(m(),b("div",y({key:3,class:t.cx("footer")},t.ptm("footer")),[A(t.$slots,"footer")],16)):V("",!0)],16)}ht.render=uo;const co="/JoaoPedro/assets/call1-CKK_a0OL.png",po="/JoaoPedro/assets/call2-BQqDTUsv.png",mo="/JoaoPedro/assets/call2-BQqDTUsv.png",fo="/JoaoPedro/assets/keypad-Po8_Lotb.png",bo="/JoaoPedro/assets/options-C6AhMAdp.png",vo="/JoaoPedro/assets/reg-BsytU14Y.png",go={class:"lg:px-20 px-10 gap-20 min-h-dvh"},ho={class:"items-center lg:w-1/2 mb-40 justify-center"},yo={class:"lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10"},$o={class:"imga w-full lg:w-1/2"},_o={class:"rounded m-2 p-4"},xo={class:"mb-4"},So={class:"relative mx-auto"},wo=["src"],ko={class:"items-center lg:w-1/2"},Co={__name:"FirstProject",setup(t){const e=Y([{breakpoint:"1024px",numVisible:3,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}]),n=Y([{image:vo},{image:bo},{image:fo},{image:co},{image:po},{image:mo}]);return(o,r)=>{const i=gt,l=R;return m(),b("div",go,[k((m(),b("div",ho,r[0]||(r[0]=[u("span",{class:"text-4xl font-bold uppercase text-center"},"Projects",-1),u("p",{class:"font-light text-lg text-pretty mt-5"}," Desenvolvedor experiente com habilidades em desenvolvimento web e mobile. Buscando oportunidades desafiadoras para aplicar minha expertise em programação, liderança de equipes e desenvolvimento de aplicações de alta performance. ",-1)]))),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),u("div",yo,[k((m(),b("div",$o,[r[1]||(r[1]=u("p",{class:"font-light text-xl text-pretty text-center lg:text-left"},"Fluxphone",-1)),C(et(ht),{value:n.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:e.value},{item:X(s=>[u("div",_o,[u("div",xo,[u("div",So,[u("img",{src:s.data.image,alt:"Project Image",class:"w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm"},null,8,wo)])])])]),_:1},8,["value","responsiveOptions"])])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",ko,[r[2]||(r[2]=G('<p class="font-semibold text-4xl text-pretty mt-5" data-v-8031b5ea>Softphone Withe-label</p><p class="font-light text-lg lg:text-pretty mt-5 text-justify" data-v-8031b5ea> Fui responsável pelo desenvolvimento e manutenção de um softphone VoIP whitelabel, uma plataforma que serve a mais de 70 clientes distintos. Para construir um sistema de alta performance, implementei tecnologias modernas como Firebase para uma gestão de dados eficiente e notificações push para aprimorar a experiência de comunicação. Essa arquitetura permitiu que as personalizações de cada cliente fossem feitas de maneira dinâmica, enquanto as atualizações de segurança e novas funcionalidades eram implementadas em todos os aplicativos de forma simultânea. Entreguei um produto robusto e confiável, demonstrando minha expertise na criação de soluções escaláveis e tecnologicamente avançadas. </p><div class="lg:flex gap-5" data-v-8031b5ea><p class="font-light text-lg text-pretty" data-v-8031b5ea>Avaliable on:</p><p class="font-light text-lg text-pretty" data-v-8031b5ea><a href="https://apps.apple.com/us/app/fluxphone/id6450217761" target="_blank" class="decoration-[##D3E97A]" data-v-8031b5ea>App Store</a></p><p class="font-light text-lg text-pretty" data-v-8031b5ea>&amp;</p><p class="font-light text-lg text-pretty" data-v-8031b5ea><a href="https://play.google.com/store/apps/details?id=br.net.flux.fluxphone_beta" target="_blank" data-v-8031b5ea>Play Store</a></p></div><p class="font-semibold text-lg text-pretty mt-5 uppercase" data-v-8031b5ea>Project Info</p>',4)),C(i),r[3]||(r[3]=u("div",{class:"lg:flex justify-between"},[u("p",{class:"font-light text-lg text-pretty mt-5"},"Year"),u("p",{class:"font-light text-lg text-pretty mt-5"},"2023 - 2025")],-1)),C(i),r[4]||(r[4]=u("div",{class:"lg:flex justify-between"},[u("p",{class:"font-light text-lg text-pretty mt-5"},"Role"),u("p",{class:"font-light text-lg text-pretty mt-5"},"Mobile Developer Full-Stack")],-1)),C(i),r[5]||(r[5]=G('<div class="lg:flex justify-between" data-v-8031b5ea><p class="font-light text-lg text-pretty mt-5" data-v-8031b5ea>Langagues/Frameworks</p><p class="font-light text-lg text-pretty mt-5 flex items-center gap-5" data-v-8031b5ea>Obj-C <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-8031b5ea></i> Swift <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-8031b5ea></i> SwiftUI</p></div>',1)),C(i)])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},Io=W(Co,[["__scopeId","data-v-8031b5ea"]]),Po="/JoaoPedro/assets/first-DDJb10TG.jpg",To={},Oo={class:"flex flex-col mt-10 lg:flex-row w-full min-h-dvh lg:items-center lg:justify-around gap-5"},jo={class:"w-full text-center lg:w-1/2 lg:text-left"},Ao={class:"flex flex-wrap justify-center lg:justify-start gap-5 mt-6 px-5 lg:px-0"},Lo={class:"lg:flex lg:items-center gap-2 contact p-3"},Vo={class:"lg:flex lg:items-center gap-2 p-3 rounded-xl"},Bo={class:"lg:flex lg:items-center gap-2 p-3"};function Eo(t,e){const n=R;return m(),b("div",Oo,[u("div",jo,[e[3]||(e[3]=u("span",{class:"text-7xl font-bold"},[F("hi, i am "),u("br"),F("João Pedro.")],-1)),e[4]||(e[4]=u("p",{class:"font-light text-lg text-pretty mt-5 px-5 lg:px-0"}," Desenvolvedor experiente com habilidades em desenvolvimento web e mobile. Buscando oportunidades desafiadoras para aplicar minha expertise em programação, liderança de equipes e desenvolvimento de aplicações de alta performance. ",-1)),u("div",Ao,[k((m(),b("div",Lo,e[0]||(e[0]=[u("i",{class:"pi pi-circle-fill"},null,-1),u("p",null,"Contact Me",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",Vo,e[1]||(e[1]=[u("a",{href:"https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/",target:"_blank"},[u("i",{class:"pi pi-linkedin",style:{"font-size":"2.2rem",color:"#0966c2"}})],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",Bo,e[2]||(e[2]=[u("i",{class:"pi pi-github",style:{"font-size":"2.2rem"}},null,-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])]),e[5]||(e[5]=u("div",{class:"items-center p-5 lg:p-0"},[u("img",{src:Po,alt:"Image",width:"400",class:"rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"})],-1))])}const Do=W(To,[["render",Eo]]),No="/JoaoPedro/assets/login-XhC1rXPn.png",Mo="/JoaoPedro/assets/menu-CpagNUP9.png",zo="/JoaoPedro/assets/menu2-BqXJwf9Q.png",Uo="/JoaoPedro/assets/serve-CczJ8fW_.png",Fo={class:"lg:px-20 px-10 gap-20 min-h-dvh"},Ro={class:"lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10"},Ko={class:"imga w-full lg:w-1/2"},Jo={class:"rounded m-2 p-4"},Wo={class:"mb-4"},Ho={class:"relative mx-auto"},qo=["src"],Go={class:"items-center lg:w-1/2"},Xo={__name:"SecondProject",setup(t){const e=Y([{breakpoint:"1024px",numVisible:3,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}]),n=Y([{image:No},{image:Mo},{image:zo},{image:Uo}]);return(o,r)=>{const i=gt,l=R;return m(),b("div",Fo,[u("div",Ro,[k((m(),b("div",Ko,[r[0]||(r[0]=u("p",{class:"font-light text-xl text-pretty text-center lg:text-left"},"GuestLink",-1)),C(et(ht),{value:n.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:e.value},{item:X(s=>[u("div",Jo,[u("div",Wo,[u("div",Ho,[u("img",{src:s.data.image,alt:"Project Image",class:"w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm"},null,8,qo)])])])]),_:1},8,["value","responsiveOptions"])])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",Go,[r[1]||(r[1]=u("p",{class:"font-semibold text-4xl text-pretty mt-5"},"GuestLink",-1)),r[2]||(r[2]=u("p",{class:"font-light text-lg text-pretty mt-5 text-justify"}," Participei do desenvolvimento do Guestlink, um softphone de alta performance projetado para transformar a comunicação em hotéis. Utilizando uma base de código robusta em Swift, SwiftUI e Objective-C, criei um aplicativo que vai além de um simples ramal de telefone. O Guestlink permite que os hóspedes realizem e recebam chamadas diretamente do seu smartphone, enquanto oferece um sistema de chat integrado para comunicação direta com a equipe do hotel. Além disso, o aplicativo conta com um módulo de pedidos que agiliza o serviço de quarto e outras solicitações, centralizando toda a interação do cliente em uma única e intuitiva interface. ",-1)),r[3]||(r[3]=u("p",{class:"font-semibold text-lg text-pretty mt-5 uppercase"},"Project Info",-1)),C(i),r[4]||(r[4]=u("div",{class:"lg:flex justify-between"},[u("p",{class:"font-light text-lg text-pretty mt-5"},"Year"),u("p",{class:"font-light text-lg text-pretty mt-5"},"2024 - 2025")],-1)),C(i),r[5]||(r[5]=u("div",{class:"lg:flex justify-between"},[u("p",{class:"font-light text-lg text-pretty mt-5"},"Role"),u("p",{class:"font-light text-lg text-pretty mt-5"},"Mobile Developer Full-Stack")],-1)),C(i),r[6]||(r[6]=G('<div class="lg:flex justify-between" data-v-7679ee41><p class="font-light text-lg text-pretty mt-5" data-v-7679ee41>Langagues/Frameworks</p><p class="font-light text-lg text-pretty mt-5 flex items-center gap-5" data-v-7679ee41>Obj-C <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-7679ee41></i> Swift <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-7679ee41></i> SwiftUI</p></div>',1)),C(i),r[7]||(r[7]=G('<div class="lg:flex gap-10" data-v-7679ee41><div class="flex items-center gap-2 p-3" data-v-7679ee41><p class="font-regular text-lg text-pretty decoration-[#D3E97A]" data-v-7679ee41>App Store</p></div><div class="lg:flex lg:items-center gap-2 p-3" data-v-7679ee41><p class="font-regular text-lg text-pretty decoration-[#D3E97A]" data-v-7679ee41>Play Store</p></div></div>',1))])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},Yo=W(Xo,[["__scopeId","data-v-7679ee41"]]),Zo="/JoaoPedro/assets/alert-BYrpxtMM.png",Qo="/JoaoPedro/assets/chat-CJkSWo3r.png",tr="/JoaoPedro/assets/home-jXiByXDx.png",er="/JoaoPedro/assets/order-DITOG9vO.png",nr="/JoaoPedro/assets/ramal-DjPARijG.png",or={class:"lg:px-20 px-10"},rr={class:"lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10"},ir={class:"imga w-full lg:w-1/2"},ar={class:"rounded m-2 p-4"},sr={class:"mb-4"},lr={class:"relative mx-auto"},ur=["src"],dr={class:"items-center lg:w-1/2"},cr={__name:"ThirdPtoject",setup(t){const e=Y([{breakpoint:"1024px",numVisible:3,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}]),n=Y([{image:tr},{image:Qo},{image:Zo},{image:er},{image:nr}]);return(o,r)=>{const i=gt,l=R;return m(),b("div",or,[u("div",rr,[k((m(),b("div",ir,[r[0]||(r[0]=u("p",{class:"font-light text-xl text-pretty text-center lg:text-left"},"GuestLink Management",-1)),C(et(ht),{value:n.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:e.value},{item:X(s=>[u("div",ar,[u("div",sr,[u("div",lr,[u("img",{src:s.data.image,alt:"Project Image",class:"w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm"},null,8,ur)])])])]),_:1},8,["value","responsiveOptions"])])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),k((m(),b("div",dr,[r[1]||(r[1]=u("p",{class:"font-semibold text-4xl text-pretty mt-5"},"GuestLink Management",-1)),r[2]||(r[2]=u("p",{class:"font-light text-lg text-pretty mt-5 text-justify"}," Complementando o aplicativo iOS do Guestlink, desenvolvi um portal de gerenciamento web para a equipe do hotel. Essa plataforma é a central de operações que otimiza a comunicação e os serviços. Através dela, os funcionários podem monitorar e responder ao chat dos hóspedes, gerenciar pedidos de serviço de forma organizada e configurar os ramais de forma simples e eficaz. O portal web, portanto, não apenas complementa o aplicativo, mas transforma a gestão diária, fornecendo à equipe as ferramentas necessárias para oferecer um serviço excepcional. ",-1)),r[3]||(r[3]=u("p",{class:"font-semibold text-lg text-pretty mt-5 uppercase"},"Project Info",-1)),C(i),r[4]||(r[4]=u("div",{class:"lg:flex justify-between"},[u("p",{class:"font-light text-lg text-pretty mt-5"},"Year"),u("p",{class:"font-light text-lg text-pretty mt-5"},"2024 - 2025")],-1)),C(i),r[5]||(r[5]=u("div",{class:"lg:flex justify-between"},[u("p",{class:"font-light text-lg text-pretty mt-5"},"Role"),u("p",{class:"font-light text-lg text-pretty mt-5"},"Web Developer Full-Stack")],-1)),C(i),r[6]||(r[6]=G('<div class="lg:flex justify-between" data-v-8f1fad78><p class="font-light text-lg text-pretty mt-5" data-v-8f1fad78>Langagues/Frameworks</p><p class="font-light text-lg text-pretty mt-5 flex items-center gap-5" data-v-8f1fad78>JavaScript <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-8f1fad78></i> VUE <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-8f1fad78></i> Tailwind CSS</p></div>',1)),C(i)])),[[l,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},pr=W(cr,[["__scopeId","data-v-8f1fad78"]]),mr={class:"bg-surface-0 dark:bg-surface-900"},fr={id:"home",class:"landing-wrapper overflow-hidden relative"},br={class:"navbar py-6 px-6 mx-0 hidden lg:flex items-center justify-between lg:fixed rounded-lg w-full fixed top-0 z-50 sm:hidden"},vr={class:"items-center justify-between flex w-full z-20 rounded-border"},gr={class:"pr-20"},hr={class:"list-none p-0 m-0 flex justify-around select-none flex-row cursor-pointer gap-14 w-full"},yr={id:"first"},$r={id:"features",class:"mt-40"},_r={id:"s",class:"mt-40"},xr={id:"t",class:"mt-40"},Sr={id:"aboutme",class:"mt-40"},wr={id:"connect",class:"mt-40"},kr=ye({__name:"Landing",setup(t){function e(n){document.body.click();const o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}return(n,o)=>{const r=Ke,i=R;return m(),b("div",mr,[u("div",fr,[u("div",br,[u("div",vr,[u("div",null,[k((m(),b("a",{onClick:o[0]||(o[0]=l=>e("first")),class:"text-3xl text-muted-color pl-20"},o[4]||(o[4]=[F(" João Pedro")]))),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000"}]])]),u("div",gr,[u("ul",hr,[k((m(),b("li",null,[u("a",{onClick:o[1]||(o[1]=l=>e("features")),class:"px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl"},o[5]||(o[5]=[u("span",null,"Features Projects",-1)]))])),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"}]]),k((m(),b("li",null,[u("a",{onClick:o[2]||(o[2]=l=>e("aboutme")),class:"px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl"},o[6]||(o[6]=[u("span",null,"About Me",-1)]))])),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000"}]]),k((m(),b("li",null,[u("a",{onClick:o[3]||(o[3]=l=>e("connect")),class:"px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl"},o[7]||(o[7]=[u("span",null,"Contact Me",-1)]))])),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000"}]])])])]),C(Tn)]),u("div",yr,[C(Do)]),u("div",$r,[C(Io)]),u("div",_r,[C(Yo)]),u("div",xr,[C(pr)]),u("div",Sr,[C(Nn)]),u("div",wr,[C(r)])])])}}}),Ir=W(kr,[["__scopeId","data-v-cdf8d7d1"]]);export{Ir as default};
