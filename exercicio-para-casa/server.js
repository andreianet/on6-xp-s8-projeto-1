const app = require('./src/app')

const PORT = 3001

app.listen(PORT, function (request, response) {
    console.log("Servidor rodando " + PORT);
})