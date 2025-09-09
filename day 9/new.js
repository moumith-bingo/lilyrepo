//summation of numbers...

function calculation (num,num2,num3) {
    let calculations=(num+num2)*num3;
    return  "value after calculation: "+ calculations;
}
console.log (calculation (70,31,20))


//class exam

let num1,num2,num3;
num1=10;
num2=30;
num3=50;

function summation(a,b) {
    let sum = (a+b)
    return sum
}
let output;
output = "The Summation of numbers are: "+(summation(num1,num2)+summation(num3,0));
console.log ("num1 is "+num1);
console.log ("num2 is "+num2);
console.log ("num3 is "+num3);
console.log (output);



//check if a word is palindrome

function checkPalindrome(word){
    let revWord="";
    for(let i=word.length-1; i>=0;i--){
        revWord+=word[i];
    }
    if(revWord==word){
        return "true";
    }
    return "false";
}
console.log(checkPalindrome("mom"));