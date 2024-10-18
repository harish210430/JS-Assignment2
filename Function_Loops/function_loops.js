//  Reverse a String:
let str1 = "Computer";
let reverseStr = "";
for(let i = (str1.length - 1); i >= 0; i--) {
    reverseStr = reverseStr + str1[i];
}
console.log(reverseStr);