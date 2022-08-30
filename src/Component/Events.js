import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import {Eventdata}from '../Database/Eventdata';
import moment from 'moment';

function Events(props) {
  return (
    <div className="container">
        <div className="col_content col_content-responsive">
        <div className="col_content_heading1">
        <div className="col_content_heading">
                    <h3 className='col_heading'>Upcoming Events</h3>
                    <p className='col_para'>View More <span><img src="./image/icon-right.png" alt="icondown" /></span></p>
                </div>
            </div>
            <div className="cardimage">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            navigation

            breakpoints={{
              768:{
                slidesPerView:2,
                spaceBetween:10,
              },
              992:{
                slidesPerView:3,
                spaceBetween:10,
              }
            }}
            >
            {Eventdata.map((item) => {
            return (<>
            <SwiperSlide>
              <div className='event_sub' style={{"margin-left":"0"}}>
                <div className='event_img'>
                <img src={item.src} alt="" />
                </div>
                <div className="event_content">
                <p className="event_para">{item.para}</p>
                <p className="event_author">{moment(props.publish).format("Do MMM YYYY")}<span>{item.author}</span></p>   
                </div>
              </div>
              </SwiperSlide>
              </>
            );
            })}
            </Swiper>
            </div>
        </div>
    </div>

  )
}

export default Events