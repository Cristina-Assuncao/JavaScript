// Activity 1
let favHolidays = [
    "Glasgow, Scotland",
    "Paris, France",
    "Lisbon, Portugal"
];

for (let i = 0; i < favHolidays.length; i++) {
    console.log(favHolidays[i])
};

favHolidays.push("London, UK", "Istambul, Turkey");
console.log(favHolidays);

for (let i = 2; i < favHolidays.length; i++) {
    console.log(favHolidays[i])
};

// Activity 2
let evenReverse = [];
for (let x =  20; x > 0; x--) {
    if (x % 2 === 0) {
        evenReverse.push(x)
    }
};
console.log(`The even numbers between 0 and 20 in reverse order are ${evenReverse}`);

// Activity 3
let oddNumbers = [];
for (let n = 0; n < 30; n++ ) {
    if (n % 2 !== 0) {
        oddNumbers.push(n)
    }
};
console.log(`The odd numbers between 1 and 30 are ${oddNumbers}`);

// Activity 3 - while loop
let age = 20
while (age < 100) {
    if (age < 18) {
        console.log("You're a child!")
    }
    else if (age > 18) {
        console.log("You're and adult!")
    }
    age++
};

// Activity 4
let randomNumber = "";
while (randomNumber < 6) {
    console.log(Math.random())
    randomNumber++
};

// Activity 5
let arrayFilms = [
    "Holy Mountain",
    "Moonlight",
    "Taste of Cherry",
    "Until the End of the World"
];
for (let i = 0; i < arrayFilms.length; i++) {
    console.log(arrayFilms[i])
};
if (arrayFilms[2] === "Ghostbusters") {
    console.log("Yay it's Ghostbusters")
}
else {
    console.log("Boo! We want Ghostbusters!")
};

// Activity 6
let newNumbers = [];
let numberGenerator = [];
while (numberGenerator < 6) {
    newNumbers.push(Math.floor(Math.random() * 30) +1)
    numberGenerator++
};
console.log(newNumbers);
for (let i = 0; i < newNumbers.length; i++) {
    if (i % 7 == 0) {
        console.log(`Hi, I am ${newNumbers[i]} and I am divisible by 7!`)
    }
    else (console.log(`Hi, I am ${newNumbers[i]} and I am NOT divisible by 7!`))
};

// Activity 7
let equalFollowers = [];
let aFollowers = [
    "Abigail",
    "Joseph",
    "Jacob",
    "Noah"
];
let bFollowers = [
    "Lillian",
    "Lazarus",
    "Noah",
    "Jacob"
];
for (let i = 0; i < aFollowers.length; i++) {
    for (let j = 0; j < bFollowers.length; j++) {
        if (aFollowers[i] === bFollowers[j]) {
            console.log(equalFollowers = aFollowers[i])
        }
    }
};