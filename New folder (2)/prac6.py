#LISt comprehension
# ls = [i for i in range(100) if i%3==0]
# print(ls)
# ls = [i for i in range(100) if i%3==0]
# print(ls)


# num1 = input('Enter num1 :')
# num2 = input("Enter num2 :")
# try:
#     print("The sum  is " , int(num1) + int(num2))
# except Exception as e:
#     print(e)
#     print("ENter only numbers integers")


# lamda function
# double = lambda x:x*2
# print(double(3))

#Enumerate function , deep copy and shallow copy
mark = [23, 43 , 12 , 98]
for index,marks in enumerate(mark):
    print(marks)
    if (index==2):
        print("salman zaidi")
