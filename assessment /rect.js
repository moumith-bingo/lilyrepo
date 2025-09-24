function CalculateArea(base,Vheight) {
    
    return (1/2)*base*Vheight;
    
}

function Main() {
    let base = 10;
    let Vheight = 20;

    let area = CalculateArea(base,Vheight);

    console.log ("The Area of a Triangle is: "+area+"cm2");
    
}
Main();