import { it, expect, describe } from "vitest"
import { transformToNumber  } from "./numbers"

describe('transformToNumber()', ()=>{
    it('should transforom a stirng number to a number of type number', ()=>{
        const number = "5";

        const result = transformToNumber(number);

        expect(result).toBeTypeOf("number");
    })

    it('should yield NaN for non-transformable values', ()=>{
        const number = "kongphop";
        const number2 = {};

        const result = transformToNumber(number);
        const result2 = transformToNumber(number2)

        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    })

    // add more test
    it('should transforom a stirng number to a number of type number', ()=>{
        const number = "5";

        const result = transformToNumber(number);

        expect(result).toBe(+number);
    })
})
