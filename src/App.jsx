import { useState } from 'react'

import './App.css'
import Nav from './component/Common/Header/nav';
import Homepage from './component/Pages/Homepage';
import Footer from './component/Common/Footer/footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutP from './component/Pages/AboutP';
import ContactP from './component/Pages/ContactP';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
  


<BrowserRouter>
<Nav/>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/about' element={<AboutP/>}/>
<Route path='/contact' element={<ContactP/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App
