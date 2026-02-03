import CartButton from "./CartButton"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import Container from "../global/Container"
import ModeToggle from "./DarkTheme"
import LinkDropdown from "./LinkDropdown"
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <nav className="border-b relative z-50 bg-background">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-between sm:items-center sm:py-8">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Logo />

          <div className="flex gap-2 items-center sm:hidden">
            <CartButton />
            <LinkDropdown />
          </div>
        </div>

        <div className="w-full sm:max-w-xs md:max-w-md">
          <Suspense fallback={<div className="h-10 w-full bg-muted animate-pulse rounded" />}>
            <NavSearch />
          </Suspense>
        </div>

        <div className="hidden sm:flex gap-4 items-center">
          <CartButton />
          <ModeToggle />
          <LinkDropdown />
        </div>

        <div className="sm:hidden absolute right-4 top-4">
          <ModeToggle />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar;
