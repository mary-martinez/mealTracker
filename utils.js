export function renderIngredient(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.type} - ${ingredient.amount} ${ingredient.unit}`;
    return li;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.numOfIngredients} ingredients`;
    return li;
}