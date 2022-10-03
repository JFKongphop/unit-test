import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe('generateReportData()', ()=>{
    it('should execute logFn if provided', ()=>{
        const logger = vi.fn();

        logger.mockImplementationOnce(()=>{})

        generateReportData(logger);
    
        // call of function to test
        expect(logger).toBeCalled();
    })
})