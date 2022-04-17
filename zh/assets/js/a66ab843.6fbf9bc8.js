"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[82160],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,m=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return t?r.createElement(m,l(l({ref:n},g),{},{components:t})):r.createElement(m,l({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},77225:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return g}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],a={title:"Logging\u63d2\u4ef6",keywords:["logging"],description:"logging\u63d2\u4ef6"},u=void 0,c={unversionedId:"plugin-center/observability/logging-plugin",id:"plugin-center/observability/logging-plugin",isDocsHomePage:!1,title:"Logging\u63d2\u4ef6",description:"logging\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/logging-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-plugin",permalink:"/zh/docs/next/plugin-center/observability/logging-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/logging-plugin.md",version:"current",frontMatter:{title:"Logging\u63d2\u4ef6",keywords:["logging"],description:"logging\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Waf\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/authority-and-certification/waf-plugin"},next:{title:"Logging-RocketMQ\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/observability/logging-rocketmq"}},g=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[]}],p={toc:g};function s(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5728\u5bf9\u76ee\u6807\u670d\u52a1\u8c03\u7528\u7684\u65f6\u5019\uff0c\u8fd8\u5bb9\u8bb8\u7528\u6237\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"logging")," \u63d2\u4ef6\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u672c\u6b21\u8bf7\u6c42\u4fe1\u606f\uff0c\u5305\u542b\u8bf7\u6c42\u8def\u5f84\u3001\u8bf7\u6c42\u65b9\u6cd5\u3001\u8bf7\u6c42\u53c2\u6570\u548c\u54cd\u5e94\u5934\u3001\u54cd\u5e94\u4f53\u7b49\u4fe1\u606f\u3002")),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"--\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,o.kt)("inlineCode",{parentName:"p"},"logging")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u628a\u63d2\u4ef6\u7981\u7528\u3002"))),(0,o.kt)("img",{src:"/img/shenyu/plugin/logging/logging_open.png",width:"70%",height:"60%"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"li"},"logging")," \u7684\u652f\u6301\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu debug plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-logging</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu debug plugin end--\x3e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003: ",(0,o.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u5e76\u4e14\u914d\u7f6e\u89c4\u5219\u624d\u4f1a\u6253\u5370\u672c\u6b21\u8bf7\u6c42\u76f8\u5173\u4fe1\u606f\u3002")),(0,o.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u65f6\u8c03\u8bd5\u6216\u8005\u7ebf\u4e0a\u6392\u67e5\u95ee\u9898\u7b49\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u5728\u7f51\u5173\u4fa7\u67e5\u770b\u672c\u6b21\u8bf7\u6c42\u5728\u8f6c\u53d1\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5982\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\u6216\u54cd\u5e94\u5934\u3001\u54cd\u5e94\u4f53\u7b49\u3002")))}s.isMDXComponent=!0}}]);