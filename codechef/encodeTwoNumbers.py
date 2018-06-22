def arrange(A):
    n = len(A)
    for i in range(0,n):
        A[i] += (A[A[i]] % n) * n
        
    for i in range(0,n):
        old = A[i] % n
        new = A[i]/n
        A[i] = new
        
    return A

print arrange([ 4, 0, 2, 1, 3 ])