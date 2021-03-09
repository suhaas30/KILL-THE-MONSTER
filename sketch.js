const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;




function preload() {
//preload the images here
  bgImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(300,400,300);
  sling = new SlingShot(hero.body,{x:400,y:400});
  ground = new Ground(700,500,1000,10);
  monster = new Monster(1000,490,200,200);
  block1 = new Block(650,450,40,40);
  block2 = new Block(650,410,40,40);
  block3 = new Block(650,370,40,40);
  block4 = new Block(650,330,40,40);
  block5 = new Block(650,290,40,40);
  block6 = new Block(690,450,40,40);
  block7 = new Block(690,410,40,40);
  block8 = new Block(690,370,40,40);
  block9 = new Block(690,310,40,40);
  block10 = new Block(690,270,40,40);
  block11 = new Block(730,450,40,40);
  block12 = new Block(730,410,40,40);
  block13 = new Block(730,370,40,40);
  block14 = new Block(730,310,40,40);
  block15 = new Block(730,270,40,40);

  

 
}




function draw() {
  background(bgImg);
  Engine.update(engine);



  hero.display();
  monster.display();

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  



  

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}



