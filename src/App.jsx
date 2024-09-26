import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Common/Header/nav';
import Homepage from './component/Home/Homepage';
import Footer from './component/Common/Footer/footer';
import Myself from './component/UI/Myself';
import Testimonials from './component/UI/Testimonials';
import Offerstomyclients from './component/UI/Offerstomyclients';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <Nav/>
    <Homepage />
    <Myself/>
    <Offerstomyclients/> 
    <Testimonials/>
  <Footer/>

    </>
  )
}

export default App
