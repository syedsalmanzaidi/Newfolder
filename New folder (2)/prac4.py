# e = lambda x,y:x if x>y else y
# print(e(3,4))

# Recursion python
def factorial(n):
    if(n==0 or n==1):
        return 1
    else:
        return n * factorial(n-1)
print(factorial(3))    
   
    