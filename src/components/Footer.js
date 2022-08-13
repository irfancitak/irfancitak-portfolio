import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="https://www.instagram.com/irfancitakk/" target="_blank">
          <InstagramIcon />
        </Link>

        <Link href="https://twitter.com/irfanncitakk" target="_blank">
          <TwitterIcon />
        </Link>

        <Link
          href="https://www.linkedin.com/in/irfan-%C3%A7%C4%B1tak-4440b7209/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2022 İrfan Çıtak</p>
    </div>
  );
}

export default Footer;
