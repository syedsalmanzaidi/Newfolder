
#Print each subsequence on a new line.
# string = "AABCAAADA"
# k = 3
# from collections import OrderedDict
# for i in range(0, len(string), k):
#     substring = string[i:i+k]
#     # print(substring)
#     print("".join(OrderedDict.fromkeys(substring)))

import calendar

print(calendar.month(2021,4))
yy=2021
mm=4
dd=2
week = calendar.weekday(mm,dd,yy)
weekdays=["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
print(weekdays[week])