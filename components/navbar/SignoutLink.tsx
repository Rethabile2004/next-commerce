'use client'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { toast } from 'sonner'

const SignoutLink = () => {
  return (
    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={() => toast.success('Logout successful')}>Logout</Link>
    </SignOutButton>
  )
}

export default SignoutLink