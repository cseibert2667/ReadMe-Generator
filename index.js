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
    inquire.prompt(questions)
    .then(function(answers){
        console.log(answers)
    })
}

// function call to initialize program
init();


// FORMAT OF README (markdown included)
// ![license badge](https://img.shields.io/badge/license-<USER INPUT>-blue)
// # PROJECT TITLE
// ## DESCRIPTION
    // description input goes here
// ## TABLE OF CONTENTS
    // * [item one](#item one)
    // * [item two](#item two)
    // * [item three](#item three)
    // * [item four](#item four)
// ## INSTALLATION
    // installation input goes here
// ## USAGE
    // usage input goes here
// ## LICENSE
    // "This project is licensed under the [USER INPUT] license"
// ## CONTRIBUTING
    // contributing input goes here
// ## TESTING
    // to run tests, please run `USER INPUT` in the command line
// ## QUESTIONS
    // contact at [email input], check out more of my GitHub projects at [username input]