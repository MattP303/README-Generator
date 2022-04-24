function createMarkdown(data) {
return `
# **${data.title}**

${data.badge}

## Description 
${data.description}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test](#test)
- [License](#license)
- [GitHub](#github)
- [Contact](#contact) 

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## Contribution Guidelines
${data.contributionGuidelines}

## Test
${data.tests}

## License
${data.licenseType}

## GitHub
${data.githubUsername}

## Contact
${data.email}

`;
}

module.exports = createMarkdown;
