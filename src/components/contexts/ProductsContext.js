import React from 'react'
import { createContext, useState, useEffect } from 'react'
import cart1 from '../img/1.jpg'
import cart2 from '../img/2.jpg'
import cart3 from '../img/3.jpg'
import cart4 from '../img/4.jpg'
import cart5 from '../img/5.jpg'
import cart6 from '../img/6.jpg'
import cart7 from '../img/7.jpg'
import cart8 from '../img/8.jpg'
export const ProductsContext = createContext();
function ProductsProvider(props) {
  const [products, setProducts] = useState(
    [
      { id: 1, title: "Amazonian clay gem powder foundation", price: 86, img: cart1 },
      { id: 2, title: "Tartelette™ energy Amazonian clay palette", price: 112, img: cart2 },
      { id: 3, title: "Reach for the clouds eyeshadow palette", price: 75, img: cart3 },
      { id: 4, title: "Travel-size maracuja juicy lip balm", price: 28, img: cart4 },
      { id: 5, title: "Quench lip rescue", price: 41, img: cart5 },
      { id: 6, title: "Tartelette™ vanity palette", price: 63, img: cart6 },
      { id: 7, title: "30-second eyes shadow", price: 56, img: cart7 },
      { id: 8, title: "Shape tape™ glow bar", price: 106, img: cart8 }
    ]
  )
  const [cartProducts, setCartProducts] = useState([]);
  const addCartProduct = product => {
    for (let i = 0; i < cartProducts.length; ++i) {
      if (product.id === cartProducts[i].id) {
        ++cartProducts[i].count;
        setCartProducts([...cartProducts]);
        return;
      }
    }
    setCartProducts([...cartProducts, { ...product, count: 1 }])
  }

  const setCartProductCount = (id, value) => {
    for (let i = 0; i < cartProducts.length; ++i) {
      if (id == cartProducts[i].id) {
        if (cartProducts[i].count + value > 0) {
          cartProducts[i].count += value;
          setCartProducts([...cartProducts]);

        }

      }
    }
  }

  const deleteCartProduct = id => setCartProducts(cartProducts.filter(item => item.id !== id));
  return (
    <ProductsContext.Provider value={{ deleteCartProduct, setCartProductCount, products, addCartProduct, cartProducts }}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider