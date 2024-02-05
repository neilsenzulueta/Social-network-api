const router = require('express').Router()

router.route('/')
    .get((req, res) => res.send('this is GET `/api/thoughts`'))
    .post((req, res) => res.send('this is POST `/api/thoughts`'))

router.route('/:thoughtId')
    .get((req, res) => res.send('this is GET `/api/thoughts/${req.params.thoughtId}`'))
    .put((req, res) => res.send('this is PUT `/api/thoughts/${req.params.thoughtId}`'))
    .delete((req, res) => res.send('this is DELETE `/api/thoughts/${req.params.thoughtId}`'))



module.exports = router