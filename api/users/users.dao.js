/**
 * Data access object file, ( DAO )
 * 
 * In the Data Access Object (DOA) layer, 
 * we can define the function which is directly connected to the database 
 * and fetch data and save data from and to the database.
 * 
 * cb - refer to callback
 */
var mongoose = require('mongoose');
var usersSchema = require('./users.model');

usersSchema.statics = {
    create : function(data, cb) {
        var user = new this(data);
        user.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByEmail: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var usersModel = mongoose.model('Users', usersSchema);
module.exports = usersModel;