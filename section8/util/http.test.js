import { it, vi, expect } from "vitest"
import { HttpError } from "./errors";
import { sendDataRequest } from "./http"

const testResponseData = {testKey : "testData"};

// import thrid party
const testFetch = vi.fn((url, options) =>{
    if(typeof options.body !== "string") {
        return reject('Not a String');
    }
    return new Promise((resolve, reject) =>{
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) =>{
                    resolve(testResponseData);
                });
            }
        }
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

it('should return any availablr response data', ()=>{
    const testData = {key : 'testData'};

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
})

it('should convert the provided data to JSON before sending the request', async ()=>{
    const testData = {key : 'testData'};

    let errorMessage;
    
    try{
        await sendDataRequest(testData);
    } catch(error) {
        errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a String')
})

it('should throw an HttpError in case if non-ok response', ()=>{
    testFetch.mockImplementationOnce((url, options) =>{
        return new Promise((resolve, reject) =>{
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve, reject) =>{
                        resolve(testResponseData);
                    });
                }
            }
            resolve(testResponse);
        });
    });

    const testData = {key : 'testData'};

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});