if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"stats"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.acab1baa.css",revision:null},{url:"/css/app.c934d2f4.css",revision:null},{url:"/css/chunk-vendors.fe7b80f8.css",revision:null},{url:"/img/logo.0ca2ec01.svg",revision:null},{url:"/index.html",revision:"601dabcbeea98e9bea07e2c9318f79bd"},{url:"/js/about.e4c587c5.js",revision:null},{url:"/js/app.0a3e4c29.js",revision:null},{url:"/js/chunk-vendors.e7cab5e3.js",revision:null},{url:"/manifest.json",revision:"67786d087ff2eedc4b3cf782fd038789"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
