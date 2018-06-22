function nextPerm(A){
       
    var swapped = false
    var smallest = A.length - 1

    for(var i=A.length-1; i>0;i--){
        if(swapped){
            break;
        }

        if(A[i] < smallest){
            smallest = i;
        }

        if(A[i] <= A[i-1]){
            continue;
        }

        var temp = A[smallest]
        A[smallest] = A[i-1]
        A[i-1] = temp
        
        var t = A.splice(0);
        var t1 = A.splice(0, i);
        var t2 = A.splice(i, A.length).reverse();
        A = t1.concat(t2); 
        swapped = true;
    }       

    if(swapped)
        return A.join('')
    else
        return A.sort().join('')
}

console.log(nextPerm([1,2,3]))