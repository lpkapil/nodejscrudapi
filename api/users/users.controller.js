/**
 * 
 * User Controller
 * 
 * we put all the business logic. 
 * In this file, we create all the function like create a user, 
 * get a list of users, 
 * get a single user according to name, 
 * update the user, 
 * delete the user.
 */
var Users = require('./users.dao');

exports.createUser = function (req, res, next) {
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    Users.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User created successfully"
        })
    })
}

exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.getUser = function(req, res, next) {
    Users.getByEmail({email: req.params.email}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.updateUser = function(req, res, next) {
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    Users.updateOne({_id: req.params.id}, user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
}

exports.removeUser = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })
}