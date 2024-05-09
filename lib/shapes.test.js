const { Circle, Triangle, Square } = require('./shapes')

//This tests the Circle constructor to test if the correct color will render using the following methods (setBgColor, setFontColor, setTextColor)
describe('Circle', () => {
    it('should render correctly', () => {
        const shape = new Circle()
        shape.setBgColor('blue')
        shape.setFontColor('red')
        shape.setText('ABC')
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>
        </svg>`)
    })
})
//This tests the Triangle constructor to test if the correct color will render using the following methods (setBgColor, setFontColor, setTextColor)
describe('Triangle', () => {
    it('should render correctly', () => {
        const shape = new Triangle()
        shape.setBgColor('blue')
        shape.setFontColor('red')
        shape.setText('ABC')
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="red">ABC</text></svg>`)
    })
})

//This tests the Square constructor to test if the correct color will render using the following methods (setBgColor, setFontColor, setTextColor)
describe('Square', () => {
    it('should render correctly', () => {
        const shape = new Square()
        shape.setBgColor('blue')
        shape.setFontColor('red')
        shape.setText('ABC')
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="blue" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="red">ABC</text>
        </svg>`)
    })
})