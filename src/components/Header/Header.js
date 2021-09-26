import BottomNavbar from '@/components/BottomNavBar'
import NavBar from '@/components/NavBar'

import { Container, StyledNav } from './Header.styles'

const Header = () => {
  return (
    <Container>
      <StyledNav>
        <NavBar />
      </StyledNav>
      <BottomNavbar />
    </Container>
  )
}

export default Header
