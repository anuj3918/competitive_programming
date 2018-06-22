function lex(A){ 
    var S = A.split('').sort(function(a,b){
        if(a>b)
            return 1;
        return -1;
    });
    var S_rev = A.split('').sort(function(a,b){
        if(a>b)
            return -1;
        return 1;
    });

    var rank = 1;
    if(S.join('') === A){
        return rank;
    }
    while(S.join('') !== S_rev.join('')){
        // console.log("again")
        var l = S.length;
        for(var i=0; i<l-1; i++){
            var isLargest = true;
            for(var j=i+1; j<l; j++){
                if(S[j] < S[j+1]){
                    isLargest = false;
                    break;
                }
            }
            
            if(isLargest){
                var nxt = S[i];
                var swapper_index = l-1;
                for(var j=l-1; j>i;j--){
                    if(S[j] > S[i]){
                        swapper_index = j;
                        break;
                    }
                }

                rank++;
                // console.log(S[i], S[swapper_index])
                
                var temp = S[i];
                S[i] = S[swapper_index];
                S[swapper_index] = temp;
                var t1 = S.slice(0, i+1);
                var t2 = S.slice(i+1, l).sort(function(a,b){
                    if(a>b)
                        return 1;
                    return -1;
                });
                // console.log(t1, t2)
                S = t1.concat(t2);
                console.log(S);
                // console.log("\n")
                if(S.join('') === A){
                    return rank % 1000003;
                }
            }


        }
        
    }

    return rank % 1000003;
       
}
console.time("s")
console.log(lex('DTNGJPURFHYEW'))
console.timeEnd("s")