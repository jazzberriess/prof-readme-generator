// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const createMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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

    let createLicenseBadge = createMarkdown.renderLicenseBadge(answers.license);
    let createLicenseLink = createMarkdown.renderLicenseLink(answers.license);

    let finalAnswers = {
        ...answers,
        createLicenseBadge,
        createLicenseLink,
    };
    // console.log(answers);
    // console.log(answers.title);
    // console.log(finalAnswers.license);
    // console.log(createMarkdown(finalAnswers));
    // console.log(createMarkdown(finalAnswers.title));
    fs.writeFileSync("readme5.md", createMarkdown.generateMarkdown(finalAnswers))
    // , (err) =>
    //     err ? console.error(err) : console.log("Success!"))

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(createMarkdown(finalAnswers));
            writeToFile(answers);
            console.log("Success!");
            console.log(answers.license);
            console.log(createMarkdown);
        })
        .catch((error) => console.error(error))
}

// Function call to initialize app
init();
