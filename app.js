const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

const fs = require('fs')
const mainPage = fs.readFileSync(__dirname + '/public/index.html', 'utf-8')

app.get('/', res => {
	res.send(mainPage)
})

const server = app.listen(process.env.PORT || 8080, error => {
	if (error) {
		console.log(error)
	}
	console.log('The server is running on', server.address().port)
})
