var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: true
        }
    },
    scene: [
    Assets,
    Audio,
    Menu,
    depart]
  }

var game = new Phaser.Game(config);