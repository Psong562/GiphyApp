const router = require('express').Router()
// const path = require('path')
// const fs = require('fs')
const db = require (`../db`)
// const { v4: uuidv4 } = require('uuid');

router.get('/giphy', (req, res) => {
  db.query('Select * FROM giphy', (err, giphy) => {
    if (err) { console.log(giphy) }
    res.json(giphy)
  })
})

router.post('/giphy', (req, res) => {
  db.query('INSERT into giphy SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.put('/giphy/:id', (req, res) => {
  db.query('UPDATE giphy SET ? Where ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.delete('/giphy/:id', (req, res) => {
  db.query('DELETE FROM giphy Where ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})



module.exports = router
