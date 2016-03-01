function SmartPlantEater() {
  this.energy = 20;
  this.direction = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 50 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (this.energy < 20 && plant)
    return {type: "eat", direction: plant};
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s";
  return {type: "move", direction: this.direction};
};

// REDUCE GREEDINESS...
// 1) Stop eating when reaching a certain energy level.
// 2) Eat only every N turns (by keeping a counter of the turns since last meal in a property on the creature object).
// 3) Ensure plants dom't become extinct, by refusing to eat a plant unless they see at least one other plant nearby (using the findAll method on the view).
// 4) A combination of the above, or some entirely different strategy, might also work.

// MORE EFFECTIVE MOVEMENT...
// Stealing one of the movement strategies from the critters in our old, energyless world. Both the bouncing behavior and the wall-following behavior showed a much wider range of movement than completely random staggering.

// SLOWER BREEDING...
// Increase minimum energy level required to reproduce.
// (Of course, making the ecosystem more stable also makes it more boring. If you have a handful of fat, immobile critters forever munching on a sea of plants and never reproducing, that makes for a very stable ecosystem. But no one wants to watch that.)



/* original code below

function SmartPlantEater() {};

SmartPlantEater.prototype.act = function(view) {
  // This is just a dummy behavior
  return {
    type: "move",
    direction: "n"
  };
};

*/
