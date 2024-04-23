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

Keyword colors are a straightforward affair; they're self-descriptive and written in plain English. Want some red text? Slap `color: red` inside of a CSS declaration and call it a day.

But there's also a sibling color-specific keyword that's not nearly as explicit, and much less well-known... The `currentColor` keyword.

**Note:** The name `currentColor` is case-insensitive. You could even go as far as writing it `CuRrEnTcOlOr` if that's your fancy. But that'd be hella weird.

Here's what our beloved MDN has to say on the subject:

<blockquote>
  The currentcolor keyword represents the value of an element's color property. This lets you use the color value on properties that do not receive it by default.
  <cite>MDN<cite>
</blockquote>

Essentially, `currentColor` is equal to the current element's `color` value. It means you can define a color *once*, and then reference it elsewhere.

Here's an example:

```css
button {
  color: darkorange;
  border: solid 2px currentColor;
  /* ... */
}
```

Now this button's text color, which is `darkorange`, will also be applied to the border. Neat!

What if you want to change the color of both the text *and* the border on hover? Simply update the `color` property's value, and the border will follow suite.

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

While authoring your CSS, using `currentColor` effectively can help reduce redundancy and keep your code clean. Be mindful not to fall into the "trap of cleverness" though, and to only use it if there's a good reason to.

## Sources

- [The `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)