string= "hi, my insta pass is hahahaha123, fb pass is 89jan8439, and email pass is bob456bob "

words= []
ind1=0
ind2=0
res=[]
passes=[]
percentages=[]

for index, letter in enumerate(string.strip()):

    if letter ==' ':
        ind2 = index
        words.append(string[ind1:ind2])

        ind1 = ind2 + 1

words.append(string[ind2+1:])

##print(words)

points=0

for word in words:

    for char in word:
        points+=1

        if char.isdigit():
            points+=4

        elif char.isupper():
            points+=3

    result= points/len(word)
    if result>1:

        passes.append(word.replace(',',''))
        percentages.append(int(result/4*100))
    res.append(result)
    points=0
##print(res)

print('\n-------Passwords Found:---------\n')


for i in range(0,len(passes)):
    print(f'>>  {passes[i]}     {percentages[i]} %')

