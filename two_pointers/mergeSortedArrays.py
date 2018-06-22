class Solution:
    # @param A : list of integers
    # @param B : list of integers
    def merge(self, A, B):
        C = []
        if(A[len(A)-1] <= B[0]):
            C = A + B
            s = ""
            for i in range(0, len(C)):
                s += str(C[i]) + " "
            print s
            return
        elif(A[0] >= B[len(A)-1]):
            C = B + A
            s = ""
            for i in range(0, len(C)):
                s += str(C[i]) + " "
            print s
            return
        
            
        i = 0
        j = 0
        while (i < len(A) and j < len(B)):
            if (A[i] < B[j]):
                C.append(A[i])
                i += 1
            else:
                C.append(B[j])                
                j += 1
        if (i < len(A)):
            C = C + A[i:]
    
        if (j < len(B)):
            C = C + B[j:]
        s = ""
        for i in range(0, len(C)):
            s += str(C[i]) + " "
        print s

ob = Solution()
ob.merge([-4, 3], [-2, -2])        