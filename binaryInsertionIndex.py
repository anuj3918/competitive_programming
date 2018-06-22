class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def searchInsert(self, A, B):
        if(B < A[0]):
            return 0
        if(B > A[len(A)-1]):
            return len(A)
        return self.binarySearch(A, 0, len(A)-1, B)
            
    def binarySearch(self,X,l,r,n):
        if(n < X[l]):
            return l
        if(n > X[r]):
            return r+1
        m = (l+r)/2
        mid = X[m]
        if(mid == n):
            return m
        elif (mid < n):
            return self.binarySearch(X, m+1, r, n)
        else:
            return self.binarySearch(X, l, m-1, n)
