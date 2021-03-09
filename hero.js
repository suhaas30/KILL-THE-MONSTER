class Hero{

    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Superhero-01.png");
        this.radius = radius;
        World.add(world, this.body);
        
    }

        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
    }