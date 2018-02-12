webpackJsonp(["Chat"],{"./node_modules/lodash/_arrayIncludesWith.js":function(e,t){function s(e,t,s){for(var r=-1,n=null==e?0:e.length;++r<n;)if(s(t,e[r]))return!0;return!1}e.exports=s},"./node_modules/lodash/_baseUniq.js":function(e,t,s){function r(e,t,s){var r=-1,l=a,h=e.length,m=!0,f=[],p=f;if(s)m=!1,l=o;else if(h>=u){var _=t?null:i(e);if(_)return d(_);m=!1,l=c,p=new n}else p=t?[]:f;e:for(;++r<h;){var j=e[r],x=t?t(j):j;if(j=s||0!==j?j:0,m&&x===x){for(var w=p.length;w--;)if(p[w]===x)continue e;t&&p.push(x),f.push(j)}else l(p,x,s)||(p!==f&&p.push(x),f.push(j))}return f}var n=s("./node_modules/lodash/_SetCache.js"),a=s("./node_modules/lodash/_arrayIncludes.js"),o=s("./node_modules/lodash/_arrayIncludesWith.js"),c=s("./node_modules/lodash/_cacheHas.js"),i=s("./node_modules/lodash/_createSet.js"),d=s("./node_modules/lodash/_setToArray.js"),u=200;e.exports=r},"./node_modules/lodash/_createSet.js":function(e,t,s){var r=s("./node_modules/lodash/_Set.js"),n=s("./node_modules/lodash/noop.js"),a=s("./node_modules/lodash/_setToArray.js"),o=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:n;e.exports=o},"./src/chat/helpers/urls.ts":function(e,t,s){"use strict";s.d(t,"c",function(){return r}),s.d(t,"b",function(){return n}),s.d(t,"a",function(){return a}),s.d(t,"f",function(){return o}),s.d(t,"g",function(){return c}),s.d(t,"e",function(){return i}),s.d(t,"d",function(){return d});var r=function(e){return"/chat/user_id/"+e},n=function(e){return"/chat/channel/"+e},a=function(e,t){return"/chat/channel/"+e+"/"+t},o="/chat/minimize/",c="/chat/",i=function(e,t,s){return{pathname:"/chat/channel/"+e+"/"+t+"/"+s,state:{isOverlay:!0}}},d=function(e){return new RegExp("reddit.com").test(e)?e.replace(/^.+reddit.com(\/r\/.+?\/).*$/g,"$1"):""}},"./src/chat/index.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/history/index.js"),n=(s.n(r),s("./node_modules/js-cookie/src/js.cookie.js")),a=s.n(n),o=s("./node_modules/redux-thunk/lib/index.js"),c=s.n(o),i=s("./src/lib/constants/index.ts"),d=s("./src/lib/initializeClient/index.tsx"),u=s("./src/lib/matchRoute/index.ts"),l=s("./src/reduxMiddleware/apiContext.ts"),h=s("./src/chat/actions/platform.ts"),m=s("./src/chat/actions/session.ts"),f=s("./src/chat/actions/user.ts"),p=s("./src/chat/components/Root/index.tsx"),_=s("./src/chat/customMiddleware/containerSize.ts"),j=s("./src/chat/customMiddleware/heartbeat.ts"),x=s("./src/chat/customMiddleware/iframeDispatcher.ts"),w=s("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),b=s("./src/chat/customMiddleware/sendbirdToken.ts"),v=s("./src/chat/customMiddleware/title.ts"),g=s("./src/chat/customMiddleware/tokenRefresher.ts"),y=s("./src/chat/customMiddleware/tracking.ts"),M=s("./src/chat/customMiddleware/unreadMessageCount.ts"),R=s("./src/chat/pageLoaders/async.ts"),k=s("./src/chat/reducers/index.ts"),O=s("./src/chat/routes/index.ts"),C=s("./src/chat/selectors/app.ts"),S=Date.now(),A=Object(l.a)({actionDispatchers:{reddaidReceived:f.l,loidReceived:f.k,sessionTrackerReceived:f.o},cookies:a.a,receivedActions:{loidReceived:f.b,reddaidReceived:f.c,sessionTrackerReceived:f.d,userAuthenticated:m.a,userLoggedOut:m.b,userReauthenticated:m.c},statsAppName:i.k.Chat});Object(d.a)({pageLoader:R.a,reducers:k.a,routes:O.a,apiContext:A.apiContext,appFactory:p.a,appName:i.k.Chat,history:function(){return Object(C.b)()?Object(r.createMemoryHistory)({initialEntries:[window.location.pathname],initialIndex:0}):Object(r.createBrowserHistory)()}(),adsDisabled:!0,customMiddleware:[c.a.withExtraArgument({routes:O.a,apiContext:A.apiContext}),A.middleware,g.a,b.a,x.a,j.a,w.a,Object(y.a)(S),_.a,M.a,v.a],staticPages:{error:function(){throw new Error("Not Implemented: Error Static Page")},loading:function(){return null}},preRender:function(e){var t=e.browserHistory,s=e.routes,n=e.store,a=function(e,t){var a=Object(u.a)(Object(r.createPath)(e),s);n.dispatch(Object(h.d)(e,t,a))};t.listen(a)},postRender:function(e){var t=e.browserHistory,s=(e.routes,e.store,function(e,t){});t.listen(s)},timingsSampleRate:1})}},["./src/chat/index.tsx"]);
//# sourceMappingURL=Chat.a9e111c24ca07671ea3e.js.map