import Container from "@/components/global/Container"
import PrivacyPage from "../privacy/page"

export default function TermsPage() {
  return (
    <>
    <Container className="max-w-3xl py-16">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="text-muted-foreground mb-6">
        These Terms and Conditions govern your use of the Next Store application.
        By using this app, you agree to these terms.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg">Use of the Service</h2>
          <p className="text-muted-foreground">
            You agree to use the application only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use of
            the service.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Accounts</h2>
          <p className="text-muted-foreground">
            You are responsible for maintaining the confidentiality of your
            account. Authentication and account management are handled via Clerk.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Orders & Payments</h2>
          <p className="text-muted-foreground">
            All orders are subject to availability. Payments are securely
            processed through Stripe. We reserve the right to refuse or cancel
            orders at our discretion.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content, branding, and code associated with Next Store are the
            property of the application owner and may not be reused without
            permission.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            Next Store is provided “as is”. We are not liable for any damages
            arising from the use or inability to use the service.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Changes to Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms at any time. Continued use of the
            application means you accept the revised terms.
          </p>
        </div>
      </section>
    </Container>
    {/* <PrivacyPage/> */}
    </>
  )
}
