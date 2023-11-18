import React from "react";
import Product from "../components/product";

function Catalog(){
    return(
        <>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center ">
                {/* Productos en base a la API */}
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
        </>
    );
}

export default Catalog;