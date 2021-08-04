// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
  },
  {
    type: "input",
    message: "Describ your project?",
    name: "Description"
  },
  {
    type: "input",
    message: "Provide installtion instrucrtions?",
    name: "Installation"
  },
  {
    type: "input",
    message: "What usage instrucrtions are there?",
    name: "Usage"
  },
  {
    type: "input",
    message: "provide testing ?",
    name: "Tests"
  },
  {
    type: "input",
    message: "Contact if you have any questions ?",
    message: "Enter GitHub Username?",
    name: "Username"
  },
  {
    type: "input",
    message: "Enter Email address",
    name: "Email"
  },
  {
    type: "checkbox",
    message: "Choose a license for the project",
    choices: ["MIT", "BSD", "Apache", "GNU-General-public"],
    name: "License"
  }
];

// A function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync (fileName, data)
}

// A function to initialize app
function init() {
  // run inquirer
  inquirer.prompt(questions)
  //call generateMarkdown and send it to writeToFile()
  .then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))
  .then(() => console.log("README successfully written."))
  .catch((error) => console.log(error))
}

// Function call to initialize app
init();







