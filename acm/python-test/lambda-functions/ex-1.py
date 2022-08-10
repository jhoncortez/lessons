import functools

l = [1,2,3,4]

print(functools.reduce(lambda x,y: x+y, l))
