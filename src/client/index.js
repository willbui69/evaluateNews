import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './images/logo.png'

document.getElementById('submit').addEventListener('click',requestData);

function requestData(){
    handleSubmit(event);
}

export {
    checkForName,
    handleSubmit
   }


  
