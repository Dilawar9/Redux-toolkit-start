import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {


  
  return (
    <>
   
      <h3>Redux Toolkit</h3>
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/create' element={<Create />  } /> */}
     </Routes>
    </>
  )
}

export default App
