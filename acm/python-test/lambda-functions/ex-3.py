odd = lambda x:bool(x%2)
numbers=[n for n in range(10)]
print(numbers)
n=list()
for i in numbers:
    if odd(i):
        continue
    else:
        break