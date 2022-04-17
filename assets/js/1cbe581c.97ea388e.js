"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90646],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5950:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:4,title:"Sofa Plugin",keywords:["sofa"],description:"sofa access soul gateway"},s=void 0,u={unversionedId:"plugins/sofa-plugin",id:"version-2.3.0/plugins/sofa-plugin",isDocsHomePage:!1,title:"Sofa Plugin",description:"sofa access soul gateway",source:"@site/versioned_docs/version-2.3.0/plugins/sofa-plugin.md",sourceDirName:"plugins",slug:"/plugins/sofa-plugin",permalink:"/docs/2.3.0/plugins/sofa-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/sofa-plugin.md",version:"2.3.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Sofa Plugin",keywords:["sofa"],description:"sofa access soul gateway"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"SpringCloud Plugin",permalink:"/docs/2.3.0/plugins/spring-cloud-plugin"},next:{title:"RateLimiter Plugin",permalink:"/docs/2.3.0/plugins/rate-limiter-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Settings",id:"plugin-settings",children:[]},{value:"Plugin Metadata",id:"plugin-metadata",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The sofa plug-in is a plug-in that converts the HTTP protocol into the sofa protocol, and it is also the key to the gateway to realize the sofa generalization call."),(0,i.kt)("li",{parentName:"ul"},"sThe sofa plug-in needs to cooperate with metadata to realize the call of Dubbo. Please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../design/meta-data"},"Metadata"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-sofa</artifactId>\n    <version>${last.version}</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"plugin-settings"},"Plugin Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, go to ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plug-in management->  setting ",(0,i.kt)("inlineCode",{parentName:"li"},"sofa")," is open."),(0,i.kt)("li",{parentName:"ul"},"Then, in the configuration of sofa plug-in, config sofa's register center like this: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"protocol":"zookeeper","register":"127.0.0.1:2181"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The plug-in needs to be used with a dependent ",(0,i.kt)("inlineCode",{parentName:"p"},"starter"),". For details, please see: ",(0,i.kt)("a",{parentName:"p",href:"../users-guide/sofa-rpc-proxy"},"user-sofa"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selector's rules\uff0csee : ",(0,i.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"selector"),"\u3002"))),(0,i.kt)("h2",{id:"plugin-metadata"},"Plugin Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each sofa interface method corresponds to a piece of metadata, which can be viewed in the soul-admin > metadata management."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),": It's your http urls."),(0,i.kt)("li",{parentName:"ul"},"RPC extension parameter, corresponding to some configuration of sofa interface.If you wanna be modify it, please modify it here. Support JSON format. The following fields:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"loadbalance":"hash","retries":3,"timeout":-1}\n')))}d.isMDXComponent=!0}}]);