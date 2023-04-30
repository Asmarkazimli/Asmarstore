import React from 'react'
import './Product.scss'


const Product = props => {
  const{title,price,img}=props.product;
  const {addCartProduct}=props;
  return (
    <div className='product'>
    

<img src={img}  alt="product" />
<h2>{title}</h2>
<div className='but'>
<span>{price}$</span>
<button onClick={()=>addCartProduct(props.product)}    >Buy now</button>
</div>

</div>
  )
}

export default Product