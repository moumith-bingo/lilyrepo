//genrate random number inside array
function generateMatrix(row,col) {
    let mat = Array.from ({length:row},()=> new Array(col).fill(0));
    for(let i=0;i<row;i++){
        for (let j=0;j<col;j++){
            mat[i][j]=Math.floor(Math.random()*100+2);
        }
    }
    return mat
}

function printMatrix(mat) {
    for (let i=0;i<mat.length;i++){
        console.log (mat[i]);
    }
    
}

function SumofMatrix(mat1,mat2) {
    let sumMatrix = Array.from ({length:mat1.length},()=>Array(mat1[0].length).fill(0));
    for (i=0;i<mat1.length;i++){
        for (j=0;j<mat1[0].length;j++){
            sumMatrix[i][j]=mat1[i][j]+mat2[i][j];
        }
    }
    return sumMatrix;
}

console.log(SumofMatrix())