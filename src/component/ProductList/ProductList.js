import React from 'react'
import Products from './Products'



const ProductList = (props) => {
  
  console.log(props.newProduct);
  return (
    <div>
      
      {
        props.newProduct.map((product)=>{
          return <Products
              id={product?.pID}
              price={product?.pPrice}
              name = {product?.pName}
              desc={product?.desc}
              avalaible={product?.pAvalaible}
              image={product?.pImgUrl}
             ></Products>
        })
      }

    </div>
  )
}

export default ProductList
