import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from '@material-ui/core/Link';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="http://www.google.com" target="_blank" >
          <InstagramIcon />
        </Link>
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p></p>
    </div>
  );
}

export default Footer;
