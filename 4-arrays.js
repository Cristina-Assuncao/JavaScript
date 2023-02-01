// Activity 1
let favFilms = [        // assigning an array with three objects
    "Braveheart",
    "Titanic",
    "Romeu & Juliet"
];
console.log(favFilms);

// Activity 2
console.log(favFilms[0]);

//Activity 3
favFilms[2] = "Scream";     // reassiging the 3rd object on my array
console.log(favFilms);

//Activity 3
console.log(favFilms.length);
console.log(favFilms[0].length);


// Activity 4

// .pop() removes an element from the end of the array
console.log(favFilms.pop());
console.log(favFilms);

// .shift() removes an element from the beggining of the array
favFilms.shift();
console.log(favFilms);

// .unshift() adds element(s) to the beggining of the array
favFilms.unshift("Holy Mountain", "Moonlight", "Taste of Cherry");
console.log(favFilms);

// .splice() removes or adds elements anywhere in the array .splice(start, deleteCount) or .splice(start, deleteCount, item1, item2, ...)
favFilms.splice(3, 1, "In the Mood for Love", "Until the End of the World");
console.log(favFilms);

// .slice() creates a new array --> .slice(start) and removes till the end of the array, or .slice(start, end)
let notSoFavFilms = favFilms.slice(1, 2);
console.log(notSoFavFilms);

// .map() used to add elements to each index of the array
let starRating = favFilms.map(x => x + " *****");
console.log(starRating);


// Activity 5
let favSongs = [
    "Journey in Satchidananda, Alive Coltrane",
    "Ain't Got No, I Got Life, Nina Simone",
    "Gracias a la Vida, Violeta Parra"
];
console.log(favSongs);

favSongs.unshift("Build To Last, Lorraine James", "I've seen that face before (Libertango), Grace Jones") + favSongs.pop();
console.log(favSongs);