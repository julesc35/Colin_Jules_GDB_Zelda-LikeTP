var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [scene1, scene2, scene3, scene4]
  }

var game = new Phaser.Game(config);