import Image from "next/image";
import Link from "next/link";

import CartIcon from "../CartIcon";
import CartDropDown from "../CartDropDown";

import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";

import { HeaderContainer, LogoContainer, LinkContainer } from "./NavBar.styles";

const NavBar = () => {
  const { user, signout } = useAuth();
  const { cartDropDown, toggleCartDropDown } = useSettings();

  console.log("USER CONTEXT: ", user);

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
          <div onClick={() => toggleCartDropDown()}>
            <CartIcon />
          </div>
        </ul>
      </LinkContainer>
      {!cartDropDown ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

export default NavBar;
