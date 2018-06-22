#   refer geeksforgeeks for explanation
class Stack:
    def __init__(self):
        self.stack = []

    def isEmpty(self):
        return True if(self.stack == []) else False

    def pop(self):
        if(not self.isEmpty()):
            self.stack.pop()

    def push(self, item):
        self.stack.append(item)

    def peek(self):
        return self.stack[-1]

def nextGreater(array):
    s = Stack()
    

nextGreater([4,1,5,2,25])