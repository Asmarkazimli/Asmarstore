import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import ProductsProvider from './contexts/ProductsContext'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Home from '../pages/Home'
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";


      
      

function App() {
  const [showCartPage,setShowCartPage]=useState(false);
  return (
    
    <ProductsProvider>
      <BrowserRouter>
     
      <Routes>
        <Route path='/'  element={ <Navbar setShowCartPage={setShowCartPage}/>}>
    
    <Route   index element={<Home showCartPage={showCartPage} setShowCartPage={setShowCartPage}/>}/>
    <Route   path='/about' element={<About  showCartPage={showCartPage}  setShowCartPage={setShowCartPage}/>}/>
    <Route   path='/contact' element={<Contact showCartPage={showCartPage} setShowCartPage={setShowCartPage}/>}/>
         </Route>
         </Routes>
      
        </BrowserRouter>
    </ProductsProvider>
    
  
  )
}

export default App