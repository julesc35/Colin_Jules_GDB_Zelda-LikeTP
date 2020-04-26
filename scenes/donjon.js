class donjon extends Phaser.Scene{
    constructor() {
        super('donjon');

    }
    init(){}

    preload(){}

    create(){
        

    ///////// ATH \\\\\\\\

//points de vie
    this.add.image(500,5, 'PV').setScale(0.35).setOrigin(0,0);
    text_vie = this.add.text(540,10,'X 0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (nbrvie == 1) {text_vie.setText('X 1');}
if (nbrvie == 2) {text_vie.setText('X 2');}
if (nbrvie == 3) {text_vie.setText('X 3');}
if (nbrvie == 4) {text_vie.setText('X 4');}
if (nbrvie == 5) {text_vie.setText('X 5');}
if (nbrvie == 6) {text_vie.setText('X 6');}
if (nbrvie == 7) {text_vie.setText('X 7');}

//récupération du pistolet

    this.add.image(380, 5, 'pistolet').setScale(0.75).setOrigin(0,0);
    pistolet_text = this.add.text(420, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (pistolet_inv == 1) {pistolet_text.setText('X 1')};


// essence dans l'inventaire
    this.add.image(180, 5, 'essence').setScale(0.5).setOrigin(0,0);
    essence_text = this.add.text(205, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (essence_inv == 1) {essence_text.setText('X 1')};

// lampe
    this.add.image(80, 5, 'lampe').setScale(0.5).setOrigin(0,0);
    lampe_text = this.add.text(140, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (lampe_inv == 1) {lampe_text.setText('X 1')};



    ////////arrivée du joueur\\\\\\\\\\
if(spawn == "droite"){
    player = this.physics.add.sprite(760, 300, 'joueur').setScale(0.5).setDepth(1);
}
if(spawn == "gauche"){
    player = this.physics.add.sprite(60, 300, 'joueur').setScale(0.5).setDepth(1);
}
if(spawn == "rien"){
    player = this.physics.add.sprite(360, 550, 'joueur').setScale(0.5).setDepth(1);
}

    //////////collision du joueur au bordures\\\\\\\\\\

    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    /////////creation des animations\\\\\\\\\\\\

    this.anims.create({
      key:'anim_joueur_droite',
      frames: this.anims.generateFrameNumbers('course_droite', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_bas',
      frames: this.anims.generateFrameNumbers('course_face', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_haut',
      frames: this.anims.generateFrameNumbers('course_dos', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });
    this.anims.create({
      key:'anim_joueur_arret',
      frames: this.anims.generateFrameNumbers('joueur', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });
            //////////creation du décors\\\\\\\\\\\\

    //création du terrain

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


trouP = this.physics.add.staticGroup();
trouP.create(470, 440, 'trouP');

trouPP = this.physics.add.staticGroup();
trouPP.create(260, 143, 'trouPP');

rocheG= this.physics.add.staticGroup();
rocheG.create(515,280, 'rocheG').setScale(0.75).setOrigin(0.65,1.37).setSize(150,15).setDepth(1);

rocheP= this.physics.add.staticGroup();
rocheP.create(480,285, 'rocheP');
rocheP.create(607,240, 'rocheP');

////////collisions\\\\\\\\\\\

this.physics.add.collider(player,mur_invisible);


    }

    update(){
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
    }
}