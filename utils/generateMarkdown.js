
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
  }
  return (`[${licenseBadge}](${licenseLink})`)
    `License Badge`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email, createLicenseBadge, licenseBadge, licenseLink }) {
  // renderLicense();
  console.log(licenseBadge, "Success!");
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
  #${licenseBadge}
  #${licenseLink}


`;
}

module.exports = {
  generateMarkdown,
  renderLicense,

} 