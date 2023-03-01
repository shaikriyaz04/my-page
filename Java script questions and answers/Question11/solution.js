
/*Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
  // Use the Date object to do the following activities

const date = new Date();

// - What is the year today?
const year = date.getFullYear();
console.log(`The today Year is ${year}`);

// - What is the month today as a number?
const month = date.getMonth(); 

// - What is the date today?
const dateToday = date.getDate();
console.log(`Today date is ${dateToday}`);

// - What is the day today as a number?
const day = date.getDay();
console.log(`today Day is ${day}`); // day also starts from 0 and ends at 6. 0 means sunday & 6 means saturday.

// - What is the hours now?
const hrs = date.getHours();
console.log(`current Hours are ${hrs}`);

// - What is the minutes now?
const mins = date.getMinutes();
console.log(`current minutes are ${mins}`);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const miliSecondsElapsed = date.getTime(); 
console.log(miliSecondsElapsed);
const secondsElapsed = miliSecondsElapsed / 1000;
console.log(
  `Number of  seconds elapsed from Jan 1, 1970 are ${secondsElapsed}`
);