var number1 = 40;
var number2 = 1.5;

console.log(number1 + number2);

var number1 = '40';
var number2 = 1.5;

console.log(number1 + number2);

var number1 = '40';
    number1 = parseFloat(number1);
var number2 = 1.5;

console.log(number1 + number2);

var number1 = '40';
    number1 = +number1;
var number2 = 1.5;
console.log(number1 + number2);

var number1 = 40;
    number1 = ''+number1;
var number2 = 1.5;

console.log(number1 + number2);


var n1 = 0.1;
var n2 = 0.2;
var total = n1+n2;
    total = total.toFixed(1); /* for number of degit show*/ 
console.log(total);
