# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @param A : head node of linked list
    # @return an integer
    def listCycle(self, A):
        slow_ptr = A
        fast_ptr = A
        while(fast_ptr.next != slow_ptr):
            slow_ptr = slow_ptr.next
            fast_ptr = fast_ptr.next
            if(fast_ptr == None or slow_ptr == None):
                return None
            fast_ptr = fast_ptr.next
            if(fast_ptr == None or slow_ptr == None):
                return None
        
        loopLength = 1
        while(slow_ptr.next != fast_ptr.next):
            slow_ptr = slow_ptr.next
            loopLength += 1

        print loopLength

        ptr1 = A
        ptr2 = A
        # shift ptr2 by steps = loopLength - 1
        forward = loopLength - 1
        while(forward > 0):
            ptr2 = ptr2.next
            forward -= 1

        # Now simply move one step at a time  
        while(ptr2.next != ptr1):
            ptr1 = ptr1.next
            ptr2 = ptr2.next

        return ptr1


linkedList = ListNode(1)
ptr = linkedList

newNode = ListNode(2)
ptr.next = newNode
ptr = newNode

newNode = ListNode(3)
ptr.next = newNode
t = newNode
ptr = newNode

newNode = ListNode(4)
ptr.next = newNode
ptr = newNode

newNode = ListNode(5)
ptr.next = newNode
ptr = newNode

newNode = ListNode(6)
ptr.next = newNode
ptr = newNode

newNode = ListNode(7)
ptr.next = newNode
ptr = newNode

ptr.next = t

obj = Solution()
answer = obj.listCycle(linkedList)
if(answer != None):
    print answer.val
else:
    print answer