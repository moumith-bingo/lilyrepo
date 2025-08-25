//Write a program that checks if a number is positive,negative,or zero.



function checkNumber(number) {
    if (number<=0){
        return "negative"
    }
    else if (number=0){
        return "zero"
    }
    else if(number>=0){
        return "positive"
    }
    
}
let number = -30
console.log (checkNumber(number))

//ask the user for their age.If the age is 18 or older.print "you can vote" otherwise "you cannot"



function checkAge(age) {
    if (age>=18)
        return "you can vote";
    else if (age<=18)
        return "you cannot vote";
    
} 
let age=20
console.log (checkAge(age))

//Check if a given number is odd or even



function CheckNumber(Number) {
    if (Number%2==0)
        return "even";
    else 
        return "odd";
}
let Number= 14
console.log(CheckNumber(Number))

//Write a program that checks if a number is divisible by 5 or not



function checkNum(Num) {
    if (Num%5==0)
        return "divisible by 5";
     else 
        return "not divisble by 5";
}
let Num=35
console.log (checkNum(Num))