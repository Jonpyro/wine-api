const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.get('/', (req, res)=>{
    const URL = 'https://api.sampleapis.com/wines/reds'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('redWines', {
                title: 'Red Wine',
                name: 'Red Wine Index!',
                data
            })
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const URL = `https://api.sampleapis.com/wines/reds/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('redWineSingle', {
                title: `${data.wine}`,
                name: `${data.wine}`,
                data
            })
        })
})

module.exports = router