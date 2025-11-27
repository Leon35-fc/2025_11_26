import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// const URL = 'https://www.omdbapi.com/?apikey=caefe34f&s=Star%20Wars&type=movie'
const URL = 'https://www.omdbapi.com/?apikey=caefe34f'

function MovieDetails() {

    const [filmData, setFilmData] = useState(null)

    const params = useParams()
    console.log("URL PARAMS", params.movieID)

    function detailsFetch() {
        fetch(URL + '&i=' + params.movieID)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Network response was not ok" + response.status)
                }
            })
            .then((data) => {
                console.log('DATI IN MOVIE DETAILS', data)
                setFilmData({...data, filmData})
                console.log('filmData log',filmData);
                

            })
            .catch(error => console.error("Fetch error: ", error))
    }
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => { detailsFetch()}, [])

    return(
        <>
            <Container fluid>   
                <Row>
                    <h2 data-bs-theme="white" className="d-flex justify-content-center text-white border border-4 rounded-5 border-warning"> Qui vanno i MovieDetails</h2>
                </Row>
                <Row>
                    <Col>
                        {/* <img src={filmData.Poster} alt="" /> */}
                    </Col>
                </Row>             
            </Container>
            
        </>

    )
}    
export default MovieDetails