class Paper1 extends ParentClass {
    constructor(x, y, radius){
        super(x, y, radius, radius);
        
        var properties = {
            restitution: 0.3,
            friction: 0.5, 
            density: 1.2
        }

        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x, y, radius/1.5, properties);

        this.width = radius*2;
        this.height = radius*2;

        World.add(world, this.body);
    }

} 