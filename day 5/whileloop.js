//sum random numbers

function addNumbers() {
    let sum=0;
    let count=0;
    let randomNumber=0;
    while (randomNumber!=3){
    randomNumber=Math.floor(Math.random()*1000)
    console.log (randomNumber);
    sum+=randomNumber;
    count++; }
    console.log("the total is : "+sum)
    console.log("the count is : "+count)
   
}
addNumbers();
