import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
const LinkDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <LuAlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10} className="w-42">
        {links.map((link) => {
          return <DropdownMenuItem key={link.href} asChild className="p-0.5 flex flex-col gap-4 w-full">
            <Link href={link.href} className="capitalize w-full">
              {link.label}</Link>
          </DropdownMenuItem>
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkDropdown