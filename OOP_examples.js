
function Car(color) {
  this.wheels = 4;
  this.make = '';
  this.model = '';
  this.color = color;
  this.topSpeed = 100;
}

Car.prototype.honk = () => {
  console.log('Beep Beep!');
}
