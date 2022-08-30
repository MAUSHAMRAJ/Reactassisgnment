import React from "react";
import Cardsskeleton from "./Cardsskeleton";
import './Skeleton.css'
function Manuskeleton() {
  return (
    <div className="container skeletoncontaine">
        <div className="advertskeleton">
        </div>
      <div className="manu-main">
        <div className="manu-skeleton-left">
          <div className="heading"></div>
          <div className="title"></div>
          <div className="summary"></div>
          <div className="author-main">
            <span className="author"></span>
            <span className="author-name"></span>
          </div>

          <div className="manu-button"></div>
        </div>
        <div className="manu-skeleton-right">
         <div className="manu-img"></div>
        </div>
      </div>

    <div className="cardsk cardsk-responsive" style={{"margin-left":"0"}}>
        {
            [1,2,3,4].map((n)=>{
              return(
                <div className="cardmap">
                <Cardsskeleton/>
            </div>
              )
            })
        }
    </div>

    </div>
  );
}

export default Manuskeleton;
