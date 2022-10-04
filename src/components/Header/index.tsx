import { HeaderContainer, Logo } from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <nav>
        <ul>
          <li>Página Inicial</li>
          <li>Campeonatos</li>
          <li>Clubes</li>
        </ul>
      </nav>
      <Logo />
    </HeaderContainer>
  )
}