import React from 'react'
import Popular from './Components/Popular'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Animeitem from './Components/Animeitem'
import Home from './Components/Home'
import Gallery from './Components/Gallery'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/anime/:id" element={<Animeitem/>} />
            <Route path="/character/:id" element={<Gallery/>} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
