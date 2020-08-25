import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4 footer-logo">
                 <h1>Roxy<span className="logo">Professionals</span></h1>
             </div>
             <div className="col-md-4"></div>
            </div>
            <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4 footer-adress">
                <p>Building No 135, CCA , Sector DD, Phase IV, DHA, Lahore</p>
                <p>+92 42 35692874/5</p>
                <p>info@depilexonline.com</p>
             </div>
             <div className="col-md-4"></div>
            </div>
            <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4">
             <FaFacebookF style={{fontSize:'50px',marginLeft:'100px'}}/>
             <FaInstagram style={{fontSize:'50px',}}/>
             <FaTwitter style={{fontSize:'50px',}}/>
             <FaSnapchatGhost style={{fontSize:'50px',}}/>
             </div>
             <div className="col-md-4"></div>
            </div>
            <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4">
                 <p style={{textAlign:'center'}}>© 2018 Depilex. All Rights Reserved</p>
                 <p style={{textAlign:'center'}}>Powered by Rebrand | Brand Management</p>
             </div>
             <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Footer
