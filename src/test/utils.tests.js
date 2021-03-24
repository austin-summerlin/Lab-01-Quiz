// IMPORT MODULES under test here:
// import { example } from '../example.ts';
import { isYes } from './utils.js';

const test = QUnit.test;

test('should take in a string and return true if answer begins with a y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes returns true');
    expect.equal(isYes('YAASSS'), true, 'YAASSS returns true');
    expect.equal(isYes('NOOOOOOO'), false, 'NOOOOOOO returns false');
});
