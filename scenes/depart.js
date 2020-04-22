class depart extends Phaser.Scene{
    constructor() {
        super('depart');

    }
    init(){}

    preload(){}

    create(){
    //creation des touches
    //ramasser objets
    pressE = this.input.keyboard.addKey('E');

    //utiliser la matraque
    pressF = this.input.keyboard.addKey('F');

    //utiliser le pistolet
    pressA = this.input.keyboard.addKey('A');

    //arrivée du joueur

    player = this.physics.add.image(400, 300, 'joueur').setScale(0.5).setDepth(1);
    //collision du joueur au bordures
    //player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
    this.anims.create({
        key: 'animation_joueur_droite',
        frames: this.anims.generateFrameNumbers('courseJ, start',{start: 6, end: 46}),
        frameRate: 10,
        repeat: -1
    });


    //creation du décors

       this.add.image(400,300,'terrain').setDepth(-5);
       mur_invisible = this.physics.add.staticGroup();
       mur_invisible.create(400, 2, 'collide').setVisible(false).setScale(0.15, 0.15); 
       mur_invisible.create(2, 592, 'collide').setVisible(false).setScale(0.15, 0.15); 
       mur_invisible.create(8, 350, 'collideC').setVisible(false).setScale(0.1, 0.15); 
       mur_invisible.create(792, 450, 'collideC').setVisible(false).setScale(0.1, 0.15); 




       //placement des torches

torcheext = this.physics.add.staticGroup()
torcheext.create(150, 50, 'torcheext');
torcheext.create(650, 350, 'torcheext');
torcheext.create(400, 450, 'torcheext');

//placement des objets
fusee = this.physics.add.staticGroup();
fusee.create(200,700, 'fusee').setOrigin(0.5,1.30).setSize(200,60);


//collisions

this.physics.add.collider(player,mur_invisible);
    }

    update(){
        //configuration des controles

        //this.scene.start("");
    }
}