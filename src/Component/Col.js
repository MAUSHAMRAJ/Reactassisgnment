import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import { Cards } from "./Cards";
// import PremiumImg from "./PremiumImg";

function Col(props) {
  return (
    <>
      <div className="container" key={props.item.stories_list[0].feid}>
        <div className="col_content">
          <div className="col_content_heading1">
            <div className="col_content_heading">
              <h3 className="col_heading">{props.item.section_name}</h3>
              <p className="col_para">
                View More{" "}
                <span>
                  <img src="./image/icon-right.png" alt="icondown" />
                </span>
              </p>
            </div>
          </div>
          <div className="col_cardimage">
            {/* <div className="cardimage"> */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4.3}
              navigation

              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                400:{
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                },
                668:{
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // 900:{
                //   slidesPerView: 3,
                //   spaceBetween: 20,
                // },
                998:{
                  slidesPerView:4,
                  spaceBetween: 20,
                },
                1024:{
                  slidesPerView: 4.3,
                  spaceBetween: 20,
                }

              }}
            >
              {props.item.stories_list.map((item, index) => {
                // if(index===0) return null;
                return (
                  <SwiperSlide>
                    {/* <div className="editior_premium"> */}
                      <Cards
                        className="col_content_Main"
                        contimgMain="col_content_img"
                        authorslug={item.author_details[0].slug}
                        headingslug={item.industry_details[0].slug}
                        titleslug={item.slug}
                        imgSlug={item.slug}
                        imgclassdiv="col_content_img_main"
                        src={item.file_url}
                        contentcls="col_content_img_content"
                        // titlecls="heading_title"
                        // heading={item.industry_details[0].name}
                        paracls="col_text"
                        title={item.title}
                        nameshow="shwNme"
                        plusone="plusONE"
                        publish={item.publish}
                        authorcls="col_author_para1"
                        authordate="col_li_author"
                        premium={item.premium}
                        // imgcls="economy_resimg_img"
                        author={item.author_details[0].name}
                        incrval={
                          item.author_details.length > 1
                            ? item.author_details[1].name
                            : " "
                        }
                        one={item.author_details.length > 1 ? "+1" : null}

                      />
                      {/* {item.premium === "1" ? (
                        <PremiumImg premiumclsname="premiumfounder" />
                      ) : null} */}
                    {/* </div> */}
                  </SwiperSlide>
                );
              })}
              ;
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Col;
