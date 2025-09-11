let rows = 10;
let cols = 5;

function generateMatrix(rows,cols) {
    let mat = Array.from ({length:rows},()=> new Array(cols).fill(0));
    for(let i=0;i<rows;i++){
        for (let j=0;j<cols;j++){
            mat[i][j]=Math.floor(Math.random()*100+2);
        }
    }
    return mat;

}
function printMatrix(mat) {
    for (let i=0;i<mat.length;i++){
        console.log (mat[i]);
    }
    
}

console.log (generateMatrix(rows,cols))
let mat1 = generateMatrix(rows,cols)
console.log ("This is matrix")
printMatrix(mat1)

function findMax(mat1) {
    for(let i=0; i<mat1.length;i++){
        let maxvalue = mat1 [i][0];
        for(let j=0;j<mat1[0].length;j++){
            if(maxvalue<mat1[i][j])
                maxvalue = mat1[i][j];     
        }
            console.log ("The Maximum value in row "+(i+1)+" is "+maxvalue);
    }
    
}
findMax(mat1);
