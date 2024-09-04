# students = {
#     "Name": "John",
#     "Age": 20,
#     "Subject": "Quantitative Methods"
# }

# students["Subject"] = "Integrative Programming Technologies"

# print(students["Subject"])
# print(students)


# names = {
#     "Juan": 20,
#     "Maria": 25,
#     "Pedro": 30,
#     "Juan": 20,
#     "Maria": 25,
#     "Pedro": 30,
# }

# print(names)


# from collections import Counter

# names = [
#     "Juan",
#     "Maria",
#     "Pedro",
#     "Juan",
#     "Maria",
# ]

# counts = Counter(names)

# print(counts)



# from collections import Counter

# names = [
#     "Juan",
#     "Maria",
#     "Pedro",
#     "Juan",
#     "Maria",
# ]

# iterator = iter(names)

# def next_record():
#     print(next(iterator))

# while True:
#     opt = input("Type N for next value: ")
#     if opt.upper() == "N":
#         next_record()
#     else:
#         break

# import pandas as pd

# value = [1, 2, 3, 4, 5]
# label = ["a", "b", "c", "d"]

# s = pd.Series(value, index=label)

# print(s)




# import pandas as pd

# data = {'Name': ['Juan', 'Maria', 'Pedro', 'Juan', 'Maria'], 
#         'Age': [20, 25, 30, 20, 25], 
#         'Subject': ['Quantitative Methods', 'Integrative Programming Technologies', 'Quantitative Methods', 'Integrative Programming Technologies', 'Quantitative Methods']}

# df = pd.DataFrame(data)

# df_filered = df[df["Age"] > 25]
# df_sorted = df.sort_values(by="Name")
# df_grouped = df.groupby("Subject").mean()


import pandas as pd

data = {'Name': ['Juan', 'Maria', 'Pedro'],
        'Age': [20, 0, 0], 
        'Subject': ['Quantitative Methods', 'Integrative Programming Technologies', 'Quantitative Methods', 'Integrative Programming Technologies', 'Quantitative Methods']}

df = pd.DataFrame(data)

df["Age"] = df["Age"].replace({0:20})



