function findSubset(A, reqSum, i, sum, subset){
    if(sum == reqSum){
        console.log(true)
        console.log(subset)
        return true
    } else {
        if(sum < reqSum && i < A.length){
            element = A[i]
            let newSubset = subset.slice(0)
            newSubset.push(element)
            let leftTree = findSubset(A, reqSum, i+1, sum + element, newSubset)
            let rightTree = findSubset(A, reqSum, i+1, sum, subset)
            return (leftTree || rightTree)
        }
    }
}

findSubset([1,2,4,5], 5, 0, 0, [])