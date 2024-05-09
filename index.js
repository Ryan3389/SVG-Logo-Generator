//Importing inquirer, file system, and the Circle, Square, Triangle, and Shape constructors
const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Square, Triangle, Shape } = require('./lib/shapes')

//Setting up the base values for the svg file
class Svg {
    constructor(text, shape, bgColor, fontColor) {

        this.text = text,
            this.shape = shape,
            this.bgColor = bgColor,
            this.fontColor = fontColor
    }
    //This renders the correct shape based on the user input
    renderShape() {
        let currentShape;
        if (this.shape === 'circle') {
            currentShape = new Circle(this.text, this.shape, this.bgColor, this.fontColor)
        } else if (this.shape === 'triangle') {
            currentShape = new Triangle(this.text, this.shape, this.bgColor, this.fontColor)
        } else if (this.shape === 'square') {
            currentShape = new Square(this.text, this.shape, this.bgColor, this.fontColor)
        }

        if (currentShape) {
            return currentShape.render()
        }
    }
}

//This is the array of questions that will be called using inquirer inside the init() function
const questions = [{
    type: 'input',
    message: 'Text (Max of 3 characters',
    name: 'text'
},
{
    type: 'list',
    message: 'Choose a shape',
    choices: ['circle', 'triangle', 'square'],
    name: 'shape'
},
{
    type: 'input',
    message: 'Choose a background color (color name or hexadecimal)',
    name: 'bgColor'
},
{
    type: 'input',
    message: 'Choose a font color (color name or hexadecimal)',
    name: 'fontColor'
}]


//Responsible for creating the svg file, will be called inside the init() function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg')
    })
}

//Once this function is called, the questions will render in the terminal, once the answers are submitted, each variable (ex: response.text) will hold the value of the answer in the response
async function init() {
    await inquirer.prompt(questions).then((response) => {
        const logoSvg = new Svg(response.text, response.shape, response.bgColor, response.fontColor)
        if (response.text.length > 3 || response.text.length === 0) {
            console.log('Invalid entry, please enter 1 to 3 characters')
            return
        }
        //Calls the write file function
        writeToFile('logo.svg', logoSvg.renderShape())
    })
}

init()
