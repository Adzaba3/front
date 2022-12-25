import React, { useState } from 'react'

const CreateProductForm = (props) => {
    
    let [pName, updateName] = useState('')
    let [pPrice, updatePrice] = useState('')
    let [pDesc, updateDesc] = useState('')
    let [pAvalaible, updateAvalaible] = useState('')
    let [imageUrl, updateImage] = useState('')

    const nameInputHandler = (event) => {
        updateName(event.target.value);
    }

    const priceInputHandler = (event) => {
       updatePrice(event.target.value);
    }

    const descInputHandler = (event) => {
        updateDesc(event.target.value);
    }

    const checkInputHandler = (event) => {
        updateAvalaible(event.target.checked);
    }

    const imgInputHandler = (event) => {
        updateImage(event.target.value)
    }

    const createproductInputHandler = (event) => {
        event.preventDefault();
        let product = {
            pID: 1,
            pName: pName,
            pPrice: pPrice,
            desc: pDesc,
            pAvalaible: pAvalaible,
            pImgUrl: imageUrl
    }
        updateName('')
        updatePrice('')
        updateAvalaible('')
        updateDesc('')
        updateImage('')
  
    props.createProduct(product)
  }

  return (
    <div>
      <form onSubmit={createproductInputHandler}>
        <input type="text" placeholder='Product Name' value={pName} onChange={nameInputHandler}/>
        <input type="number" placeholder='0.02' min="0.01" step="0.01" value={pPrice} onChange={priceInputHandler}/>
        <input type="text" placeholder='Product Description' value={pDesc} onChange={descInputHandler}/>
        <input type="checkbox" checked={pAvalaible} onChange={checkInputHandler}/>
        <input type="file" value={imageUrl} onChange={imgInputHandler}/>
        <button type="submit">envoyer</button>
      </form>
    </div>
  )
}

export default CreateProductForm
