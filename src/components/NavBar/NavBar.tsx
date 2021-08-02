import Image from "next/image";
import Link from "next/link";

import CartIcon from "../CartIcon";

import useAuth from "../../hooks/useAuth";

import { HeaderContainer, LogoContainer, LinkContainer } from "./NavBar.styles";

type Props = {};

const NavBar: React.FC<Props> = ({}) => {
  const { user, signout } = useAuth();

  console.log(user)

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
  );
};

export default NavBar;
