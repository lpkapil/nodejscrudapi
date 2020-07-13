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
var herosSchema = require('./heros.model');

herosSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var herosModel = mongoose.model('Heros', herosSchema);
module.exports = herosModel;