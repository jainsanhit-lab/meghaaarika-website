import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] mt-auto">
      {/* Main 3-column grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left — company name */}
        <div>
          <p
            className="text-white font-semibold text-[15px] mb-1"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Meghaaarika International Private Limited
          </p>
          <p className="text-[#A0A0A0] text-sm">New Delhi, India</p>
        </div>

        {/* Centre — address */}
        <div className="text-[#A0A0A0] text-sm leading-relaxed">
          <p>KH.NO 316/274 UGF BACK SIDE, Western Marg Saidulajab</p>
          <p>Near Lane No. 3, Delhi 110030</p>
          <p>Gadaipur, South West Delhi, New Delhi — 110030</p>
        </div>

        {/* Right — email */}
        <div className="md:text-right">
          <a
            href="mailto:contact@meghaaarika.com"
            className="text-[#A0A0A0] text-sm hover:text-white transition-colors"
          >
            contact@meghaaarika.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#A0A0A0] text-xs">
            © 2025 Meghaaarika International Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#A0A0A0]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
