import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import CartaoBlue from "../../assets/cartao-blue.jpg";
import CartaoBlack from "../../assets/cartao-black.jpg";
import ImgTudoFidelidade2 from "../../assets/tudo-fidelidade-banner2.jpg";

import { Title } from "../../styles/global";

import {
  TudoFidelidadeCadastro,
  Container,
  TudoFidelidadeContainer,
} from "./styles";
import { NavLink } from "react-router-dom";
import ContatoCartaoConsulta from "../../components/EnvioEmail/ContatoCartaoConsulta";

export function CartaoConsulta() {
  return (
    <Container>
      <Title>
        <Breadcrumb fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <NavLink to="/">Home</NavLink>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Cartão Consulta</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Title>
      <TudoFidelidadeContainer>
        <h1>Cartão Consulta</h1>
        <h2>
          Um cartão, vários benefícios
        </h2>
        <div>
          <aside>
            <img src={CartaoBlue} alt="Cartão Blue" />
            <h1>Cartão Blue</h1>
            <h2>Serviços inclusos:</h2>
            <ul>
              <li>03 Restaurações</li>
              <li>Raio-x</li>
              <li>Profilaxia (retirada de tártaros)</li>
              <li>Planejamento Total Tratamento Odontológico</li>
              <li>Consulta com Especialista</li>
            </ul>
          </aside>
          <aside>
            <img src={CartaoBlack} alt="Cartão Black" />
            <h1>Cartão Black</h1>
            <h2>Serviços inclusos:</h2>
            <ul>
              <li>Instalação aparelho ortodôntico</li>
              <li>1ª manutenção aparelho ortodôntico</li>
              <li>Raio-x</li>
              <li>Consulta com Especialista</li>
              <li>02 Restaurações</li>
              <li>Planejamento Total Tratamento Odontológico</li>
              <li>Profilaxia (retirada de tártaros)</li>
            </ul>
          </aside>
        </div>
      </TudoFidelidadeContainer>
      <TudoFidelidadeCadastro>
          <aside>
            <h2>Solicite o seu cartão</h2>
            <ContatoCartaoConsulta />
          </aside>
      </TudoFidelidadeCadastro>
    </Container>
  );
}
