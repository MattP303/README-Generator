
// Function used to create README layout from user input
function createMarkdown(data) {
    let licenseBadge=''
    switch (data.licenseType) {
        case 'Apache License 2.0':
            licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case 'GNU General Public License v3.0':
            licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        case 'MIT License':
            licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case 'BSD 2-Clause "Simplified" license':
            licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            break;
        case 'Boost Software License 1.0':
            licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case 'Creative Commons Zero v1.0 Universal':
            licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
            break;
        case 'Eclipse Public License 2.0':
            licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
            break;
        case 'GNU Affero General Public License 3.0':
            licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
            break;
        case 'GNU General Public License v2.0':
            licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            break;
        case 'GNU Lesser General Public License v2.1':
            licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            break;
        case 'Mozilla Public License 2.0':
            licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            break;
        case 'The Unlicense':
            licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
            break;

        default:
            break;
    }    
return `
# **${data.title}**

${licenseBadge}

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
