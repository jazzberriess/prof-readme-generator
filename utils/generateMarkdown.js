
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function renderLicense(license) {

  let licenseBadge;
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)";
      licenseLink = "https://choosealicense.com/licenses/mit/";
      break;

    case "GNU GPLv3":
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)";
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
      break;

    case "The Unlicense":
      licenseBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg?style=for-the-badge)";
      licenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;

    case "Apache License 2.0":
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)";
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
      break;

    case "Mozilla Public License 2.0":
      licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg?)";
      licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
      break;

    case "None":
      licenseBadge = "";
      licenseLink = "";
      break;

    default:
      return "";

  }
  return `[${licenseBadge}](${licenseLink})
    License Badge`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email, createLicenseBadge }) {
  // renderLicense();
  console.log(renderLicense.licenseLink, "Success!");
  return `# ${title}
  # ${description}
  # ${installation}
  # ${usage}
  # ${contribution}
  # ${test}
  # ${license}
  # ${github}
  # ${email}
  # ${createLicenseBadge}





`;
}

module.exports = {
  generateMarkdown,
  renderLicense,

} 