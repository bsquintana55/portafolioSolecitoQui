



const express = require('express')
const app = express()
const port = 8000

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.set('views',__dirname + '/views' )


app.get('/', (req, res) => {

    res.render('index')
})
app.get('/about', (req, res) => {

    res.render('about') 
})
app.get('/me', (req, res) => {
    res.render('me') 
})
app.get('/servicies', (req, res) => {
    res.render('servicies') 
})

app.get('/works', (req, res) => {
    res.render('works') 
})



//genera 404 

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

