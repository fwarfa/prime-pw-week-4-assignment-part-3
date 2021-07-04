console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created variable 'basket' and set it to an empty array to start
let basket = [];

// STRETCH GOALS

// NUMBER 1
const maxItems = 5;

// NUMBER 2
function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    // if basket >= maxItems
    else {
        return true;
    }
}
// created addItem function that will take a string and add it to the globalbasket array

// STRETCH NUMBER 3
function addItem (string) {
    if (! isFull()) {
        basket.push(string);
    }
    else {
        console.log('The basket is full at this time!');
        return false;
    }
}

// created addItem function that will take a string and add it to the globalbasket array
// function addItem (string) {
//     basket.push(string);
//     return true;
// }

// testing addItem funciton
addItem('candy');
addItem('cookies');
addItem('cake');
addItem('brownie');
addItem('juice');
addItem('bagel');
addItem('bread');
addItem('cupcake');
console.log(basket);

// created listItem funciton that loops through basket array and lists each item
function listItems () {
    for (let item of basket) {
        console.log('basket contains: ' + item);
    }
    return;
}

// testing to see if listItem funtion works properly
listItems();
console.log('There should be candy, cookies, cake, brownie and juice in the basket now: ' + basket);

// created empty function that resets the basket array to being empty
function empty () {
   basket = [];
   return basket;
}

// testing empty funciton
empty();
console.log('There should be no items in the basket after the colon: ' + basket);


