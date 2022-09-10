const Car = require('./Car');

class Truck extends Car {

    constructor(color, make, model, wheels, cargo) {
        super(color, make, model)
        this.wheels = wheels;
        this.cargo = cargo;
    }

    getWheels() {
        return this.wheels;
    }

}

var michellTruck = new Truck('red', '1','2,','18', 'food');

console.log(michellTruck.getWheels())