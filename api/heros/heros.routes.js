var Heros = require('./heros.controller');

module.exports = function(router) {
    router.get('/', function(req,res){ res.send('NodeJs API Project');});
    router.post('/create', Heros.createHero);
    router.get('/get', Heros.getHeros);
    router.get('/get/:name', Heros.getHero);
    router.put('/update/:id', Heros.updateHero);
    router.delete('/remove/:id', Heros.removeHero);
}