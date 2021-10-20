function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    Client.checkForName(userInput)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/get')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.confidence
    })
}

export { handleSubmit }
