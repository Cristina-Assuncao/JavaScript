// Activity 4 - part 1

const myBirthday = new Date(1985, 2, 12); //Assigning my birthday to a constant
const thisDate = new Date(); //Assigning today's date to a constant
console.log(myBirthday);
console.log(thisDate);

//Calculating how old I will be at this year's birthday
myAge = thisDate.getFullYear() - myBirthday.getFullYear();
console.log(myAge);

//Assigning this year's date of birthday
const thisYearBirthday = new Date(thisDate.getFullYear(), myBirthday.getMonth(), myBirthday.getDate());
console.log(thisYearBirthday);

//This is needed because JavaScript stores dates as number of milliseconds 
const oneDay = 24 * 60 * 60 * 1000;

//Calculating how many days until my birthday
const daysLeft = Math.ceil((thisYearBirthday - thisDate)/oneDay);
console.log(daysLeft);

//Result
console.log(`In ${daysLeft} days you will be ${myAge} years old!`);

// Activity 4 - part 2
 
const myDays = Math.ceil((thisYearBirthday - myBirthday)/oneDay);
console.log(`Right now I am ${myDays} days old!!!`);
