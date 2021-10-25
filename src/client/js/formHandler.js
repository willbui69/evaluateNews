async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    Client.checkForName(userInput)

    postData('/post',{text:userInput}) 

    console.log("::: Form Submitted :::")
    const res = await fetch('/get')
    try {
        const response = await res.json();
        document.getElementById('results').innerHTML = response.confidence
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
        const newdata = await response.json();
    } catch(error) {
        console.log("error", error);
    }
}

export { handleSubmit }
