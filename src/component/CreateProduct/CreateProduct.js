import React from 'react'
import CreateProductForm from './CreateProductForm'


const CreateProduct = (props) => {
 
   const createproduct = (product) => {
      props.createProduct(product)
   }

    return (
    <div>
    <CreateProductForm createProduct={createproduct}/>
    </div>
  )
}

export default CreateProduct
