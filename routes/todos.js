const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('layouts/main')
})

router.get('/', (req, res) => {
    res.render('layouts/auth')
})




module.exports = router
