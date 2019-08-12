var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(num1, num2) {
  return num1 * num2;
}

var remainder = function(num1, num2) {
  return num1 / num2;
}

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt(">>>>>>>>>>>>>USE YOUR KEYBOARD TO SUBMIT ANOTHER NUMBER."));
//
// var result = add(number1, number2);
// alert(result);

document.addEventListener('click', function(event) {
  switch (event.target.name) {
    case "abutton":
      var num1 = parseInt(document.getElementsByName("a_num1")[0].value);
      var num2 = parseInt(document.getElementsByName("a_num2")[0].value);
      var total = add(num1, num2);
      console.log(num1, num2);
      alert(num1 + " + " + num2 + " = " + total);
    case "sbutton":
      var num1 = parseInt(document.getElementsByName("s_num1")[0].value);
      var num2 = parseInt(document.getElementsByName("s_num2")[0].value);
      var total = subtract(num1, num2);
      console.log(num1, num2);
      alert(num1 + " + " + num2 + " = " + total);
    case "mbutton":
      var num1 = parseInt(document.getElementsByName("m_num1")[0].value);
      var num2 = parseInt(document.getElementsByName("m_num2")[0].value);
      var total = multiply(num1, num2);
      console.log(num1, num2);
      alert(num1 + " + " + num2 + " = " + total);
    case "rbutton":
      var num1 = parseInt(document.getElementsByName("r_num1")[0].value);
      var num2 = parseInt(document.getElementsByName("r_num2")[0].value);
      var total = remainder(num1, num2);
      console.log(num1, num2);
      alert(num1 + " + " + num2 + " = " + total);
  };


});


// dd(document.querySelector('a_num1'), document.queryseelctor('a_num2')
