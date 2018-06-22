class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @return an integer
    def maxPoints(self, A, B):
        if(len(A) < 2):
            return len(A)
        lines = {}
        pointsCount = {}
        for i in range(0, len(A)):
            p = str((A[i], B[i]))
            if(p not in pointsCount):
                pointsCount[p] = 1
            else:
                pointsCount[p] += 1
        if(len(pointsCount) == 1):
            return pointsCount[p]

        uniqueLines = []
        maxPoints = 0
        for i in range(0, len(A) - 1):
            p1 = (A[i], B[i])
            for j in range(i+1, len(A)):
                p2 = (A[j], B[j])
                # print "\n", p1, p2
                if(p1 == p2):
                    continue
                elif(p2[0] - p1[0] != 0):
                    m = float( p2[1] - p1[1] ) / float( p2[0] - p1[0] )
                    c = p2[1] - m * p2[0]                
                else:
                    m = 'inf'
                    c = p1[0]
                line = str((m, c))
                # print line
                if(line in lines):
                    if(not str(p1) in lines[line]):
                        lines[line][str(p1)] = pointsCount[str(p1)]
                    if(not str(p2) in lines[line]):
                        lines[line][str(p2)] = pointsCount[str(p2)]
                else:
                    uniqueLines.append(line)
                    lines[line] = {}
                    lines[line][str(p1)] = pointsCount[str(p1)]
                    lines[line][str(p2)] = pointsCount[str(p2)]
        # print lines
        maxPoints = 0
        for i in range(0, len(uniqueLines)):
            l = uniqueLines[i]
            linePoints = lines[l]
            pointsOnLine = 0
            for point in linePoints:
                pointsOnLine += pointsCount[point]
            if(pointsOnLine > maxPoints):
                maxPoints = pointsOnLine
        return maxPoints

ob = Solution()
answer = ob.maxPoints([1,2,3, 3], [1,2,3, 0 ])
# answer = ob.maxPoints([1,2,2], [1,2,2 ])
# answer = ob.maxPoints([1,2,3], [1,2,3 ])
# answer = ob.maxPoints([1,1,1], [1,1,1 ])

print answer