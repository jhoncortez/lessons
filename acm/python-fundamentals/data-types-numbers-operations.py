'''
order of operations: (PEDMAS)
() (parentheses)
** (Exponent)
~ + - (unary operations)
* / % // (division, Multiplication)
+ - (Addition, Substraction)
>> << (shift bitwise)
& (And bitwise)
^ | (Not, OR Bitwise)
<= < > >= (comparision)
<> == != (equality)
= %= /= //= -= += *= **= (assignment)

'''
#float tos tring
amount = 163400
time = 57.5

rate = amount / time
print('Rate: ' + str(rate))

#exponent
bit = 16
size = 2 ** 16
print('Size: ' + str(size))

# division and modulus - reminder
print('11 //3: ' + str(11 // 3)) #integer division
print('11 /3: ' + str(11 / 3)) #float division
print('11 % 3: ' + str(11 % 3)) #modulus reminder

#PEDMAS?
print (10 - 2 ** 2 / 2 + 5)