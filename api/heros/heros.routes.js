var Heros = require('./heros.controller');

module.exports = function(router) {
    router.post('/hero', Heros.createHero);
    router.get('/heros', Heros.getHeros);
    router.get('/hero/:name', Heros.getHero);
    router.put('/hero/:id', Heros.updateHero);
    router.delete('/hero/:id', Heros.removeHero);
}