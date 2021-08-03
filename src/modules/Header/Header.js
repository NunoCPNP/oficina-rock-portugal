import NavBar from "../../components/NavBar";
import Slot from "../../components/Slot";

import { StyledNav } from "./Header.styles";

const Header = () => {
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
