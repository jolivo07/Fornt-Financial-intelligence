
export default function Modal() {

  return (
    <div className="my-auto">


      <p role="button" className="text-white m-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> LOGIN</p>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 border">
            <div className="modal-header">
              <h1 className="modal-title text-primary display-6 fw-semibold" id="staticBackdropLabel">Inicio de Sesion</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form method="post" id="logIn">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="sumbit" className="btn btn-primary" form="logIn">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
