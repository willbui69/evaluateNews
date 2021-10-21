async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    Client.checkForName(userInput)

    console.log("::: Form Submitted :::")
    const res = await fetch('http://localhost:8081/get')
    try {
        const response = await res.json();
        document.getElementById('results').innerHTML = response.confidence
    }catch(error){
        console.log("error",error);
    }
}

export { handleSubmit }
