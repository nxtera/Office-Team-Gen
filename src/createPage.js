const fs = require('fs')

/*Function to create the html document with employee data provided by user*/
const CreateTeamPage = (managers, engineers, interns) => {

    /*Sandwich method of creating html page*/
    let htmlHead = `    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Gen</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <header>
        <h1> Team Gen </h1>
    </header>
    <body>`

    let htmlFooter = `</body>
    </html>`

    /*Populate the employee cards section of html with user provided data */
    const managerTemplate = (response) => {
        return `
        <section class="employee-cards">
            <div>
                <h2>Manager 🧑‍💼</h2>
            </div>
            <div class="eName">${response.name}</div>
            <div class="eId">ID: ${response.id}</div>
            <div class ="eEmail">Email: 
                <a href="${response.email}">${response.email}</a>
            </div>
            <div class ="eExtra">Office Number: ${response.officeNumber}</div>
        </section>
       `
    }
    const engineerTemplate = (response) => {
        return `
        <section class="employee-cards">
        <div>
            <h2>Engineer 📐</h2>
        </div>
        <div class="eName">${response.name}</div>
        <div class="eId">ID: ${response.id}</div>
        <div class ="eEmail">Email: 
            <a href="mailto:${response.email}">${response.email}</a>
        </div>
        <div class="eExtra">Github:
            <a href="https://github.com/${response.github}">github.com/${response.github}</a>
        </div>
        </section>
        `
    }
    const internTemplate = (response) => {
        return `
        <section class="employee-cards">
        <div>
            <h2>Intern 🎓</h2>
        </div>
        <div class="eName">${response.name}</div>
        <div class="eId">ID: ${response.id}</div>
        <div class ="eEmail">Email: 
            <a href="${response.email}">${response.email}</a>
        </div>
        <div class ="eExtra">School: ${response.school}</div>
        </section>
        `
    }
    /*loop through each employee from the array to populate html*/
    managers.forEach((manager, i) => {
        htmlHead += managerTemplate(manager)
    })
    engineers.forEach((engineer, i) => {
        htmlHead += engineerTemplate(engineer)
    })
    interns.forEach((intern, i) => {
        htmlHead += internTemplate(intern)
    })
    return htmlHead = htmlHead + htmlFooter
}

module.exports = CreateTeamPage;