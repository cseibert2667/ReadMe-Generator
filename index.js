const inquire = require("inquirer")
const fs = require("fs")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter the name of your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a brief description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What should the user know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What should the user know about contributing to the repo?",
        name: "contributing"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
