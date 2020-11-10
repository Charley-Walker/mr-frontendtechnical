import React, {useState} from 'react'


function Cart() {
    const [showCart, setShowCart] = useState(false)

    let cartDrop

    if(showCart){
        cartDrop = <div>This is the cart detail</div>
    }

    return (
        <div className="mr-cart">
            <p className="mr-cart-title"
                onClick={() => setShowCart(!showCart)}
            >
                My Cart ( 4 )
            </p>
            <div className="mr-cart-drop">
                {cartDrop}
                <div className="mr-cart-item">

                </div>
            </div>
        </div>
    )
}

export default Cart