import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { StyledNavigation } from "./BottomNavBar.styles";

const BottomNavBar = () => {
  const { t } = useTranslation("common");

  return (
    <StyledNavigation>
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
    </StyledNavigation>
  );
};

export default BottomNavBar;
