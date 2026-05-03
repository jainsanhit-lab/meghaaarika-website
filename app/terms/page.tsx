import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Use | Meghaaarika International Private Limited",
  description:
    "Terms of use for the corporate website of Meghaaarika International Private Limited, New Delhi.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or using the website of Meghaaarika International Private Limited (hereinafter referred to as the 'Company', 'we', 'us', or 'our'), you agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of this website immediately. These terms constitute a legally binding agreement between you and the Company.",
  },
  {
    heading: "2. Nature of This Website",
    body: "This website is maintained solely as a corporate information and compliance presence. It does not constitute an offer, invitation, solicitation, or advertisement of any kind. The information published herein is for general informational purposes only and does not represent professional, financial, legal, or investment advice. The Company does not transact any business through this website.",
  },
  {
    heading: "3. Permitted Use",
    body: "You may access and view the content of this website for personal, non-commercial, and informational purposes only. You may not reproduce, distribute, modify, transmit, republish, or commercially exploit any content on this website without the prior written consent of the Company.",
  },
  {
    heading: "4. Intellectual Property",
    body: "All content on this website, including but not limited to text, design, layout, and the company name and marks, is the exclusive property of Meghaaarika International Private Limited or its licensors and is protected under applicable Indian and international intellectual property laws. Unauthorized use of any material on this website is strictly prohibited.",
  },
  {
    heading: "5. Accuracy of Information",
    body: "While the Company endeavors to keep the information on this website accurate and up to date, it makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. Any reliance you place on such information is strictly at your own risk.",
  },
  {
    heading: "6. Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, the Company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of, or inability to use, this website or any content herein. This includes, without limitation, any loss of data, loss of profits, or business interruption.",
  },
  {
    heading: "7. Third-Party Links",
    body: "This website does not contain any third-party links. Should any such links appear in the future, they will be provided solely for convenience. The Company does not endorse or accept any responsibility for the content or practices of any third-party websites.",
  },
  {
    heading: "8. Governing Law and Jurisdiction",
    body: "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.",
  },
  {
    heading: "9. Amendments",
    body: "The Company reserves the right to amend, modify, or update these Terms of Use at any time without prior notice. Continued use of this website following any changes shall constitute your acceptance of the revised terms.",
  },
  {
    heading: "10. Contact",
    body: "For any queries regarding these Terms of Use, please contact us at: contact@meghaaarika.com",
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <FadeIn>
        <h1
          className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Terms of Use
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
