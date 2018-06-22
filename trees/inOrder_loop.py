# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param A : root node of tree
    # @return a list of integers
    def preorderTraversal(self, A):
        # Use a stack
        stack = []
        preOrder = []
        if(A != None):
            stack.append(A)
        else:
            return preOrder
        
        while(len(stack) > 0):
            node = stack.pop()
            if(node != None):
                if(node.val):
                    preOrder.append(node.val)
                
                if(node.right != None):
                    stack.append(node.right)
                    
                if(node.left != None):
                    stack.append(node.left)
        
        return preOrder  
