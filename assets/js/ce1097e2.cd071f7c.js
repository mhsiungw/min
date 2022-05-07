"use strict";(self.webpackChunkmin_s_blog=self.webpackChunkmin_s_blog||[]).push([[105],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],p={title:"Why do we need TypeScript?",slug:"why-do-we-need-typescript",keywords:["TypeScript"],description:"Reasons why we need TypeScript"},l="Why do we need TypeScript?",s={unversionedId:"TypeScript/why-do-we-need-typescript",id:"TypeScript/why-do-we-need-typescript",title:"Why do we need TypeScript?",description:"Reasons why we need TypeScript",source:"@site/docs/04-TypeScript/01-why-do-we-need-typescript.md",sourceDirName:"04-TypeScript",slug:"/TypeScript/why-do-we-need-typescript",permalink:"/TypeScript/why-do-we-need-typescript",editUrl:"https://github.com/mhsiungw/minhsiungw.github.io/edit/main/docs/04-TypeScript/01-why-do-we-need-typescript.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Why do we need TypeScript?",slug:"why-do-we-need-typescript",keywords:["TypeScript"],description:"Reasons why we need TypeScript"},sidebar:"tutorialSidebar",previous:{title:"statements and expressions",permalink:"/Javascript/statements-and-expressions"},next:{title:"How do we use TypeScript?",permalink:"/TypeScript/how-do-we-use-typescript"}},c={},d=[{value:"What problem it&#39;s trying to solve",id:"what-problem-its-trying-to-solve",level:2},{value:"1. Catching mistakes early on",id:"1-catching-mistakes-early-on",level:3},{value:"2. Helping developers to figure out how to use third-party modules",id:"2-helping-developers-to-figure-out-how-to-use-third-party-modules",level:3},{value:"End",id:"end",level:2}],u={toc:d};function m(e){var t=e.components,p=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-do-we-need-typescript"},"Why do we need TypeScript?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TypeScript was voted the second most loved programming language in 2020 (third in 2021).",(0,a.kt)("br",{parentName:"p"}),"\n","What's about it that's make it so lovable?")),(0,a.kt)("h2",{id:"what-problem-its-trying-to-solve"},"What problem it's trying to solve"),(0,a.kt)("h3",{id:"1-catching-mistakes-early-on"},"1. Catching mistakes early on"),(0,a.kt)("p",null,"By using TypeScript, we can catch errors before our code is executed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// test.js\nlet arr = []\n\norr.push() // no error shows\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// test.js\nlet arr = []\n\norr.push() // Cannot find name 'orr'.\narr.trim() // Property 'trim' does not exist on type 'any[]'.\n")),(0,a.kt)("p",null,"Through TypeScript's type system, we can spot potential errors (typos or wrong methods) before code gets executed."),(0,a.kt)("h3",{id:"2-helping-developers-to-figure-out-how-to-use-third-party-modules"},"2. Helping developers to figure out how to use third-party modules"),(0,a.kt)("p",null,"My favourite part about TypeScipt is that a type information can be provided about a module in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.d.ts")," file."),(0,a.kt)("p",null,"Let's take ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript?hl=en"},"Google Map JavaScript API")," as an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// tutorial code provided by Google doc\n\nvar myLatlng = new google.maps.LatLng(-34.397, 150.644)\nvar mapOptions = {\n    zoom: 8,\n    center: myLatlng,\n    mapTypeId: 'satellite',\n}\nvar map = new google.maps.Map(document.getElementById('map'), mapOptions)\n")),(0,a.kt)("p",null,"Before TypeScript, we need to rely heavily on documentation to figure out how to use a module."),(0,a.kt)("p",null,"Now, with the help of type information defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.d.ts"),", we can quickly find out what type of info is needed to use a module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// index.d.ts\n\ndeclare namespace google.maps {\n  class Map extends google.maps.MVCObject {\n    constructor(mapDiv: HTMLElement, opts?: google.maps.MapOptions);\n    .\n    .\n    .\n    .\n    .\n  }\n}\n")),(0,a.kt)("p",null,"Code above tells us that ",(0,a.kt)("inlineCode",{parentName:"p"},"google.maps.Map()")," needs a ",(0,a.kt)("inlineCode",{parentName:"p"},"mapDiv")," that is ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement")," type and an ",(0,a.kt)("inlineCode",{parentName:"p"},"opts")," that fits into ",(0,a.kt)("inlineCode",{parentName:"p"},"MapOptions")," type as arguments for the ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," method of ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"."),(0,a.kt)("p",null,"We can \u2318 + click to the definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"MapOptions")," and we can see what forms this type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// index.d.ts\n\ninterface MapOptions {\n    /**\n     * Color used for the background of the Map div. This color will be visible\n     * when tiles have not yet loaded as the user pans. This option can only be\n     * set when the map is initialized.\n     */\n    backgroundColor?: string|null;\n    /**\n     * The initial Map center.\n     */\n    center?: google.maps.LatLng|null|google.maps.LatLngLiteral;\n    .\n    .\n    .\n    .\n    .\n}\n")),(0,a.kt)("p",null,"By just looking at these lines of code, we know that ",(0,a.kt)("inlineCode",{parentName:"p"},"opts")," is an object and can have the properties listed inside ",(0,a.kt)("inlineCode",{parentName:"p"},"MapOptions"),"."),(0,a.kt)("p",null,"So instead of following the tutorial code we saw, we decide to write something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new google.maps.Map(\n  document.getElementById(divId), \n  { \n    backgroundColor: 'yellow', \n    center: { lat: 0, lng: 0 }, \n    zoom: 1 \n  }\n)\n")),(0,a.kt)("p",null,"We are confident ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," property will work because it's listed inside ",(0,a.kt)("inlineCode",{parentName:"p"},"MapOptions"),", and by just looking at that line of code we know it accepts type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("p",null,"This is how the map looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"map",src:n(7037).Z,width:"2048",height:"1152"})),(0,a.kt)("h2",{id:"end"},"End"),(0,a.kt)("p",null,"There're plenty of reasons why we need TypeScript beside the two points I mention in this article.",(0,a.kt)("br",{parentName:"p"}),"\n","Personally, I enjoy writing code in TypeScript more than JavaScript, and I can't wait to use more TypeScript in my future project."))}m.isMDXComponent=!0},7037:function(e,t,n){t.Z=n.p+"assets/images/map-eae7b34c07e260717f6dd44520e0405c.png"}}]);