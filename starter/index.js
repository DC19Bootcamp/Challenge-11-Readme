// import packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// function to write the README file
const writeToFile = util.promisify(fs.writeFile);

// initialize the application
async function init() {
  try {
    // prompt user for information about repo
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines for your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions for your project:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);

    // create the README file contents based on user input
    const readmeContent = `
# ${userInput.title}

## Description
${userInput.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License
[![License: ${userInput.license}](https://img.shields.io/badge/License-${userInput.license}-yellow.svg)](https://opensource.org/licenses/${userInput.license})
${userInput.license !== 'None' ? `This project is covered under the ${userInput.license} license.` : 'This project is not currently licensed.'}

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions
If you have any questions about the project, feel free to contact me at ${userInput.email}. You can also find me on GitHub at https://github.com/${userInput.github}.
`;

    // write the README file to disk
    await writeToFile('README.md', readmeContent);

    // notify the user that the README file was created successfully
    console.log('README.md file created successfully!');
  } catch (err) {
    // if an error occurs, log it to the console
    console.error(err);
  }
}

// call the init function to start the application
init();
