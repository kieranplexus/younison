import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "The Data Processing Agreement governing how Younison processes personal data on behalf of its customers under the GDPR.",
  openGraph: {
    title: "Data Processing Agreement | Younison",
    description:
      "The Data Processing Agreement governing how Younison processes personal data on behalf of its customers under the GDPR.",
    url: `${site.url}/legal/dpa`,
  },
};

export default function DpaPage() {
  return (
    <>
      <PageHeader
        title="Data Processing Agreement"
        subtitle="Last updated: 22 May 2026"
      />

      <section>
        <Container className="py-16 md:py-20">
          <Prose className="max-w-3xl">
            <h2>1. Background and scope</h2>
            <p>
              This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the
              agreement between Nutrapi Limited, trading as Younison (the
              &ldquo;Processor&rdquo;), and the customer (the
              &ldquo;Controller&rdquo;) for use of the Younison platform. It sets
              out how personal data is processed on the Controller&rsquo;s behalf
              and applies whenever Younison processes personal data subject to the
              GDPR.
            </p>

            <h2>2. Definitions</h2>
            <p>
              &ldquo;Controller,&rdquo; &ldquo;Processor,&rdquo; &ldquo;Sub-processor,&rdquo;
              &ldquo;Personal Data,&rdquo; &ldquo;Processing,&rdquo; and
              &ldquo;Data Subject&rdquo; have the meanings given to them in the
              GDPR. &ldquo;Customer Personal Data&rdquo; means personal data
              processed by Younison on behalf of the Controller under the
              agreement.
            </p>

            <h2>3. Processing details</h2>
            <ul>
              <li>
                <strong>Nature:</strong> routing, storage, and management of
                customer communications.
              </li>
              <li>
                <strong>Purpose:</strong> providing the Younison platform to the
                Controller.
              </li>
              <li>
                <strong>Duration:</strong> the term of the Controller&rsquo;s
                subscription.
              </li>
              <li>
                <strong>Data subjects:</strong> the Controller&rsquo;s customers
                and contacts.
              </li>
              <li>
                <strong>Data categories:</strong> contact details, message
                content, and related metadata.
              </li>
            </ul>

            <h2>4. Younison obligations as Processor</h2>
            <p>
              Younison shall process Customer Personal Data only on documented
              instructions from the Controller, ensure that persons authorised to
              process the data are bound by confidentiality, and assist the
              Controller in meeting its obligations under the GDPR.
            </p>

            <h2>5. Security measures</h2>
            <p>
              Younison implements appropriate technical and organisational
              measures to protect Customer Personal Data, as further described in
              Schedule A.
            </p>

            <h2>6. Sub-processors</h2>
            <p>
              The Controller authorises Younison to engage the sub-processors
              listed in Schedule B. Younison will inform the Controller of any
              intended changes to its sub-processors and give the Controller the
              opportunity to object on reasonable grounds.
            </p>

            <h2>7. Data subject rights assistance</h2>
            <p>
              Younison shall, taking into account the nature of the processing,
              assist the Controller by appropriate measures in responding to
              requests from data subjects exercising their rights under the GDPR.
            </p>

            <h2>8. Data breach notification</h2>
            <p>
              Younison shall notify the Controller without undue delay after
              becoming aware of a personal data breach affecting Customer Personal
              Data, and shall provide information reasonably required to support
              the Controller&rsquo;s own notification obligations.
            </p>

            <h2>9. Data deletion or return on termination</h2>
            <p>
              On termination of the agreement, Younison shall, at the
              Controller&rsquo;s choice, delete or return all Customer Personal
              Data, unless retention is required by applicable law.
            </p>

            <h2>10. International transfers</h2>
            <p>
              Where Customer Personal Data is transferred outside the European
              Economic Area, Younison relies on Standard Contractual Clauses or
              another lawful transfer mechanism.
            </p>

            <h2>11. Audit rights</h2>
            <p>
              Younison shall make available to the Controller information
              reasonably necessary to demonstrate compliance with this DPA and
              allow for audits, including inspections, subject to reasonable
              notice and confidentiality.
            </p>

            <h2>12. Liability and indemnity</h2>
            <p>
              Each party&rsquo;s liability under this DPA is subject to the
              limitations of liability set out in the Terms of Service.
            </p>

            <h2>13. Term and termination</h2>
            <p>
              This DPA remains in effect for as long as Younison processes
              Customer Personal Data on behalf of the Controller.
            </p>

            <h2>14. Governing law</h2>
            <p>This DPA is governed by the laws of Ireland.</p>

            <h2>Schedule A — Technical and Organisational Measures</h2>
            <ul>
              <li>Encryption of data in transit and at rest.</li>
              <li>Role-based access controls and the principle of least privilege.</li>
              <li>Regular backups and tested restoration procedures.</li>
              <li>Logging and monitoring of access to personal data.</li>
              <li>Staff confidentiality obligations and security awareness.</li>
              <li>Documented incident response procedures.</li>
            </ul>

            <h2>Schedule B — List of Sub-processors</h2>
            <ul>
              <li>
                <strong>Hostinger</strong> — website and application hosting.
              </li>
              <li>
                <strong>360dialog</strong> — Business Solution Provider for
                WhatsApp messaging.
              </li>
              <li>
                <strong>Google Workspace</strong> — business email
                infrastructure.
              </li>
              <li>
                <strong>SMS providers</strong> — standard text message delivery.
              </li>
            </ul>

            <p>
              Questions about this DPA can be sent to{" "}
              <a href={`mailto:${site.emails.legal}`}>{site.emails.legal}</a>.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
