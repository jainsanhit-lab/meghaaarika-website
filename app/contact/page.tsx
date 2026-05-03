import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Contact | Meghaaarika International Private Limited",
  description:
    "Corporate office address and contact details for Meghaaarika International Private Limited, New Delhi.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[calc(100vh-64px-180px)] flex flex-col justify-center">
      <FadeIn>
        <h1
          className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Corporate Office
        </h1>
        <hr className="gold-divider-left" />
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-10 space-y-1 text-[#2D2D2D] text-[16px] leading-[1.85]">
          <p className="font-medium">Meghaaarika International Private Limited</p>
          <p className="text-[#6B6B6B]">KH.NO 316/274 UGF BACK SIDE, Western Marg Saidulajab</p>
          <p className="text-[#6B6B6B]">Near Lane No. 3, Delhi 110030</p>
          <p className="text-[#6B6B6B]">Gadaipur, South West Delhi, New Delhi</p>
          <p className="text-[#6B6B6B]">Delhi, India — 110030</p>
          <div className="pt-4">
            <a
              href="mailto:contact@meghaaarika.com"
              className="text-[#B0976D] hover:underline underline-offset-4 transition-colors"
            >
              contact@meghaaarika.com
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
