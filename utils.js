export function renderIngredients(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.type} - ${ingredient.amount} ${ingredient.unit}`;
    return li;
}