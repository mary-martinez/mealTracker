## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

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
