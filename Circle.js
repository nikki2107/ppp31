class Circle{
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
        plinkos = [];
       
        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("white")
        ellipse(0,0,10,10)
        pop();
        for (var j = 40; j <= width; j = j+50)
        {
         plinkos.push(new Circle(j,75));
        }
        for (var j = 15; j<=width-10;j=j+50)
        {
            plinkos.push(new Circle(j,175))
        }
        }
        }