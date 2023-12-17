
// Import the Express library
const express = require("express")
// Create an Express Application object
const app = express()

// --------------- ***** Greetings ***** --------------- //


// 2. Make a route '/greeting'

// Write a GET request to url "/greeting"
app.get("/greeting", (req, res) => {
    // Send a response
    res.send("Hello, stranger")
})


// 3/4. Give the greeting route a prama /:name / Display a message

app.get("/greeting/:name", (req, res) => {
    // Put the param name into a variable
    const name = req.params.name
    // Send a response using the param name
    res.send(`<h5>What's up, ${name}</h5>`)
})


// --------------- ***** Tip Calculator ***** --------------- //

// 2. Make a route of '/tip'

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipTotal = total * (.01 * tipPercentage)
    res.send(`${tipTotal}`)
})



// This function will run after the server turns on and return what port is listening.
app.listen(1000, () => {console.log("The server is listening on port 1000")});


// --------------- ***** Magic 8 Ball ***** --------------- //

// 2. Magic Route

app.get("/magic/:question", (req, res) => {
    // Array of possible responses
    const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    // Randomizer 
    const rand = Math.ceil(Math.random() * response.length)
    const randResponse = response[rand]
    // Question param
    const question = req.params.question
    res.send(`<h1>${question}</h1>
              <h1>${randResponse}</h1>`)
})