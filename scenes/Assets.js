//initialisation des varriables du menu
var text;
var cursors;

//musiques

var menuMusic;
var departMusic;
var donjonMusic
var outroMusic;

//touches
var enter;

//tir

var pressA;

// déclaration joueur et ennemis

var player;
var spawn = "rien";

var nbrrobot = 0;
var robot;
var robot1;
var robot2;
var robot3;
var robot4;
var robot5;


var pique1;
var pique2;
var pique3;
var pique4;
var pique5;
var pique6;
var pique7;
var pique8;
var pique9;
var pique10;
var pique11;

//déclaration des objets de décors
var entredj;

var fusee;

var cratere;

var trouP;
var trouPP;

var rocheG;
var rocheM;
var rocheP;

var caisseB;
var caisseV;
var caisseR;

var torcheext;
var torcheint;

var mur_invisible;

var prendre;

//déclaration des items/vie
var nbrvie = 4;
var text_vie;
var vieup1;
var vie1prise = 0;
var vieup2;
var vie2prise = 0;
var vieup3;
var vie3prise = 0;
var soin;
var text_nbrvie;

var telec_text;
var nbrtelec = 0;
var telecpris = 0;
var telecsup;

var essence_text;
var text_pas_essence;
var nbrEssence =0;
var essencesup;
var essencepris = 0;
var essence;


var lampe_text;
var text_pas_lampe;
var nbrlampe =0;
var lampesup;
var lampepris = 0;
var lampe;

//declaration de la narration
var arrivee =0;
var text_arrivee;
var essence_manquante;

var arrivee_avdonjon = 0;
var text_avdonjon;

var arrivee_donjon = 0;
var text_donjon;


var text_sortieDJ;


class Assets extends Phaser.Scene {
	constructor(){
		super('Assets')
	}

	init(){}

	preload(){

		//fond/terrain
		this.load.image('GameOver','assets/gameOver.png');
        this.load.image('fond','assets/fondintro.png');
        this.load.image('fondoutro','assets/fondoutro.png');
        this.load.image('terrain','assets/terrain.png');
        this.load.image('donjon','assets/terrain_donjon.png');
        this.load.image('collide','assets/mur_invisible.png');
        this.load.image('collideC','assets/mur_invisible_cote.png');
        this.load.image('blocinvi', 'assets/mur_invisible2.png');
        this.load.image('entdj', 'assets/entree_donjon.png');
        this.load.image('murhautdj', 'assets/donjon_mur_haut.png');
        this.load.image('murcotdj', 'assets/donjon_mur_coté.png');

        //éléments de décors
        this.load.image('fusee','assets/fusée.png');
        this.load.image('caisseV','assets/Caisse_verte.png');
        this.load.image('caisseR','assets/Caisse_rouge.png');
        this.load.image('caisseB','assets/Caisse_bleue.png');
        this.load.image('cratere','assets/cratère.png');
        this.load.image('rocheG','assets/gros_roché.png');
        this.load.image('rocheM','assets/roché_moyen.png');
        this.load.image('rocheP','assets/petit_roché.png');
        this.load.image('trouP','assets/petit_trou.png');
        this.load.image('trouPP','assets/petit_trou2.png');
        this.load.image('torcheext','assets/Torche_extérieur.png');
        this.load.image('torcheint','assets/torche_intérieure.png');


		// items

        this.load.image('essence','assets/essence.png');
        this.load.image('soins','assets/boite_soins.png');
        this.load.image('telecommande','assets/telecommande_mystérieuse.png');
        this.load.image('lampe','assets/lampe.png');
        this.load.image('PV','assets/Vie.png');

		//ennemis
        this.load.spritesheet('robot_face','assets/robot1face.png', {frameWidth: 72, frameHeight: 72});
        this.load.spritesheet('robot_cote','assets/robot1cote.png', {frameWidth: 72, frameHeight: 72});
        this.load.spritesheet('robot_dos','assets/robot1dos.png', {frameWidth: 72, frameHeight: 72});
        this.load.image('pique','assets/piques.png');

        //joueur
        this.load.spritesheet('joueur','assets/player_face.png', {frameWidth: 106, frameHeight: 128});
        this.load.spritesheet('course_droite','assets/player_profilsprite.png', {frameWidth: 106, frameHeight: 128});
        this.load.spritesheet('course_face','assets/player_facemarche.png', {frameWidth: 106, frameHeight: 128});
        this.load.spritesheet('course_dos','assets/player_dossprite.png', {frameWidth: 106, frameHeight: 128});

        //entitée
        this.load.image('tir','assets/tir.png');
	}

 create(){}

 update(){
 	this.scene.start('Audio');
 }
}