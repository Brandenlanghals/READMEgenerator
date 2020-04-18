const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project use?",
        choices: ["None", "APACHE 2.0", "GPL 3.0", "BSD 3", "MIT"]
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("searching...");

        api
        .getUser(inquirerResponses.gitHub)
        .then(({ data }) => {
            writeToFile("README.md", generateMarkdown({...inquirerResponses, ...data }));
        })
    })

}

init();
