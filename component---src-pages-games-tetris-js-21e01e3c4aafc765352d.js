(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var i=s(t),h=s(r),m=0;m<c.length;++m){var v=c[m];if(!(a[v]||n&&n[v]||h&&h[v]||i&&i[v])){var b=p(r,v);try{u(t,v,b)}catch(g){}}}}return t}},MKeS:function(e,t,r){"use strict";r("V+eJ"),r("dZ+Y"),r("LK8F"),r("2Spj"),r("VRzm"),r("Btvt"),r("91GP"),r("DW2E"),r("f3/d");var n=r("q1tI"),o=r.n(n);function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=r("2mql"),u=r.n(s);function l(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var f=o.a.createContext();var p=function(e){return function(t){return o.a.createElement(f.Consumer,null,(function(r){return o.a.createElement(e,Object.assign({__chunkExtractor:r},t))}))}},d=function(e){return e};function y(e){var t=e.resolve,r=void 0===t?d:t,n=e.render,s=e.onLoad;function u(e,t){void 0===t&&(t={});var u=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),f={};function d(e){return t.cacheKey?t.cacheKey(e):u.resolve?u.resolve(e):null}var y=function(e){var o,p;function y(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:d(r)},n.promise=null,l(!r.__chunkExtractor||u.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?i(n):(u.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(u.chunkName(r)),i(n)):(!1!==t.ssr&&u.isReady&&u.isReady(r)&&n.loadSync(),n)}p=e,(o=y).prototype=Object.create(p.prototype),o.prototype.constructor=o,o.__proto__=p,y.getDerivedStateFromProps=function(e,t){var r=d(e);return c({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var h=y.prototype;return h.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},h.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},h.componentWillUnmount=function(){this.mounted=!1},h.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},h.triggerOnLoad=function(){var e=this;s&&setTimeout((function(){s(e.state.result,e.props)}))},h.loadSync=function(){if(this.state.loading)try{var e=u.requireSync(this.props),t=r(e,{Loadable:m});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},h.getCacheKey=function(){return d(this.props)||JSON.stringify(this.props)},h.getCache=function(){return f[this.getCacheKey()]},h.setCache=function(e){f[this.getCacheKey()]=e},h.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,a(n,["__chunkExtractor","forwardedRef"]));this.promise=u.requireAsync(o).then((function(n){var o=r(n,{Loadable:m});t.suspense&&e.setCache(o),e.safeSetState({result:r(n,{Loadable:m}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},h.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,i=(e.__chunkExtractor,a(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,u=s.error,l=s.loading,f=s.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return n({loading:!1,fallback:null,result:p,options:t,props:c({},i,{ref:r})})}if(u)throw u;var d=o||t.fallback||null;return l?d:n({loading:l,fallback:d,result:f,options:t,props:c({},i,{ref:r})})},y}(o.a.Component),h=p(y),m=o.a.forwardRef((function(e,t){return o.a.createElement(h,Object.assign({forwardedRef:t},e))}));return m.preload=function(e){u.requireAsync(e)},m.load=function(e){return u.requireAsync(e)},m}return{loadable:u,lazy:function(e,t){return u(e,c({},t,{suspense:!0}))}}}var h=y({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return u()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),m=h.loadable,v=h.lazy,b=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),g=b.loadable,S=b.lazy;var w=m;w.lib=g,v.lib=S;t.a=w},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case s:case i:case y:return e;default:switch(e=e&&e.$$typeof){case l:case d:case v:case m:case u:return e;default:return t}}case a:return t}}}function _(e){return w(e)===p}t.typeOf=w,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=c,t.Lazy=v,t.Memo=m,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===s||e===i||e===y||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g||e.$$typeof===S)},t.isAsyncMode=function(e){return _(e)||w(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===y}},wymC:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return l}));var n=r("q1tI"),o=r.n(n),a=r("MKeS"),c=r("Bl7J"),i=r("vrFN");var s=Object(a.a)((function(){return r.e(24).then(r.bind(null,"3Fkq"))})),u=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(i.a,{title:"Kevin Ponce Tic Tac Toe",description:"Personal blog documenting fun facts, projects and things I have learned"}),o.a.createElement("div",{id:"tic-tac-toe"},o.a.createElement("h1",null,"Tic Tac Toe"),o.a.createElement(s,null)))},n}(n.Component);t.default=u;var l="1097489062"}}]);
//# sourceMappingURL=component---src-pages-games-tetris-js-21e01e3c4aafc765352d.js.map