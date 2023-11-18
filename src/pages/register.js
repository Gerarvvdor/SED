import React from "react"; 

function Register(){
    return(
        <>      
        <div id="register-container" class="container-fluid">
            <h1>Registro</h1>
            <form class="row g-3">
            <div class="col-md-4">
                <label for="validationDefault01" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="validationDefault01" value="Nombre" style={{opacity: '50%'}} required/>
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="validationDefault02" value="Apellido" style={{opacity: '50%'}} required/>
            </div>
            <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">Email</label>
                <input type="text" class="form-control" id="validationDefault02" value="ejemplo@dominio.com" style={{opacity: '50%'}} required/>
            </div>
            <div class="col-md-4">
                <label for="validationDefault03" class="form-label">Contraseña</label>
                <input type="text" class="form-control" id="validationDefault03" value="********" style={{opacity: '50%'}} required/>
            </div>
            <div class="col-md-4">
                <label for="validationDefault04" class="form-label">Confirmar contraseña</label>
                <input type="text" class="form-control" id="validationDefault03" value="********" style={{opacity: '50%'}} required/>
            </div>
            <div class="col-md-3">
                <label for="validationDefault05" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="validationDefault05" value="+503 25252525" style={{opacity: '50%'}} required/>
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                <label class="form-check-label" for="invalidCheck2">
                    Aceptar terminos y condiciones
                </label>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Finalizar</button>
            </div>
            </form>
        </div>
        </>
    );
}

export default Register;