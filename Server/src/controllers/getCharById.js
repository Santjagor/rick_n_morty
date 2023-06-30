const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

// function getCharById(req, res) {
//     const { id } = req.params
//     axios(`${URL}${id}`).then(({ data }) => {
//         if (data) {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status
//             }
//             res.json(character)
//         } else {
//             res.status(404).send("Not found")
//         }
//     }).catch((err) => {
//         res.status(500).send(err.message)
//     })
// }

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios(`${URL}${id}`)
        if (response) {
            const character = {
                id: response.data.id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin,
                image: response.data.image,
                status: response.data.status
            }
            res.json(character)
        } else {
            res.status(404).send("Not found")
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCharById