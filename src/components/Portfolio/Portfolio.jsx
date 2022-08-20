import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import InterfaceNetflix from "../../img/interfaceNetflix.gif";
import Naturo from "../../img/naruto.gif";
import Kibeleza from "../../img/kibeleza.gif";
import Imc from "../../img/calculo-imc.gif";
import { themeContext } from "../../Context";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projetos</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
       breakpoints={{
        240: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        
      >
        <SwiperSlide>
          <a href="https://interface-netflix.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">

          <img src={InterfaceNetflix} alt="" />
          </a>
          <span>Interface Netflix</span>
          <p>Recriado a interface da netflix</p>
          <p>HTML, CSS, JavaScript</p>
          <a href="https://github.com/kaique100/Recriando-a-Interface-do-Netflix" target="_blank" rel="noopener noreferrer">
          <Gitub/>
          </a>
         
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://naruto-citacoes.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src={Naturo} alt="" />
          </a>
          <span>Citações - Naruto</span>
          <p>Consome frases de uma API e exibi quando solicitado</p>
          <p>Python, React, Teste Unitários</p>
          <a href="https://github.com/kaique100/naruto-quotes-client" target="_blank" rel="noopener noreferrer">
          <Gitub/>
          </a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ki-beleza.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src={Kibeleza} alt="" />
          </a>
          <span>Ki-Beleza</span>
          <p>Desenvolvido em aulas no Senac</p>
          <p>PHP, CSS, HTML</p>
          <a href="https://github.com/kaique100/Kibeleza" target="_blank" rel="noopener noreferrer">
          <Gitub/>
          </a>
          
        </SwiperSlide>
       
        <SwiperSlide>
          <a href="https://calculo-imc-kaique.herokuapp.com/home.html" target="_blank" rel="noopener noreferrer">
          <img src={Imc} alt="" />
          </a>
          <span>Calculo de IMC</span>
          <p>Realiza o calculo de taxa de IMC e retorna o estado corporal</p>
          <p>JavaScript, CSS, HTML</p>
          <a href="https://github.com/kaique100/Calculo-IMC" target="_blank" rel="noopener noreferrer">
          <Gitub/>
          </a>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
