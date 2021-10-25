var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config();

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
const { request } = require('http');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

 //Get user input from client side
 app.post("/post", async (req, res)=>{
    try {
        const userInput = await req.body.text;

        const data = await getMeaningCloudData(userInput);

        app.get("/get", async(request, response)=>{
            response.send(data);
        })
    }catch(error){
        console.log("error", error);
    }
 })

 const getMeaningCloudData = async (text)=>{
     const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
     const apiKey = process.env.API_KEY;
     const result = await fetch(`${baseUrl}${apiKey}&txt=${text}&lang=en`)
     try {
         const response = await result.json();
         //Return the analysed result from meaningcloud service
         console.log(response.confidence);
         return response
     }catch(error) {
         console.log("error", error);
     }
 } 
