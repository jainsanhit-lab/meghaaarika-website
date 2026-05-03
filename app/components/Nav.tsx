"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/business", label: "Business" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[17px] font-semibold text-[#2D2D2D] hover:text-[#B0976D] transition-colors"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Meghaaarika International
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-sm pb-0.5 transition-colors ${
                    active
                      ? "text-[#2D2D2D] font-medium"
                      : "text-[#6B6B6B] hover:text-[#2D2D2D]"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B0976D]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="block w-5 h-px bg-[#2D2D2D]" />
            <span className="block w-5 h-px bg-[#2D2D2D]" />
            <span className="block w-5 h-px bg-[#2D2D2D]" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#E5E5E5]">
              <span
                className="text-[17px] font-semibold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Meghaaarika International
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors text-xl leading-none p-2 cursor-pointer"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-8" aria-label="Mobile navigation">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block text-3xl py-3 border-b border-[#E5E5E5] transition-colors ${
                      pathname === href
                        ? "text-[#B0976D]"
                        : "text-[#2D2D2D] hover:text-[#B0976D]"
                    }`}
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
