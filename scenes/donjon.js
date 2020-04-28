class donjon extends Phaser.Scene{
    constructor() {
        super('donjon');

    }
    init(){}

    preload(){}

    create(){

                    if (arrivee_donjon == 0){
        text_donjon = this.add.text(400,580,'ah voila l\' essence, allons la chercher',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
        donjonMusic = this.sound.add('donjon');
        donjonMusic.play({volume: 0.2, loop: false});
}
    //lieux visité

    arrivee_donjon = 1;


essence_text = this.add.text(400, 580,'retournons a la fusée maintenant',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);


    ///////// ATH \\\\\\\\


//points de vie

    this.add.image(500,5, 'PV').setScale(0.35).setOrigin(0,0).setDepth(1);
    text_vie = this.add.text(540,10,'X 0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0).setDepth(1);
if (nbrvie == 1) {text_vie.setText('X 1');}
if (nbrvie == 2) {text_vie.setText('X 2');}
if (nbrvie == 3) {text_vie.setText('X 3');}
if (nbrvie == 4) {text_vie.setText('X 4');}
if (nbrvie == 5) {text_vie.setText('X 5');}
if (nbrvie == 6) {text_vie.setText('X 6');}
if (nbrvie == 7) {text_vie.setText('X 7');}


// essence dans l'inventaire


    this.add.image(180, 5, 'essence').setScale(0.5).setOrigin(0,0).setDepth(1);
    text_nbrEsence = this.add.text(205, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0).setDepth(1);
if (nbrEssence == 1) {text_nbrEsence.setText('X 1').setDepth(1)};


// lampe


    this.add.image(80, 5, 'lampe').setScale(0.5).setOrigin(0,0).setDepth(1);
    text_nbrlampe = this.add.text(140, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0).setDepth(1);
if (nbrlampe == 1) {text_nbrlampe.setText('X 1').setDepth(1)};


 /////////placement items\\\\\\\\\


if (essencepris == 0){
    essencesup = this.physics.add.image(700,500,'essence');
}


    ////////arrivée du joueur\\\\\\\\\\


if(spawn == "droite"){
    player = this.physics.add.sprite(730, 300, 'joueur').setScale(0.5).setDepth(1);
}

if(spawn == "gauche"){
    player = this.physics.add.sprite(80, 300, 'joueur').setScale(0.5).setDepth(1);
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
      frameRate: 2,
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
      frameRate: 8,
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

       this.add.image(400,300,'donjon').setDepth(-5);


       mur_invisible = this.physics.add.staticGroup();
       mur_invisible.create(400, 0, 'murhautdj').setVisible(true).setFlipX(true).setScale(0.75,0.5).setOrigin(0.75,0.30).setSize(800,50); 
       mur_invisible.create(0, 645, 'murhautdj').setVisible(true).setDepth(1); 
       mur_invisible.create(0, 350, 'murcotdj').setVisible(true).setFlipY(true).setScale(0.75, 0.5).setSize(50, 600); 
       mur_invisible.create(800, 450, 'murcotdj').setVisible(true).setScale(1, 0.75);        



       //placement des torches


torcheint = this.physics.add.staticGroup()
torcheint.create(740, 183, 'torcheint').setDepth(2);
torcheint.create(740, 375, 'torcheint').setDepth(2);
torcheint.create(136, 180, 'torcheint').setDepth(2);

//placement des objets


trouP = this.physics.add.staticGroup();
trouP.create(470, 440, 'trouP');


trouPP = this.physics.add.staticGroup();
trouPP.create(260, 300, 'trouPP');


rocheG= this.physics.add.staticGroup();
rocheG.create(515,280, 'rocheG').setScale(0.75).setOrigin(0.65,1.37).setSize(150,15).setDepth(1);


rocheP= this.physics.add.staticGroup();
rocheP.create(480,285, 'rocheP');
rocheP.create(607,240, 'rocheP');
rocheP.create(300,400, 'rocheP');
rocheP.create(500,150, 'rocheP').setFlipX(true);
rocheP.create(100,385, 'rocheP').setFlipX(true);
rocheP.create(190,190, 'rocheP');


///////////ennemis\\\\\\\\\\\\\

//robot 1


    robot = Phaser.Math.Between(1,4);
    if(robot == 1) {robot2 = this.physics.add.sprite(390, 90, 'robot_face').setDepth(2);}
    else if(robot == 2) {robot2 = this.physics.add.sprite(600, 90, 'robot_face').setDepth(2);}
    else if(robot == 3) {robot2 = this.physics.add.sprite(600, 550, 'robot_face').setDepth(2);}
    else if(robot == 4) {robot2 = this.physics.add.sprite(390, 550, 'robot_face').setDepth(2);}

//piques


    pique6 = this.physics.add.image(715,275, 'pique').setScale(0.10);
    pique7 = this.physics.add.image(250,300, 'pique').setScale(0.10);
    pique8 = this.physics.add.image(280,180, 'pique').setScale(0.10);
    pique9 = this.physics.add.image(250,470, 'pique').setScale(0.10);
    pique10 = this.physics.add.image(500,500, 'pique').setScale(0.10);
    pique11 = this.physics.add.image(565,410, 'pique').setScale(0.10);

////////collisions\\\\\\\\\\\


this.physics.add.collider(player,mur_invisible);
this.physics.add.collider(player,rocheG);


this.physics.add.overlap(player, essencesup, hitessence, null, this);

this.physics.add.overlap(player, pique6, hitpique6, null, this);
this.physics.add.overlap(player, pique7, hitpique7, null, this);
this.physics.add.overlap(player, pique8, hitpique8, null, this);
this.physics.add.overlap(player, pique9, hitpique9, null, this);
this.physics.add.overlap(player, pique10, hitpique10, null, this);
this.physics.add.overlap(player, pique11, hitpique11, null, this);
this.physics.add.overlap(player, robot2, hitrobot2, null, this);

    }

    update(){
            if (cursors.up.isDown)
             {
      player.anims.play('anim_joueur_haut', true);
      player.setVelocityY(-175);
      player.setVelocityX(0);
    }

    else if (cursors.down.isDown)
     {
      player.anims.play('anim_joueur_bas', true);
      player.setVelocityY(175);
      player.setVelocityX(0);
    }

    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp)
     {
      player.setVelocityX(225);
      player.setVelocityY(0);
      player.setFlipX(false);
      player.anims.play('anim_joueur_droite', true);
    }

    else if (cursors.left.isDown)
     {
      player.setVelocityX(-225);      
      player.anims.play('anim_joueur_droite', true);
      player.setVelocityY(0);
      player.setFlipX(true);
    }
    else if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp)
     {      
      player.anims.play('anim_joueur_arret', true);
      player.setVelocityX(0);
      player.setVelocityY(0);
    }

  //////////////déplacement ennemis\\\\\\\\\\\\\\\\\

//robot2
    if (robot2.x <= 390 && robot2.y <= 90)
     {
      robot2.setVelocityY(0);
      robot2.setVelocityX(180);
    }
     else if (robot2.x >= 600 && robot2.y <= 90)
     {
      robot2.setFlipX(false);
      robot2.setVelocityY(180);
      robot2.setVelocityX(0);
    }
     else if (robot2.x >= 600 && robot2.y >= 550)
     {
      robot2.setVelocityY(0);
      robot2.setVelocityX(-180);
    }
     else if (robot2.x <= 390 && robot2.y >= 550)
     {
      robot2.setFlipX(true);
      robot2.setVelocityY(-180);
      robot2.setVelocityX(0);
    }

        //disparition du text arrivée

    this.time.addEvent({
        delay: 6000,
        callback: ()=>{
            text_donjon.setVisible(false);
        },
        loop: false
    });
        if (player.x<50 && player.y>0 && player.y<600)
         {
      spawn = "droite";
            this.time.addEvent({
            delay: 100,
            callback: ()=>{
                donjonMusic.mute = true;            
            this.scene.start("avdonjon");
            },
            loop: false
        });
    }
    }
}



//////////////FONCTIONS\\\\\\\\\\\\\\\\\\\\


function hitessence(player, essencesup){
    essencesup.destroy(true);
    essencepris = 1;
    nbrEssence += 1;
    if (nbrEssence == 1) {text_nbrEsence.setText('X 1')};

        essence_text.setVisible(true);
    this.time.addEvent({
    delay: 3000,
    callback: ()=>{
    essence_text.setVisible(false);
        },
    loop: false
    });
}

function hitrobot2(player, robot2){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}

function hitpique6(player, pique6){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}

function hitpique7(player, pique7){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}

function hitpique8(player, pique8){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}

function hitpique9(player, pique9){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}

function hitpique10(player, pique10){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}

function hitpique11(player, pique11){
  nbrvie -= 1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}