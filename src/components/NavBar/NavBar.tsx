import Image from "next/image";
import Link from "next/link";

import { HeaderContainer, LogoContainer, LinkContainer } from "./NavBar.styles";

type Props = {};

const NavBar: React.FC<Props> = ({}) => {
  const currentUser = false;

  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/logo.png" alt="" height={37} width={240} />
      </LogoContainer>
      <LinkContainer>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Loja</Link>
          </li>
          <li>
            <Link href="/">Contactos</Link>
          </li>
          {currentUser ? (
            <li>
              <Link href="/">Logout</Link>
            </li>
          ) : (
            <li>
              <Link href="/">Login</Link>
            </li>
          )}
        </ul>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default NavBar;
