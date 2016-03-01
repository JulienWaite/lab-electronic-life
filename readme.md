# Lab: Electronic Life

## Introduction

The [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a cellular auomation designed by the British mathematician [John Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) in 1970. This "game" does not require any player as the cells in the game will evolve on their own based an initial configuration of the game.

You can check out a demo of this game [here](https://github.com/pmav/game-of-life).

## Electronic Life

In this lab you will work on a simplified version of Conway's original "Game of Life" called **Electronic Life**. This version is available as part of the book [Eloquent JavaScript](http://eloquentjavascript.net/) written by Marijn Haverbeke. The code in this book are licensed under an [MIT license](http://opensource.org/licenses/MIT).

You can see the full description of this game (and you are **highly recommended** to do that!!) in [Chapter 7](http://eloquentjavascript.net/07_elife.html) of the book.

## The Starter Code
You **DO NOT** need to change any of these files:
  - readme.md          : You are reading it
  - demo.html          : The original game where the `PlantEater` animals do not last very long. It is for your reference.
  - smart.html         : This is the file you will use to run Task 1.
  - predator.html      : This is the file you will use to run Task 2.
  - js/animateworld.js : Code provided in [Eloquent JavaScript](http://eloquentjavascript.net/)
  - js/elife.js        : Code provided in [Eloquent JavaScript](http://eloquentjavascript.net/)

You **MUST** modify these files to complete the lab:
  - js/smart-plant-eater.js  : Modify this for Task 1
  - js/predator.js           : Modify this for Task 2


## Your Tasks

### Your Goal
Create an ecosystem where the inhabitants of the world can **live long and prosper**.

### Read the original description
Read [Chapter 7](http://eloquentjavascript.net/07_elife.html) of the book to get a better understanding of the game and the behavior of various objects. This is also a good exercise to practise how to read documentation and other people's code.

### Task 1: Artificial Stupidity
Implement the behavior of the `SmartPlantEater` so that they will last longer in the game than their ancestor `PlantEater`. The initial behavior of the `SmartPlantEater` in the starter code is that they will move East on every turn until they hit an obstacle and they won't eat nor die (undead?).

> Having the inhabitants of our world go extinct after a few minutes is kind of depressing. To deal with this, we could try to create a smarter plant eater.
>
>There are several obvious problems with our herbivores. First, they are terribly greedy, stuffing themselves with every plant they see until they have wiped out the local plant life. Second, their randomized movement (recall that the view.find method returns a random direction when multiple directions match) causes them to stumble around ineffectively and starve if there don’t happen to be any plants nearby. And finally, they breed very fast, which makes the cycles between abundance and famine quite intense.
>
>Write a new critter type that tries to address one or more of these points and substitute it for the old PlantEater type in the valley world. See how it fares. Tweak it some more if necessary.
>
> Excerpt from Eloquent JavacriptL: Chapter 7 Electronic Life

### Task 2: Predators
Implement the behavior of the `Tiger` so that they can become the King of the Land. The initial behavior of the `Tiger` in the starter code is that they will move East on every turn until they hit an obstacle and they won't eat nor die (undead)?

>Any serious ecosystem has a food chain longer than a single link. Write another critter that survives by eating the herbivore critter. You’ll notice that stability is even harder to achieve now that there are cycles at multiple levels. Try to find a strategy to make the ecosystem run smoothly for at least a little while.
>
>One thing that will help is to make the world bigger. This way, local population booms or busts are less likely to wipe out a species entirely, and there is space for the relatively large prey population needed to sustain a small predator population.
>
> Excerpt from Eloquent JavacriptL: Chapter 7 Electronic Life

### Task 3: Optional
You can create another HTML file to host other variations of the animals, create new animals or even create a new world. Be Creative!!


