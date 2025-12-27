import { UserIcon } from "lucide-react"
import CartButton from "./CartButton"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import SignoutLink from "./SignoutLink"
import Container from "../global/Container"
import ModeToggle from "./DarkTheme"
import LinkDropdown from "./LinkDropdown"

const Navbar = () => {
  return (
    <nav className="border-b border-gray-400">
        <Container className="flex flex-col sm:flex-row sm:justify-between items-center flex-wrap py-8">
        <Logo/>
        <NavSearch/>
        <div className="flex gap-4 items-center">

            <CartButton/>
          <ModeToggle/>
            <LinkDropdown/>
            <SignoutLink/>
        </div>
        </Container>
    </nav>
  )
}

export default Navbar