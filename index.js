const inquire = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        message: "Please enter your GitHub username:",
        name: "username"
    },
    {
        message: "Please enter your email address:",
        name: "email"
    },
    {
        message: "Please enter the name of your project:",
        name: "title"
    },
    {
        message: "Please enter a brief description of your project:",
        name: "description"
    },
    {
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        message: "What should the user know about using the repo?",
        name: "usage"
    },
    {
        message: "What should the user know about contributing to the repo?",
        name: "contributing"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log("file written")
    })
}

// function to initialize program
function init() {
    inquire.prompt(questions)
    .then(function(data){
        const readme = markdown(data);
        writeToFile(`${data.title}-README.md`, readme)
    })
}

// function call to initialize program
init();