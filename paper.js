class Paper
{
  constructor(x,y,diameter)
  {
     var options=
     {
       isStatic: false,
       restitution: 0.3,
       friction: 0.5,
       density: 1.2
     }
     this.x=x;
     this.y=y;
     this.diameter=diameter;
     this.image=loadImage("paper.png");
     this.body = Bodies.circle(this.x,this.y,(this.diameter-20)/2,options);
     this.diameter = diameter;
     World.add(world,this.body);
  }

  display()
  {
    var pos = this.body.position;
    push ();
    translate(pos.x,pos.y);
    fill(255,0,255);
    imageMode (CENTER);
    image(this.image,0,0,this.diameter);
  }
}