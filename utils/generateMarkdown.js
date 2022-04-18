
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge;
  switch (license) {
    case "MIT":
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)";
      break;

    case "GNU GPLv3":
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)";
      break;

    case "The Unlicense":
      licenseBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg?style=for-the-badge)";
      break;

    case "Apache License 2.0":
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)";
      break;

    case "Mozilla Public License 2.0":
      licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg?)";
      break;

    case "None":
      licenseBadge = "";
      break;

    default:
      return "";

  }
  return `${licenseBadge}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "https://choosealicense.com/licenses/mit/";
      break;

    case "GNU GPLv3":
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
      break;

    case "The Unlicense":
      licenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;

    case "Apache License 2.0":
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
      break;

    case "Mozilla Public License 2.0":
      licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
      break;

    case "None":
      licenseLink = "";
      break;

    default:
      return "";
  }
  return `${licenseLink}`
}




// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email, createLicenseBadge, createLicenseLink }) {

  return `# ${title}

  ## Description
  ${createLicenseBadge}

  ${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License   
This application is covered under the ${license} [${createLicenseLink}]license.

## Contributing
${contribution}

## Tests
${test}

## Questions
${github}
${email}


`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,

} 