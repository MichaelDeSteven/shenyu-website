"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[86444],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),a=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=a(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var a=2;a<c;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24075:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return s}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),l=["components"],p={sidebar_position:3,title:"Docker-compose \u90e8\u7f72",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},i=void 0,a={unversionedId:"deployment/deployment-docker-compose",id:"deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker-compose \u90e8\u7f72",description:"Docker-compose Deployment",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/zh/docs/next/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-docker-compose.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker-compose \u90e8\u7f72",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-package"},next:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-docker"}},s=[{value:"\u4e0b\u8f7d shell \u811a\u672c",id:"\u4e0b\u8f7d-shell-\u811a\u672c",children:[]},{value:"\u6267\u884c\u811a\u672c",id:"\u6267\u884c\u811a\u672c",children:[]},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u6267\u884c docker-compose",id:"\u6267\u884c-docker-compose",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u6765\u90e8\u7f72 ",(0,c.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,c.kt)("h3",{id:"\u4e0b\u8f7d-shell-\u811a\u672c"},"\u4e0b\u8f7d shell \u811a\u672c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh\n")),(0,c.kt)("h3",{id:"\u6267\u884c\u811a\u672c"},"\u6267\u884c\u811a\u672c"),(0,c.kt)("p",null,"\u8fd9\u4e2a\u811a\u672c\u4f1a\u4e0b\u8f7d\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3001mysql-connector\uff0c\u5982\u679c\u53d1\u73b0\u4e0b\u8f7d\u5931\u8d25\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./install.sh #\u9ed8\u8ba4\u62c9\u53d6\u6700\u65b0\u914d\u7f6e\uff0c\u5982\u679c\u9700\u8981\u90e8\u7f72\u5df2\u53d1\u5e03\u7248\u672c\uff0c\u53ef\u589e\u52a0\u4e00\u4e2a\u53c2\u6570\u8868\u793a\u7248\u672c\u53f7\uff0c\u6bd4\u5982\uff1av2.4.2 \u6216 latest\n")),(0,c.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,c.kt)("p",null,"\u53ef\u4ee5\u4fee\u6539\u811a\u672c\u4e0b\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,c.kt)("h3",{id:"\u6267\u884c-docker-compose"},"\u6267\u884c docker-compose"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-${VERSION}/docker-compose.yaml up -d\n")))}d.isMDXComponent=!0}}]);