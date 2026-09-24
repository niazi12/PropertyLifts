import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses and protects your personal information.`,
};

const lastUpdated = "24 September 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />

      <section className="py-16">
        <div className="container-page max-w-3xl space-y-8 leading-relaxed text-slate-700 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>

          <div>
            <h2>Who we are</h2>
            <p>
              {company.name} (&quot;we&quot;, &quot;us&quot;) is a lift services company based at{" "}
              {company.address.street}, {company.address.town}, {company.address.postcode}. We are
              the data controller for personal information collected through this website.
            </p>
          </div>

          <div>
            <h2>What we collect</h2>
            <p>When you contact us, request a quote or apply for a job, we may collect:</p>
            <ul>
              <li>Your name, email address and phone number</li>
              <li>Your property address or postcode</li>
              <li>Details of your enquiry and any message you send</li>
              <li>Your CV and application details if you apply for a job</li>
            </ul>
            <p className="mt-3">
              We also use analytics tools to collect anonymous information about how visitors use
              this website, such as pages viewed and device type. This site may also display
              advertising provided by Google, which can use cookies to show relevant ads.
            </p>
          </div>

          <div>
            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your enquiry and provide quotes</li>
              <li>To arrange and carry out work you have asked us to do</li>
              <li>To consider your job application</li>
              <li>To improve our website and services</li>
            </ul>
            <p className="mt-3">
              Our lawful bases are taking steps at your request before entering a contract, performing
              a contract with you, and our legitimate interests in running and improving our business.
            </p>
          </div>

          <div>
            <h2>Sharing your information</h2>
            <p>
              We do not sell your personal information. We only share it with service providers who
              help us run our business (such as email and website hosting providers), or where we are
              required to by law.
            </p>
          </div>

          <div>
            <h2>How long we keep it</h2>
            <p>
              We keep enquiry details for as long as needed to deal with your request and for our
              business records. Job applications from unsuccessful candidates are kept for up to 12
              months unless you ask us to delete them sooner.
            </p>
          </div>

          <div>
            <h2>Your rights</h2>
            <p>
              Under UK data protection law you have the right to access, correct or delete your
              personal information, to object to or restrict how we use it, and to data portability.
              To exercise any of these rights, email{" "}
              <a href={`mailto:${company.email}`} className="font-medium text-primary hover:underline">
                {company.email}
              </a>
              .
            </p>
            <p className="mt-3">
              If you are unhappy with how we have handled your information, you can complain to the
              Information Commissioner&apos;s Office (ICO) at ico.org.uk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
