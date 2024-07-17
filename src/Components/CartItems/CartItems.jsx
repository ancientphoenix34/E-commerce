import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {

    const {all_product,cartItems,removeFromCart,getTotalAmount}=useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
      </div>
      <hr />
      {all_product.map((e,i)=>{

// The line if(cartItems[e.id]>0) is checking if the quantity of a specific item in the cart is greater than 0. This condition verifies whether the item is already in the cart (quantity greater than 0) before executing the code inside the if block.
        if(cartItems[e.id]>0){
          return <div key={i}>
        <div className="cartitems-format cartitems-format-main">
          <img src={e.image} className='carticon-product-icon' alt="" />
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>${e.new_price*cartItems[e.id]}</p>
          <img src={remove_icon} className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}}alt="" />
        </div>
        <hr />
      </div>
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total in cart:</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Sub Total</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode,enter it here</p>
          <div className="cartitems-promobox">
            <input type="text"  placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
