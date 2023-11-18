import React from "react";

function Product(){
    return(
        <div class="col-md-4">
            <div class="product text-center"> <img src="" alt="imagen del producto" width="250"/>
                <div class="about text-left px-3">
                    <h4 id="producto" >Producto</h4> 
                    <span class="text-muted">Categoría</span>
                    <h3 id="precio">$$</h3>
                </div> 
                <span class="dot">
                    <span class="inner-dot">
                    <i class="fa fa-plus"></i></span></span>
            </div>
        </div>
    );
}

export default Product;