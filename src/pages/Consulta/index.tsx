import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { Title } from "../../styles/global";

import { TudoFidelidadeCadastro, Container } from "./styles";
import { NavLink } from "react-router-dom";

import Agenda from "../../assets/agendamento-01.png";
import ContatoConsulta from "../../components/EnvioEmail/ContatoConsulta";

export function Consulta() {
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
            <BreadcrumbLink href="#">Agende sua consulta</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Title>
      <h1>Agende sua consulta</h1>
      <TudoFidelidadeCadastro>
        <div>
          <aside>
            <img src={Agenda} alt="" />
            <h2>Para agendar sua consulta, preencha os dados.</h2>
            <p>
              Em breve um de nossos atendentes entrará em contato para confirmar
              o agendamento.
            </p>
          </aside>
          <ContatoConsulta />
        </div>
      </TudoFidelidadeCadastro>
    </Container>
  );
}
