class Roof {
    constructor(x, y, width, height) {
        var roofoptions = {
            ' isStatic':true
            
        }
        this.x=x
        this.y=y
        this.width = width;
        this.height = height;
        this.roof = Bodies.rectangle(this.x,this.y,this.width,this.height, roofoptions);
        Matter.Body.setStatic( this.roof,true)    
        World.add(world, this.roof);
      }
      display(){
        var position =this.roof.position;
       
        rectMode(CENTER);
       fill("silver")

        rect(position.x,position.y, this.width, this.height);
        
      }

}