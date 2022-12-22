import React from 'react'
import './app.css'
import CreateProduct from './component/CreateProduct/CreateProduct'
import ProductList from './component/ProductList/ProductList'

const App = () => {
  
  return (
    <div className='app'>
    <CreateProduct></CreateProduct>  
    <ProductList></ProductList>
    </div>
  )
}

export default App

