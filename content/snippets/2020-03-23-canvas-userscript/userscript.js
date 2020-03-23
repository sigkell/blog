// ==UserScript==
// @name         Canvas Assignment -> TaskWarrior
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @require      https://momentjs.com/downloads/moment.min.js
// @author       Fionn Kellheer <fionn@sigkell.xyz>
// @match        https://ucc.instructure.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let intervalMs = 500
    let intervalId
    let days = []
    const selector = ".planner-day"
    const moduleRegex = /[A-Z]{2}[0-9]{4}/gi
    const dueRegex = /([0-9]{2}):([0-9]{2})$/

    function execute() {
        const days = document.querySelectorAll(".planner-day")
        console.log("!!!")
        console.log(days)
        const assignments = []

        for (let day of days) {
            const dateElement = day.querySelector(":scope h2 div:nth-child(2)")
            const dateParsed = moment(dateElement.innerText, ["DDDD, MMMM DD", "MMMM DD, YYYY"])
            const modules = day.querySelectorAll(":scope .planner-grouping")

            for (let module of modules) {
                const moduleTitle = module.querySelector(`:scope span[class^="title"]`).innerText
                let moduleCode = moduleTitle.match(moduleRegex)

                if (!moduleCode) {
                    continue
                }

                moduleCode = moduleCode[0]

                const entries = module.querySelectorAll(":scope .planner-item")

                for (let entry of entries) {
                    let assignmentType = entry.querySelector(`:scope div[class^="details"] > div[class^="type"]`).innerText.toLowerCase()

                    if (!assignmentType.includes("assignment")) {
                        continue
                    }

                    let assignmentTitle = entry.querySelector(`:scope div[class^="details"] > div[class^="title"] span[aria-hidden]`)
                    let assignmentDate = entry.querySelector(`:scope div[class^="secondary"] span[aria-hidden]`).innerText
                    let dateParts = assignmentDate.match(dueRegex).map(e => parseInt(e))
                    console.log(dateParts)

                    let details = {
                        project: moduleCode,
                        title: assignmentTitle.innerText,
                        date: dateParsed.hours(dateParts[1]).minutes(dateParts[2])
                    }

                    assignments.push(details)
                }

            }

        }

        const dashboard = document.querySelector("#dashboard")
        const heading = document.createElement("h1")
        heading.innerText = "TaskWarrior Commands"
        const commands = document.createElement("pre")
        commands.innerText = assignments.map((a) => `task add "${a.title}" project:${a.project} due:${a.date.toISOString()}`).join("\n")
        const container = document.createElement("div")
        container.append(heading)
        container.append(commands)

        dashboard.prepend(container)
    }

   function checkIfExists() {
       days = document.querySelectorAll(`div[class^="details"] > div[class^="title"] span[aria-hidden]`)

       if (days) {
           clearInterval(intervalId)
           execute()
       }
   }

    intervalId = setInterval(checkIfExists, intervalMs)
})();