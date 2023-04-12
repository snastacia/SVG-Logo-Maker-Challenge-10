const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

const promptQuestions = [
    {
      type: "input",
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
      type: "input",
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:',
    },
    {
      type: "list",
      name: 'shape',
      message: 'Choose a shape for your logo:',
      type: 'list',
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape:',
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

function init() {

  inquirer.prompt(promptQuestions)
      .then(({text, textColor, shape, shapeColor }) => {
          if (shape === 'Circle') {
            svgShape = new Circle(shapeColor, text, textColor);
          } else if (shape === 'Square') {
            svgShape = new Square(shapeColor, text, textColor);
          } else {
            svgShape = new Triangle(shapeColor, text, textColor);
          }

      writeToFile("logo.svg", svgShape.renderSVG())
  })
};

init();

