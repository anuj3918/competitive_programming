# This solution says memory exceeded on interviewbit but this soln does actual implementation of stack

class Node:
    def __init__(self, x):
        self.val = x
        self.down = None
    
    
class MinStack:
    def __init__(self):
        self.stack = None
        self.length = 0
        
        self.minStack = None
        self.minLength = 0
 
 
    # @param x, an integer
    def push(self, x):
        node = Node(x)
        if(self.stack == None):
            self.stack = node
            self.length += 1
            
            minNode = Node(x)
            self.minStack = minNode
            self.minLength += 1
        else:
            node.down = self.stack
            self.stack = node
            self.length += 1
            if(self.minLength == 0 or self.minStack.val >= x):
                minNode = Node(x)
                minNode.down = self.minStack
                self.minStack = minNode
                self.minLength += 1
            
 
    # @return nothing
    def pop(self):
        if(self.length > 0):
            if(self.stack.val == self.minStack.val):
                next = self.stack.down
                if(next != None):
                    self.minStack = self.minStack.down
                    self.minLength -= 1
                else:
                    self.minStack = None
                    self.minLength = 0
            self.stack = self.stack.down
            self.length -= 1
 
 
    # @return an integer
    def top(self):
        if(self.length == 0):
            return -1
        else:
            return self.stack.val
 
 
    # @return an integer
    def getMin(self):
        if(self.length == 0):
            return -1
        else:
            return self.minStack.val

stack = MinStack()
stack.push(10)
stack.push(9)
print stack.getMin()

stack.push(8)
print stack.getMin()

stack.pop()
print stack.getMin()
stack.push(10)
stack.push(10)

stack.push(9)


stack.pop()
print stack.getMin()

stack.pop()
print stack.getMin()
stack.push(4)
stack.push(2)
print stack.top()

print stack.getMin()            