var num = 99.38; //12; can use anytype of number
console.log(num.toString()); //12
console.log(typeof num.toString()); //string

let num1 = "123xyz";
console.log(typeof num1); //string type
console.log(typeof parseInt(num1)); //123 number type (it gives the numbers out of the any input value)
console.log(parseInt('abc')); //NaN
console.log(typeof parseInt('abc')); //Number

//Converting one type to another type is know as 'COERCION'

console.log(parseInt('3.4')); //3
console.log(parseFloat('3.4'));// 3.4 (it provides the floating value)

var num2 = 123.456;
console.log(num2.toFixed(1)); //123 (it rounds of the given value
//we can provide number in () or can leave it blank

//Practice problems ---------------------->>>>>>>>>>>>>>>>>>>>>
console.log(toString(100)); //undefined
console.log(parseInt('44')); //44
console.log(parseInt('22.222')); //22
console.log(parseInt('Banana')); //NaN
console.log(parseFloat(12)); //12
console.log(parseFloat(13.3)); //13.3

var number = 10; console.log(number.toFixed(2)); //10.00
var number1 = 15.456789; console.log(number1.toFixed()); //15
var number2 = 15.456789; console.log(number2.toFixed(2)); //15.46
var number3 = 15.456789; console.log(number3.toFixed(3)); //15.457

