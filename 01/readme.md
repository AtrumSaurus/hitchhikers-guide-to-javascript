# Exercises

## Let & const
1. Write a program that prints the mean between 3 numbers. Then subtract to one of the numbers the value of the mean and prints that value.

## Arrays
1. Write a program that prints the mean between an array of numbers.
2. Write a program that prints the mean between only the numbers in an array like [1, true, "test", undefined, 3 , null].
3. Find a way to create an array of only even numbers using just 1 line of code.

## Objects
1. Create a person object having the following properties: firstName, lastName, age, car each set to null.
2. Create a car object storing the model and the plate.
3. Create two person objects and assign the car object of before
4. Change the car model and plate properties. What happened?

# Real World Example

## Necessity
There are two endpoints, http://5bbf0e9b72de1d0013253709.mockapi.io/api/v1/LegacyPeople and http://5bbf0e9b72de1d0013253709.mockapi.io/api/v1/people, the first is the old model and the second is the new. 
For some reason the Legacy has some data that the New has not and there are some record that are still not migrated from the old to the new, so it's necessary to merge the data. The model chosen for the "visualization" is (of course) the New one.

We need to print every person's full name, creation date, job title and team name. The Legacy and the New have this relation : LeacyPeople.Matricola = people.departmentId. We should only print those who have a team and should be orderd by creation date from the last to the first.

Print format: <full name> @ <creation date> | <job title> -> <team name>

## Solution
In this directory run `npm install` then type `node real_world_example.js` in your shell!