def findPerm(A, B):
	conditions = A
	n = B
	gt = 0
	conditions = list(conditions)
	
	for i in range(0, len(conditions)):
		if(conditions[i] == "D"):
			gt = gt + 1
	lt = len(conditions) - gt
	l = list()
	for i in range(1, n+1):
		l.append(i)
	if(lt < gt):
		l = list(reversed(l));

	# print l
	# print conditions	
	for j in range(0, len(conditions)):
		swapped = False;
		for i in range(0, len(l)-1):
			if(conditions[i] == "D"):
				if((l[i] > l[i+1]) == False):
					temp = l[i]
					l[i] = l[i+1]
					l[i+1] = temp
					swapped = True
			else:
				if((l[i] < l[i+1]) == False):
					temp = l[i]
					l[i] = l[i+1]
					l[i+1] = temp
					swapped = True
		if(swapped == False):
			break
	print l		
	return l
    		

findPerm("ID", 3)


