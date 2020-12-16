class Bob {
    constructor(x, y, radius) {
        var boboptions = {
           ' isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.radius = radius;
        this.x=x
        this.y=y
        this.bob = Bodies.circle(this.x,this.y,this.radius,boboptions);
        
       Matter.Body.setStatic( this.bob,true) 
       

        World.add(world, this.bob);
      }
      display(bobcolor){
        var pos =this.bob.position;
        var angle = this.bob.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(bobcolor)
       
        circle( 0, 0, this.radius);
        pop();
      }

}