// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    // what badge is given/presented 
    return
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  // you fill this in


  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { }


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) { }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# Title: ${data.title}

  ${data.description}


  ${renderLicenseLink(data.license)}
  ### Here is another Title Block 

  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
  }
}
module.exports = generateMarkdown;
