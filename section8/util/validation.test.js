import { it, describe, expect} from "vitest"
import { validateNotEmpty } from "./validation";

it('should throw an error if any empty string is provied as value',()=>{
    const testInput = '';

    const validationFn = () => validateNotEmpty(testInput);

    // when hvae erorr that throw
    expect(validationFn).toThrow()
})


it('should throw an error if any empty string is provied as value',()=>{
    const testInput = '   ';

    const validationFn = () => validateNotEmpty(testInput);

    // when hvae erorr that throw
    expect(validationFn).toThrow()
})

it('should throw an error with the provided error message',()=>{
    const testInput = '';
    const testErrorMessage = "Test"

    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

    // when hvae erorr that throw
    expect(validationFn).toThrow(testErrorMessage)
})