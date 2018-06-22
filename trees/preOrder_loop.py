# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param A : root node of tree
    # @return a list of integers
    def inorderTraversal(self, A):
        # Use a stack
        stack = []
        inOrder = []
        if(A == None):
            return inOrder
            
        node = A
        
        while(len(stack) > 0 or node):
            if(node != None):
                stack.append(node)
                node = node.left
            else:
                node = stack.pop()
                inOrder.append(node.val)
                node = node.right
        
        return inOrder 
