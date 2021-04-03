// Program Requirements:
const inquirer = require("inquirer");
const fs = require("fs");
const htmlRenderer = require('./lib/renderHTML');
// Roles:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Questions needed for each Role:
const { defineEmployee, employeeQuestions, engineerQuestions, internQuestions, managerQuestions} = require('./lib/questions');
// Array of all employees
const employeeArray = [];

// Start Inquirer to gather user data
function init() {
  inquirer
    .prompt(employeeQuestions.concat(managerQuestions))
    .then(({ name, id, email, officeNumber }) => {
      console.log(name, id, email, officeNumber);
      let manager = new Manager(name, id, email, officeNumber);
      employeeArray.push(manager);
      getEmployee();
    })
}

// Defines Employee and determines job role
function getEmployee() {
  inquirer
    .prompt(defineEmployee)
    .then(({ jobRole }) => {
      switch (jobRole) {
        case 'Engineer':
          getEngineer();
          break;
        case 'Intern':
          getIntern();
          break;
        case 'Manager':
          getManager();
          break;
        case 'Complete':
          htmlRenderer(employeeArray);
          break;
      }
    })
}

// Gets questions for Engineer, then adds data to array
function getEngineer() {
  inquirer
    .prompt(employeeQuestions.concat(engineerQuestions))
    .then(({ name, id, email, githubUsername }) => {
      let engineer = new Engineer(name, id, email, githubUsername);
      employeeArray.push(engineer);
      getEmployee();
    })
}

// Gets questions for Intern, then adds data to array
function getIntern() {
  inquirer
    .prompt(employeeQuestions.concat(internQuestions))
    .then(({ name, id, email, school }) => {
      let intern = new Intern(name, id, email, school);
      employeeArray.push(intern)
      getEmployee();
    })
}

// Gets questions for Manager, then adds data to array
function getManager() {
  inquirer
    .prompt(employeeQuestions.concat(managerQuestions))
    .then(({ name, id, email, office }) => {
      let manager = new Manager(name, id, email, office);
      employeeArray.push(manager)
      getEmployee();
    })
}

// Runs methods
init();