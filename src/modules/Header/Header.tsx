import NavBar from "../../components/NavBar";
import Slot from "../../components/Slot";

import { StyledNav } from "./Header.styles";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <header>
      <Slot />
      <StyledNav>
        <NavBar />
      </StyledNav>
    </header>
  );
};

export default Header;
