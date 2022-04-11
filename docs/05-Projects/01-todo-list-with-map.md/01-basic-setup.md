---
title: Basic setup
slug: basic-setup
keywords: [TypeScript]
description: Build a todolist with map
---

# Basic setup

> ## Things you need to know beforehand
>
> Version of my npm  
> 8.1.4
>
> Tech stack
>
> 1.  React/Redux
> 2.  [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
> 3.  TypeScript
>
> Demo  
> https://mhsiungw.github.io/todolist-with-map/

<br/>

## First thing first

```console
npx create-react-app todolist-with-map-demo --template typescript
```

Then

```console
cd todolist-with-map-demo --template typescript
git branch -m main // personal preference
```

<br/>

## Install dependencies

```console
npm i --save-exact @googlemaps/js-api-loader@1.13.11 @reduxjs/toolkit@1.8.1 react-redux@7.2.8 @types/react-redux@7.1.23 sass@1.50.0 uuid@8.3.2 @types/uuid@8.3.4
```

> 💡 remember to update `@types/react-dom` to 18.0.0

<br/>

## File structure

The initial file structure will look like this:

```text
todolist-with-map-demo
├── node_modules/
├── public/
├── src/
│  ├── App.css
│  ├── App.test.tsx
│  ├── App.tsx
│  ├── index.css
│  ├── index.tsx
│  ├── logo.svg
│  ├── react-app-env.d.ts
│  ├── reportWebVitals.ts
│  ├── setupTests.ts
├── .gitignore
├── package-lock.json
├── package.json
├── READMD.md
└── tsconfig.json
```

I'm gonna delete all files in `src` and set up my initial folders and files.

```text
todolist-with-map-demo
├── node_modules/
├── public/
├── src/
│  ├── components
│  │   └──App.tsx
│  └── index.tsx
├── .gitignore
├── package-lock.json
├── package.json
├── READMD.md
└── tsconfig.json
```

In `App.tsx`

```ts
const App = () => {
    return <div>Hello World</div>
}

export default App
```

In `index.tsx`

```ts
import * as ReactDOM from 'react-dom/client'
import App from './components/App'

const container = document.querySelector('#root') as Element

const root = ReactDOM.createRoot(container)

root.render(<App />)
```

> 💡 In React 18, we need to use `createRoot` instead of `ReactDOM.render` to enable new features.

Then, create more folders that we can later make use of

```text
todolist-with-map-demo
├── node_modules/
├── public/
├── src/
│  ├── components
│  │   └──App.tsx
│  ├── +hooks
│  ├── +state
│  ├── +styles
│  └── index.tsx
├── .gitignore
├── package-lock.json
├── package.json
├── READMD.md
└── tsconfig.json
```

`hooks` will be where we put our custom hooks and `state` is to set up our redux store and `styles` our shared CSS variables.

Next, we'll first set up our Redux store.

See you in next article.
