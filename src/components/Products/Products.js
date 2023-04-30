import React from 'react'
import './Products.scss';
import Product from '../Product/Product';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

function Products() {
  const {products,addCartProduct} =useContext(ProductsContext);
  return (
    
    <div className='products'>
        <h1>Our Products</h1>
<div className='products__content'>
{
  products.map(p => <Product product = {p}    addCartProduct={addCartProduct}/>)
}

</div>

    </div>
  )
}

export default Products