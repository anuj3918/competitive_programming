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

def stockSpan(array):
    s = Stack()
    spans = []
    for i in range(0, len(array)):
        element = array[i]
        if(s.isEmpty()):
            s.push({'val': element, 'index': i})
            spans.append(1)
        else:
            while(not s.isEmpty() and s.peek()['val'] <= element):
                s.pop()
            if(s.isEmpty()):
                spans.append(i+1)
            else:
                topElement = s.peek()
                spans.append(i - topElement['index'])

            s.push({'val': element, 'index': i})
        # print s.stack
    print spans

stockSpan([100, 80, 60, 70, 60, 75, 110])
