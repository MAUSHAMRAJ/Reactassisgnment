import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';

function Col2(props) {

  return (
<>
    <div className="container">
        <div className="col_content">
        <div className="col_content_heading1">
        <div className="col_content_heading">
                    <h3 className='col_heading'>{props.title}</h3>
                    <p className='col_para'>View More <span><img src="./image/icon-right.png" alt="icondown" /></span></p>
                </div>
            </div>
            <div className="col_cardimage">
               <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={4}
              slidesPerView={4}
              navigation
              > 
            {props.card.map((item) => {
            return (<>
            <SwiperSlide>
              <div className='col2_content_img' style={{"margin-left":"0"}}>
                <img src={item.src} alt="" />
                <p className="col_text">{item.para}</p>
                <p className="col_author">{item.author}</p>
              </div>
              </SwiperSlide>
              </>
            );
            })}
            </Swiper>
            </div>
        </div>
    </div>

    </>
  )
}

export default Col2