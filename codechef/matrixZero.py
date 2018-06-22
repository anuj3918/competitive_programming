class Solution:
    # @param A : list of list of integers
    # @return the same list modified
    def setZeroes(self, A):
        nrow = len(A)
        ncol = len(A[0])
        rows = set([])
        cols = set([])
        for i in range(0, nrow):
            for j in range(0, ncol):
                if(A[i][j] == 0):
                    rows.add(i)
                    cols.add(j)
        
        for r in rows:
            A[r] = [0] * ncol

        for c in cols:
            for i in range(0, nrow):
                A[i][c] = 0

        return A

obj = Solution()
print obj.setZeroes([[1,2,0],[4,0,6],[7,8,9]])