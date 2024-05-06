class Shape {
    constructor(text, shape, bgColor, fontColor) {
        this.text = text,
            this.shape = shape,
            this.bgColor = bgColor,
            this.fontColor = fontColor
    }
}

class Circle extends Shape {
    constructor(text, shape, bgColor, fontColor) {
        super(text, shape, bgColor, fontColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
        </svg>`
    }
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

class Triangle extends Shape {
    constructor(text, shape, bgColor, fontColor) {
        super(text, shape, bgColor, fontColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.text}</text></svg>`
    }
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

class Square extends Shape {
    constructor(text, shape, bgColor, fontColor) {
        super(text, shape, bgColor, fontColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="${this.bgColor}" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
        </svg>`
    }
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

module.exports = { Circle, Triangle, Square }

