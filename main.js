enchant();

let game;
let scoreLabel;
//Initialization
window.onload = () => {
     game = new Game(320, 320);
     game.preload('./images/cat-sprite.png');//Load Droid image
     game.onload = () => {

          //Display ScoreLabel
          purrLabel=new PurrLabel(150, 5);
          game.rootScene.addChild(purrLabel);

          //Line up holes in a 4x4 matrix
          for(let y=0;y<4;y++){
               for(let x=0;x<4;x++){
                    const hole = new Hole(x*48+20,y*48+20);
                    game.rootScene.addChild(hole);
               }
          }
    }
    game.start();
}
