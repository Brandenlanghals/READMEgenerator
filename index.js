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
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project use?",
        choices: ["None", "wtfpl", "apache-2.0", "unlicense", "mpl-2.0", "lgpl", "gpl-3.0", "MIT", "OSL-3.0"]
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What information does the user need for using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list the names of all contributers?"
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
