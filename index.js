//will connect the coffee_data.js file to index.js file
const coffeeMenu = require("./coffe_data.js");

//we need to print an array of all the drinks on the menu
//we will use the map method 
const drinks = coffeeMenu.map((drinkObj) => drinkObj.name);
//next we need to Print an array of drinks that cost 5 and under
// we will use the filter method
const drinksPrice = coffeeMenu.filter((drinkObj) => drinkObj.price <= 5);
//next we will Print an array of drinks that are priced at an even number
//we will use the filter method and check if the remainder of price / 2 is strickly equal to 0 then it will return true
const priceEven = coffeeMenu.filter((drinkObj) => drinkObj.price % 2 === 0);
//next we will Print the total if you were to order one of every drink
// we will use the reduce method to add all the prices
const totalCost = coffeeMenu.reduce((total, drinkObj) => (total += drinkObj.price), 0);
//next we will Print an array with all the drinks that are seasonal
//we will do this by using the filter to check if seasonal is true
const areSeasonal = coffeeMenu.filter((drinkObj) => drinkObj.seasonal);
//next we will Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans
//we will do this by using the for each method
coffeeMenu.forEach(drinkObj => console.log(drinkObj.name + " with imported beans"));
