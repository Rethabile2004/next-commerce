import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { Button } from '../ui/button';
import Link from 'next/link';
const Logo = () => {
    return (
        <Button asChild size='icon'>
            <Link href='/'>
                <FaBasketShopping className='w-7 h-7' />
            </Link>
        </Button>
    )
}

export default Logo