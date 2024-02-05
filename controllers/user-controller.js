const {User, Thought} = require('../models')

module.exports = {
//GET all users
    getAllUsers: async(req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch(err) {
            handelError
    }
},

//GET user by id

//CREATE user
    createUser

//UPDATE user


//delete user


//add friend


//delete friend
}