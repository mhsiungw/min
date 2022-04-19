---
title: What are instances
slug: what-are-instances
keywords: [javascript]
---

> 學 JavaScript 的時候，常常聽到 new 一個 instance，但什麼是 instance 卻不知道，
> 幾個禮拜前，上完課後終於瞭解了什麼是 instance，所以今天想把它筆記下來。

## 什麼是 instance?

instance 是一個 object，繼承了一個 constructor 的 prototype properties。

比如說：

```js
function ImConstructor() {
    this.name = 'constructor function'
}

const ImAnInstance = new ImConstructor()

/* ImAnInstance 繼承了 ImConstructor 的 property */
console.log(ImAnInstance.name) // constructor function
```

## What happens after `new`

在 `new` 了一個 instance 之後，底層發生了什麼事呢？

拿上面的例子解釋：

1. 建立一個新的物件，這個物件會繼承 `ImConstructor` 的 prototype（空物件）
2. 用 `ImConstructor` 接收到的參數呼叫 `ImConstructor`
3. bind `new ImConstructor()` 所產生出的物件的 `this` 到 `ImAnInstance` ()
4. 把 `new ImConstructor()` 產生的 object { name: 'constructor function' } 賦值給 `ImAnInstance` （兩者不等於）

## Ways to create an object type

```js
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

var myCar = new Car('Eagle', 'Talon TSi', 1993)
```

```js
class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

var myCar = new Car('Eagle', 'Talon TSi', 1993)
```
