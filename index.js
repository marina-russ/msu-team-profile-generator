// Program Requirements:
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Page Requirements
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Html = require("./src/htmlTemp");
const validator = require("email-validator");