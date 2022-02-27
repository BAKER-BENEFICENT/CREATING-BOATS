class Boat
{
    constructor(x, y, width, height, boatPos)
    {   
        this.body = Bodies.rectangle(x, y, width, height);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.boatPosition = boatPos;
        this.width = width;
        this.height = height;
        this.boat_Image = loadImage("./assets/boat.png");
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.boat_Image, 0, this.boatPosition, this.width, this.height);
        pop();
    }
}