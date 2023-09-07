import React from "react";
import './Footer.css';
import facebook_yellow from '../../assets/icons/facebook_yellow.png';
import facebook_black from '../../assets/icons/facebook_black.png';
import instagram_black from '../../assets/icons/instagram_black.png';
import tiktok_black from '../../assets/icons/tiktok_black.png';

export default function Footer() {

    return(
        <div id="footer">
            <div className="social-network">
                <a href="https://www.facebook.com/lecubearoulettes/"><img src={facebook_black} alt="icone facebook"/></a>
                <a href="https://www.tiktok.com/@lecubearoulettes"><img src={instagram_black} alt="icone instagram"/></a>
                <a href="https://www.instagram.com/lecubearoulettes/"><img src={tiktok_black} alt="icone tiktok"/></a>
            </div>
        </div>
    );
}