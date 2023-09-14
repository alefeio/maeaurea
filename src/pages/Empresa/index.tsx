import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import AClinica from "../../assets/estrutura/00.jpg";
import AClinica2 from "../../assets/estrutura/01.jpg";
import AClinica3 from "../../assets/estrutura/02.jpg";
import AClinica4 from "../../assets/estrutura/03.jpg";
import AClinica5 from "../../assets/estrutura/04.jpg";
import AClinica6 from "../../assets/estrutura/05.jpg";

import { Title } from "../../styles/global";

import { AClinicaContainer, Container, Div2 } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Empresa() {
  const [img, setImg] = useState(AClinica6);

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
            <BreadcrumbLink>A clínica</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Title>
      <AClinicaContainer>
        <h1>A clínica</h1>
        <h2>A arte de ser feliz é sorrir</h2>
        <div>
          <img src={AClinica} alt="Solicite a nossa visita" />
          <aside>
            <p>
              A saúde bucal reflete diretamente na saúde geral do nosso corpo.
              Quando não temos uma boa higiene oral, ficamos expostos a uma
              série de problemas, como mau-hálito, gengivite, a cárie que não
              tratada pode causar perda de dentes e problemas graves como
              proliferação de bactérias que podem atingir a corrente sanguínea,
              causando sérias infecções.
            </p>
            <p>
              A TUDO ODONTO tem como objetivo recuperar a saúde bucal, renovando
              o seu sorriso e a sua autoestima, pois a arte de ser feliz é
              “SORRIR”. Buscamos sempre a melhor maneira de solucionar caso a
              caso para que nossos clientes fiquem satisfeitos com os
              resultados, para isso contamos com uma equipe altamente
              qualificada, onde você terá um atendimento personalizado.
            </p>
            <p>
              Agende hoje mesmo sua avaliação e mantenha seu sorriso sempre em
              dia!
            </p>
          </aside>
        </div>
      </AClinicaContainer>
      <Div2>
        <div>
          <h2>Diferenciais</h2>
          <ul>
            <li>Tratamento de qualidade e confiança</li>
            <li>Condições de pagamento facilitadas</li>
            <li>Horários flexíveis</li>
            <li>Profissionais especializados</li>
            <li>Ambiente agradável</li>
            <li>Atendimento personalizado</li>
            <li>Estacionamento exclusivo para clientes</li>
          </ul>
        </div>
        <div>
          <h2>Estrutura</h2>
          <img src={img} alt="" />
          <aside>
            <img src={AClinica6} onClick={() => setImg(AClinica6)} alt="" />
            <img src={AClinica5} onClick={() => setImg(AClinica5)} alt="" />
            <img src={AClinica3} onClick={() => setImg(AClinica3)} alt="" />
            <img src={AClinica4} onClick={() => setImg(AClinica4)} alt="" />
            <img src={AClinica2} onClick={() => setImg(AClinica2)} alt="" />
          </aside>
        </div>
      </Div2>
    </Container>
  );
}
