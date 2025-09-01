//write a program that checks if a number is prime

let num = 10007

function isPrime(num) {
  if (num <= 1) {
    return "it's not a prime number"; 
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "it's not a prime number"; 
    }
  }

  return "it's a prime number"; 
}

console.log (isPrime(num))

//a shop gives discounts based on purchase amount

let amount= 5900

function discount(amount) {
    if (amount>5000)
        return "after discount amount is "+ (amount-(amount/100)*20);
    else if (amount>2000)
        return "after discount amount is "+ (amount -(amount/100)*10);
    else
        return "(no discount) amount is "+ amount;
        
}

console.log (discount(amount))

//write a program to check whether a person's BMI that shows their condition

let weight=87
let height=1.9

function BMI(a,b) {
    if (a/(b*b)>=30)
        return "obese";
    else if (a/(b*b)>=25)
        return "over weight";
    else if (a/(b*b)>=20)
        return "normal";
    else
        return "underweight";
    
}

console.log(BMI(weight,height))

//create a simple grading system

let marks = 95
function result(a) {
    if (a>=90 && a<=100)
        return "result is A";
    else if (a>=75 && a<=89)
        return "result is B";
    else if (a>=50 && a<=74)
        return "result is C";
    else if (a>=0)
        return "result is F";
    
}
console.log(result(marks))