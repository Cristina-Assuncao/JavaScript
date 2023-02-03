// Example 1
const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
};
const greet = (time, fn) => {
    if (time < 1200) {
        fn("Morning");
    } else if (time >= 1200 && time < 1800) {
        fn("Afternoon");
    } else {
        fn("Evening");
    }
};
greet(0800, whichGreeting);

// Example 2

const add = (num1) => {  
    return (num2) => {
        return num1 + num2;
    }
};
console.log(add(2)(1)); // this is hof - output: 3
/*
const add = (num1, num2) => {  
    return num1 + num2
};
console.log(add(2, 1)); //this is normal function - same output: 3
*/