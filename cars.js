class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model},Year: ${this.year}`);

    }
}
//let myVehicle = new Vehicle('Ford', 'T', 1920);
//let info = myVehicle.Information();

class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year)
        this.doors = doors;
    }
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`)
    }
}
let myCar = new Cars('Ford','T',1920,4);
myCar.Information();