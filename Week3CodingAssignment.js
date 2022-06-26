// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(`Ages Array: ${ages}`)

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use-
// -numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed).
let firstElement = ages[ages.length -8] // .shift() removes only the first element, or use the .lenght method, the same method used for the last element
console.log(`First element of array: ${firstElement}`)

let lastElement = ages[ages.length -1] // .length -# from end gets corresponding element
console.log(`Last element of array: ${lastElement}`) 

function valueSubtraction(){ // function to handle subtraction
    return lastElement - firstElement
}
console.log(`Subtraction solution (93 - 3 =): ${valueSubtraction()}`)



// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(42) // new age is now last element in ages array and ages array now has 9 elements
console.log(`Array after adding new age: ${ages}`)

// re-run valueSubtraction to check if function is dynamic
lastElement = ages[ages.length -1]; // new age is now last element
firstElement = ages[ages.length -9]; // the firstElement element position isn't changed because it was created before the function so this variable-
// -isn't necessary, either way the first element is being subtracted. The same as if the .shift() method was used
console.log(`Subtraction solution after adding new age (42 - 3 =): ${valueSubtraction()}`)


// 1c. Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (let number of ages) {
    console.log(`elements in ages array: ${ages}`)
    sum += number;
}
average = sum / ages.length;
console.log(`Calculated average of ages array (value of elements added together 272 / 9 number of elements): ${average}`)



// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(`Names Array: ${names}`);

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
let letters = 0;
for(let i = 0; i < names.length; i++) {
    letters += names[i].length;
}
letters /= names.length;
console.log(`Calculated average number of letters per name in the names array (total number of letters 23 / 6 number of names): ${letters}`)

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
for (i = 0; i <= 5; i++) {  
}
console.log(`Names together: ${names.join(' ')}`)

// 3. How do you access the last element of any array? (ARRAY.pop());
console.log(`Accessed and removed last number in ages array: ${ages.pop()}`);
//console.log(`Accessed and removed last name in names array: ${names.pop()}`);

// 4. How do you access the first element of any array? (ARRAY.shift());
console.log(`Accessed and removed first number in ages array: ${ages.shift()}`);
//console.log(`Accessed and removed first name in names array: ${names.shift()}`);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the-
// -nameLengths array
let namesLengths = names.map(function(lengthOfNames) {
   return lengthOfNames.length;
});
console.log(`New array namesLengths: ${namesLengths}`);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
sum = 0
for (let number of namesLengths) {
    sum += number;
}
console.log(`Calculated sum of all the elements in the namesLengths array: ${sum}`);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function arguments(word, n) {
    if (n >= 1 && n <= 15)
    return word.repeat(n);
}
console.log(arguments('Hello', 3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last-
// -name separated by a space).
function createFirstLastName (firstName, lastName) {
    return firstName + ' ' + lastName;
}
let fullName = createFirstLastName("Jacob", "Studer");
console.log('Full name function:' + ' ' + fullName);

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThan100() {
    let sum = 0;
    for (let number of ages) {
        sum += number;
    }console.log(`Total of ages array after removing the first and last elements used to determine if the sum of all numbers is greater than 100: ${sum}`);
    if (sum > 100)
    return true
}
console.log(greaterThan100(ages));


// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrayAverage(namesLengths) {
    let sum = 0;
    for ( let i in namesLengths) {
        sum += namesLengths[i];
}
let numbersTotal = namesLengths.length;
return sum / numbersTotal;
} 
let avg2 = arrayAverage(namesLengths);   
console.log(`The total average of all elements in the namesLengths array: (avg2) ${avg2}`);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the-
// -average of the elements in the second array.
function arrayAverage(ages) {
    let sum = 0;
    for (let i in ages) {
        sum += ages[i];
    }
    let total = ages.length;
    return sum / total;
}   
let avg1 = arrayAverage(ages);
console.log(`Ages array current average of total: (avg1) ${avg1}`)

function greaterArray() {
    if (avg1 > avg2)
        return true
}

console.log(greaterArray());

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside-
// -and if moneyInPocket is greater than 10.50.
function willBuyDrinks (isHotOutside, moneyInPocket) {
    if (isHotOutside === 'yes' && moneyInPocket > 10.50) {
        return true
    }     
}
console.log(willBuyDrinks('yes', 10.55));

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function setAlarm(willSetAlarm, time) {
    if (willSetAlarm === 'weekday' && time >= 2100) {
        return 'Set Alarm!'
    }
} 
console.log(setAlarm('weekday', 2100)); // Function reminds to set a alarm on weekdays. Sometimes people forget to set a alarm.