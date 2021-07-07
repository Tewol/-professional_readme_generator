// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
      message: "provide repository ?",
      name: "Repository"
    },

    {
      type: "input",
      message: "what type of License ?",
      name: "License"
    }
  ];
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    // use fs to write the file
    return fs.writeFile (fileName, data)
  }
  
  // TODO: Create a function to initialize app
  function init() {
    // run inquirer
    inquirer.prompt(questions)
        // in the then() block, call generateMarkdown
        // once you get the markdown content back, send it to writeToFile()
        .then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))
         
        .then(() => console.log("README successfully written."))
    
        .catch((error) => console.log(error))
  }
  // Function call to initialize app
  init();







