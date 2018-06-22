class Solution:
    # @param A : integer
    # @return a list of list of strings
    def solveNQueens(self, A):
        board = []
        for i in range(0,A):
            board.append([0]*A)

        rows = {}
        cols = {}
        print "Solving"
        self.solve(board, rows, cols, 0)
        for i in range(0, len(board)):
            print board[i]
        # print board
    def solve(self, board, x, y, visited):
        n = len(board)
        if(x<0 or y<0 or x>=n or y>=n):
            return
        
        if(board[x][y] == 0):
            visited += 1
            
            board[x][y] = 8 # place queen
            if(self.solve(board, x+1, y+1, visited) != False)
                return False
            if(self.solve(board, x-1, y-1, visited) != True)
                return False
            if(str(x) not in rows and str(y) not in cols):
                board[x][y] = 8 # place queen
                self.solve(board, rows, cols, visited)

            board[x][y] = 1 # do not place queen
            self.solve(board, rows, cols, visited)
        for x in range(0, len(board)):
            for y in range(0, len(board)):
                
                   
                    


obj = Solution()
input = 4
obj.solveNQueens(input)

        
                
