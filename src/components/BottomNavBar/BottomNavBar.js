import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import useAuth from "@/hooks/useAuth";

import {
  StyledNavigation,
  UserInfo,
  LinkContainer,
} from "./BottomNavBar.styles";

const BottomNavBar = () => {
  const { t } = useTranslation("common");
  const { user } = useAuth();

  return (
    <StyledNavigation>
      <UserInfo>
        {user && `Hi, ${user.name} !`}
      </UserInfo>
      <LinkContainer>
        <ul>
          <li>
            <Link href="/bands">{t(`bands`)}</Link>
          </li>
          <li>
            <Link href="/men">{t(`men`)}</Link>
          </li>
          <li>
            <Link href="/women">{t(`women`)}</Link>
          </li>
          <li>
            <Link href="/acessories">{t(`acessories`)}</Link>
          </li>
          <li>
            <Link href="/promotions">{t(`promotions`)}</Link>
          </li>
        </ul>
      </LinkContainer>
    </StyledNavigation>
  );
};

export default BottomNavBar;
