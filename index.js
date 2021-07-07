// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    // title
    // description
    // license 
    {
      type: "input",
      message: "What installtion instrucrtions are there?",
      name: "Installation"
    },
    {
      type: "input",
      message: "What usage instrucrtions are there?",
      name: "Usage"
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
    
        .catch((err) => console.log(err))
  }
  // Function call to initialize app
  init();







