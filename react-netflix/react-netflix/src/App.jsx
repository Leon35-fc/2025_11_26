import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNavbar from './components/MyNavbar.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import ContainerGallery from './components/ContainerGallery.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TvShows from './components/TvShows.jsx'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path='/tv-shows' element={<TvShows galleryTitle="TvShows" searchFilm="Breaking Bad"/>}/>
          {/* <Route path='/movie-details' element={<MovieDetails/>}/> */}
          <Route path='/' element={<ContainerGallery/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
import { Form } from 'react-bootstrap'

export default App
