import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Title } from "../../styles/global";

import { EspecialidadesContainer, Container } from "./styles";
import { NavLink } from "react-router-dom";

import Esp1 from "../../assets/especialidades-1.jpg";
import Esp2 from "../../assets/especialidades-2.jpg";
import Esp3 from "../../assets/especialidades-3.jpg";
import Esp4 from "../../assets/especialidades-4.jpg";
import Esp5 from "../../assets/especialidades-5.jpg";
import Esp6 from "../../assets/especialidades-6.jpg";
import Esp7 from "../../assets/especialidades-7.jpg";

export function Especialidades() {
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
            <BreadcrumbLink>Especialidades</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Title>
      <EspecialidadesContainer>
        <h1>Especialidades</h1>

        <Accordion defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Odontopediatria
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp1} alt="" />
              <p>
                A Odontopediatria é a área da odontologia que oferece
                atendimento desde o pré natal das gestantes até a adolescência.
                Cada fase necessita de cuidados e orientações específicas, que
                acompanhem o desenvolvimento da criança sendo assim é necessário
                um profissional especializado, paciente e criativo para tornar a
                experiência odontológica agradável desde bebê.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Cirurgia Buco-Maxilo-Facial
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp2} alt="" />
              <p>
                A especialidade de cirurgia buco-maxilo-facial é ampla e abrange
                exodontias simples, de terceiro molares (SISO), cirurgias pré
                protéticas, reconstruções faciais, tratamento de traumas na
                face, remoção de tumores benignos. Casos mais complexos
                necessitam ser realizados em âmbito hospitalar, atividade que
                também é realizada pelo cirurgião buco-maxilo-facial. Durante
                nossa formação somos capacitados para diagnosticar e conduzir
                casos tanto em âmbito ambulatorial (consultório) quanto
                hospitalar.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Prótese Dentária
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp3} alt="" />
              <div>
                <p>
                  A especialidade de Prótese dentária propõe-se a reabilitação
                  oral, substituindo dentes perdidos ou parte deles,
                  restabelecendo assim função (mastigação e fonética) e estética
                  do sistema bucal.
                </p>
                <p>
                  Atualmente, podemos contar com diferentes tipos de prótese
                  sendo que, para cada caso há indicação correta para o sucesso
                  do tratamento. No mercado, temos disponíveis dentes
                  artificiais, com formatos, cores e texturas diferentes. Agende
                  sua consulta e juntos decidiremos a melhor opção para você!
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Ortodontia
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp4} alt="" />
              <div>
                <p>
                  A Ortodontia e Ortopedia facial é a especialidade que cuida do
                  crescimento e do desenvolvimento da face tratando e/ou
                  prevenindo relações desarmônicas entre as bases ósseas, bem
                  como preparando a oclusão de pacientes para a realização de
                  cirurgia ortognática.
                </p>
                <p>
                  Corrige problemas relacionados ao mal posicionado dos dentes
                  (apinhamentos, mordidas cruzadas, desvios de linha média e
                  diastemas) através do uso de aparelho fixo e às deficiências
                  de crescimento dos maxilares em crianças e adolescente, em
                  fase de crescimento, através do uso de aparelhos ortopédicos,
                  na busca por melhoras na estética e na função mastigatória”.
                </p>
                <p>
                  Texto cedido pela Dra. Andrea Wendt (Especialista e mestranda
                  em Ortodontia)
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Endodontia
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp5} alt="" />
              <div>
                <p>
                  A endodontia é a área da Odontologia que aborda assuntos
                  relacionados ao(s) canal(is) e aos tecidos adjacentes ao(s)
                  dente(s). Mas o que é canal?
                </p>
                <p>
                  É a estrutura interna dos dentes que compreende toda parte da
                  raiz. É uma parte inervada e vascularizada. Lá está contida a
                  polpa dentária, responsável pela sensibilidade normal ou
                  alterada quando contaminada por agentes infecciosos.
                </p>
                <p>
                  O Tratamento endodôntico popularmente chamado ” tratamento de
                  canal” consiste na limpeza e desinfecção do(s) canal(is) do
                  dente com o auxílio de instrumentos e soluções desinfectantes,
                  removendo assim a polpa dentária contaminada. Ao contrário do
                  que dizem, hoje é possível realizar um tratamento de qualidade
                  proporcionando mínimo desconforto ao paciente.
                </p>
                <p>
                  Consulte um profissional. Agende sua consulta e informe-se!
                </p>
                <p>Dra. Beatriz Queiroz</p>
                <p>
                  Especialista e responsável pela área de endodontia na Clínica
                  Tudo Odonto
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Periodontia
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp6} alt="" />
              <div>
                <p>
                  Periodontia é a área da Odontologia que cuida da saúde do osso
                  que suporta os dentes, assim como da mucosa (gengiva) que o
                  protege. Dentre as doenças que podem afetar o periodonto
                  podemos citar as gengivites e as periodontites, que são
                  doenças silenciosas que podem levar à perda de elementos
                  dentários.
                </p>
                <p>
                  Atualmente a periodontia tem avançado em técnicas para
                  tratamentos estéticos de forma pouco invasivas.
                </p>
                <p>Agende sua avaliação e esclareça suas dúvidas!</p>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Clínica Geral
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <img src={Esp7} alt="" />
              <p>
                A área de Clínica Geral é responsável pela avaliação da condição
                geral da cavidade oral, como qualidade das restaurações,
                presença/ ausência de lesões de cárie, qualidade da higiene
                bucal (escovação, fio dental), realiza procedimentos de
                raspagem, restaurações, profilaxia, aplicação de flúor, entre
                outros. Geralmente é o profissional que realiza o primeiro
                atendimento e direciona o atendimento para especialistas
                conforme as necessidades do paciente. Agende sua avaliação e
                informaremos suas necessidades!
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </EspecialidadesContainer>
    </Container>
  );
}
