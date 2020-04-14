var scene4 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function scene4 ()
    {
        Phaser.Scene.call(this, { key: 'scene4' });
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