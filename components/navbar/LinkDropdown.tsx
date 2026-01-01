import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from "./UserIcon";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignoutLink from "./SignoutLink";

const LinkDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <LuAlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10} className="w-42">
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button>Login</button>
            </SignInButton>
            <DropdownMenuSeparator />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            return <DropdownMenuItem key={link.href} asChild className="p-0.5 flex flex-col gap-4 w-full">
              <Link href={link.href} className="capitalize w-full">
                {link.label}</Link>
            </DropdownMenuItem>
          })}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignoutLink/>
            </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkDropdown