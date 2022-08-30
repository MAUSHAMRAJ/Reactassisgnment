import React from "react";
import "./Skeleton.css";
import "./ResponsiveSkeleton.css";
function Cardsskeleton() {
  return (
    <div className="cardskeleton-main">
      <div className="cardskeleton-imgcontent">
      <div className="cardimgskeleton"></div>
      </div>
      <div className="card-skeleton-textcontent">
      <div className="cardheadingskeleton"></div>
      <div className="cardtitleskeleton"></div>
      <div className="card-author">
        <span className="card-author-date"></span>
        <span className="card-author-name"></span>
      </div>
      </div>
    </div>
  );
}

export default Cardsskeleton;
