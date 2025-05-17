import React from "react";

// /app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to donatr. By accessing or using our platform to support humanitarian aid for Gaza and Palestine refugees, you agree to these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Purpose</h2>
      <p className="mb-4">
        donatr exists to facilitate donations that directly support displaced and affected communities in Gaza and Palestine.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Donations</h2>
      <p className="mb-4">
        Donations made through donatr are processed securely via Stripe and are non-refundable except under specific circumstances outlined in our Refund Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct</h2>
      <p className="mb-4">
        Users agree not to misuse the platform or engage in fraudulent activity. All activities must comply with applicable laws and regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on donatr is the property of donatr unless otherwise stated. Unauthorized use is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes</h2>
      <p className="mb-4">
        We reserve the right to update these Terms at any time. Continued use after changes constitutes acceptance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
      <p className="mb-4">
        Questions? Email us at support@donatr.net
      </p>
    </main>
  );
}
