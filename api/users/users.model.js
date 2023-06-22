/**
 * Defining schema of Hero entity
 * 
 * The schema is the organisation of data 
 * as a blueprint of how the database is constructed.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    name :{
        type: String,
        trim: true,
        unique : false,
        required : true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = usersSchema;