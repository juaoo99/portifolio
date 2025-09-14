import{i as je,r as xe,g as He,t as F,a as X,B as T,c as L,s as U,b as lt,d as Ge,m as $,e as Je,f as he,P as pe,h as K,j as ge,_ as z,o as u,k as m,w as g,l as Z,n as s,u as dt,p as _e,q as ut,v as Se,x as A,y as V,z as Y,A as ct,C as Oe,D as Ae,E as pt,F as mt,G as ft,H as Xe,I as we,J as vt,K as H,L as G,M as E,N as Le,O as ke,Q as Ye,R as me,S as C,T as Q,U as ee,V as bt,W as gt,X as ht,Y as fe,Z as ve,$ as q,a0 as yt}from"./index-0b3efPHN.js";var be={};function $t(e="pui_id_"){return Object.hasOwn(be,e)||(be[e]=0),be[e]++,`${e}${be[e]}`}var R={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(t){return this._loadedStyleNames.has(t)},setLoadedStyleName:function(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName:function(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(e)}function Ve(e,t){return wt(e)||St(e,t)||_t(e,t)||xt()}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(e,t){if(e){if(typeof e=="string")return Ee(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(e,t):void 0}}function Ee(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function St(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,i,r,d,l=[],a=!0,c=!1;try{if(r=(n=n.call(e)).next,t!==0)for(;!(a=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(p){c=!0,i=p}finally{try{if(!a&&n.return!=null&&(d=n.return(),Object(d)!==d))return}finally{if(c)throw i}}return l}}function wt(e){if(Array.isArray(e))return e}function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?De(Object(n),!0).forEach(function(o){Ce(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ce(e,t,n){return(t=kt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kt(e){var t=Ct(e,"string");return oe(t)=="symbol"?t:t+""}function Ct(e,t){if(oe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(oe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var y={_getMeta:function(){return[je(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],xe(je(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(t,n){var o,i,r;return(o=(t==null||(i=t.instance)===null||i===void 0?void 0:i.$primevue)||(n==null||(r=n.ctx)===null||r===void 0||(r=r.appContext)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.globalProperties)===null||r===void 0?void 0:r.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:He,_getPTValue:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var O=y._getOptionValue.apply(y,arguments);return X(O)||Je(O)?{class:O}:O},c=((t=o.binding)===null||t===void 0||(t=t.value)===null||t===void 0?void 0:t.ptOptions)||((n=o.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},p=c.mergeSections,f=p===void 0?!0:p,b=c.mergeProps,h=b===void 0?!1:b,_=l?y._useDefaultPT(o,o.defaultPT(),a,r,d):void 0,I=y._usePT(o,y._getPT(i,o.$name),a,r,S(S({},d),{},{global:_||{}})),k=y._getPTDatasets(o,r);return f||!f&&I?h?y._mergeProps(o,h,_,I,k):S(S(S({},_),I),k):S(S({},I),k)},_getPTDatasets:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return S(S({},n==="root"&&Ce({},"".concat(o,"name"),F(t.$name))),{},Ce({},"".concat(o,"section"),F(n)))},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(d){var l,a=o?o(d):d,c=F(n);return(l=a==null?void 0:a[c])!==null&&l!==void 0?l:a};return t&&Object.hasOwn(t,"_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t)},_usePT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,d=function(k){return o(k,i,r)};if(n&&Object.hasOwn(n,"_usept")){var l,a=n._usept||((l=t.$primevueConfig)===null||l===void 0?void 0:l.ptOptions)||{},c=a.mergeSections,p=c===void 0?!0:c,f=a.mergeProps,b=f===void 0?!1:f,h=d(n.originalValue),_=d(n.value);return h===void 0&&_===void 0?void 0:X(_)?_:X(h)?h:p||!p&&_?b?y._mergeProps(t,b,h,_):S(S({},h),_):_}return d(n)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return y._usePT(t,n,o,i,r)},_loadStyles:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,r=y._getConfig(o,i),d={nonce:r==null||(t=r.csp)===null||t===void 0?void 0:t.nonce};y._loadCoreStyles(n,d),y._loadThemeStyles(n,d),y._loadScopedThemeStyles(n,d),y._removeThemeListeners(n),n.$loadStyles=function(){return y._loadThemeStyles(n,d)},y._themeChangeListener(n.$loadStyles)},_loadCoreStyles:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!R.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(n=o.$style)!==null&&n!==void 0&&n.name){var r;T.loadCSS(i),(r=o.$style)===null||r===void 0||r.loadCSS(i),R.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var t,n,o,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!(i!=null&&i.isUnstyled()||(i==null||(t=i.theme)===null||t===void 0?void 0:t.call(i))==="none")){if(!L.isStyleNameLoaded("common")){var d,l,a=((d=i.$style)===null||d===void 0||(l=d.getCommonTheme)===null||l===void 0?void 0:l.call(d))||{},c=a.primitive,p=a.semantic,f=a.global,b=a.style;T.load(c==null?void 0:c.css,S({name:"primitive-variables"},r)),T.load(p==null?void 0:p.css,S({name:"semantic-variables"},r)),T.load(f==null?void 0:f.css,S({name:"global-variables"},r)),T.loadStyle(S({name:"global-style"},r),b),L.setLoadedStyleName("common")}if(!L.isStyleNameLoaded((n=i.$style)===null||n===void 0?void 0:n.name)&&(o=i.$style)!==null&&o!==void 0&&o.name){var h,_,I,k,P=((h=i.$style)===null||h===void 0||(_=h.getDirectiveTheme)===null||_===void 0?void 0:_.call(h))||{},O=P.css,j=P.style;(I=i.$style)===null||I===void 0||I.load(O,S({name:"".concat(i.$style.name,"-variables")},r)),(k=i.$style)===null||k===void 0||k.loadStyle(S({name:"".concat(i.$style.name,"-style")},r),j),L.setLoadedStyleName(i.$style.name)}if(!L.isStyleNameLoaded("layer-order")){var v,w,N=(v=i.$style)===null||v===void 0||(w=v.getLayerOrderThemeCSS)===null||w===void 0?void 0:w.call(v);T.load(N,S({name:"layer-order",first:!0},r)),L.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=t.preset();if(o&&t.$attrSelector){var i,r,d,l=((i=t.$style)===null||i===void 0||(r=i.getPresetTheme)===null||r===void 0?void 0:r.call(i,o,"[".concat(t.$attrSelector,"]")))||{},a=l.css,c=(d=t.$style)===null||d===void 0?void 0:d.load(a,S({name:"".concat(t.$attrSelector,"-").concat(t.$style.name)},n));t.scopedStyleEl=c.el}},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};R.clearLoadedStyleNames(),U.on("theme:change",t)},_removeThemeListeners:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};U.off("theme:change",t.$loadStyles)},_hook:function(t,n,o,i,r,d){var l,a,c="on".concat(lt(n)),p=y._getConfig(i,r),f=o==null?void 0:o.$instance,b=y._usePT(f,y._getPT(i==null||(l=i.value)===null||l===void 0?void 0:l.pt,t),y._getOptionValue,"hooks.".concat(c)),h=y._useDefaultPT(f,p==null||(a=p.pt)===null||a===void 0||(a=a.directives)===null||a===void 0?void 0:a[t],y._getOptionValue,"hooks.".concat(c)),_={el:o,binding:i,vnode:r,prevVnode:d};b==null||b(f,_),h==null||h(f,_)},_mergeProps:function(){for(var t=arguments.length>1?arguments[1]:void 0,n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return Ge(t)?t.apply(void 0,o):$.apply(void 0,o)},_extend:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(l,a,c,p,f){var b,h,_,I;a._$instances=a._$instances||{};var k=y._getConfig(c,p),P=a._$instances[t]||{},O=he(P)?S(S({},n),n==null?void 0:n.methods):{};a._$instances[t]=S(S({},P),{},{$name:t,$host:a,$binding:c,$modifiers:c==null?void 0:c.modifiers,$value:c==null?void 0:c.value,$el:P.$el||a||void 0,$style:S({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},n==null?void 0:n.style),$primevueConfig:k,$attrSelector:(b=a.$pd)===null||b===void 0||(b=b[t])===null||b===void 0?void 0:b.attrSelector,defaultPT:function(){return y._getPT(k==null?void 0:k.pt,void 0,function(v){var w;return v==null||(w=v.directives)===null||w===void 0?void 0:w[t]})},isUnstyled:function(){var v,w;return((v=a._$instances[t])===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled)!==void 0?(w=a._$instances[t])===null||w===void 0||(w=w.$binding)===null||w===void 0||(w=w.value)===null||w===void 0?void 0:w.unstyled:k==null?void 0:k.unstyled},theme:function(){var v;return(v=a._$instances[t])===null||v===void 0||(v=v.$primevueConfig)===null||v===void 0?void 0:v.theme},preset:function(){var v;return(v=a._$instances[t])===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.dt},ptm:function(){var v,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return y._getPTValue(a._$instances[t],(v=a._$instances[t])===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,w,S({},N))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y._getPTValue(a._$instances[t],v,w,N,!1)},cx:function(){var v,w,N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",$e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=a._$instances[t])!==null&&v!==void 0&&v.isUnstyled()?void 0:y._getOptionValue((w=a._$instances[t])===null||w===void 0||(w=w.$style)===null||w===void 0?void 0:w.classes,N,S({},$e))},sx:function(){var v,w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,$e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return N?y._getOptionValue((v=a._$instances[t])===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.inlineStyles,w,S({},$e)):void 0}},O),a.$instance=a._$instances[t],(h=(_=a.$instance)[l])===null||h===void 0||h.call(_,a,c,p,f),a["$".concat(t)]=a.$instance,y._hook(t,l,a,c,p,f),a.$pd||(a.$pd={}),a.$pd[t]=S(S({},(I=a.$pd)===null||I===void 0?void 0:I[t]),{},{name:t,instance:a._$instances[t]})},i=function(l){var a,c,p,f=l._$instances[t],b=f==null?void 0:f.watch,h=function(k){var P,O=k.newValue,j=k.oldValue;return b==null||(P=b.config)===null||P===void 0?void 0:P.call(f,O,j)},_=function(k){var P,O=k.newValue,j=k.oldValue;return b==null||(P=b["config.ripple"])===null||P===void 0?void 0:P.call(f,O,j)};f.$watchersCallback={config:h,"config.ripple":_},b==null||(a=b.config)===null||a===void 0||a.call(f,f==null?void 0:f.$primevueConfig),pe.on("config:change",h),b==null||(c=b["config.ripple"])===null||c===void 0||c.call(f,f==null||(p=f.$primevueConfig)===null||p===void 0?void 0:p.ripple),pe.on("config:ripple:change",_)},r=function(l){var a=l._$instances[t].$watchersCallback;a&&(pe.off("config:change",a.config),pe.off("config:ripple:change",a["config.ripple"]))};return{created:function(l,a,c,p){l.$pd||(l.$pd={}),l.$pd[t]={name:t,attrSelector:$t("pd")},o("created",l,a,c,p)},beforeMount:function(l,a,c,p){var f;y._loadStyles((f=l.$pd[t])===null||f===void 0?void 0:f.instance,a,c),o("beforeMount",l,a,c,p),i(l)},mounted:function(l,a,c,p){var f;y._loadStyles((f=l.$pd[t])===null||f===void 0?void 0:f.instance,a,c),o("mounted",l,a,c,p)},beforeUpdate:function(l,a,c,p){o("beforeUpdate",l,a,c,p)},updated:function(l,a,c,p){var f;y._loadStyles((f=l.$pd[t])===null||f===void 0?void 0:f.instance,a,c),o("updated",l,a,c,p)},beforeUnmount:function(l,a,c,p){var f;r(l),y._removeThemeListeners((f=l.$pd[t])===null||f===void 0?void 0:f.instance),o("beforeUnmount",l,a,c,p)},unmounted:function(l,a,c,p){var f;(f=l.$pd[t])===null||f===void 0||(f=f.instance)===null||f===void 0||(f=f.scopedStyleEl)===null||f===void 0||(f=f.value)===null||f===void 0||f.remove(),o("unmounted",l,a,c,p)}}},extend:function(){var t=y._getMeta.apply(y,arguments),n=Ve(t,2),o=n[0],i=n[1];return S({extend:function(){var d=y._getMeta.apply(y,arguments),l=Ve(d,2),a=l[0],c=l[1];return y.extend(a,S(S(S({},i),i==null?void 0:i.methods),c))}},y._extend(o,i))}},It=T.extend({name:"animateonscroll-directive"}),Pt=y.extend({style:It});function ie(e){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(e)}function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(n),!0).forEach(function(o){Tt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Tt(e,t,n){return(t=jt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jt(e){var t=Ot(e,"string");return ie(t)=="symbol"?t:t+""}function Ot(e,t){if(ie(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(ie(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ne(e,t){return Et(e)||Vt(e,t)||Lt(e,t)||At()}function At(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(e,t){if(e){if(typeof e=="string")return ze(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ze(e,t):void 0}}function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Vt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,i,r,d,l=[],a=!0,c=!1;try{if(r=(n=n.call(e)).next,t!==0)for(;!(a=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(p){c=!0,i=p}finally{try{if(!a&&n.return!=null&&(d=n.return(),Object(d)!==d))return}finally{if(c)throw i}}return l}}function Et(e){if(Array.isArray(e))return e}var D=Pt.extend("animateonscroll",{created:function(){this.$value=this.$value||{},this.$el.style.opacity=this.$value.enterClass?"0":""},mounted:function(){this.$el.setAttribute("data-pd-animateonscroll",!0),this.bindIntersectionObserver()},unmounted:function(){this.unbindAnimationEvents(),this.unbindIntersectionObserver()},observer:void 0,resetObserver:void 0,isObserverActive:!1,animationState:void 0,animationEndListener:void 0,methods:{bindAnimationEvents:function(){var t=this;this.animationEndListener||(this.animationEndListener=function(){K(t.$el,[t.$value.enterClass,t.$value.leaveClass]),!t.$modifiers.once&&t.resetObserver.observe(t.$el),t.unbindAnimationEvents()},this.$el.addEventListener("animationend",this.animationEndListener))},bindIntersectionObserver:function(){var t=this,n=this.$value,o=n.root,i=n.rootMargin,r=n.threshold,d=r===void 0?.5:r,l={root:o,rootMargin:i,threshold:d};this.observer=new IntersectionObserver(function(a){var c=Ne(a,1),p=c[0];t.isObserverActive?p.boundingClientRect.top>0&&(p.isIntersecting?t.enter():t.leave()):p.isIntersecting&&t.enter(),t.isObserverActive=!0},l),setTimeout(function(){return t.observer.observe(t.$el)},0),this.resetObserver=new IntersectionObserver(function(a){var c=Ne(a,1),p=c[0];p.boundingClientRect.top>0&&!p.isIntersecting&&(t.$el.style.opacity=t.$value.enterClass?"0":"",K(t.$el,[t.$value.enterClass,t.$value.leaveClass]),t.resetObserver.unobserve(t.$el)),t.animationState=void 0},Me(Me({},l),{},{threshold:0}))},enter:function(){this.animationState!=="enter"&&this.$value.enterClass&&(this.$el.style.opacity="",K(this.$el,this.$value.leaveClass),ge(this.$el,this.$value.enterClass),this.$modifiers.once&&this.unbindIntersectionObserver(this.$el),this.bindAnimationEvents(),this.animationState="enter")},leave:function(){this.animationState!=="leave"&&this.$value.leaveClass&&(this.$el.style.opacity=this.$value.enterClass?"0":"",K(this.$el,this.$value.enterClass),ge(this.$el,this.$value.leaveClass),this.bindAnimationEvents(),this.animationState="leave")},unbindAnimationEvents:function(){this.animationEndListener&&(this.$el.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=void 0)},unbindIntersectionObserver:function(){var t,n;(t=this.observer)===null||t===void 0||t.unobserve(this.$el),(n=this.resetObserver)===null||n===void 0||n.unobserve(this.$el),this.isObserverActive=!1}}});const Dt={},Bt={class:"lg:px-20 px-10 lg:flex w-full min-h-dvh lg:items-center lg:justify-around gap-5"},Mt={class:"items-center lg:w-1/3 justify-center pr-10"},Nt={class:"flex flex-wrap justify-start mt-6"},zt={class:"lg:flex lg:items-center p-3"},Ut={class:"lg:flex lg:items-center p-3"},Ft={class:"lg:flex lg:items-center gap-2 p-3"};function Rt(e,t){const n=D;return u(),m("div",Bt,[g((u(),m("div",Mt,[t[3]||(t[3]=Z('<span class="text-7xl font-bold">let&#39;s connect</span><p class="font-light text-lg text-pretty mt-5">Entre em contato enviando uma um email para <a href="mailto:jpsshome@gmail.com" class="border-b border-[#D3E97A]">jpsshome@gmail.com</a>.</p><button class="flex items-center w-auto bg-[#D3E97A] px-5 py-2 gap-3" style="border-radius:50px;"><i class="pi pi-file-pdf"></i><p class="font-light text-lg text-pretty"><a href="../../assets/João_Pedro_Silva_Santos.docx" download>Confira meu currículo.</a></p></button>',3)),s("div",Nt,[g((u(),m("div",zt,t[0]||(t[0]=[s("p",null,[s("a",{href:"mailto:jpsshome@gmail.com"},[s("i",{class:"pi pi-envelope",style:{"font-size":"1.8rem",color:"#b74f4f"}})])],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ut,t[1]||(t[1]=[s("p",null,[s("a",{href:"https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/",target:"_blank"},[s("i",{class:"pi pi-linkedin",style:{"font-size":"2rem",color:"#0966c2"}})])],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ft,t[2]||(t[2]=[s("p",null,[s("i",{class:"pi pi-github",style:{"font-size":"2rem"}})],-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),t[4]||(t[4]=s("div",{class:"items-center w-1/2"},null,-1))])}const Kt=z(Dt,[["render",Rt]]);function qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",t=dt();return"".concat(e).concat(t.replace("v-","").replaceAll("-","_"))}var Ue=T.extend({name:"common"});function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Wt(e){return et(e)||Ht(e)||Qe(e)||Ze()}function Ht(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function te(e,t){return et(e)||Gt(e,t)||Qe(e,t)||Ze()}function Ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(e,t){if(e){if(typeof e=="string")return Fe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fe(e,t):void 0}}function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Gt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,i,r,d,l=[],a=!0,c=!1;try{if(r=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(p){c=!0,i=p}finally{try{if(!a&&n.return!=null&&(d=n.return(),Object(d)!==d))return}finally{if(c)throw i}}return l}}function et(e){if(Array.isArray(e))return e}function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Re(Object(n),!0).forEach(function(o){ne(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function ne(e,t,n){return(t=Jt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jt(e){var t=Xt(e,"string");return re(t)=="symbol"?t:t+""}function Xt(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(re(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var de={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){U.off("theme:change",this._loadCoreStyles),t||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(t,n){var o=this;U.off("theme:change",this._themeScopedListener),t?(this._loadScopedThemeStyles(t),this._themeScopedListener=function(){return o._loadScopedThemeStyles(t)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var t,n,o,i,r,d,l,a,c,p,f,b=(t=this.pt)===null||t===void 0?void 0:t._usept,h=b?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=b?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(i=_||h)===null||i===void 0||(i=i.hooks)===null||i===void 0||(r=i.onBeforeCreate)===null||r===void 0||r.call(i);var I=(d=this.$primevueConfig)===null||d===void 0||(d=d.pt)===null||d===void 0?void 0:d._usept,k=I?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.originalValue:void 0,P=I?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(p=P||k)===null||p===void 0||(p=p[this.$.type.name])===null||p===void 0||(p=p.hooks)===null||p===void 0||(f=p.onBeforeCreate)===null||f===void 0||f.call(p),this.$attrSelector=qt(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var t;this.rootEl=_e(ut(this.$el)?this.$el:(t=this.$el)===null||t===void 0?void 0:t.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=x({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));n==null||n(),o==null||o()}},_mergeProps:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return Ge(t)?t.apply(void 0,o):$.apply(void 0,o)},_load:function(){R.isStyleNameLoaded("base")||(T.loadCSS(this.$styleOptions),this._loadGlobalStyles(),R.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var t,n;!R.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(Ue.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),R.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Se(t)&&T.load(t,x({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var t,n;if(!(this.isUnstyled||this.$theme==="none")){if(!L.isStyleNameLoaded("common")){var o,i,r=((o=this.$style)===null||o===void 0||(i=o.getCommonTheme)===null||i===void 0?void 0:i.call(o))||{},d=r.primitive,l=r.semantic,a=r.global,c=r.style;T.load(d==null?void 0:d.css,x({name:"primitive-variables"},this.$styleOptions)),T.load(l==null?void 0:l.css,x({name:"semantic-variables"},this.$styleOptions)),T.load(a==null?void 0:a.css,x({name:"global-variables"},this.$styleOptions)),T.loadStyle(x({name:"global-style"},this.$styleOptions),c),L.setLoadedStyleName("common")}if(!L.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var p,f,b,h,_=((p=this.$style)===null||p===void 0||(f=p.getComponentTheme)===null||f===void 0?void 0:f.call(p))||{},I=_.css,k=_.style;(b=this.$style)===null||b===void 0||b.load(I,x({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadStyle(x({name:"".concat(this.$style.name,"-style")},this.$styleOptions),k),L.setLoadedStyleName(this.$style.name)}if(!L.isStyleNameLoaded("layer-order")){var P,O,j=(P=this.$style)===null||P===void 0||(O=P.getLayerOrderThemeCSS)===null||O===void 0?void 0:O.call(P);T.load(j,x({name:"layer-order",first:!0},this.$styleOptions)),L.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(t){var n,o,i,r=((n=this.$style)===null||n===void 0||(o=n.getPresetTheme)===null||o===void 0?void 0:o.call(n,t,"[".concat(this.$attrSelector,"]")))||{},d=r.css,l=(i=this.$style)===null||i===void 0?void 0:i.load(d,x({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=l.el},_unloadScopedThemeStyles:function(){var t;(t=this.scopedStyleEl)===null||t===void 0||(t=t.value)===null||t===void 0||t.remove()},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};R.clearLoadedStyleNames(),U.on("theme:change",t)},_removeThemeListeners:function(){U.off("theme:change",this._loadCoreStyles),U.off("theme:change",this._load),U.off("theme:change",this._themeScopedListener)},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getPropValue:function(t){var n;return this[t]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[t])},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return He(t,n,o)},_getPTValue:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,d=/./g.test(o)&&!!i[o.split(".")[0]],l=this._getPropValue("ptOptions")||((t=this.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},a=l.mergeSections,c=a===void 0?!0:a,p=l.mergeProps,f=p===void 0?!1:p,b=r?d?this._useGlobalPT(this._getPTClassValue,o,i):this._useDefaultPT(this._getPTClassValue,o,i):void 0,h=d?void 0:this._getPTSelf(n,this._getPTClassValue,o,x(x({},i),{},{global:b||{}})),_=this._getPTDatasets(o);return c||!c&&h?f?this._mergeProps(f,b,h,_):x(x(x({},b),h),_):x(x({},h),_)},_getPTSelf:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return $(this._usePT.apply(this,[this._getPT(t,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",r=o==="root"&&Se((t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]);return o!=="transition"&&x(x({},o==="root"&&x(x(ne({},"".concat(i,"name"),F(r?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),r&&ne({},"".concat(i,"extend"),F(this.$.type.name))),{},ne({},"".concat(this.$attrSelector),""))),{},ne({},"".concat(i,"section"),F(o)))},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return X(t)||Je(t)?{class:t}:t},_getPT:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=function(l){var a,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=i?i(l):l,f=F(o),b=F(n.$name);return(a=c?f!==b?p==null?void 0:p[f]:void 0:p==null?void 0:p[f])!==null&&a!==void 0?a:p};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)},_usePT:function(t,n,o,i){var r=function(I){return n(I,o,i)};if(t!=null&&t.hasOwnProperty("_usept")){var d,l=t._usept||((d=this.$primevueConfig)===null||d===void 0?void 0:d.ptOptions)||{},a=l.mergeSections,c=a===void 0?!0:a,p=l.mergeProps,f=p===void 0?!1:p,b=r(t.originalValue),h=r(t.value);return b===void 0&&h===void 0?void 0:X(h)?h:X(b)?b:c||!c&&h?f?this._mergeProps(f,b,h):x(x({},b),h):h}return r(t)},_useGlobalPT:function(t,n,o){return this._usePT(this.globalPT,t,n,o)},_useDefaultPT:function(t,n,o){return this._usePT(this.defaultPT,t,n,o)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,x(x({},this.$params),n))},ptmi:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=$(this.$_attrsWithoutPT,this.ptm(n,o));return i!=null&&i.hasOwnProperty("id")&&((t=i.id)!==null&&t!==void 0||(i.id=this.$id)),i},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,n,x({instance:this},o),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,t,x(x({},this.$params),n))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var i=this._getOptionValue(this.$style.inlineStyles,t,x(x({},this.$params),o)),r=this._getOptionValue(Ue.inlineStyles,t,x(x({},this.$params),o));return[r,i]}}},computed:{globalPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(o){return xe(o,{instance:n})})},defaultPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(o){return n._getOptionValue(o,n.$name,x({},n.$params))||xe(o,x({},n.$params))})},isUnstyled:function(){var t;return this.unstyled!==void 0?this.unstyled:(t=this.$primevueConfig)===null||t===void 0?void 0:t.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var t,n=Object.keys(((t=this.$.vnode)===null||t===void 0?void 0:t.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(o){var i=te(o,1),r=i[0];return n==null?void 0:n.includes(r)}))},$theme:function(){var t;return(t=this.$primevueConfig)===null||t===void 0?void 0:t.theme},$style:function(){return x(x({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var t;return{nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}},$primevueConfig:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var t=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:t,props:t==null?void 0:t.$props,state:t==null?void 0:t.$data,attrs:t==null?void 0:t.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=te(t,1),o=n[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(t,n){var o=te(n,2),i=o[0],r=o[1],d=i.split(":"),l=Wt(d),a=l.slice(1);return a==null||a.reduce(function(c,p,f,b){return!c[p]&&(c[p]=f===b.length-1?r:{}),c[p]},t),t},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=te(t,1),o=n[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(t,n){var o=te(n,2),i=o[0],r=o[1];return t[i]=r,t},{})}}},Yt=`
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
`,Zt=T.extend({name:"baseicon",css:Yt});function ae(e){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(e)}function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ke(Object(n),!0).forEach(function(o){Qt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Qt(e,t,n){return(t=en(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e){var t=tn(e,"string");return ae(t)=="symbol"?t:t+""}function tn(e,t){if(ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(ae(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ue={name:"BaseIcon",extends:de,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Zt,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var t=he(this.label);return qe(qe({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},tt={name:"SpinnerIcon",extends:ue};function nn(e,t,n,o,i,r){return u(),m("svg",$({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}tt.render=nn;var on=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
}
`,rn={root:function(t){var n=t.props,o=t.instance;return["p-badge p-component",{"p-badge-circle":Se(n.value)&&String(n.value).length===1,"p-badge-dot":he(n.value)&&!o.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},an=T.extend({name:"badge",style:on,classes:rn}),sn={name:"BaseBadge",extends:de,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:an,provide:function(){return{$pcBadge:this,$parentInstance:this}}},nt={name:"Badge",extends:sn,inheritAttrs:!1};function ln(e,t,n,o,i,r){return u(),m("span",$({class:e.cx("root")},e.ptmi("root")),[A(e.$slots,"default",{},function(){return[V(Y(e.value),1)]})],16)}nt.render=ln;var dn=({dt:e})=>`
.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
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
`,un={root:"p-ink"},cn=T.extend({name:"ripple-directive",style:dn,classes:un}),pn=y.extend({style:cn});function se(e){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function mn(e){return gn(e)||bn(e)||vn(e)||fn()}function fn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vn(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ie(e,t):void 0}}function bn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gn(e){if(Array.isArray(e))return Ie(e)}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function We(e,t,n){return(t=hn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hn(e){var t=yn(e,"string");return se(t)=="symbol"?t:t+""}function yn(e,t){if(se(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(se(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ot=pn.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var n=this.getInk(t);n||(n=ct("span",We(We({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),t.appendChild(n),this.$el=n)},remove:function(t){var n=this.getInk(t);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,o=t.currentTarget,i=this.getInk(o);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&K(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!Oe(i)&&!Ae(i)){var r=Math.max(pt(o),mt(o));i.style.height=r+"px",i.style.width=r+"px"}var d=ft(o),l=t.pageX-d.left+document.body.scrollTop-Ae(i)/2,a=t.pageY-d.top+document.body.scrollLeft-Oe(i)/2;i.style.top=a+"px",i.style.left=l+"px",!this.isUnstyled()&&ge(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!n.isUnstyled()&&K(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&K(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?mn(t.children).find(function(n){return Xe(n,"data-pc-name")==="ripple"}):void 0}}}),$n=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding: ${e("button.padding.y")} ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
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
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding: ${e("button.sm.padding.y")} ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding: ${e("button.lg.padding.y")} ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}
`;function le(e){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function B(e,t,n){return(t=xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xn(e){var t=_n(e,"string");return le(t)=="symbol"?t:t+""}function _n(e,t){if(le(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(le(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Sn={root:function(t){var n=t.instance,o=t.props;return["p-button p-component",B(B(B(B(B(B(B(B(B({"p-button-icon-only":n.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link||o.variant==="link"},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text||o.variant==="text"),"p-button-outlined",o.outlined||o.variant==="outlined"),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var n=t.props;return["p-button-icon",B({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},wn=T.extend({name:"button",style:$n,classes:Sn}),kn={name:"BaseButton",extends:de,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:wn,provide:function(){return{$pcButton:this,$parentInstance:this}}},Te={name:"Button",extends:kn,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return $(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return he(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:tt,Badge:nt},directives:{ripple:ot}};function Cn(e,t,n,o,i,r){var d=we("SpinnerIcon"),l=we("Badge"),a=vt("ripple");return e.asChild?A(e.$slots,"default",{key:1,class:Le(e.cx("root")),a11yAttrs:r.a11yAttrs}):g((u(),H(ke(e.as),$({key:0,class:e.cx("root")},r.attrs),{default:G(function(){return[A(e.$slots,"default",{},function(){return[e.loading?A(e.$slots,"loadingicon",$({key:0,class:[e.cx("loadingIcon"),e.cx("icon")]},e.ptm("loadingIcon")),function(){return[e.loadingIcon?(u(),m("span",$({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(u(),H(d,$({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):A(e.$slots,"icon",$({key:1,class:[e.cx("icon")]},e.ptm("icon")),function(){return[e.icon?(u(),m("span",$({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):E("",!0)]}),!r.hasIcon||e.label?(u(),m("span",$({key:2,class:e.cx("label")},e.ptm("label")),Y(e.label||" "),17)):E("",!0),e.badge?(u(),H(l,{key:3,value:e.badge,class:Le(e.badgeClass),severity:e.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):E("",!0)]})]}),_:3},16,["class"])),[[a]])}Te.render=Cn;const W=Ye({preset:"Aura",primary:"emerald",surface:null,darkTheme:!0,menuMode:"static"}),M=Ye({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1,activeMenuItem:null});function In(){const e=a=>{M.activeMenuItem=a.value||a},t=()=>{if(!document.startViewTransition){n();return}document.startViewTransition(()=>n(event))},n=()=>{W.darkTheme=!W.darkTheme,document.documentElement.classList.toggle("app-dark")},o=()=>{W.menuMode==="overlay"&&(M.overlayMenuActive=!M.overlayMenuActive),window.innerWidth>991?M.staticMenuDesktopInactive=!M.staticMenuDesktopInactive:M.staticMenuMobileActive=!M.staticMenuMobileActive},i=me(()=>M.overlayMenuActive||M.staticMenuMobileActive),r=me(()=>W.darkTheme),d=me(()=>W.primary),l=me(()=>W.surface);return{layoutConfig:W,layoutState:M,toggleMenu:o,isSidebarActive:i,isDarkTheme:r,getPrimary:d,getSurface:l,setActiveMenuItem:e,toggleDarkMode:t}}const Pn={class:"fixed flex gap-4 top-5 right-20 z-50"},Tn={__name:"FloatingConfigurator",setup(e){const{toggleDarkMode:t,isDarkTheme:n}=In();return(o,i)=>{const r=Te,d=D;return g((u(),m("div",Pn,[C(r,{type:"button",onClick:Q(t),rounded:"",icon:Q(n)?"pi pi-moon":"pi pi-sun",severity:"secondary"},null,8,["onClick","icon"])])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000"}]])}}},jn={},On={class:"lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5"},An={class:"items-center lg:w-1/3 justify-center lg:pr-10"},Ln={class:"items-center lg:w-1/2"},Vn={class:"font-light text-lg text-pretty mt-5 text-justify"},En={class:"font-light text-lg text-pretty mt-5 text-justify"},Dn={class:"font-light text-lg text-pretty mt-5 text-justify"};function Bn(e,t){const n=D;return u(),m("div",On,[g((u(),m("div",An,t[0]||(t[0]=[s("span",{class:"text-7xl font-bold"},"about me",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),s("div",Ln,[g((u(),m("p",Vn,t[1]||(t[1]=[s("span",{class:"text-2xl font-bold py-10"},"Atualmente ",-1),V(" moro no Rio Grande do Sul e a três anos faço parte do time de desenvolvimento da Flux Tecnologia. Casado e pai de uma linda menina. Adoro cinema, música e ler. De Attack on Titan ao cinema do Denis Villanueve, de Rachmaninoff ao Kendrik Lamar, e das documentações intermináveis das linguagens e ferramentas que uso até Dostoiévski. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),g((u(),m("p",En,t[2]||(t[2]=[V(" Meu inglês me permite ter uma comunicação excelente, tenho experiência e contato com nativos americanos que sempre me ajudam a melhorar essa skill importante nesse meio como desenvolvedor. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),g((u(),m("p",Dn,t[3]||(t[3]=[V(" Tenho um trabalho voluntário junto a comunidade religiosa do qual faço parte, junto com minha esposa, como líderes do berçário, cuidando das crianças mais pequenas. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]])])])}const Mn=z(jn,[["render",Bn]]),Nn={},zn={class:"lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5"},Un={class:"items-center lg:w-1/3 justify-center lg:pr-10"},Fn={class:"items-center lg:w-1/2"},Rn={class:"text-4xl font-bold py-10"},Kn={class:"font-light text-lg text-pretty mt-5 text-justify"},qn={class:"font-light text-lg text-pretty mt-5 text-justify"};function Wn(e,t){const n=D;return u(),m("div",zn,[g((u(),m("div",Un,t[0]||(t[0]=[s("span",{class:"lg:text-7xl text-6xl font-bold"},"experiencies",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),s("div",Fn,[g((u(),m("p",Rn,t[1]||(t[1]=[V("Desenvolvedor Full-Stack & Analista de Dados")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),g((u(),m("p",Kn,t[2]||(t[2]=[V(" Sou João Pedro Silva Santos, desenvolvedor experiente com formação em Análise e Desenvolvimento de Sistemas e mais de dois anos de experiência prática no mercado de tecnologia. Tenho experiência no desenvolvimento de aplicações web e mobile, trabalhando com tecnologias como Kotlin, Java, Swift, Objective-C, e gerenciando aplicativos nas principais stores digitais. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),g((u(),m("p",qn,t[3]||(t[3]=[V(" Minha expertise abrange desenvolvimento web e mobile, com sólidos conhecimentos em JavaScript, Node.js, React, Vue.js, Python e Flutter. Tenho experiência tanto no frontend quanto no backend, desenvolvendo APIs REST e soluções completas que conectam diferentes plataformas. Além das habilidades técnicas, possuo facilidade com idiomas (português nativo, inglês intermediário e espanhol fluente) e experiência em liderança de equipes, sempre buscando desafios que me permitam aplicar meu conhecimento em programação e desenvolvimento de aplicações de alta performace. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]])])])}const Hn=z(Nn,[["render",Wn]]);var Gn=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
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
`,Jn={root:function(t){var n=t.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},Xn={root:function(t){var n=t.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},Yn=T.extend({name:"divider",style:Gn,classes:Xn,inlineStyles:Jn}),Zn={name:"BaseDivider",extends:de,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Yn,provide:function(){return{$pcDivider:this,$parentInstance:this}}},ye={name:"Divider",extends:Zn,inheritAttrs:!1},Qn=["aria-orientation"];function eo(e,t,n,o,i,r){return u(),m("div",$({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(u(),m("div",$({key:0,class:e.cx("content")},e.ptm("content")),[A(e.$slots,"default")],16)):E("",!0)],16,Qn)}ye.render=eo;var it={name:"ChevronDownIcon",extends:ue};function to(e,t,n,o,i,r){return u(),m("svg",$({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}it.render=to;var rt={name:"ChevronLeftIcon",extends:ue};function no(e,t,n,o,i,r){return u(),m("svg",$({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}rt.render=no;var at={name:"ChevronRightIcon",extends:ue};function oo(e,t,n,o,i,r){return u(),m("svg",$({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}at.render=oo;var st={name:"ChevronUpIcon",extends:ue};function io(e,t,n,o,i,r){return u(),m("svg",$({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}st.render=io;var ro=({dt:e})=>`
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
    gap: ${e("carousel.content.gap")};
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
    padding: ${e("carousel.indicator.list.padding")};
    gap: ${e("carousel.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("carousel.indicator.background")};
    width: ${e("carousel.indicator.width")};
    height: ${e("carousel.indicator.height")};
    border: 0 none;
    transition: background ${e("carousel.transition.duration")}, color ${e("carousel.transition.duration")}, outline-color ${e("carousel.transition.duration")}, box-shadow ${e("carousel.transition.duration")};
    outline-color: transparent;
    border-radius: ${e("carousel.indicator.border.radius")};
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: ${e("carousel.indicator.focus.ring.shadow")};
    outline: ${e("carousel.indicator.focus.ring.width")} ${e("carousel.indicator.focus.ring.style")} ${e("carousel.indicator.focus.ring.color")};
    outline-offset: ${e("carousel.indicator.focus.ring.offset")};
}

.p-carousel-indicator-button:hover {
    background: ${e("carousel.indicator.hover.background")};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${e("carousel.indicator.active.background")};
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
`,ao={root:function(t){var n=t.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var n=t.instance;return["p-carousel-prev-button",{"p-disabled":n.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var n=t.index,o=t.value,i=t.totalShiftedItems,r=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":i*-1===o.length+r,"p-carousel-item-start":n===0,"p-carousel-item-end":o.slice(-1*r).length-1===n}]},item:function(t){var n=t.instance,o=t.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=o&&n.lastIndex()>=o,"p-carousel-item-start":n.firstIndex()===o,"p-carousel-item-end":n.lastIndex()===o}]},pcNextButton:function(t){var n=t.instance;return["p-carousel-next-button",{"p-disabled":n.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var n=t.instance,o=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":n.d_page===o}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},so=T.extend({name:"carousel",style:ro,classes:ao}),lo={name:"BaseCarousel",extends:de,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:so,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function J(e){return mo(e)||po(e)||co(e)||uo()}function uo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function co(e,t){if(e){if(typeof e=="string")return Pe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pe(e,t):void 0}}function po(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mo(e){if(Array.isArray(e))return Pe(e)}function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var ce={name:"Carousel",extends:lo,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},numScroll:function(t,n){this.d_oldNumScroll=n,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),n=!1,o=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var i=this.d_page;this.totalIndicators!==0&&i>=this.totalIndicators&&(i=this.totalIndicators-1,this.$emit("update:page",i),this.d_page=i,n=!0),o=i*this.d_numScroll*-1,t&&(o-=this.d_numVisible),i===this.totalIndicators-1&&this.remainingItems>0?(o+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?o=-1*this.d_numVisible:o===0&&(o=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t,n){return this.ptm(t,{context:{highlighted:n===this.d_page}})},getItemPTOptions:function(t,n){return this.ptm(t,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})},step:function(t,n){var o=this.totalShiftedItems,i=this.isCircular();if(n!=null)o=this.d_numScroll*n*-1,i&&(o-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{o+=this.d_numScroll*t,this.isRemainingItemsAdded&&(o+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var r=i?o+this.d_numVisible:o;n=Math.abs(Math.floor(r/this.d_numScroll))}i&&this.d_page===this.totalIndicators-1&&t===-1?(o=-1*(this.value.length+this.d_numVisible),n=0):i&&this.d_page===0&&t===1?(o=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&K(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},o=0;o<this.responsiveOptions.length;o++){var i=this.responsiveOptions[o];parseInt(i.breakpoint,10)>=t&&(n=i)}if(this.d_numScroll!==n.numScroll){var r=this.d_page;r=parseInt(r*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*r*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",r),this.d_page=r}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(t,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,n){var o=this.d_page;n>o?this.navForward(t,n):n<o&&this.navBackward(t,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&ge(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){var n=t.changedTouches[0],o=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(o)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=J(ee(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=J(ee(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=J(ee(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(r){return Xe(r,"data-p-active")===!0}),o=_e(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),i=t.findIndex(function(r){return r===o.parentElement});t[i].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=J(ee(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=_e(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(o){return o===n.parentElement})},changedFocusedIndicator:function(t,n){var o=J(ee(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));o[t].children[0].tabIndex="-1",o[n].children[0].tabIndex="0",o[n].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(n){t.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",bt(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var o=J(this.responsiveOptions),i=gt();o.sort(function(l,a){var c=l.breakpoint,p=a.breakpoint;return ht(c,p,-1,i)});for(var r=0;r<o.length;r++){var d=o[r];n+=`
                        @media screen and (max-width: `.concat(d.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/d.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:Te,ChevronRightIcon:at,ChevronDownIcon:it,ChevronLeftIcon:rt,ChevronUpIcon:st},directives:{ripple:ot}},fo=["aria-live"],vo=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],bo=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],go=["data-p-active"],ho=["tabindex","aria-label","aria-current","onClick"];function yo(e,t,n,o,i,r){var d=we("Button");return u(),m("div",$({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(u(),m("div",$({key:0,class:e.cx("header")},e.ptm("header")),[A(e.$slots,"header")],16)):E("",!0),r.empty?A(e.$slots,"empty",{key:2},function(){return[V(Y(r.emptyMessageText),1)]}):(u(),m("div",$({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[s("div",$({class:[e.cx("content"),e.contentClass],"aria-live":i.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(u(),H(d,$({key:0,class:e.cx("pcPrevButton"),disabled:r.backwardIsDisabled,"aria-label":r.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:r.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:G(function(l){return[A(e.$slots,"previcon",{},function(){return[(u(),H(ke(r.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),$({class:l.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):E("",!0),s("div",$({class:e.cx("viewport"),style:[{height:r.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[1]||(t[1]=function(){return r.onTouchEnd&&r.onTouchEnd.apply(r,arguments)}),onTouchstart:t[2]||(t[2]=function(){return r.onTouchStart&&r.onTouchStart.apply(r,arguments)}),onTouchmove:t[3]||(t[3]=function(){return r.onTouchMove&&r.onTouchMove.apply(r,arguments)})},e.ptm("viewport")),[s("div",$({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:t[0]||(t[0]=function(){return r.onTransitionEnd&&r.onTransitionEnd.apply(r,arguments)})},e.ptm("itemList")),[r.isCircular()?(u(!0),m(fe,{key:0},ve(e.value.slice(-1*i.d_numVisible),function(l,a){return u(),m("div",$({key:a+"_scloned",class:e.cx("itemClone",{index:a,value:e.value,totalShiftedItems:i.totalShiftedItems,d_numVisible:i.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":i.totalShiftedItems*-1===e.value.length+i.d_numVisible,"data-p-carousel-item-start":a===0,"data-p-carousel-item-end":e.value.slice(-1*i.d_numVisible).length-1===a}),[A(e.$slots,"item",{data:l,index:a})],16,vo)}),128)):E("",!0),(u(!0),m(fe,null,ve(e.value,function(l,a){return u(),m("div",$({key:a,class:e.cx("item",{index:a}),role:"group","aria-hidden":r.firstIndex()>a||r.lastIndex()<a?!0:void 0,"aria-label":r.ariaSlideNumber(a),"aria-roledescription":r.ariaSlideLabel,ref_for:!0},r.getItemPTOptions("item",a),{"data-p-carousel-item-active":r.firstIndex()<=a&&r.lastIndex()>=a,"data-p-carousel-item-start":r.firstIndex()===a,"data-p-carousel-item-end":r.lastIndex()===a}),[A(e.$slots,"item",{data:l,index:a})],16,bo)}),128)),r.isCircular()?(u(!0),m(fe,{key:1},ve(e.value.slice(0,i.d_numVisible),function(l,a){return u(),m("div",$({key:a+"_fcloned",class:e.cx("itemClone",{index:a,value:e.value,totalShiftedItems:i.totalShiftedItems,d_numVisible:i.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[A(e.$slots,"item",{data:l,index:a})],16)}),128)):E("",!0)],16)],16),e.showNavigators?(u(),H(d,$({key:1,class:e.cx("pcNextButton"),disabled:r.forwardIsDisabled,"aria-label":r.ariaNextButtonLabel,unstyled:e.unstyled,onClick:r.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:G(function(l){return[A(e.$slots,"nexticon",{},function(){return[(u(),H(ke(r.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),$({class:l.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):E("",!0)],16,fo),r.totalIndicators>=0&&e.showIndicators?(u(),m("ul",$({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:t[4]||(t[4]=function(){return r.onIndicatorKeydown&&r.onIndicatorKeydown.apply(r,arguments)})},e.ptm("indicatorList")),[(u(!0),m(fe,null,ve(r.totalIndicators,function(l,a){return u(),m("li",$({key:"p-carousel-indicator-"+a.toString(),class:e.cx("indicator",{index:a}),ref_for:!0},r.getIndicatorPTOptions("indicator",a),{"data-p-active":i.d_page===a}),[s("button",$({class:e.cx("indicatorButton"),type:"button",tabindex:i.d_page===a?"0":"-1","aria-label":r.ariaPageLabel(a+1),"aria-current":i.d_page===a?"page":void 0,onClick:function(p){return r.onIndicatorClick(p,a)},ref_for:!0},r.getIndicatorPTOptions("indicatorButton",a)),null,16,ho)],16,go)}),128))],16)):E("",!0)],16)),e.$slots.footer?(u(),m("div",$({key:3,class:e.cx("footer")},e.ptm("footer")),[A(e.$slots,"footer")],16)):E("",!0)],16)}ce.render=yo;const $o="/portifolio/assets/call1-CKK_a0OL.png",xo="/portifolio/assets/call2-BQqDTUsv.png",_o="/portifolio/assets/keypad-Po8_Lotb.png",So="/portifolio/assets/options-C6AhMAdp.png",wo="/portifolio/assets/reg-BsytU14Y.png",ko={class:"lg:px-20 px-10 gap-20 min-h-dvh"},Co={class:"items-center lg:w-1/2 mb-40 justify-center"},Io={class:"lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10"},Po={class:"imga w-full lg:w-1/2"},To={class:"rounded m-2 p-4"},jo={class:"mb-4"},Oo={class:"relative mx-auto"},Ao=["src"],Lo={class:"items-center lg:w-1/2"},Vo={__name:"FirstProject",setup(e){const t=q([{breakpoint:"1500px",numVisible:2,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}]),n=q([{image:wo},{image:So},{image:_o},{image:$o},{image:xo}]);return(o,i)=>{const r=ye,d=D;return u(),m("div",ko,[g((u(),m("div",Co,i[0]||(i[0]=[s("span",{class:"text-4xl font-bold uppercase text-center"},"Projects",-1),s("p",{class:"font-light text-lg text-pretty mt-5"}," Desenvolvedor experiente com habilidades em desenvolvimento web e mobile. Buscando oportunidades desafiadoras para aplicar minha expertise em programação, liderança de equipes e desenvolvimento de aplicações de alta performance. ",-1)]))),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),s("div",Io,[g((u(),m("div",Po,[i[1]||(i[1]=s("p",{class:"font-light text-xl text-pretty text-center lg:text-left"},"Fluxphone",-1)),C(Q(ce),{value:n.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:t.value},{item:G(l=>[s("div",To,[s("div",jo,[s("div",Oo,[s("img",{src:l.data.image,alt:"Project Image",class:"w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm"},null,8,Ao)])])])]),_:1},8,["value","responsiveOptions"])])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Lo,[i[2]||(i[2]=Z('<p class="font-semibold text-4xl text-pretty mt-5" data-v-0e823a63>Softphone Withe-label</p><p class="font-light text-lg lg:text-pretty mt-5 text-justify" data-v-0e823a63> Responsável pelo desenvolvimento e manutenção de um softphone VoIP whitelabel, uma plataforma que serve a mais de 70 clientes distintos. Para construir um sistema de alta performance, implementei tecnologias modernas como Firebase para uma gestão de dados eficiente e notificações push para aprimorar a experiência de comunicação. Essa arquitetura permitiu que as personalizações de cada cliente fossem feitas de maneira dinâmica, enquanto as atualizações de segurança e novas funcionalidades eram implementadas em todos os aplicativos de forma simultânea. Entreguei um produto robusto e confiável, demonstrando minha expertise na criação de soluções escaláveis e tecnologicamente avançadas. </p><div class="lg:flex gap-5" data-v-0e823a63><p class="font-light text-lg text-pretty" data-v-0e823a63>Avaliable on:</p><p class="font-light text-lg text-pretty uppercase" data-v-0e823a63><a href="https://apps.apple.com/us/app/fluxphone/id6450217761" target="_blank" class="border-b border-[#D3E97A]" data-v-0e823a63>App Store</a></p><p class="font-light text-lg text-pretty" data-v-0e823a63>&amp;</p><p class="font-light text-lg text-pretty uppercase" data-v-0e823a63><a href="https://play.google.com/store/apps/details?id=br.net.flux.fluxphone_beta" target="_blank" class="border-b border-[#D3E97A]" data-v-0e823a63>Play Store</a></p></div><p class="font-semibold text-lg text-pretty mt-5 uppercase" data-v-0e823a63>Project Info</p>',4)),C(r),i[3]||(i[3]=s("div",{class:"lg:flex justify-between"},[s("p",{class:"font-light text-lg text-pretty mt-5"},"Year"),s("p",{class:"font-light text-lg text-pretty mt-5"},"2023 - 2025")],-1)),C(r),i[4]||(i[4]=s("div",{class:"lg:flex justify-between"},[s("p",{class:"font-light text-lg text-pretty mt-5"},"Role"),s("p",{class:"font-light text-lg text-pretty mt-5"},"Mobile Developer Full-Stack")],-1)),C(r),i[5]||(i[5]=Z('<div class="lg:flex justify-between" data-v-0e823a63><p class="font-light text-lg text-pretty mt-5" data-v-0e823a63>Langagues/Frameworks</p><p class="font-light text-lg text-pretty mt-5 flex items-center gap-5" data-v-0e823a63>Obj-C <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-0e823a63></i> Swift <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-0e823a63></i> SwiftUI</p></div>',1)),C(r)])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},Eo=z(Vo,[["__scopeId","data-v-0e823a63"]]),Do="/portifolio/assets/p2-Dks7sN8c.png",Bo={class:"flex flex-col mt-20 lg:flex-row w-full min-h-dvh lg:items-center lg:justify-around gap-5"},Mo={class:"w-full text-center lg:w-1/2 lg:text-left"},No={class:"flex flex-wrap justify-center lg:justify-start gap-2 mt-6 px-5 lg:px-0"},zo={class:"flex items-center bubbles gap-4",style:{"border-radius":"50px"}},Uo={class:"t"},Fo={class:"lg:flex lg:items-center gap-2 p-3 rounded-xl"},Ro={class:"lg:flex lg:items-center gap-2 p-3"},Ko={class:"flex items-center p-5 lg:p-0"},qo={__name:"FirstSection",setup(e){function t(n){document.body.click();const o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}return(n,o)=>{const i=D;return u(),m("div",Bo,[g((u(),m("div",Mo,[o[3]||(o[3]=s("p",{class:"text-7xl font-bold"},[V("hi, i am "),s("br"),V("João Pedro.")],-1)),o[4]||(o[4]=s("p",{class:"font-light text-lg text-pretty mt-5 px-5 lg:px-0"}," Sou desenvolvedor formado e com experiência tem aplicações mobile e web. Buscando oportunidades desafiadoras para aplicar minhas skills em programação e desenvolvimento de aplicações de alta performance. ",-1)),s("div",No,[g((u(),m("div",zo,[s("p",Uo,[s("a",{onClick:o[0]||(o[0]=r=>t("connect"))},"Contact Me")])])),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Fo,o[1]||(o[1]=[s("a",{href:"https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/",target:"_blank"},[s("i",{class:"pi pi-linkedin",style:{"font-size":"2.2rem",color:"#0966c2"}})],-1)]))),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ro,o[2]||(o[2]=[s("a",{href:"https://github.com/juaoo99",target:"_blank"},[s("i",{class:"pi pi-github",style:{"font-size":"2.2rem"}})],-1)]))),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000"}]]),g((u(),m("div",Ko,o[5]||(o[5]=[s("img",{src:Do,alt:"Image",width:"400",class:"rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"},null,-1)]))),[[i,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"}]])])}}},Wo="/portifolio/assets/brands-vPyxNR3z.jpeg",Ho="/portifolio/assets/gemini-B1DfiA51.jpeg",Go="/portifolio/assets/office-BRBD18Vx.jpeg",Jo="/portifolio/assets/totem2-CEPmdf_y.jpeg",Xo={class:"lg:px-20 px-10 gap-20 min-h-dvh"},Yo={class:"items-center lg:w-1/2 mb-20 justify-center"},Zo={class:"lg:flex-grow w-full h-auto lg:items-center lg:justify-around"},Qo={class:"imga w-full"},ei={class:"lg:m-2 lg:p-4 lg:flex items-center justify-center gap-8"},ti={class:"mb-4"},ni={class:"relative mx-auto"},oi=["src","alt"],ii={class:"lg:w-1/2 h-auto"},ri={class:"text-xl"},ai={class:"flex"},si={class:"font-light text-lg text-pretty mt-5 text-justify"},li={class:"font-light text-lg text-pretty mt-5 text-justify"},di={__name:"More",setup(e){const t=q([{breakpoint:"1024px",numVisible:3,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:2}]),n=q([{image:Wo,title:"Gramado Summit",subtitle:"Minha participação no Gramado Summit, o maior polo de brainstorming da América Latina, foi uma experiência de aprendizado e visibilidade profissional. Neste evento, tive a chance de atuar como expositor, apresentando duas aplicações cruciais do meu portfólio: o Softphone Whitelabel e o GuestLink."},{image:Jo,title:"Gramado Summit",subtitle:"Participar do evento como expositor me permitiu não apenas mostrar o valor técnico dos meus projetos, mas também trocar conhecimentos e fazer networking com líderes da indústria, empreendedores e investidores. Foi uma oportunidade de validação do meu trabalho, que me inspirou a continuar inovando e buscando soluções que façam a diferença no mercado."},{image:Go,title:"Dia a Dia",subtitle:"Minha formação em Análise e Desenvolvimento de Sistemas foi a base para a minha carreira, mas a minha jornada de aprendizado se estende muito além da sala de aula. No meu dia a dia, a busca por conhecimento é contínua e orientada por objetivos práticos. Cada novo projeto é uma oportunidade para aprofundar minhas habilidades e pesquisar novas soluções. Eu aplico constantemente o que aprendo, testando novas tecnologias e frameworks para aprimorar as aplicações em que trabalho. Essa combinação de conhecimento acadêmico e prática diária me permite construir soluções eficientes e inovadoras, sempre buscando a melhor maneira de resolver os desafios que surgem."},{image:Ho,title:"Fã de Tecnologia",subtitle:"A tecnologia, para mim, é uma jornada de constante descoberta e aprimoramento, e não apenas uma carreira. Impulsionado pela curiosidade, busco sempre aprender e explorar novas ferramentas para criar soluções digitais que sejam, ao mesmo tempo, intuitivas para o usuário e sólidas em sua execução técnica. É essa mentalidade de crescimento que me permite transformar ideias em realidade e estar preparado para os desafios do futuro."}]);return(o,i)=>{const r=D;return u(),m("div",Xo,[g((u(),m("div",Yo,i[0]||(i[0]=[s("span",{class:"text-4xl font-bold uppercase text-center"},"Journey",-1),s("p",{class:"font-light text-lg text-pretty mt-5"},"A programação se tornou parte da minha vida, não so profissionalmente. Fora do escritório busco conhecimento, experiencia e inspiração.",-1)]))),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),s("div",Zo,[g((u(),m("div",Qo,[C(Q(ce),{value:n.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:t.value},{item:G(d=>[s("div",ei,[s("div",ti,[s("div",ni,[s("img",{src:d.data.image,alt:d.data.title,class:"w-full h-auto max-w-xs mx-auto rounded-lg"},null,8,oi)])]),s("div",ii,[s("p",ri,Y(d.data.title),1),s("div",ai,[s("p",si,Y(d.data.subtitle),1),s("p",li,Y(d.data.subtitle2),1)])])])]),_:1},8,["value","responsiveOptions"])])),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},ui=z(di,[["__scopeId","data-v-ababad87"]]),ci="/portifolio/assets/login-XhC1rXPn.png",pi="/portifolio/assets/menu-CpagNUP9.png",mi="/portifolio/assets/menu2-BqXJwf9Q.png",fi="/portifolio/assets/serve-CczJ8fW_.png",vi={class:"lg:px-20 px-10 gap-20 min-h-dvh"},bi={class:"lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10"},gi={class:"imga w-full lg:w-1/2"},hi={class:"rounded m-2 p-4"},yi={class:"mb-4"},$i={class:"relative mx-auto"},xi=["src"],_i={class:"items-center lg:w-1/2"},Si={__name:"SecondProject",setup(e){const t=q([{breakpoint:"1500px",numVisible:2,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}]),n=q([{image:ci},{image:pi},{image:mi},{image:fi}]);return(o,i)=>{const r=ye,d=D;return u(),m("div",vi,[s("div",bi,[g((u(),m("div",gi,[i[0]||(i[0]=s("p",{class:"font-light text-xl text-pretty text-center lg:text-left"},"GuestLink",-1)),C(Q(ce),{value:n.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:t.value},{item:G(l=>[s("div",hi,[s("div",yi,[s("div",$i,[s("img",{src:l.data.image,alt:"Project Image",class:"w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm"},null,8,xi)])])])]),_:1},8,["value","responsiveOptions"])])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",_i,[i[1]||(i[1]=Z('<p class="font-semibold text-4xl text-pretty mt-5" data-v-a838837f>GuestLink</p><p class="font-light text-lg text-pretty mt-5 text-justify" data-v-a838837f> Participei do desenvolvimento do Guestlink, um softphone de alta performance projetado para transformar a comunicação em hotéis. Utilizando uma base de código robusta em Swift, SwiftUI e Objective-C, criei um aplicativo que vai além de um simples ramal de telefone. O Guestlink permite que os hóspedes realizem e recebam chamadas diretamente do seu smartphone, enquanto oferece um sistema de chat integrado para comunicação direta com a equipe do hotel. Além disso, o aplicativo conta com um módulo de pedidos que agiliza o serviço de quarto e outras solicitações, centralizando toda a interação do cliente em uma única e intuitiva interface. </p><div class="lg:flex gap-5" data-v-a838837f><p class="font-light text-lg text-pretty uppercase" data-v-a838837f>Avaliable on:</p><p class="font-light text-lg text-pretty uppercase" data-v-a838837f><a href="https://apps.apple.com/us/app/ch%C3%A1cara-menina-da-serra/id6751280484" target="_blank" class="border-b border-[#D3E97A]" data-v-a838837f>App Store</a></p><p class="font-light text-lg text-pretty" data-v-a838837f>&amp;</p><p class="font-light text-lg text-pretty uppercase" data-v-a838837f><a href="https://play.google.com/store/apps/details?id=br.app.amax.meninadaserra" target="_blank" class="border-b border-[#D3E97A]" data-v-a838837f>Play Store</a></p></div><p class="font-light text-lg text-pretty mt-5 uppercase" data-v-a838837f>Project Info</p>',4)),C(r),i[2]||(i[2]=s("div",{class:"lg:flex justify-between"},[s("p",{class:"font-light text-lg text-pretty mt-5"},"Year"),s("p",{class:"font-light text-lg text-pretty mt-5"},"2024 - 2025")],-1)),C(r),i[3]||(i[3]=s("div",{class:"lg:flex justify-between"},[s("p",{class:"font-light text-lg text-pretty mt-5"},"Role"),s("p",{class:"font-light text-lg text-pretty mt-5"},"Mobile Developer Full-Stack")],-1)),C(r),i[4]||(i[4]=Z('<div class="lg:flex justify-between" data-v-a838837f><p class="font-light text-lg text-pretty mt-5" data-v-a838837f>Langagues/Frameworks</p><p class="font-light text-lg text-pretty mt-5 flex items-center gap-5" data-v-a838837f>Obj-C <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-a838837f></i> Swift <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-a838837f></i> SwiftUI</p></div>',1)),C(r)])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},wi=z(Si,[["__scopeId","data-v-a838837f"]]),ki={},Ci={class:"lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5"},Ii={class:"items-center lg:w-1/3 justify-center lg:pr-10"},Pi={class:"items-center lg:w-1/2"},Ti={class:"font-light text-lg text-pretty mt-5 text-justify"},ji={class:"grid grid-cols-2 lg:grid-cols-4 gap-4"},Oi={class:"px-4 py-2 rounded-xl flex justify-center bg-[#f0d92928]"},Ai={class:"px-4 py-2 rounded-xl flex justify-center bg-[#45ba852b]"},Li={class:"px-4 py-2 rounded-xl flex justify-center bg-[#ef86633b]"},Vi={class:"px-4 py-2 rounded-xl flex justify-center bg-[#40bef836]"},Ei={class:"px-4 py-2 rounded-xl flex justify-center bg-[#c5f02928]"},Di={class:"px-4 py-2 rounded-xl flex justify-center bg-[#55a64738]"},Bi={class:"px-4 py-2 rounded-xl flex justify-center bg-[#0184c636]"},Mi={class:"px-4 py-2 rounded-xl flex justify-center bg-[#40bef83a]"},Ni={class:"px-4 py-2 rounded-xl flex justify-center bg-[#ef866336]"},zi={class:"px-4 py-2 rounded-xl flex justify-center bg-[#1dd1fe43]"},Ui={class:"px-4 py-2 rounded-xl flex justify-center bg-[#4473b835]"},Fi={class:"px-4 py-2 rounded-xl flex justify-center bg-[#ff90193a]"},Ri={class:"px-4 py-2 rounded-xl flex justify-center bg-[#1947ff3a]"},Ki={class:"px-4 py-2 rounded-xl flex justify-center bg-[#3bbaf531]"};function qi(e,t){const n=D;return u(),m("div",Ci,[g((u(),m("div",Ii,t[0]||(t[0]=[s("span",{class:"lg:text-7xl text-6xl font-bold mb-8"},"my capabilities",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),s("div",Pi,[g((u(),m("p",Ti,t[1]||(t[1]=[V(" Minha atuação vai além do desenvolvimento de código. Eu também gerencio a publicação e o monitoramento de aplicativos tanto na Apple App Store quanto no Google Play Console. Para isso, integro SDKs e utilizo ferramentas de análise de dados como o Google Analytics e o Firebase, além de gerenciar relatórios de erros com o Crashlytics. Minhas responsabilidades incluem ainda a implementação e o gerenciamento de push notifications com APNs e Firebase Cloud Messaging, garantindo o envio de mensagens e alertas. Essa experiência abrangente, juntamente com minhas habilidades de liderança e relações públicas, me permite gerir projetos de forma eficaz e contribuir para o sucesso de equipes de alto desempenho. ")]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"}]]),s("div",ji,[g((u(),m("div",Oi,t[2]||(t[2]=[s("p",null,"Java Script",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ai,t[3]||(t[3]=[s("p",null,"VUE",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-2000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Li,t[4]||(t[4]=[s("p",null,"HTML",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Vi,t[5]||(t[5]=[s("p",null,"Tailwind",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-3000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ei,t[6]||(t[6]=[s("p",null,"Express.js",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Di,t[7]||(t[7]=[s("p",null,"NODE",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Bi,t[8]||(t[8]=[s("p",null,"CSS",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Mi,t[9]||(t[9]=[s("p",null,"Objectve-C",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-r000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ni,t[10]||(t[10]=[s("p",null,"Swift",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",zi,t[11]||(t[11]=[s("p",null,"SwiftUI",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ui,t[12]||(t[12]=[s("p",null,"Xcode",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Fi,t[13]||(t[13]=[s("p",null,"Firebase",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ri,t[14]||(t[14]=[s("p",null,"SQL",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",Ki,t[15]||(t[15]=[s("p",null,"Flutter + Dart",-1)]))),[[n,{enterClass:"animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000 ",leaveClass:"animate-leave fade-out-0"}]])])])])}const Wi=z(ki,[["render",qi]]),Hi="/portifolio/assets/alert-BYrpxtMM.png",Gi="/portifolio/assets/chat-CJkSWo3r.png",Ji="/portifolio/assets/home-jXiByXDx.png",Xi="/portifolio/assets/order-DITOG9vO.png",Yi="/portifolio/assets/ramal-DjPARijG.png",Zi={class:"lg:px-20 px-10"},Qi={class:"w-full"},er={class:"items-center"},tr={class:"imga w-full"},nr={class:"rounded m-2 p-4"},or={class:"relative mx-auto"},ir=["src"],rr={__name:"ThirdPtoject",setup(e){const t=q([{image:Ji},{image:Gi},{image:Hi},{image:Xi},{image:Yi}]),n=q([{breakpoint:"1500px",numVisible:2,numScroll:1},{breakpoint:"800px",numVisible:1,numScroll:1}]);return(o,i)=>{const r=ye,d=D;return u(),m("div",Zi,[s("div",Qi,[g((u(),m("div",er,[i[0]||(i[0]=s("p",{class:"font-semibold text-4xl text-pretty"},"GuestLink Management",-1)),i[1]||(i[1]=s("p",{class:"font-light text-lg text-pretty mt-5 text-justify"}," Complementando o aplicativo para iOS do Guestlink, desenvolvi um portal de gerenciamento web para a equipe do hotel. Essa plataforma é a central de operações que otimiza a comunicação e os serviços. Através dela, os funcionários podem monitorar e responder ao chat dos hóspedes, gerenciar pedidos de serviço de forma organizada e configurar os ramais de forma simples e eficaz. O portal web, portanto, não apenas complementa o aplicativo, mas transforma a gestão diária, fornecendo à equipe as ferramentas necessárias para oferecer um serviço excepcional. ",-1)),i[2]||(i[2]=s("p",{class:"font-semibold text-lg text-pretty mt-5 uppercase"},"Project Info",-1)),C(r),i[3]||(i[3]=s("div",{class:"lg:flex justify-between"},[s("p",{class:"font-light text-lg text-pretty mt-5"},"Year"),s("p",{class:"font-light text-lg text-pretty mt-5"},"2024 - 2025")],-1)),C(r),i[4]||(i[4]=s("div",{class:"lg:flex justify-between"},[s("p",{class:"font-light text-lg text-pretty mt-5"},"Role"),s("p",{class:"font-light text-lg text-pretty mt-5"},"Web Developer Full-Stack")],-1)),C(r),i[5]||(i[5]=Z('<div class="lg:flex justify-between" data-v-526c3f94><p class="font-light text-lg text-pretty mt-5" data-v-526c3f94>Langagues/Frameworks</p><p class="font-light text-lg text-pretty mt-5 flex items-center gap-5" data-v-526c3f94>JavaScript <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-526c3f94></i> VUE <i class="pi pi-circle-fill" style="font-size:0.5rem;" data-v-526c3f94></i> Tailwind CSS</p></div>',1)),C(r)])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]]),g((u(),m("div",tr,[i[6]||(i[6]=s("p",{class:"font-light text-xl text-pretty text-center lg:text-left"},"GuestLink Management",-1)),C(Q(ce),{value:t.value,circular:"",autoplayInterval:5e3,showIndicators:!1,showNavigators:!0,responsiveOptions:n.value},{item:G(l=>[s("div",nr,[s("div",null,[s("div",or,[s("img",{src:l.data.image,alt:"Project Image",class:"w-full mx-auto lg:rounded-lg rounded-sm"},null,8,ir)])])])]),_:1},8,["value","responsiveOptions"])])),[[d,{enterClass:"animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",leaveClass:"animate-leave fade-out-0"}]])])])}}},ar=z(rr,[["__scopeId","data-v-526c3f94"]]),sr={class:"bg-surface-0 dark:bg-surface-900"},lr={id:"home",class:"landing-wrapper overflow-hidden relative"},dr={class:"navbar py-5 px-6 mx-0 hidden lg:flex items-center justify-between lg:fixed rounded-lg w-full fixed top-0 z-50 sm:hidden"},ur={class:"items-center justify-between flex w-full z-20 rounded-border"},cr={class:"pr-40"},pr={class:"list-none p-0 m-0 flex justify-around select-none flex-row cursor-pointer gap-14 w-full"},mr={id:"first"},fr={id:"features",class:"mt-40"},vr={id:"s",class:"mt-40"},br={id:"t",class:"mt-40"},gr={id:"more",class:"mt-40"},hr={id:"aboutme",class:"mt-40"},yr={id:"experiencies",class:"mt-40"},$r={id:"capabilities",class:"mt-40"},xr={id:"connect",class:"mt-40"},_r=yt({__name:"Landing",setup(e){function t(n){document.body.click();const o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}return(n,o)=>{const i=Kt,r=D;return u(),m("div",sr,[s("div",lr,[s("div",dr,[s("div",ur,[s("div",null,[g((u(),m("a",{onClick:o[0]||(o[0]=d=>t("first")),class:"lg:text-3xl text-1xl text-muted-color pl-20"},[g((u(),m("span",null,o[4]||(o[4]=[V("João Pedro")]))),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"}]])])),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000"}]])]),s("div",cr,[s("ul",pr,[g((u(),m("li",null,[s("a",{onClick:o[1]||(o[1]=d=>t("features")),class:"px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl"},o[5]||(o[5]=[s("span",null,"Features Projects",-1)]))])),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"}]]),g((u(),m("li",null,[s("a",{onClick:o[2]||(o[2]=d=>t("aboutme")),class:"px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl"},o[6]||(o[6]=[s("span",null,"About Me",-1)]))])),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000"}]]),g((u(),m("li",null,[s("a",{onClick:o[3]||(o[3]=d=>t("connect")),class:"px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl"},o[7]||(o[7]=[s("span",null,"Contact Me",-1)]))])),[[r,{enterClass:"animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000"}]])])])]),C(Tn)]),s("div",mr,[C(qo)]),s("div",fr,[C(Eo)]),s("div",vr,[C(wi)]),s("div",br,[C(ar)]),s("div",gr,[C(ui)]),s("div",hr,[C(Mn)]),s("div",yr,[C(Hn)]),s("div",$r,[C(Wi)]),s("div",xr,[C(i)])])])}}}),wr=z(_r,[["__scopeId","data-v-e6e3d7b9"]]);export{wr as default};
