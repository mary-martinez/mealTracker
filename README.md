## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan
## HTML ELEMENTS

-   Add Ingredient Feature
    -   `<form>` for adding ingredients
        -   `<labels>` and `<inputs>` for ingredient, quantity, measurement
        -   `<button>` for submit
    -   `<ul>` for holding ingredients
-   Remove Feature
    -   `<remove>` button
-   Save Feature
    -   `<save>` button
    -   `<input>` for meal
    -   `<ul>` for the meals

## EVENTS

-   form submit
    -   make a new FormData object to access the form data
    -   make an ingredient object
    -   add ingredient object to a state array
    -   update the view i.e. re-render the ingredients `<ul>`
-   remove button
    -   pop off the last ingredient from ingredients array
    -   update the view i.e. re-render the ingredients `<ul>`
-   save meal button
    -   grab the meal name from the `<input>`
    -   make a meal object with the name and the number of ingredients
    -   update the view i.e. re-render the meals `<ul>`
    -   reset the ingredients state
    -   re-render the ingredients `<ul>`

## STATE

-   ingredients array of objects

```js
{name: 'Avocado', quantity: 100, unit: 'grams'}
```

-   meals array of objects

```js
{name: 'Lunch', count: 2}
```

## FEATURE PLAN (ORDER OF OPERATIONS)

1. Add Ingredients Feature

    - Make the form
    - Add the form event listener (VALIDATE using console.log)
    - ACP
    - TDD `<li>` render function
    - ACP
    - create ingredients array variable
    - push form data to the ingredients array
    - add your `<ul>` to the HTML
    - add `renderIngredients` function (loop through all the ingredients, create an LI, render to page)
    - ACP

2. Remove Last Item

    - Add the button
    - Add the event listener
    - Pop off the last element
    - render the ingredients
    - ACP

3. Save Meal Function
    - Add the input and button to HTML
    - Add the event listener, and validate it works
    - ACP
    - TDD `<li>` render function
    - ACP
    - create meals array variable
    - push the meal info on the array
    - add `<ul>` to the HTML
    - add `renderMeals` function (loop through all the meals, create an LI and render to the page)
    - ACP
    - reset the ingredients
    - render the ingredients

## What I had before the README demo in class

HTML:
1) set up initial page layout
2) create a form
3) add form elements (ingredient, amount, remove last ingredient, meal name, save meal)
4) add other DOM elements (display current meal, display saved meals)

Javascript:
1) create renderIngredient test + function
2) create renderMeal test + function
3) grab DOM elements and initialize 
4) let state of counters and arrays
5) add event listeners for add ingredient, remove last ingredient, and add meal
6) function to render to the DOM: current list of ingredients, saved meals

CSS:
1) layout for the elements 
2) styling as needed

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
