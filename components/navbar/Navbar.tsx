import CartButton from "./CartButton"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import Container from "../global/Container"
import ModeToggle from "./DarkTheme"
import LinkDropdown from "./LinkDropdown"
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          {/* <ModeToggle /> */}
          <LinkDropdown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar