// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderIngredients } from "../utils.js";

const test = QUnit.test;

test('renderIngredients should return at <li> that has the ingredient and amount', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>banana - 100 g</li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredients({
        type: 'banana',
        amount: 100,
        unit: 'g'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
