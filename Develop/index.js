// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const path = require('path');
// if we need to bring in generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//inquirer.prompt?
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title",
    //validate property to check that the user provided a value
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ['MIT', 'Apache 2.0', 'None']
},
{
    type: "input",
    message: "What is the project about? Give a detailed description of your project.",
    name: "description",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "How do you install the project?",
    name: "installation",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "What are the instructions on how to use your project?",
    name: "instructions",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "What are the conditions to contribute?",
    name: "contributing",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "How do you install the project?",
    name: "usage",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "What tests are you running for the project?",
    name: "tests",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "What is your Github username?",
    name: "username",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
{
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
},
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {

    inquirer.prompt(questions).then(data => {

        console.log(data);
        console.log(data.title);

        let result = generateMarkdown(data)

        console.log(result)

        writeToFile('readme.md', result);
        // inquirer.prompt()
    })
        .catch(error => {
            console.log(error);
        });

    // inquirer.prompt()
    // query the User for DATA -> inquirer package (Async Operation)

    // Return a Promise
    // .then({
    // We have user (DATA) Object
    // pass the DATA object to generateMarkdown(data) function
    // let completedMarkdown = generateMakerdown(data)
    // pass the completedMarkdown to writeToFile(fileName, completedMarkdown);
    // })    -> IF SUCCESS  --> WE GET USER DATA
    // .catch()  -> If ERROR
}

// Function call to initialize app
init();
