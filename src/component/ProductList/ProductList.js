import React from 'react'
import Products from './Products'


const products = [
    {
      pID: 1,
      pName: "banana",
      pPrice: 14,
      desc: "pratiquer l’évaluation et la revue de la progression",
      pAvalaible: false
    },
    {
      pID: 1,
      pName: "banana",
      pPrice: 14,
      desc: "pratiquer l’évaluation et la revue de la progression",
      pAvalaible: true
    },
    {
      pID: 1,
      pName: "banana",
      pPrice: 14,
      desc: "pratiquer l’évaluation et la revue de la progression",
      pAvalaible: true
    }
  ]
const ProductList = () => {
  return (
    <div>
      <Products
      id={products[0].pID}
      name={products[0].pName}
      price={products[0].pPrice}
      avalaible={products[0].pAvalaible}
      desc={products[0].desc}
      >
        <p>ADZABA EKO Leprodige : Ballon D'or Polytechnique Yaounde 2023</p>
      </Products>
      <Products
        id={products[1].pID}
        name={products[1].pName}
        price={products[1].pPrice}
        avalaible={products[1].pAvalaible}
        desc={products[1].desc}>
          <p>ADZABA EKO Leprodige : Meilleur Mileu de Terrain Polytechnique Yaounde 2023</p>
        </Products>
        
        <Products
        id={products[2].pID}
        name={products[2].pName}
        price={products[2].pPrice}
        avalaible={products[2].pAvalaible}
        desc={products[2].desc}>
          <p>ADZABA EKO Leprodige : Meilleur Recuperateur Polytechnique Yaounde 2023</p>
        </Products>
    </div>
  )
}

export default ProductList
