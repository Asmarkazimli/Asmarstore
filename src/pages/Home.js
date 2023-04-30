import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Products from '../components/Products/Products'
import New from '../components/New/New'
import End from '../components/End/End'
import CartPage from '../components/CartPage/CartPage'
function Home(props) {
   const {showCartPage, setShowCartPage}=props;
  return (
    
    <>
   
    {
      showCartPage && <CartPage setShowCartPage={setShowCartPage} />
    }
    

      <Carousel/>
      <Products/>
      <New/>
      <End/>
      </>
  )
}

export default Home