class Circle{

    constructor(x,y){

        var particle_options = {
            restitution:1.0,
            friction:0.02
          }
        this.r=15;
        this.body= Matter.Bodies.circle(x,y,this.r,particle_options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);


    }

    display(){

        push()
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop()

    }
}