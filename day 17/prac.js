var col = 3;
var row = 4;
let matrix=Gen2dArray(row,col);

function Gen2dArray(row,col) {
    let dir =Array.from({length:row},()=> new Array(col).fill(0));
    for (let i=0;i<row;i++){
            for (let j=0;j<col;j++){
                dir [i][j]=Math.floor(Math.random()*100)
            }
    }
    return dir;
}

function printMatrix(dir) {
    for(let i=0;i<dir.length;i++){
        console.log(dir[i])
    }
}
printMatrix(matrix);

let revmatrix=reverse(matrix);

function reverse(mat){
    let revmat=Array.from({length:matrix[0].length},()=>new Array(matrix.length).fill(0))
    for(let i=0; i<mat.length; i++){
        
        for(let j=0; j<mat[0].length; j++){
            revmat[j][i]=mat[i][j];
        }
    }
    return revmat;
}
console.log(reverse(matrix))


printMatrix(revmatrix);