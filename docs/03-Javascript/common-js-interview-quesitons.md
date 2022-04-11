---
title: Common JS interview questions
slug: common-js-interview-quesitons
keywords: [TypeScript]
---

This article is my attempt to answer common questions we see during interviews.

The reason I'm doing this is because I'm currently looking for an front-end engineer job, and I thought it might be a good idea trying answering these questions and at the same time keeping a record of my answers so I can look at them again in the future.

Quality is not guaranteed but I'll try my best.

1. What is a closure?  
   Closure can mean an innter function that has a reference to the variables in its outer function scope.  
   Or it simply means the environment the inner function is declared. Closures are helpful because it makes private method and variables possible.

2. Difference between `var`, `let` and `const`.  
   `var` declares a function-scoped variable while variables declared using `let` and `const` are block-scoped.
   
   ```js
   'use strict'

   var a = 1
   let b = 1
   const c = 1

   {
   var a = 2
   let b = 2 //// limited to the scope of this block
   const c = 2  // limited to the scope of this block
   }

   console.log('var', a) // 2
   console.log('let', b) // 1
   console.log('const', c) // 1
   ```


(...to be continued)
