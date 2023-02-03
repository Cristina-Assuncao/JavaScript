// 1 - Class Car
class Car {
    constructor(nameOfCar, makeOfCar, yearOfMake) {    // this constructor is what will be called when we do new Car()
        this.nameOfCar = nameOfCar;   // this. are the properties of our class
        this.makeOfCar = makeOfCar;
        this.yearOfMake = yearOfMake;
    }
}

// all car classes (any variable defined with `= new Car()`) will have the same properties

let carOne = new Car("Benz", "Patent-Motorwagen", 1885);  //  variable of Class -- Class Constructor
let carTwo = new Car("Mercedes", "35 hp", 1900)

console.log(carOne.nameOfCar); // <- This will print the name of our carOne
console.log(carTwo.makeOfCar) // <- This will print the make of our carTwo


// 2 - Class Student
class Student {
    constructor(firstName, eyeColor, day){
        this.firstName = firstName;
        this.eyeColor = eyeColor;
        this.day = day;
    };
    // workAlarm method
     workAlarm(day) {
        if (this.day === "Saturday") {
        return("Go to work today")
        } else {
        return("Stay in bed all day")
        }
    }
};
// Instances - objects of the class Student
const megan = new Student("Megan", "Green", "Wednesday")
const kate = new Student("Kate", "Brown","Sunday")
const elliot = new Student("Elliot", "Blue", "Saturday")

console.log(megan)
console.log(kate)
console.log(elliot)

console.log(elliot.workAlarm())


// 3 - Class Pet
class Pet {
    constructor(firstname, surname, age, type, breed, colour, time) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo () {  // getter
        return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) { // setter
        const array = name.split(' ');
        this.firstname = array[0];
        this.surname = array[1];
    }
    get fullName() {
        return `${this.firstname} ${this.surname}`
    }
    feedPet(time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
}
const bella = new Pet("Bella", "", 2, "Dog", "GS", "B&T", "08:00"); // --> time is set everytime we log the function feedPet
const fidel = new Pet("Fidel", "", 4, "Dog", "Schipperke", "Black", "time"); // --> this string "time" can be anything

console.log(bella);
console.log(fidel)
bella.fullName = "Bella Crompton"
console.log(bella);
console.log(bella.fullName)

console.log(bella.petInfo);
console.log(fidel.petInfo);

console.log(bella.feedPet("10:00")); // --> here is "time" being set for 10:00
console.log(fidel.feedPet("12:00"));