const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))


app.get('/saved', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'saved.html'))
})

require('./db').connect(() => app.listen(3000))