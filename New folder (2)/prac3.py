# x = 'bug'*3
# print(x)
# print('u' in x)
# print('a' not in x)
# for item in x:
#     print(item*2)
# x = [2 , 3, 4 ,5]
# print(sum(x[2:]))

# Print each line  , as read in
n = 10
infile = "input.txt"
with open(infile) as fl:
    for line in fl:
        print(line)
