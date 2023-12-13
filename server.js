
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







// This function will run after the server turns on and return what port is listening.
app.listen(1000, () => {console.log("The server is listening on port 1000")});

