// Activity 1
const music = 'pop';
if (music == 'classical') {
    console.log('Oh, how relaxing!');
}
else if (music == 'disco') {
    console.log('Where are my dancing shoes?');
}
else if (music == 'dance') {
    console.log('Where\'s the party?')
}
else {
    console.log('Turn it down, please.');
};

// Activity 2
const age = 18;
if (age > 17) {
    console.log('What would you like?')
}
else {
    console.log('I\'m sorry but I can\'t serve you.')
};

// Activity 3
const country = 'UK';
if (age > 17 && country == 'UK') {
    console.log('What would you like?')
}
else {
    console.log('I\'m sorry but I can\'t serve you.')
};

// Activity 4
const weekend = 'Wednesday'
if (weekend == 'Saturday' || weekend == 'Sunday') {
    console.log('Yay it\'s the weekend!!')
}
else {
    console.log('Yeah, Code Nation again!!')
};

// Activity 4
const pizzaTopping = 'tuna';
switch (pizzaTopping) {
    case 'oregano':
    case 'cheese':
    case 'anchovies':
    case 'capers':
        console.log('These are important ingredients for my pizza!')
        break;
    case 'salami':
    case 'pepperoni':
    case 'ham':
    case 'pineapple':
        console.log(`I don\'t mind having ${pizzaTopping} on my pizza`)
        break;
    default:
        console.log(`${pizzaTopping.charAt(0).toUpperCase() + pizzaTopping.slice(1,pizzaTopping.length)} should not be on a pizza.`);
};

// Activity 5
const password = 'thisIsMyPassword';
console.log(password.length);
if (password.length < 8) {
    console.log('Your password is too short')
}
else {
    console.log(password)
};

// Activity 6
const num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizz buzz')
}
/* I deliberately changed the order of this statement and the one under, otherwise even if a number would be
divisible both by 3 and 5 it would only log 'fizz' becuse that would be the first condition to be true */
else if (num % 3 === 0) { //
    console.log('fizz')
}
else if (num % 5 === 0) { 
    console.log('buzz')
}
else {
    console.log(num)
};

// Activity 7
const time = 10;
const placeOfWork = 'Manchester'
const townOfHome = 'Chester'
if (time >= 10 && time <= 17) {
    console.log(`I am in ${placeOfWork}.`)
}
else if (time > 8 && time < 10) {
    console.log(`I am driving between ${townOfHome} and ${placeOfWork}.`)
}
else if(time > 17 && time <= 19) {
    console.log(`I am driving between ${placeOfWork} and ${townOfHome}.`)
}
else {
    console.log(`I am in ${townOfHome}, relaxing :)`)
};

// Activity 8
const myString ='jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
const vowelArray = "a, e, i, o, u";
const indexOfLast = myString.indexOf(vowelArray);
console.log(indexOfLast);

// Activity 9
const word = "yay";
if (word[0] === word[word.length -1]) {
    console.log(true)
}
else {
    console.log(false)
};

// Activity 10
const num1 = 2;
const num2 = 6;
const sum = num1 + num2;
if (sum % 2 === 0) {
    console.log(sum)
}
else {
    console.log(num1*num2)
};

// Activity 11
const num3 = "1002001";
if (num3.length === 1) {
    console.log(true)
}
else if (num3.length === 2 && num3[0] === num3[1]) {
    console.log(true)
}
else if (num3[0] === num3.slice(-1)) {
    console.log(true)
}
else {
    console.log(false)
};