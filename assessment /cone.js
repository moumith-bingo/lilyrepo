function AreaCorn(r,s){
    return Math.PI*r*r+Math.PI*r*s
}
function VolumeCorn(r,h) {
    return (1/3)*Math.PI*r*r*h
}

function main() {
    let radius = 10
    let height =20
    let slant = 25


    let Area = AreaCorn(radius,slant)
    let Volume = VolumeCorn(radius,height)



    console.log ("Area of corn:"+Area)
    console.log ("Volume of Corn:"+Volume)
}

main()