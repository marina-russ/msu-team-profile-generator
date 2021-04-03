const questions = {
  defineEmployee: [
    {
      type: 'list',
      message: 'Enter Employee Role:',
      name: 'role',
      choices: ['Engineer', 'Intern', 'Manager']
    }
  ],
  employeeQuestions: [
    {
      type: "input",
      name: "name",
      message: "Employee Name:",
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID number:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email address:',
    }
  ],
  managerQuestions: [
    {
      type: 'input',
      name: 'office',
      message: 'Office number:',
    }
  ],
  engineerQuestions: [
    {
      type: 'input',
      name: 'githubUsername',
      message: 'GitHub username:',
    }
  ],
  internQuestions: [
    {
      type: 'input',
      name: 'school',
      message: 'School name:',
    }
  ]
};

module.exports = questions;