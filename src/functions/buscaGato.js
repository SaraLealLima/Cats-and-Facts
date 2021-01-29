const fetch = require('node-fetch')

module.exports = async function buscaGato(tipoImagem) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&mime_types=${tipoImagem}&order=Random&size=medium&page=1&sub_id=demo-a36fbf`)
    const json = await response.json()
    console.log(json)

    return json[0]
}