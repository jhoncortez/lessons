l = [1,-2,-3,4,5]

def f1(x):
    return x < -1

m1 = map(f1, l)

print(list(m1))
