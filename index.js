const inquirer = require('inquirer');
const svgCaptcha = require('svg-captcha');
const fs = require('fs');

const shapes = ['circle', 'triangle', 'square'];

inquirer
  .prompt([
    {
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:',
    },
    {
      name: 'shape',
      message: 'Choose a shape for your logo:',
      type: 'list',
      choices: shapes,
    },
    {
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape:',
    },
  ])
  .then((answers) => {
    const captcha = svgCaptcha.create({
      text: answers.text,
      size: { width: 300, height: 200 },
      color: answers.textColor,
      background: answers.shapeColor,
    });
    const svg = captcha.data;
    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  })
  .catch((error) => {
    console.error(error);
  });
