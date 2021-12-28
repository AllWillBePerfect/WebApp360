const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('layouts/main')
})

router.get('/auth', (req, res) => {
    res.render('views/auth')
})

module.exports = router