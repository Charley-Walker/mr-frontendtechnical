import React, {useState} from 'react'


function Cart() {
    const [showCart, setShowCart] = useState(false)

    let cartDrop

    if(showCart){
        cartDrop = <div>This is the cart detail</div>
    }

    return (
        <div className="mr-cart">
            <div className="mr-cart-title"
                onClick={() => setShowCart(!showCart)}
            >
                <p className="mr-cart-titleText">My Cart ( 4 )</p>
            </div>
            <div className="mr-cart-drop">
                {cartDrop}
                <div className="mr-cart-item">

                </div>
            </div>
        </div>
    )
}

export default Cart