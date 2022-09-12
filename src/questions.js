
const MainMenuQs = [
    {
        type: 'list',
        name: 'option',
        message: 'Who would you like to do?',
        choices: [
            'Add a Manager',
            'Add an Engineer',
            'Add an Intern',
            'Build the team',
        ],
    }
]

const ManagerQs = [
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Office Number?',
        name: 'officeNumber',
    },

]

const EngineerQs = [
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the employee Github handle?',
        name: 'github',
    },

]

const InternQs = [
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the employees School?',
        name: 'school',
    },

]

module.exports = {
    MainMenuQs,
    ManagerQs,
    EngineerQs,
    InternQs,
}
//console.log (MainMenuQs)