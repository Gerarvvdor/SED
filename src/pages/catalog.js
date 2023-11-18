import React from "react";
import Product from "../components/product";

function Catalog(){
    return(
        <>
        <div class="container mt-5">
            <div class="row d-flex justify-content-center g-1">
                {/* Productos en base a la API */}
                <Product/>
            </div>
        </div>
        </>
    );
}

export default Catalog;