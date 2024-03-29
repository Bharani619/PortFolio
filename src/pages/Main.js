import React from "react";
import Coder from "../components/Animation/Coder";
import Zoom from "react-reveal/Zoom";
import { main } from "../portfolio";
import TypeWriter from "../Typewriter/typewriter";
import "./Main.css";

function Main() {
  return (
    <section className="mainX" id="main">
      <div className="fluid-container">
        <Zoom duration={1000}>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="mobile">
                <h1 className="main-title n" id="name">
                  <TypeWriter />
                </h1>
                <h1 className="main-title d">{main.doamin}</h1>
                <a href={main.resume}  target="_blank" className="btn btn-lg hide">
                  <span>RESUME</span>
                </a>
                <a href={main.linkedin}  target="_blank" className="btn btn-lg hide">
                  <span>LINKEDIN</span>
                </a>
                <a href={main.github}  target="_blank" className="btn btn-lg hide">
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 ani">
              <Coder />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Main;
