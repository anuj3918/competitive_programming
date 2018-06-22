def pow(x, n, d):
    if(n == 1):
        return x % d

    product = 1
    halfN = n/2
    product = pow(x, halfN, d)
    if(n % 2 == 0):
        product = product * product
    else:
        product = product * product * x

    return product % d