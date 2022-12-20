import React from 'react'
import './product.css'
import ProductDetails from './ProductDetails'

const Products = (props) => {
  const badgclass = props.avalaible?'bg-success':'bg-danger'
  console.log('product component ');
  return (
    <div className='product'>
    <div className='container'>
    <h1>{props.name}</h1>
    <span>{props.desc}</span>
    <ProductDetails price={props.price} avalaible={props.avalaible} classN={badgclass}/>
    {props.children}
    </div>
    </div>
  )
}

export default Products
