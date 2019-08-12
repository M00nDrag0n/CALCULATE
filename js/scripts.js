var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
}

var multiply = function(num1, num2){
  return num1 * num2;
}

var remainder = function(num1, num2){
  return num1/num2;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt(">>>>>>>>>>>>>USE YOUR KEYBOARD TO SUBMIT ANOTHER NUMBER."));

var result = add(number1, number2);
alert(result);
