"use strict";(self.webpackChunkmin_s_blog=self.webpackChunkmin_s_blog||[]).push([[584],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5373:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Common JS interview questions",slug:"common-js-interview-quesitons",keywords:["javascript"]},l="Common JS Interview Questions",c={unversionedId:"Javascript/common-js-interview-quesitons",id:"Javascript/common-js-interview-quesitons",title:"Common JS interview questions",description:"This article is my attempt to answer common questions we see during interviews.",source:"@site/docs/03-Javascript/01-common-js-interview-quesitons.md",sourceDirName:"03-Javascript",slug:"/Javascript/common-js-interview-quesitons",permalink:"/min/Javascript/common-js-interview-quesitons",editUrl:"https://github.com/mhsiungw/minhsiungw.github.io/edit/main/docs/03-Javascript/01-common-js-interview-quesitons.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Common JS interview questions",slug:"common-js-interview-quesitons",keywords:["javascript"]},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/min/HTML/html"},next:{title:"What are instances",permalink:"/min/Javascript/what-are-instances"}},p={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-js-interview-questions"},"Common JS Interview Questions"),(0,o.kt)("p",null,"This article is my attempt to answer common questions we see during interviews."),(0,o.kt)("p",null,"The reason I'm doing this is because I'm currently looking for an front-end engineer job, and I thought it might be a good idea trying answering these questions and at the same time keeping a record of my answers so I can look at them again in the future."),(0,o.kt)("p",null,"Quality is not guaranteed but I'll try my best."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What is a closure?",(0,o.kt)("br",{parentName:"li"}),"Closure can mean an innter function that has a reference to the variables in its outer function scope.",(0,o.kt)("br",{parentName:"li"}),"Or it simply means the environment the inner function is declared. Closures are helpful because it makes private method and variables possible.")),(0,o.kt)("br",null),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,o.kt)("h3",{parentName:"li",id:"scope"},"Scope"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"var")," declares a function-scoped variable while variables declared using ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," are block-scoped."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nvar a = 1\nlet b = 1\nconst c = 1\n\n{\n    var a = 2\n    let b = 2 //// limited to the scope of this block\n    const c = 2 // limited to the scope of this block\n}\n\nconsole.log('var', a) // 2\nconsole.log('let', b) // 1\nconsole.log('const', c) // 1\n")),(0,o.kt)("h3",{parentName:"li",id:"global-object"},"Global object"),(0,o.kt)("p",{parentName:"li"},"A variable declared using ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," is added as a property of global object (",(0,o.kt)("inlineCode",{parentName:"p"},"globalThis"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," don't act like this."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var a = 123\n\nconsole.log(globalThis.hasOwnProperty('a')) // true\n")))),(0,o.kt)("br",null),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What's an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function?"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"async")," function is a function declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword inside ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function to make asynchronous behaviour possible without writing promise chains (",(0,o.kt)("inlineCode",{parentName:"p"},"then"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"catch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"finally"),")"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function asyFn() {\n    const data = await somePromiseFn()\n    console.log(data)\n}\n")))),(0,o.kt)("br",null),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"What is synchronous and what is asynchronous?",(0,o.kt)("br",{parentName:"li"}),"JavaScript is a single-threaded and synchronous language, which means no code is executed concurrently.\nBut synchronous also means the code can be blocking, and it's not ideal.\nFor this problem, we need code that is asynchronous.\nAsynchronous code will not block our code execution, which means the code comes later doesn't have to wait until it's finised.\n",(0,o.kt)("strong",{parentName:"li"},"It can be executed at a certain time in the future"),". (handlers in ",(0,o.kt)("inlineCode",{parentName:"li"},"addEventListeners"),", async await function).")),(0,o.kt)("br",null),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"How do you write asynchronous code in JavaScript?",(0,o.kt)("br",{parentName:"p"}),"\n","Before ES8(2017) we use promise and promise chain to write asynchronous code. But with async/await syntax introduced in 2017,\nWe have a more intuitive option."),(0,o.kt)("p",{parentName:"li"}," For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// promise chain\nfetch('url')\n    .then((res) => res.json)\n    .then((json) => console.log(json))\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// async await\nasync function fetchData() {\n    const res = await fetch('url')\n    const json = res.json()\n\n    console.log(json)\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What is ",(0,o.kt)("inlineCode",{parentName:"p"},"use strict"),"?"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"use strict")," enables strict mode in JavaScript. Strict mode allows us to write more secure JavaScript code and reduces the chance of us polluting the global context."),(0,o.kt)("p",null,"To enable strict mode, put ",(0,o.kt)("inlineCode",{parentName:"p"},"use strict")," at the top of your script."),(0,o.kt)("p",null,"Class and modules automatically enable strict mode."),(0,o.kt)("p",null,"(...to be continued)"))}d.isMDXComponent=!0}}]);