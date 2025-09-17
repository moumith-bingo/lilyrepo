function main() {
    let A =[[1,3,4],[5,6,8]];
    let B = [[12,13,14,21],[14,15,16,18],[22,8,9,44]];
    let output = matrixMultiplication(A,B);
    printMatrix (output)
}
function eligibleToMultiply(a,b) {
    if (a[0].length==b.length)
        return true;
    else
        return false;
    
}

function matrixMultiplication(a,b) {
    if(eligibleToMultiply(a,b)) {
        let output =Array.from ({length:a.length},()=>new Array(b[0].length).fill(0));
        let sum =0
        for (let i =0;i<a.length;i++){
            for (let j =0;j<b[0].length;j++){
                for(let k=0;k<b.length;k++){
                    sum +=a[i][k]*b[k][j];
                }
                output[i][j]=sum;
                }
        }
        return output
    }
    else{
        console.log ("Cannot do the multiplication")
        return 0
    }
}
function printMatrix(a) {
    for(i=0;i<a.length;i++){
        console.log (a[i])
    }
    
}
main();