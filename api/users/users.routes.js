var Users = require('./users.controller');

module.exports = function(router) {
    router.post('/user', Users.createUser);
    router.get('/users', Users.getUsers);
    router.get('/user/:email', Users.getUser);
    router.put('/user/:id', Users.updateUser);
    router.delete('/user/:id', Users.removeUser);
}