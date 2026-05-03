import type { Metadata } from "next";
import FadeIn from "./components/FadeIn";

export const metadata: Metadata = {
  title: "Meghaaarika International Private Limited | New Delhi",
  description:
    "Official corporate website of Meghaaarika International Private Limited. Institutional consulting and B2B component trading based in New Delhi, India.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden bg-[#FAFAFA]">
        {/* Subtle dot-grid overlay */}
        <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
          <FadeIn>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#2D2D2D] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Meghaaarika International Private Limited
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-[#6B6B6B] italic leading-relaxed max-w-xl mx-auto">
              A diversified corporate enterprise focused on institutional consulting and strategic trading.
            </p>
            <hr className="gold-divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white px-6 py-20">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2D2D2D] text-[16px] leading-[1.85] font-light">
              Headquartered in New Delhi, Meghaaarika International Private Limited operates at the
              intersection of financial market advisory and essential component trading. Built on a
              foundation of professional excellence and regulatory compliance, the firm serves as a
              stable corporate vehicle for diversified business activities. We prioritize long-term
              institutional value, maintaining a disciplined approach to our core sectors while
              adhering to the highest standards of professional conduct.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Two Verticals Preview */}
      <section className="bg-[#FAFAFA] px-6 py-20">
        <FadeIn>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left card */}
            <div className="bg-white border border-[#E5E5E5] p-10">
              <h3
                className="text-xl font-semibold text-[#2D2D2D] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Financial Market Consulting &amp; Advisory
              </h3>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed">
                Broad-based consulting services within financial markets, encompassing debt and
                equity consultation and strategic advisory for navigating the domestic financial
                environment.
              </p>
            </div>

            {/* Right card */}
            <div className="bg-white border border-[#E5E5E5] p-10">
              <h3
                className="text-xl font-semibold text-[#2D2D2D] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Renewable Energy &amp; EV Component Trading
              </h3>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed">
                B2B supplier of essential components for electric vehicle manufacturing, supporting
                the industrial ecosystem responsible for the future of sustainable mobility.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
