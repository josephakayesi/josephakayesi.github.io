import React from "react";
import "./Social.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faMedium,
  faFacebook,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";

const Social = () => (
  <div className="Social">
    <a href="https://twitter.com/josephakayesi">
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a href="https://www.facebook.com/josephakayesi1">
      <FontAwesomeIcon icon={faFacebook} />
    </a>

    <a href="https://www.linkedin.com/in/josephakayesi/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>

    <a href="https://github.com/JosephAkayesi">
      <FontAwesomeIcon icon={faGithub} />
    </a>

    <a href="https://medium.com/@josephakayesi">
      <FontAwesomeIcon icon={faMedium} />
    </a>
  </div>
);

export default Social;
