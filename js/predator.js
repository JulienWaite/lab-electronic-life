function Tiger() {
  this.energy = 100;
  this.direction = randomElement(directionNames);
}

Tiger.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 120 && space)
    return {type: "reproduce", direction: space};
  var prey = view.find("O");
  if (this.energy < 30 && prey)
    return {type: "eat", direction: prey};
  if (space){
    console.log(this.energy);
    return {type: "move", direction: space};
  }
};

// Many of the same tricks that worked for the previous exercise also apply here.
// Make the predators big (lots of energy) and reproduce slowly, so they're less vulnerable to periods of starvation when herbivores are scarce.

// Beyond staying alive, keeping its food stock alive is a predator’s main objective.
// Find a way to make predators hunt more aggressively when there are a lot of herbivores and hunt more slowly (or not at all) when prey is rare.
// Since plant eaters move around, the simple trick of eating one only when others are nearby is unlikely to work — that’ll happen so rarely that your predator will starve.
// But you could keep track of observations in previous turns, in some data structure kept on the predator objects, and have it base its behavior on what it has seen recently.