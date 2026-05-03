import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Business Verticals | Meghaaarika International Private Limited",
  description:
    "Meghaaarika International operates across financial market consulting and renewable energy component trading.",
};

export default function BusinessPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Page heading */}
      <FadeIn>
        <h1
          className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Business Verticals
        </h1>
        <p className="text-[#6B6B6B] text-[16px] leading-relaxed mb-6">
          Meghaaarika International operates across two core areas of business activity.
        </p>
        <hr className="gold-divider-left" />
      </FadeIn>

      {/* Vertical 1 */}
      <FadeIn delay={0.1}>
        <div className="mt-14">
          <h2
            className="text-2xl font-semibold text-[#2D2D2D] mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Financial Market Consulting &amp; Advisory
          </h2>
          <div className="space-y-5 text-[#2D2D2D] text-[16px] leading-[1.85] font-light max-w-2xl">
            <p>
              Meghaaarika International provides broad-based consulting services within the
              financial markets. Our activities encompass a wide range of financial instruments
              and strategic advisory services. We focus on the structural aspects of financial
              markets, including debt and equity consultation and the facilitation of professional
              financial arrangements. Our approach is non-speculative and institutional,
              emphasizing stable consulting frameworks that assist in navigating the complexities
              of the domestic financial environment.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Divider */}
      <hr className="border-[#E5E5E5] my-16" />

      {/* Vertical 2 */}
      <FadeIn delay={0.1}>
        <div>
          <h2
            className="text-2xl font-semibold text-[#2D2D2D] mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Renewable Energy &amp; EV Component Trading
          </h2>
          <div className="space-y-5 text-[#2D2D2D] text-[16px] leading-[1.85] font-light max-w-2xl">
            <p>
              The firm is actively involved in the transition toward sustainable energy through
              its trading operations. Meghaaarika International operates as a B2B supplier of
              essential components utilized in the manufacturing of electric vehicles. By
              streamlining the supply chain for critical electronic and mechanical parts, we
              support the industrial ecosystem responsible for the future of mobility. Our role
              is that of a reliable trading partner, ensuring that manufacturers have access to
              the necessary components required to build the next generation of transportation.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
