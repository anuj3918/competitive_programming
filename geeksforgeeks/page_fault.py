# n = int(input())
# pages = input().strip().split(' ')
# mem = int(input())

n = 8
pages = ['3', '1', '0', '2', '5', '4', '1', '2']
mem = 10

hash = {}
cache = [] # this should be a doubly linked list ideally 

faults = 0
for p in pages[:]:
    print(p, cache, hash)
    if(p not in hash):
        if(mem > 0):
            cache.append(p)
            hash[p] = len(cache) - 1
            mem -= 1
        else:
            lru = cache[0]
            cache.pop(0)
            del hash[lru]
            cache.append(p)
            hash[p] = len(cache) - 1
        faults += 1
    else:
        i = hash[p]
        cache.pop(i)
        cache.append(p)
        hash[p] = len(cache) - 1
print(faults)