// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![license badge](https://img.shields.io/badge/license-${data.license}-blue)
  # ${data.title}
  ## DESCRIPTION
  ${data.description}
  ## TABLE OF CONTENTS
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  ## INSTALLATION
  Please run \`${data.installation}\` in the command line to install dependencies.
  ## USAGE
  ${data.usage}
  ## LICENSE
  This project is licensed under the ${data.license} license.
  ## CONTRIBUTING
  ${data.contributing}
  ## TESTING
  To run tests, please run \`${data.tests}\` in the command line
  ## QUESTIONS
  All inquiries can be sent to ${data.email}, and be sure to check out more of my GitHub projects at [${data.username}](https://www.github.com/${data.username})!
`;
}

module.exports = generateMarkdown;
