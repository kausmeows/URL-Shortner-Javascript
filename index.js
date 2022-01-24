const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    res.send("We intercepted the request.")
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/another', (req, res) => {
    res.send("Hello from another world !!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
