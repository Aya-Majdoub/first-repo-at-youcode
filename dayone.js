console.log("---------CH1---------");
let name = "Aya";
let age = 22;
let city = "Oujda";

// ateempt 2 to create merge conflict 
console.log(name);
console.log(age);
console.log(city);

console.log("---------CH2---------");
console.log("My name is " + name + " and I am " + age + " years old.");

console.log("---------CH3---------");
let firstColor = "red";
let secondColor = "blue";
let temp = firstColor;
firstColor = secondColor;
secondColor = temp;

console.log(firstColor);
console.log(secondColor);

console.log("---------CH4---------");
let num1 = 8;
let num2 = 5;
console.log(num1 + num2);

console.log("---------CH5---------");
let quantity = 3;
let price = 40.00;
console.log("Total: " + price * quantity + "DH");

console.log("---------CH6---------");
let minutes = 5;
console.log(minutes*60);

console.log("---------CH7---------");
let score1 = 14;
let score2 = 17;
let score3 = 12;
let avg = (score1 + score2 + score3)/3;
console.log(avg);

console.log("---------CH8---------");
if (age >= 18){
    console.log("Adult");
}
else {
    console.log("Minor");
}

console.log("---------CH9---------");
let grade = 5;
if (grade >= 10){
    console.log("Passed");
}
else{
    console.log("Failed");
}

console.log("---------CH10---------");
let totalPrice = 600;
let finalPrice;
if (totalPrice >= 500){
    finalPrice = totalPrice - (totalPrice*0.1);
}
else{
    finalPrice = totalPrice;
}
console.log(finalPrice);