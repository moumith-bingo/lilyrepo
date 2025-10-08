//Write a Javascript to analyse Inter-house sports meet scores in a school. The score in a school.
// The score details based on the house and the gender for gender for inter-house are given below

//store the details above score boards in a 2d array
var SportArray = [["Gryffindor",255,211],
                   ["Hufflepuff",203,121],
                   ["Ravenclaw",272,292],
                   ["Slytherin",25,275]]

function PrintArray() {
    for (let i=0;i<SportArray.length;i++)
            console.log (SportArray[i])

    
}
PrintArray()

//Find and displaythe highest score gender and the score obtained in each of the houses
   


    function findMax() {
    for(let i=0;i<SportArray.length;i++){
        if (SportArray[i][1]>SportArray[i][2])
        console.log ("The Best performance in "+SportArray[i][0]+" house of the house meet is : Girls "+SportArray[i][1]);
        else
        console.log ("The Best performance in "+SportArray[i][0]+" house of the house meet is : boys "+SportArray[i][2])
     }
}
findMax()

//Find and display the highest scored house in each of the gender

function FindHighestInHouse() {
    let 
       
    
}




