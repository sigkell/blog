---
title: "Welcome to try; accept."
published: 2020-03-15T17:07:27Z
draft: false
slug: welcome
categories: [meta]
tags: [personal]
---

It’s _finally_ happening. Attempt #2.

**There’s a blog.**

I’ve promised myself, and others, that I would have a blog up-and-running an embarassingly long time ago. Right now in Ireland, we're experiencing the onslaught of {{< def "COVID-19" "Coronavirus Disease 2019" >}}, so I've seized the opportunity to power through my todo backlog. Thus, here we are.

{{< figure src="newsletter.jpg" alt="A screengrab of a scene in the Simpsons, where Homer is talking to Bart. He says \"Your ideas are intriguing to me and I wish to subscribe to your newsletter\"." attr="&copy; The Simpsons" >}}

The intent for this blog is a space where I can express my thoughts, and present them with coherency. I realised I had an unhealthy relationship with Twitter, and fell into the trap of reactive posting rather than taking adequete time to step back and assess things. This is something I may write about in the future, but it was a large motivation in shifting my energy to writing articles, instead of cramming half-baked thoughts into a Twitter thread.

## _try; accept?_

I could've been vanilla and titled it _Fionn Kelleher's Blog_. Instead, I drew on inspiration from our friend Python :snake:, which implements a common pattern known as `try/except` or `try/except/finally`.

{{< highlight python >}}
try:
	# some code to execute
except:
	# code executed when there's an error
finally:
	# code executed regardless of error
{{< / highlight >}}

What the above code illustrates is simple:

-	try something;
-	handle failure if it arises;
-	enlightened with any information gained from the process, move onwards.

The phrase _"try; accept"_ makes reference to the `try:` block, and to the `except:` and `finally:` blocks (abstracting them into "accept"). I thought it was a neat play on words.

In the context of _not-programming_, _"try; accept"_ captures an attitude I want to work towards, without the express need to understand anything about code. It's plain English, whilst still making reference to one of my hobbies.

**Try something.**

**If it succeeds: _accept the success_.** \
**If it fails: _accept the failure_.**

Unconditional acceptance of outcome _with_ constructive, mindful reflection, _without_ harsh judgement.

## _Musings, from somewhere in the world?_

It's been a long time since I've done any proper work in the realm of blogging; I'm not exactly sure what the predominant theme here will be yet. This subtitle ackowledges that vagueness, but is still useful in explaining the general theme:

*	The primary purpose of this blog is to collect my thoughts (_Musings..._) in article form.
*	I'm in Ireland right now, but who knows where the wind will take me? (_...from somewhere in the world_)

## Techy stuff

This blog is simple, and I intend on keeping it that way. It’s powered by Hugo along with a very simple theme based on [awsm.css](https://igoradamenko.github.io/awsm.css). I don’t feel the need to have too many fancy features, implementing them would likely get in the way of me actually writing content. Though that may have changed by the time you're reading this.

The source code is [freely available on GitHub](https://github.com/sigkell/blog) if you're looking for some inspiration, or want to contribute a bugfix. I've licensed all standalone code in the repository under the MIT license as of writing, and anything in `/content` under a CC license.

One of my priorities is to ensure people who experience vision issues can freely navigate and consume the content here. I've started by sementically designing the markup to aid screen readers. Any interactive content I embed will _always_ be augmented with meaningful textual representations, where I feel the media is an unavoidable supplement to understand the text.

I intend to implement tools to change colours, fonts, and more to aid those with colour blindness and/or dyslexia shortly after publishing this. I want to keep things as lightweight as possible, so it may be a case of implementing something very simple in JavaScript.

The blog is redeployed each time a push is made to the `master` branch (under the hood it's a simple Docker container that serves a webhooks endpoint, writeup incoming!)

## Conclusion

I hope to use this platform to share my own ideas, projects, opinions, tutorials, and more. I welcome constructive dialogue about anything I express here.

If you do want to contact me, email is preferred. You'll find my email at the bottom of this page.