def rotate(A):
    n = len(A)
    B = []

    for i in range(0,n):
        ls = []
        for j in range(0,n):
            print A[n-j-1][i]
            print i,j
            element = A[n-j-1][i]
            ls.append(element)
        B.append(ls) 
    return B 
        
        
a b c d
e f g h
i j k l
m n o p
          
a e i m
b f j n
c g k o
d h l p



rotate([[1,2,3], [4,5,6], [7,8,9]])