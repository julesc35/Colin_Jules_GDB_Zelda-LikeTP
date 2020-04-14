var scene3 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function scene3 ()
    {
        Phaser.Scene.call(this, { key: 'scene3' });
    },

    preload: function ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.add.sprite(400, 300, 'face').setAlpha(0.2);



        }, this);
    }