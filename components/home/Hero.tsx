import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';
import { FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          Shop Anytime, Anywhere.
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Discover a world of products at your fingertips. From everyday essentials to unique finds, our store app makes shopping simple, fast, and enjoyable. Browse, compare, and buy — all in one place, whenever you want.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
        <Button asChild size='lg' variant='outline' className='ml-5 mt-10'>          
          <Link href='https://github.com/Rethabile2004'><FaGithub width={10} height={10}/>Github</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;