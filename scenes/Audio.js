class Audio extends Phaser.Scene{
	constructor() {
		super('Audio');

	}
	init(){}

	preload(){

		//chargement de la musique
		this.load.audio('MenuMusic','music/MenuMusic.mp3');

	}

	create(){}

	update(){
		this.scene.start("Menu");
	}
}