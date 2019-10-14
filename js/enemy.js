class Enemy {

    constructor(x, y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;

        this.velocity = 100 + (Math.random() * 100); // velcity will be between 100 and 200
        //this.velocity = 0;
    }
    update(delta) {
        
        this.x += this.velocity * delta;
        if (this.x > ctx.canvas.width + 50) {
            this.x = -100;
        }

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x - 50, this.y-100);

        // // temp only : to help with collision detection
        // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
        
        // ctx.fill();
    }
};

