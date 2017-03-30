enchant();

const pointLabel = 'PURRS';

const PurrLabel = Class.create(Label,{ //Extend Label class
     initialize(x, y) {
          //Call the Label class constructor
          enchant.Label.call(this,`${pointLabel}:0`);
          this.x=x;
          this.y=y;
          this.score = 0;
     },
     add(points) { //Adds score
          this.score+=points;
          this.text=`${pointLabel}:${this.score}`; //Updates display
     }
});
