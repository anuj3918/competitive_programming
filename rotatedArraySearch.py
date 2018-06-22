# def search(A, d):
#     # print A, A[len(A)/2]
#     found = False
#     length = len(A)
#     if(length == 1):
#         if(A[0] == d):
#             found = True
#             return found
#         else:
#             found = False
#             return found

#     mid_index = length / 2
#     mid = A[mid_index]
#     if(mid == d):
#         found = True
#         return found
#     left = A[0]
#     right = A[length - 1]

#     if(mid <= right and d >=mid and d<=right):
#         B = A[mid_index:]
#         found = search(B, d)
#     elif(left <= mid and d >=left and d<=mid):
#         B = A[0: mid_index]
#         found = search(B, d)
#     elif(mid >= right):
#         B = A[mid_index:]
#         found = search(B, d)
#     elif(left >= mid):
#         B = A[0: mid_index]
#         found = search(B, d)

#     return found

# X = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
# ans = search(X, 7)
# print ans


class Solution:
    # @param A : tuple of integers
    # @param B : integer
    # @return an integer
    def search(self, A, B):
        return self.finding(A, B, 0, len(A)-1)
        
    def finding(self, A, B, l, r):
        # print A[l: r+1]
        found = False
        index = -1
        length = r-l+1
        if(length == 1):
            if(A[l] == B):
                found = True
                index = l
                # print "index"
                # print index
                return index
            else:
                found = False
                return index
    
        mid_index = (l+r) / 2
        mid = A[mid_index]
        if(mid == B):
            found = True
            index = mid_index
            return index
        
        left = A[l]
        right = A[r]
    
        if(mid <= right and B >=mid and B<=right):
            index = self.finding(A, B, mid_index+1, r)
        elif(left <= mid and B >=left and B<=mid):
            index = self.finding(A, B, 0, mid_index)
        elif(mid >= right):
            index = self.finding(A, B, mid_index+1, r)
        elif(left >= mid):
            index = self.finding(A, B, 0, mid_index)
    
        return index

ob = Solution()
X = [ 19, 20, 21, 22, 28, 29, 32, 36, 39, 40, 41, 42, 43, 45, 48, 49, 51, 54, 55, 56, 58, 60, 61, 62, 65, 67, 69, 71, 72, 74, 75, 78, 81, 84, 85, 87, 89, 92, 94, 95, 96, 97, 98, 99, 100, 105, 107, 108, 109, 110, 112, 113, 115, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 130, 131, 133, 134, 135, 136, 137, 138, 139, 141, 142, 144, 146, 147, 148, 149, 150, 153, 155, 157, 159, 161, 163, 164, 169, 170, 175, 176, 179, 180, 185, 187, 188, 189, 192, 196, 199, 201, 203, 205, 3, 7, 9, 10, 12, 13, 17 ]
print ob.search(X, 6)