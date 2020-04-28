class avdonjon extends Phaser.Scene{
    constructor() {
        super('avdonjon');

    }
    init(){}

    preload(){}

    create(){

            if (arrivee_avdonjon == 0){
        text_avdonjon = this.add.text(400,580,'Je me demande bien ce qu\'il peut se trouver dans cette grotte, il me faudrait une lampe pour y entrer...',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
}
    //lieux visité
    arrivee_avdonjon = 1;

//nombre d'ennemis

nbrrobot = 1;

text_pas_lampe = this.add.text(400, 580,'je n\'ai toujours pas la lampe, je devrais retourner la chercher et trouver de quoi désactiver ces robots',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
lampe_text = this.add.text(400, 580,'ca y est, je vais pouvoir voir entrer',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
telec_text = this.add.text(400, 580,'étrange, cette telecommande semble avoir désactivé ces robots',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);


    ///////// ATH \\\\\\\\

//points de vie
    this.add.image(500,5, 'PV').setDepth(5).setScale(0.35).setOrigin(0,0);
    text_vie = this.add.text(540,10,'X 0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setDepth(5).setOrigin(0,0);
if (nbrvie == 1) {text_vie.setText('X 1');}
if (nbrvie == 2) {text_vie.setText('X 2');}
if (nbrvie == 3) {text_vie.setText('X 3');}
if (nbrvie == 4) {text_vie.setText('X 4');}
if (nbrvie == 5) {text_vie.setText('X 5');}
if (nbrvie == 6) {text_vie.setText('X 6');}
if (nbrvie == 7) {text_vie.setText('X 7');}



// essence dans l'inventaire
    this.add.image(180, 5, 'essence').setDepth(5).setScale(0.5).setOrigin(0,0);
    text_nbrEsence = this.add.text(205, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setDepth(5).setOrigin(0,0);
if (nbrEssence == 1) {text_nbrEsence.setText('X 1')};

// lampe
    this.add.image(80, 5, 'lampe').setDepth(5).setScale(0.5).setOrigin(0,0);
    text_nbrlampe = this.add.text(140, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setDepth(5).setOrigin(0,0);
if (nbrlampe == 1) {text_nbrlampe.setText('X 1')};



//////placement des items \\\\\\

if (vie2prise == 0) {
    vieup2 = this.physics.add.image(220,350,'soins').setScale(0.5).setDepth(1);
}
if (vie3prise == 0) {
    vieup3 = this.physics.add.image(515,220,'soins').setScale(0.5).setDepth(1);
}
if (lampepris == 0){
    lampesup = this.physics.add.image(600,320,'lampe').setScale(0.45).setDepth(1);
}
if (telecpris == 0){
    telecsup = this.physics.add.image(200,190,'telecommande').setScale(0.25).setDepth(1);
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

    this.add.image(400,300,'terrain');


    mur_invisible = this.physics.add.staticGroup();
    mur_invisible.create(400, -30, 'collide').setVisible(false).setScale(0.03, 0.15); 
    mur_invisible.create(2, 645, 'collide').setVisible(false).setScale(0.03, 0.15); 
    mur_invisible.create(-40, 350, 'collideC').setVisible(false).setScale(0.05, 0.15); 
    mur_invisible.create(845, 450, 'collideC').setVisible(false).setScale(0.03, 0.15); 
    mur_invisible.create(945,0, 'blocinvi').setVisible(false).setScale(0.1, 0.05);
    mur_invisible.create(900,800, 'blocinvi').setVisible(false).setScale(0.1, 0.15);


    entredj = this.physics.add.staticGroup()
    entredj.create(770, 300,'entdj').setDepth(1).setScale(0.35);


//placement des torches


    torcheext = this.physics.add.staticGroup()
    torcheext.create(715, 115, 'torcheext').setDepth(2);
    torcheext.create(710, 350, 'torcheext').setDepth(1);
    torcheext.create(136, 500, 'torcheext').setDepth(1); 


//placement des objets


    cratere = this.physics.add.staticGroup()
    cratere.create(220, 230, 'cratere').setDepth(1).setSize(160, 10).setOrigin(0.5,1.25);
    cratere.create(550,360, 'cratere').setDepth(1).setSize(160, 10).setOrigin(0.5,1.25);
    cratere.create(600, 120, 'cratere').setDepth(1).setSize(160, 10).setOrigin(0.5,1.25);


    trouP = this.physics.add.staticGroup();
    trouP.create(95, 350, 'trouP').setFlipX(true);
    trouP.create(436, 502, 'trouP');


    trouPP = this.physics.add.staticGroup();
    trouPP.create(260, 143, 'trouPP');


    rocheM = this.physics.add.staticGroup();
    rocheM.create(480, 200, 'rocheM').setDepth(1).setSize(85, 10).setOrigin(0.55, 1.30);
    rocheM.create(260, 560, 'rocheM').setDepth(1).setSize(85, 10).setOrigin(0.55, 1.30);


    rocheP= this.physics.add.staticGroup();
    rocheP.create(150,150, 'rocheP').setFlipX(true);
    rocheP.create(607,450, 'rocheP');


///////////ennemis\\\\\\\\\\\\\


//robot 1

    robot = Phaser.Math.Between(1,4);
    if(robot == 1) {robot1 = this.physics.add.sprite(400, 90, 'robot_face');}
    else if(robot == 2) {robot1 = this.physics.add.sprite(401, 90, 'robot_face');}
    else if(robot == 3) {robot1 = this.physics.add.sprite(401, 550, 'robot_face');}
    else if(robot == 4) {robot1 = this.physics.add.sprite(400, 550, 'robot_face');}

//piques

    pique1 = this.physics.add.image(500,400, 'pique').setScale(0.10);
    pique2 = this.physics.add.image(250,300, 'pique').setScale(0.10);
    pique3 = this.physics.add.image(250,130, 'pique').setScale(0.10);
    pique4 = this.physics.add.image(250,470, 'pique').setScale(0.10);
    pique5 = this.physics.add.image(580,550, 'pique').setScale(0.10);


/////////Text\\\\\\\\\\\\\\


text_vie = this.add.text(400,580,'encore ! ca devrait bien m\'aider ! (vie+1)',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);

lampe_text = this.add.text(400,580,'voila la lampe, entrons dans cette grotte maintenant !',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);


////////collisions\\\\\\\\\\\

this.physics.add.collider(player,mur_invisible);


this.physics.add.collider(player,rocheM);
this.physics.add.collider(player,cratere);


this.physics.add.collider(player, vieup2, hitSoins2, null, this);
this.physics.add.collider(player, vieup3, hitSoins3, null, this);
this.physics.add.collider(player, telecsup, hittelec, null, this);
this.physics.add.collider(player, lampesup, hitlampe, null, this);


this.physics.add.overlap(player, pique1, hitpique1, null, this);
this.physics.add.overlap(player, pique2, hitpique2, null, this);
this.physics.add.overlap(player, pique3, hitpique3, null, this);
this.physics.add.overlap(player, pique4, hitpique4, null, this);
this.physics.add.overlap(player, pique5, hitpique5, null, this);
this.physics.add.overlap(player, robot1, hitrobot1, null, this);

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

    else if (cursors.right.isDown)
     {
      player.anims.play('anim_joueur_droite', true);   
      player.setVelocityX(225);
      player.setVelocityY(0);
      player.setFlipX(false);
    }

    else if (cursors.left.isDown)
     {
      player.anims.play('anim_joueur_droite', true);
      player.setVelocityX(-225);
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

//robot1

    if (robot1.x <= 400 && robot1.y <= 90)
     {
      robot1.setVelocityY(0);
      robot1.setVelocityX(130);
    } 

    else if (robot1.x >= 401 && robot1.y <= 90)
     {
      robot1.setFlipX(false);
      robot1.setVelocityY(130);
      robot1.setVelocityX(0);
    } 

    else if (robot1.x >= 401 && robot1.y >= 550)
     {
      robot1.setVelocityY(0);
      robot1.setVelocityX(-130);
    } 

    else if (robot1.x <= 400 && robot1.y >= 550)
     {
      robot1.setFlipX(true);
      robot1.setVelocityY(-130);
      robot1.setVelocityX(0);
    }

    //disparition du text arrivée

    this.time.addEvent({
        delay: 6000,
        callback: ()=>{
            text_avdonjon.setVisible(false);
        },
        loop: false
    });

        if (player.x<50 && player.y>0 && player.y<600)
         {
      spawn = "droite";
                this.time.addEvent({
                delay: 100,
                callback: ()=>{
                this.scene.start("depart");
                },
            });
        }


        if (player.x>730 && player.y>230 && player.y<310)
         {
        if(nbrlampe<1 && nbrrobot>0)
        {
        text_pas_lampe.setVisible(true);
        this.time.addEvent({
            delay: 4000,
            callback: ()=>{
                text_pas_lampe.setVisible(false);
            },
            loop: false
        });
        }

        else if(nbrlampe>= 1 && nbrrobot<=0)
        {
            spawn = "gauche";
            departMusic.mute = true;                       
            this.scene.start("donjon");
        }
        }
    
}
}
   

//////ajout de pv \\\\\\\\


function hitSoins2(player, vieup2){
    vieup2.destroy(true);
    vie2prise=1;
    nbrvie+=1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}

        text_vie.setVisible(true);
    this.time.addEvent({
    delay: 3000,
    callback: ()=>{
    text_vie.setVisible(false);
        },
    loop: false
    });
}


function hitSoins3(player, vieup3){
    vieup3.destroy(true);
    vie3prise=1;
    nbrvie+=1;
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}

        text_vie.setVisible(true);
    this.time.addEvent({
    delay: 3000,
    callback: ()=>{
    text_vie.setVisible(false);
        },
    loop: false
    });
}


function hittelec(player, telecsup){
    telecsup.destroy(true);
    robot1.destroy(true);
    telecpris = 1;
    nbrtelec += 1;
    nbrrobot -= 1;

        telec_text.setVisible(true);

    this.time.addEvent({
    delay: 3000,
    callback: ()=>{
    telec_text.setVisible(false);
        },
    loop: false
    });
}


function hitlampe(player, lampesup){
    lampesup.destroy(true);
    lampepris = 1;
    nbrlampe += 1;
if (nbrlampe == 1) {text_nbrlampe.setText('X 1')};
        lampe_text.setVisible(true);

    this.time.addEvent({
    delay: 3000,
    callback: ()=>{
    lampe_text.setVisible(false);
        },
    loop: false
    });
}


function hitrobot1(player, robot1){
  nbrvie -= 1;
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}

  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}


function hitpique1(player, pique1){
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


function hitpique2(player, pique2){
  nbrvie -= 1;
  if (nbrvie == 0) {
    this.physics.pause();
    this.add.image(400,350,'GameOver').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'SpaceQuest', fontSize: 42}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }


  if (spawn == "droite") {player.setPosition(760,300);}
  if (spawn == "gauche") {player.setPosition(60,300);}

}


function hitpique3(player, pique3){
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


function hitpique4(player, pique4){
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


function hitpique5(player, pique5){
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