1. What is the difference between var, let, and const?
Answer:var can be reassigned and it does not maintain block scope, it only maintains function scope. That means outside of a function, var can be accessed globally.
But let can be reassigned and it maintains scope. That means a let declared inside a block cannot be accessed outside of that block or globally.
const cannot be reassigned and it also maintains scope.
In case of hoisting, var is hoisted and initialized with undefined. But let and const are hoisted too, they stay in the temporal dead zone until the declaration line, so accessing them before declaration will give an error.

2. What is the difference between map(), forEach(), and filter()?
Answer: forEach() → Loops through each array element but does not return anything.

map() → Loops through each array element and returns a new array according to the callback function.

filter() → Loops through each array element and returns a new array according to the condition.

3. What are arrow functions in ES6?
answer: Arrow function introduces a new function expression in ES6. The syntax of arrow function helps to write small and clean functions.
If written in a single line, the return keyword is not needed.
Arrow function does not have its own this; it takes this from the surrounding scope.

4. How does destructuring assignment work in ES6?
answer: Destructuring assignment is a feature introduced in ES6 that helps to assign values from arrays or objects to variables using a shortcut syntax.

5. Explain template literals in ES6. How are they different from string concatenation?
answer: Template literals are a new way introduced in ES6 that helps to write strings. Template literals are written using backticks  and variables or expressions can be included in the string using the ${ } syntax.
