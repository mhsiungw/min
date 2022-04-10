---
title: How do we use TypeScript?
slug: how-do-we-use-typescript
keywords: [TypeScript]
description: Ways we use TypeScript
---

# How do we use TypeScript?

Before we dive into how to work with TypeScript during development (front-end web development specifically), it's worth mentioning that when writing TypeScript, we're basically writing JavaScript except the fact that we're also making use of the [type system](https://www.staging-typescript.org/docs/handbook/typescript-in-5-minutes.html) provided by TypeScript.

So how is it related to today's topic? It's related bacause at the end of the day we still need to compile TypeScript to JavaScript so that browsers can understand and run it.

Here comes the question. How?

There're several ways to compile a TypeScript file with `.ts` extention to a `.js` one, and I'm gonna share two of them.

## TSC Command Line Tool

TypeScript comes with a command line tool called `tsc`.

See how to download it [here](https://www.staging-typescript.org/download).

Let's say we have a file structure like this:

```text
test
├── index.html
└── script.ts
```

### `tsc <file-name>`

When we finish writing code in script.ts we can use `tsc script.ts` command, and this command compiles `script.ts` to a `script.js`, so we can use in `index.html`.

File Structure:

```text
test
├── index.html
├── script.js
└── script.ts
```

it doesn't sound so convenient, huh?

Don't worry. We can try `tsc` with `--watch` flag.

### `tsc --watch <file-name>`

This command continually observes a `.ts` file and compiles it to a `.js` file, so we don't have to run `tsc <file-name>` everytime we finish writing code.

But can this process be further improved?

Of course with the help of [Parcel](https://parceljs.org/languages/typescript/).

## Parcel

Live server? Covered. Compiling process? Yep!

Besides these, Parcel makes our app easy to debug bacause `index.html` is directly using `.ts` file!

### `npx parcel index.html`

Before using Parcel, you need to run `npm install --save-dev parcel` in your project.

After that, run `npx parcel index.html`.

Now, you're free to go!

File Structure:

```text
test
├── .parcel-cache
├── dist
├── node_modules
├── index.html
├── index.ts
├── package-lock.json
└── package.json
```

Explanation about parcel files

-   [.parcel-cache](https://parceljs.org/features/development/#caching)
-   [dist](https://parceljs.org/features/targets/#distdir)

## End

Parcel is by far my favorite way to compile `.ts` files because it comes with a lot of additional bonuses besides compiling!

Check [it](https://parceljs.org/languages/typescript/) out for more.
