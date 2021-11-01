import { checkForInput } from "../src/client/js/inputChecker";  

describe("Testing the user input functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForInput() function", () => {
           expect(checkForInput).toBeDefined();
})});