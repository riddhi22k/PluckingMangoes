class stone{
    constructor(x,y,r)
    {
        var options={
            istatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);
    }
    display(){
    
        var stonePos=this.body.position;
        push()
        translate(stonePos.x,stonePos.y);
        rectMode(CENTER)
        rotate(this.body.angle)
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.r*3,this.r*3);
        pop()
        
    }
}
