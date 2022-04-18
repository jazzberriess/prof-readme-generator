// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const createMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input/inquirer
const questions = [{
    type: "input",
    message: "Please enter the title of your project:",
    name: "title",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter a title for your project\x1b[0m`
        }
        return true;
    }
},
{
    type: "input",
    message: "Please add a description for your project:",
    name: "description",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter a description for your project\x1b[0m`
        }
        return true;
    }
},
{
    type: "editor",
    message: "Please enter the installation instructions for your project:",
    name: "installation",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter installation instructions for your project\x1b[0m`
        }
        return true;
    }
},
{
    type: "editor",
    message: "Please enter the usage instructions for your project:",
    name: "usage",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter installation instructions for your project\x1b[0m`
        }
        return true;
    }
},
{
    type: "editor",
    message: "Please enter the contribution instructions for collaborators:",
    name: "contribution",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter contribution instructions for your project\x1b[0m`
        }
        return true;
    }
},
{
    type: "editor",
    message: "Please enter the test instructions for your project:",
    name: "test",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter test instructions for your project\x1b[0m`
        }
        return true;
    }
},
{
    type: "list",
    message: "Please select the license applicable to your project",
    choices: ["MIT", "GNU GPLv3", "The Unlicense", "Apache License 2.0", "Mozilla Public License 2.0", "None"],
    name: "license",

},
{
    type: "input",
    message: "Please enter your GitHub username:",
    name: "github",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter your GitHub username\x1b[0m`
        }
        return true;
    }
},
{
    type: "input",
    message: "Please enter your E-mail address:",
    name: "email",
    validate: (answer) => {
        if (!answer) {
            return `\x1b[31mPlease enter your email address \x1b[0m`
        }
        return true;
    }
},
];

// TODO: Create a function to write README file
function writeToFile(answers) {

    //grab the data from the answers from the inquirer prompts and pass them to a new variable so that we can then pass that into the generateMarkdown function
    let createLicenseBadge = createMarkdown.renderLicenseBadge(answers.license);
    let createLicenseLink = createMarkdown.renderLicenseLink(answers.license);

    let finalAnswers = {
        ...answers,
        createLicenseBadge,
        createLicenseLink,
    };

    //write to file function. 
    //If you want to update the readme filename, do it here (though README.md files are always called README.md)
    fs.writeFileSync("README.md", createMarkdown.generateMarkdown(finalAnswers))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers);
            console.log("README.md fild successfully generated.")
        })
        .catch((error) => console.error(error))
}

// Function call to initialize app
init();
