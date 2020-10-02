class BottomSide extends DustbinSide{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.image = loadImage("dustbin_green.png");    
    }

    display() {
        imageMode(CENTER);
        image(this.image, 1100, 580, 210, 200);
        super.display();
    }
}