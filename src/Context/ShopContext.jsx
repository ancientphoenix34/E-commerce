import React,{createContext, useEffect, useState} from 'react'



export const ShopContext = createContext(null);

 // for cart
 const getDefault = () =>{
    let cart={};
    for(let index=0;index<300+1;index++){
   cart[index]=0;
    }
return cart;
}


const ShopContextProvider = (props) => {

    const [all_product,setAll_product]=useState([]);
    const [cartItems,setCartItems] = React.useState(getDefault());

    useEffect(()=>{
fetch('http://localhost:3000/allproducts')
.then((response)=>response.json())
.then((data)=>setAll_product(data))

if(localStorage.getItem("auth-token")){
  fetch('http://localhost:3000/getcart',{
    method:'POST',
    headers:{
        Accept:"application/form-data",
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':"application/json",
    },
    body:"",
  }) .then((response)=>response.json())
  .then((data)=>setCartItems(data))
}
    },[])
   


    const addToCart =(itemId) =>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
if(localStorage.getItem("auth-token")){
    fetch('http://localhost:3000/addtocart',{
        method:'POST',
        headers:{
            Accept:"application/form-data",
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':"application/json",
        },
        body:JSON.stringify({"itemId":itemId}),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));

}
}
    const removeFromCart =(itemId) =>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
if(localStorage.getItem("auth-token")){
    fetch('http://localhost:3000/removefromcart',{
        method:'POST',
        headers:{
            Accept:"application/form-data",
            'auth-token':`${localStorage.getItem("auth-token")}`,
            'Content-Type':"application/json",
        },
        body:JSON.stringify({"itemId":itemId}),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));  
}
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        if (all_product.length > 0) {
          for (const item in cartItems) {
            if (cartItems[item] > 0) {
              const itemInfo = all_product.find((product) => product.id === Number(item));
              if (itemInfo) {
                totalAmount += itemInfo.new_price * cartItems[item];
              }
            }
          }
        }
        return totalAmount;
      };

const getTotalCartItems=()=>{
    let totalItems=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItems+=cartItems[item]
        }
    }
    return totalItems;
}

    const contextValue = {all_product,cartItems,getTotalCartItems,addToCart,removeFromCart,getTotalAmount};  
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export  default ShopContextProvider