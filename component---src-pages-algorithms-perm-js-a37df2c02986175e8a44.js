(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2mql":function(e,t,n){"use strict";n("ioFf"),n("HAE/");var r=n("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?i:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var c=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(g){var a=f(n);a&&a!==g&&e(t,a,r)}var i=u(n);p&&(i=i.concat(p(n)));for(var s=l(t),h=l(n),m=0;m<i.length;++m){var y=i[m];if(!(o[y]||r&&r[y]||h&&h[y]||s&&s[y])){var b=d(n,y);try{c(t,y,b)}catch(v){}}}}return t}},AF97:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("q1tI"),a=n.n(r),o=n("wZee"),i=n.n(o),s=n("MKeS"),l=n("Bl7J"),c=n("vrFN");var u=Object(s.a)((function(){return n.e(2).then(n.bind(null,"iL8M"))})),p=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){i.a.highlightAll()},o.render=function(){var e=this.props.data.site.siteMetadata.title;return a.a.createElement(l.a,{location:this.props.location,title:e},a.a.createElement(c.a,{title:"Kevin Ponce Quick Sort",description:"Personal blog documenting fun facts, projects and things I have learned"}),a.a.createElement("div",null,a.a.createElement("h1",null,"Quick Sort"),a.a.createElement(u,null)),a.a.createElement("div",null,a.a.createElement("h2",null,"Javascript Code"),a.a.createElement("pre",null,a.a.createElement("code",{className:"language-javascript"},g))),a.a.createElement("div",null,a.a.createElement("h2",null,"Ruby Code"),a.a.createElement("pre",null,a.a.createElement("code",{className:"language-ruby"},f))))},r}(r.Component);t.default=p;var d="1097489062",f="def perm(ar, l = 0, r = ar.length - 1, opts = [])\n  if l == r\n    opts.push(ar.dup)\n  end\n\n  (l..r).each do |i|\n    ar[l], ar[i] = ar[i], ar[l]\n    perm(ar, l + 1, r, opts)\n    ar[i], ar[l] = ar[l], ar[i]\n  end\n\n  opts\nend",g="function perm(ar, l = 0, r = ar.length - 1, opts = []) {\n  if (l === r) {\n    opts.push(ar);\n  }\n\n  for (let i = l; i <= r; i++) {\n    swap(ar, i, l)\n    perm(ar.slice(0), l + 1, r, opts)\n    swap(ar, l, i)\n  }\n\n  return opts;\n}\n\nfunction swap(arr, i, j) {\n  let temp = arr[i];\n  arr[i] = arr[j];\n  arr[j] = temp;\n}"},MKeS:function(e,t,n){"use strict";n("V+eJ"),n("dZ+Y"),n("LK8F"),n("2Spj"),n("VRzm"),n("Btvt"),n("91GP"),n("DW2E"),n("f3/d");var r=n("q1tI"),a=n.n(r);function o(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=n("2mql"),c=n.n(l);function u(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var p=a.a.createContext();var d=function(e){return function(t){return a.a.createElement(p.Consumer,null,(function(n){return a.a.createElement(e,Object.assign({__chunkExtractor:n},t))}))}},f=function(e){return e};function g(e){var t=e.resolve,n=void 0===t?f:t,r=e.render,l=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),p={};function f(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):null}var g=function(e){var a,d;function g(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:f(n)},r.promise=null,u(!n.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?!1===t.ssr?s(r):(c.requireAsync(n).catch((function(){})),r.loadSync(),n.__chunkExtractor.addChunk(c.chunkName(n)),s(r)):(!1!==t.ssr&&c.isReady&&c.isReady(n)&&r.loadSync(),r)}d=e,(a=g).prototype=Object.create(d.prototype),a.prototype.constructor=a,a.__proto__=d,g.getDerivedStateFromProps=function(e,t){var n=f(e);return i({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var h=g.prototype;return h.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},h.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},h.componentWillUnmount=function(){this.mounted=!1},h.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},h.triggerOnLoad=function(){var e=this;l&&setTimeout((function(){l(e.state.result,e.props)}))},h.loadSync=function(){if(this.state.loading)try{var e=c.requireSync(this.props),t=n(e,{Loadable:m});this.state.result=t,this.state.loading=!1}catch(r){this.state.error=r}},h.getCacheKey=function(){return f(this.props)||JSON.stringify(this.props)},h.getCache=function(){return p[this.getCacheKey()]},h.setCache=function(e){p[this.getCacheKey()]=e},h.loadAsync=function(){var e=this;if(!this.promise){var r=this.props,a=(r.__chunkExtractor,r.forwardedRef,o(r,["__chunkExtractor","forwardedRef"]));this.promise=c.requireAsync(a).then((function(r){var a=n(r,{Loadable:m});t.suspense&&e.setCache(a),e.safeSetState({result:n(r,{Loadable:m}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},h.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,s=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,c=l.error,u=l.loading,p=l.result;if(t.suspense){var d=this.getCache();if(!d)throw this.loadAsync();return r({loading:!1,fallback:null,result:d,options:t,props:i({},s,{ref:n})})}if(c)throw c;var f=a||t.fallback||null;return u?f:r({loading:u,fallback:f,result:p,options:t,props:i({},s,{ref:n})})},g}(a.a.Component),h=d(g),m=a.a.forwardRef((function(e,t){return a.a.createElement(h,Object.assign({forwardedRef:t},e))}));return m.preload=function(e){c.requireAsync(e)},m.load=function(e){return c.requireAsync(e)},m}return{loadable:c,lazy:function(e,t){return c(e,i({},t,{suspense:!0}))}}}var h=g({resolve:function(e,t){var n=t.Loadable,r=e.__esModule?e.default:e.default||e;return c()(n,r,{preload:!0}),r},render:function(e){var t=e.result,n=e.props;return a.a.createElement(t,n)}}),m=h.loadable,y=h.lazy,b=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.loading,r=e.props;return!n&&r.children?r.children(t):null}}),v=b.loadable,w=b.lazy;var F=m;F.lib=v,y.lib=w;t.a=F},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},qT12:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,g=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function F(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case d:case i:case l:case s:case g:return e;default:switch(e=e&&e.$$typeof){case u:case f:case y:case m:case c:return e;default:return t}}case o:return t}}}function k(e){return F(e)===d}t.typeOf=F,t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=c,t.Element=a,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=l,t.StrictMode=s,t.Suspense=g,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===l||e===s||e===g||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w)},t.isAsyncMode=function(e){return k(e)||F(e)===p},t.isConcurrentMode=k,t.isContextConsumer=function(e){return F(e)===u},t.isContextProvider=function(e){return F(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return F(e)===f},t.isFragment=function(e){return F(e)===i},t.isLazy=function(e){return F(e)===y},t.isMemo=function(e){return F(e)===m},t.isPortal=function(e){return F(e)===o},t.isProfiler=function(e){return F(e)===l},t.isStrictMode=function(e){return F(e)===s},t.isSuspense=function(e){return F(e)===g}},wZee:function(e,t,n){(function(t){n("rGqo"),n("yt8O"),n("RW0V"),n("Oyvg"),n("SRfc"),n("8+KV"),n("HAE/"),n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo"),n("bWfx"),n("LK8F");var r=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,o,i=r.util.type(t);switch(n=n||{},i){case"Object":if(o=r.util.objId(t),n[o])return n[o];for(var s in a={},n[o]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return a;case"Array":return o=r.util.objId(t),n[o]?n[o]:(a=[],n[o]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var o=(a=a||r.languages)[e],i={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(s)||(i[s]=o[s])}var c=a[e];return a[e]=i,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,a,o){o=o||{};var i=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],c=r.util.type(l);"Object"!==c||o[i(l)]?"Array"!==c||o[i(l)]||(o[i(l)]=!0,e(l,n,s,o)):(o[i(l)]=!0,e(l,n,null,o))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a);for(var o,i=e.querySelectorAll(a.selector),s=0;o=i[s++];)r.highlightElement(o,!0===t,a.callback)},highlightElement:function(n,a,o){for(var i,s="none",l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(t)||[,"none"])[1].toLowerCase(),i=r.languages[s]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,n.parentNode&&(l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s));var c={element:n,language:s,grammar:i,code:n.textContent},u=function(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),o&&o.call(c.element)};if(r.hooks.run("before-sanity-check",c),c.code)if(r.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){var p=new Worker(r.filename);p.onmessage=function(e){u(e.data)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language));else u(r.util.encode(c.code));else r.hooks.run("complete",c)},highlight:function(e,t,n){var o={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",o),o.tokens=r.tokenize(o.code,o.grammar),r.hooks.run("after-tokenize",o),a.stringify(r.util.encode(o.tokens),o.language)},matchGrammar:function(e,t,n,o,i,s,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var u=n[c];u="Array"===r.util.type(u)?u:[u];for(var p=0;p<u.length;++p){var d=u[p],f=d.inside,g=!!d.lookbehind,h=!!d.greedy,m=0,y=d.alias;if(h&&!d.pattern.global){var b=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,b+"g")}d=d.pattern||d;for(var v=o,w=i;v<t.length;w+=t[v].length,++v){var F=t[v];if(t.length>e.length)return;if(!(F instanceof a)){if(h&&v!=t.length-1){if(d.lastIndex=w,!(_=d.exec(e)))break;for(var k=_.index+(g?_[1].length:0),A=_.index+_[0].length,x=v,S=w,$=t.length;x<$&&(S<A||!t[x].type&&!t[x-1].greedy);++x)k>=(S+=t[x].length)&&(++v,w=S);if(t[v]instanceof a)continue;E=x-v,F=e.slice(w,S),_.index-=w}else{d.lastIndex=0;var _=d.exec(F),E=1}if(_){g&&(m=_[1]?_[1].length:0);A=(k=_.index+m)+(_=_[0].slice(m)).length;var j=F.slice(0,k),O=F.slice(A),C=[v,E];j&&(++v,w+=j.length,C.push(j));var P=new a(c,f?r.tokenize(_,f):_,y,_,h);if(C.push(P),O&&C.push(O),Array.prototype.splice.apply(t,C),1!=E&&r.matchGrammar(e,t,n,v,w,!0,c),s)break}else if(s)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var o in a)t[o]=a[o];delete t.rest}return r.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,o=0;a=n[o++];)a(t)}},Token:a};function a(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a}if(e.Prism=r,a.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return a.stringify(e,t)})).join("");var n={type:e.type,content:a.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var o=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,o)}r.hooks.run("wrap",n);var i=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,o=n.code,i=n.immediateClose;e.postMessage(r.highlight(o,r.languages[a],a)),i&&e.close()}),!1),r):r;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(r.filename=o.src,r.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),void 0!==t&&(t.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:r.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},r.languages.insertBefore("markup","cdata",o)}}),r.languages.xml=r.languages.extend("markup",{}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.markup.tag.addInlined("script","javascript"),r.languages.js=r.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,a=e.getAttribute("data-src"),o=e,i=/\blang(?:uage)?-([\w-]+)\b/i;o&&!i.test(o.className);)o=o.parentNode;if(o&&(n=(e.className.match(i)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=t[s]||s}var l=document.createElement("code");l.className="language-"+n,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,r.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}})),r.plugins.toolbar&&r.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),r=document.createElement("a");return r.textContent=t.getAttribute("data-download-link-label")||"Download",r.setAttribute("download",""),r.href=n,r}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-algorithms-perm-js-a37df2c02986175e8a44.js.map