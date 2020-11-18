class Holder{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,250,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,250,20);
    }
}