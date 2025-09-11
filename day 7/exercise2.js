let numbers = []
console.log(numbers)
numbers.push (9,54,14,58,47)


function addAnElement(numbers,index,value) {
   if (index<0|| index>=numbers.lengh){
    console.log("Invalid index value");
   }
   else {
    numbers.splice(index,0,value);
    console.log("The new array is "+numbers)
   }
    
} 
addAnElement(numbers,4,16)

//print all elements in ARRAY

    function printAllElements(numbers) {
    console.log(numbers);
}

 printAllElements(numbers)


//print the elements in array one by one


//finding the largest in array.

function findingMaximum(numbers){
    var  max=numbers [0];
    for(let i=1; i<numbers.lengh;i++){
        
        if(max<numbers[i]){
           return max=numbers[i];
        }
        else {
            return max =max
        }
    }
    console.log ("the maximum is "+max)
}
findingMaximum(numbers);

function addNumber(numbers) {
    let sum=0
    for(let i=0;i<numbers.length;i++){
        if(sum<numbers[i]){
            sum=numbers[i];
        }
    }
        console.log ("the sum of array "+sum)
}