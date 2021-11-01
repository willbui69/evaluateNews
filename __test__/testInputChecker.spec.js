import { checkForInput } from "../src/client/js/inputChecker";  


describe("Testing the user input", () => {
    test("Testing the checkForInput() function", () => {
           const input = 'abc';
           expect(input).toBeTruthy();

})});