class Plinko {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0.5,
            friction:0.5,
            density:1.2
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){
        var plinkoposition = this.body.position;
        push();
        translate(plinkoposition.x,plinkoposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        pop();
    }


}