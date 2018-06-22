# This is actually an improper solution using arrays as stack

class MinStack:
    def __init__(self):
        self.stack = []
        self.length = 0
        
        self.minStack = []
        self.minLength = 0


    # @param x, an integer
    def push(self, x):
        self.stack.append(x)
        self.length += 1
        if(self.length == 0):
            self.minStack.append(x)
            self.minLength += 1
        else:
            if(self.minLength == 0 or self.minStack[self.minLength-1] >= x):
                self.minStack.append(x)
                self.minLength += 1
            

    # @return nothing
    def pop(self):
        if(self.length > 0):
            if(self.stack[self.length - 1] == self.minStack[self.minLength - 1]):
                self.minStack.pop()
                self.minLength -= 1
            self.stack.pop()
            self.length -= 1


    # @return an integer
    def top(self):
        if(self.length == 0):
            return -1
        else:
            return self.stack[self.length - 1]


    # @return an integer
    def getMin(self):
        if(self.length == 0):
            return -1
        else:
            return self.minStack[self.minLength - 1]

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
# stack.pop()
# stack.pop()
# stack.pop()
# stack.pop()
# stack.pop()
# stack.pop()
# print stack.getMin()
# print stack.top()

