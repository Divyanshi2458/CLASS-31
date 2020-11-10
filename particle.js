class Plinko
{
    constructor(x,y,r){
        var options={
            isStatic:false,
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.body=Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);

    }
    display()
    {
        var Plinkopos=this.body.position;
        push ()
        translate(Plinkopos.x,Plinkopos.y)
        rectMode(CENTER)   
        strokeWeight(3)
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
      
     }
}