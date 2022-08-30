import React from "react";
import { Cards } from "./Cards";
import Sideadd from "./Sideadd";
import moment from "moment";
import {Link} from 'react-router-dom'
import PremiumImg from "./PremiumImg";
function Editor(props) {
  return (
    <div className="container" key={props.item.stories_list[0].feid}>
      <div className="editor_main" >
        <div className="editor_submain">
        <div className="editor_content1">
        <p className="editor_head">{props.item.section_name}</p>
          <div className="editor_premium" >
          <Link 
              to={props?.item.stories_list[0].slug || "" }>
            <img src={props.item.stories_list[0].file_url} alt="editorimg" />
            </Link>
            {/* <span className="premium_logo">PREMIUM</span> */}
            </div>
            <div className="editor_contents">
            <h5 className="heading_title">
              <Link 
              to={props?.item.stories_list[0].industry_details[0].slug || "" }>
            {props.item.stories_list[0].industry_details[0].name}
            </Link></h5>
            <p className="editor-para">
              <Link 
              to={props?.item.stories_list[0].slug || "" }>
              {props.item.stories_list[0].title}
              </Link>
            </p>

            <ul className="author_para">
              <li className="li_author">{moment(props.publish).format("Do MMM YYYY")}</li>
              <li>  <Link 
              to={props?.item.stories_list[0].author_details[0].slug || "" }>
              {props.item.stories_list[0].author_details[0].name}
              </Link>
              </li>
            </ul>
    
            </div>
          </div>
          <div className="editor_content2">
            {props.item.stories_list.map((item,index) => {
              if(index===0) return null;
              return (
                // <div className="editior_premium">
                <Cards
                authorslug={item.author_details[0].slug}
                headingslug={item.industry_details[0].slug}
                titleslug={item.slug}
                imgSlug={item.slug}
                contimgMain="card_content"
                imgclassdiv="card_content-response_img"
                src={item.file_url}
                contentcls="card_content_text"
                titlecls="heading_title"
                heading={item.industry_details[0].name}
                paracls="card-text2"
                title={item.title}
                publish={item.publish}
                authordate="editior_li_author"
                authorcls="author_para"
                premium={item.premium}
                author={item.author_details[0].name}
                premiumclsname="premiumeditor"
                />
                // {/* {item.premium==="1"?<PremiumImg premiumclsname="premiumeditor"/>:null} */}
                // {/* </div> */}
              );
            })}
           </div> 
          <div className="responsivesideadd">
            <Sideadd/>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Editor;
