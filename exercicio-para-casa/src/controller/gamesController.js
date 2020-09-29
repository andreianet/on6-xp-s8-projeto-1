const jogos = require('../model/games.json')


//criando uma nova lista com campos em português
const newListJogos = jogos.map(game => {
    const newGame = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,        
        data_lancamento: game.first_release_date,
        slug: game.slug,
        resumo: game.summary,
        empresa: game.company,
        capa: game.cover
    }
    return newGame
})


const getGames = (request, response) => {
    console.log(request.url);
    response.status(200).send(newListJogos)
}

/*const getGamesById = (request, response) => {
    const id = request.params.id
    const game = 
}*/

module.exports = {
    getGames
}