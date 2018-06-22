function columnTitle(A){
    var cols = "";
    
    while(A >= 1){
        
        var rem = A % 26;
        var q = Math.floor(A/26);

        if(rem === 0){
            var colName = 'Z';
            q--;
        } else {
            var colName = String.fromCharCode(rem + 64);
        }

        cols += colName;
        A = q;
    }
    return cols.split('').reverse().join('');
}

console.log(columnTitle(26))
console.log(columnTitle(52))
console.log(columnTitle(53))
console.log(columnTitle(78))
console.log(columnTitle(79))