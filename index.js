const express = require("express");
app = express()

const cors = require("cors")

var url = require("url");
var dt = require("./date-time");

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3
console.log("THIS IS A TEST")

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + "/static"))
app.use(cors({ origin: "*" }))

// The app.get functions below are being processed in Node.js running on the server.
// Implement a custom About page.
app.get("/about", (request, response) => {
	console.log("Calling '/about' on the Node.js server")
	response.type("text/plain")
	response.send("This application uses nodejs for a server-side implementation of dice-roller")
})

app.get("/getRandomNumber", (request, response) => {
	console.log("Calling '/getRandomNumber' on the Node.js server")

	let dice = Math.floor((Math.random() * 6) + 1);

	response.type("text/plain")
	response.send(dice.toString())
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
