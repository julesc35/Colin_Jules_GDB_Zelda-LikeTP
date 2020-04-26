class depart extends Phaser.Scene{
    constructor() {
        super('depart');

    }
    init(){}

    preload(){}

    create(){

    //placement du texte
    if (arrivee == 0){
        text_arrivee = this.add.text(400,580,'Me voila bloqué sur cette planète sans une goute d\'essence... esperons que je puisse trouver de l\'essence dans le coin...',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
        departMusic = this.sound.add('depart');
        departMusic.play({volume: 0.2, loop: false});
    }

    //premier lieux visité
    arrivee = 1;


    ///////// ATH \\\\\\\\

//points de vie
    this.add.image(500,5, 'PV').setScale(0.35).setOrigin(0,0);
    text_nbrvie = this.add.text(540,10,'X 0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
        if (nbrvie == 1) {text_nbrvie.setText('X 1');}
        if (nbrvie == 2) {text_nbrvie.setText('X 2');}
        if (nbrvie == 3) {text_nbrvie.setText('X 3');}
        if (nbrvie == 4) {text_nbrvie.setText('X 4');}
        if (nbrvie == 5) {text_nbrvie.setText('X 5');}
        if (nbrvie == 6) {text_nbrvie.setText('X 6');}
        if (nbrvie == 7) {text_nbrvie.setText('X 7');}



// essence dans l'inventaire
    this.add.image(180, 5, 'essence').setScale(0.5).setOrigin(0,0);
    essence_text = this.add.text(205, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (nbrEssence == 1) {essence_text.setText('X 1')};

// lampe
    this.add.image(80, 5, 'lampe').setScale(0.5).setOrigin(0,0);
    lampe_text = this.add.text(140, 10, 'X0', {fontFamily: 'NebulousRegular', fontSize:15, color:'#FFFF'}).setOrigin(0,0);
if (nbrlampe == 1) {lampe_text.setText('X 1')};


//////placement des items\\\\\

if (vie1prise == 0) {
    vieup1 = this.physics.add.image(515,220,'soins').setScale(0.5).setDepth(1);
}
if (pistoletpris == 0){
    pistoletsup = this.physics.add.image(300,400,'pistolet').setScale(0.75).setDepth(1);
}






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
       mur_invisible.create(400, -30, 'collide').setVisible(false).setScale(0.03, 0.15); 
       mur_invisible.create(2, 645, 'collide').setVisible(false).setScale(0.07, 0.15); 
       mur_invisible.create(-30, 350, 'collideC').setVisible(false).setScale(0.07, 0.15); 
       mur_invisible.create(845, 450, 'collideC').setVisible(false).setScale(0.07, 0.15); 


       //placement des torches

torcheext = this.physics.add.staticGroup()
torcheext.create(740, 183, 'torcheext').setDepth(1);
torcheext.create(740, 375, 'torcheext').setDepth(1);
torcheext.create(136, 180, 'torcheext').setDepth(1);

//placement des objets
fusee = this.physics.add.staticGroup();
fusee.create(160,740, 'fusee').setOrigin(0.5,1.45).setSize(200,1).setDepth(2);

caisseB = this.physics.add.staticGroup();
caisseB.create(270 ,605 ,'caisseB').setOrigin(0.5,1.5).setSize(40,1).setDepth(1);

caisseV = this.physics.add.staticGroup();
caisseV.create(310,605 ,'caisseV').setOrigin(0.5,1.5).setSize(40,1).setDepth(1);

caisseR = this.physics.add.staticGroup();
caisseR.create(270 ,460 ,'caisseR').setOrigin(0.5,0.5).setSize(40,1);

trouP = this.physics.add.staticGroup();
trouP.create(470, 440, 'trouP');

trouPP = this.physics.add.staticGroup();
trouPP.create(260, 143, 'trouPP');

rocheG= this.physics.add.staticGroup();
rocheG.create(515,280, 'rocheG').setScale(0.75).setOrigin(0.65,1.38).setSize(150,15).setDepth(2);

rocheP= this.physics.add.staticGroup();
rocheP.create(480,285, 'rocheP');
rocheP.create(607,240, 'rocheP');

////////text de récupération des items\\\\\\\\

pistolet_text = this.add.text(400,580,'ca fera pas de mal d\'avoir de quoi me défendre, on sait jamais',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
text_vie = this.add.text(400,580,'je sais pas ce que ça fait là mais ca me sera bien utile (vie+1)',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
text_pas_essence = this.add.text(400, 580,'je n\'ai toujours pas l\'essence, je devrais y retourner pour chercher',{ fontFamily: 'NebulousRegular', fontSize: 10}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);

////////collisions\\\\\\\\\\\

this.physics.add.collider(player,mur_invisible);
this.physics.add.collider(player,caisseR);
this.physics.add.collider(player,caisseV);
this.physics.add.collider(player,caisseB);
this.physics.add.collider(player,rocheG);
this.physics.add.collider(player,fusee);
this.physics.add.collider(player,vieup1, hitSoins1, null, this);
this.physics.add.collider(player,pistoletsup, hitGun, null, this)

    }

    update(){


        /////////configuration des controles\\\\\\\\
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


    //disparition du text arrivée

    this.time.addEvent({
        delay: 6000,
        callback: ()=>{
            text_arrivee.setVisible(false);
        },
        loop: false
    });

    /////////changer de scene\\\\\\\\\\\\

//scene avant le donjon

        if (player.x>760 && player.y>0 && player.y<600) {
      spawn = "gauche";
       this.scene.start("avdonjon");
    }

//scene finale

    if(player.x>50 && player.x<160 && player.y>480 && player.y<600){
        if(nbrEssence<1){
        text_pas_essence.setVisible(true);
        this.time.addEvent({
            delay: 4000,
            callback: ()=>{
                text_pas_essence.setVisible(false);
            },
            loop: false
        });
        }
        if(nbrEssence>= 1){
            this.scene.start("outro");
        }
    }






    }

}
function hitSoins1(player, vieup1){
    vieup1.destroy(true);
    vie1prise=1;
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
function hitGun(player, pistoletsup){
pistoletsup.destroy(true);
pistoletpris =1;
nbrpistolet +=1;

        pistolet_text.setVisible(true);
    this.time.addEvent({
    delay: 3000,
    callback: ()=>{
    pistolet_text.setVisible(false);
        },
    loop: false
    });
}
