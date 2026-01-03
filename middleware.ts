// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, type NextRequest } from 'next/server';   // ← this is what you missed

// Public routes — add sign-in/up so people can actually log in lol
const isPublicRoute = createRouteMatcher([
  '/',
  '/products(.*)',
  '/about',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

const isAdminRoute = createRouteMatcher([
  '/admin(.*)'
])

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // console.log(au);
  const uid = (await auth()).userId
  // console.log(uid);
  
  if (isAdminRoute(req) && !(uid === process.env.ADMIN_USERID)) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  // Everything not public → protect it
  if (!isPublicRoute(req)) {
    // Modern & clean way (recommended)
    await auth.protect();   // redirects to sign-in automatically + preserves return URL
  }

  // You can return NextResponse.next() explicitly if you want,
  // but usually not needed — middleware just continues by default
});

// Recommended matcher in 2025/2026 — don't touch unless you have a very special case
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
