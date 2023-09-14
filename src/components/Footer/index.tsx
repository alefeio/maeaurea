import { Divider } from "@chakra-ui/react";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <>
      <Divider />
      <FooterContainer>
        <div>
          <small>
            <strong>Endereço:</strong>
            <br />
            Rua dos Mundurucus, 2781 - Cremação
            <br />
            Belém/PA
            <br />
            Entre Generalíssimo Deodoro e 14 de Março
          </small>
          <small>
            <strong>Telefones</strong>
            <br />
            (91) 3038-3890 | 3038-2891 | 98409-8361 (WhatsApp)
            <br />
            <strong>E-mail</strong>
            <br />
            atendimento@tudodonto.com.br
          </small>
          <small>
            <strong>Responsável técnico:</strong>
            <br />
            Jhonathas Lima de Miranda
            <br />
            CRO 1858
          </small>
        </div>
        <span>
          <small>
            &copy; 2022 - Tudo Odonto. Todos os direitos reservados.
          </small>
          <small>CNPJ: 48.871.012/0001-18</small>
        </span>
      </FooterContainer>
    </>
  );
}
