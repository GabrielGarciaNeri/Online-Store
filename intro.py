print("Hello world!")

# this is a comment

#VARIABLES

name = "Gabriel"
last_name = "Garcia"
cohort = 55
is_active = True
is_inactive = False
print(name, last_name, "#", cohort)

# f-string
print(f"{name} {last_name} # {cohort}")

print(1+1, name.upper(), last_name, f"#{cohort}")

#type conversion
num = 9.75
print(type(num))
print(int(num)) #convert a float to an integer

age = 25
print(str(age)) # convert an integer to a string

price = "10.99"
print(float(price)) #convert a string to a float

#challenge:
#create some variables called: name, age and city show them in a print

city = "California"
age = 26
print("Hello, my name is", name, last_name, "I am from", city, "I am", age, "years old")

#Arimetic operations
x = 5
y = 3

print(x + y) #addition
print(x - y) #subtraction
print(x * y) #mult
print(x / y) #division
print(x % y) #modulus
print(x ** y) #exponents


# Comparison operators

a = 10
b = 5
print(a == b) # equal to
print(a != b) # not equal to
print(a > b) # greater than
print(a < b) # less than 
print(a <= b) # less than or equal to
print(a >= b) # greater than or equal to


#logical operators

x = 5
y = 10
print( x > 3 and y < 15) #true, both conditions are true
print( x > 3 or y > 15) #true, becasue at least one is true
print(not(x>3)) #False, because x is greater than 3 and we are applying not

# List

fruits = ["Apple", "banana", "cherry", "watermelon"]

print(fruits)
print(fruits[0]) # first element
print(fruits[-1]) # last element

# List methods
fruits.append("grape") #add "grape to the list"
print(fruits)

fruits.remove("banana") # removes banana
print(fruits)

print(fruits.pop(1)) # removes the element in position 1
print(fruits)

print(fruits.index("grape")) #specifies the position of the element
print(fruits)

print(fruits.count("Apple")) #gives you the amount of the element

print(len(fruits)) #len = length


# If statements
# if condition:
    # code to execute if condition is true

age = 28

if age >= 18:
    print("You're an adult")
else:
    print("You're a minor")

x = 10

if x > 10:
    print("X is greater than 10")
elif x == 10:
    print("X is equal 10")
else:
    print("X is less than 10")

# For loop
fruits = ["Apple", "banana", "cherry", "watermelon"]

for fruit in fruits:
    print(fruit)

#(stop) (start, stop) (start, stop, step)
for i in range(5):
    print(i)

# Functions
def greet():   # def = function
    print("Hello from greet function")

greet() # calls the function

#parameters and arguments

def say_hi(name): # name is the parameter
    print("Hi,", name)
    print(f"Hi, {name}")
    print("Hi, " + name)

say_hi("Gabe") # gabe is an argument

#dictionary
person = {
    "name": "Gabriel",
    "age": 26,
    "city": "San Diego",
    "Zip": 93377
}

print(person)

print(person["city"])