import React from 'react'

export default function Content() {
  return (
    <div className="content-wrapper">
      <div>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
</div>
      <body>
        <div>
  <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3"><span>Iniciar Sesión</span><span>Registrarse</span></h6>
            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label htmlFor="reg-log" />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Iniciar Sesión</h4>
                      <div className="form-group">
                        <input type="email" className="form-style" placeholder="Correo" />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" className="form-style" placeholder="Contraseña" />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <a href="index2.html" className="btn mt-4">Iniciar
                        Sesión</a>
                      <p className="mb-0 mt-4 text-center"><a href="aun no se" className="link">Olvidasté la contraseña?</a></p>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-3 pb-3">Registrarse</h4>
                      <div className="form-group">
                        <input type="text" className="form-style" placeholder="Nombre completo" />
                        <i className="input-icon uil uil-user" />
                      </div>
                      <div className="form-group mt-2">
                        <input type="tel" className="form-style" placeholder="Numero de telefono" />
                        <i className="input-icon uil uil-phone" />
                      </div>
                      <div className="form-group mt-2">
                        <input type="email" className="form-style" placeholder="Correo electronico" />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" className="form-style" placeholder="Contraseña" />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <a href="login.html" className="btn mt-4">Registrarse</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </body>
    </div>
    
  )
}
