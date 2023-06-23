// function getCharById(res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, { "Content-Type": "application/json" })
//         res.end(JSON.stringify(character))
//     }).catch(err => {
//         res.writeHead(500, { "Content-Type": "text/plain" })
//         res.end(err.message)
//     })
// }

const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res) {
    const { id } = req.params
    axios(`${URL}${id}`).then(({ data }) => {
        if (data) {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            res.json(character)
        } else {
            res.status(404).send("Not found")
        }
    }).catch((err) => {
        res.status(500).send(err.message)
    })
}

module.exports = getCharById