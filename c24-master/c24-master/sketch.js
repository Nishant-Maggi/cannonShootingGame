// You could have multiple flags like: start, launch to indicate the state of the game.
var startFlag,launchFlag;

var START  = 0 ;

var gameState = START;

var LAUNCH = 1;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var engine,world;

var startFlagI;

var launchFlagI;

var cannon;

var cannonBall;

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

var ground;

function preload(){
    startFlagI = loadImage("sprites/startSign.png");

    launchFlagI = loadImage("sprites/Launchsign.png");
}

function setup() {

    engine = Engine.create();
    world = engine.world;
    
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(400,400);

    ground = new Ground(200,390,400,10);

    cannon = new Tanker(40,335,100,100);

}

function draw() {

background(255,255,255);
// Remember to update the Matter Engine and set the background.
Engine.update(engine);

if(gameState === START){
   image(startFlagI,150,150,100,100);

   
}

ground.display();

cannon.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
   
}