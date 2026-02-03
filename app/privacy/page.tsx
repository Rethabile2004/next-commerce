import Container from "@/components/global/Container"
import TermsPage from "../terms/page"

export default function PrivacyPage() {
  return (
    <>
    <Container className="max-w-3xl py-16 space-y-8 -mt-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p className="text-muted-foreground">
        This Privacy Policy explains how Next Store collects, uses, and protects
        your personal information when you use our platform.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p className="text-muted-foreground">
          We may collect personal information such as your name, email address,
          billing details, and order history when you create an account, place
          an order, or interact with our services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>To process orders and payments</li>
          <li>To manage user accounts and authentication</li>
          <li>To improve our products and services</li>
          <li>To communicate important updates</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Third-Party Services</h2>
        <p className="text-muted-foreground">
          We use trusted third-party services such as Stripe for payments,
          Clerk for authentication, and Supabase for data storage. These services
          only receive the information necessary to perform their functions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data Security</h2>
        <p className="text-muted-foreground">
          We take reasonable measures to protect your data, but no system is
          completely secure. Use the platform at your own risk.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p className="text-muted-foreground">
          You may request access to, correction of, or deletion of your personal
          data by contacting us.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </Container>
    {/* <TermsPage/> */}
    </>
  )
}
