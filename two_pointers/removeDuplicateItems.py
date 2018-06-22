def removeDuplicateElements(A):
    dict = {}
    ptr = 0
    counter = 0
    processingSingletons = True

    for i in range(0, len(A)):
        key = str(A[i])
        if(key not in dict):
            dict[key] = 1
        else:
            A[i] = -999

    duplicatesToLeft = 0
    for i in range(0, len(A)):
        if(A[i] == -999):
            duplicatesToLeft += 1
        if(A[i] != -999 and duplicatesToLeft > 0):
            A[i - duplicatesToLeft] = A[i]
            A[i] = -999

    deleteFrom = len(A)
    for i in range(0, len(A)):
        if(A[i] == -999):
            deleteFrom = i
            break

    if(deleteFrom < len(A)):
        del A[deleteFrom:]

    print A


# input = [0,0,0,0,0,1,1,1,1,1,2,2,2,2]
input = [1,2,3,1,2,4,5]

removeDuplicateElements(input)