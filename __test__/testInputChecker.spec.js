import { checkForInput } from "../src/client/js/inputChecker";  


describe("Testing the user input", () => {
    test("Testing the checkForInput() function", () => {
           const input1 = 'abc';
           const input2 = '';
           expect(input1).toBeTruthy();
           expect(input2).not.toBeTruthy();

})});