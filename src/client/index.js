import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit
   }

// Send user data to the server
document.getElementById('submit').addEventListener('click', sendData);

function sendData() {
    // Retrieve the text user want to check
    const textInput = document.getElementById('name').value;
    postData('/post',{text:textInput})
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
        return newdata
    } catch(error) {
        console.log("error", error);
    }
}
  
