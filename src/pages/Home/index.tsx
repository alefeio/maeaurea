import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Banner1 from "../../assets/b01.jpg";
import Banner2 from "../../assets/b02.jpg";
import Banner3 from "../../assets/b03.jpg";
import Banner4 from "../../assets/b04.jpg";
import Banner5 from "../../assets/b05.jpg";
import Banner6 from "../../assets/b06.jpg";
import Banner7 from "../../assets/b07.jpg";
import Esp7 from "../../assets/esp-home.jpg";
import CartaoBlue from "../../assets/cartao-blue.jpg";
import CartaoBlack from "../../assets/cartao-black.jpg";

import { Container, Div2 } from "./styles";

import AClinica from "../../assets/a-clinica-foto1.jpg";
import Agenda from "../../assets/agendamento-01.png";

import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export function Home() {
  return (
    <Container>
      <Carousel
        autoPlay
        dynamicHeight
        emulateTouch
        infiniteLoop
        showThumbs={false}
        interval={7000}
        transitionTime={2000}
      >
        <div>
          <img src={Banner1} alt="" />
        </div>
        <div>
          <img src={Banner2} alt="" />
        </div>
        <div>
          <img src={Banner3} alt="" />
        </div>
        <div>
          <img src={Banner4} alt="" />
        </div>
        <div>
          <img src={Banner5} alt="" />
        </div>
        <div>
          <img src={Banner6} alt="" />
        </div>
        <div>
          <img src={Banner7} alt="" />
        </div>
      </Carousel>
      <Div2>
        <div>
          <h2>A clínica</h2>
          <aside>
            <img src={AClinica} alt="Solicite a nossa visita" />
            <div>
              <p>
                Temos como objetivo recuperar a saúde bucal, renovando o seu
                sorriso e a sua autoestima, pois a arte de ser feliz é “SORRIR”.
              </p>
              <p>
                Buscamos sempre a melhor maneira de solucionar caso a caso para
                que nossos clientes fiquem satisfeitos com os resultados.
              </p>
              <Button colorScheme="teal">
                <NavLink to="/clinica">
                  Conheça nossa estrutura e diferenciais
                </NavLink>
              </Button>
            </div>
          </aside>
        </div>
        <div>
          <h2>Especialidades</h2>
          <aside>
            <img src={Esp7} alt="Solicite a nossa visita" />
            <div>
              <ul>
                <li>Odontopediatria</li>
                <li>Cirurgia Buco-maxilo-facial</li>
                <li>Prótese Dentária</li>
                <li>Ortodontia</li>
                <li>Endodontia</li>
                <li>Periodontia</li>
                <li>Clínica Geral</li>
              </ul>
              <Button colorScheme="teal">
                <NavLink to="/especialidades">Saiba mais</NavLink>
              </Button>
            </div>
          </aside>
        </div>
      </Div2>
      <Div2>
        <div>
          <h2>Cartão Consulta</h2>
          <aside>
            <NavLink to="/cartao-consulta">
              <img src={CartaoBlue} alt="" />
              <h1>Cartão Blue</h1>
              <h3>Um cartão, vários benefícios</h3>
            </NavLink>
            <NavLink to="/cartao-consulta">
              <img src={CartaoBlack} alt="" />
              <h1>Cartão Black</h1>
              <Button colorScheme="teal">
                <NavLink to="/cartao-consulta">Escolha o seu cartão</NavLink>
              </Button>
            </NavLink>
          </aside>
        </div>
        <div>
          <aside>
            <div>
              <h2>Agende sua consulta</h2>
                <NavLink to="/agende-sua-consulta">
                  <img src={Agenda} alt="" />
                </NavLink>
            </div>
            <div>
              <h2>Onde estamos</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.526490797286!2d-48.48319478524588!3d-1.4580599989366383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e805985cb4d%3A0xd2b8c84bc8e6c78f!2sR.%20dos%20Mundurucus%2C%202781%20-%20Crema%C3%A7%C3%A3o%2C%20Bel%C3%A9m%20-%20PA%2C%2066040-033!5e0!3m2!1spt-BR!2sbr!4v1671814232531!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </aside>
        </div>
      </Div2>
    </Container>
  );
}
