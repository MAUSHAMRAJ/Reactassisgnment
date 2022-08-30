import React from 'react'

function Footer() {
  return (
    // <div className="container">
    <div className="Container-footer">
        <div className="Container-footer-inner">
            <div className="footer_logo1">
                <img src="./image/footerlogo.png" alt='logo' />
            </div>
            <div className="">
                <ul className='footer_social_logo'>
                    <li className="social-logo_li"><img src="./image/facebook.png" alt="facebook" /></li>
                    <li className="social-logo_li"><img src="./image/twitter.png" alt="twitter" /></li>
                    <li className="social-logo_li"><img src="./image/linkedin.png" alt="linkedin" /></li>
                </ul>
            </div>
            <div>
                <ul className='footer_social_logo'>
                    <li className="social-logo_li">About Us</li>
                    <li className="social-logo_li">Advertise with us</li>
                    <li className="social-logo_li">Contact Us</li>
                    <li className="social-logo_li">Copyright</li>
                    <li className="social-logo_li">Privacy Policy</li>
                    <li className="social-logo_li">Terms of use</li>
                    <li className="social-logo_li">Company Listing </li>
                    <li className="social-logo_li">Tag Listing</li>
                </ul>
            </div>
            <div>
                <ul className='footer_social_logo'>
                    <li className="social-logo_list">Our Products :</li>
                    <li className="social-logo_list">VCCircle</li>
                    <li className="social-logo_list">TechCircle</li>
                    <li className="social-logo_list">Events</li>
                    <li className="social-logo_list">Training</li>
                    <li className="social-logo_list">VCCEdge</li>
                    <li className="social-logo_list">SalesEdge</li>
                    <li className="social-logo_list">PartnerEdge </li>
                    <li className="social-logo_list">Edge Insights</li>
                </ul>
            </div>

            <div className="footer_bottom">
            Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures Pvt. Ltd.
            </div>
        </div>
    </div>
    // </div>
  )
}

export default Footer