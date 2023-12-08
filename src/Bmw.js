import React from "react";
import "./Bmw.css";

export default function Bmw() {
  return (
    <>
      <div className="grand">
        <div className="outer_circle">
          <div className="half_circle">
            <div className="b">B</div>
            <div className="m">M</div>
            <div className="w">W</div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="inner_circle1"></div>
            <div className="inner_circle2"></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="inner_circle3"></div>
            <div className="inner_circle4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
