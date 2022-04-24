// Include NPM packages needed to function
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const Choices = require("inquirer/lib/objects/choices");

// Define array of user questions and prompt types
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please share a description for the project."
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Please share any instalattion instructions or tips."
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Please explain the inteded usage for this project."
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Please define the contribution guidelines for this project."
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Please provide the project licence or your badge link"
    },
    {
        type: "input",
        name: "tests",
        message: "Please share any tests for this project."
    },
    {
        type: "list",
        name: "licenseType",
        message: "Please enter your GitHub username.",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" license', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License 3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Share an email for users and devlopers to contact you."
    },
];
