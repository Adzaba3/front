import React, { useState } from 'react'

const CreateProductForm = () => {
    
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
        console.log(event.target.value);
    }

    const imgInputHandler = (event) => {
        console.log(event.target.value);
    }

  return (
    <div>
      <form>
        <input type="text" placeholder='Product Name' onChange={nameInputHandler}/>
        <input type="number" placeholder='0.02' min="0.01" step="0.01" onChange={priceInputHandler}/>
        <input type="text" placeholder='Product Description' onChange={descInputHandler}/>
        <input type="checkbox" onChange={checkInputHandler}/>
        <input type="file" onChange={imgInputHandler}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateProductForm
