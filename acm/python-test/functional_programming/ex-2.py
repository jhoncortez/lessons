l = [1,-2,-3,4,5]

def f1(x):
    return x < 2

m1 = filter(f1, l)

print(list(m1))

filter(lambda x:x<2,l)