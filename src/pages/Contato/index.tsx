import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";

import { Title } from "../../styles/global";

import { TudoFidelidadeCadastro, Container } from "./styles";
import { NavLink } from "react-router-dom";

import ContatoEnvio from "../../components/EnvioEmail/Contato";

export function Contato() {
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
            <BreadcrumbLink href="#">Contato</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Title>
      <h1>Contato</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.526490797286!2d-48.48319478524588!3d-1.4580599989366383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e805985cb4d%3A0xd2b8c84bc8e6c78f!2sR.%20dos%20Mundurucus%2C%202781%20-%20Crema%C3%A7%C3%A3o%2C%20Bel%C3%A9m%20-%20PA%2C%2066040-033!5e0!3m2!1spt-BR!2sbr!4v1671814232531!5m2!1spt-BR!2sbr"
        width="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <TudoFidelidadeCadastro>
        <div>
          <aside>
            <h2>Entre em contato</h2>
            <h3>Telefones</h3>
            (91) 3038-3890 | 3038-2891 | <a href="https://api.whatsapp.com/send?phone=5591984098361&text=Olá!%20Estou%20entrando%20em%20contato%20através%20do%20site." target="_blank">98409-8361 (clique para WhatsApp)</a>
            <h3>E-mail</h3>
            <p>atendimento@tudodonto.com.br</p>
            <h3>Endereço</h3>
            <p>Rua dos Mundurucus, 2781 - Cremação</p>
            <p>Belém/PA</p>
            <p>Entre Av. Gentil Bittencourt e Av. Conselheiro Furtado</p>
          </aside>
          <ContatoEnvio />
        </div>
      </TudoFidelidadeCadastro>
    </Container>
  );
}
