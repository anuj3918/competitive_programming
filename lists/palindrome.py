# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @param A : head node of linked list
    # @return an integer
    def lPalin(self, A):
        tempList = A
        numNodes = 0
        
        while(tempList != None):
            numNodes += 1
            tempList = tempList.next
        goTill = 0
        if(numNodes % 2 == 0):
            goTill = (numNodes / 2) - 1
        else:
            goTill = (numNodes - 1)/2 - 1
        
        
        tempList = A
        firstHalf = []
        i = 0
        while(i <= goTill):
            firstHalf.append(tempList.val)
            tempList = tempList.next
            i = i+1
        
        if(numNodes % 2 == 1):
            tempList = tempList.next
            
        isPalin = True
        while(tempList != None):
            val = tempList.val
            print val, firstHalf
            if(val != firstHalf[len(firstHalf)-1]):
                isPalin = False
                return 0
            firstHalf.pop()
            tempList = tempList.next
            
        return 1

inp = [1,2,7,4,7,2,2]
linkedList = ListNode(None)
ptr = linkedList

for i in range(0, len(inp)):
    if(i == 0):
        linkedList.val = inp[i]
    else:
        newNode = ListNode(inp[i])
        ptr.next = newNode
        ptr = newNode

# t = linkedList
# while(t.next != None):
#     print t.val
#     t = t.next 
# print t.val

obj = Solution()
answer = obj.lPalin(linkedList)
print answer