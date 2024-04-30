# s = "BANANANAAAS"
# # s = str(input("Enter string : "))
# # Get all substrings of string
# res = []
# for i in range(len(s)):
#     for j in range(i+1, len(s)+1):
#         res.append(s[i:j])
# res = list(set(res))

# # Stuart  substring start from consonants
# total_counts1 = 0
# for Stuart  in res:
#     if Stuart[0] not in "AEIOU":
#         count = s.count(Stuart ) 
#         total_counts1 += count
# print(" Stuart : ",total_counts1)

# #Kevin  substring start from vovels
# total_counts2 = 0
# for Kevin  in res:
#     if Kevin[0] in "AEIOU":
#         count = s.count(Kevin)  
#         total_counts2 += count
# total_counts2=total_counts2+1
# print("Kevin: ",total_counts2)

# #print the winner
# if(total_counts1>total_counts2):
#     print("Stuart  winner" , total_counts1)
# elif(total_counts2>total_counts1):
#     print("Kevin  winner" , total_counts2)
# else:
#     print("Draw")




string = "BANANA"
vowel = 0
consonant = 0
 
for i in range(len(string)):
    if string[i] in 'AEIOU':
       vowel+=(len(string)-i)
    else:
       consonant+=(len(string)-i)
print(vowel)
print(consonant)
if vowel < consonant:
    print('Stuart ' + str(consonant))
elif vowel > consonant:
    print('Kevin ' + str(vowel))
else:
    print('Draw')