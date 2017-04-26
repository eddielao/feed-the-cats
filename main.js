enchant();

let game;
let scoreLabel;
//Initialization
window.onload = () => {
     game = new Game(320, 320);
     game.preload('./images/cat-sprite.png');
     game.onload = () => {

          purrLabel=new PurrLabel(150, 5);
          game.rootScene.addChild(purrLabel);

          for(let y = 0; y < 4; y++){
               for(let x = 0; x < 4; x++){
                    const hole = new Hole(x * 48 + 50, y * 48 + 30);
                    game.rootScene.addChild(hole);
               }
          }
    }
    game.scale = 1.5;
    game.start();
}
