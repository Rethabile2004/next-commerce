import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from "./UserIcon";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignoutLink from "./SignoutLink";
import { auth } from "@clerk/nextjs/server";
import { Card } from "../ui/card";

const LinkDropdown = async () => {
  const user = await auth()
  const isAdmin = user.userId === process.env.ADMIN_USERID

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <LuAlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'
        sideOffset={12}
        className="w-56 rounded-xl border bg-background p-2 shadow-xl">

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
            if (link.label === 'dashboard' && !isAdmin) {
              return null
            }
            return <DropdownMenuItem key={link.href} asChild className="p-0.5 flex flex-col gap-4 w-full">
              <Link href={link.href} className="capitalize w-full">
                {link.label}</Link>
            </DropdownMenuItem>
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignoutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkDropdown