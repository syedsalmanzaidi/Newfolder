# n = 'word2'
# for word in range(11):{
    
# print(word+100)}


# x = [1 ,2 ,3 ,2 ,2 ,2 ,3 ,4 , 5, 6, 6 ,7 , 7 , 555 ,34 ,4]
# x = list(set(x))
# print(x)
def is_leap(year):
   
   if(year % 400)==0:
    leap=True
    return leap
   else:
     leap=False
     return leap


year = int(input("Enter :"))
print(is_leap(year))