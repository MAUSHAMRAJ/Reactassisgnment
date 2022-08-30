import React from "react";
// import Advertisment from "./Advertisment";
import { Cards } from "./Cards";
import PremiumImg from "./PremiumImg";
import {Link} from 'react-router-dom'
import moment from "moment";

function Manufacturing(props) {
  return (
    <div className="container" key={props.item.stories_list.feid}>
      <div className="manufacturing_main">
        <div className="manufacturing_left">
          <h1 className="menu_title">
          <Link 
              to={props?.item.stories_list[0].industry_details[0].slug || "" }>
            {props.item.stories_list[0].industry_details[0].name}
            </Link>
            </h1>
          <h3 className="manu_subcontent">
            {/* Warburg Pincus set to acquire majority stake in auto parts maker */}
            <Link 
              to={props?.item.stories_list[0].slug || "" }>
            {props.item.stories_list[0].title }
            </Link>
          </h3>

          <p className="manu_left_para1">
            {props.item.stories_list[0].summary}
          </p>

            <ul className="manu_author_para1">
              <li className="li_author">
              {moment(props.publish).format("Do MMM ")}
              </li>
              <li>
              <Link 
              to={props?.item.stories_list[0].author_details[0].slug || "" }>
            {props.item.stories_list[0].author_details[0].name}
            </Link>
              </li>
            </ul>

          <button className="manufacturing_button">READ MORE</button>
        </div>
        
        <div className="manufacturing_right">
        <Link 
              to={props?.item.stories_list[0].slug || "" }>
        <img src={props.item.stories_list[0].file_url} alt="img" />
        </Link>
        </div>
      </div>



      <div className="economy_main" >
          
                {props.item.stories_list.map((item,index) =>{
                  if(index===0) return null;
                  return(
                  <>
                  {/* <div className="editior_premium1"> */}
                    <Cards
                    authorslug={item.author_details[0].slug}
                    clasName="economy_card"
                    contimgMain="economy-card_img_main"y
                    imgclassdiv="economy_resimg"
                    titleslug={item.slug}
                    headingslug={item.industry_details[0].slug}
                    imgSlug={item.slug}
                    src={item.file_url}
                    contentcls="economy_respara"
                    titlecls="menu_title title_response"
                    heading={item.industry_details[0].name}
                    paracls="manu_left_para"
                    title={item.title}
                    publish={item.publish}
                    authordate="li_topstories_author_card"
                    authorcls="manu_author_para"
                    author={item.author_details[0].name}
                    premium={item.premium}
                    imgcls="economy_resimg_img"
                    />
                    {/* {item.premium==="1"?<PremiumImg premiumclsname="premiumeconomy"/>:null} */}
                    {/* </div> */}
                    </>
                  )
                })}  
            
            
      </div>
      <div className="secondadvertisment">
        <h5 className="sideadvertisment_response " style={{textAlign: 'center'}}>Advertisement</h5>
        <img className="sideadd_img" src="./image/sideadd.png" alt="addimage" />
    </div>
      {/* <Advertisment  img="./image/ad2.png"/> */}
    </div>
  );
}

export default Manufacturing;
