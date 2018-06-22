function firstMissingPositive(A){
    A = A.filter(function(e){
        if(e>0){
            return true
        }
    })
    var i = 0;
    var set = {}
    for(i=0; i<A.length; i++){
        e = A[i]
        if(!set[e]){
            set[e] = 1
        }
    }
    for(i=0; i<A.length; i++){
        if(set.hasOwnProperty(i+1) ===  false){
            return i+1
        }
    }
    return i+1
}

var x = firstMissingPositive([1, 2, 6 , -1])
console.log(x)