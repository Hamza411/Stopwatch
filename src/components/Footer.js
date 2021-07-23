import React from 'react';
import "./Footer.css";

function Footer(props) {
    
    return (
        <div className="footer">
            <div className="footer__left">
                Practicing site
            </div>
            <div className="footer__right">
            Current Time : {new Date().toLocaleString()}
            </div>
        </div>
    );
}

export default Footer;