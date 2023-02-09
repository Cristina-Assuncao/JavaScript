// Activity 1

function hiEverybody() {    // Old school or traditional function
    return "Hi everybody!"
};
console.log(hiEverybody())


const hello = () => {      // ES6 function => arrow function
    return "Hello Code Nation!"
};
console.log(hello())

const greet = (loopNum, fn) => {        // function that takes another function as a parameter
    for (let i = 0; i < loopNum; i++) {
        console.log(fn());             // call to the other function --> console.loh here is what logs it 5 times
    ;}
}
greet(5, hello);

const greetCN = function () {
    console.log("Hello Coders");
}

const greetTimes = (fn, number) => {
    for (let i=0; i<number; i++) {
        return (fn);
    }
}
greetTimes(greetCN, 5)

/*
// function to log something
const sayHello = () => {
    console.log("hello from code nation")
}

// function which takes another func as a parameter
const speak = (loopNum, fn) => {
    for(let i=0; i<loopNum;i++)
    {
        fn(); // the call to the other function
    }
}
speak(5,sayHello);
const greeting = (times) => {
    console.log(`Hello Code Nation :) ${times}`)
};

Then write a higher order function which will run our simple function five times, even though you only call it one time.
Hint: Pass the simple function as a parameter, and this will involve a for loop.
*/

// Activity 2
const array = [0, 1, 2, 3, 4];
const hof = array.map(x => x * 3);
console.log(hof);