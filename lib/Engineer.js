const Employee = require("./Employee");

// Create Engineer Class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
  }
  getRole() {
    return this.role;
  }
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;