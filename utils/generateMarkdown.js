function buildHeader(text){
  return `
## ${text}`
}

// Create a function to generate markdown for README
// Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
  let finalMarkdown = `# ${data.Title}
  
  ## Licensing
  
  [![license](https://img.shields.io/badge/License-${data.License}-blueviolet)](https://shields.io)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)`;

  // build description header
  finalMarkdown += buildHeader("Description");
  // build description content
  if( data.Description ){
    finalMarkdown += `
    ${data.Description}`
  }
  
  finalMarkdown += buildHeader("Installation");
  // build installation content
  if( data.Installation){
    finalMarkdown += `
    ${data.Installation}`
  }

  finalMarkdown += buildHeader("Usage");
   // build usage content
  if( data.Usage){
    finalMarkdown += `
    ${data.Usage}`
  }

  finalMarkdown += buildHeader("Tests");
   // build testing content
  if( data.Tests){
    finalMarkdown += `
    ${data.Tests}`
  }

  finalMarkdown += buildHeader("Questions");
   // build questions content
  if( data.Username){
    finalMarkdown += `
    ${data.Username}(https://github.com/${data.Username})`
  }
  if( data.Email){
    finalMarkdown += `
    ${data.Email}`
  }

  finalMarkdown += buildHeader("License");
   // build license content
  if( data.License){
    finalMarkdown += `
    ${data.License}`
  }

  return finalMarkdown;
}
module.exports = generateMarkdown;