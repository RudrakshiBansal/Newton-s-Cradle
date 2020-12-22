class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:0.8,
      }
      this.body = Bodies.circle(x,y,radius,options);
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      
     ellipseMode(RADIUS)
      fill("purple");
      ellipse(pos.x, pos.y, 30,30);
      pop();

      
    }
  };