class Assets extends Phaser.Scene {
	constructor(){
		super('Assets')
	}

	init(){}

	preload(){

        this.load.image('fond','assets/fondintro.png');
        this.load.image('fusee','assets/fusée.png');
        this.load.image('caisseV','assets/Caisse_verte.png');
        this.load.image('caisseR','assets/Caisse_rouge.png');
        this.load.image('caisseB','assets/Caisse_bleue.png');
        this.load.image('cratere','assets/cratère.png');
        this.load.image('essence','assets/essence.png');
        this.load.image('soins','assets/boite_soins.png');
        this.load.image('rocheG','assets/gros_roché.png');
        this.load.image('rocheM','assets/roché_moyen.png');
        this.load.image('rocheP','assets/petit_roché.png');
        this.load.image('trouP','assets/petit_trou.png');
        this.load.image('trouPP','assets/petit_trou2.png');
        this.load.image('pistolet','assets/pistolet.png');
        this.load.image('matraque','assets/matraque.png');
        this.load.image('robot1dos','assets/robot1dos.png');
        this.load.image('robot1cote','assets/robot1cote.png');
        this.load.image('robot2dos','assets/robot2dos.png');
        this.load.image('robot2cote','assets/robot2cote.png');
	}

 create(){}

 update(){
 	this.scene.start('Audio');
 }
}