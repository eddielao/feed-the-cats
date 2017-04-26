enchant();

 //Maximum number of appearances of a single cat
 let numCats = 30;

 //Total number of cats
 const totalCats = 16;

//Define a class for box holes, extending the Sprite class
Hole = Class.create( Sprite , {
   initialize(x, y) {
      //Call the Sprite class (super class) constructor
      enchant.Sprite.call(this, 48, 48);
      this.image = game.assets['./images/cat-sprite.png'];
      this.x = x;
      this.y = y;

      //Defines an event listener to be run every frame
      this.addEventListener('enterframe', this.flash);
      //Defines an event listener for a cat getting feed
      this.addEventListener('touchstart', function() {
        this.feed();
        game.assets['./meow.wav'].play();
      });

      //Set the cat mode to 2 (waiting) in the beginning
      this.mode = 2;
      this.nextMode = 0;
      this.waitFor =  game.frame + generateRandNum(100);
      //Flag to keep track of when a cat has been treated
      this.currentTreat = false;
   },

   //Repeat the cat's "appearing" animation
   flash() {
      if(game.frame % 2 != 0)return; //Run every 2 frames
      switch(this.mode) {
         case 0: //cat is appearing
            this.frame++;
            if(this.frame>=4){
               /*Switch to Mode 2 (waiting)
                *after appearing completely.*/
               this.mode=2;
               /*The next mode to transition to
                *is mode 1 (hide).*/
               this.nextMode=1;
               this.waitFor = game.frame + generateRandNum(30);
            }
            break;

         case 1://cat hides in the hole
            this.frame--;
            if(this.frame<=0){
               /*Switch to Mode 2 (waiting)
                *after hiding.*/
               this.mode=2;
               /*The next mode to transition to
                *is mode 0 (appear).*/
               this.nextMode=0;
               this.waitFor = game.frame + generateRandNum(200);

               this.currentTreat = false;

               //Reduce maximum amount of cats
               numCats--;

              if(numCats<=0) {
                  this.mode=3;
                  if(numCats <= -1*totalCats + 1) {
                      game.end(purrLabel.score, purrLabel.text);
                  }
                }
            }
            break;

           case 2://Wait
              if(game.frame>this.waitFor){
                   this.mode = this.nextMode;
              }
              break;

           //Do nothing
           case 3:
              break;
      }
   },

     feed() {
          //Do nothing if cat has been treated
          if(this.currentTreat)return;

          //When cat has appeared at least half-way
          if(this.frame>=2){
             //Set flag so we know he's been treated
             this.currentTreat = true;

             //cat after having been treated
             this.frame=5;
             this.mode=2;  //Switch to waiting mode
             this.nextMode=1;
             //Number of frames to wait is fixed at 10
             this.waitFor = game.frame+10;
             purrLabel.add(1); //Add score
          }
     }
});