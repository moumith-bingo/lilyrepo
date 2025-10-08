function isPrime(num) {
    if(num<=1){
        return num +" It's not a prime number"
    }
    for(let i=2;i<num;i++){
        if (num%i==0){
            return num + " It's not a prime number"
        }
        else 
            return num + " It's a Prime number"
    } 
}

function Main() {
    let num = 107
    console.log (isPrime(num))
}

Main()