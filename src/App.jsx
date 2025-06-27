
import './App.css'
import About from './components/About'
import Achivment from './components/Achivment'
import Blog from './components/Blog'
import Choose from './components/Choose'
import Community from './components/Community'
import CustomCursor from './components/CustomCursor'
import Facilities from './components/Facilities'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import LoadingOverlay from './components/LoadingOverlay'
import Map from './components/Map'
import Nav from './components/Nav'
import Offer from './components/Offer'
import Reservation from './components/Reservation'
import Restaurant from './components/Restaurant'
import Review from './components/Review'
import ReviewCarousel from './components/ReviewCarousel'
import Room from './components/Room'
import Staff from './components/Staff'
import Update from './components/Update'
import Video from './components/Video'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <div className='overflow-hidden'>
        <CustomCursor/>
        {/* <LoadingOverlay/> */}
        <Nav />
        <Hero />
        <About />
        <Room />
        <Facilities />
        <Video />
        <Choose />
        <Restaurant />
        {/* <Review /> */}
        <ReviewCarousel />
        <Offer />
        <Achivment/>
        <Reservation />
        <Staff />
        <Community />
        <Blog />
        <Faq />
        <Instagram />
        <Update />
        <Map />
        <Footer />
      </div>
    </>
  )
}

export default App
