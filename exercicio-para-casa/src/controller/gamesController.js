const jogos = require('../model/games.json')

const newListJogos = jogos.map(game => {
    const novoJogo = {
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
    return novoJogo
})

const getGames = (request, response) => {
    //console.log(request.url);
    response.status(200).send(newListJogos)
}

const getGamesById = (request, response) => {
    const id = request.params.id
    const game = newListJogos.find(game => game.id == id)
    console.log(game)

    if(!game) {
       response.status(404).send({msg:"Nada Encontrado!"}) 
    }else{
       response.status(200).send(game)

    }
} 

module.exports = {
    getGames,
    getGamesById

}