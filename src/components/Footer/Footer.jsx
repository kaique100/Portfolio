import React from "react";
import "./Footer.css";
import Wave from "../../img/fundo.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Email from "@iconscout/react-unicons/icons/uil-mailbox";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kaique-santos-64329a206/" target="_blank">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/kaique100" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://wa.me/5511981298280" target="_blank">
            <Whatsapp color="white" size={"3rem"} />
          </a>
          <a href="mailto:skaique833@gmail.com" target="_blank">
            <Email color="white" size={"3rem"} />
          </a>
        </div>
        <span>Portfólio | Kaique Santos de Andrade 2022</span>
      </div>
    </div>
  );
};

export default Footer;
