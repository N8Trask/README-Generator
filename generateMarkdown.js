// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    if ((license === 'MIT')) {
      licenseSelected =
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if ((license === 'GPLv2')) {
      licenseSelected = 
      '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    }
    if ((license === 'Apache')) {
      licenseSelected =
      '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    return licenseSelected;
  }
  return ''
}

// DONE: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n - [License](#license)\n`;
  }
  return '';
}

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return ""; 
}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Credits](#credits)
  - [Tests](#tests)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${licenseSection}

  ## Credits
  
  ${data.credits}

  ## Tests

  ${data.tests}
`;
}

module.exports = generateMarkdown;