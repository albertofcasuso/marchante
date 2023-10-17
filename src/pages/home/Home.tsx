import { HomeModel } from "./HomeModel";
import "./Home.scss";

const Home = () => {
  const {
    register,
    handleSubmit,
    onSubmitRegister,
    onSubmitLogin,
    handleSubmitLogin,
    registerLogin,
  } = HomeModel();
  return (
    <>
      <section className="container my-5">
        <div className="row justify-content-around">
          <div className="col-md-8 text-center mb-2">
            <p className="h2 subtitulo">
              ¡Hola! Bienvenidx a
              <br />
              <span className="logotipo">Mi marchante</span>
            </p>
            <p
              className="text-muted"
              style={{ display: "none" }}
              id="postal_code"
            >
              Escribe tu código postal qué quieras buscar y disfruta de
              <b>
                <i>tu mercado en línea</i>
              </b>
            </p>
          </div>

          <article
            className="col-md-5 rounded text-center mt-4 py-3 bg-mercados"
            id="mercadoPostalCode"
            style={{ display: "none" }}
          >
            <h3 className="subtitulo rounded p-2 bg-transparencia">
              MERCADOS <i className="fas fa-warehouse"></i>
            </h3>
            <form>
              <div className="form-row">
                <div className="col-md-6">
                  <label
                    htmlFor="suggestions-mercados"
                    className="text-white text-shadow"
                  >
                    Selecciona tu código postal
                  </label>
                  <select
                    className="selectpicker1 form-control"
                    data-live-search="true"
                    id="suggestions-mercados"
                    // onChange="setMarketToFind('mercado')"
                  >
                    <option value="">CP...</option>
                  </select>
                </div>
                <div className="col-md-6 mt-2 mt-md-0">
                  <label htmlFor="mercados" className="text-white text-shadow">
                    Selecciona tu mercado
                  </label>
                  <select
                    className="form-control mt-md-4"
                    id="mercados"
                  ></select>
                </div>
              </div>
              <button
                className="btn btn-primary mt-4 enter--button"
                id="enter-mercado"
              >
                ENTRAR
              </button>
            </form>
          </article>

          <article
            className="col-md-5 rounded text-center py-3 bg-tianguis mt-4"
            id="tianguisPostalCode"
            style={{ display: "none" }}
          >
            <h3 className="subtitulo rounded p-2 bg-transparencia">
              TIANGUIS <i className="fas fa-store"></i>
            </h3>
            <form>
              <div className="form-row">
                <div className="col-md-6 wrapper-results">
                  <label
                    htmlFor="suggestions-mercados"
                    className="text-white text-shadow"
                  >
                    Selecciona tu código postal
                  </label>
                  <select
                    className="selectpicker2 form-control"
                    data-live-search="true"
                    id="suggestions-tianguis"
                    //onChange="setMarketToFind('tianguis')"
                  >
                    <option value="">CP...</option>
                  </select>
                </div>
                <div className="col-md-6 mt-2 mt-md-0">
                  <label htmlFor="tianguis" className="text-white text-shadow">
                    Selecciona tu tianguis
                  </label>
                  <select
                    className="form-control mt-md-4"
                    id="tianguis"
                  ></select>
                </div>
              </div>
              <button
                className="btn btn-primary mt-4 enter--button"
                id="enter-tianguis"
              >
                ENTRAR
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="container mb-5" id="registroLogin">
        <div className="row justify-content-around text-center">
          <article
            className="col-md-5 border-left border-right border-secondary"
            id="registro"
          >
            <form onSubmit={handleSubmit(onSubmitRegister)}>
              <h4 className="mb-4 titulo">Regístrate</h4>
              <hr />

              <div className="form-group">
                <label htmlFor="tipoCliente">Selecciona tu tipo</label>
                <select
                  className="form-control"
                  id="tipoCliente"
                  // onBlur="checkType()"
                  // onChange="checkType()"
                  {...register("tipoCliente")}
                >
                  <option>Locatario</option>
                  <option>Cliente</option>
                </select>
              </div>

              <div id="disapearCustommer">
                <div className="form-group">
                  <label htmlFor="mercadoTianguis">Tu mercado o tianguis</label>
                  <select
                    className="form-control"
                    id="mercadoTianguis"
                    {...register("mercadoTianguis")}
                    // onblur="checkData()"
                    //onChange={verifyTypeMarket()}
                  >
                    <option>Mercado</option>
                    <option>Tianguis</option>
                  </select>
                  <label htmlFor="zonaRegistro">Selecciona tu zona</label>
                  <select
                    className="form-control"
                    id="zonaRegistro"
                    {...register("zonaRegistro")}
                    // onblur="checkData()"
                  >
                    <option>CDMX Centro</option>
                    <option>CDMX Norte</option>
                    <option>CDMX Oriente</option>
                    <option>CDMX Poninete</option>
                    <option>CDMX Sur</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mercado">Selecciona tu mercado</label>
                  <select
                    className="form-control"
                    id="mercado"
                    data-live-search="true"
                    {...register("mercado")}
                    // onblur="checkData()"
                  ></select>
                  <label htmlFor="local">Escribe el número de tu local</label>
                  <input
                    type="number"
                    className="form-control"
                    id="local"
                    {...register("local")}
                    // onblur="checkData()"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput" id="label--name">
                  Escribe el nombre de tu local
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre"
                  {...register("nombreLocal")}
                  // onblur="checkData()"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Escribe tu correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="micorreo@correo.com"
                  {...register("email")}
                  //onBlur="checkData()"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Escribe tu contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="*****"
                  // onblur="checkPass()"
                  {...register("password")}
                />
              </div>
              <div className="form-group form-check text-black-50 small">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  {...register("termsAndConditions", { required: true })}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Acepto Términos y Condiciones
                </label>
              </div>
              <button
                // onclick="register()"
                type="submit"
                className="btn btn-primary"
                id="submit"
              >
                Registrarme
              </button>
            </form>
          </article>

          <article
            className="col-md-5 border-left border-right border-secondary"
            id="login"
          >
            <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
              <h4 className="mb-4 mt-5 mt-md-0 titulo">Inicia Sesión</h4>
              <hr />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Escribe tu correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  aria-describedby="emailHelp"
                  placeholder="micorreo@correo.com"
                  {...registerLogin("correo")}
                  // onblur="checkDataLogin()"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Escribe tu contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="*****"
                  {...registerLogin("password")}
                  // onblur="checkDataLogin()"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkLogin"
                  {...registerLogin("remember")}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Recordar correo
                </label>
                <p>
                  <a
                    className="small"
                    data-toggle="modal"
                    data-target="#forgot-password"
                    style={{ color: "dodgerblue", cursor: "pointer" }}
                  >
                    Olvide mi contraseña
                  </a>
                </p>
              </div>
              <button
                className="btn btn-primary"
                id="submitLogin"
                type="submit"
                // onclick="login(false)"
              >
                Iniciar Sesión
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
