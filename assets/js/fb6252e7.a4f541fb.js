"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[19486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73119:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:1,title:"Apache ShenYu Admin Database Design",keywords:["db"],description:"Database Design"},s=void 0,u={unversionedId:"design/database-design",id:"version-2.4.0/design/database-design",isDocsHomePage:!1,title:"Apache ShenYu Admin Database Design",description:"Database Design",source:"@site/versioned_docs/version-2.4.0/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/docs/2.4.0/design/database-design",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/design/database-design.md",version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Apache ShenYu Admin Database Design",keywords:["db"],description:"Database Design"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Apache ShenYu Introduction",permalink:"/docs/2.4.0/index"},next:{title:"Data Synchronization Design",permalink:"/docs/2.4.0/design/data-sync"}},p=[{value:"Plugin, Selector And Rule",id:"plugin-selector-and-rule",children:[]},{value:"Resource Permission",id:"resource-permission",children:[]},{value:"Data Permissin",id:"data-permissin",children:[]},{value:"Meta Data",id:"meta-data",children:[]},{value:"Dictionary Management",id:"dictionary-management",children:[]}],d={toc:p};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Shenyu Admin is the management system of the gateway, which can manage all plugins, selectors and rules visually, set users, roles and resources."),(0,r.kt)("h2",{id:"plugin-selector-and-rule"},"Plugin, Selector And Rule"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Plugin: ShenYu uses the plugin design idea to realize the hot plug of the plugin, which is easy to expand. Built-in rich plugins, including RPC proxy, circuit breaker and current limiting, authority and certification, monitoring, and more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selector: Each plugin can set multiple selectors to carry out preliminary filtering of traffic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rule: Multiple rules can be set per selector for more fine-grained control of flow.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Database Table UML Diagram:"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60867).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Detailed design:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One plugin corresponds to multiple selectors,one selector corresponds to multiple rules.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One selector corresponds to multiple match conditions,one rule corresponds to multiple match conditions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each rule handles differently in corresponding plugin according to field handler,field handler is a kind of data of JSON string type.You can view detail during the use of shenyu-admin."))))),(0,r.kt)("h2",{id:"resource-permission"},"Resource Permission"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The resource are the menus and buttons in the shenyu-admin console.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resource Permission use database to store user name,role,resource data and relationship. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Resource Permission Table UML Diagram:\n",(0,r.kt)("img",{src:n(19257).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Detailed design:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"one user corresponds to multiple role,one role corresponds to multiple resources.")))),(0,r.kt)("h2",{id:"data-permissin"},"Data Permissin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Permission use database to store the relationship between users, selectors and rules.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Data Permission Table UML Diagram:\n",(0,r.kt)("img",{alt:"data perission uml",src:n(27899).Z})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Detailed design:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The most important table is ",(0,r.kt)("inlineCode",{parentName:"li"},"data_permission"),", where a user corresponds to multiple data permissions."),(0,r.kt)("li",{parentName:"ul"},"The field ",(0,r.kt)("inlineCode",{parentName:"li"},"data_type")," distinguishes between different types of data, which corresponds to the following: 0 -> selector, 1 -> rule."),(0,r.kt)("li",{parentName:"ul"},"The field ",(0,r.kt)("inlineCode",{parentName:"li"},"data_id")," holds the primary key id of the corresponding type.")))),(0,r.kt)("h2",{id:"meta-data"},"Meta Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata is used for generic invoke by gateway."),(0,r.kt)("li",{parentName:"ul"},"For each interface method, there is one piece of metadata."),(0,r.kt)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,r.kt)("img",{src:"/img/shenyu/db/mata_data_table.png",width:"30%",height:"30%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Detailed design\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path"),": When the gateway is requested, a piece of data will be matched according to ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", and then the subsequent process will be carried out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rpc_ext"),": Used to hold extended information for the RPC proxy.\u3002"))))),(0,r.kt)("h2",{id:"dictionary-management"},"Dictionary Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dictionary management is used to maintain and manage public data dictionaries."),(0,r.kt)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,r.kt)("img",{src:"/img/shenyu/db/shenyu_dict.png",width:"30%",height:"30%"}))}c.isMDXComponent=!0},27899:function(e,t,n){t.Z=n.p+"assets/images/data_permission-f382375f134eeb359e481ee2cd43482d.png"},60867:function(e,t,n){t.Z=n.p+"assets/images/shenyu-db-0847449c4fb817f83e61abad7125ae4a.png"},19257:function(e,t,n){t.Z=n.p+"assets/images/shenyu-permission-db-90c870eefea0da663079cdf6638c7ce7.png"}}]);