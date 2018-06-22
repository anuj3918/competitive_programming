# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param A : root node of tree
    # @return a list of integers
    def postorderTraversal(self, A):
        # Use a stack
        stack = []
        visited = {}
        postOrder = []
        if(A != None):
            stack.append(A)
        else:
            return postOrder
        
        node = A
        while(len(stack) > 0):
            # print node.val
            if(str(node) not in visited):
                visited[str(node)] = True
            
            if(node != None):
                if(node.left != None and str(node.left) not in visited):
                    stack.append(node.left)
                    node = node.left
                elif(node.right != None and str(node.right) not in visited):
                    stack.append(node.right)
                    node = node.right
                else:
                    postOrder.append(node.val)
                    stack.pop()
                    if(len(stack)>0):
                        node = stack[len(stack)-1]
                    else:
                        break

        return postOrder

