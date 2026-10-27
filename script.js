// Write your JavaScript below this line
var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));
var tip = Number(prompt("Tip percentage (ex. 0.15 for 15%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("Number of people (minimum of 1)"));

console.log(
  `Your meal cost is $${mealCost.toFixed(2)}, and with the tip, it comes to $${total.toFixed(2)}. Your share is $${(total / numOfPeople).toFixed(2)}. Hope it was delicious!`
);
