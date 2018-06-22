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
    def solve(self, board, rows, cols, visited):

        if(visited == len(board) * len(board)):
            print "\n"
            for i in range(0, len(board)):
                print board[i]
        
        for x in range(0, len(board)):
            for y in range(0, len(board)):
                if(board[x][y] == 0):
                    visited += 1

                    if(str(x) not in rows and str(y) not in cols):
                        board[x][y] = 8 # place queen
                        rows[str(x)] = True
                        cols[str(y)] = True
                        self.solve(board, rows, cols, visited)

                    board[x][y] = 1 # do not place queen
                    self.solve(board, rows, cols, visited)
                   
    def checkDiagonals(self, board, p, q):
        n = len(board)
        if(p > 0)


obj = Solution()
input = 4
obj.solveNQueens(input)

        
                
