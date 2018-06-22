
def binarySearch(self,X,l,r,n):
    if(n < X[l] or n > X[r]):
        return -1
    if(r-l == 0 and X[l] != n):
        return -1

    m = (l+r)/2
    mid = X[m]
    if(mid == n):
        return m
    elif (mid < n):
        return self.binarySearch(X, m+1, r, n)
    else:
        return self.binarySearch(X, l, m-1, n)