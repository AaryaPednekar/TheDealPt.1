class Form{
    constructor(){
       this.button = createButton('Play Now!');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.button.hide();
        this.title.hide();
    }
    display() {
        this.title.html("THE DEAL");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'white');
        
    }
}