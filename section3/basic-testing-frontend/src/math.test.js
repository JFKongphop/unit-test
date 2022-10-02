import { it, expect, describe } from "vitest";
import { add } from "./math";

// it call of the what you test for register just a few word for describe 
// in the function that is test

// when use run test:watch that can test in all time 
// make it simple of test
// serepate of the each function for test
// describe is show of the name function that use
describe('add()', ()=>{
    it('should sumarize all number values in an array', ()=>{
        // call the function in file
        // Arrange is set value to put in the test
        const numbers = [1, 2, 3, 4, 5]

        // Act the function that will test
        const result = add(numbers);
        
        // Assert is the exprect of test
        // expect of the result from function test 
        const expectResult = numbers.reduce(
            (preValue, curValue) => preValue + curValue, 0
        );
        expect(result).toBe(expectResult);
    });


    it('should yield NaN if a least one invalid number is provided', ()=>{
        const inputs = ['invalid', 1];

        const result = add(inputs);

        expect(result).toBeNaN();
    });

    it('should yield a correct sun if an array of numeric string values is provided', ()=>{
        const numbers = ['1', '2'];

        const result = add(numbers);

        const expectResult = numbers.reduce(
            (preValue, curValue) => +preValue + +curValue, 0
        );
        expect(result).toBe(expectResult);
    })

    it('should yield 0 if an empty array is provided', ()=>{
        const numbers = [];

        const result = add(numbers);

        expect(result).toBe(0);
    })

    // when have error that throw to show of the error
    it('should throw an error if no lavues is passed into the function', ()=>{
        const resultFn = () =>{
            add();
        };

        // can use not before function if want to opposite value
        // expect(resultFn).not.toThrow()
        expect(resultFn).toThrow(/is not iterable/)
    })

    // throw the error when it have
    it('should throw an erorr if provided with multiple agrument instaed of an array', ()=>{
        const num1 = 1;
        const num2 = 2;

        const resultFn = () =>{
            add(num1, num2)
        };
        
        // /is not iterable/
        expect(resultFn).toThrow(/is not iterable/);
    })
})