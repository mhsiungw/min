---
title: How to initiate a ReactNative project?
slug: how-to-initiate-a-ReactNative-project
keywords: [ReactNative]
description: How to initiate a ReactNative project?
---

# Initiate a ReactNative Project

ReactNative 使用起來和 React 有 87 分像，但會是以 Functional Component 的方式書寫，
另外，和 React 一樣，對於 JavaScript 的基礎了解後再開始學 ReactNative 比較不會吃力。

## Setting Up the Environment

有兩種環境建置方法，分別是 Expo CLI 和 React Native CLI，這篇主要紀錄 Expo CLI。

```console
npm install -g expo-cli
```

然後執行以下指令建置專案：

```console
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

之後會在專案資料夾裡看到 App.js，可以玩玩看裡面的 code，然後 `npm start`，看看結果。

> Expo 是一個為了 React application 設計的框架和平台，主要讓開發者能夠以 JavaScript/TypeScript 快速使用
> ReactNative 開發，它也提供打包與部署的功能。
