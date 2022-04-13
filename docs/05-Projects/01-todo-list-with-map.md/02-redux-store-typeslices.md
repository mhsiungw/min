---
title: Redux Store-typeSlices
slug: redux-store-typeslices
keywords: [TypeScript]
description: Build a todolist with map
---

# Redux Store-typeSlices

## Flow Chart

![flowchart](./Flowchart.png)

This flow chart describes the connection between each file, and we'll start with `todoSlices` under `slice` subfolder.

<br/>

## Define type information

To take advantage of TypeScript, we first define how our data's type will look like.

```ts
// todoSlices.ts
interface Todo {
    id: string
    todo: string
    address: string
    position: number[]
}

interface Todos {
    todos: Todo[]
}
```

And then we define our initial state.

```ts
const initialState: Todos = {
    todos: [],
}
```

Then, we import `createSlices` and `PayloadAction` from `redux-toolkit`

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
```

<br/>

## Writing Slices

`createSlice` takes an object as an argument. This object contains a name, an initial state and reducers. `createSlice` will automatically generate actions and action types so we don't have to worry about that like we do when we use react-redux.

```ts
const todoSlices = createSlice({
    name: 'todoslice',
    initialState, // equals initialState : initialState
    reducers: {},
})
```

The name of these keys needs to be exact like above.

Then, we define `reducers`.

### addTodo

```ts
const todoSlices = createSlice({
    name: 'todoslice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload)
        },
    },
})
```

> With the help of [immer](https://immerjs.github.io/immer/), we're able to write simpler immutable update logic.

### deleteTodo

```ts
const todoSlices = createSlice({
    name: 'todoslice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload)
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})
```

Then, we export methods so they can later be used.

### export methods

```
export const { addTodo, deleteTodo } = todoSlices.actions
export default todoSlices.reducer
```

That'll be all for today!  
I'm gonna go to bed zZZ
