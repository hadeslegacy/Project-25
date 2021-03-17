class paperball{
  constructor(x,y,width,height){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x
      this.y=y
      this.w=width
      this.h=height
      this.body = Bodies.rectangle(this.x,this.y,this.h,this.w,options)
      this.image=loadImage("paper.png")
      World.add(world,this.body)
      


  }
  display(){
    push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w+30, this.h+30);
        pop();
  }
}