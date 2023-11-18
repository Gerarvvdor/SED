import React from "react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/logIn.css";


function LogIn() {


    return (
        <>
            <div class="sidenav">
                <div class="login-main-text">
                    <h2>SED<br/> Login</h2>
                    <p>Inicie sesión o registrese</p>
                </div>
            </div>
            <div class="main">
                <div class="col-md-6 col-sm-12">
                    <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>Usuario</label>
                            <input type="text" class="form-control" placeholder="Usuario"/>
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" placeholder="Contraseña"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        <button type="submit" class="btn btn-secondary">Registrar</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;
