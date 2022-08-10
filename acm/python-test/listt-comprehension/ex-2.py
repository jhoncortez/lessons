keys = [1, 'a ', 2, 'b ', 3, 'c ']
values = [100, 'apple', 200, 'berry', 300, 'terry']

box = {k: v for (k,v) in zip(keys, values)}
print(box)

zip_a, zip_b = zip(*zip(keys,values))
print(zip_a)
print(zip_b)