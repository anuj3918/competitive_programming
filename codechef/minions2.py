def running():
    tests_line = raw_input().strip().split()
    
    tests = int(tests_line[0])

    test = 1

    while(test <= tests):

        N, K = raw_input().strip().split(' ')
        N, K = [int(N), int(K)]

        num = raw_input().strip().split(' ')

        wolverines = 0

        for i in range(0, len(num)):
            element = int(num[i])
            element = element + K
            if (element % 7 == 0):
                wolverines = wolverines + 1
        
        print wolverines
        test += 1

running()