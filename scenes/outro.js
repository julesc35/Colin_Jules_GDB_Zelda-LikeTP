class outro extends Phaser.Scene{
	constructor() {
		super('outro');

	}
	init(){}

	preload(){}

	create(){
		this.add.image(400, 300, 'fondoutro').setScale(0.25);
		        //musique
        outroMusic = this.sound.add('outro');
        outroMusic.play({volume: 0.7, loop: true});
	}

	update(){}
}