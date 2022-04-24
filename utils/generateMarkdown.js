function createMarkdown(data) {
    return `
  # **${data.title}**

  ${data.badge}

  ## Description 
  ${data.description}
  
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution Guidelines](#Contribution Guidelines)
  - [Test](#Test)
  - [License](#License)
  - [GitHub](#GitHub)
  - [Contact](#Contact) 

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