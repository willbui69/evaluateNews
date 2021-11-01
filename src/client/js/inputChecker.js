function checkForInput(inputText) {
    console.log("::: Running checkForInput :::", inputText)

    let text = inputText.trim();

    if(text.length===0) {
        alert("Please place your text in the box before submit!")
    }
}

export { checkForInput }
