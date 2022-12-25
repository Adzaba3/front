import React, { useState } from 'react'
import './app.css'
import CreateProduct from './component/CreateProduct/CreateProduct'
import ProductList from './component/ProductList/ProductList'


const products = [
    {
      pID: 1,
      pName: "banana",
      pPrice: 14,
      desc: "pratiquer l’évaluation et la revue de la progression",
      pAvalaible: false,
      pImgUrl: ''
    },
    {
      pID: 1,
      pName: "banana",
      pPrice: 14,
      desc: "pratiquer l’évaluation et la revue de la progression",
      pAvalaible: true,
      pImgUrl: ''
    },
    {
      pID: 1,
      pName: "banana",
      pPrice: 14,
      desc: "pratiquer l’évaluation et la revue de la progression",
      pAvalaible: true,
      pImgUrl: ''
    }
  ]



const App = () => {
  
  let [newProduct, updateproduct] = useState(products);
  
  const createProduct = (product) => {
    updateproduct([product, ...newProduct]);
  }

  return (
    <div className='app'>
    <CreateProduct createProduct={createProduct}></CreateProduct>  
    <ProductList newProduct={newProduct}></ProductList>
    </div>
  )
}

export default App

