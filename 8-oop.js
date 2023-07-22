
// Activity 1 + Activity 2 ?????

class Rental {
    constructor(storeName, address, phone, mail, movies) {
        this.storeName = storeName;
        this.address = address;
        this.phone = phone;
        this.mail = mail;
        this.movies = movies;
    }
    test() {
        return `${this.storeName}, ${this.address}, ${this.phone}, ${this.mail}, ${this.movies}`
    };
    get allMovies() {
        for (let i = 0; i < this.movies.length; i++) {
            return filmArray.push(this.movies)//`Our available films at your branch ${this.storeName} are: ${this.movies}`;
        }
    };

};

let filmArray = [];
const store1 = new Rental ("Eden Films 1", "42 Alabama Street", 07845780355, "email_us@edenfilms1.com", ["Decision to Leave", " Dune", " Remains of the Wind"]);
const store2 = new Rental ("Eden Films 2", "3 Lambs Road", 07845788715, "email_us@edenfilms2.com", ["Wheel of Fortune and Fantasy", " The Banshees of Inisherin", " Tár"]);
const store3 = new Rental ("Eden Films 3", "95 Holy Square", 07809780355, "email_us@edenfilms3.com", ["Top Gun: Maverick", " The Souvenir: Part II"]);

/*
console.log(store1)
console.log(store1.test());
console.log(store2.test());
console.log(store3.test());
*/

// Activity 2

console.log(store1.allMovies);
console.log(store2.allMovies);
console.log(store3.allMovies);
console.log(filmArray);


// function to add --> setter ? or add new movie () --> ? const new Rental("") ?

// Activity 3 ????????

//moviesPrices --> refactor code --> each movie with price attached
//log all movies with prices 


// Stretch activity ???????????
/*
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
    */