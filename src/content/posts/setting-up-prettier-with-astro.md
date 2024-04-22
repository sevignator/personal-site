---
title: Setting up Prettier with Astro
pubDate: 2024-04-20
description: How to format you Astro code auto-magically using Prettier.
tags: ['prettier', 'astro']
---

First things first, you'll need to add Prettier and the plugin for Astro to your current project using the following command:

```sh
npm i --save-dev prettier prettier-plugin-astro
```

Next, make sure to create a Prettier config file at the root of your project if you don't already have one.

```sh
touch .prettierrc.mjs
```

Lastly, you'll want to add the following code to your Prettier config file:

```js
// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
```

And that's it! Quick and dirty.

## Sources

- [Prettier Plugin for Astro docs](https://github.com/withastro/prettier-plugin-astro)
