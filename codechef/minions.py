import sys

def main():
    # To store no of test cases here (2).
    t=int(sys.stdin.readline())
    print t
    # To store input here (0 1 1)  and (0 1 2).

    while t :
        
        #To store the size of array here (3).
        line = sys.stdin.readline().rstrip('\n')
        line1 = line.split(' ')
        
        N = int(line1[0])
        K = int(line1[1])

        #Here i have used sys.stdin.readline() to take input 0 1 1 than split to get a= ['0','1','1'].
        a=(sys.stdin.readline().split(' '))
        
        l = []
        wolverines = 0

        #Now converting  a= ['0','1','1'] to  l = [0,1,1]
        for i in range(0, len(a)):
            element = int(a[i])
            element = element + K
            if (element % 7 == 0):
                wolverines = wolverines + 1
        
        #Do your job with the list l
        
        print wolverines

        t=t-1 

main()