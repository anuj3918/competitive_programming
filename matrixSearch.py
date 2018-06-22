class Solution:
    # @param A : list of list of integers
    # @param B : integer
    # @return an integer
    def searchMatrix(self, A, B):
        r = len(A)
        c = len(A[0])
        for i in range(0,len(A)):
            print i
            if(A[i][0] <= B and B <= A[i][c-1]):
                return self.binarySearch(A[i], 0, c-1, B)
            if(A[i][0] >= B):
                return -1
        return -1
                
                
    def binarySearch(self,X,l,r,n):
        print X[l:r+1]
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

ob = Solution()
ans = ob.searchMatrix([[5, 16, 24, 28, 28, 76, 84, 90]], 82)
print ans