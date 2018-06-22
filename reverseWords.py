def reverseWords(A):
    S = A.strip().split()
    
    str = ""
    for k in range(len(S) - 1, -1, -1):
        str += S[k] + " "
    
    return str.strip()

reverseWords("the sky is blue")