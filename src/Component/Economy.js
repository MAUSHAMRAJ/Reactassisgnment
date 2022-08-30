import React from "react";
import Economydata from "../Database/Economydata";

function Economy() {
  return (
    <div className="container">
      <div className="economy_main">
        {Economydata.map((item) => {
          return (
            <div className="economy_card">
              <div className="economy_resimg">
              <img src={item.src} alt="" />
              <span className="premium_logo">PREMIUM</span>
              </div>
              <div className="economy_respara">
              <h3 className="menu_title title_response">{item.title}</h3>
              <p className="manu_left_para">{item.para}</p>
              <p className="manu_author_para">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="secondadvertisment">
        <h5 className="sideadvertisment_response " style={{textAlign: 'center'}}>Advertisement</h5>
        <img className="sideadd_img" src="./image/sideadd.png" alt="addimage" />

    </div>
    </div>
  );
}

export default Economy;
