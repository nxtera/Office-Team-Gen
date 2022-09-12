const inquirer = require('inquirer');
const fs = require('fs');
const CreateTeamPage = require('./createPage')
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Questions = require('./questions');
/* Create empty array of managers, engineers and interns*/
const managers = [];
const engineers = [];
const interns = [];


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}
/*/ Functions to prompt user with questions and push answers to the relevant array*/

const AskManagerQs = () => {
    inquirer
        .prompt(Questions.ManagerQs)
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            managers.push(manager);
            AskMainMenuQs();
        })
}
const AskEngineerQs = () => {
    inquirer
        .prompt(Questions.EngineerQs)
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            engineers.push(engineer);
            AskMainMenuQs();
        })
}
const AskInternQs = () => {
    inquirer
        .prompt(Questions.InternQs)
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            interns.push(intern);
            AskMainMenuQs();
        })
}

/*The first set of questions user will be prompted with*/
const AskMainMenuQs = () => {
    inquirer
        .prompt(Questions.MainMenuQs)
        .then((response) => {
            if (response.option === "Add a Manager") {
                AskManagerQs()
            }
            else if (response.option === "Add an Engineer") {
                AskEngineerQs()
            }
            else if (response.option === "Add an Intern") {
                AskInternQs()
            }
            else if (response.option === "Build the team") {
                const generateHTML = CreateTeamPage(managers, engineers, interns)
                writeToFile('./dist/index.html', generateHTML)
                console.log("Page built sucessfully!")
            }
        })
}

module.exports = AskMainMenuQs;