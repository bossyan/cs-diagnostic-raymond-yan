'use strict';

// Solution for problem 10
function Car(color) {
  // Setting default values because there were no values provided in the Problem
  this.wheels = 4;
  this.make = 'Tesla';
  this.model = 'Model S';
  this.color = color;
  this.topSpeed = 100;
}

Car.prototype.honk = () => {
  console.log('Beep Beep!');
}

Car.prototype.description = function() {
  console.log('Wheels: ', this.wheels);
  console.log('Make: ', this.make);
  console.log('Model: ', this.model);
  console.log('Color: ', this.color);
  console.log('Top Speed: ', this.topSpeed);
}

let car = new Car('black');
let car2 = new Car('Green');

car.description();
car2.description();



// Solution for problem 12
function Automobile(color) {
  // Setting default values because there were no values provided in the Problem
  this.wheels = 4;
  this.make = 'Tesla';
  this.model = 'Model S';
  this.color = color;
  this.topSpeed = 100;
}

Automobile.prototype.honk = () => {
  console.log('Beep Beep!');
}

Automobile.prototype.description = function() {
  console.log('Wheels: ', this.wheels);
  console.log('Make: ', this.make);
  console.log('Model: ', this.model);
  console.log('Color: ', this.color);
  console.log('Top Speed: ', this.topSpeed);
}

function Car2(color) {
  Automobile.call(this);
  this.color = color;
}
Car2.prototype = Object.create(Automobile.prototype);

function SemiTruck(color) {
  Automobile.call(this);
  this.color = color;
}
SemiTruck.prototype = Object.create(Automobile.prototype);

function Motorcycle(color) {
  Automobile.call(this);
  this.color = color;
  this.wheels = 2;
}
Motorcycle.prototype = Object.create(Automobile.prototype);

let motorcycle = new Motorcycle('grey');
motorcycle.description();
