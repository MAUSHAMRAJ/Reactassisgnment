import React from 'react'

function Upcomingevent(props) {
  return (
    <div className='container'>
        <div className='col_content col_content_updateresponsive'>
            <div className='col_content_heading1'>
                <div className='col_content_heading'>
                    <h3 className='col_content_heading'>Upcoming event</h3>
                    <p className='col_para'>View More <span><img src="./image/icon-right.png" alt="icondown" /></span></p>
                </div>
            </div>
            <div className='cardrow'>
            {props.card.map((item)=>{
                return(
                    <div className='event_sub'>
                    <div className='event_img'>
                    <img src={item.src} alt="" />
                    </div>
                    <div className='event_content'>
                        <h3 className='event_heading'>4 October, 2021</h3>
                        <p className='event_para'>{item.para}</p>
                        <p className='event_author'>{item.author}</p>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Upcomingevent