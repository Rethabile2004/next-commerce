# Next Commerce

## Overview

Next Store is a comprehensive e-commerce application designed to demonstrate modern web development practices using Next.js. It serves as a fully functional online store where users can browse products, add items to their cart, manage favorites, leave reviews, and complete purchases. The application includes user authentication, an admin dashboard for managing products and sales, and integration with payment processing. Built with a focus on performance, security, and user experience, it leverages server-side rendering, static generation, and API routes provided by Next.js.

This project is structured as a step-by-step guide in the provided README.md, covering everything from initial setup to advanced features like database seeding, form handling, and payment gateways. It is ideal for developers learning to build scalable e-commerce platforms.

## Features

- **Product Browsing and Management**: Users can view featured products, search and filter items, and access detailed product pages with images, descriptions, pricing, and reviews.
- **User Authentication**: Secure sign-in, sign-up, and profile management using Clerk, with role-based access (e.g., admin privileges).
- **Shopping Cart**: Dynamic cart functionality allowing users to add, update, or remove items, with real-time total calculations including tax and shipping.
- **Favorites and Reviews**: Users can mark products as favorites and submit ratings/comments, with restrictions to prevent duplicate reviews.
- **Orders and Payments**: Order history for users, integrated with Stripe for secure checkout using embedded forms.
- **Admin Dashboard**: Restricted section for admins to view sales, create/edit products, and manage inventory.
- **Responsive Design**: Mobile-friendly UI with dark mode support and responsive layouts.
- **Search and Navigation**: Real-time search in the navbar, breadcrumb navigation, and dropdown menus for quick access.
- **Data Persistence**: Uses Prisma ORM with Supabase PostgreSQL for database operations, including seeding sample products.
- **Deployment Ready**: Configured for Vercel deployment with environment variables and middleware for route protection.

## Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
</div>

<div align="center" style="margin: 1.5rem 0;">
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=black" alt="Supabase" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/Zod-3E67D1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/React%20Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Icons" />
</div>

## Tech Stack

- **Framework**: Next.js (v14) - For building server-rendered React applications with API routes and static optimization.
- **Database**: Supabase (PostgreSQL) - Managed database service for storing products, users, carts, orders, and reviews.
- **ORM**: Prisma - Type-safe database client for schema management, migrations, and queries.
- **Authentication**: Clerk - Handles user sessions, sign-in/sign-up, and role-based access control.
- **UI Components**: shadcn/ui - Customizable, accessible components built on Radix UI and Tailwind CSS.
- **Styling**: Tailwind CSS - Utility-first CSS framework for rapid UI development.
- **Icons**: React Icons - Library for including icons from various sets (e.g., LuShoppingCart, FaHeart).
- **Payments**: Stripe - Integrated for handling checkout sessions and payments.
- **Forms and Validation**: Zod - Schema validation for form data; React Hook Form (implied in form components).
- **State Management**: React Hooks (useState, useEffect) and Next.js data fetching (server actions).
- **Other Libraries**:
  - next-themes: For theme switching (light/dark/system).
  - use-debounce: For debounced search inputs.
  - react-share: For social sharing buttons on product pages.
  - @faker-js/faker: For generating fake data during development.
  - axios: For API requests (e.g., Stripe client secret fetching).

## Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/Rethabile2004/next-commerce
   cd next-store
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following (replace with your actual keys):
   ```
   DATABASE_URL="postgresql://..."
   DIRECT_URL="postgresql://..."
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
   CLERK_SECRET_KEY="sk_..."
   ADMIN_USER_ID="user_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
   STRIPE_SECRET_KEY="sk_..."
   NEXT_PUBLIC_WEBSITE_URL="https://your-domain.com"
   ```

4. **Initialize Prisma**:
   ```
   npx prisma db push
   npx prisma generate
   ```

5. **Seed the Database** (optional, for sample data):
   ```
   node prisma/seed.js
   ```

6. **Run the Development Server**:
   ```
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **User Flow**:
  - Browse products on the homepage or `/products`.
  - Sign in/register via Clerk to access cart, favorites, reviews, and orders.
  - Add items to cart from product pages.
  - Proceed to checkout with Stripe for payment.
  - View order history at `/orders`.

- **Admin Flow**:
  - Log in as an admin (using the ADMIN_USER_ID).
  - Access `/admin` for dashboard, sales overview, and product management (create/edit/delete).

- **Deployment**:
  - Push to GitHub and deploy on Vercel.
  - Configure environment variables in Vercel dashboard.
  - Update `next.config.mjs` for image domains if needed.

## Contributing

Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request. Ensure code follows the project's structure and includes tests where applicable.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
