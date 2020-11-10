import React, {useState} from 'react'
import Product from './Product'

function Cart() {
    const [showCart, setShowCart] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    
    let items

    let cartDrop

    if(cartCount>0){
        for(var i = 0; i <= cartCount; i++){

        }
    }
    else{
        items = <p>Your cart is empty</p>
    }

    if(showCart){
        cartDrop = <div  className="mr-cart-drop">{items}</div>
    }

    return (
        <div className="mr-cart">
            <div className="mr-cart-title"
                onClick={() => setShowCart(!showCart)}
            >
                <div className="mr-cart-titleText mr-flex">
                    <p className="mr-carttext">My Cart </p>
                    <p className="fa fa-shopping-cart mr-carticon"></p>
                    <p className="mr-cartCount">( {cartCount} )</p>
                </div>
            </div>
            <div>
                {cartDrop}
            </div>
            <Product
                updateCart={() => setCartCount(cartCount + 1)}
                
            />
        </div>

        
    )
}

export default Cart