//WHTJR - Project 34 - Class 34 - Pendulum V2 
// Pendulum V2 - Drag and Release - 28-12-2020

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log("Oh hello there!");
    
    engine = Engine.create();
    world = engine.world;

    Bob1 = new PendulumBob(500, 450, 50);
    Bob2 = new PendulumBob(600, 450, 50);
    Bob3 = new PendulumBob(700, 450, 50);
    Bob4 = new PendulumBob(800, 450, 50);
    Bob5 = new PendulumBob(900, 450, 50);

    Thread1 = new Thread(Bob1.body, {x: 500, y: 100});
    Thread2 = new Thread(Bob2.body, {x: 600, y: 100});
    Thread3 = new Thread(Bob3.body, {x: 700, y: 100});
    Thread4 = new Thread(Bob4.body, {x: 800, y: 100});
    Thread5 = new Thread(Bob5.body, {x: 900, y: 100});

}

function draw() {
    background(0, 0, 0);

    textFont("Verdana")
    textSize(16);
    fill(255);
    text("Click and drag on the first Bob to move it", 20, 100);
    text("Make sure you don't drag it way too back!", 20, 140);
    text("Press F5 to reset if it's messed up", 20, 550);

    Engine.update(engine);
    
    Bob1.display();
    Bob2.display();
    Bob3.display();
    Bob4.display();
    Bob5.display();

    Thread1.display();
    Thread2.display();
    Thread3.display();
    Thread4.display();
    Thread5.display();
    
}

function mouseDragged() {
    Matter.Body.setPosition(Bob1.body, {x: mouseX, y: mouseY}) 
    
}