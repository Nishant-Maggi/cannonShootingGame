class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

    }

    attach(body){}

    shoot(){
        this.body.velocityX = 2;
    }

    display(){
        
    }

}
