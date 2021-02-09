class Paper {
   constructor (x,y){
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
} 
 
    this.body = Bodies.circle(x,y,30,options)
    World.add(world,this.body)
    this.width = 30
    this.height = 30
}

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill(255);
    ellipse(0, 0, this.width, this.height);
    pop();

}
}