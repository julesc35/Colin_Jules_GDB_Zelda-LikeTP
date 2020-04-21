var enter;
var text;
var menuMusic;

    class Menu extends Phaser.Scene{

constructor(){
    super("Menu")
}

    preload(){}

    create(){

        this.add.image(400, 300, 'fond').setScale(0.30);
        this.add.text(200, 300, 'APPUYEZ SUR ENTRER', { fontFamily: 'SpaceQuest', fontSize: 30}).setOrigin(0.5,0.5);
        enter = this.input.keyboard.addKey('ENTER');
        //cursors = this.input.keyboard.createCursorKey();

        //musique
        menuMusic = this.sound.add('MenuMusic');
        menuMusic.play({volume: 0.3, loop: true});
        }

    update(){
        //démarrage du jeu

        if (enter.isDown){
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                menuMusic.mute = true;
                this.scene.start("scene2");
                },
            });
        }
    }

    }