class Interval:
    def __init__(self, s=0, e=0):
        self.start = s
        self.end = e

class Solution:
    # @param intervals, a list of Intervals
    # @param new_interval, a Interval
    # @return a list of Interval
    def mergeIntervals(self, intervals):
        A = intervals
        A = sorted(A, key=lambda x: x.start)
        covered_range = 0
        final = []
        
        for i in range(0, len(A)):
            start = A[i].start
            end = A[i].end
        
            if(end > covered_range):
                # partial left overlap with merger
                if(start > covered_range):
                    final.append(Interval(start, end))
        
                # full overlap with merger
                elif(start < covered_range):
                    final[len(final)-1].end = end
        
                covered_range = end
            
        return final

l = [Interval(1,3), Interval(2, 8), Interval(11, 15)]
obj = Solution()
x = obj.mergeIntervals(l)

for i in range(0, len(x)):
    print (x[i].start, x[i].end)