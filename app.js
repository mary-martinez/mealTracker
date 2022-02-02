// import functions and grab DOM elements

import { renderIngredient, renderMeal } from "./utils.js";

const form = document.getElementById('add-ingredient');
const listIngredients = document.getElementById('ingredient-list');
const remove = document.getElementById('remove-last');
const mealSave = document.getElementById('save-meal');
const mealName = document.getElementById('meal-name');
const listMeals = document.getElementById('list-meals');

// let state
let ingredients = [];
let meals = [];

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

function renderMeals() {
    listMeals.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        listMeals.append(li);
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

remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients(ingredients);
});

mealSave.addEventListener('click', () => {
    const meal = {
        name: mealName.value,
        numOfIngredients: ingredients.length
    }
    meals.push(meal);
    renderMeals();
    mealName.value = '';
    listIngredients.textContent = '';
    ingredients = [];
});