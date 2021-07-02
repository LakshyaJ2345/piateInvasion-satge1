class Cannon{
    
    constructor(){
        var options= {isStatic:true}
        this.body=Bodies.rectangle(150,150,50,50,options);
        World.add(world,this.body) //worldname,bodyname
        this.image= loadImage("assets/CANON.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }

}