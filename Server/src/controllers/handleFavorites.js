let myFavorites = []

function postFav(req, res) {
    myFavorites.unshift(req.body)
    res.json(myFavorites)
}

function deleteFav(req, res) {
    const { id } = req.params
    myFavorites.filter(character => character.id !== Number(id))
    res.json(myFavorites)
}

module.exports = { postFav, deleteFav }