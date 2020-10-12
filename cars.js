class Vehicle {                                                 //create new class called Vehicle

    constructor(make, model, year) {                            //three arguments
        this.make = make;                                       //local instance of make in class
        this.model = model;                                     //local instance of model in class
        this.year = year;                                       //local instance of year in class
    }
    Information() {                                             // add Information method

        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); 
    }
}
//let myVehicle = new Vehicle('Ford', 'T', 1920);
//let info = myVehicle.Information();

class Cars extends Vehicle {                                    //Cars child class inherits from Vehicle parent class
    constructor(make, model, year, doors) {                     //four arguments
        super(make, model, year)                                //call parent class constructor method
        this.doors = doors;                                     //local instance of doors in Cars class
    }
    Information(){                                              // add Information method
        super.Information();                                    //call data from parent class Information method
        console.log(`Doors: ${this.doors}`)
    }
}
let myCar = new Cars('Ford','T',1920,4);                        //create instance of class
myCar.Information();                                            //return result from Information method