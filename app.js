const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/info', (req, res) => {
    res.render('info')
})
app.get('/pcs', (req, res) => {
    res.render('pcs')
})

app.listen(3000, () => console.log('listening on port 3000'))