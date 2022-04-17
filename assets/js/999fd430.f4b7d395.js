"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32056],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88767:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:15,title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},c=void 0,u={unversionedId:"plugins/redirect-plugin",id:"version-2.3.0/plugins/redirect-plugin",isDocsHomePage:!1,title:"Redirect Plugin",description:"redirect plugin",source:"@site/versioned_docs/version-2.3.0/plugins/redirect-plugin.md",sourceDirName:"plugins",slug:"/plugins/redirect-plugin",permalink:"/docs/2.3.0/plugins/redirect-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/redirect-plugin.md",version:"2.3.0",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"ContextPath Plugin",permalink:"/docs/2.3.0/plugins/context-path-plugin"},next:{title:"Filter Extension",permalink:"/docs/2.3.0/developer-guide/custom-filter"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Maven Dependency",id:"maven-dependency",children:[]},{value:"Situation",id:"situation",children:[{value:"Redirect",id:"redirect",children:[]},{value:"Gateway&#39;s own interface forwarding",id:"gateways-own-interface-forwarding",children:[]}]}],s={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"When the soul gateway makes proxy calls to the target service, it also allows users to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," plugin to redirect requests."),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"redirect")," ,set to enable\u3002"),(0,a.kt)("li",{parentName:"ul"},"Introduce ",(0,a.kt)("inlineCode",{parentName:"li"},"redirect")," support in the pox.xml file of the gateway."),(0,a.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background."),(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, only matching requests will be forwarded and redirected, please see: ",(0,a.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"Selector rules"),"\u3002")),(0,a.kt)("h2",{id:"maven-dependency"},"Maven Dependency"),(0,a.kt)("p",null,"Add the plugin dependency in the pom.xml file of the soul-bootstrap project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul redirect plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-redirect</artifactId>\n     <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul redirect plugin end--\x3e\n")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As the name suggests, the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," plugin is to re-forward and redirect ",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),".")),(0,a.kt)("h3",{id:"redirect"},"Redirect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When we configure a custom path in ",(0,a.kt)("inlineCode",{parentName:"li"},"Rule"),", it should be a reachable service path."),(0,a.kt)("li",{parentName:"ul"},"When the request is matched, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Soul Gateway")," will perform the ",(0,a.kt)("inlineCode",{parentName:"li"},"308")," service jump according to the customized path.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Redirect",src:n(74555).Z})),(0,a.kt)("h3",{id:"gateways-own-interface-forwarding"},"Gateway's own interface forwarding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the matching rules are met, the service will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"DispatcherHandler")," internal interface for forwarding."),(0,a.kt)("li",{parentName:"ul"},"To implement the gateway's own interface forwarding, we need to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," as the prefix in the configuration path. The specific configuration is as shown in the figure below.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forwarding",src:n(25712).Z})))}d.isMDXComponent=!0},74555:function(e,t,n){t.Z=n.p+"assets/images/redirect-01-8f1507e5451cd9246539f456752ce69e.png"},25712:function(e,t,n){t.Z=n.p+"assets/images/redirect-02-66fdb33f7e936df0371f887317ac93cb.png"}}]);