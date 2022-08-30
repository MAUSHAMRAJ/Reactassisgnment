import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import PremiumImg from './PremiumImg'

export const Cards = (props) => {
  return (
    <div className={props.clasName} >
        <div className={props.contimgMain}>
            <div className={props.imgclassdiv}>
            <Link 
              to={props?.imgSlug || " "}>
                <img src={props.src} alt="" width={props.width} className={props.imgcls} />
                {props.premium==="1"?<PremiumImg premiumclsname="premiumeconomy"/>:null}
                </Link>
            </div>
            <div className={props.contentcls}>
              
                <p className={props.titlecls}>
                <Link 
              to={props?.headingslug || " "}> 
                  {props.heading} 
                  </Link></p>
                <p className={props.paracls}>
                  <Link
                  to={props.titleslug || " "}>
                  {props.title}
                  </Link> </p>

                  <ul className= {props.authorcls}>
                    <li className={props.authordate}>
                    {moment(props.publish).format("Do MMM ")}  
                    </li>
                    <li>
                    <Link to ={props?.authorslug || " "}>
                   {props.author}
                   </Link>
                   <span className={props.plusone}>{props.one}</span>
                   <span className={props.nameshow}>{props.incrval}</span>
                    </li>
                  </ul>
{/* 
                <p className= {props.authorcls}>
                  {moment(props.publish).format("Do MMM ")}<span>
                  <Link to ={props?.authorslug || " "}>
                   {props.author}
                   </Link></span>
                   <span className={props.plusone}>{props.one}</span>
                   <span className={props.nameshow}>{props.incrval}</span>
                    </p> */}
            </div>
        </div>
        
    </div>
  )
}
