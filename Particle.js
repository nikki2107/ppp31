class Particle{
    constructor(x,y,radius){
    var options = {
       
        restitution : 0.1,
        friction : 1,
        density : 1.2
    }

        this.body = Bodies.circle(x,y,radius,options)
        this.x = x
        this.y = y
        this.radius = radius
        this.color=color(random(0,255),random(0,255),random(0,255))
        
       
        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position
       
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill(this.color)
        ellipse(0,0,10,10)
        pop();
        }
        }