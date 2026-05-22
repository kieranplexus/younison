import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nutrapi Limited, trading as Younison, collects, uses, and protects personal data in line with the GDPR.",
  openGraph: {
    title: "Privacy Policy | Younison",
    description:
      "How Nutrapi Limited, trading as Younison, collects, uses, and protects personal data in line with the GDPR.",
    url: `${site.url}/legal/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="Last updated: 22 May 2026" />

      <section>
        <Container className="py-16 md:py-20">
          <Prose className="max-w-3xl">
            <p>
              This Privacy Policy explains how we collect, use, and protect
              personal data when you use the Younison platform and website. We
              are committed to handling personal data in accordance with the EU
              General Data Protection Regulation (GDPR) and the Irish Data
              Protection Act 2018.
            </p>

            <h2>1. Who we are</h2>
            <p>
              Younison is operated by Nutrapi Limited, a company registered in
              Ireland (CRO {site.company.cro}), with its registered office at{" "}
              {site.company.address}, {site.company.country}. Nutrapi Limited is
              the data controller for personal data processed through this
              website and the controller or processor (as applicable) for data
              processed through the platform.
            </p>
            <p>
              For any questions about this policy or how we handle personal data,
              our data protection contact can be reached at{" "}
              <a href={`mailto:${site.emails.privacy}`}>{site.emails.privacy}</a>
              . Our designated data protection contact is currently reachable at{" "}
              <a href={`mailto:${site.emails.sales}`}>{site.emails.sales}</a>.
            </p>

            <h2>2. What information we collect</h2>
            <ul>
              <li>
                <strong>Account data:</strong> name, email address, company
                name, and billing details provided when you register for or
                subscribe to the platform.
              </li>
              <li>
                <strong>Communications data:</strong> messages and related
                metadata routed through the platform between you and your
                customers.
              </li>
              <li>
                <strong>Usage data:</strong> analytics and session information
                describing how the platform and website are used.
              </li>
              <li>
                <strong>Cookies:</strong> small files stored on your device, as
                described in the Cookies section below.
              </li>
            </ul>

            <h2>3. How we use information</h2>
            <ul>
              <li>To provide, operate, and maintain the platform.</li>
              <li>To respond to enquiries and provide customer support.</li>
              <li>To improve and develop our services.</li>
              <li>To meet our legal and regulatory obligations.</li>
            </ul>

            <h2>4. Lawful basis (GDPR Article 6)</h2>
            <p>We process personal data on the following lawful bases:</p>
            <ul>
              <li>
                <strong>Contractual necessity</strong> — where processing is
                required to deliver the service you have signed up for.
              </li>
              <li>
                <strong>Legitimate interest</strong> — where processing supports
                the secure and effective running of our business, balanced
                against your rights.
              </li>
              <li>
                <strong>Consent</strong> — where you have given consent, for
                example for certain cookies or communications.
              </li>
              <li>
                <strong>Legal obligation</strong> — where processing is required
                to comply with applicable law.
              </li>
            </ul>

            <h2>5. Sharing with third parties</h2>
            <p>
              We share personal data with carefully selected service providers
              who help us deliver the platform, including:
            </p>
            <ul>
              <li>
                <strong>Hosting providers</strong> — our website and application
                infrastructure (Hostinger).
              </li>
              <li>
                <strong>Email infrastructure</strong> — Google Workspace, used
                for business email.
              </li>
              <li>
                <strong>Messaging infrastructure</strong> — 360dialog as our
                Business Solution Provider (BSP) for WhatsApp, and standard SMS
                providers for text messaging.
              </li>
              <li>
                <strong>Analytics</strong> — where used, to understand how the
                website and platform are used (current provider noted on request).
              </li>
            </ul>
            <p>
              When you communicate with businesses using Younison, your messages
              are processed by our BSP partners in accordance with their privacy
              policies and the messaging platform&rsquo;s terms (including Meta
              for WhatsApp Business).
            </p>

            <h2>6. International transfers</h2>
            <p>
              Where personal data is transferred outside the European Economic
              Area, we rely on appropriate safeguards such as Standard
              Contractual Clauses approved by the European Commission.
            </p>

            <h2>7. Data retention</h2>
            <ul>
              <li>
                <strong>Account data:</strong> retained for the duration of the
                relationship plus six years, to meet legal and accounting
                requirements.
              </li>
              <li>
                <strong>Communications data:</strong> retained per the
                customer&rsquo;s configuration, typically 24 months unless
                extended by agreement.
              </li>
              <li>
                <strong>Usage data:</strong> retained for up to 24 months.
              </li>
            </ul>

            <h2>8. Your rights</h2>
            <p>
              Under the GDPR you have the right to access, rectification,
              erasure, restriction of processing, data portability, and to object
              to processing. To exercise any of these rights, email{" "}
              <a href={`mailto:${site.emails.privacy}`}>{site.emails.privacy}</a>
              . We will respond within the timeframes required by law.
            </p>

            <h2>9. Complaints</h2>
            <p>
              You have the right to lodge a complaint with the Irish Data
              Protection Commission if you believe your personal data has been
              handled improperly. The DPC can be contacted via{" "}
              <a
                href="https://www.dataprotection.ie"
                target="_blank"
                rel="noopener noreferrer"
              >
                dataprotection.ie
              </a>
              .
            </p>

            <h2>10. Cookies</h2>
            <p>We use the following categories of cookies:</p>
            <ul>
              <li>
                <strong>Strictly necessary</strong> — required for the website
                and platform to function.
              </li>
              <li>
                <strong>Analytics</strong> — where applicable, to measure and
                improve performance.
              </li>
            </ul>
            <p>
              Where non-essential cookies are used, we will ask for your consent
              through a cookie consent mechanism, and you can change your
              preferences at any time.
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Where changes are
              material, we will notify users by an appropriate means.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${site.emails.privacy}`}>{site.emails.privacy}</a>{" "}
              or by post to {site.company.legalName}, {site.company.address},{" "}
              {site.company.country}.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
