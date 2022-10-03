import { it, expect } from "vitest";

import { generateToken, generateTokenPromise } from './async-example'

it('should generate a token value', (done)=>{
    const testUserEmail = "test@gtest.com";

    generateToken(testUserEmail, (err, token) =>{
        // expect(token).toBeDefined()
        // when it have wrong expect answer that is timeout
        try{
            expect(token).toBeDefined()
            // expect(token).toBe(2)
            done()
        } catch (err){
            done(err);
        }
    });
})

it('should generate a token value', ()=>{
    const testUserEmail = "test@test.com"

    // when it not error that to be of the test
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
})

it('should generate a token value', async ()=>{
    const testUserEmail = "test@test.com"

    const token = await generateTokenPromise(testUserEmail)

    // when it not error that to be of the test
    expect(token).toBeDefined();
})