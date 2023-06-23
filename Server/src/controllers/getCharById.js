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