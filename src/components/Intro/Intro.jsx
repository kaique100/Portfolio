import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector2.png";
import Vector2 from "../../img/Vector3.png";
import boy from "../../img/kaique3.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github (1).png";
import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Oi! Me chamo</span>
          <span>Kaique Santos</span>
          <span>
            Desenvolvedor Full Stack
          </span>
        </div>
        <a href="https://www.linkedin.com/in/kaique-santos-64329a206/" target="_blank" rel="noopener noreferrer">

          <button className="button i-button">Contrate-me</button>

        </a>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/kaique100" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/kaique-santos-64329a206/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" />
          </a>
          {/* <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "64%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Full Stack" text2="Desenvolvedor" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Melhor Design" text2="" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
