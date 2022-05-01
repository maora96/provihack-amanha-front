import React, { useState } from "react";
import Benefits from "../../components/sections/benefits";
import Credit from "../../components/sections/credit";
import Resources from "../../components/sections/resources";
import Summary from "../../components/sections/summary";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("index");
  return (
    <>
      <div className="dashboard-container">
        <aside>
          <div className="sidebar-content">
            <img src="" className="logo" />

            <div className="sidebar-links">
              <div>
                <a href="">Dashboard</a>
              </div>
              <div>
                <a href="">Recursos</a>
              </div>
              <div>
                <a href="">Benefícios</a>
              </div>
              <div>
                <a href="">Crédito verde</a>
              </div>
            </div>
          </div>
          <div className="logout">Sair</div>
        </aside>
        {activeSection === "summary" && <Summary />}
        {activeSection === "resources" && <Resources />}
        {activeSection === "benefits" && <Benefits />}
        {activeSection === "credit" && <Credit />}
      </div>
    </>
  );
}
