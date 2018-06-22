def nextPermutation(A):
    A = sorted(list(A))
    swapped = False
    smallest = len(A)-1

    for i in range(len(A)-1, 0 ,-1):

        if(swapped == True):
            break

        if(A[i] < smallest):
            smallest = i

        if(A[i] <= A[i-1]):
            continue

        temp = A[smallest]
        A[smallest] = A[i-1]
        A[i-1] = temp

    A = A[0:i] + list(reversed(A[i:])) 
    swapped = True

    if(swapped == True):
        return A
    else:
        return sorted(A)

# print nextPermutation([ 1,2,3,4 ])
print nextPermutation('cab')
