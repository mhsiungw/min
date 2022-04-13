---
title: Redux Store Final Setup
slug: redux-store-final-setup
keywords: [TypeScript]
description: Build a todolist with map
---

# Redux Store Final Setup

## Store Set Up

```ts
// store.ts
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlices'

export const store = configureStore({ reducer: { todoReducer } })

/**
 * for custom hook : useSelector()
 * */
export type RootState = ReturnType<typeof store.getState>

/**
 * to ensure the returned type of dispatch function for thunk is
 * correct
 * */
export type AppDispatch = typeof store.dispatch
```

`configureStore` provides a more friendlier way to set up a Redux store than `createStore` in Redux. Three middlewares are added by default: `thunk`, `immutableStateInvariant` and `serializableStateInvariant`. The last two are for debug purposes.

<br/>

## Customise Middlewares

if we want to customise middlewares we can write:

```ts
/***
 * excluding serializableCheck and passing a specific value for the thunk
 * middleware's "extra argument"
 ***/
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import { myCustomApiService } from './api'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: myCustomApiService,
            },
            serializableCheck: false,
        }),
})
```

or

```ts
/***
 * add a new middleware without altering default ones
 ***/
import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'

import rootReducer from './reducer'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
```

or

```ts
/***
 * another way of customising middlewares, but it will overide the default ones
 ***/
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
})
```

<br/>

## RootState and AppDispatch

```ts
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

We use `RootState` and `AppDispatch` to write our pre-typed selector and dispatch hooks, so we don't habe to define it everytime we use native `useDispatch` and `useSelector`. Also, pre-typed hooks make sure the type info returned from these hooks are connected to the store.

<br/>

## Export from `index.ts`

![flow chart](./Flowchart.png)

remember this flow chart?

Our application connects to the store through `index.ts` in the middle.  
This way, we don't need to `import` individual modules from certain files, creating messy `import` statements.

```ts
// index.ts
export * from './store'
export * from './slices/todoSlices'
```

## Store File Structure

```text
todolist-with-map-demo
├── src/
│  ├── state
│  │   ├── slices
│  │   │   └── todoSlice.ts
│  │   ├── index.ts
└──└── └── store.ts
```

That'll be all for today.
