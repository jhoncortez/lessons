student_lambda = lambda **kwargs:{key: value for key, value in kwargs.items()}
print(student_lambda(id = 1, name="Alice"))
