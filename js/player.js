class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.numberOfLives = 3;
        this.startOver();
        
    }
    update() {

    }
    gameIsOver() {
        this.pauseGame = true;
        this.winner = false;
    }
    gameIsWon() {
        
        this.pauseGame = true;
        this.winner = true;
       
    }
    startOver() {
        this.x = 250;
        this.y = 500;
        this.pauseGame = false;
        this.winner = false;

    }
    collidedWithEnemey() {
        this.numberOfLives -= 1;
        if(this.numberOfLives>0) {
            this.startOver();
        } 
        
    }
    collidedWithGem() {
        score.increase();
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100);

        // // temp only : to help with collision detection
        // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
        
        // ctx.fill();
    }

    handleInput(direction) {
        if(this.pauseGame) { 
            if(direction=='space') {
                if(this.winner) {
                    createGems();
                    score.startOver();
                }

                this.numberOfLives = 3;
                this.startOver();
                
                
            } else {
                return; 
            }
            
        }
        switch(direction) {
            case "right":
                if(this.x<400) {
                    this.x += 100;
                }
                
                break;
            case "left":
                if(this.x>50) {
                    this.x -= 100;
                }
                
                break;
            case "up":
                if(this.y>100) {
                    this.y -= 82;
                }
                
                break;
            case "down":
                if(this.y<500) {
                    this.y += 82;
                }
                
                break;
            default:
                break;
        }
    }
}