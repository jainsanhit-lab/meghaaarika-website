import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy | Meghaaarika International Private Limited",
  description:
    "Privacy policy for the corporate website of Meghaaarika International Private Limited, New Delhi.",
};

const sections = [
  {
    heading: "1. Overview",
    body: "Meghaaarika International Private Limited ('the Company', 'we', 'us', or 'our') is committed to protecting the privacy of individuals who visit our corporate website. This Privacy Policy describes our practices with respect to the collection, use, storage, and disclosure of information in connection with your use of this website.",
  },
  {
    heading: "2. Information We Collect",
    body: "This website is a static corporate information website. We do not operate any registration, login, contact form, or user account functionality. We do not collect personal data through this website. We do not use cookies, tracking scripts, analytics software, or any third-party data collection tools on this website.",
  },
  {
    heading: "3. Automatically Collected Information",
    body: "Our web hosting infrastructure may automatically record standard server log information, such as IP addresses, browser type, and pages accessed, as part of routine server operation. This information is used solely for the purpose of maintaining the security and integrity of the server infrastructure and is not used to identify individual users.",
  },
  {
    heading: "4. Use of Information",
    body: "We do not collect, process, or store any personally identifiable information through this website. Any information that may be incidentally collected via server logs is used solely for infrastructure and security purposes and is not shared, sold, or disclosed to any third parties.",
  },
  {
    heading: "5. Third-Party Disclosure",
    body: "We do not sell, trade, or otherwise transfer any information to third parties. This website does not integrate any third-party analytics, advertising, or social media plugins. No user data is transmitted to external services in connection with your use of this website.",
  },
  {
    heading: "6. Children's Privacy",
    body: "This website is not directed at children and does not knowingly collect any information from individuals under the age of 18. If you believe that a minor has provided us with personal information, please contact us at the address below.",
  },
  {
    heading: "7. Data Security",
    body: "We implement reasonable and appropriate technical and organizational measures to protect this website and any incidentally collected server log data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is entirely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "8. Applicable Law",
    body: "This Privacy Policy is governed by the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, as amended from time to time, along with any other applicable Indian laws and regulations pertaining to data protection and privacy.",
  },
  {
    heading: "9. Changes to This Policy",
    body: "The Company reserves the right to update or modify this Privacy Policy at any time. Any changes will be reflected by updating the effective date of this policy. Your continued use of this website following any changes constitutes your acceptance of the revised policy.",
  },
  {
    heading: "10. Contact",
    body: "For any questions or concerns regarding this Privacy Policy, please write to us at: contact@meghaaarika.com — Meghaaarika International Private Limited, KH.NO 316/274 UGF Back Side, Western Marg Saidulajab, New Delhi — 110030, India.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <FadeIn>
        <h1
          className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-[#6B6B6B] text-sm mb-6">
          Effective Date: 1 January 2025 &nbsp;|&nbsp; Meghaaarika International Private Limited
        </p>
        <hr className="gold-divider-left" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 space-y-10">
          {sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2
                className="text-[17px] font-semibold text-[#2D2D2D] mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {heading}
              </h2>
              <p className="text-[#6B6B6B] text-[15px] leading-[1.85] font-light">{body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
