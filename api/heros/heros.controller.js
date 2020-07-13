/**
 * 
 * Hero Controller
 * 
 * we put all the business logic. 
 * In this file, we create all the function like create a hero, 
 * get a list of hero, 
 * get a single hero according to name, 
 * update the hero, 
 * delete the hero.
 */
var Heros = require('./heros.dao');

exports.createHero = function (req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    };

    Heros.create(hero, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero created successfully"
        })
    })
}

exports.getHeros = function(req, res, next) {
    Heros.get({}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.getHero = function(req, res, next) {
    Heros.get({name: req.params.name}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.updateHero = function(req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    }
    Heros.update({_id: req.params.id}, hero, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero updated successfully"
        })
    })
}

exports.removeHero = function(req, res, next) {
    Heros.delete({_id: req.params.id}, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero deleted successfully"
        })
    })
}