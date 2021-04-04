// Program Requirements:
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const html = require('./lib/renderHTML');
// Roles:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Set up Async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
// Array of all employees
let teamArray = [];
let teamString = ``;


// Main function to run application
async function main() {
  try {
    await prompt()

    for (let i = 0; i < teamArray.length; i++) {
      teamString = teamString + html.generateCard(teamArray[i]);
    }

    let finalHtml = html.generateHTML(teamString)
    console.log("Generating index.html file....");
    console.log("-------------------------------");

    writeFileAsync("./output/index.html", finalHtml);
    console.log("index.html file created successfully");
    console.log("-------------------------------");

  } catch (err) {
    return console.log(err);
  }
}

// Inquirer prompts to gather user generated data
async function prompt() {
  let responseDone = "";

  do {
    try {
      console.log("-------------------------------");
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Employee Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Employee ID number: ",
        },
        {
          type: "input",
          name: "email",
          message: "Employee email address: ",
        },
        {
          type: "list",
          name: "role",
          message: "What what is the employee's role: ",
          choices: [
            "Engineer",
            "Intern",
            "Manager"
          ]
        }
      ]);

      let response2 = ""

      if (response.role === "Engineer") {
        response2 = await inquirer.prompt([{
          type: "input",
          name: "x",
          message: "Engineer's github username: ",
        },]);

        // Add to team Array
        const engineer = new Engineer(response.name, response.id, response.email, response2.x);
        teamArray.push(engineer);

      } else if (response.role === "Intern") {
        response2 = await inquirer.prompt([{
          type: "input",
          name: "x",
          message: "Intern's school name: ",
        },]);

        // Add to team Array
        const intern = new Intern(response.name, response.id, response.email, response2.x);
        teamArray.push(intern);

      } else if (response.role === "Manager") {
        response2 = await inquirer.prompt([{
          type: "input",
          name: "x",
          message: "Manager's office number: ",
        },]);

        // Add to team Array
        const manager = new Manager(response.name, response.id, response.email, response2.x);
        teamArray.push(manager);
      }

    } catch (err) {
      return console.log(err);
    }

    responseDone = await inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Do you have another employee to enter? ",
      choices: [
        "Yes",
        "No"
      ]
    },]);

  } while (responseDone.finish === "Yes");
}

// Run Application
main();