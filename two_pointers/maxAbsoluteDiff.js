function maxArr(A) {
    var max_i_j = A.length - 1;
    
    var max = A[0]
    var min = A[0]
    var indexes = {
        max: [],
        min:[]
    };

    for(var i=0; i<A.length; i++){
        if(A[i] > max){
            max = A[i];
            indexes.max.push(i)
        }
        if(A[i] < min){
            min = A[i];
            indexes.min.push(i)
        }
    }

    if(max - min < max_i_j){
        return max
    }



}
