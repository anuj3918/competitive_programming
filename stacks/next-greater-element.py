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
    nextGreaterElements = [-1]*len(array)

    for i in range(len(array)-1, -1, -1):
        element = array[i]
        if(s.isEmpty()):
            s.push(element)
            nextGreaterElements[i] = -1
        else:
            while(not s.isEmpty() and s.peek() <= element):
                s.pop()
            if(s.isEmpty()):
                nextGreaterElements[i] = -1
            else:
                topElement = s.peek()
                nextGreaterElements[i] = topElement

            s.push(element)
        # print s.stack
    print nextGreaterElements

nextGreater([4,1,5,2,25])