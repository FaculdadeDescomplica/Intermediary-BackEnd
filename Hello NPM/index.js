import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Qual seu nome? ',
    }
  ])
  .then((answers) => {
    console.log("Hello " + answers.username);
  });