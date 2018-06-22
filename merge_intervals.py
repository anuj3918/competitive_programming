def merge(A,B):
    merge_start = B[0]
    merge_end = B[0]
    covered_range = 0
    final = []

    for i in range(0, len(A)):
        start = A[i][0]
        end = A[i][1]

        if(end > covered_range):
            # partial left overlap with merger
            if(start < merge_start and end < merge_end and end > merge_start):
                start = start
                end = merge_end

            # full overlap with merger
            elif(start < merge_start and end > merge_end):
                start = start
                end = end

            # partial right overlap with merger
            elif(start > merge_start and end > merge_end and start < merge_end):
                start = merge_start
                end = end

            # full overlap of interval in merger
            elif(start > merge_start and end < merge_end):
                start = merge_start
                end = merge_end

            # converge [(1,5), (5,9)] to [(1,9)]
            if(start == covered_range):
                last_start = final[len(final)-1][0]
                start = last_start
                final[len(final)-1] = (start, end)
            else:
                final.append((start, end))

            covered_range = end
            print final
        
    return final

print merge([[1,3],[4,9],[8,11]], [4,9])
