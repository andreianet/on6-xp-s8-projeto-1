const jogos = require('../model/games.json')

const newListJogos = jogos.map(game => {
    const newJogo = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,        
        capa: game.cover
    }
    return newJogo
})

const getGames = (request, response) => {
    console.log(request.url);
    response.status(200).send(newListJogos)
}

const ListJogosID = jogos.map(game => {
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

const getGamesById = (request, response) => {
    const id = request.params.id
    const game = ListJogosID.find(game => game.id == id)
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