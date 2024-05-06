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
