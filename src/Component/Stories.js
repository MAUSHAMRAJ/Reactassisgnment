import React from "react";
import { Cards } from "./Cards";
import PremiumImg from "./PremiumImg";

function Stories(props) {
  return (
    <div>
      <div className="container" key={props.item.stories_list[0].feid}>
        <div className="stories_main">
          <h3 className="editor_head">{props.item.section_name}</h3>
              <div className="cardimage1">
                {props.item.stories_list.map((item) => {
                  return (
                    <>
                    {/* // <div className="editior_premium"> */}
                    <Cards
                       authorslug={item.author_details[0].slug}
                       headingslug={item.industry_details[0].slug}
                       titleslug={item.slug}
                       imgSlug={item.slug}
                      contimgMain="card_content1"
                      imgclassdiv="stories_cardimage"
                      src={item.file_url}
                      heading={item.industry_details[0].name}
                      title={item.title}
                      publish={item.publish}
                      author={item.author_details[0].name}
                      contentcls="stories_card_text"
                      titlecls="morestories_title"
                      paracls="morestories_title_para"
                      authordate="stories_li_author"
                      authorcls="morestories_author_para"
                      premium={item.premium}
                    />
                    {/* {item.premium==="1"?<PremiumImg premiumclsname="premiumstories"/>:null} */}
                    {/* // </div> */}
                  </>
                  );
                })}
              </div>
            </div>
      </div>
    </div>
  );
}

export default Stories;
