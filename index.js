const express = require("express")
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end('Title')
})

app.get('/about', (req, res) => {
    res.end('<h1>About page</h1>')
})

app.listen(PORT, () => {
    console.log('Server has been started...')
})
//hello
//my best friend