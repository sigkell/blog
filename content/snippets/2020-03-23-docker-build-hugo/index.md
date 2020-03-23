---
title: "Building a Hugo website with Docker + GitHub Webhooks"
date: 2020-03-23T15:49:51Z
slug: docker-hugo-build
categories: [meta]
tags: [hello]
---

I don't currently have use for fancy CI/CD systems personally, so I've a very simple method of deploying this [Hugo](https://gohugo.io/)-based blog.

Below is a simple `Dockerfile`, build script, and config file for a webhook server that, when triggered under the right conditions by GitHub, pulls the latest changes to the blog, builds a static site using Hugo, and moves it to a defined volume.

To use (assuming all files in the same dir):

1.  Follow [this guide](https://developer.github.com/webhooks/creating/) to set up a webhook. When the docker image is built, it'll be available at `localhost:9000/hooks/hugo`, and accepts content type `application/json`.
2.  `docker -t webhook-hugo-build:latest .`
3.  `docker run -e "SECRET=WEBHOOK_SECRET" -e "REPO=user/repo" -p 9000:9000 -v $LOCAL_DIR_FOR_BUILT_SITE:/output webhook-hugo-build:latest`
    -   The `WEBHOOK_SECRET` is defined when you add the webhook to your GitHub repo.
    -   The `REPO` environmental variable is the source repo, specified using `user` (GitHub username) and `repo`.
    -   The `/output` volume will contain the static site in full after it's been built.