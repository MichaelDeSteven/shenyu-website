"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18783],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35028:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={title:"A multilingual HTTP client",keywords:["Http Client"],description:"A multilingual HTTP client"},u=void 0,c={unversionedId:"developer/developer-shenyu-client",id:"version-2.4.2/developer/developer-shenyu-client",isDocsHomePage:!1,title:"A multilingual HTTP client",description:"A multilingual HTTP client",source:"@site/versioned_docs/version-2.4.2/developer/developer-shenyu-client.md",sourceDirName:"developer",slug:"/developer/developer-shenyu-client",permalink:"/docs/2.4.2/developer/developer-shenyu-client",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/developer/developer-shenyu-client.md",version:"2.4.2",frontMatter:{title:"A multilingual HTTP client",keywords:["Http Client"],description:"A multilingual HTTP client"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Debug and run agent module locally",permalink:"/docs/2.4.2/developer/debug-agent"},next:{title:"File Upload And Download",permalink:"/docs/2.4.2/developer/file-and-image"}},p=[{value:"Description",id:"description",children:[]},{value:"Customize Http Client",id:"customize-http-client",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This document focuses on how to access gateways for ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP")," services in other languages."),(0,o.kt)("li",{parentName:"ul"},"How to customize the development of ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-http-client"),".")),(0,o.kt)("h2",{id:"customize-http-client"},"Customize Http Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Method: ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ul"},"Request Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://soul-admin/soul-client/springmvc-register"),", shenyu-admin represents ",(0,o.kt)("inlineCode",{parentName:"li"},"IP + Port")," of admin"),(0,o.kt)("li",{parentName:"ul"},"Request Params\uff1apassing ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," type parameters through the body.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "appName": "xxx", //required\n    "context": "/xxx", //required\n    "path": "xxx", //required\n    "pathDesc": "xxx", \n    "rpcType": "http", //required\n    "host": "xxx", //required\n    "port": xxx, //required\n    "ruleName": "xxx", //required\n    "enabled": "true", //required\n    "registerMetaData": "true" //required\n}\n')))}d.isMDXComponent=!0}}]);