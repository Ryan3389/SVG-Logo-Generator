//Shape constructor, sets up the base values for the object
class Shape {
    constructor(text, shape, bgColor, fontColor) {
        this.text = text,
            this.shape = shape,
            this.bgColor = bgColor,
            this.fontColor = fontColor
    }
}

//Circle constructor - this will inherit similar values from shape constructor
class Circle extends Shape {
    constructor(text, shape, bgColor, fontColor) {
        super(text, shape, bgColor, fontColor)
    }
    //responsible for rendering string for the circle shape with the correct colors
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
        </svg>`
    }
    //the next few methods are used in the JEST test file to test for different colors
    setBgColor(bgColor) {
        this.bgColor = bgColor
    }
    setFontColor(fontColor) {
        this.fontColor = fontColor
    }
    setText(text) {
        this.text = text
    }
}
//Triangle constructor inherits shared values from shape constructor
class Triangle extends Shape {
    constructor(text, shape, bgColor, fontColor) {
        super(text, shape, bgColor, fontColor)
    }
    //renders string for triangle shape and colors
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.text}</text></svg>`
    }
    //Next three methods are for JEST test to check if the correct color will render
    setBgColor(bgColor) {
        this.bgColor = bgColor
    }
    setFontColor(fontColor) {
        this.fontColor = fontColor
    }
    setText(text) {
        this.text = text
    }
}

//Square constructor inherits shared values from shape constructor
class Square extends Shape {
    constructor(text, shape, bgColor, fontColor) {
        super(text, shape, bgColor, fontColor)
    }
    //Responsible for rendering the string for the square and correct colors
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="${this.bgColor}" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
        </svg>`
    }
    //Next three methods are used in JEST file to test if the correct color renders
    setBgColor(bgColor) {
        this.bgColor = bgColor
    }
    setFontColor(fontColor) {
        this.fontColor = fontColor
    }
    setText(text) {
        this.text = text
    }
}

//exports the three constructors

module.exports = { Circle, Triangle, Square }

