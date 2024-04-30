# List comprehension
# numbers = [1, 2, 3, 4, 5] 
# squared = [x * x for x in numbers] 
# print(squared)



# permutation
# from itertools import permutations
# perm = permutations([0,3,5] , 2)
# for i in list(perm):
#     if sum(i)!=3:
#         print(i , 'The sum is :' ,sum(i))






# finding a large and second large number in array
# n = int(input("Enter : "))
# arr = [2 , 7 , 4 ]
# arr.append(n)
# newArray = list(set(arr))
# s = sorted(newArray)
# print(s)
# large = max(s)
# print(large, 'largest')
# print(s[-2] , 'second large')
# marks = [['salman' , 45] , ['zaidi' ,  67] , ['Ahmad' ,  90] , ['syed' , 78]]
# for x in marks:
#     for y in x:
#         print(y , end=' ')
#     print()




# second lowest grade finder
# name = 'salman'
# score = 34
# grades = [
#     [name , score ]
# ]
# grades.append(['zaidi' , 40] )
# grades.append(['zaidi2' , 60])
# grades.append(['zaidi1' , 70])
# lowest = min(score for _, score in grades)
# grades = [(name, score) for name, score in grades if score > lowest]
# # Drop all EXCEPT the lowest of what remains.
# lowest = min(score for _, score in grades)
# grades = [(name, score) for name, score in grades if score == lowest]
# # Sort and print.
# grades.sort()
# for name, _ in grades:
#     print(name)



#function which return number of count repeated sub_string
# def myfunc(string , sub):
#     count = 0
#     index = string.find(sub)

#     while index != -1:
#         count += 1
#         index = string.find(sub, index + 1)
#     return count
#     # print(count)
# string = "TestCaseTestCase"
# sub='CaseT'
# count = myfunc(string , sub)
# print(count)


# string validater (any() function return if have any at least one element true)
# s = "123"
# print(any(i.isalnum() for i in s))
# print(any(i.isalpha() for i in s))
# print(any(i.isdigit() for i in s))
# print(any(i.islower() for i in s))
# print(any(i.isupper() for i in s))



   
# import textwrap 
# value = """abcdefghijklimnopqrstuvwxyz"""
# # Wrap this text. 
# wrapper = textwrap.TextWrapper(width=5) 
# word_list = wrapper.wrap(text=value) 

# # Print each line. 
# for element in word_list: 
#     print(element) 




    
    
#Importing the textwrap module
import textwrap

#Define a dummy text

# string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# max_width=int(input("Enter width : "))
# # Wrap the text.
# wrapper = textwrap.TextWrapper(max_width)
# word_list = wrapper.wrap(text = string)

# # Print output
# for element in word_list:
#         print(element)   




#capitalize
# s = 'hello world'
# def my(s):
#     p= s.split()
#     for i  in p :
#         cap=i.capitalize()  
#         print(cap , end=' ')
#         # return cap
# s= 'hello world'
# # print(my(s))
# my(s)