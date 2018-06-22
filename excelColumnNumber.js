function columnNumber(A){
    var columns = A.split('');
    var colNum = columns.map(function(col){
        return col.charCodeAt(0) - 64;
    });

    // console.log(colNum)

    var val = 0;
    for(var i=0; i < colNum.length; i++){
        val = val*26 + colNum[i]; 
        // console.log(val)
    }

    return val
}

console.log(columnNumber('AAA'))