import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdispaly-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
        <img src={product.image}  className='productdisplay-main-img' alt="" />
        </div>
      </div>
      <div className="productdisplay-rigth">
            <h1>{product.name}</h1>
            <div className="productdisplay-rigth-star">
               <img src={star_icon} alt="" /> 
               <img src={star_icon} alt="" /> 
               <img src={star_icon} alt="" /> 
               <img src={star_icon} alt="" /> 
               <img src={star_dull_icon} alt="" />
               <p>(122)</p> 
            </div>
            <div className="productdisplay-rigth-prices">
                <div className="productdisplay-rigth-price-old">${product.old_price}</div>
                <div className="productdisplay-rigth-price-new">${product.new_price}</div>           
            </div>
            <div className="productdisplay-rigth-description">
            Our Classic Cotton Crewneck T-Shirt is a versatile wardrobe essential, perfect for everyday wear. Made from 100% premium lightweight cotton, this t-shirt offers unparalleled comfort and durability. The breathable fabric ensures you stay cool and comfortable all day long, whether you're running errands, hitting the gym, or lounging at home. 
            </div>
            <div className="productdispaly-rigth-size">
                <h1>Select size</h1>
                <div className="productdisplay-rigth-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>X</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-rigth-category'><span>Category:</span>Women,T-shirt,Crop Top</p>
            <p className='productdisplay-rigth-category'><span>Tags:</span>#modern #newcollections #stylish #western</p>
      </div>
    </div>
  )
}

export default ProductDisplay
