var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
dotenv.config();
projectData = [];
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//Set up the meaningcloud service
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

//Get the user input sent from the app
app.post('/post', function (req, res){
    let data = req.body;
    projectData.push(data);
    res.send(projectData[0]);
    console.log(projectData[0]);
})

// const formdata = new FormData();
// formdata.append("key", "c8f276325a70f62e1c86bc98fbb48eb6");
// formdata.append("txt", "YOUR TEXT HERE");
// formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status, 
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));