import React from 'react'
import productImage from '../images/classic-tee.jpg'

function Product() {
    return (
        <div className="mr-product-container">
            <div className="mr-product-imageContainer">
                <img src={productImage} alt="Product Image" className="mr-product-image"/>
            </div>
            <div>
                <h1>Classic Tee</h1>
                <p className="mr-bold">$75.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque et lacus consequat euismod ut id eros. Aliquam finibus ligula dictum risus feugiat, sit amet consectetur tellus posuere. In magna quam, rutrum a posuere et, dignissim ut nulla. Mauris sit amet commodo dolor. Nam sapien nulla, mollis ac varius eu, feugiat vel est. Praesent a nisi iaculis, tempor libero sed, tristique nunc. Maecenas luctus tempor eleifend. Aenean porta molestie finibus.</p>
                <div className="mr-flex">
                    <p className="mr-upper">Size</p>
                    <span>*</span>
                    <p></p>
                </div>
                <div>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                </div>
                <button className="mr-upper">Add To Cart</button>
                
            </div>
        </div>
    )
}

export default Product