// import functions and grab DOM elements

import { renderIngredient } from "./utils.js";

const form = document.getElementById('add-ingredient');
const listIngredients = document.getElementById('ingredient-list');
// let state
let ingredients = [];
// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
function renderIngredients(ingredients) {
    listIngredients.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        listIngredients.append(li);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Step 1 - add code to track each submission to the ingredients
    const newData = new FormData(form);
    // Create an object to "model" your statistic like the following:
    // { player: 'Bob', points: 2 }
    const ingredient = {
        type: newData.get('ingredient'),
        amount: newData.get('amount'),
        unit: newData.get('unit')
    };
    ingredients.push(ingredient);
    renderIngredients(ingredients);
    form.reset();
});