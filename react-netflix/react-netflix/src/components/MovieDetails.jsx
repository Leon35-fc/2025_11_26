// import {useNavigate} from 'react-router-dom'
const URL = 'https://www.omdbapi.com/?apikey=caefe34f&s=Star%20Wars&type=movie'

function MovieDetails() {

filmFetch () {
        fetch (this.URL)
        .then ((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error("Network response was not ok" + response.status)
                    }   
                })
        .then ((data) => {
            console.log (data.Search)
            // data.Search.map (film => dbFilms.push (film))
            this.setState({ films: data.Search, isLoading: false })
            console.log ('FILM in this.state.films', this.state.films)
            // console.log ('FILM in dbFilms', dbFilms)
        })
        .catch (error => console.error ("Fetch error: ", error))
    }
}    
export default MovieDetails