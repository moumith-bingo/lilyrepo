let rows = 3
let cols = 3
function generateMatrix(mat1){
    for(let i=0;i<mat1.length;i++){
        for (let j=0;j<mat1[0].length;j++){
            if (i=j){
                return (mat1[i][j])
            }
           
        }
    }
}

function printMatrix(mat){
    for(let i=0;i<mat.length;i++){
        console.log (mat[i])
    }
}


console.log (generateMatrix(rows,cols))
let mat1 = generateMatrix(rows,cols)
console.log ("This is matrix")
printMatrix(mat1)