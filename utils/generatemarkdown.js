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
`;
}
module.exports = generateMarkdown;