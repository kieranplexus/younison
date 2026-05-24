import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Central customer communications platform, operated by Nutrapi Limited.",
  openGraph: {
    title: "Terms of Service | Central",
    description:
      "The terms governing use of the Central customer communications platform, operated by Nutrapi Limited.",
    url: `${site.url}/legal/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: 22 May 2026"
      />

      <section>
        <Container className="py-16 md:py-20">
          <Prose className="max-w-3xl">
            <p>
              These Terms of Service (the &ldquo;Terms&rdquo;) govern your access
              to and use of the Central platform and website, operated by
              Nutrapi Limited (CRO {site.company.cro}), {site.company.address},{" "}
              {site.company.country} (&ldquo;Central,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;). By using the service you agree to these Terms.
            </p>

            <h2>1. Definitions</h2>
            <p>
              &ldquo;Service&rdquo; means the Central customer communications
              platform and related websites. &ldquo;Customer,&rdquo;
              &ldquo;you,&rdquo; and &ldquo;your&rdquo; mean the business or
              individual that registers for the Service. &ldquo;End
              customer&rdquo; means an individual who communicates with you
              through the Service.
            </p>

            <h2>2. Service description</h2>
            <p>
              Central is a customer communications platform that brings
              messaging, email, web chat, scheduling, and customer records into a
              single shared inbox for small businesses.
            </p>

            <h2>3. Account creation and access</h2>
            <p>
              You are responsible for the accuracy of the information you provide,
              for maintaining the security of your account credentials, and for
              all activity that takes place under your account.
            </p>

            <h2>4. Acceptable use</h2>
            <ul>
              <li>No sending of spam or unsolicited bulk messages.</li>
              <li>No unauthorised marketing communications.</li>
              <li>
                No transmission of regulated content without the proper
                authorisations.
              </li>
              <li>
                Compliance with the terms of the underlying messaging platforms
                (including Meta and SMS aggregators).
              </li>
            </ul>

            <h2>5. Customer responsibilities</h2>
            <p>
              You are responsible for obtaining any consent required from your
              end customers before communicating with them through the Service,
              and for complying with all applicable data protection and
              electronic communications law.
            </p>

            <h2>6. Payment and billing</h2>
            <p>
              Subscription fees are billed in advance on the cycle described at
              the point of purchase. Fees are payable in the currency stated and
              are non-refundable except where required by law.
            </p>

            <h2>7. Subscription term and cancellation</h2>
            <p>
              Subscriptions continue until cancelled. You may cancel at any time,
              with cancellation taking effect at the end of the current billing
              cycle. We may suspend or terminate access for non-payment or breach
              of these Terms.
            </p>

            <h2>8. Intellectual property</h2>
            <p>
              All rights, title, and interest in the Service, including its
              software, design, and trademarks, remain with Nutrapi Limited. You
              retain all rights to the content and data you submit through the
              Service.
            </p>

            <h2>9. Warranties and disclaimers</h2>
            <p>
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the extent permitted by law, we disclaim
              all implied warranties, including those of merchantability and
              fitness for a particular purpose.
            </p>

            <h2>10. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, our total liability arising
              out of or related to the Service shall not exceed the fees paid by
              you in the twelve months preceding the event giving rise to the
              claim. We are not liable for indirect or consequential losses.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold Nutrapi Limited harmless from claims
              arising out of your use of the Service in breach of these Terms or
              applicable law.
            </p>

            <h2>12. Term and termination</h2>
            <p>
              These Terms apply for as long as you use the Service. We may
              terminate or suspend the Service in the event of a material breach
              that is not remedied within a reasonable period after notice.
            </p>

            <h2>13. Governing law</h2>
            <p>These Terms are governed by the laws of Ireland.</p>

            <h2>14. Dispute resolution</h2>
            <p>
              The courts of Ireland shall have exclusive jurisdiction over any
              dispute arising out of or in connection with these Terms.
            </p>

            <h2>15. Changes to terms</h2>
            <p>
              We may update these Terms from time to time. Where changes are
              material, we will provide reasonable notice. Continued use of the
              Service after changes take effect constitutes acceptance.
            </p>

            <h2>16. Entire agreement</h2>
            <p>
              These Terms, together with any order form and our Privacy Policy and
              Data Processing Agreement, constitute the entire agreement between
              you and Nutrapi Limited regarding the Service.
            </p>

            <h2>17. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href={`mailto:${site.emails.legal}`}>{site.emails.legal}</a>.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
