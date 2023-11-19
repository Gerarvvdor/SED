import React from "react";
import "../style/products.css";

import imagen from "../drawable/16724746290185.jpg";

function Product(){
    return(
        <div class="card">
            <div class="imgBox">
                <img src={imagen} alt="mouse corsair" class="mouse"/>
            </div>
            <div class="contentBox">
                <h3>Mouse Corsair M65</h3>
                <h2 class="price">61.<small>98</small> €</h2>
                <a href="#" class="buy">Buy Now</a>
            </div>
        </div>
    );
}

export default Product;