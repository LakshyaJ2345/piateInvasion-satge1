class Tower{
    
    constructor(){
        var options= {isStatic:true}
        this.body=Bodies.rectangle(150,450,120,400,options);
        World.add(world,this.body) //worldname,bodyname
        this.image= loadImage("assets/tower.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,120,400);
    }

}