import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Day from "../../img/Day.jfif";
import Rafa from "../../img/Rafa.jfif";
import Gih from "../../img/Gih.jfif";
import Larissa from "../../img/Larissa.jfif";

const Testimonial = () => {
  const clients = [
    {
      img: Day,
      review:
        "Kaique e eu fizemos um curso de Full-stack pela Recode Pro, e tive a oportunidade de trabalhar com ele no mesmo squad, onde desenvolvemos um projeto que temos muito orgulho. Ressalto dentre as skills desse ser incrível, a empatia, flexibilidade, colaboração, organização, e uma incrível aptidão em trabalhar em grupo e ensinar. - Daiana",
    },
    {
      img: Rafa,
      review:
        "Trabalhar com o Kaique em grupo foi legal conseguimos ter entrosamento e de um modo geral conseguimos resolver os problemas mesmo aqueles que eram mais difícil para nós. - Rafael",
    },
    {
      img: Gih,
      review:
        "Tive o prazer de ter a experiência de trabalhar em equipe com o Kaique, pessoa que se mostrava sempre aberto a novas ideias, e também com pensamento inovador, trazendo sua visão sempre de forma colaborativa e disposto a atender as dificuldades dos outros integrantes da equipe, com empatia e respeito. - Giovanna",
    },
    {
      img: Larissa,
      review:
        "O kaique é um excelente profissional, já trabalhamos juntos em alguns projetos, e dentre as qualidades dele que mais se destacam e a comunicação, atenção aos detalhes é sempre está disposto a desenvolver soluções eficientes e intuitivas para o usuário final. - Larissa",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Depoimentos de algumas pessoas que </span>
        <span>trabalharam em grupo </span>
        <span>comigo</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
