import NavBar from "../../components/NavBar" 
import Slot from "../../components/Slot"

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <Slot />
      <NavBar />
    </header>
  )
}

export default Header