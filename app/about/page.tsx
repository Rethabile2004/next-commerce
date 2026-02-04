// AboutPage.tsx
// Built by Rethabile Eric Siase
// github.com/rethabile2004

import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiSupabase, SiClerk, SiStripe, SiVercel } from 'react-icons/si';

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Next Store
          <span className="text-primary"> — Modern Full-Stack E-commerce</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          A complete Next.js 14 showcase project built for learning and portfolio purposes
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <p>
          This is <strong>not</strong> a production online shop — it's a high-quality, full-featured e-commerce demo built to demonstrate modern full-stack development patterns in 2025.
        </p>
        <p>
          Created by <strong>Rethabile Eric Siase</strong> as a personal project and learning journey.
          <br />
          <a
            href="https://github.com/Rethabile2004/next-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/rethabile2004
          </a>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-2xl font-semibold mb-4">What it includes</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>Server & Client Components • Server Actions</li>
            <li>Authentication + protected routes (Clerk)</li>
            <li>Shopping cart + real-time totals</li>
            <li>Favorites • Reviews • Ratings</li>
            <li>Admin dashboard (sales + CRUD products)</li>
            <li>Embedded Stripe checkout</li>
            <li>Search, dark mode, responsive design</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Tech stack</h3>
          <div className="flex flex-wrap gap-3">
            <SiNextdotjs size={36} className="text-black dark:text-white" title="Next.js 14" />
            <SiTypescript size={36} className="text-blue-600" title="TypeScript" />
            <SiTailwindcss size={36} className="text-teal-500" title="Tailwind CSS" />
            <SiPrisma size={36} className="text-indigo-600" title="Prisma ORM" />
            <SiSupabase size={36} className="text-emerald-500" title="Supabase (PostgreSQL)" />
            <SiClerk size={36} className="text-violet-600" title="Clerk Auth" />
            <SiStripe size={36} className="text-indigo-500" title="Stripe Payments" />
            <SiVercel size={36} className="text-black dark:text-white" title="Vercel" />
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground mb-6">
          Built to push the limits of what's possible with the latest Next.js ecosystem.
        </p>
        <p className="text-xl font-medium">
          Feel free to fork, learn from it, improve it — or just steal the good parts 😈
        </p>
      </div>
    </section>
  );
}