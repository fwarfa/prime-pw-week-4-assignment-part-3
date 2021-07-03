console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created variable 'basket' and set it to an empty array to start
let basket = [];

// created addItem function that will take a string and add it to the globalbasket array
function addItem (string) {
    basket.push(string);
    return true;
}

// testing addItem funciton
addItem('candy');
addItem('cookies');
addItem('cake');

// created listItem funciton that loops through basket array and lists each item
function listItems () {
    for (let item of basket) {
        console.log('item added: ' + item);
    }
    return;
}

// testing to see if listItem funtion works properly
listItems();
console.log('There should be candy, cookies, and cake in the basket now: ' + basket);

// created empty function that resets the basket array to being empty
function empty () {
   basket = [];
   return basket;
}

// testing empty funciton
empty();
console.log('There should be no items in the basket after the colon: ' + basket);


