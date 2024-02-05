const router = require('express').Router()

router.route('/')
    .get((req, res) => res.send('this is GET `/api/user`'))
    .post((req, res) => res.send('this is POST `/api/user`'))

router.route('/:userId')
    .get((req, res) => res.send(`this is GET /api/user/${req.params.userId}`))
    .put((req, res) => res.send(`this is PUT /api/user/${req.params.userId}`))
    .delete((req, res) => res.send(`this is DELETE /api/user/${req.params.userId}`))

router.route('/:userId/friends/:friendId')
    .post((req, res) => res.send(
        `this is POST '/api/user/${req.params.userId}/${req.params.friendId}'`))

module.exports = router