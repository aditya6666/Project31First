class Particle {
    constructor(x,y,r,color){
        var options = {
            isStatic: true,
            restitution:0.4
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }
    display(){
        var paperposition = this.body.position;
        var angle = this.body.angle;
        push();
        translate(paperposition.x,paperposition.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }


}