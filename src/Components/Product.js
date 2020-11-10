import React, { useState } from 'react'
import productImage from '../images/classic-tee.jpg'


function Product( props ) {
    const [sizeSelected, setSizeSelected] = useState(null);

    return (
        <div>
            
            <div className="mr-product-container">
                <div className="mr-product-imageContainer">
                    <img src={productImage} alt="Product Image" className="mr-product-image"/>
                </div>
                <div>
                    <h1 className="mr-headertext">Classic Tee</h1>
                    <p className="mr-bold">$75.00</p>
                    <p className="mr-fontlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque et lacus consequat euismod ut id eros. Aliquam finibus ligula dictum risus feugiat, sit amet consectetur tellus posuere. In magna quam, rutrum a posuere et, dignissim ut nulla. Mauris sit amet commodo dolor. Nam sapien nulla, mollis ac varius eu, feugiat vel est. Praesent a nisi iaculis, tempor libero sed, tristique nunc. Maecenas luctus tempor eleifend. Aenean porta molestie finibus.</p>
                    <div className="mr-flex">
                        <p className="mr-upper mr-fontlight mr-bold">Size</p>
                        <p className="mr-required">*</p>
                        <p>{sizeSelected}</p>
                    </div>
                    <div>
                        <button 
                            className="mr-fontlight mr-sizebtn" 
                            onClick={() => setSizeSelected('S')}
                        >
                            S
                        </button>
                        <button 
                            className="mr-fontlight mr-sizebtn"
                            onClick={() => setSizeSelected('M')}
                        >
                            M
                        </button>
                        <button 
                            className="mr-fontlight mr-sizebtn"
                            onClick={() => setSizeSelected('L')}
                        >
                            L
                        </button>
                    </div>
                    <button 
                        className="mr-upper mr-fontdark mr-cartbtn"
                        onClick={props.updateCart}
                    >
                        Add To Cart
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Product