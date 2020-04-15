class Ball {
  constructor(x,y,radiusX,radiusY) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }

    this.body = Bodies.ellipse(x,y,radiusX,radiusY);
    
  }

  display() {
    fill("black")
    stroke("white")
    ellipse(0,0,this.width,this.height);
  }
}
