
/*
1. What is the difference between null and undefined

Ans: undefined:
    1. Uninitialize Variable: undefined is a primitive value, when a var. declared but not initialize So it automatically assigned.
    2. Missing return from Func. : when a func. does't return a value, it return 'undefined'.
    3. Non-Existance Object/Array Property:  
        like as : let obj = {};
         console.log(obj.property); // 'undefined'
                                            
Null: null is a object which assign to a variable/obj to represent no value.

2. You have a variable named userAge with a value of NaN. Write an if condition to check if the value of userAge is NaN or not. If the value is NaN alert message The value is NaN otherwise alert Sorry the value if not NaN.

let userAge = NaN;
if(userAge === NaN) {
    alert("The value is NaN");
} else {
    alert("Sorry");
}

3. We have two variables user1 and user2. Write an if condition to check if they are equal or not. If they are alert Both values are equal or else alert Both value are not equal. Explain why they are equal or not equal.


let user1 = "Sameer";
let user2 = "sameer";
if(user1 === user2) {
    alert("Both values are equal.");
} else {
    alert("Both values are not equal.") // not equal Becoz "S" != "s".
}

4.What will be the output of the code below?

function sum(a, b) {
    return a + b;
  }
  
  sum(1, '2'); // "12"

5.What will be the output of the code below?

let number = 0;
console.log(number++); // 0 then ++ So it became 1
console.log(++number); // ++1 = 2
console.log(number); // 2

6.What will be the output/issue in the given code below?

function getAge() {
    age = 21;
    console.log(age);
  }
  
  getAge(); // log 21, return undefined.

7. What will be the output of the code below?

function sayHi() {
    function add() {
      return 21;
    }
    return add(); // return 21
  }
  
  console.log(typeof sayHi()); // typeof 21 = Number

8. Next to each line given below write condition or loop based on what will be used in solving.

List numbers from 1 to 100

for(let i = 1; i <= 100; i++) {
console.log(i);
}

Check if the number id odd or even

if(num % 2 === 0) {
console.log("num is even");
} else {
 console.log("num is odd");
}

Keep buying phone if the total amount is less than 20000

if(amount < 20000) {
console.log("Buy a Phone");
}

Only buy accessories if the total amount id less than 10000

if(amount < 10000) {
alert("Only buy accessories");
}

List all the even values from 0 to 100

for(let j = 2; j <= 100; j++) {
if(j % 2 === 0) {
console.log(j);
}
}

List all the odd values from 0 to 100

for(let k = 1; k <= 100; k++) {
if(k % 2 != 0) {
console.log(k);
}
}

Drink a glass of water when you are thirsty

if(value === "thirsty") {
console.log("Drink a glass of water");
}

9. Write a function that accepts the name of a product like phone, laptop, watch, tv or tablet. Based on the input return the price of the product. (You can choose any price you want). What will you use to solve this switch or if..else Explain your reason of why to use user one over another.

let price;
function productWithPrice(product) {
    switch(product) {
        case "laptop":
             price = prompt("Enter your price:");
            return(`laptop with price of ${price}`);
            // break;
        case "Phone":
             price = prompt("Enter your price:");
            return(`Phone with price of ${price}`);
            // break;
        case "Tablet":
            price = prompt("Enter your price:");
            return(`Tablet with price of ${price}`);
            // break;
        case "Watch":
            price = prompt("Enter your price:");
            return(`Watch with price of ${price}`);
            // break;
        case "TV":
            price = prompt("Enter your price:");
            return(`TV with price of ${price}`);
            // break;
        default:
            return("Please Enter a valid input.");
    }
}
console.log(productWithPrice("laptop"));

10. What will be the output of the following lines of code given below?
*/
function add(a, b) {
    return a + b;
  }
  typeof typeof add(21, 22); // String
  typeof typeof add(21, '22'); // String
  
  typeof typeof typeof add(100, true); // String
  typeof add(100 || true, 12 && 21); // Number
  typeof add(100 || true, 12 && 21 && 0); // Number
  typeof add; // Function 
  typeof typeof add; // String
