import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import './CartPage.scss'

function CartPage(props) {
  const { cartProducts, deleteCartProduct, setCartProductCount } = useContext(ProductsContext);
  const { setShowCartPage } = props;
  let totalPrice = 0;
  return (
    <div className='cartpage'>
      <span onClick={() => setShowCartPage(false)}>
        <i className='bi bi-x-lg '></i></span>
      <div className='cart__products'>
        {
          cartProducts.map(item => {
            totalPrice += item.price * item.count;
            return (
              <div className='cart__product' key={item.id}>
                <div className='cart__product__left'>
                  <div className='cart__product__image'>

                    <img className='p1' src={item.img} alt="product" />
                  </div>
                  <div className='cart__product__text'>
                    <p>{item.title}</p>
                    <p>{item.price}$</p>
                    <p className='cart__product__count'>Count
                      <button onClick={() => setCartProductCount(item.id, -1)}   >-</button>
                      {item.count}
                      <button onClick={() => setCartProductCount(item.id, +1)}>+</button>
                      <div className='trash'>
                        <span onClick={() => deleteCartProduct(item.id)} className='but'><i className='bi bi-trash-fill'></i></span>
                      </div>
                    </p>

                  </div>
                </div>

              </div>
            )
          })
        }

        {
          totalPrice !== 0 && <h2 className='hh'>Total price: {totalPrice}$</h2>
        }

      </div>

    </div>
  )
}

export default CartPage