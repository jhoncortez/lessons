l = [1,2,3,4,5]

def f1(x):
    return x < 0

m1 = filter(f1, l)

print(list(m1))

print(filter(lambda x:x<0,l))