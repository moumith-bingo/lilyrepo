var lenght=20
var width=30
var base=10
var vheight=6
var radius=7
var width2=20
var height=20

function area(a,b) {
    return a*b
}
function area2(a,b) {
    return 1/2*a*b  
}
function area3(b) {
    return Math.PI*b*b
}
function area4(a,b) {
    return a*b
}
function perimeter(a,b) {
    return a+b+a+b
}
function volume(a,b,c) {
    return a*b*c
}
function volume2(a,b) {
    return Math.PI*(a*a)*b
    
}

console.log("area of rectangle = "+area(lenght,width))
console.log("area of Triangle = "+area2(base,vheight))
console.log("area of circle = "+area3(radius))
console.log("area of triangle = "+area4(lenght,width2))
console.log("perimeter of square = "+perimeter(lenght,width2))
console.log("volume of cube = "+volume(lenght,width2,height))
console.log("volume of cylinder = "+volume2(radius,height))