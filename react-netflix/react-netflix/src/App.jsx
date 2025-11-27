import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/MyNavbar.jsx'
import Footer from './components/Footer.jsx'
// import Gallery from './components/Gallery.jsx'
import ContainerGallery from './components/ContainerGallery.jsx'
import TvShows from './components/TvShows.jsx'
import MovieDetails from './components/MovieDetails.jsx'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<ContainerGallery/>}/>
          <Route path='/tv-shows' element={<TvShows galleryTitle="TvShows" searchFilm="Breaking Bad"/>}/>
          <Route path='/details/:movieID' element={<MovieDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
