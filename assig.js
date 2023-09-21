//1
let num = 235345;
let myArr;
myArr = String(num).split("").map((num) => {
    return Number(num);
});
console.log(myArr);
//2
let str = "äÄçÇéÉêPHP-MySQLöÖÐþúÚ";
console.log(str.replace(/[^\x20-\x7E]/g, ''));
//3
function isBig(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBig);
console.log("Test Value : " + passed);
var passed = [12, 5, 8, 130, 44].every(isBig);
console.log("Test Value : " + passed);
//4
let str1 = "emilinantony";
console.log(str1.charAt(0).toUpperCase() + str1.slice(1));
//i
var arr = [2, 3, 5, 6, 7];
function avg(arr) {
    var sum = 0;
    arr.forEach(function (item, idx) {
        sum += item;
    });
    return sum / arr.length;
}
console.log(avg(arr));
//j
// ANSI escape codes for text colors
const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
// Example usage
console.log(RED + "This is red text." + RESET);
console.log(GREEN + "This is green text." + RESET);
console.log(YELLOW + "This is yellow text." + RESET);
console.log(BLUE + "This is blue text." + RESET);
