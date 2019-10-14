class Gem {
    static sprites = ["Gem Blue.png", "Gem Green.png", "Gem Orange.png"];
    static yLocations = [160, 240, 330];

    constructor() {
        let index = parseInt(Math.random() * Gem.sprites.length);

        this.sprite = 'images/' + Gem.sprites[index];
        this.angle = 0;
        this.angleSpeed = -2 + (Math.random() * 4);  // range: -2 to 2



        //this.x = 50 + (Math.random() * 5) * 90;
        let column = parseInt(Math.random() * 5);
        this.x = 100 * column + 50;

        let yIndex = parseInt(Math.random() * Gem.yLocations.length);

        this.y = Gem.yLocations[yIndex];

    }
    update(dt) {
        this.angle += this.angleSpeed * dt ;
    }
    render() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(0.5, 0.5);
        ctx.drawImage(Resources.get(this.sprite),  - 50 ,  - 100);

        // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        // ctx.beginPath();
        // ctx.arc(0, 0, 70, 0, 2*Math.PI);
        
        // ctx.fill();

        ctx.restore();

        // // temp only : to help with collision detection
        
    }
}