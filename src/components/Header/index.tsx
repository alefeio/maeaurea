import { NavLink } from "react-router-dom";
import TudodontoLogo from "../../assets/logo-tudodonto.webp";
import { HeaderContainer } from "./styles";
import {
  House,
  Buildings,
  CheckCircle,
  CirclesFour,
  CalendarCheck,
  ChatsCircle,
  ShoppingCartSimple,
  List
} from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [visibility, setVisibility] = useState('none');

  return (
    <>
      <HeaderContainer color={visibility}>
        <NavLink to="/">
          <img src={TudodontoLogo} alt="Logomarca da Tudodonto" />
        </NavLink>
        <nav>
          <ul>
            <li onClick={() => setVisibility('none')}>
              <NavLink to="/">
                <House size={24} /> Home
              </NavLink>
            </li>
            {/* <li onClick={() => setVisibility('none')}>
              <a
                href="https://tudo-odonto.lojaintegrada.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingCartSimple size={24} /> Loja virtual
              </a>
            </li> */}
            <li onClick={() => setVisibility('none')}>
              <NavLink to="/clinica">
                <Buildings size={24} /> A clínica
              </NavLink>
            </li>
            <li onClick={() => setVisibility('none')}>
              <NavLink to="/cartao-consulta">
                <CheckCircle size={24} /> Cartão Consulta
              </NavLink>
            </li>
            <li onClick={() => setVisibility('none')}>
              <NavLink to="/especialidades">
                <CirclesFour size={24} /> Especialidades
              </NavLink>
            </li>
            <li onClick={() => setVisibility('none')}>
              <NavLink to="/agende-sua-consulta">
                <CalendarCheck size={24} /> Agende sua consulta
              </NavLink>
            </li>
            <li onClick={() => setVisibility('none')}>
              <NavLink to="/contato">
                <ChatsCircle size={24} /> Contato
              </NavLink>
            </li>
          </ul>
        </nav>
        <List size="2rem" onClick={() => setVisibility(visibility === 'none' ? 'block' : 'none')} />
      </HeaderContainer>
    </>
  );
}
