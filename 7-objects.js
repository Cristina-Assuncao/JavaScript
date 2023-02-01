// Activity 1
pet = {
    petName: "Garfield",
    typeOfPet: "cat",
    age: 8,
    colour: "orange"
};
console.log(`My pet is a ${pet.typeOfPet} named ${pet.petName}. They are ${pet.age} years old and have ${pet.colour} fur.`)

// Activity 2
pet.colour = "white"
console.log(`My pet is a ${pet.typeOfPet} named ${pet.petName}. They are ${pet.age} years old and have ${pet.colour} fur.`)

// Activity 3
pet.petFeatures = ["long legs", " yellow eyes", " and making meow"]
console.log(`My pet is a ${pet.typeOfPet} named ${pet.petName}. They are ${pet.age} years old and have ${pet.colour} fur. You can recognise them by ${pet.petFeatures}!`)

// Activity 4
pet = {
    petName: "Garfield",
    typeOfPet: "cat",
    age: 8,
    colour: "orange",
    petFeatures: ["long legs", " yellow eyes", " and making meow"],
    eat: "whiskas",
    drink: "milk",
    petFood () {
        if (this.eat === "whiskas" && this.drink === "milk") {
            return `My pet ${pet.petName} is eating and drinking.`
        }
        else {
            return `My pet is playing!`
        }
    },
};
console.log(pet.petFood());

// Activity 5
coffeShop = {
    branch: "Quina",
    expresso: 2.20,
    latte: 3.00,
    abatanado: 2.50,
    croissant: 1.00,
    pastelDeNata: 1.00,
    cakeSlice: 3.00,
    drinksOrdered () {
        if (this.expresso === 2.20) {
            return `an expresso £${coffeShop.expresso.toFixed(2)}`
        }
    },
    foodOrdered () {
        if (this.pastelDeNata === 1.00) {
            return `a pastel de nata £${coffeShop.pastelDeNata.toFixed(2)}`
        };
    },
    totalCost () {
        return coffeShop.expresso + coffeShop.pastelDeNata
    }
};
console.log(`Your order is ${coffeShop.drinksOrdered()} and ${coffeShop.foodOrdered()}. The total cost is £${coffeShop.totalCost().toFixed(2)}`)
