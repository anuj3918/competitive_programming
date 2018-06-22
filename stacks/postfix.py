#   refer karumanchi for explanation
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

    def isOperand(self, c):
        return c.isalpha()
        
    def convertToPostfix(self, exp):
        exp = exp.split(" ")
        precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '^': 3
        }

        postfix = []

        for c in exp:
            if(self.isOperand(c)):
                postfix.append(c)
            elif(c == '('):
                self.push(c)
            elif(c == ')'):
                while(self.peek() != '('):
                    postfix.append(self.peek())
                    self.stack.pop()
                if(self.peek() != '('):
                    print 'Invalid expression'
                else:
                    self.pop()
            else:
                if(not self.isEmpty()):
                    topOperator = self.peek()
                    while(topOperator != '(' and precedence[topOperator] >= precedence[c] and not self.isEmpty()):
                        topOperator = self.peek()
                        postfix.append(topOperator)
                        self.pop()
                self.push(c)
            print "Stack at ",c +" : "," ".join(self.stack)
        
        while(not self.isEmpty()):
            postfix.append(self.peek())
            self.pop()

        print " ".join(postfix)

s = Stack()
s.convertToPostfix('( A * B ) - ( C + D ) + E')