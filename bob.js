class Bob{
    constructor(x,y,r){
        var option = {
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,r,option);
        World.add(world,this.body);
    }   
    display(){
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,20);
    }
    // rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
    
}