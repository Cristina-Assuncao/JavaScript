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
const coffeShop = {
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

// Activity 5 - solved differently
const coffeePlace = {
    branch: "Local Caffe",
    drinks: ["Coffee", "Tea", "Juice",],
    food: ["Sandwich", "Cake", "Cookie",],
    prices: [4.00, 3.50, 3.00, 2.20, 1,80],
    drinkOrdered: true,
    foodOrdered: true,
    order() {
        if (this.drinkOrdered == true && this.foodOrdered == true){
            return (`You've ordered ${coffeePlace.drinks[0]} at £${coffeePlace.prices[3].toFixed(2)} and ${coffeePlace.food[1]} at £${coffeePlace.prices[2].toFixed(2)}. Your total comes to £${(coffeePlace.prices[3] + coffeePlace.prices[2]).toFixed(2)}. Thank you.`)
        }
        else if (this.drinkOrdered == true && this.foodOrdered == false){
            return (`You've ordered a ${coffeePlace.drinks[2]} at £${coffeePlace.prices[1].toFixed(2)}, would you like to order some food?`)
        }
        else if (this.drinkOrdered == false && this.foodOrdered == true){
            return(`You've ordered ${coffeePlace.food[2]} at £${coffeePlace.prices[4].toFixed(2)}. Would you like to order a drink?`)
        }
        else(this.drinkOrdered == false && this.foodOrdered == false);{
            return (`Welcome to ${coffeePlace.branch}. What would you like to order?`)
        }
    }
}
console.log(coffeePlace.order())