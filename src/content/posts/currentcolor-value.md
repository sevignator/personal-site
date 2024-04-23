---
title: The currentColor value
pubDate: 2024-04-22
description: A neat and often overlooked CSS color value.
tags: ['css']
---

I'm sure you've seen--and used--keyword colors many times in the past. From `black` to `white` and everything in-between, they're especially useful for prototyping and debugging.

```css
/* Just making sure that my CSS stylesheet is linked! */
html {
  background-color: red;
}
```

Keyword colors are as straightforward as it gets; they're self-descriptive and written in plain English! But there's a sibling color-related keyword that's not nearly as explicit, and much less well-known: the `currentColor` keyword.

**Note:** The name `currentColor` is case-insensitive. You could even go as far as writing with `CuRrEnTcOlOr` if that's your fancy. But that'd be hella weird.

Here's what our beloved MDN has to say [on the subject`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword):

<blockquote>
  The currentcolor keyword represents the value of an element's color property. This lets you use the color value on properties that do not receive it by default.
  <cite>MDN<cite>
</blockquote>

Essentially, `currentColor` is equal to the current element's `color` value. It means you can define a color *once*, and then reference it elsewhere.

For example:

```css
button {
  color: darkorange;
  border: solid 2px currentColor;
  /* ... */
}
```

Now this button's text color, which is `darkorange`, will also be applied to the border.

What if you want to change that color on hover? Simply update the `color` value, and the border will follow suite!

```css
button {
  color: darkorange;
  border: solid 2px currentColor;
  /* ... */
}

/* The border's color will also change on hover */
button:hover {
  color: orangered;
}
```

While authoring your CSS, using `currentColor` effectively can help reduce redundancy and keep your code clean. Just be mindful not to fall into the "trap of cleverness"; only use it if there's an actual use case for it.
