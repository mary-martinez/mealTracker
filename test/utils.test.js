// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('renderIngredient should return at <li> that has the ingredient and amount', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>banana - 100 g</li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({
        type: 'banana',
        amount: 100,
        unit: 'g'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderMeal should return an <li> that has the meal name and number of ingredients', (expect) => {
    const expected = `<li>lunch - 8 ingredients</li>`;
    const actual = renderMeal({
        name: 'lunch',
        numOfIngredients: 8
    });
    expect.equal(actual.outerHTML, expected);
});