
function greetings(time) {
    

switch (time){
    case (time>=5 && time<12):{
        console.log ("Good Morning");
    }
    break;
    case (time>=12 && time<17):{
        console.log("good afternoon");
    }
      
    case (time>=17 && time<21):{
        console.log("good evening");
    }
    
    case (time>=21 && time<24):{
        console.log ("good night")
    }
    default:{
        console.log ("invalid time")
    }


}
}
greetings(20)
