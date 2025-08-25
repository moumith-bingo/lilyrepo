//write a program that takes 3 numbers and print the largest number.

let num1=900
let num2=100
let num3=60

function largestNumber(num1,num2,num3){
    if (num1>num2 && num1>num3)
        return "num 1 is the largest"
    else if (num2>num1&&num2>num3)
        return "num 2 is the largest"
    else
        return "num 3 is the largest"
 
}
console.log (largestNumber(num1,num2,num3))

//check the year whether is leap year or not

let year = 2010

function leapyear(year){
    if (year%4==0)
        return "this is a leap year"
    else 
        return "this is not a leap year"
}
console.log (leapyear(year))

//Write a program to check if a character is vowel or consonant.
let letter = "b"

function checkletter(letter){
   if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")
    return "vowel"
   else 
    return "consonant"
}
console.log(checkletter(letter))


//check the average and print pass and fail

let marks1 = 40
let marks2 = 50
let marks3 = 20

let average = (marks1+marks2+marks3)/3

function result(average) {
    
    if (average>=40)
        return "pass"
    else
        return "fail"
    
}
console.log (result(average))


