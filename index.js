// Declare dependencies and variables
const fs = require('fs'); 
const util = require('util');
const inquirer = require('inquirer');
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);

// prompt questions to create the README.md document 
function promptQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the project name?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description for your project:",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process for running this generator:",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the project usage?",
        },
        {   
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests written for your project?",
        },
        {
            type: "input",
            name: "questions",
            message: "What if there are questions about this project?",
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username here: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address here: ",
        },
    ])
}