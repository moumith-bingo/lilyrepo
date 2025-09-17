let num = 7
function calculateFactorial(a) {
    let fact =1
    for(let i =1;i<=a;i++){
        fact*=i
    }
   return fact
}

console.log (calculateFactorial(num))