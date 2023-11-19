import React from "react";
import Product from "../components/product";

function Catalog(){
    return(
        <>
        <h2>En venta</h2>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center ">
                {/* Productos en base a la API */}
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Product/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Catalog;