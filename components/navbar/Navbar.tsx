import { UserIcon } from "lucide-react"
import CartButton from "./CartButton"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import SignoutLink from "./SignoutLink"
import Container from "../global/Container"

const Navbar = () => {
  return (
    <nav className="border-b">
        <Container className="flex flex-col sm:flex-row sm:justify-between items-center flex-wrap py-8">

        <Logo/>
        <NavSearch/>
        <div className="flex gap-4 items-center">
            <CartButton/>
            <UserIcon/>
            <SignoutLink/>
        </div>
        </Container>
    </nav>
  )
}

export default Navbar