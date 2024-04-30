names = list()
infile = "names.txt"
with open(infile) as file:
    for line in file:
        names.append(line)
        print(line)
names.sort()
print(names , "after sort")
Name = "Name.txt"
with open(Name , 'w') as fout:
    for Name in names:
        fout.write(Name + '\n')
        print(Name , 'NAme')