//if condition
//if the marks is greater than and equal to 50 then print pass else print fail.

var marks= 40;
function checkMarks(marks) {

if(marks>=50){
    console.log("pass");
}
else{
    console.log("fail");
}
}
checkMarks(10)

//trafficlight color

let color="yellow"
function trafficlight(color) {
    if(color=="red")
        return "stop"

    else if (color=="yellow")
        return "slowdown"

    else if (color=="green")
        return "go"
    
}
console.log(trafficlight(color))
