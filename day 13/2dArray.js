let mat = [
    [12,24,36],
    [48,60,72],
    [84,96,108]
];
console.log (mat[0][2])

for (i=0;i<mat.length;i++){
    for (j=0;j<mat[0].length;j++){
    
    }
}



//second method

const rows = 3;
const cols =4;
const matx= Array.from({length:4},()=> new Array(cols).fill(Math.floor(Math.random()*100)+1));
console.log (matx)

for (i=0;i<matx.length;i++){
    for (j=0;j<matx[0].length;j++){
        console.log(matx[i][j])
    }
}

