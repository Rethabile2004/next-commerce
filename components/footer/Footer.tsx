import Link from "next/link"
import Container from "../global/Container"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Next Store</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A modern e-commerce platform built with Next.js, Prisma, and Clerk.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/favorites">Favorites</Link></li>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/orders">Orders</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-medium">Account</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/profile">Profile</Link></li>
              <li><Link href="/admin/products">Dashboard</Link></li>
              <li><Link href="/review">Reviews</Link></li>
              <li><Link href="https://github.com/Rethabile2004">Github</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Next Store. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
