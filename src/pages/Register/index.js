import React from "react";

export default function Register() {
  return (
    <>
      <div className="register-container">
        <aside>
          <div className="sidebar-container">
            <img src="" />
            <h1>Cadastro</h1>
            <p>Sustentável em todos sentidos!</p>

            <form>
              <div>
                <label>Representante legal</label>
                <input type="text" />
              </div>
              <div>
                <label>CNPJ</label>
                <input type="email" />
              </div>
              <div>
                <label>E-mail</label>
                <input type="text" />
              </div>
              <div>
                <label>Senha</label>
                <input type="password" />
              </div>

              <div className="buttons">
                <button>Cadastre-se</button>
              </div>
            </form>
          </div>
        </aside>
        <img src="" className="login-image" />
      </div>
    </>
  );
}
