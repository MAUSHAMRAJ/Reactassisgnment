import React from 'react'
import Sideadd from './Sideadd'

function Follow() {
  return (
    <div className="container">
        <div className="follow_main">
        <div className="follow">
            <img src="./image/followtwitter.png" alt="folow-img" />
            <div className="follow_content">
            <p className="follow_para">VCCircle.com</p>
            <p className="follow_para">World Bank arm IFC to double down its investments into funds in 2022</p>
            </div>
        </div>
        <div className=" info">
            <h3>Infographic</h3>
            <img src="./image/info.png" alt="info" />
        </div>
        <div className="follow_add">
        <Sideadd/>
        </div>
        </div>
    </div>
  )
}

export default Follow