import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import CartIcon from "@/components/CartIcon";

import useAuth from "@/hooks/useAuth";
import { useSettingsDispatch } from "@/hooks/useSettings";

import { HeaderContainer, LogoContainer, LinkContainer } from "./NavBar.styles";

const NavBar = () => {
  const { t } = useTranslation("common");
  const { user, signout } = useAuth();
  const dispatch = useSettingsDispatch();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/logo.png" alt="" height={37} width={240} />
      </LogoContainer>
      <LinkContainer>
        <ul>
          <li>
            <Link href="/">{t(`home`)}</Link>
          </li>
          {user ? (
            <li onClick={() => signout()}>
              <Link href="/">{t(`logout`)}</Link>
            </li>
          ) : (
            <li>
              <Link href="/account">{t(`login`)}</Link>
            </li>
          )}
          <li onClick={() => dispatch({ type: "TOGGLE_CART" })}>
            <CartIcon />
          </li>
        </ul>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default NavBar;
