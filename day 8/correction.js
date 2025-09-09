//Search for an element in the array and return its index.
let num=[50,14,48,25,10,36,55]

function findIndexInArray(array,numx) {
    let Index="";
    for (let i=0;i<array.length;i++){
        if(array[i]==numx){
            Index+=(i+", ")
        }
    }
    return Index;
}
findIndexInArray(num,25)
//Calculate the average of the elements.
function average(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum/num.length);
}
average(num);
//Write a function reverseArray() that reverses the order of the elements.
function reverseArray(num){
let revArray=[];
    for(let i=0; i<num.length; i++){
        revArray[i]=num[num.length-1-i];
    }
    return revArray;
}
console.log ("the original value of the array is "+num)
console.log ("The reversed value of the array is "+reverseArray(num))
//Write a function exists(element) that prints true if the element is present, otherwise false.
let max=num[0];
function check(element){
    for(let i=0; i<=num.length; i++){
        if(num==element){
            return "true";
        }
        else if(max<num[i]){
            max=num[i];
            return "false"
        }
    }
}
check(5);
//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.
function checkPalindrome(word){}
//Write a function sumOfDigi(number) that prints the sum of the given number.
function sumAllArrays(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log("Total: " + sum);
}
sumAllArrays(num);
