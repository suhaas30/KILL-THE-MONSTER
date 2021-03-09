class Monster{

    constructor(x,y,width,height){
        var options={
            restitution:0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Monster-01.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
    }

        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
    }