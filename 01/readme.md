# Exercises

## Let & const
1. Write a program that prints the mean between 3 numbers. Then subtract to one of the numbers the value of the mean and prints that value.

## Arrays
1. Write a program that prints the mean between an array of numbers.
2. Write a program that prints the mean between only the numbers in an array like [1, true, "test", undefined, 3 , null].
3. Find a way to create an array of only even numbers using just 1 line of code.

## Objects
1. Create a Hero object having the following properties: firstName, lastName, age, car each set to null.
2. Create a Car object storing the model and the plate.
3. Create two Hero objects and assign the car object of before
4. Change the car model and plate properties. What happened?

A solution for these sections can be found in file `solution.js`.

# Real World Example

## Necessity
There are two endpoints, http://5bbf0e9b72de1d0013253709.mockapi.io/api/v1/PersoneLegacy and http://5bbf0e9b72de1d0013253709.mockapi.io/api/v1/people, the first is the old model (*Legacy*) and the second is the new (*New*).

For some reason the Legacy has some data that the New has not and there are some record that are still not migrated from the old to the new. We should rely only on the New and pick from the Legacy the information for the team name and update the flag accordingly.

The Legacy and the New are linked by this relation: **PersoneLegacy.Matricola = people.departmentId**.

We should only print, using the format right below, those who have a team and should be orderd by creation date from the last to the first.

Print format: `<full name> @ <creation date> | <job title> -> <team name>`

If for some reason the team name has no value but the flag is still valid, whe should print "None" as team name.

## Solution
In this directory run `npm install` then type `node real_world_example.js` in your shell!

### For Browser
Pick `real_world_example_browser.js` file and copy in your Chrome's snippet editor, then run it!
