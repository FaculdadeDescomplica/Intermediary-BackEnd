import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Qual seu nome? ',
    },
    {
        type: 'list',
        name: 'ageRange',
        message: 'Qual sua faixa etária? ',
        choices: [
            '29 a 39',
            '40 a 50',
            '50+'
        ]
    }
  ])
  .then((answers) => {
    console.log("Hello " + answers.username + " com " + answers.ageRange + " anos :D");
  });