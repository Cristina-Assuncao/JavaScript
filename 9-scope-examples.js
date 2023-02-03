// Examples
/*
// Global Scope
// in this case both let and const are doing the same thing: calling our variable myName
let globalVar = "Global";
console.log(`Global scope: ${globalVar}`);

const callName = () => {
    console.log(`Inside the function: ${globalVar}`)
};
callName(); //calling the function


// Function Scope
let globalVarTwo = "Global The Second";
console.log(`Global scope: ${globalVarTwo}`);

//Function Scope start
const callVar = () => {
    let localVar = "Local The First";
    
    console.log(`Inside the function: ${globalVarTwo}`);
    console.log(`Inside the function: ${localVar}`);
};
callVar();
//Function Scope end

console.log(`Global scope with local variable error: ${localVar}`)
//error: localVar is not defined --> because we are calling it outside the function


//Scope Chain
let globalVarThree = "Global The Third";
console.log(`Global scope: ${globalVarThree}`);

const outerFunction = () => {
    let outerVar = "Outer variable"

    console.log(`Outer function: ${globalVarThree}`);
    console.log(`Outer function: ${outerVar}`);
    console.log(`Outer function: ${innerVar}`); //error: innerVar is not defined at this point

    const innerFunction =() => {
        let innerVar = "Inner variable"

        console.log(`Inner function: ${globalVarThree}`);
        console.log(`Inner function: ${outerVar}`);
        console.log(`Inner function: ${innerVar}`); 
    }
    innerFunction(); //calling the function that is inside the function
};
outerFunction(); //calling the outside function
innerFunction(); //error: not defined --> because it is defined inside the funtion outerFunction()
*/


// Block Scope
let stringLet = "let string";
var stringVar = "var string";

const newString = () => {
    let stringLet = "new let string";
    var stringVar = "new var string";

    console.log(`Inside the function: ${stringLet}`); //new
    console.log(`Inside the function: ${stringVar}`); //new
};
newString(); //calling the function

console.log(`Outside the function: ${stringLet}`); //old
console.log(`Outside the function: ${stringVar}`); //old


// Block Scope - for loops (same applies with while loops)
function startLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i) // 0 1 2 3 4
    }
    //console.log(i) //error: i is not defined (not defined outside the for loop)
};

function startVar() {
    console.log("- are the following numbers:")
    for (var i = 0; i < 5; i++) {
        console.log(i); // 0 1 2 3 4
    }
    console.log(i); // 5 --> var allows it to go back in
};

console.log("Running with let:");
startLet(); // things are logged by the order they appear inside the function

console.log("Running with var:")
startVar(); // things are logged by the order they appear inside the function


// Block Scope - if else statements
function startLet() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            let colour = "red";
            console.log(i, colour); //Output: 0 red,1 red, 2 red, 3 red, 4 red
        }
    }
//    console.log(i, colour); // error: i is not defined (being called outside the function)
};
function startVar() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var colour = "blue";
            console.log(i, colour); //Output: 0 blue, 1 blue, 2 blue, 3 blue, 4 blue
        }
    }
    console.log(i, colour); //Output: 5 blue
}
console.log("Running with let:");
startLet();

console.log("Running with var:");
startVar();