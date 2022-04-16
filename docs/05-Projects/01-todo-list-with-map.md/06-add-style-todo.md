---
title: Style Todo Components
slug: html-of-todoform-and-todolist
keywords: [HTML]
description: Build a todolist with map
---

# Style Todo Components

## Before Styling Components

We need a `Todo` component to render `TodoForm` and `TodoList`

```ts
// Todo
import './Todo.scss'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
    return (
        <div className="todo">
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo
```

And import it in `App` component

```ts
import Todo from './todo/Todo'
import React from 'react'
import './App.scss'

const App = () => {
    return (
        <React.Fragment>
            <Todo />
        </React.Fragment>
    )
}

export default App
```

> Notice I change the `div` tag to `React.Fragment` so the flex style in root can work.

<br/>

## Reset CSS

First, we need to hava variables for colors and font-size.

```scss
// _shared.scss
////// color
$window-background: #26532bff;
$todo-background: #399e5aff;
$item-background: #23e463;
$font: #1d3d20;
$btn: #6ef9f5ff;

////// font
$font-size: 2rem;
```

And we need to reset style. I also add a google font style.

```scss
// App
@import '../style/_shared.scss';
@import url('https://fonts.googleapis.com/css2?family=Anek+Odia&family=Roboto:wght@400;900&display=swap');

// reset style

html {
    font-family: 'Anek Odia', 'Roboto', sans-serif;
    font-size: 62.5%; // so 1rem = 10px
    color: $font;
    font-weight: 900;
    letter-spacing: 0.5px;
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

// style

body {
    background-color: $window-background;
    font-size: $font-size;
}

#root {
    display: flex;
    padding: 4rem;
    min-height: 100vh;
}
```

<br/>

## Style for Each Todo Component

```scss
// Todo
@import '../../style/_shared.scss';

.todo {
    background-color: $todo-background;
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    padding: 2rem;
    gap: 2rem;
}
```

```scss
// TodoForm
@import '../../style/_shared.scss';

.todo__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .todo__todo,
    .todo__address {
        display: flex;
        flex-direction: column;

        input {
            border: none;
            padding: 0.5rem;
            border-radius: 0.6rem;
            letter-spacing: inherit;

            &:focus {
                outline: none;
            }
        }
    }

    button {
        align-self: flex-end;
        border: none;
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: $btn;
    }
}

.warning {
    color: #d10808cf;
    align-self: flex-end;
    font-size: 1.5rem;

    &.hide {
        visibility: hidden;
    }
}
```

```scss
// TodoList
@import '../../style/_shared.scss';

.todo__list {
    font-weight: 400;

    .todo__item {
        position: relative;
        list-style: none;
        display: flex;
        justify-content: space-between;
        background-color: $item-background;
        padding: 1rem;
        margin-bottom: 4rem;

        .todo__desc {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        // border animation
        &::after,
        &::before {
            content: '';
            position: absolute;
            width: 2rem;
            height: 2rem;
            transition: all 0.5s ease-in;
        }

        &::after {
            top: -1rem;
            left: -1rem;
            border-left: 1px solid $item-background;
            border-top: 1px solid $item-background;
        }

        &::before {
            right: -1rem;
            bottom: -1rem;
            border-right: 1px solid $item-background;
            border-bottom: 1px solid $item-background;
        }

        &:hover::before,
        &:hover::after {
            width: calc(100% + 1.85rem);
            height: calc(100% + 1.85rem);
        }
    }
}

.btn--delete {
    background-color: transparent;
    border: none;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: $window-background;
    }
}
```

<br/>

## How to include `scss` file in components?

You can import `scss` file in component like this:

```ts
import Todo from './todo/Todo'
import React from 'react'

// include scss file
import './App.scss'

const App = () => {
    return (
        <React.Fragment>
            <Todo />
        </React.Fragment>
    )
}

export default App
```

<br/>

## File Structure

```text
todolist-with-map-demo
├── node_modules/
├── public/
├── src/
│  ├── components
│  │   ├── todo
│  │   │   ├── cross.svg
│  │   │   ├── +Todo.tsx
│  │   │   ├── +Todo.scss
│  │   │   ├── TodoForm.tsx
│  │   │   ├── +TodoForm.scss
│  │   │   ├── TodoList.tsx
│  │   │   └── +TodoList.scss
│  │   ├── +App.scss
│  │   └── App.tsx
│  ├── hooks
│  ├── state
│  ├── styles
│  └── index.tsx
├── .gitignore
├── package-lock.json
├── package.json
├── READMD.md
├── declarations.d.ts
└── tsconfig.json
```
