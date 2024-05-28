export class Game extends Phaser.Scene{

    constructor(){
        super({ key: 'game'});
    }

    preload(){
        this.load.image('background', 'img/background.png');
        this.load.image('paper', 'img/paper.png');
        this.load.image('rock', 'img/rock.png');
        this.load.image('scissors', 'img/scissors.png');
    }

    create(){
        this.add.image(0, 0,'background')
    }

}