const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {

    res.render('index')
})
router.get('/about', (req, res) => {

    res.render('about') 
})
router.get('/me', (req, res) => {
    res.render('me') 
})
router.get('/servicies', (req, res) => {
    res.render('servicies') 
})

router.get('/works', (req, res) => {
    res.render('works') 
})

module.exports = router;