enchant();
let game;

window.onload = function(){
       game = new Core(320, 320);
       game.onload = function(){
               let sign = new Label();
               sign.text = "Let's feed the cats!";
               sign.textAlign = 'center';
               game.rootScene.addChild(sign);
       };
       game.start();
};
