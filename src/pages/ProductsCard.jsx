import React from 'react'
import { ProductsFilter} from './Products'
function ProductsCard({Items: products}) {
  return (

    <div className='ProductsCard'>
      <div>
      <h1>Products</h1>
      <ProductsFilter/>
      <div className="products-container">
        {products.map((product) => (
            
     <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title.substring(0,10)}...</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button> {}

          </div>
         
        ))}
      </div>
    </div>
    </div>
  )
}

export default ProductsCard;