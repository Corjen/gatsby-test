webpackJsonp([9],{"./.cache/api-runner-browser.js":function(e,n){"use strict";var o=[];e.exports=function(e,n,t){var s=o.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:t?[t]:[]}},"./.cache/async-requires.js":function(e,n,o){"use strict";n.components={"page-component---src-pages-404-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js"),"page-component---src-pages-page-2-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-page-2-js!./src/pages/page-2.js")},n.json={"404.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"page-2.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),"404-html.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},n.layouts={index:o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=o("./node_modules/babel-runtime/helpers/extends.js"),r=t(s),a=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=t(a),d=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=t(d),l=o("./node_modules/babel-runtime/helpers/createClass.js"),c=t(l),p=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=t(p),m=o("./node_modules/babel-runtime/helpers/inherits.js"),f=t(m),j=o("./node_modules/react/react.js"),h=t(j),b=o("./.cache/loader.js"),y=t(b),_=o("./.cache/emitter.js"),x=t(_),v=function(e){function n(e){(0,i.default)(this,n);var o=(0,g.default)(this,(n.__proto__||(0,u.default)(n)).call(this));return o.state={location:e.location,pageResources:y.default.getResourcesForPathname(e.location.pathname)},o}return(0,f.default)(n,e),(0,c.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=y.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):y.default.getResourcesForPathname(e.location.pathname,function(o){n.setState({location:e.location,pageResources:o})})}}},{key:"componentDidMount",value:function(){var e=this;x.default.on("onPostLoadPageResources",function(n){n.page.path===y.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||this.state.pageResources.json!==n.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,j.createElement)(this.state.pageResources.component,(0,r.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),n}(h.default.Component);n.default=v},"./.cache/emitter.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/mitt/dist/mitt.js"),r=t(s),a=(0,r.default)();e.exports=a},"./.cache/find-page.js":function(e,n,o){"use strict";var t=o("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var r=o.slice(n.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),s[r])return s[r];var a=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return a=e,s[r]=e,!0}else if((0,t.matchPath)(r,{path:e.path,exact:!0}))return a=e,s[r]=e,!0;return!1}),a}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(7,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(6,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(5,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(4,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./.cache/loader.js":function(e,n,o){(function(n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/babel-runtime/core-js/get-iterator.js"),r=t(s),a=o("./.cache/find-page.js"),u=t(a),d=o("./.cache/emitter.js"),i=t(d),l=void 0,c={},p={},g={},m={},f={},j=[],h=[],b={},y=[],_={},x=function(e){return e&&e.default||e},v=void 0,P=!0;v=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){E(e,function(){y=y.filter(function(n){return n!==e}),v.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var R=function(e,n){return _[e]>_[n]?1:_[e]<_[n]?-1:0},w=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},E=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])n.nextTick(function(){o(null,m[e])});else{var t="page-c"===e.slice(0,6)?p.components[e]:p.json[e];t(function(n,t){m[e]=t,o(n,t)})}},k=function(e,o){f[e]?n.nextTick(function(){o(null,f[e])}):E(e,function(n,t){if(n)o(n);else{var s=x(t());f[e]=s,o(n,s)}})},U=1,N={empty:function(){h=[],b={},_={},y=[],j=[]},addPagesArray:function(e){j=e;var n="";n=void 0,l=(0,u.default)(e,n)},addDevRequires:function(e){c=e},addProdRequires:function(e){p=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!j.some(function(n){return n.path===e}))return!1;var n=1/U;U+=1,b[e]?b[e]+=1:b[e]=1,N.has(e)||h.unshift(e),h.sort(w);var o=l(e);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+n:_[o.jsonName]=1+n,y.indexOf(o.jsonName)!==-1||m[o.jsonName]||y.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+n:_[o.componentChunkName]=1+n,y.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||y.unshift(o.componentChunkName)),y.sort(R),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:_}},getPages:function(){return{pathArray:h,pathCount:b}},getPage:function(e){return l(e)},has:function(e){return h.some(function(n){return n===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};P&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(l(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,o=!1,t=void 0;try{for(var s,a=(0,r.default)(e);!(n=(s=a.next()).done);n=!0){var u=s.value;u.unregister()}}catch(e){o=!0,t=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw t}}window.location.reload()})),P=!1;var t=l(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,g[e])return n.nextTick(function(){o(g[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:g[e]})}),g[e];i.default.emit("onPreLoadPageResources",{path:e});var s=void 0,a=void 0,u=function(){if(s&&a){g[e]={component:s,json:a};var n={component:s,json:a};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return k(t.componentChunkName,function(e,n){e&&console.log("Loading the component for "+t.path+" failed"),s=n,u()}),void k(t.jsonName,function(e,n){e&&console.log("Loading the JSON for "+t.path+" failed"),a=n,u()})},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};e.exports=N}).call(n,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-page-2-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],s=[],r=function(){var e=n();e&&(s.push(e),o(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,i.default)("onRouteUpdate",{location:e,action:n})}))}function r(e,n){var o=n.location.pathname,t=(0,i.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===o)return!1}return!0}var a=o("./node_modules/babel-runtime/helpers/extends.js"),u=t(a),d=o("./.cache/api-runner-browser.js"),i=t(d),l=o("./node_modules/react/react.js"),c=t(l),p=o("./node_modules/react-dom/index.js"),g=t(p),m=o("./node_modules/react-router-dom/index.js"),f=o("./node_modules/react-router-scroll/lib/index.js"),j=o("./node_modules/history/createBrowserHistory.js"),h=t(j),b=o("./.cache/emitter.js"),y=t(b),_=o("./.cache/pages.json"),x=t(_),v=o("./.cache/component-renderer.js"),P=t(v),R=o("./.cache/async-requires.js"),w=t(R),E=o("./.cache/loader.js"),k=t(E);window.___emitter=y.default,k.default.addPagesArray(x.default),k.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=k.default,window.matchPath=m.matchPath,(0,i.default)("onClientEntry"),(0,i.default)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var U=function(e){function n(t){t.page.path===k.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=U;var N=(0,h.default)();(0,i.default)("onRouteUpdate",{location:N.location,action:N.action});var C=(0,i.default)("replaceRouterComponent",{history:N})[0],T=function(e){var n=e.children;return c.default.createElement(m.BrowserRouter,{history:N},n)},S=function(e){w.default.layouts.index?w.default.layouts.index(function(n,o){var t=o();e(t)}):e(function(e){return c.default.createElement("div",null,e.children())})};S(function(e){k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,l.createElement)(C?C:T,null,(0,l.createElement)(f.ScrollContext,{shouldUpdateScroll:r},(0,l.createElement)((0,m.withRouter)(e),{children:function(e){return(0,l.createElement)(m.Route,{render:function(n){s(n.history);var o=e?e:n;return k.default.getPage(o.location.pathname)?(0,l.createElement)(P.default,(0,u.default)({},o)):(0,l.createElement)(P.default,{location:{pathname:"/404.html"}})}})}})))},o=(0,i.default)("wrapRootComponent",{Root:n},n)[0];g.default.render(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./.cache/emitter.js"),r=t(s),a="/";a=void 0,"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),s=o.e,r=o.s;o.e=function(t,a){var u=!1,d=!0,i=function(e){a&&(a(o,e),a=null)};return!r&&n&&n[t]?void i(!0):(s(t,function(){u||(u=!0,d?setTimeout(function(){i()}):i())}),void(u||(d=!1,e(function(){u||(u=!0,r?r[t]=void 0:(n||(n={}),n[t]=!0),i(!0))}))))}}t()},"./node_modules/mitt/dist/mitt.js":function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(n,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(l===setTimeout)return setTimeout(e,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function r(e){if(c===clearTimeout)return clearTimeout(e);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(n){try{return c.call(null,e)}catch(n){return c.call(this,e)}}}function a(){f&&g&&(f=!1,g.length?m=g.concat(m):j=-1,m.length&&u())}function u(){if(!f){var e=s(a);f=!0;for(var n=m.length;n;){for(g=m,m=[];++j<n;)g&&g[j].run();j=-1,n=m.length}g=null,f=!1,r(e)}}function d(e,n){this.fun=e,this.array=n}function i(){}var l,c,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(e){l=o}try{c="function"==typeof clearTimeout?clearTimeout:t}catch(e){c=t}}();var g,m=[],f=!1,j=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];m.push(new d(e,n)),1!==m.length||f||s(u)},d.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=i,p.addListener=i,p.once=i,p.off=i,p.removeListener=i,p.removeAllListeners=i,p.emit=i,p.prependListener=i,p.prependOnceListener=i,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(1,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/corjen/Projects/playground/test-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(8,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/corjen/Projects/playground/test-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(3,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/corjen/Projects/playground/test-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-page-2-js!./src/pages/page-2.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(2,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/corjen/Projects/playground/test-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/corjen/Projects/playground/test-gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}}});
//# sourceMappingURL=app-ebd45ed62042baed3c3a.js.map