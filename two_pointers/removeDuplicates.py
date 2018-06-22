class Solution:
    # @param A : list of integers
    # @return an integer
    def removeDuplicates(self, A):
        dict = {}
        ptr1 = 0
        counter = 0
        inSingletons = True
        inDuplicates = False

        while(ptr1 + counter < len(A)):
            key = str(A[ptr1 + counter])
            if(key in dict):
                if(inSingletons == True):
                    inDuplicates = True
                    inSingletons = False
                    ptr1 = ptr1 + counter 
                    counter = 0                 
                else:
                    counter += 1
            else:  
                if(inDuplicates == True):
                    inDuplicates = False
                    inSingletons = True
                    temp = A[ptr1 + counter: ]
                    A = A[0: ptr1] + A[ptr1 + counter: ]
                    counter = 0
                else:
                    dict[key] = 1
                    counter += 1

        if(inSingletons == True):
            A = A[0: ptr1 + counter] + A[ptr1 + counter:]
        if(inDuplicates == True):
            A = A[0: ptr1] + A[ptr1 + counter: ]
        
        return A

# inp = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ]
# inp = [0,0,1,3,4,1,2,2]
# inp = [4]
# inp = [1,2,3,2,2,2,1,1,3,4,4,4]
inp = [ 0, 0, 0, 1, 1, 2, 2, 3 ]
ob = Solution()
printer = ob.removeDuplicates(inp)
print printer
print inp