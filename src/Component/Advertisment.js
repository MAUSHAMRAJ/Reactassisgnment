import React from 'react'

function Advertisment(props) {
  return (
    <div className="container">
    <div className={props.advertiseclass}>
    
    <div className='add-content'>
    <p className="advertis_text">Advertisement</p>
        <img className="advertis_img"  src={props.img} alt="addimage" width={props.width}/>
    </div>
    </div>
    </div>
  )
}

export default Advertisment