var students = [[29,60,22],
                [31,54,25],
                [20,57,16],
                [3,18,9]]

function PrintArray() {
    for(i=0;i<students.length;i++)
       console.log (students[i])
    
}
PrintArray()


function totalSumofStudentsInEachCourse(){
    for(i=0;i<students.length;i++){
       for(let sum=0;sum+=students[i][0];){
        return sum
       }
      
    }
}
console.log (totalSumofStudentsInEachCourse())


function totalSumofStudentsInEachBatch() {
    for(let i=0;i<students.length;i++){
        let sum =0
        return sum+=students[i][2]
    }
    
}

console.log (totalSumofStudentsInEachBatch())




function NumberOfStudentsInTheirRespectiveCourse() {
    for(let j=0;j<students[0].length;j++){
        for (let sum = 0;sum+=students[3][j];){
            return sum + " Number of students in their respective course"
        }
    }
    
}
console.log (NumberOfStudentsInTheirRespectiveCourse())



function TotalNumberOfStudents(){
    for(let i=0;i<students.length;i++){
        for(let sum = 0;sum+=students[i];){
        while(i<=3){
            return sum + " Total number of students"
          }
      }
   }
}
console.log (TotalNumberOfStudents())