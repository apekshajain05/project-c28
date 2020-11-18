class boxes{
    constructor(x,y,width,height,angle){
        var options={
            
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        rotate(angle);
        rectMode(CENTER);
        stroke("white");
        strokeWeight(4);
        
        
        rect(pos.x,pos.y,this.width,this.height,angle);
        
    }
}