const fastify = require('fastify')({ logger: true });
const fetch = require('node-fetch');

fastify.get('/crypto', async(req, res) => {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price');
        const body = await response.text();
        res.send(body);
    } catch (err) {
        console.error(err)
    }
    res.send(body);
});

fastify.listen(9000);