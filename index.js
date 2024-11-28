//iniciando o framework express
const Express = require('express');

const app = Express();

port = 3000;

app.listen(port, () => console.log(`O servidor esta rodando na ${port}`));

app.get('/servidor', (req, res) => {
    res.send('Hello World');
})

