---
title: Common JS interview questions
slug: common-js-interview-quesitons
keywords: [javascript]
---

# Common JS Interview Questions

This article is my attempt to answer common questions we see during interviews.

The reason I'm doing this is because I'm currently looking for an front-end engineer job, and I thought it might be a good idea trying answering these questions and at the same time keeping a record of my answers so I can look at them again in the future.

Quality is not guaranteed but I'll try my best.

1. What is a closure?  
   Closure can mean an innter function that has a reference to the variables in its outer function scope.  
   Or it simply means the environment the inner function is declared. Closures are helpful because it makes private method and variables possible.

<br/>

2. Difference between `var`, `let` and `const`.

    ### Scope

    `var` declares a function-scoped variable while variables declared using `let` and `const` are block-scoped.

    ```js
    'use strict'

    var a = 1
    let b = 1
    const c = 1

    {
        var a = 2
        let b = 2 //// limited to the scope of this block
        const c = 2 // limited to the scope of this block
    }

    console.log('var', a) // 2
    console.log('let', b) // 1
    console.log('const', c) // 1
    ```

    ### Global object

    A variable declared using `var` is added as a property of global object (`globalThis`). `const` and `let` don't act like this.

    ```js
    var a = 123

    console.log(globalThis.hasOwnProperty('a')) // true
    ```

<br/>

3. What's an `async` function?

    `async` function is a function declared with `async` keyword. We can use `await` keyword inside `async` function to make asynchronous behaviour possible without writing promise chains (`then`, `catch`, `finally`)

    ```js
    async function asyFn() {
        const data = await somePromiseFn()
        console.log(data)
    }
    ```

<br/>

4. What is synchronous and what is asynchronous?  
   JavaScript is a single-threaded and synchronous language, which means no code is executed concurrently.
   But synchronous also means the code can be blocking, and it's not ideal.
   For this problem, we need code that is asynchronous.
   Asynchronous code will not block our code execution, which means the code comes later doesn't have to wait until it's finised.
   **It can be executed at a certain time in the future**. (handlers in `addEventListeners`, async await function).

<br/>

5. How do you write asynchronous code in JavaScript?  
   Before ES8(2017) we use promise and promise chain to write asynchronous code. But with async/await syntax introducing in 2017,
   We have a more intuitive option.

    For example:

    ```js
    // promise chain
    fetch('url')
        .then((res) => res.json)
        .then((json) => console.log(json))
    ```

    ```js
    // async await
    async function fetchData() {
        const res = await fetch('url')
        const json = res.json()

        console.log(json)
    }
    ```

(...to be continued)
