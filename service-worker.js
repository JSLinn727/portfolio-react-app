"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e84fc5b666b943440620841139b3a616"],["/static/css/main.c6e0fb2e.css","e94824d6f2d7e6ee319dad241b093cac"],["/static/js/main.1a61cfc2.js","dee24b1ea002c806d28b311299efac56"],["/static/media/LHLogo.3b9b527e.png","3b9b527e128b75084a819992d113bb44"],["/static/media/apple.7d9e6709.png","7d9e670909f092d2e13940c6dba8dd79"],["/static/media/board.f530682c.gif","f530682ce756bc2a955a89f8aeffd5ca"],["/static/media/calcJS.a0e30e03.png","a0e30e032b793717b00514b38236dc8a"],["/static/media/ciaIcon.8931fc2c.png","8931fc2c2a18ee6337b0c397e223bc1a"],["/static/media/css.eff1166f.svg","eff1166f94be4ed458e33fc7810b34ec"],["/static/media/dali.cc5672d1.png","cc5672d151c1e45aec39f6e74679452b"],["/static/media/droidIcon.3e40a1ae.png","3e40a1aee765c75c6db0d3ff67f57111"],["/static/media/headshot.3342fe62.jpg","3342fe62c2f53133bcdd22caab2e1150"],["/static/media/iBeer.b6367bfe.png","b6367bfed8b4ad4dcd21ee14a9e3a433"],["/static/media/itunes.769d1687.png","769d168722bc46cde7f685ad82e4f418"],["/static/media/javascript.539f181e.svg","539f181ef5b698026596bcc912f3a958"],["/static/media/node.26cb65bd.svg","26cb65bd90666a1645d519adb1c98db0"],["/static/media/potterylogo.8153fa3c.png","8153fa3cfdce27de2d7ac512ab94b5ce"],["/static/media/react.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/stickyNoteIcon.0b7ff7e9.png","0b7ff7e9973b4b3c71a111cda1485319"],["/static/media/swicon.69bff6e2.png","69bff6e2de016b708eeae7707b552ac8"],["/static/media/themeSwitcher.96b7334d.png","96b7334d5e4e1299b868e39119ce8c13"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});