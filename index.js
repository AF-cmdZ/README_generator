// Declare dependencies and variables
const fs = require('fs'); 
const util = require('util');
const inquirer = require('inquirer');

// Internal Modules
const api = require("./utils/api.js");
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [

        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username here: ",
        },
        {
            type: "input",
            name: "repo",
            message: "What is the name of your GitHub repo?",
        },
        {
            type: "input",
            name: "projectName",
            message: "What is this project name?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description for this project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process for running this generator: ",
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
        
    ];

// Write file notification
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
    }   
    console.log("Success! Your README.md file has been generated.");
});
}

const writeFileAsync = util.promisify(writeToFile);


// Main Function
async function init() {
    try {

        // Prompt Inquirer Questions 
        const userResponses = await inquirer.prompt(questions);
        // call github API for user info
        const userInfo = await api.getUser(userResponses);
        // pass inquirer userResponses to generate markdown 
        const markdown = generateMarkdown(userResponses, userInfo);
        // write markdown to file
        await writeFileAsync("testREADME.md", markdown);  
    }   catch(err) {
        console.log(err);
    }
};

init();