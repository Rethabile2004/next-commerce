import Link from 'next/link';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2 group'>
      <div className='bg-primary p-2 rounded-lg text-primary-foreground transition-transform group-hover:rotate-12'>
        <VscCode className='w-6 h-6' />
      </div>
      
      <span className='font-bold text-xl tracking-tight hidden lg:block'>
        Streamline<span className='text-primary'>Shop</span>
      </span>
    </Link>
  );
}

export default Logo;
