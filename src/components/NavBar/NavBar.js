import Image from "next/image";
import Link from "next/link";

import CartIcon from "../CartIcon";

import useAuth from "../../hooks/useAuth";

import { HeaderContainer, LogoContainer, LinkContainer } from "./NavBar.styles";

const NavBar = () => {
  const { user, signout } = useAuth();

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Image src="/logo.png" alt="" height={37} width={240} />
        </LogoContainer>
        <LinkContainer>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {user ? (
              <li onClick={() => signout()}>
                <Link href="/">Logout</Link>
              </li>
            ) : (
              <li>
                <Link href="/account">Login</Link>
              </li>
            )}
            <CartIcon />
          </ul>
        </LinkContainer>
      </HeaderContainer>
      <LinkContainer small>
        <ul>
          <li>Bandas</li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Promoções</li>
        </ul>
      </LinkContainer>
    </>
  );
};

export default NavBar;
