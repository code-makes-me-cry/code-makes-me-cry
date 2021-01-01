---
title: 'CSS Pipeline'
modified: '2021-01-01T14:21+01:00'
---

# Sassy CSS pipeline

Once you [get started with HTML and CSS](https://www.freecodecamp.org/news/html-and-css-course/) and have a go at building a practice website or two, you may start to find that CSS gets a bit repetitive and messy.

If so, congratulations&mdash;you're developing the intuition to get mad at the right kinds of things!

## From CSS tutorials to modern authoring practices

A popular next step from here would be to [learn Sass, which can help keep your code DRY](https://www.educative.io/blog/sass-for-css-advance-frontend-skills) ("Don't Repeat Yourself", explained in the link).

The link above goes into more detail, but basically Sass involves a compilation step that produces CSS. So the pipeline so far looks like:

```
Write Sass => get CSS
```

What's more, is that CSS should be [minified](https://www.imperva.com/learn/performance/minification/) so it runs as fast as possible on the user's machine.

## Browser compatibility

Cool, but could be cooler. Next we need to make sure that your CSS is compatible with the browsers that you need to support. [Autoprefixer](https://autoprefixer.github.io/) is a widely recommended tool to help with this.

Now things are getting interesting:

```
Sass => CSS => prefixed CSS
```

## Automation

Wouldn't it be great if you could write your gorgeous DRY Sass, type a couple of quick commands, and have browser-ready CSS ready for production?

_(Production is just the technical term for "the version of the site that's online and available for users", as opposed to the local version that only you can see)_.

If you read the article above on keeping CSS DRY, you'll notice it finishes up by talking about a 'build process'. It doesn't go into much detail, but we're about to pick up where that leaves off.

_I call it a "pipeline", the article calls it a "build process"&mdash;same deal: It's the steps that get your code from Sass to prefixed CSS._

### NPM

To automate these steps, we'll use **npm scripts**, which you might not have come across before, but this is a great time to learn about them.

NPM is a foundational tool that will be useful across many different flavors of web dev projects, so it's well worth getting acquainted with now. As with most things, you can get started with the basics, then skill up gradually as you use it on real projects over time.

If you've never heard of a `package.json` file, or if you've forgotten what it's all about, I'd recommend this [npm tutorial for beginners](https://www.youtube.com/watch?v=6fj0cpmMiVg&list=PLC3y8-rFHvwhgWwm5J3KqzX47n7dwWNrq&ab_channel=Codevolution) (it's an hour-ish long YouTube playlist).

## Here's one I baked earlier!

From this [CSS pipeline repo](https://github.com/code-makes-me-cry/css-pipeline), you can grab a ready-made `package.json` file with scripts ready to go, and customize it for your project. Read through the Readme (and make that a habit 😉 ) to learn about what it does.

Include this file in each new project, make use of the scripts while you work, and you can say you're shipping production-ready CSS! 🎉
