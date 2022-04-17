"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[80611],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||l[d]||p;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,i=new Array(p);i[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95953:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],o={title:"Quick start with Http",description:"Quick start with http"},s=void 0,c={unversionedId:"quick-start/quick-start-http",id:"version-2.4.3/quick-start/quick-start-http",isDocsHomePage:!1,title:"Quick start with Http",description:"Quick start with http",source:"@site/versioned_docs/version-2.4.3/quick-start/quick-start-http.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-http",permalink:"/docs/quick-start/quick-start-http",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.3/quick-start/quick-start-http.md",version:"2.4.3",frontMatter:{title:"Quick start with Http",description:"Quick start with http"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Quick start with gRPC",permalink:"/docs/quick-start/quick-start-grpc"},next:{title:"Quick start with Motan",permalink:"/docs/quick-start/quick-start-motan"}},u=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-http project",id:"run-the-shenyu-examples-http-project",children:[]},{value:"Test",id:"test",children:[]}],l={toc:u};function h(t){var e=t.components,o=(0,a.Z)(t,i);return(0,p.kt)("wrapper",(0,r.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Http. You can get the code example of this document by clicking ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-http"},"here"),"."),(0,p.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,p.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,p.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,p.kt)("p",null,"After successful startup, you need to open the Divide plugin on in the BasicConfig ",(0,p.kt)("inlineCode",{parentName:"p"},"->")," Plugin. In the Apache ShenYu gateway, the HTTP request is handled by the Divide plugin."),(0,p.kt)("img",{src:"/img/shenyu/quick-start/http/http_open_en.png",width:"60%",height:"50%"}),(0,p.kt)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.")),(0,p.kt)("p",null,"Add the following dependencies to the gateway's ",(0,p.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--if you use http proxy start this--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,p.kt)("h2",{id:"run-the-shenyu-examples-http-project"},"Run the shenyu-examples-http project"),(0,p.kt)("p",null,"Download ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,p.kt)("p",null,"Execute the ",(0,p.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.http.ShenyuTestHttpApplication")," main method to start project."),(0,p.kt)("p",null,"Since ",(0,p.kt)("inlineCode",{parentName:"p"},"2.4.3"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu.client.http.props.port")," can be non-configured if you like."),(0,p.kt)("p",null,"The following log appears when the startup is successful:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 00:57:07.561  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/test/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/test/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.577  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/save","pathDesc":"Save order","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/save","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.587  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**/name","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**/name","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.596  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/findById","pathDesc":"Find by id","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/findById","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.606  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:08.023  INFO 3700 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8188\n2021-02-10 00:57:08.026  INFO 3700 --- [           main] o.d.s.e.http.ShenyuTestHttpApplication     : Started ShenyuTestHttpApplication in 2.555 seconds (JVM running for 3.411) \n')),(0,p.kt)("h2",{id:"test"},"Test"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http")," project will automatically register interface methods annotated with ",(0,p.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," in the Apache ShenYu gateway after successful startup."),(0,p.kt)("p",null,"Open PluginList -> Proxy -> divide to see the list of plugin rule configurations:"),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(91029).Z})),(0,p.kt)("p",null,"Use PostMan to simulate HTTP to request your http service:"),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(42064).Z})),(0,p.kt)("p",null,"Use IDEA HTTP Client Plugin to simulate HTTP to request your http service","[local:no Shenyu proxy]",":"),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(16515).Z})),(0,p.kt)("p",null,"Use IDEA HTTP Client Plugin to simulate HTTP to request your http service","[Shenyu proxy]",":"),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(10477).Z})))}h.isMDXComponent=!0},16515:function(t,e,n){e.Z=n.p+"assets/images/idea-http-test-local-3e6960c11dc2bd689ec5276b5e219ce3.png"},10477:function(t,e,n){e.Z=n.p+"assets/images/idea-http-test-proxy-bf5aad9695bc73dc71565ea308ad1ef1.png"},42064:function(t,e,n){e.Z=n.p+"assets/images/postman-test-ffc28736280dc05a51162a4db2a0a7df.png"},91029:function(t,e,n){e.Z=n.p+"assets/images/rule-list-44d335cb7d35496ced765ebf3751ac55.png"}}]);