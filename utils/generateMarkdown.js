function generateMarkdown(userResponses, userInfo) {
    // Generate the TOC based on userResponses
    let draftTOC = `## Table of Contents`;

    if (userResponses.installation !== '') { draftTOC += `
    * [Installation](#installation)` };
    
    if (userResponses.usage !== '') { draftTOC += `
    * [Usage](#usage)` };

    if (userResponses.contributing !== '') { draftTOC += `
    * [Contributing](#contributing)` };

    if (userResponses.tests !== '') { draftTOC += `
    * [Tests](#tests)` };

    // Generate markdown for HUD of README.md
    let draftMarkdown = 
    `# ${userResponses.title}

    ![Badge for Github repo HUD](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)

    ## Description
    ${userResponses.description}
    `

    // Add TOC to markdown
    draftMarkdown += draftTOC;

    // Add license section
    draftMarkdown += `
    * [License](#license)`;

    // Installation section
    if (userResponses.installation !== '') {
        draftMarkdown +=
        `
        ## Installation

        *Steps required to install this project and get the application running:*

        ${userResponses.installation}`
    };

    // Usage Section
    if (userResponses.usage !== '') {
        draftMarkdown +=
        `
        ##Usage
        *Instructions for use:*
        ${userResponses.usage}
        `
    };

    // Contributors Section
    
}