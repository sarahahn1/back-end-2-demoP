const movies = require('./db.json')
globalId = 11
module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const deleteId = req.params.id
        let index = movies.findIndex(element => element.id === +deleteId)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body
// this code finds me the next, non-used id in my "database"
        let greatestId = -1
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id > greatestId) {
                greatestId = movies[i].id
            }
        }
        let nextId = greatestId + 1

        let newMovie = {
            id: globalId,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
    }
}