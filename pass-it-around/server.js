
// --------------- ***** Take one Down and Pass it Around ***** --------------- //

// Import Express
const express = require("express")
// Create app object
const app = express()

// Get Route
app.get("/", (req, res) => {
    const beers = req.params.beers
    res.send("<h3>99 Bottles of beer on the wall</h3><a href='/98'>Take one down, pass it around</a>")
})

// Beer counter loop
app.get("/:beerCt", (req, res) => {
    const beerCt = req.params.beerCt
    // Update the count by minus 1
    const nextCt = beerCt - 1
    // Check and update the beer count. Change message if beer count is 0.
    if (beerCt > 0) {
        res.send(`<h3>${beerCt} bottles of beer on the wall</h3><a href="/${nextCt}">Take one down pass it around</a>`)
    } else {res.send("<h4>You drank all the beers!!</h4><a href='/'>Get drunk again?</a>")}
})


// Server listener
app.listen(99, () => {
    console.log("listening on port 99")
})