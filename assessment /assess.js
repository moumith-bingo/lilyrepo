
function IsPositive() {
    var n = Math.floor(Math.random()*99999+1)
    console.log (n)
}



function isPrime() {
    if (IsPositive()<=1){
        return IsPositive() +" It's not a Prime number"
    }
    for(let i=2;i<IsPositive();i++){
        if (IsPositive()%i==0){
            return IsPositive()+ " It's not a Prime number"
        }
        else{
            return IsPositive()+" It's a Prime number"
        }
    }
}

console.log (isPrime())


function Main(){
    IsPositive()
    isPrime ()
}

console.log  (Main())

