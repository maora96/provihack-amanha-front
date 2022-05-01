import React from "react";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <aside>
          <div className="sidebar-container">
            <img src="" />
            <h1>Login</h1>
            <p>Sustentável em todos sentidos!</p>

            <form>
              <div>
                <label>E-mail</label>
                <input type="email" />
              </div>
              <div>
                <label>Senha</label>
                <input type="password" />
              </div>

              <div className="buttons">
                <button>Entrar</button>
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
