'''
Minimum possible value of the element to get desired Output
INPUT: 
4       #Number of Trial Cases
4 15    #first Number is number of element in array and second num is needed num     after or operation on all elements.
3 5 6 2 #all elements of array

3 8     #first Number is number of element in array and second num is needed num     after or operation on all elements.
1 2 1   #all elements of array

1 1     #first Number is number of element in array and second num is needed num     after or operation on all elements.
0       #all elements of array

5 7     #first Number is number of element in array and second num is needed num     after or operation on all elements.

1 2 4 2 #all elements of array

OUTPUT:
8
-1
1
0
#Algorithm
# Step 1 - Intialize a loop for running test cases.
# Step 1.1 - Take input as string and split it into list and store it into sizeofArray and possibleOut
# Step 1.2 - Take input of all elements into list b and j=0.
# Step 1.3 - Perform OR operation into all elements using loop and store the value into j.
# Step 1.4 - store the j's value into oRperformed and perform XOR operation j and possibleOut store into j
# Step 1.5 - check if j's value equal to possibleOut - oRperformed.
# Step 1.5.1 - if yes print value of j or print -1.
# Step 2 - END

'''
for i in range(int(input())):
    sizeofArray=input().split()
    possibleOut=int(sizeofArray[1])
    sizeofArray=int(sizeofArray[0])
    b=input().split()
    j=0
    for i in range(sizeofArray):
        j=j|(int(b[i]))
    oRperformed=j
    j=j^possibleOut;
    if j==(possibleOut-oRperformed):
        print(j)
    else:
        print(-1)
    
    
    
    