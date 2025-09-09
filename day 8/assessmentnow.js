//Search for an element in the array and return its index?
let numbers=[45,78,89,66,61,79,92,19];
console.log("The Index is "+numbers[2]);
//Calculate the average of the elements?
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum/numbers.length);
}
average(numbers);

//Write a function reverseArray() that reverses the order of the elements?
function reverseArray(numbers){
let nut=numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(nut<numbers[i]){
            nut=numbers[i];
            numbers.push(nut);
        }
    }
    console.log(numbers);
}
reverseArray(numbers);
//Write a function exists(element) that prints true if the element is present, otherwise false?
let max=numbers[0];
function check(element){
    for(let i=0; i<=numbers.length; i++){
        if(numbers==element){
            return "true";
        }
        else if(max<numbers[i]){
            max=numbers[i];
            return "false"
        }
    }
}
check(5);
//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not?

//Write a function sumOfDigi(number) that prints the sum of the given number?
function sumAllArrays(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("Total: " + sum);
}
sumAllArrays(numbers);






