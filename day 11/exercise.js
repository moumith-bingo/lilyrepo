//finding Vowel letter
function FindingVowel(one) {
    if(one == "a"||one =="e"||one =="i"||one =="o"||one =="u"||one =="A"||one =="E"||one =="I"||one =="O"||one =="U"){
       console.log (one+" is a vowel letter")
    }
    else{
        console.log (one+ " isn't a vowel letter")
    }
}
FindingVowel("o")


//print a number in reverse
var num = 4739309
function ReverseNumber(num) {
       let revNum = 0;
    while (num>0) {
        revNum=(revNum*10)+(num%10);
        num=Math.floor(num/10);
      
    }
    return revNum
}
console.log (ReverseNumber(num))


//generate random numbers in array

let size = 10;
let randomArray = [];

for (let i = 0; i < size; i++) {
  randomArray.push(Math.floor(Math.random() * 100) + 1);
}

console.log(randomArray)

//summation of Array numbers

function Addnumbers(rand) {
    let sum = 0;
    for (let  i=0;i<rand.length;i++){
    sum+=rand[i];
}
    return sum;
}
console.log (Addnumbers(randomArray));

//generate numbers in array and count how many times it's giving same number

let sizex = 20;
let randomArrayx=[];

    for (let i=0;i<sizex;i++){
        randomArrayx.push(Math.floor(Math.random()*10)+1)
    }

console.log(randomArrayx)


function checkUniqueNumbers(arr) {
    let uniqueNumberArray = arr[0];
    for (let i =0;i<arr.length;i++){
        for(let j=0;j<uniqueNumberArray.length;j++){
            if(uniqueNumberArray[j]!=arr[i])
                uniqueNumberArray.push (arr[i])
        }
    }
    
}