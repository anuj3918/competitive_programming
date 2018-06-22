class Solution:
    # @param A : integer
    # @return an integer
    def sqrt(self, A):
        if(A == 0):
            return 0
        if(A < 4):
            return 1
        l = 1
        r = A
        i = (l+r) / 2
        exp = (i*i) > A and ((i-1)*(i-1) < A)
        while (exp == False):
            if(i*i > A):
                r = i
            else:
                l = i
            i = (l+r) / 2
            exp = (i*i) > A and ((i-1)*(i-1) <= A)

        return i-1

        
ob = Solution()
print ob.sqrt(45343452)
