class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }

     this.body = Bodies.rectangle(x,y,width,height);

     this.width = width;
     this.height = height;

     this.angle = 0 ;

     Matter.Body.setAngle(this.body,this.angle);

     this.image = loadImage("sprites/cannon.png");
    };

    display(){
      var pos = this.body.position ; 
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      if(keyIsDown(LEFT_ARROW)){
        this.angle-= 0.05 ;
      }

       if(keyIsDown(RIGHT_ARROW)){
        this.angle += 0.05 ;
      }

      Matter.Body.setAngle(this.body,this.angle);      

      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER); 
      image(this.image,0,0,this.width,this.height);
    };
}
