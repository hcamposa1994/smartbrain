import React from "react";
import Tilty from "react-tilty";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty className="tilty br2 shadow-2" glare scale={1.05} maxGlare={0.5}>
        <div className="inner pa4">
          <img style={{ paddingTop: "5px" }} src={brain} alt={"brain logo"} />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
