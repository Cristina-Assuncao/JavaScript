
// Activity 1 + Activity 2 ?????

class Rental {
    constructor (storeName, address, phone, mail, movies, available) {
        this.storeName = storeName;
        this.address = address;
        this.phone = phone;
        this.mail = mail;
        this.movies = movies;
        this.available = available;
    }
    test () {
        return `${this.storeName}, ${this.address}, ${this.phone}, ${this.mail}, ${this.movies}, ${this.available}`
    };
    get allMovies () {                  
        if (this.available === true) {
           // for (let i = 0; i < this.movies.length; i++) { // cannot return all movies with the for loop, why ?????????
            return `The film: ${this.movies}, is available for collection.`
        }
        else {
            return `The film: ${this.movies}, is not on the shelf. Sorry!`
        }
    }
};

const film1 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "Decision to Leave", true);
const film2 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "Wheel of Fortune and Fantasy", true);
const film3 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "Top Gun: Maverick", true);
const film4 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "Dune", false);
const film5 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "Remains of the Wind", true);
const film6 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "The Banshees of Inisherin", true);
const film7 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "The Souvenir: Part II", true);
const film8 = new Rental ("Eden Films", "Alabama Street", 07845780355, "email_us@edenfilms.com", "Tár", false);

console.log(film1)
console.log(film1.test());
console.log(film2.test());
console.log(film3.test());
console.log(film4.test());
console.log(film5.test());
console.log(film6.test());
console.log(film7.test());
console.log(film8.test());

// Activity 2

console.log(film1.allMovies) // could not return all movies available, only one by one with if/else statement
console.log(film4.allMovies)

// function to add --> setter ? or add new movie () --> ? const new Rental("") ?

// Activity 3 ????????

//moviesPrices --> refactor code --> each movie with price attached
//log all movies with prices 


// Stretch activity ???????????

class Cyberpet {
    constructor (name, type, colour, eyes, fur, legs, food, drink) {
        this.type = type;
        this.colour = colour;
        this.eyes = eyes;
        this.fur = fur;
        this.legs = legs;
        this.food = food;
        this.drink = drink;
    }
}

const starfish = new Cyberpet ("Starfish", "Echinoderms", "Orange", 5, "Spiny skin", 5, "Mollusks", false) //motivation --> have the air in the water purified
const phoenix = new Cyberpet ("Phoenix", "Mythical", "Orange and brown", 2, "Feathers", 2, "Fruits' extracts and spices", true) //motivation --> have the claw's nails cut

class Extra extends Cyberpet {
    constructor (type, colour, eyes, fur, legs, food, drink, motivation) {
        super (type, colour, eyes, fur, legs, food, drink);
        this.motivation = motivation;
        }
    giveExtra () {
        
    }