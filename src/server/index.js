var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config();

//endpoint for server
projectData = {};

const app = express()

app.use(express.static('dist'))

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

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

//Get the user input sent from the client side
app.post('/post', async function (req, res){
    //Save data to the project endpoint
    projectData["text"] = req.body.text;
    res.send(projectData);

    //Send the user input to the meaningcloud service
    const apiKey = process.env.API_KEY;    
    const formText = projectData.text;

    const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + apiKey + "&url=" + formText + "&lang=en")
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error", error);
    }
})
