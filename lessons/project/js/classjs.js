class Options {
    constructor(height,width,bg,fontSize,textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    styleMethod (text) {
        let element = document.createElement('div');
        let newText = document.createTextNode(text);
        document.body.appendChild(element);
        element.appendChild(newText);
       element.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    }
}

const newElementStyle = new Options(300, 350, "red", 14, "center");
newElementStyle.styleMethod('Hello');