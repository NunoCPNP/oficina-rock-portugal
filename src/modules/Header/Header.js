import BottomNavbar from '@/components/BottomNavBar'
import NavBar from '@/components/NavBar'
import Slot from '@/modules/Slot'

import { Container, StyledNav } from './Header.styles'

const Header = () => {
  return (
    <Container>
      <Slot />
      <StyledNav>
        <NavBar />
      </StyledNav>
      <BottomNavbar />
    </Container>
  )
}

export default Header
