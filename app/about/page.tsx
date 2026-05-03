import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "About | Meghaaarika International Private Limited",
  description:
    "Learn about the corporate foundation and professional values of Meghaaarika International Private Limited, New Delhi.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <FadeIn>
        <h1
          className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Our Foundation
        </h1>
        <hr className="gold-divider-left" />
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-10 space-y-6 text-[#2D2D2D] text-[16px] leading-[1.85] font-light max-w-2xl">
          <p>
            Meghaaarika International Private Limited was established with a vision to provide a
            structured and professional platform for sophisticated business operations. Based in
            the capital of India, our organization is defined by its commitment to transparency,
            ethical business practices, and operational resilience.
          </p>
          <p>
            We believe that professional pedigree is built through consistency and a conservative
            approach to risk management. Our team brings together diverse expertise to ensure that
            all corporate activities are aligned with the prevailing regulatory frameworks,
            providing a credible and well-established presence in the Indian business landscape.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
