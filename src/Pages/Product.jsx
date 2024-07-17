import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {

  const {all_product}= useContext(ShopContext);
  // id is declared during routing part in App.js

  // , when the component is rendered as part of a route that includes a productId parameter, such as /products/:productId, the productId will be extracted from the URL and can be used within the component.
  const {productId}=useParams();

  const product = all_product.find((e)=>
    e.id===Number(productId)
  )
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
