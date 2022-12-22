import React, {useState} from 'react'
import './product.css'
import Button from './Button'
import './productDetails.css'


const ProductDetails = (props) => {



let [productCount, updateProductCount] = useState(0)

const mouseEventHandle = () => {
  console.log("mouse event");
}



const incrementproduct = () => {
    updateProductCount(++productCount)
}

const decrementproduct = () => {
  updateProductCount(--productCount)
}


const displayFormattedProductCount = ()=>{
    return productCount > 0 ? productCount: 'Zero'
}
  
let badgclass = props.avalaible ? 'bg-success' : 'bg-danger'
  
return (
    
    <div onMouseOver={mouseEventHandle}>
    <h2>${props.price}</h2>
    <span className='bto'>
    <Button event={decrementproduct}>-</Button>
    <span>{displayFormattedProductCount()}</span>
    <Button event={incrementproduct}>+</Button>
    </span>
    <span className={badgclass}>{props.avalaible?'avalaible':'unavalaible'}</span>
    </div>
  )
}

export default ProductDetails
