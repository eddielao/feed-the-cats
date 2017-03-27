## Feed a Cat

### Background

Feed a Cat is largely based on the classic game Whack a Mole. Instead of using a hammer to hit a mole, the hammer is replaced by a hand with cat treat. A twist to help keep the game interesting is that, in addition to cats popping out of the hole, there will also be other type of animals popping out. Feeding any non-cat animal will cost the player one life, the game ends when user loses 3 lives. The difficulty gradually increases by the amount of time any animal stays up (or the amount of time a user has to feed that animal).

### Functionality & MVP

Feed a Cat lets the user do the followings.

- [ ] Start game
- [ ] Pause game
- [ ] Reset game
- [ ] Feed an animal
- [ ] A production readme

### Wireframes

Like most web browser games, Feed a Cat will be a single screen game.

![wireframes](images/Feed-a-Cat.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and 'jquery' for overall structure and game logic,
- 'Enchant.js' with 'HTML5 Canvas' for DOM manipulation and rendering,

The game will be contained in a single script file `game.js`. The other files needed are a `index.html` where the script hooks into and another CSS file for styling.

### Implementation Timeline

**Day 1**: Setup project directories and shell files. Define the index html file needed for the game.

- Decide on how the game should be structured in term of JS objects
- Research on `Enchant.js` and HTML5 info needed to make the game

**Day 2**: This day will be spent to create all the graphics needed for the game.

- Create about 5 different cat images (some showing cat with mouthful of food indicating being fed)
- Create another 5 different images with other animal type similarly
- Start on the scripting

**Day 3**: Create the game logic and finish most of the JavaScript coding.

**Day 4**: Test the game and style the front end. Game sound will also be implemented today.

### Bonus Features

One feature to implement if time allows is to make the holes appear on random location within the game board.
