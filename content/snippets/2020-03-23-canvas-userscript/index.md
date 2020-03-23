---
title: "UCC Canvas Assignments to TaskWarrior Commands"
date: 2020-03-23T15:02:34Z
slug: canvas-to-todo
categories: [meta]
tags: []
---

This is a very crudely coded UserScript to convert the default listing of assignments on Canvas' dashboard to a series of [TaskWarrior] commands that can be copy/pasted to a terminal. It's for use specifically on UCC's Canvas platform, but may work on other Canvas installations out of the box.

The code is nothing spectacular: it was developed quickly and without much care for maintainability.

Some things that need to be fixed/improved:

- [ ] Improve detection, currently just checks every 500ms to see if the dashboard has been loaded (at all) in the DOM
- [ ] Prettier display of commands on the page
- [ ] Ensure compatibility with non-TamperMonkey UserScript extensions, because as I learned afterwards, TamperMonkey is not FOSS :(

