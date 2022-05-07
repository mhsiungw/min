"use strict";(self.webpackChunkmin_s_blog=self.webpackChunkmin_s_blog||[]).push([[947],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var l=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=l.createContext({}),d=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return l.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,b=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return t?l.createElement(b,o(o({ref:n},u),{},{components:t})):l.createElement(b,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=s;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<r;d++)o[d]=t[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9545:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var l=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],a={title:"The Box Model",slug:"the-box-model",keywords:["box-model"]},p="The Box Model",d={unversionedId:"CSS/the-box-model",id:"CSS/the-box-model",title:"The Box Model",description:"\u8a18\u9304\u76d2\u6a21\u578b\u7684\u5b9a\u7fa9\u8207\u76f8\u95dc\u77e5\u8b58",source:"@site/docs/01-CSS/01-the-box-model.md",sourceDirName:"01-CSS",slug:"/CSS/the-box-model",permalink:"/CSS/the-box-model",editUrl:"https://github.com/mhsiungw/minhsiungw.github.io/edit/main/docs/01-CSS/01-the-box-model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"The Box Model",slug:"the-box-model",keywords:["box-model"]},sidebar:"tutorialSidebar",next:{title:"CSS",permalink:"/CSS/css"}},u={},c=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"<code>block</code>",id:"block",level:2},{value:"<code>inline</code>",id:"inline",level:2},{value:"<code>inline-block</code>",id:"inline-block",level:2},{value:"Inner Display",id:"inner-display",level:2},{value:"Margin Collapsing",id:"margin-collapsing",level:2},{value:"Padding",id:"padding",level:2}],s={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-box-model"},"The Box Model"),(0,r.kt)("p",null,"\u8a18\u9304\u76d2\u6a21\u578b\u7684\u5b9a\u7fa9\u8207\u76f8\u95dc\u77e5\u8b58"),(0,r.kt)("h2",{id:"\u5b9a\u7fa9"},"\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u7db2\u9801\u662f\u7531\u4e00\u500b\u53c8\u4e00\u500b\u7684 HTML \u5143\u7d20\u5f62\u6210\uff0c\u800c\u5143\u7d20\u53c8\u662f\u7531 content, padding, border \u8207 margin \u5f62\u6210\uff0c\u800c\u9019\u56db\u500b property \u5408\u5728\u4e00\u8d77\uff0c\u7a31\u70ba\u4e00\u500b\u76d2\u6a21\u578b\u3002\n\u76d2\u6a21\u578b\u53c8\u5206\u70ba Outer Display \u548c Inner Display\u3002"),(0,r.kt)("p",null,"Outer Display \u4e3b\u8981\u9650\u5236\u5143\u7d20\u672c\u8eab\u7684\u884c\u70ba\uff0c\u800c Inner Display \u9650\u5236\u5143\u7d20\u5e95\u4e0b\u5b50\u5143\u7d20\u7684\u884c\u70ba\u3002"),(0,r.kt)("p",null,"Outer Display \u5206\u70ba\u4e09\u7a2e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"block")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"inline")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"inline-block"))),(0,r.kt)("h2",{id:"block"},(0,r.kt)("inlineCode",{parentName:"h2"},"block")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The box will break onto a new line. \u6703\u63db\u884c"),(0,r.kt)("li",{parentName:"ul"},"The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available. \u6703\u4f54\u64da\u7236\u5143\u7d20\u7684\u6240\u6709\u5bec\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"The width and height properties are respected. \u53ef\u4ee5\u8a2d\u5b9a\u5bec\u5ea6\u8207\u9ad8\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"Padding, margin and border will cause other elements to be pushed away from the box. \u908a\u8ddd\u3001\u908a\u754c\u548c\u908a\u6846\u80fd\u5920\u5f71\u97ff\u5176\u5b83\u5143\u7d20")),(0,r.kt)("h2",{id:"inline"},(0,r.kt)("inlineCode",{parentName:"h2"},"inline")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The box will not break onto a new line. \u4e0d\u6703\u63db\u884c"),(0,r.kt)("li",{parentName:"ul"},"The width and height properties will not apply. \u4e0d\u80fd\u8a2d\u5b9a\u5bec\u5ea6\u8207\u9ad8\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"Vertical padding, margins, and borders will apply but will not cause other inline and block boxes to move away from the box. \u53ef\u4ee5\u8a2d\u5b9a\u4e0a\u4e0b\u908a\u8ddd\u3001\u908a\u754c\u8207\u908a\u6846\u4f46\u4e0d\u6703\u5f71\u97ff\u5176\u5b83\u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box. \u53ef\u4ee5\u8a2d\u5b9a\u5de6\u53f3\u908a\u8ddd\u3001\u908a\u754c\u8207\u908a\u6846\uff0c\u4e14\u6703\u5f71\u97ff\u5176\u5b83\u5143\u7d20")),(0,r.kt)("h2",{id:"inline-block"},(0,r.kt)("inlineCode",{parentName:"h2"},"inline-block")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the width and height properties are respected \u53ef\u4ee5\u8a2d\u5b9a\u5bec\u5ea6\u8207\u9ad8\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"padding, margin, and border will cause other elements to be pushed away from the box \u908a\u8ddd\u3001\u908a\u754c\u8207\u908a\u6846\u6703\u5f71\u97ff\u5176\u5b83\u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"The box will not break onto a new line. \u4e0d\u6703\u63db\u884c")),(0,r.kt)("h2",{id:"inner-display"},"Inner Display"),(0,r.kt)("p",null,"Inner Display \u6307 ",(0,r.kt)("inlineCode",{parentName:"p"},"flex")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"flex")," \u7684 container \u9810\u8a2d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"block")," \u5143\u7d20\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"inline-flex")," \u8b93 container \u8b8a\u6210 inline-element\u3002"),(0,r.kt)("h2",{id:"margin-collapsing"},"Margin Collapsing"),(0,r.kt)("p",null,"\u7576\u5169\u500b\u5143\u7d20\u7686\u8a2d\u7f6e\u540c\u4e00\u65b9\u5411\u7684 margin \u6642\uff0c\u6703\u4f9d\u7167\u6578\u503c\u7684\u6b63\u8ca0\u4f86\u5f71\u97ff\u6700\u7d42\u7d50\u679c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5169\u500b\u90fd\u662f\u6b63\u6578\u6642\uff0c\u53d6\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u6b63\u4e00\u8ca0\uff0c\u6b63\u6e1b\u8ca0"),(0,r.kt)("li",{parentName:"ol"},"\u5169\u500b\u90fd\u662f\u8ca0\u6578\u6642\uff0c\u53d6\u6700\u5c0f\u503c\u3002")),(0,r.kt)("h2",{id:"padding"},"Padding"),(0,r.kt)("p",null,"padding \u4e0d\u80fd\u8a2d\u5b9a\u8ca0\u6578"))}m.isMDXComponent=!0}}]);