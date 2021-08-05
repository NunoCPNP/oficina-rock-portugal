import useTranslation from 'next-translate/useTranslation'

import { StyledNavigation } from "./BottomNavBar.styles";

const BottomNavBar = () => {
  const { t } = useTranslation('common')

  return (
    <StyledNavigation>
      <ul>
        <li>{t(`bands`)}</li>
        <li>{t(`men`)}</li>
        <li>{t(`women`)}</li>
        <li>{t(`acessories`)}</li>
        <li>{t(`promotions`)}</li>
      </ul>
    </StyledNavigation>
  );
};

export default BottomNavBar;
