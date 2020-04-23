class depart extends Phaser.Scene{
    constructor() {
        super('depart');

    }
    init(){}

    preload(){}

    create(){
    //musique

        departMusic = this.sound.add('depart');
        departMusic.play({volume: 0.2, loop: true});

    //creation des touches
    //ramasser objets
    pressE = this.input.keyboard.addKey('E');

    //utiliser la matraque
    pressF = this.input.keyboard.addKey('F');

    //utiliser le pistolet
    pressA = this.input.keyboard.addKey('A');

    //arrivée du joueur

    player = this.physics.add.sprite(360, 550, 'joueur').setScale(0.5).setDepth(1);

    //collision du joueur au bordures

    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    //creation des animations

    this.anims.create({
      key:'anim_joueur_droite',
      frames: this.anims.generateFrameNumbers('course_droite', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_bas',
      frames: this.anims.generateFrameNumbers('course_face', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_haut',
      frames: this.anims.generateFrameNumbers('course_dos', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_arret',
      frames: this.anims.generateFrameNumbers('joueur', {start: 0, end: 1}),
      frameRate: 8,
      repeat: -1
    });



    //creation du décors

       this.add.image(400,300,'terrain').setDepth(-5);
       mur_invisible = this.physics.add.staticGroup();
       mur_invisible.create(400, 2, 'collide').setVisible(false).setScale(0.15, 0.15); 
       mur_invisible.create(2, 645, 'collide').setVisible(false).setScale(0.15, 0.15); 
       mur_invisible.create(0, 350, 'collideC').setVisible(false).setScale(0.1, 0.15); 
       mur_invisible.create(845, 450, 'collideC').setVisible(false).setScale(0.1, 0.15); 




       //placement des torches

torcheext = this.physics.add.staticGroup()
torcheext.create(740, 183, 'torcheext').setDepth(1);
torcheext.create(740, 375, 'torcheext').setDepth(1);
torcheext.create(136, 180, 'torcheext').setDepth(1);

//placement des objets
fusee = this.physics.add.staticGroup();
fusee.create(190,740, 'fusee').setOrigin(0.5,1.45).setSize(200,1).setDepth(2);

caisseB = this.physics.add.staticGroup();
caisseB.create(280 ,605 ,'caisseB').setOrigin(0.5,1.5).setSize(40,1).setDepth(1);

caisseV = this.physics.add.staticGroup();
caisseV.create(320,605 ,'caisseV').setOrigin(0.5,1.5).setSize(40,1).setDepth(1);

caisseR = this.physics.add.staticGroup();
caisseR.create(280 ,460 ,'caisseR').setOrigin(0.5,0.5).setSize(40,1);

trouP = this.physics.add.staticGroup();
trouP.create(470, 440, 'trouP');

trouPP = this.physics.add.staticGroup();
trouPP.create(260, 143, 'trouPP');

rocheG= this.physics.add.staticGroup();
rocheG.create(515,280, 'rocheG').setScale(0.75).setOrigin(0.65,1.37).setSize(150,15).setDepth(1);

rocheP= this.physics.add.staticGroup();
rocheP.create(480,285, 'rocheP');
rocheP.create(607,240, 'rocheP');

//collisions
this.physics.add.collider(player,mur_invisible);
this.physics.add.collider(player,caisseR);
this.physics.add.collider(player,caisseV);
this.physics.add.collider(player,caisseB);
this.physics.add.collider(player,rocheG);
this.physics.add.collider(player,fusee);
    }

    update(){
        //configuration des controles
    if (cursors.up.isDown) {
      player.anims.play('anim_joueur_haut', true);
      player.setVelocityY(-175);
      player.setVelocityX(0);
    }
    else if (cursors.down.isDown) {
      player.anims.play('anim_joueur_bas', true);
      player.setVelocityY(175);
      player.setVelocityX(0);
    }
    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp) {
      player.setVelocityX(225);
      player.setVelocityY(0);
      player.setFlipX(false);
      player.anims.play('anim_joueur_droite', true);
    }
    else if (cursors.left.isDown) {
      player.setVelocityX(-225);      
      player.anims.play('anim_joueur_droite', true);
      player.setVelocityY(0);
      player.setFlipX(true);
    }
    else if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {      
      player.anims.play('anim_joueur_arret', true);
      player.setVelocityX(0);
      player.setVelocityY(0);
    }
        //this.scene.start("");
    }
}