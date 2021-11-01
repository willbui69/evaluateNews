function checkForIput(inputText) {
    console.log("::: Running checkForInput :::", inputText)

    if(inputText.length==0) {
        alert("Please place your text in the box before submit!")
    }
}

export { checkForInput }
