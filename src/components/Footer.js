import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="https://www.instagram.com/_itszaid_" target="_blank">
          <InstagramIcon />
        </Link>
        <Link href="https://twitter.com/PrismoZaid" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/zaidahmed144" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
      <p></p>
    </div>
  );
}

export default Footer;
