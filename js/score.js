class Score {
    constructor() {
        this.startOver();
    }
    startOver() {
        this.gemScore = 0;
    }
    render() {
        ctx.font = "30px Arial";
        ctx.fillText(`Lives: ${player.numberOfLives}`, 10, 40);
        ctx.fillText(`Score: ${this.gemScore}`, 350, 40);
        if(player.numberOfLives < 1) { 
            player.gameIsOver();
            this.askForANewGame(); 
        }
        if(allGems.length == 0) {
            player.gameIsWon();
            this.askForANewGame(); 
        }
    }
    askForANewGame() {
        ctx.font = "25px Arial";
        ctx.fillText("Game Over. Press Space bar to play again", 10, 610);
    }
    increase() {
        this.gemScore += 50;
    }
}