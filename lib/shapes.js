class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text
        this.textColor = textColor
    }

    setColor(color) {
        this.shapeColor = color;
    }
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    constructor(shapeColor,text,textColor) {
    super(shapeColor,text,textColor);
    }

    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
    }
};

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    }

    render() {
        return `<rect x=50 height="200" width="200" fill="${this.shapeColor}" />`;
    }
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    }

    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`;
    }
};


module.exports = {Circle, Square, Triangle};