def nextPermutation(A):
	swapped = False
	smallest = len(A)-1

	for i in range(len(A)-1, 0 ,-1):

		if(swapped == True):
			break

		if(A[i] < smallest):
			smallest = i

		if(A[i] <= A[i-1]):
			continue

		temp = A[smallest]
		A[smallest] = A[i-1]
		A[i-1] = temp

		A = A[0:i] + list(reversed(A[i:])) 
		swapped = True

	if(swapped == True):
		return A
	else:
		return sorted(A)

# print nextPermutation([ 3, 2, 1 ])
print nextPermutation([ 300, 259, 359, 639, 268, 271, 565, 113, 322, 293, 994, 357, 178, 986, 101, 70, 554, 119, 658, 373, 859, 985, 471, 846, 511, 521, 673, 20, 299, 476 ])

# 300 259 359 639 268 271 565 113 322 293 994 357 178 986 101 70 554 119 658 373 859 985 471 846 511 521 673 20 476 299