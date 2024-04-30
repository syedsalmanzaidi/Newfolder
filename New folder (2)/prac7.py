fruit = {'apple':'fruit1' , 'mango':'fruit2'} 
# print(fruit['apple'])
# print(fruit.keys())
# print(fruit.values())

# for x in fruit.keys():
#     print(f"the fruit name is {x} and list is {fruit[x]}")
print(fruit.items())
for key , value in fruit.items():
    print(f"the fruit name is {key} and value is {value}")
print(len(fruit))