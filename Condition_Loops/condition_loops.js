
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
*/
