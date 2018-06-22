function rank(A){
    var totalRank = 0;
    A = A.split('')
    while(A.length){
        var S = A.slice(0);
        var S = S.sort(function(a,b){
            if(a>b) return 1;
            else return -1;
        });
    
        var rank = 0;
        var c = A[0];
        var smallerChars = S.indexOf(c);

        if(smallerChars){
            var factorial = 1;
            for(var j=1; j<=A.length - 1; j++){
                factorial *= j;
            }
            rank = smallerChars * factorial;
            totalRank += rank;
            
        }
        A.splice(0,1);
    }
    return totalRank+1;
}

console.log(rank("CDAB"));