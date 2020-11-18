class Ball{
    constructor(){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.rectangle(200,50,35,35,options);
        World.add(world,this.body);

    }
    display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       rectMode(CENTER);
        rect(200,50,35,35);
        pop();
    }
}