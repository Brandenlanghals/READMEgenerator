function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}
function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
  }
  return ''
}
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)



${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, please type the following command:

\`\`\`
${data.test}
\`\`\`

## Questions 

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 14px width="20" />

Questions? Please contact [${data.github}](${data.url}) at ${data.email}. 
`;
}
module.exports = generateMarkdown;