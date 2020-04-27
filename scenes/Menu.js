   class Menu extends Phaser.Scene{

constructor(){
    super("Menu")
}

    preload(){}

    create(){

        this.add.image(400, 300, 'fond').setScale(0.30);
        this.add.text(400, 450, 'APPUYEZ SUR ENTRER', { fontFamily: 'SpaceQuest', fontSize: 30}).setOrigin(0.5,0.5);
        cursors = this.input.keyboard.createCursorKeys();
        enter = this.input.keyboard.addKey('ENTER');

        //musique
        menuMusic = this.sound.add('MenuMusic');
        menuMusic.play({volume: 0.7, loop: true});
        }

    update(){
        //démarrage du jeu

        if (enter.isDown){
            this.time.addEvent({
                delay: 100,
                callback: ()=>{
                menuMusic.mute = true;
                this.scene.start("depart");
                },
            });
        }
    }

    }