class Audio extends Phaser.Scene{
	constructor() {
		super('Audio');

	}
	init(){}

	preload(){

		//chargement de la musique
		this.load.audio('MenuMusic','music/MenuMusic.mp3');
		this.load.audio('depart','music/depart.mp3');
		this.load.audio('donjon','music/donjon.mp3');
		this.load.audio('outro','music/outro.mp3');

	}

	create(){}

	update(){
		this.scene.start("Menu");
	}
}