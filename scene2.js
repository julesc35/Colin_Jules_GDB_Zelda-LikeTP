var scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function scene2 ()
    {
        Phaser.Scene.call(this, { key: 'scene2' });
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