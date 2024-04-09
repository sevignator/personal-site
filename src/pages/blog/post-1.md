Want to build your own Docs?
Grab this template to get started.→


Write your first Markdown blog post
Now that you have built pages using .astro files, it’s time to make some blog posts using .md files!

GET READY TO…

Make a new folder and create a new post
Write some Markdown content
Link to your blog posts on your Blog page
Create your first .md fileSection titled Create your first .md file
Create a new directory at src/pages/posts/.

Add a new (empty) file post-1.md inside your new /posts/ folder.

Look for this page in your browser preview by adding /posts/post-1 to the end of your existing preview URL. (e.g. http://localhost:4321/posts/post-1)

Change the browser preview URL to view /posts/post-2 instead. (This is a page you have not yet created.)

Note the different output when previewing an “empty” page, and one that doesn’t exist. This will help you troubleshoot in the future.

Write Markdown contentSection titled Write Markdown content
Copy or type the following code into post-1.md

src/pages/posts/post-1.md
---
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
---
# My First Blog Post

Published on: 2022-07-01

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
