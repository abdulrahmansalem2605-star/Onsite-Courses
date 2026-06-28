
Name = input("Please enter your name: ")

print("The length of the name is: " + str(len(Name)))
print("The word first uppercase is: " + Name[0])
print("The word last letter is: " + Name[len(Name)-1]) # or Name[-1]
print("Is first character in the word is uppercase? " + str(Name[0].isupper()))
