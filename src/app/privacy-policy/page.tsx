import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Effective Date: <strong>5/10/2025</strong>
        </p>

        <p className="mb-6">
          At <strong>Asakawa IT Solutions</strong>, we are committed to
          protecting your privacy. This Privacy Policy outlines how we collect,
          use, and safeguard your information when you visit our website{" "}
          <strong>https://asakawa-it.com</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information from you when you visit our site,
          register on the site, subscribe to our newsletter, or interact with us
          in other ways. The types of information we may collect include:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Any other information you provide to us</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>To improve our website and services</li>
          <li>To personalize your experience</li>
          <li>
            To send periodic emails regarding your order or other products and
            services
          </li>
          <li>To respond to inquiries and support needs</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. How We Protect Your Information
        </h2>
        <p className="mb-6">
          We implement a variety of security measures to maintain the safety of
          your personal information. Your information is stored in secure
          networks and is only accessible by a limited number of persons who
          have special access rights to such systems.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Sharing Your Information
        </h2>
        <p className="mb-6">
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties without your consent,
          except to provide services you have requested or as required by law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Third-Party Services
        </h2>
        <p className="mb-6">
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. Therefore, we have no
          responsibility or liability for the content and activities of these
          linked sites.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-6">
          You have the right to request access to the personal information we
          hold about you, to request corrections to that information, and to
          request the deletion of your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. We will notify
          you about significant changes in the way we treat personal information
          by sending a notice to the primary email address specified in your
          account or by placing a prominent notice on our site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, the practices of
          this site, or your dealings with this site, please contact us at:
        </p>
        <p className="mt-2">
          <strong>hello@asakawa-it.com</strong>
        </p>
      </div>
      <Footer />
    </>
  );
}
