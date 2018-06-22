function maxset(A){
	    
    // find out the index of first +ve element
    positive_start = 0
    for(var i=0; i<A.length; i++){
        if(A[i] < 0){
            positive_start = i+1
        } else {
            positive_start = i
            break
        }
    }
    // if all elements in the array are -ve
    if(positive_start >= A.length){
        return [];
    }

    var subs = {}
    var max_sum = 0
    var max_start = 0
    var max_end = 0

    var s = positive_start, e = 0, sum = 0;
    for(var i=positive_start; i<A.length; i++){
        if(A[i] >= 0){
            sum = sum + A[i]
            e = i
        }
        if(A[i] < 0) {
            if(sum > max_sum){
                max_start = s
                max_end = e
                max_sum = sum
            }
            if(sum === max_sum){
                if((e-s) > (max_end - max_start)){
                    max_start = s
                    max_end = e
                    max_sum = sum
                }
            }
            
            // setting s, e and sum to 0 to analyse new subset
            s = i+1
            e = i+1
            sum = 0
        }
    }
    
    // if last element of array is +ve, we need to check this
    if(sum > max_sum) {
        max_start = s
        max_end = e
        max_sum = sum
    }

    // building subset list using indexes
    var sub = []
    for(var j = max_start; j <= max_end; j++){
        sub.push(A[j])
    }

    return sub
}

console.log(maxset([-1, 1,2,-1,2,1]))