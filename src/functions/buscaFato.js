const fetch = require('node-fetch')

module.exports = async function buscaFato(quantidade) {
    const response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${quantidade}`)
    const json = await response.json()
    if (quantidade == 1) {
        return [json]
    }
    
    console.log(json)

    return json

}