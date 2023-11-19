import React,{ useState } from "react";
import Product from "./components/product";
import Catalog from "./pages/catalog";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

//Stylesheets//
import "./style/logIn.css";
import "./style/sidebar.css";
import "./style/newPublication.css";

//Pages//
import NewPublication from "./pages/newPublication";


function App() {
  return (
    <>
    <BrowserRouter>
    <div class="wrapper">
        <nav id="sidebar">
            <div class="sidebar-header">
                <h4>Tela-compro.com</h4>
            </div>
            
            <ul class="list-unstyled components">
                <Link to="/">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >Inicio</a>
                    </li>
                </Link>    
                <Link to="/newPub">
                    <li>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >Vender</a>
                    </li>
                </Link>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="" class="submit">Cerrar sesión</a>
                </li>
            </ul>
        </nav>

        
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" id="pagination">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Menú</span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">4</a>
                            </li>
                            <li>
                            <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
            <Route path="/newPub" element={<NewPublication/>}/>
            <Route path="/" element={<Catalog/>}/>
        </Routes> 
        </div>
    </div> 
    </BrowserRouter>
    </>
  );
}
export default App;
