async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    Client.checkForName(userInput)

    console.log("::: Form Submitted :::")

    try {
        //Send user input to server side and get meaningclound's analysed data back from server side 
        const result = await postData('http://localhost:8081/post',{text: userInput})

        //Update the UI
        document.getElementById('results').innerHTML = result.confidence
    }catch(error){
        console.log("error",error);
    }
}

const postData = async (url = '', data= {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    })
    try {
        //Get analysed data from server side
        const analysedData = await response.json();
        return analysedData
    } catch(error) {
        console.log("error", error);
    }
}

export { handleSubmit }
