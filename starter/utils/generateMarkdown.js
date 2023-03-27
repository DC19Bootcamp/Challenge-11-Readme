function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![${data.license} License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
This project is covered under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at ${data.email}. 
To see more of my work, visit my [GitHub profile](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
