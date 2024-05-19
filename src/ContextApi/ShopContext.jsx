import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'
export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart ={}
    for (let index = 0; index < all_product.length+1 ; index++) {
        cart[index] = 0
    }
    return cart
} 
const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    let getTotalCartAmount = ()=>{ 
        let totalAmount = 0
        for(let item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
            
            console.log('return total amount =>',totalAmount)
            return totalAmount
        }
    }
    console.log('total cart amount =>', getTotalCartAmount())
        const getTotalCartItems = ()=>{
            let totalItem = 0
            for(const item in cartItems)
                {
                    if(cartItems[item]>0)
                        {
                            totalItem += cartItems[item]
                        }
                }
        }
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
// if(cartItems[item] > 0){
            //     let itemInfo = all_product.find((product)=>product.id === Number(item))
            //      totalAmount += itemInfo.new_price * cartItems[item]
            // }