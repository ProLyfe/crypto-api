const fastify = require('fastify')({ logger: true });
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;


fastify.get('/crypto', async(_, res) => {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price');
        const body = await response.text();
        res.send(body);
    } catch (err) {
        console.error(err);
    };
});

fastify.listen(PORT);