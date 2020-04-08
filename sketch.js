// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    createCavas(1200,400);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    ball1=new Ball(400,200,30);
    ball2=new Ball(450,200,30);


}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
ball1.display();
ball2.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}