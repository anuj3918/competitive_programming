import time
start = time.clock()

class Solution:
    # @param A : list of list of chars
    # @return nothing
    def __init__(self):
        self.iterators = {
            '1': { 'i': [0,2], 'j': [0,2] },
            '2': { 'i': [0,2], 'j': [3,5] },
            '3': { 'i': [0,2], 'j': [6,8] },
            '4': { 'i': [3,5], 'j': [0,2] },
            '5': { 'i': [3,5], 'j': [3,5] },
            '6': { 'i': [3,5], 'j': [6,8] },
            '7': { 'i': [6,8], 'j': [0,2] },
            '8': { 'i': [6,8], 'j': [3,5] },
            '9': { 'i': [6,8], 'j': [6,8] }
        }
    def solveSudoku(self, A):
        # countEleInSquares = []
        # for sq in range(1, 10):
        #     square = str(sq)
        #     sqr_i = self.iterators[square]['i']
        #     sqr_j = self.iterators[square]['j']

        #     count = 0
        #     for i in range(sqr_i[0], sqr_i[1]+1):
        #         for j in range(sqr_j[0], sqr_j[1]+1):
        #             if(A[i][j] != '.'):
        #                 count += 1

        #     countEleInSquares.append({'square': sq, 'count': count})

        # countEleInSquares = sorted(countEleInSquares, key=lambda x:x['count'], reverse=True)
        sequenceOfSquares = []
        # for m in range(0,9):
        #     sequenceOfSquares.append(countEleInSquares[m]['square'])
        
        # print sequenceOfSquares

        eleInSquare = { '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {} }
        eleInRow = { '0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {} }
        eleInCol = { '0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {} }

        countValidSquares = 0
        
        for sq in range(1, 10):
            square = str(sq)
            # square = str(sequence[sq-1])
            sqr_i = self.iterators[square]['i']
            sqr_j = self.iterators[square]['j']

            for i in range(sqr_i[0], sqr_i[1]+1):
                for j in range(sqr_j[0], sqr_j[1]+1):
                    if(A[i][j] != '.'):
                        ele = str(A[i][j])
                        if( ele not in eleInSquare[str(sq)] ):
                            eleInSquare[str(sq)][ele] = True
                        else:
                            # print "h1"
                            return False

                        if( ele not in eleInRow[str(i)] ):
                            eleInRow[str(i)][ele] = True
                        else:
                            # print "h2"                            
                            return False

                        if( ele not in eleInCol[str(j)] ):
                            eleInCol[str(j)][ele] = True
                        else:
                            # print "h3"                            
                            return False

                        countValidSquares += 1
                    # print eleInSquare
            if(countValidSquares == 81):
                return A

        self.solve(A, sequenceOfSquares)

    def solve(self, A, eleInSquare, eleInRow, eleInCol):

        eleInSquare = { '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {} }
        eleInRow = { '0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {} }
        eleInCol = { '0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {} }
        
        countValidSquares = 0
        # sequence = [7,4,8,6,2,5,3,9,1]
        for sq in range(1, 10):
            square = str(sq)
            # square = str(sequence[sq-1])
            sqr_i = self.iterators[square]['i']
            sqr_j = self.iterators[square]['j']

            for i in range(sqr_i[0], sqr_i[1]+1):
                for j in range(sqr_j[0], sqr_j[1]+1):
                    if(A[i][j] != '.'):
                        ele = str(A[i][j])
                        if( ele not in eleInSquare[str(sq)] ):
                            eleInSquare[str(sq)][ele] = True
                        else:
                            # print "h1"
                            return False

                        if( ele not in eleInRow[str(i)] ):
                            eleInRow[str(i)][ele] = True
                        else:
                            # print "h2"                            
                            return False

                        if( ele not in eleInCol[str(j)] ):
                            eleInCol[str(j)][ele] = True
                        else:
                            # print "h3"                            
                            return False

                        countValidSquares += 1
                    # print eleInSquare
            if(countValidSquares == 81):
                return A
        
        # print eleInSquare
        # return

        # sequence = [7,4,8,6,2,5,3,9,1]
        for sq in range(1, 10):
            square = str(sq)
            # square = str(sequence[sq-1])
            sqr_i = self.iterators[square]['i']
            sqr_j = self.iterators[square]['j']

            for i in range(sqr_i[0], sqr_i[1]+1):
                for j in range(sqr_j[0], sqr_j[1]+1):
                    if(A[i][j] == '.'):
                        # print "empty index ", (i,j)
                        valuePossible = False
                        for possible in range(1, 10):
                            if(str(possible) not in eleInSquare[str(sq)] and str(possible) not in eleInRow[str(i)] and str(possible) not in eleInCol[str(j)]):
                                temp = A[i][j]
                                possibleStr = str(possible)
                                # print "fill ", possible, " in ", (i,j)
                                A[i][j] = possible
                                eleInSquare[square][possibleStr] = True
                                eleInRow[str(i)][possibleStr] = True
                                eleInCol[str(j)][possibleStr] = True
                                answer = self.solve(A, eleInSquare, eleInRow, eleInCol)
                                if(answer == False):
                                    # print "chutiyapa\n"
                                    A[i][j] = temp
                                    eleInSquare[square].pop(possibleStr, None)
                                    eleInRow[str(i)].pop(possibleStr, None)
                                    eleInCol[str(j)].pop(possibleStr, None)
                                    # return False
                                else:
                                   return answer
                        if(valuePossible == False):
                            return False


ob = Solution()
# inp = [
#     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
#     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
#     [".", "9", "8", ".", ".", ".", ".", "6", "."],
#     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
#     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
#     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
#     [".", "6", ".", ".", ".", ".", "2", "8", "."],
#     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
#     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
# ]

# inp = [
#     [".",".",".","2",".",".",".","6","3"],
#     ["3",".",".",".",".","5","4",".","1"],
#     [".",".","1",".",".","3","9","8","."],
#     [".",".",".",".",".",".",".","9","."],
#     [".",".",".","5","3","8",".",".","."],
#     [".","3",".",".",".",".",".",".","."],
#     [".","2","6","3",".",".","5",".","."],
#     ["5",".","3","7",".",".",".",".","8"],
#     ["4","7",".",".",".","1",".",".","."]]

inp = [
    [".",".",".",".",".","7",".",".","9"],
    [".","4",".",".","8","1","2",".","."],
    [".",".",".","9",".",".",".","1","."],
    [".",".","5","3",".",".",".","7","2"],
    ["2","9","3",".",".",".",".","5","."],
    [".",".",".",".",".","5","3",".","."],
    ["8",".",".",".","2","3",".",".","."],
    ["7",".",".",".","5",".",".","4","."],
    ["5","3","1",".","7",".",".",".","."]
]
ans = ob.solveSudoku(inp)
print ans

print time.clock() - start