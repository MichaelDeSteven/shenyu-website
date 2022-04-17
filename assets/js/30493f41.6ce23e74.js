"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[75623],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86677:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Custom Metrics Monitor",keywords:["MetricsMonitor"],description:"custom Metrics Monitor"},s=void 0,p={unversionedId:"developer/spi/custom-metrics-monitor",id:"developer/spi/custom-metrics-monitor",isDocsHomePage:!1,title:"Custom Metrics Monitor",description:"custom Metrics Monitor",source:"@site/docs/developer/spi/custom-metrics-monitor.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-metrics-monitor",permalink:"/docs/next/developer/spi/custom-metrics-monitor",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/developer/spi/custom-metrics-monitor.md",version:"current",frontMatter:{title:"Custom Metrics Monitor",keywords:["MetricsMonitor"],description:"custom Metrics Monitor"},sidebar:"tutorialSidebar",previous:{title:"Custom Match Mode",permalink:"/docs/next/developer/spi/custom-match-mode"},next:{title:"Custom Parameter Data",permalink:"/docs/next/developer/spi/custom-parameter-data"}},l=[{value:"Explanation",id:"explanation",children:[]},{value:"Extension",id:"extension",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before custom development, please customize and build the gateway environment first, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"../deployment-custom"},"custom deployment"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This article describes how to customize the extension of  ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.metrics.spi.MetricsBootService"),"."))),(0,o.kt)("h2",{id:"extension"},"Extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new project and introduce the following dependencies:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new class ",(0,o.kt)("inlineCode",{parentName:"li"},"${you class}"),"\uff0cimplements ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.metrics.spi.MetricsBootService"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"public class ${you class} implements MetricsBootService {\n   \n    /**\n     * Start metrics tracker.\n     *\n     * @param metricsConfig metrics config\n     * @param metricsRegister the metrics register\n     */\n    public void start(MetricsConfig metricsConfig, MetricsRegister metricsRegister){\n                //your code\n    }\n    \n    /**\n     * Stop metrics tracker.\n     */\n    public void stop() {\n        //your code\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the project  ",(0,o.kt)("inlineCode",{parentName:"li"},"resources")," directory\uff0cCreate a new ",(0,o.kt)("inlineCode",{parentName:"li"},"META-INF/shenyu")," directory\uff0c and the new file name is : ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.metrics.spi.MetricsBootService"),".\nadd ",(0,o.kt)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Package the project and copy it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," service ---\x3e BasicConfig ---\x3e Plugin ,  Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Monitor")," plugin,  edit config, pay attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"metricsName")," name: ",(0,o.kt)("inlineCode",{parentName:"p"},"${you spi name}"),"."))),(0,o.kt)("img",{src:"/img/shenyu/custom/custom-metrics-monitor-en.jpg",width:"40%",height:"30%"}))}m.isMDXComponent=!0}}]);